import {range} from "@liqvid/utils/misc";

import {BaseTable} from "./endings";

export default function Endings() {
  return (
    <main>
      <div className="mx-auto flex max-w-lg justify-between">
        <BaseTable bases={[10, 2, 4]} nums={range(0, 5)} />
        <BaseTable bases={[10, 2, 4]} nums={range(5, 10)} />
      </div>
    </main>
  );
}
