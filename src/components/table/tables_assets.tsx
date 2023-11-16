import * as React from 'react';
import { useEffect, useRef, useState } from "react"
import { Box, Button } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';



import {
    GridRowsProp,
    GridRowModesModel,
    GridRowModes,
    DataGrid,
    GridColDef,
    //GridToolbarContainer,
    GridActionsCellItem,
    GridEventListener,
    GridRowId,
    GridRowEditStopReasons,
    useGridApiRef
} from '@mui/x-data-grid';


import { Payment, Invoice, emptyPayment, emptyInvoice } from '@/model/index'
import { InvoiceTable } from '@/datas/Invoice'
import { Modal } from '../modal/editionModal';
import { useContext } from 'react'
import { CheckBox } from '@mui/icons-material';

function TableMenuOnEdit(onClose: () => void, ViewClose: () => void) {

    const [editData, setEditData] = useState<any>()

    function handleOpenModal() {
        onClose()
        ViewClose()
        setEditData(null)
    }

    return <>
        
        <div>
            <Button color="primary" startIcon={<AddIcon />} onClick={handleOpenModal}>
                Add Item
            </Button>
            <Button color="primary" startIcon={<AddIcon />} onClick={handleOpenModal}>
                Edit Item
            </Button>
            <Button color="primary" startIcon={<AddIcon />} onClick={handleOpenModal}>
                Edit Item
            </Button>


        </div>
    </>;
}

function TableMenuOnView( setViewClose: Function) {
    //console.log("edit Mode" + editMode) 
    //Passer en view mode
    
    
    function handleOpenViewModal() {
        setViewClose(false)
        //setEditData(null)
    }
    return <>
        <Button color="primary" startIcon={<AddIcon />} onClick={handleOpenViewModal}>
            Add a Booking
        </Button>
    </>;
}

function FullFeaturedCrudGrid({ setEditClose, isEditClose, setViewClose, isViewClose, datas, selectedDatas, setSelectedData }: { selectedDatas:any[]|null,isViewClose : boolean, setViewClose:Function, setEditClose: Function, isEditClose: boolean, datas: any[], setSelectedData: Function}) {
  
    const [rows, setRows] = React.useState<any[]>(datas);
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

    const [closeModal, setCloseModal] = useState(isEditClose)
    const [editData, setEditData] = useState<any>()
    

    function handleOpenModal() {
        setEditClose(false)
        setEditData(null)
    }

    const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id : GridRowId) => () => {
        //setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });

        const item = rows?.find((item) => item.ID === id)
        setSelectedData(item)
        handleOpenModal()

    };

    const handleSaveClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id: GridRowId) => () => {
        setRows(rows.filter((row) => row.ID !== id));
        if (id) {
            deleteUser(id as number)
                .then((response) => {
                    console.log('Data deleted:', response);
                })
                .catch((error) => {
                    console.error('Failed to delete data:', error);
                });
        }
    };

    const handleCancelClick = (id: GridRowId) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.ID === id);
        if (editedRow) {
            setRows(rows.filter((row) => row.ID !== id));
        }
    };

    const processRowUpdate = (newRow: any) => {
        setRows((rows) => rows.map((row) => (row.ID === newRow.ID ? newRow : row)));
        update(newRow)
            .then((response) => {
                console.log('Data saved:', response);
            })
            .catch((error) => {
                console.error('Failed to save data:', error);
            });
        return newRow;
    };


    const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel);
    
    };
    const actionColumn: GridColDef[] = [
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
            
    ]
    
    let columns: GridColDef[] =[]
    {
        isEditClose ? 
            columns = [...InvoiceTable, ...actionColumn]
         :
            columns = [...InvoiceTable]
}
    // changement d entetes true = Edition / false = Visualisation
    //TableMenuOnEdit(onClose, () => setViewModal(false))
        return <>
            {closeModal ?
                <Button color="primary" startIcon={<AddIcon />} onClick={handleOpenModal}>
                    Add Item
                </Button>
                :
                TableMenuOnView(setViewClose)
            }

            <Box
                sx={{
                    height: 500,
                    width: '100%',
                    '& .actions': {
                        color: 'text.secondary',
                    },
                    '& .textPrimary': {
                        color: 'text.primary',
                    }
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    getRowId={(row) => row.ID}
                    
                    
                
                />
            </Box>

        </>
                
   

}


export { FullFeaturedCrudGrid };