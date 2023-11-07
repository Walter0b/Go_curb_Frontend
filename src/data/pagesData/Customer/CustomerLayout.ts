import { GridColDef } from '@mui/x-data-grid';

const Customer: GridColDef[] = [
  {
    field: 'ID',
    headerName: 'ID',
    minWidth: 90,
    flex: 1,
    editable: true,
    type: 'number'
  },
  {
    field: 'Customer_name',
    headerName: 'Name',
    minWidth: 250,
    flex: 1,
    editable: true,
    type: 'string'
  },
  {
    field: 'Street',
    headerName: 'Street',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'string'
  },
  {
    field: 'City',
    headerName: 'City',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'string'
  },
  {
    field: 'State',
    headerName: 'State',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'string'
  },
  {
    field: 'Zip_code',
    headerName: 'Zip code',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'string'
  },
  {
    field: 'Notes',
    headerName: 'Notes',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'string'
  },
  {
    field: 'Terms',
    headerName: 'Terms',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'number'
  },
  {
    field: 'Account_number',
    headerName: 'Account number',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'string'
  },
  {
    field: 'Tax_id',
    headerName: 'Tax ID',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'string'
  },
  {
    field: 'Balance',
    headerName: 'Balance',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'string'
  },
  {
    field: 'Is_active',
    headerName: 'Active',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'boolean'
  },
  {
    field: 'Is_sub_agency',
    headerName: 'Sub Agency',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'boolean'
  },
  {
    field: 'Language',
    headerName: 'Language',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'singleSelect',
    valueOptions: [
      { value: 'fr', label: 'French' },
      { value: 'en', label: 'English' },
    ],
  },
  {
    field: 'Slug',
    headerName: 'Slug',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'number'
  },

  {
    field: 'Irs_share_key',
    headerName: 'Irs share key',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'string'
  },
  {
    field: 'Currency_rate',
    headerName: 'Currency rate',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'number'
  },
  {
    field: 'Agency',
    headerName: 'Agency',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'string'
  },
  {
    field: 'Avoid_deletion',
    headerName: 'Avoid Deletion',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'boolean'
  }, {
    field: 'Is_editable',
    headerName: 'Editable',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'boolean'
  },
  {
    field: 'Alias',
    headerName: 'Alias',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'string'
  },
  {
    field: 'Already_used',
    headerName: 'Already used',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'number'
  },
  {
    field: 'Ab_key',
    headerName: 'Ab key',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'string'
  },
  {
    field: 'Tmc_client_number',
    headerName: 'TMC client number',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'string'
  },
  {
    field: 'isEditing',
    headerName: 'Editing',
    minWidth: 150,
    flex: 1,
    editable: true,
    type: 'boolean',
  },

];



export default Customer;
