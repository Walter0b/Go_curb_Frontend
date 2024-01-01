// Customers.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useApiQuery } from "@api/api";
import { apiEndpoints } from "@api/endpoints";
import TableItem from "@components/table/tableItem";
import { CustomerFields, CustomersColumns } from "@utils/models/customer/struc";
import { FormData } from '@utils/models/struc';

import { closeModal, openModal, setFormData } from '@store/actions';
import Modal from '@components/modal';

interface DataTableState {
    isModalOpen: boolean;
    formData: FormData;
}
interface RootState {
    dataTable: DataTableState;
}

export default function Customers() {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.dataTable?.isModalOpen);
    const formData = useSelector((state: RootState) => state.dataTable?.formData) ?? {} as FormData;
    const authOverlayRef = React.useRef<HTMLDivElement>(null);

    // Fetch customers data
    const { data, isLoading } = useApiQuery({ endpoint: apiEndpoints.customers });

    const handleEdit = (item: FormData) => {
        dispatch(setFormData(item));
        dispatch(openModal());
    };


    const handleDelete = (item: FormData) => {
        console.log('Delete', item);
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <TableItem data={data.data} columns={CustomersColumns} onEdit={handleEdit} onDelete={handleDelete} />
            )}

            <Modal authOverlayRef={authOverlayRef}
                isModalOpen={isModalOpen}
                handleFormClick={handleCloseModal}
                fields={CustomerFields}
                formData={formData}  />
        </div>
    );
}
