
import { Payment, Invoice, emptyPayment, emptyInvoice } from '@/model/index'
import * as React from 'react';
import { FullFeaturedCrudGrid } from '@/components/table/tables_assets'
import { useState } from 'react'
import { Modal } from '../modal/editionModal';

export function Payments({ payments, isClosedModal, unpaidInvoices, setcloseModal }: { setcloseModal:Function,unpaidInvoices: Invoice[], payments: Invoice[], isClosedModal :boolean}) {
    
    const [closeModal, setCloseModal] = useState(true)
    const [viewMode, setViewMode] = useState(true)
    const [selectedRow, setSelectedRow] = React.useState<Invoice[]>();

    const data: Invoice[] = [
        {
            "ID": "INV-",
            "Customer_name": "VALENTIN TEST2",
            "Status": "Simbock",
            "Date": "Yaounde",
            "Due_date": "Cameroon",
            "Currency": "ZA565440",
            "Amount": 34534,
            "balance": 30
        },
        {
            "ID": "INV-jhj",
            "Customer_name": "orlisni",
            "Status": "Simbjkbjkock",
            "Date": "Yaounde",
            "Due_date": "Cameroon",
            "Currency": "ZAgfgu",
            "Amount": 34534,
            "balance": 30
        },

    ]
    const [rows, setRows] = React.useState<Invoice[]>(data);
    // const [editData, setEditData] = useState<any>(null)

    console.log("Close Edit Modal : " + closeModal)

    console.log("Close Search Modal : " + viewMode)
    return <>
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">CUSTOMERS PAYMENTS</h3>
            
            {closeModal ?
                <FullFeaturedCrudGrid onClose={setcloseModal} isClosed={isClosedModal} datas={rows} selectedData={(elt: any) => setSelectedRow(elt)} onViewClose={() => setViewMode(true)} viewIsClosed />
                :
                <Modal otherData={unpaidInvoices} onClose={setcloseModal} isClosed={isClosedModal} dataToEdit={selectedRow} viewMode={viewMode} viewOpen={() => setViewMode(false)} viewClose={() => setViewMode(true)} />
            }
            
        </div>
    </>
}