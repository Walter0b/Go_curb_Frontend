import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

interface User {
  ID: number,
  Customer_name: string,
  Street: string,
  City: string,
  State: string,
  Zip_code: string,
  Notes: string,
  Terms: number,
  Account_number: string,
  Tax_id: string,
  Balance: string,
  Is_active: boolean,
  Is_sub_agency: boolean,
  Language: string,
  Slug: number,
  Id_currency: number,
  Id_country: number,
  Irs_share_key: string,
  Currency_rate: number,
  Agency: string,
  Avoid_deletion: boolean,
  Is_editable: boolean,
  Alias: string,
  Already_used: number,
  Ab_key: string,
  Tmc_client_number: string,
  isEditing: boolean
}
interface userData {
  id: number;
  isClicked: boolean;
  isEditing: boolean;
}
interface Currency {
  ID: number;
  Name: string;
}

interface Country {
  ID: number;
  Name: string;
}


function App() {

  const [newData, setNewData] = useState<userData[]>([]);
  const dropdownColumns = ['Id_currency', 'Id_country'];

  useEffect(() => {
    axios.get('http://localhost:8080/Currencies')
      .then((response) => {
        // Assuming the response is an array of currency objects with id and name properties
        setCurrencies(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch currency data:', error);
      });

    // Fetch country data
    axios.get('http://localhost:8080/Countries')
      .then((response) => {
        // Assuming the response is an array of country objects with id and name properties
        setCountries(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch country data:', error);
      });

    axios.get('http://localhost:8080')
      .then((response) => {
        // Handle the response data
        const initialNewData = response.data.map((item: { id: string }) => ({
          id: item.id,
          isClicked: false,
          isEditing: false,
        }));
        setNewData(initialNewData);
        // console.log('Data received:', response);
        setData(response.data);
      })
      .catch((error) => {
        console.error('API request failed:', error);
      });
  }, []);

  const [data, setData] = useState<User[]>([]);

  const [isCheckedAll, setCheckedAll] = useState(false);
  const [isHovered, setHovered] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  // console.log(currencies)

  const columns = [
    { key: 'ID', label: 'id' },
    { key: 'Customer_name', label: 'Name' },
    { key: 'Street', label: 'Street' },
    { key: 'City', label: 'City' },
    { key: 'State', label: 'State' },
    { key: 'Zip_code', label: 'Zip Code' },
    { key: 'Notes', label: 'Notes' },
    { key: 'Terms', label: 'Terms' },
    { key: 'Account_number', label: 'Account Number' },
    { key: 'Tax_id', label: 'Tax ID' },
    { key: 'Balance', label: 'Balance' },
    { key: 'Is_active', label: 'Is Active' },
    { key: 'Is_sub_agency', label: 'Is Sub Agency' },
    { key: 'Language', label: 'Language' },
    { key: 'Slug', label: 'Slug' },
    { key: 'Id_currency', label: 'Currency ID' },
    { key: 'Id_country', label: 'Country ID' },
    { key: 'Irs_share_key', label: 'IRS Share Key' },
    { key: 'Currency_rate', label: 'Currency Rate' },
    { key: 'Agency', label: 'Agency' },
    { key: 'Avoid_deletion', label: 'Avoid Deletion' },
    { key: 'Is_editable', label: 'Is Editable' },
    { key: 'Alias', label: 'Alias' },
    { key: 'Already_used', label: 'Already Used' },
    { key: 'Ab_key', label: 'AB Key' },
    { key: 'Tmc_client_number', label: 'TMC Client Number' },
  ];

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


  const handleSave = (userId: number): void => {
    const editedUser = data.find((user) => user.ID === userId);
    if (editedUser) {
      const editedData = {
        id: editedUser.ID,
        customer_name: editedUser.Customer_name,
        street: editedUser.Street,
        city: editedUser.City,
        state: editedUser.State,
        zip_code: editedUser.Zip_code,
        notes: editedUser.Notes,
        terms: editedUser.Terms,
        account_number: editedUser.Account_number,
        tax_id: editedUser.Tax_id,
        balance: editedUser.Balance,
        is_active: editedUser.Is_active,
        is_sub_agency: editedUser.Is_sub_agency,
        Language: editedUser.Language,
        slug: editedUser.Slug,
        id_currency: editedUser.Id_currency,
        id_country: editedUser.Id_country,
        irs_share_key: editedUser.Irs_share_key,
        currency_rate: editedUser.Currency_rate,
        agency: editedUser.Agency,
        avoid_deletion: editedUser.Avoid_deletion,
        is_editable: editedUser.Is_editable,
        alias: editedUser.Alias,
        already_used: editedUser.Already_used,
        ab_key: editedUser.Ab_key,
        tmc_client_number: editedUser.Tmc_client_number,

      };

      axios
        .put(`http://localhost:8080/customer?id=${editedUser.ID}`, editedData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          // Handle the response from the server, if needed
          console.log('Data saved:', response);
        })
        .catch((error) => {
          console.error('Failed to save data:', error);
        });

      // You can also update the user's edit mode after successfully saving the data
      handleEdit(userId);
    }
  };

  const filteredData = data.filter((item) =>
    item.Customer_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (userId: number): void => {
    const deleteUser = data.find((user) => user.ID === userId);
    if (deleteUser) {
      axios.delete(`http://localhost:8080/customer/${deleteUser.ID}`)
        .then((response) => {
          console.log('Data deleted:', response);
        })
        .catch((error) => {
          console.error('Failed to delete data:', error);
        });
    }
  };

  return (
    <div className='flex overscroll-none justify-center items-center p-12'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-4 bg-white p-4 dark:bg-gray-900">
          <div className='flex gap-4'>
            {/* Buttons and dropdowns here */}
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
                        setCheckedAll(!isCheckedAll);
                        setData((prevData) =>
                          prevData.map((user) => ({
                            ...user,
                            isChecked: !isCheckedAll,
                          }))
                        );
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
              {filteredData.map((item: User) => (
                <tr
                  key={item.ID}
                  onMouseOver={() => setHovered(item.ID)}
                  className={`${item.isEditing ? 'bg-gray-100' : 'bg-white dark:bg-gray-800'
                    } border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
                >
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
                      {item.isEditing ? (
                        // Check if the column key is in the dropdownColumns array
                        dropdownColumns.includes(column.key) ? (
                          <select
                            name={column.key}
                            value={item[column.key as keyof User]}
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
                            className=""
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
                          onClick={() => handleSave(item.ID)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEdit(item.ID)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleEdit(item.ID)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        visiblity
                      </button>
                      <button
                        onClick={() => handleDelete(item.ID)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        delete
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

export default App;
