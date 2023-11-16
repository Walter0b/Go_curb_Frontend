import { GridColDef } from '@mui/x-data-grid';

export const InvoiceTable: GridColDef[] = [
  {
    field: 'ID',
    headerName: 'ID',
    minWidth: 90,
    flex: 1,
    editable: false,
    type: 'string'
  },
  {
    field: 'Customer_name',
    headerName: 'Client',
    minWidth: 100,
    flex: 1,
    editable: false,
    type: 'string'
  },
  {
    field: 'Date',
    headerName: 'Date',
    minWidth: 125,
    flex: 1,
    editable: false,
    type: 'string'
  },
  {
    field: 'Status',
    headerName: 'Statut',
    minWidth: 100,
    flex: 1,
    editable: false,
    type: 'string'
  },
  {
    field: 'Due_date',
    headerName: 'Date Echeance',
    minWidth: 125,
    flex: 1,
    editable: false,
    type: 'string'
  },
  {
    field: 'Currency',
    headerName: 'FCY',
    minWidth: 125,
    flex: 1,
    editable: false,
    type: 'string'
  },
  {
    field: 'Amount',
    headerName: 'Montant',
    minWidth: 100,
    flex: 1,
    editable: false,
    type: 'string'
  },
  
  {
    field: 'balance',
    headerName: 'Solde a Payer',
    minWidth: 100,
    flex: 1,
    editable: false,
    type: 'number'
  }
  
  

];




