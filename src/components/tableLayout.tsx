import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Customer from '@/data/pagesData/Customer/CustomerLayout';
import {
    GridRowsProp,
    GridRowModesModel,
    GridRowModes,
    DataGrid,
    GridColDef,
    GridToolbarContainer,
    GridActionsCellItem,
    GridEventListener,
    GridRowId,
    GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { useEffect } from 'react';
import { User, Currency, Country, emptyUser } from '@/models/interfaces';
import { deleteUser, getCountries, getCurrencies, getData, update } from './api/fetchData';



interface EditToolbarProps {
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
    setRowModesModel: (
        newModel: (oldModel: GridRowModesModel) => GridRowModesModel
    ) => void;
}

function EditToolbar(props: EditToolbarProps) {
    const { setRows, setRowModesModel } = props;
    const handleClick = () => {
        // Prompt the user to enter the ID
        const newId = prompt('Enter the new ID:');

        // Check if a valid ID was entered
        if (newId !== null && newId.trim() !== '') {
            // Create a new row with the entered ID and default values
            const newRow = {
                ...emptyUser,
                ID: newId, // Set the ID field to the entered value
            };

            // Update the rows state with the new row
            setRows((oldRows) => [...oldRows, newRow]);

            setRowModesModel((oldModel) => ({
                ...oldModel,
                [newId]: { mode: GridRowModes.Edit, fieldToFocus: 'ID' },
            }));
        }
    };



    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
                Add Customer
            </Button>
        </GridToolbarContainer>
    );
}

export default function FullFeaturedCrudGrid() {
    const [rows, setRows] = React.useState<User[]>([]);
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
    const [currencies, setCurrencies] = React.useState<Currency[]>([]);
    const [countries, setCountries] = React.useState<Country[]>([]);

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
            // Assuming the response is an array of User objects
            const initialNewData = response.data as User[];

            setRows(initialNewData);
        })
            .catch((error) => {
                console.error('API request failed:', error);
            });

    }, []);


    const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
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

    const processRowUpdate = (newRow: User) => {
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

    const columns: GridColDef[] = [
        ...Customer,
        {
            field: 'Id_country',
            headerName: 'Country ID',
            minWidth: 150,
            flex: 1,
            editable: true,
            type: 'singleSelect',
            valueOptions: countries.map((country) => ({ value: country.ID, label: `${country.ID} - ${country.Name}` })),
        },

        {
            field: 'Id_currency',
            headerName: 'Currency ID',
            minWidth: 150,
            flex: 1,
            editable: true,
            type: 'singleSelect',
            valueOptions: currencies.map((currency) => ({ value: currency.ID, label: `${currency.ID} - ${currency.Name}` })),

        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
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
                        />,
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
    ];
    // console.log(rows)
    return (
        <Box
            sx={{
                height: 500,
                width: '100%',
                '& .actions': {
                    color: 'text.secondary',
                },
                '& .textPrimary': {
                    color: 'text.primary',
                },
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
                slots={{
                    toolbar: EditToolbar,
                }}
                slotProps={{
                    toolbar: { setRows, setRowModesModel },
                }}
            />
        </Box>
    );
}
