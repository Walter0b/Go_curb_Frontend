
const TableSkeleton = ({ row }: { row: number }) => {
  const rows = [];
  const column = [];

  for (let i = 0; i < row; i++) {
    rows.push(
      <tr key={`row-${i}`}>
        <td className="py-4 px-4">
          <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700"></div>
        </td>
        <td className="py-4 px-4">
          <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700"></div>
        </td>
        <td className="py-4 px-4">
          <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700"></div>
        </td>
        <td className="py-4 px-4">
          <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700"></div>
        </td>
        <td className="py-4 px-4">
          <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700"></div>
        </td>
        <td className="py-4 px-4">
          <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700"></div>
        </td>
      </tr>,
    );
  }

  for (let i = 0; i < 6; i++) {
    column.push(
      <th key={`column-${i}`} className="">
        <div className="my-1 ml-1 w-3/4 h-4 bg-gray-300 dark:bg-gray-700"></div>
      </th>,
    );
  }

  return (

    <div className=' overscroll-none justify-center items-center p-12'>
      <div className="items-center justify-between pb-4 bg-white p-4 dark:bg-gray-900">
        <div className='flex gap-4'></div>
        <div className="rounded-2xl border-none bg-white transition-c-0.5 dark:bg-[#111827] no-scrollbar overflow-x-auto border-gray-300 dark:border-gray-700 shadow-md">
          <div className="animate-pulse">
            <div className="w-full h-12 bg-gray-300 dark:bg-gray-700"></div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                <thead className="p-2">
                  <tr>{column}</tr>
                </thead>
                <tbody className="bg-white dark:dark:bg-[#111827] divide-y divide-gray-300 dark:divide-gray-700">
                  {rows}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
