import { TableValueProps } from "@/types";

export default function Table({ value }: { value: TableValueProps }) {
  const { caption, table } = value;
  const tableContent = table?.rows;

  if (!tableContent || tableContent.length < 1) {
    return <p>Table Data Missing</p>;
  }

  const [tableHeading, ...tableBody] = tableContent.map((t) => t.cells);

  if (!tableHeading || tableBody.length < 1) {
    return <p>Table must have at least one cell.</p>;
  }

  return (
    <div className="overflow-x-auto -mx-4 xs:-mx-3 sm:mx-0">
      <table className="border dark:border-zinc-800 border-zinc-200 w-full text-xs xs:text-sm sm:text-base my-3 xs:my-4 sm:my-5 md:my-6">
        {caption && (
          <caption className="text-sm xs:text-base sm:text-lg font-incognito font-medium my-1">
            {caption}
          </caption>
        )}
        <thead className="bg-zinc-50 dark:bg-[#141414] border-b dark:border-zinc-800 border-zinc-200 text-left">
          <tr className="divide-x divide-zinc-200 dark:divide-zinc-800">
            {tableHeading.map((heading) => (
              <th
                key={heading}
                scope="col"
                className="font-medium text-xs xs:text-sm sm:text-base font-incognito px-1.5 xs:px-2 sm:px-3 py-2 xs:py-2.5"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((row, index) => (
            <tr
              key={index}
              className="divide-x divide-zinc-200 dark:divide-zinc-800 border dark:border-zinc-800 border-zinc-200"
            >
              {row.map((cell) => (
                <td key={cell} className="px-1.5 xs:px-2 sm:px-3 py-2 xs:py-2.5 text-xs sm:text-sm">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
