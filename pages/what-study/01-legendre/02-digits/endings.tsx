import {KTX} from "@/components/KTX";
import {range} from "@liqvid/utils/misc";
import React from "react";

const Th = (props: React.HTMLProps<HTMLTableCellElement>) => (
  <th
    className="bg-stone-500 px-4 py-2 text-right dark:bg-stone-700"
    {...props}
  />
);

const Td = (props: React.HTMLProps<HTMLTableCellElement>) => (
  <td className="mono px-4 py-2 text-right" {...props} />
);

export default function Endings() {
  return (
    <main>
      <div className="mx-auto flex max-w-lg justify-between">
        <Table nums={range(0, 5)} />
        <Table nums={range(5, 10)} />
      </div>
    </main>
  );
}

function Table({nums}: {nums: number[]}) {
  return (
    <table>
      <thead>
        <tr>
          <Th>Base 10</Th>
          <Th>Base 2</Th>
          <Th>Base 5</Th>
        </tr>
      </thead>
      <tbody>
        {nums.map((n) => (
          <tr key={n}>
            <Td>
              <KTX>{n.toString(10)}</KTX>
            </Td>
            <Td>
              <KTX>{n.toString(2)}</KTX>
            </Td>
            <Td>
              <KTX>{n.toString(5)}</KTX>
            </Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
