import React, { useEffect, useState } from 'react';
import { getData, getCountries, getCurrencies, update, deleteUser, save } from "./api/customer";
import { UserData, User, Currency, Country, emptyUser, NewRowDataClone } from './models/interfaces';
import { columns } from "./models/struct";
import TableSkeleton from './components/skeleton/tableSkeleton';
import EditIcon from '../public/svg/edit';
import DeleteIcon from '../public/svg/delete';
import VisibleIcon from '../public/svg/visible';


function Table() {

  const [newData, setNewData] = useState<UserData[]>([]);
  const dropdownColumns = ['Id_currency', 'Id_country'];
  const [isAdding, setIsAdding] = useState(false);
  const [data, setData] = useState<User[]>([]);
  const [isCheckedAll, setCheckedAll] = useState(false);
  const [isHovered, setHovered] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [newRowData, setNewRowData] = useState<User>(emptyUser);
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    getCurrencies().then((response) => {
      // Assuming the response is an array of currency objects with id and name properties
      setCurrencies(response.data);
    })
      .catch((error) => {
        console.error('Failed to fetch currency data:', error);
      });

    // Fetch country data
    getCountries().then((response) => {
      // Assuming the response is an array of country objects with id and name properties
      setCountries(response.data);
    })
      .catch((error) => {
        console.error('Failed to fetch country data:', error);
      });

    //setNewData(data)
    getData().then((response) => {
      // Handle the response data
      const initialNewData = response.data.map((item: User) => ({
        id: item.ID,
        isClicked: false,
        isEditing: false,
      }));

      setNewData(initialNewData);
      // console.log('Data received:', response);
      setLoading(false)
      setData(response.data);
    })
      .catch((error) => {
        console.error('API request failed:', error);
      });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleEdit = (userId: number): void => {
    setData((prevData) =>
      prevData.map((user) =>
        user.ID === userId ? { ...user, isEditing: !user.isEditing } : user
      )
    );
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    userId: number,
    key: string
  ): void => {
    const { value } = event.target;
    setData((prevData) =>
      prevData.map((user) =>
        user.ID === userId ? { ...user, [key]: value } : user
      )
    );
  };

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleCancelClick = () => {
    setIsAdding(false);
    // Clear the input fields
    setNewRowData(emptyUser);
  };

  const handleAddRow = () => {
    // Clone newRowData to avoid modifying the original state directly
    const newRowDataClone: NewRowDataClone = { ...newRowData };

    // Iterate through the newRowDataClone object
    for (const key in newRowDataClone) {
      const column = columns.find((col) => col.key === key);
      if (column && column.type === 'number') {
        newRowDataClone[key] = parseInt(newRowDataClone[key] as string, 10); // Parse as an integer
      }
    }

    // Validate newRowDataClone and handle any validation logic here
    if (newRowDataClone?.Customer_name && newRowDataClone.Street) {
      save(newRowDataClone)
        .then((response) => {
          // Handle the response from the server, if needed
          console.log('Data added:', response);
          // Add the new data to local state if the API request was successful
          setData((prevData) => [...prevData, newRowDataClone]);
          // Reset newRowData to clear the input fields
          setNewRowData(emptyUser);
        })
        .catch((error) => {
          console.error('Failed to add data:', error);
        });
      setIsAdding(false);
    }
  };


  const handleEditUser = (userId: number): void => {
    const editedUser = data.find((user) => user.ID === userId);
    if (editedUser) {
      update(editedUser)
        .then((response) => {
          // Handle the response from the server, if needed
          console.log('Data saved:', response);
          setData((prevData) =>
            prevData.map((user) =>
              user.ID === userId ? { ...user, isEditing: !user.isEditing } : user
            )
          );
        })
        .catch((error) => {
          console.error('Failed to save data:', error);
        });
    }
  };

  const filteredData = data.filter((item) =>
    item.Customer_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (userId: number): void => {
    const user = data.find((user) => user.ID === userId);
    if (user) {
      deleteUser(user)
        .then((response) => {
          console.log('Data deleted:', response);
          // Filter the data to exclude the deleted user
          const updatedData = data.filter((user) => user.ID !== userId);
          // Update the state variable with the filtered data
          setData(updatedData);
        })
        .catch((error) => {
          console.error('Failed to delete data:', error);
        });
    }
  };
  if (loading) return <TableSkeleton row={10} />
  return (
    <div className='overscroll-none justify-center items-center p-12'>
      <div className="relative overflow-x-auto overscroll-none shadow-md sm:rounded-lg">
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
              // onClick={}
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
        <div className='table-container overflow-x-auto overscroll-none max-h-[35rem]'>
          <table className=" table w-fit text-sm text-left  text-gray-500 dark:text-gray-400">
            <thead className="text-xs sticky top-0 z-10 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col w-1/3" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      checked={isCheckedAll}
                      className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
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
                  // column.label !=== "Is Active"
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
              {isAdding && (
                <tr className={`bg-white dark:bg-gray-800 border-b dark:border-gray-700`}>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-table-search-${newRowData?.ID}`}
                        type="checkbox"
                        checked={newData.find((user) => user.id === newRowData?.ID)?.isClicked || false}
                        className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                        onChange={() => {
                          const updatedNewData = newData.map((user) =>
                            user.id === newRowData?.ID
                              ? { ...user, isClicked: !(user.isClicked || false) }
                              : user
                          );
                          setNewData(updatedNewData);
                        }}
                      />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </td>
                  {columns.map((column) => (
                    <td className="px-6 py-4" key={column.key}>
                      {dropdownColumns.includes(column.key) ? (
                        <select className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                          name={column.key}
                          value={newRowData[column.key as keyof User] as string}
                          onChange={(e) =>
                            setNewRowData({ ...newRowData, [column.key]: e.target.value })
                          }
                        >
                          {column.key === 'Id_currency' ? (
                            currencies.map((currency) => (
                              <option key={currency.ID} value={currency.ID}>
                                {`${currency.ID} - ${currency.Name}`}
                              </option>
                            ))
                          ) : (
                            countries.map((country) => (
                              <option key={country.ID} value={country.ID}>
                                {`${country.ID} - ${country.Name}`}
                              </option>
                            ))
                          )}
                        </select>
                      ) : (
                        <input
                          type="text"
                          name={column.key}
                          value={newRowData[column.key as keyof User].toString()}

                          onChange={(e) =>
                            setNewRowData({ ...newRowData, [column.key]: e.target.value })
                          }
                          className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" + (column.key == "ID" && ' max-w-[4rem]')}
                        />
                      )}
                    </td>
                  ))}

                  <td
                    className={`${isHovered === newRowData?.ID
                      ? 'bg-gray-50 dark:bg-gray-600'
                      : 'bg-white dark:bg-gray-800'
                      } border-b dark:!border-gray-700 px-6 py-4 sticky right-0  border-gray-300  `}
                  >
                    <div className='flex gap-4 '>
                      <button onClick={handleAddRow} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Add
                      </button>
                      <button onClick={handleCancelClick} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              )}
              {filteredData.map((item: User) => (
                <tr
                  key={item.ID}
                  onMouseOver={() => setHovered(item.ID)}
                  className={`${item.isEditing ? 'bg-gray-500' : 'bg-white dark:bg-gray-800'
                    } border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-table-search-${item.ID}`}
                        type="checkbox"
                        className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
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
                      {item.isEditing ? (
                        // Check if the column key is in the dropdownColumns array
                        dropdownColumns.includes(column.key) ? (
                          <select
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            name={column.key}
                            value={item[column.key as keyof User] as string}
                            onChange={(e) => handleInputChange(e, item.ID, column.key)}
                          >
                            {column.key === 'Id_currency' ? (
                              currencies.map((currency) => (
                                <option key={currency.ID} value={currency.ID}>
                                  {`${currency.ID} - ${currency.Name}`}
                                </option>
                              ))
                            ) : (
                              countries.map((country) => (
                                <option key={country.ID} value={country.ID}>
                                  {`${country.ID} - ${country.Name}`}
                                </option>
                              ))
                            )}
                          </select>
                        ) : (
                          // Render input fields for other columns
                          <input
                            type="text"
                            name={column.key}
                            value={item[column.key as keyof User].toString()}
                            onChange={(e) => handleInputChange(e, item.ID, column.key)}
                            className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" + (column.key == "ID" && ' max-w-[4rem]')}
                          />
                        )
                      ) : (
                        // Display the selected value for non-dropdown columns
                        item[column.key as keyof User]
                      )}
                    </td>
                  ))}
                  <td className={`${isHovered === item.ID ? 'bg-gray-50 dark:bg-gray-600' : 'bg-white dark:bg-gray-800'
                    } border-b dark:!border-gray-700 px-6 py-4 sticky right-0  border-gray-300  `}>
                    <div className='flex gap-4 '>
                      {item.isEditing ? (
                        <button
                          onClick={() => handleEditUser(item.ID)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Save
                        </button>

                      ) : (
                        <button
                          onClick={() => handleEdit(item.ID)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <EditIcon></EditIcon>
                        </button>

                      )}
                      <button
                        onClick={() => handleEdit(item.ID)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <VisibleIcon />
                      </button>
                      <button
                        onClick={() => handleDelete(item.ID)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <DeleteIcon />
                      </button>
                    </div>


                  </td>

                </tr>
              ))}
              {/* Table content */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
