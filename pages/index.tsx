import {promises as fsp} from "fs";

import {ExternalLink} from "@/components/ExternalLink";
import type {GetStaticProps, InferGetStaticPropsType} from "next";
import Link from "next/link";

type Dir = {
  name: string;
  children: (string | Dir)[];
};

export const getStaticProps = (async () => {
  const appDir = await buildTree("./app");
  const pagesDir = await buildTree("./pages");

  const dir = mergeDirs(appDir, pagesDir);

  return {
    props: {dir},
  };
}) satisfies GetStaticProps<{
  dir: Dir;
}>;

export default function Page({
  dir,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="p-4 text-2xl leading-normal">
      This is the content repository for{" "}
      <ExternalLink href="https://beta.epiplexis.xyz/">Epiplexis</ExternalLink>.
      You can clone the repository from{" "}
      <ExternalLink href="https://github.com/ysulyma/epiplexis-next">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" className="mr-1 inline h-6 w-6" src="/github.svg" />
        GitHub
      </ExternalLink>
      .
      {/* <pre>
        {JSON.stringify(dir, null, 2)}
      </pre> */}
      <h1 className="my-2 text-3xl">Content</h1>
      <ol className="font-mono">
        {dir.children.map((item) =>
          typeof item === "string" ? null : <Tree key={item.name} dir={item} />,
        )}
      </ol>
    </main>
  );
}

function Tree({dir}: {dir: Dir}) {
  return (
    <li>
      {formatPagesPath(dir.name) + "/"}
      {dir.children.length > 0 && (
        <ol className="ml-8">
          {dir.children.map((item) => {
            if (typeof item === "string") {
              const isAppDir = item.startsWith("./app");
              if (isAppDir && !item.endsWith("page.tsx")) return null;

              return (
                <li key={item}>
                  <Link
                    className="text-blue-600"
                    href={isAppDir ? appHref(item) : pagesHref(item)}
                  >
                    {isAppDir ? formatAppPath(item) : formatPagesPath(item)}
                  </Link>
                </li>
              );
            } else {
              return <Tree key={item.name} dir={item} />;
            }
          })}
        </ol>
      )}
    </li>
  );
}

async function buildTree(dirname: string): Promise<Dir> {
  const files = await fsp.readdir(dirname);
  const dir: Dir = {
    name: dirname,
    children: [],
  };

  for (const file of files) {
    const filename = `${dirname}/${file}`;

    const stat = await fsp.stat(filename);

    if (stat.isDirectory()) {
      dir.children.push(await buildTree(filename));
    } else {
      dir.children.push(filename);
    }
  }

  return dir;
}

function formatAppPath(path: string) {
  return pagesHref(path).split("/").at(-2)!;
}

function formatPagesPath(path: string) {
  return pagesHref(path).split("/").at(-1)!;
}

function appHref(path: string) {
  return path.replace(/^\.\/app/, "").replace(/page\.tsx$/, "");
}

function pagesHref(path: string) {
  return path.replace(/^\.\/pages/, "").replace(/\.tsx$/, "");
}

function mergeDirs(appDir: Dir, pagesDir: Dir): Dir {
  // @todo this is horrible
  const aChildren = dirToMap(appDir);
  const bChildren = dirToMap(pagesDir);

  const c: Dir = {name: normalize(appDir.name), children: []};

  for (const [key, value] of aChildren.entries()) {
    if (typeof value === "string") {
      c.children.push(value);
    } else {
      if (bChildren.has(key)) {
        c.children.push(mergeDirs(value, bChildren.get(key) as Dir));
      } else {
        const page = value.children.find(
          (child) => typeof child === "string" && child.endsWith("page.tsx"),
        );
        if (page) {
          c.children.push(page);
        } else {
          c.children.push(value);
        }
      }
    }
    bChildren.delete(key);
  }

  for (const value of bChildren.values()) {
    if (typeof value === "string") {
      c.children.push(value);
    } else {
      c.children.push({...value, name: normalize(value.name)});
    }
  }

  c.children.sort((a, b) => {
    const keyA = typeof a === "string" ? a : a.name;
    const keyB = typeof b === "string" ? b : b.name;
    return keyA.localeCompare(keyB);
  });

  return c;
}

function dirToMap(dir: Dir) {
  return new Map(
    dir.children.map((child): [string, string | Dir] => {
      if (typeof child === "string") {
        return [normalize(child), normalize(child)];
      }
      return [normalize(child.name), child];
    }),
  );
}

function normalize(path: string) {
  return path.replace(/^\.\/(app|pages)/, ".");
}
