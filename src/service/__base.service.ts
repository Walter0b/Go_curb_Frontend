export type queryServiceOptionsType<T> = {
    endpoint: string
    headers?: HeadersInit
    body?: Partial<T> | T
    method?: "POST"|"GET"|"DELETE"|"PATCH"| "PUT"
}
const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;

export default async function   queryService<K>(param: queryServiceOptionsType<K>){
    const base_url = baseUrl + param.endpoint
    return await fetch(
        base_url,
        {
            headers: {
                'Content-Type': 'application/json',
                ...param.headers,
            },
            body: JSON.stringify(param.body),
            method: param.method
        },
    )
    .then((response)=> response.json())
    .catch(err => err)
}