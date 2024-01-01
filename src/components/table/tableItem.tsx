import { useState } from 'react';
import Pagination from './pagination';
import { openModal } from '@store/actions';
import { useDispatch } from 'react-redux';
interface DataTableProps<T> {
  data: T[];
  columns: Column[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}
interface Column {
  key: string;
  label: string;
}

export function TableItem<T>({ data, columns, onEdit, onDelete }: DataTableProps<T>) {
  const dispatch = useDispatch();
  const [isCheckedAll, setCheckedAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

const handleCloseModal = () => {
  dispatch(openModal());
};


  const [searchTerm, setSearchTerm] = useState('');

  const handleCheckboxAllChange = () => {
    const allChecked = !isCheckedAll;
    setCheckedAll(allChecked);

    // Update the state of individual checkboxes based on the state of checkbox-all
    const updatedCheckedItems: Record<string, boolean> = {};
    data.forEach((_, index) => {
      updatedCheckedItems[index.toString()] = allChecked;
    });
    setCheckedItems(updatedCheckedItems);
  };


  const handleCheckboxChange = (index: number) => {

    const updatedCheckedItems = { ...checkedItems, [index.toString()]: !checkedItems[index.toString()] };
    setCheckedItems(updatedCheckedItems);
    console.log(updatedCheckedItems)
    // Check if all individual checkboxes are checked
    const allChecked = Object.values(updatedCheckedItems).every((isChecked) => isChecked);
    !(Object.values(updatedCheckedItems).length == 1) && setCheckedAll(allChecked);
  };




  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };



  return (
    <div className='flex flex-col overscroll-none items-center p-12'>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-4 bg-white p-4 dark:bg-gray-900">
          <div className='flex gap-4'>
            {/* Buttons and dropdowns here */}
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">

              Filter
              <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
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
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" onClick={handleCloseModal} className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">

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
          <table className="table w-fit text-sm text-left text-gray-500 dark:text-gray-400">
            {/* Table header */}
            <thead className="text-xs sticky top-0 z-10 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col w-1/3" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      checked={isCheckedAll}
                      onChange={handleCheckboxAllChange}
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </th>
                {columns.map((column: Column) => (
                  <th key={column.key} scope="col" className="px-6 py-3">
                    {column.label}
                  </th>
                ))}
                <th scope="col" className="px-6 py-3 sticky right-0 text-center bg-gray-50 dark:bg-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {data.map((item: T, index: number) => (

                <tr
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'
                    } border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-${index}`}
                        type="checkbox"
                        checked={checkedItems[index.toString()] || false}
                        onChange={() => handleCheckboxChange(index)}
                      />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </td>
                  {columns.map((column) => (
                    <td key={column.key} className="px-6 py-4">
                      {(item as never)[column.key]}
                    </td>
                  ))}
                  <td className="px-6 py-4 sticky right-0 border-b dark:!border-gray-700">
                    <div className="flex gap-4">
                      {onEdit && (
                        <button onClick={() => onEdit(item)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Edit
                        </button>
                      )}
                      {onDelete && (
                        <button onClick={() => onDelete(item)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex w-full flex-row-reverse  items-end'>
        <Pagination currentPage={0} totalPages={0} onPageChange={function (page: number): void {
          throw new Error('Function not implemented.');
        }}></Pagination>
      </div>
    </div>
  );
}

export default TableItem;