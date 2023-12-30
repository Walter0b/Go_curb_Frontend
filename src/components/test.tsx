// In some component file

import { useApiQuery } from "../api/api";
import { apiEndpoints } from "../api/endpoints";

const MyComponent = () => {
    const { data, isLoading, isError } = useApiQuery({ endpoint: apiEndpoints.users });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }
    console.log(data);

    // Render your component using the fetched data
};

export default MyComponent;
