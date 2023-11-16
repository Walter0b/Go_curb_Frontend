import { useEffect, useRef, useState } from "react"
import * as React from 'react';
import { PaymentModel, InvoiceModel } from '../../model/tables.model';

import Service from "@/service";
import { EndPoints } from "@/endpoint";
import { Loader } from "@/components/loader";
import { randomNumberBetween } from "@mui/x-data-grid/utils/utils";


import { Payment, Invoice, emptyPayment, emptyInvoice } from '@/model/index'
import { FullFeaturedCrudGrid} from '@/components/table/tables_assets'
import { SelectionModal } from '../modal/selectionModal';


const service = new Service<InvoiceModel>(EndPoints.Invoices);


const data: Invoice = {
    "ID": "INV-",
    "Customer_name": "VALENTIN TEST2",
    "Status": "Simbock",
    "Date": "Yaounde",
    "Due_date": "Cameroon",
    "Currency": "ZA565440",
    "Amount": 34534,
    "balance": 30
}

export function Modal({ otherData, setEditClose, isEditClosed, dataToEdit, isViewClose, setViewClose, selectedItems, setSelectedItems }: { selectedItems: any[] ,setSelectedItems:Function, isViewClose:boolean,isEditClosed:boolean,setViewClose: Function ,otherData: Invoice[], setEditClose: Function,  dataToEdit: any | null }){

    //const [formData, setFormData] = useState<CustomerModel>()
    const formRef = useRef()
    const [close, setClose] = useState(isEditClosed)
    const [ErrorMsg, setErrorMsg] = useState({success: false, msg: ""})
    const [editData, setEditData] = useState<any| null>()
    const [isLoading, setIsLoading] = useState(false)

    const [modalrows, setModalRows] = React.useState<Invoice[]>([]); // added rows

    const [viewModal, setViewModal] = useState(isViewClose)
   

    function handleOpen(){
        setClose(isEditClosed)
        setEditData(dataToEdit)
        setErrorMsg({success: false, msg: ""})
    }

    useEffect(()=>{
        handleOpen()
       // console.log(editData);
        
    }, [isEditClosed])

    const handleClose = ()=>{
        setEditData(null)
        setClose (false)
        
        setEditClose(true)
        
    }

    //console.log("selected Modal Row  is : " + modalrows)

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        setIsLoading(true)
        //setLoading(true);
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        console.log(formData.get("Slug"));
        
        formData.forEach((val, key)=>{
            

            const condList = ["Slug", "ID", "Terms", "Id_country", "Id_currency", "Currency_rate", "Already_used"];

            if(condList.includes(key)){
               val = +val
            }
            
            data[key as keyof InvoiceModel] = val
        })

        console.log('query is send');

        if(!data){
            throw Error('no data form')
        }
        

        if(data?.ID){
            service.update(data.ID, data).then((data)=>{
    
                if(!data.response.Success){
                   return  setErrorMsg({success: false, msg:  data.response.Error || 'sonmethings is rong'})
                }
                
                let _data = data.response.Data
                if(!Array.isArray(_data) && _data != undefined){
                    _data = [_data]
                }
    
                console.log(_data);

                setErrorMsg({success: true, msg: data.response.Message})
                
                handleClose()
            })
            .catch((error) =>{
                console.log("error", error)
            }).finally(()=>{
                setIsLoading(false)
            })
        }else{
            service.create(data).then((data)=>{
                console.log(data);
    
                if(!data.response.Success){
                   return setErrorMsg({success: false, msg: data.response.Error || 'sonmethings is wrong'})
                }
                
                let _data = data.response.Data
                if(!Array.isArray(_data) && _data != undefined){
                    _data = [_data]
                }
    
                console.log(_data);
                setErrorMsg({success: true, msg: data.response.Message})
            })
            .catch((error) =>{
                console.log("error", error)
            }).finally(()=>{
                setIsLoading(false)
            })
        }
        
    }


    return <>
       
           <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Edit Invoices</h3>
            <div>
            </div>
            <button type="submit" formAction=" handleClose" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                Add new product
            </button>
            <div/>
            <form action="" className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text"
                            defaultValue={dataToEdit?.Customer_name}
                            name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number"
                            defaultValue={dataToEdit?.Amount}
                            name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number"
                            defaultValue={dataToEdit?.balance}
                            name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option defaultValue = "">Select category</option>
                            <option value="TV">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                        <textarea id="description" rows= {4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                    </div>
                </div>
                
            </form>

            {(!isEditClosed && !isViewClose) && <SelectionModal closeViewMode={setViewClose} closeEditMode={setEditClose} setSelectedRow={setModalRows} selectedRow={null } dataToDisplay={otherData} />}
            <FullFeaturedCrudGrid setEditClose={setEditClose} isEditClose={isEditClosed} datas={selectedItems} setSelectedData={() => null} selectedDatas={null} isViewClose= {isViewClose} setViewClose={setViewClose} />
           
        </div>

        </>
        
}