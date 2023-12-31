import { useApiQuery } from "@api/api";
import { apiEndpoints } from "@api/endpoints";
import TableItem from "@components/table/tableItem";
import { CustomersColumns } from "@utils/models/customer/struc";


export default function Customers() {
    const { data, isLoading, isError } = useApiQuery({ endpoint: apiEndpoints.customers });
    console.log("customer data =", data);
 (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <TableItem data={data.data} columns={CustomersColumns} onEdit={handleEdit} onDelete={handleDelete} />
            )}
        </div>
    );
}

