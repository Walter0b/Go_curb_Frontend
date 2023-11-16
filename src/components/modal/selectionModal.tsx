import { useState } from "react"
import * as React from 'react';
import { Payment, Invoice, emptyPayment, emptyInvoice } from '@/model/index'
import { FullFeaturedCrudGrid } from '@/components/table/tables_assets'
import {
   
    useGridApiRef
} from '@mui/x-data-grid';

export function SelectionModal({ dataToDisplay, closeViewMode, closeEditMode, selectedRow, setSelectedRow }: { selectedRow: any[] | null, dataToDisplay: Invoice[], closeViewMode: Function, closeEditMode: Function, setSelectedRow:Function } ){
    const apiRef = useGridApiRef() 
   
    
    //const [viewModal, setViewModal] = useState(view)

    //const [viewMode, setViewMode] = useState(onviewMode)
    function handleCloseModal() {
        closeViewMode(true)
        closeEditMode(false)

    } 
    function handleSubmit() {
        closeViewMode(true)
        closeEditMode(false)
        //setSelectedRow(apiRef.current.getSelectedRows)
        console.log("selected Row  is : " + apiRef.current.getSelectedRows)

    } 


    const data: Invoice = {
        "ID": "INV-",
        "Customer_name": "melanie",
        "Status": "Simbock",
        "Date": "Yaounde",
        "Due_date": "yaounde",
        "Currency": "ZA565440",
        "Amount": 34534,
        "balance": 30
    }
    const [rows, setRows] = React.useState<Invoice[]>([data]);
    

    return <>



        <div id="small-modal" className={'fixed top-0 left-0 right-0 z-50 w-full flex flex-col justify-center items-center overflow-x-hidden overflow-y-hidden md:inset-0 h-[calc(100%-1rem)] max-h-full '} >
            <div className="relative  w-full max-w-lg max-h-full">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-center justify-between p-2 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Select an Item
                        </h3>
                        <button type="button"
                            onClick={handleCloseModal}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="small-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-4 space-y-6 overflow-y-auto sup-md:max-h-[calc(500px-1rem)] lg:max-h-[calc(500px-1rem)]">
                        <FullFeaturedCrudGrid setEditClose={() => true} isEditClose datas={dataToDisplay} setViewClose={()=>null} isViewClose setSelectedData={setSelectedRow} selectedDatas={null}/>
                        
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button onClick={handleSubmit} data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajouter a la facture</button>
                            <button onClick={handleCloseModal} data-modal-hide="default-modal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Annuler</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>
    
}