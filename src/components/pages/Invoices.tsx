import * as React from 'react';
import { FullFeaturedCrudGrid} from '@/components/table/tables_assets'
import { useState } from 'react'

//import { EditInvoice } from '../modal/InvoiceEdition';
import { Modal } from '../modal/editionModal';

import { Payment, Invoice, emptyPayment, emptyInvoice } from '@/model/index'

export function Invoices({ invoices, travels, isClosedModal, setcloseModal, isSearchModalClose, setSearchModalClose, selectedItems, setSelectedItems }: { selectedItems: any[], setSelectedItems:Function,setSearchModalClose:Function ,isSearchModalClose: boolean,invoices: Invoice[], travels: Invoice[], isClosedModal: boolean, setcloseModal :Function}) {
    
   

/*
    const [rows, setRows] = React.useState<Invoice[]>(invoices);
    const [closeModal, setCloseModal] = useState(true)
    const [viewMode, setViewMode] = useState(true)
    

    // const [editData, setEditData] = useState<any>(null) (elt: any) => setSelectedRow(elt)*/
    //const [selectedRow, setSelectedRow] = React.useState<Invoice[]>([]);
    
    console.log("Edit Modal is Close  : " + isClosedModal)
   
    console.log(" Search Modal  is Close : " + isSearchModalClose)
    //console.log("selected Row  is : " + selectedItems)
    
    return <>
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">INVOICES</h3>
            {isClosedModal ?
                <FullFeaturedCrudGrid setEditClose={setcloseModal} isEditClose={isClosedModal} datas={invoices} setSelectedData={setSelectedItems} selectedDatas={selectedItems} isViewClose= {isSearchModalClose} setViewClose={setSearchModalClose}  />
                :
                <Modal otherData={travels} setEditClose={setcloseModal} isEditClosed={isClosedModal} dataToEdit={selectedItems} isViewClose={isSearchModalClose} setViewClose={setSearchModalClose}  selectedItems ={[]} setSelectedItems={setSelectedItems} />
                 
            }
           
           
            
        </div>
    </>

}