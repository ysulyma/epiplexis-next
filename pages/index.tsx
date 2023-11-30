import {promises as fsp} from "fs";

import type {GetStaticProps, InferGetStaticPropsType} from "next";
import Link from "next/link";

type Dir = {
  name: string;
  children: (string | Dir)[];
};

export const getStaticProps = (async () => {
  const dir = await buildTree("./pages");
  return {props: {dir}};
}) satisfies GetStaticProps<{
  dir: Dir;
}>;

export default function Page({
  dir,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="p-4 text-2xl leading-normal">
      <h2 className="my-2 text-3xl">Content</h2>
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
      {formatPath(dir.name) + "/"}
      {dir.children.length > 0 && (
        <ol className="ml-8">
          {dir.children.map((item) => {
            if (typeof item === "string") {
              return (
                <li key={item}>
                  <Link className="text-blue-600" href={href(item)}>
                    {formatPath(item)}
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

function formatPath(path: string) {
  return href(path).split("/").at(-1)!;
}

function href(path: string) {
  return path.replace("./pages", "").replace(/\.tsx$/, "");
}
