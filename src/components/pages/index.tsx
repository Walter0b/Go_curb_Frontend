import { EndPoints } from '@/endpoint'
import { useEffect, useState } from 'react'
import Service from "@/service"
import { CustomerModel } from '../../model/tables.model';
import { Modal } from '../modal/editionModal';
import {Loader} from '../loader'

const service = new Service<CustomerModel>(EndPoints.customer);




function TBodyItems({data, onEdit, onDelete} : {data: CustomerModel[] | undefined, onEdit: (id: number | undefined) => void, onDelete: (id: number | undefined) => void}){


    return data?.map((item, key)=> {
            return <>
                        <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-2 py-2">
                                {item.ID}
                            </td>
                            <td className="px-2 py-2" >
                                {item.Customer_name}
                            </td>
                            <td className="px-2 py-2">
                                {item.Street}
                            </td>
                            <td className="px-2 py-2">
                                {item.City}
                            </td>
                            <td className="px-2 py-2">
                                {item.State}
                            </td>
                            <td className="px-2 py-2">
                                {item.Zip_code}
                            </td>
                            <td className="px-2 py-2">
                                {item.Notes}
                            </td>
                            <td className="px-2 py-2">
                                {item.Terms}
                            </td>
                            <td className="px-2 py-2">
                                {item.Account_number}
                            </td>

                            <td className="px-2 py-2 space-x-3">
                                <a onClick={() => onEdit(item.ID)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Edit</a>
                                <a onClick={() => onDelete(item.ID)} className="font-medium text-red-600  hover:underline cursor-pointer">Delete</a>
                            </td>
                        </tr>
                    </>
        })
}

function TheadItems({columns} : {columns: string[]}){
    
    return <tr>
                {
                    columns.map((title, key)=> <th key={key} scope="col" className="px-2 py-3">{title}</th>)
                }
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
    
}


function Table() {
    
    const [data, setData] = useState<CustomerModel[]>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [, setError] = useState(null)

    function fetchData() {
        // You can await here
        service.getAll().then((data)=>{
            console.log(data);
            
            let _data = data.response.Data
            if(!Array.isArray(_data) && _data != undefined){
                _data = [_data]
            }

            console.log(_data);
            
            setData(_data);
        }).catch((error) => setError(error) )
        .finally(()=>{
            setIsLoading(false)
        })

       
        
    }
  
    useEffect( () => {
        fetchData();
    }, [])

    //console.log(data);
    

    function handleFilter(event) {
        
        const key_word = event.target.value.trim().toLowerCase()
        if(key_word && key_word !== ''){

            const newData = data?.filter((row: CustomerModel) => {
            
                return row.Customer_name.toLowerCase().includes(key_word)

            })

            setData(newData )

        }else{
            
            fetchData();
        }
        
    }

    const [editData, setEditData] = useState<CustomerModel | null>(null)

    function handleEdit(id: number){
        const item = data?.find((item) => item.ID === id)

        item && setEditData(item)

        setCloseModal(false)
    }

    function handleDelete(id: number){
        service.delete(id)
        .then(({response}) =>{
            console.log(response);
            const newData = data?.filter(item => item.ID !== id)
            setData(newData)
        })
        .catch((er) => er)
        
    }

    const [closeModal, setCloseModal] = useState(true)

    function handleOpenModal(){
        setCloseModal(false)
        setEditData(null)
    }


    const columns = [ 
        "ID",
        "customer name",
        "Street",
        "City",
        "State",
        "Zip code",
        "Notes",
        "Terms",
        "Account number",
    ]

    return (
        <>
        
            <div className=" container mt-5">

                <Modal onClose={()=>setCloseModal(true)} isClosed={closeModal} dataToEdit={editData} loading={isLoading}/>
                <Loader isLoading={isLoading} />

                <div className='flex justify-between'>
                    <div className='my-2'>
                        <button onClick={handleOpenModal} className=" text-lg border text-white p-1 bg-primary-400 rounded-md hover:bg-primary-500 focus:bg-primary-500 ">New</button>
                    </div>
                    <div className="text-end my-2">
                        <input type="text" placeholder = "Search" onChange={handleFilter} />
                    </div>
                </div>
                {/* <DataTable
                columns={columns}
                data={data || []} 
                selectableRows
                pagination
                fixedHeader
                progressPending={isLoading}
                highlightOnHover
                pointerOnHover/> */}
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-2 border-primary-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                            <TheadItems columns={columns}  />
                        </thead>
                        <tbody>
                            <TBodyItems data={data} onDelete ={handleDelete} onEdit ={handleEdit} />
                        </tbody>
                    </table>
                    <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
                        <ul className="inline-flex -space-x-px text-sm h-8">
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Table
