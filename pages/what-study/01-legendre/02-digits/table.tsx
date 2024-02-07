// @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

import {range} from "@liqvid/utils/misc";
import {useState} from "react";

/**
 * The minimum number that can be chosen by the user.
 */
const min = 1;

/**
 * The maximum number that can be chosen by the user.
 */
const max = 100;

/**
 * The maximum number of rows per table.
 */
const maxRowsPerTable = 9;

const Th = (props: React.HTMLProps<HTMLTableHeaderCellElement>) => (
  <th className="px-4 py-2" {...props} />
);

const Td = (props: React.HTMLProps<HTMLTableCellElement>) => (
  <td className="px-4 py-2 text-right" {...props} />
);

export default function Table() {
  const [number, setNumber] = useState(42);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value));
  };

  // Group the bases into tables with at most `maxRowsPerTable` rows.
  const tables = range(2, 36).reduce((tables, base, index) => {
    // If the index is a multiple of the maximum number of rows per table,
    // create a new table.
    if (index % maxRowsPerTable === 0) {
      tables.push([]);
    }

    // Add the current base to the current table.
    tables[tables.length - 1].push(base);

    return tables;
  }, [] as number[][]);

  return (
    <main>
      <p>
        Choose a number between {min} and {max} to see its representation in
        different bases.
      </p>
      <fieldset className="mx-auto my-4 flex w-fit">
        <input
          type="range"
          min={min}
          max={max}
          value={number}
          onChange={onChange}
        />
        <input
          className="ml-4 w-16 text-right"
          type="number"
          min={min}
          max={max}
          value={number}
          onChange={onChange}
        />
      </fieldset>
      <div className="mx-auto my-4 flex w-fit justify-between gap-8">
        {tables.map((table, index) => (
          <table
            className="border border-solid border-gray-200 dark:border-gray-800"
            key={index}
          >
            <thead className="bg-gray-100 dark:bg-stone-700">
              <tr>
                <Th>Base</Th>
                <Th>Representation</Th>
              </tr>
            </thead>
            <tbody>
              {table.map((base) => (
                <tr
                  className="even:bg-gray-100 dark:even:bg-stone-700"
                  key={base}
                >
                  <Td>{base}</Td>
                  <Td>{number.toString(base)}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </main>
  );
}
