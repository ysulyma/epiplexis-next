import {promises as fsp} from "fs";

import type {GetStaticProps, InferGetStaticPropsType} from "next";
import Link from "next/link";

type Filetree = string[];

export const getStaticProps = (async () => {
  const files = await fsp.readdir("pages");
  return {props: {files}};
}) satisfies GetStaticProps<{
  files: Filetree;
}>;

export default function Page({
  files,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ol>
      {files.map((file) => (
        <li key={file}>
          <Link href={`/${file}`}>{file}</Link>
        </li>
      ))}
    </ol>
  );
}
