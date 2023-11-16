// import { useEffect, useState } from 'react';
// import Service from "@/service"

// type fnName = "findOne"| "getAll" | "update" | "delete" | "create"

// function ApiChecker<T>(endpoint: string, fnName: fnName, ){

//     const [data, setData] = useState<T | null>(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const servive = new Service<T>(endpoint)

//     const fetchData =async () => {
        
//         setIsLoading(true);

//         try {
//             let  _data = null
//             if(fnName === "getAll"){
//                 _data = (await servive.getAll()).response
//             }
//             else if(fnName === "create"){
//                 _data = (await servive.create()).response
//             }
//             else if(fnName === "findOne"){
//                 _data = (await servive.findOne()).response
//             }
//             else if(fnName === "update"){
//                 _data = (await servive.update()).response
//             }
//             else if(fnName === "delete"){
//                 _data = (await servive.delete()).response
//             }
            

//             setData(_data)
//         } catch (error) {
//             setError(error)
//         }

//         setIsLoading(false);
//     }

//     useEffect(()=> {fetchData()})

//     return {data, isLoading, error}

// }


// export function  getAll<T>() {
        
//     return ApiChecker<T>("getAll")
// }

// export function  findOne<T>() {
        
//     return ApiChecker<T>("findOne")
// }

// export function  create<T>() {
        
//     return ApiChecker<T>("create")
// }

// export function  update<T>() {
        
//     return ApiChecker<T>("update")
// }

// export function  Delete<T>() {
        
//     return ApiChecker<T>("delete")
// }