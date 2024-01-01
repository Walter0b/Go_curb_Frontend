import TableItem from "./tableItem";

export const Table = () => {
    const data = [
        { ID: 1, Customer_name: 'John Doe', City: 'New York', /* ... other fields ... */ },
        { ID: 2, Customer_name: 'Jane Doe', City: 'Los Angeles', /* ... other fields ... */ },
    ];

    const columns = [
        { key: 'ID', label: 'ID' },
        { key: 'Customer_name', label: 'Customer Name' },
        { key: 'City', label: 'City' },
    ];

    const handleEdit = (item: unknown) => {
        console.log('Edit', item);
    };

    const handleDelete = (item: unknown) => {
        console.log('Delete', item);
    };

    return (
        <TableItem data={data} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />
    );
};

export default Table;
