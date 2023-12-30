import { columns } from '@utils/models/customer/struc';
import { userData, User } from '@utils/models/customer/interface';
import { useState } from 'react';


export function TableItem(data: unknown) {

  const [newData, setNewData] = useState<userData[]>([]);

  const [isCheckedAll, setCheckedAll] = useState(false);
  const [isHovered, setHovered] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };




  const handleAddClick = () => {
    console.log('handleAddClick')
  };


  console.log(newData)
  return (
    <div className='flex flex-col overscroll-none items-center p-12'>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-4 bg-white p-4 dark:bg-gray-900">
          <div className='flex gap-4'>
            {/* Buttons and dropdowns here */}
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">

              Filter
              <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            {/* ... */}
            {/* Delete Button here */}
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" 
            // onClick={() => handleDelete}
             className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">

              Delete

            </button>
            {/* ... */}
            {/* Add Customer Button here */}
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" onClick={handleAddClick} className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">

              Add Customer

            </button>
            {/* ... */}
          </div>
          {/* Search here */}
          <label className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {/* Search icon */}
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className='table-container overflow-x-auto overscroll-none' style={{ maxHeight: '400px' }}>
          <table className=" table w-fit text-sm text-left  text-gray-500 dark:text-gray-400">
            <thead className="text-xs sticky top-0 z-10 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col w-1/3" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      checked={isCheckedAll}
                      onChange={() => {
                        const updatedData = newData.map((user) => ({
                          ...user,
                          isClicked: !isCheckedAll,
                        }));
                        setNewData(updatedData);
                        setCheckedAll(!isCheckedAll);
                      }}
                    />

                    <label className="sr-only">checkbox</label>
                  </div>
                </th>
                {columns.map((column) => (
                  <th scope="col" className="px-6 py-3" key={column.key}>
                    {column.label}
                  </th>
                ))}
                <th scope="col" className="px-6 py-3 sticky right-0 text-center bg-gray-50 dark:bg-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className=''>
              {/* Table content */}

              {data.map((item: User) => (
                <tr
                  key={item.ID}
                  onMouseOver={() => setHovered(item.ID)}
                  className= 'bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-table-search-${item.ID}`}
                        type="checkbox"
                        checked={(newData.find((user) => user.id === item.ID)?.isClicked || false) as boolean}
                        onChange={() => {
                          const updatedNewData = newData.map((user) =>
                            user.id === item.ID
                              ? { ...user, isClicked: !(user.isClicked || false) }
                              : user
                          );
                          setNewData(updatedNewData);
                          isCheckedAll && setCheckedAll(false);
                        }}
                      />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </td>
                  {columns.map((column) => (
                    <td className="px-6 py-4" key={column.key}>
                      {(
                        // Display the selected value for non-dropdown columns
                        item[column.key as keyof User]
                      )}
                    </td>
                  ))}
                  <td className={`${isHovered === item.ID ? 'bg-gray-50 dark:bg-gray-600' : 'bg-white dark:bg-gray-800'
                    } border-b dark:!border-gray-700 px-6 py-4 sticky right-0  border-gray-300  `}>
                    <div className='flex gap-4 '>
                      {(
                        <button
                          // onClick={()}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        // onClick={()}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        visiblity
                      </button>
                      <button
                        // onClick={() => handleDelete(item.ID)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        delete
                      </button>
                    </div>


                  </td>

                </tr>
              ))}
  
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className='flex w-full flex-row-reverse  items-end'>
        <Pagination currentPage={0} totalPages={0} onPageChange={function (page: number): void {
          throw new Error('Function not implemented.');
        }}></Pagination>
      </div> */}
    </div>
  );
}

export default TableItem;