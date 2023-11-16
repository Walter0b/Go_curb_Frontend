
import queryService, { queryServiceOptionsType } from "./__base.service";
import { ResponseModel } from "@/model";

export default class <K> {
    constructor(endPoint: string) {
        this.endpoint = endPoint
        this.queryParam = {
            endpoint: this.endpoint,
        }
    }

    private  queryParam:queryServiceOptionsType<K>;
    public endpoint: string  = '/';

    private query(){
        return queryService(this.queryParam)
    }

    public create(data: K): Promise<ResponseModel<K>>{
        this.queryParam =   {
            ...this.queryParam,
            method: "POST",
            //headers: {},
            body: data,
        }
        return this.query()
    }

    public getAll(): Promise<ResponseModel<K>>{
        return this.query()
    }

    public findOne(id: number): Promise<ResponseModel<K>>{
        this.queryParam = {
            endpoint: this.endpoint+`/${id}`,
        }
        return this.query()
    }

    public update(id: number, data: Partial<K>): Promise<ResponseModel<K>>{
        this.queryParam = {
            endpoint: this.endpoint+`/${id}`,
            method: `PUT`,
            body: data
        }
        console.log(this.endpoint+`/${id}`);
        
        return this.query()
    }

    public delete(id: number): Promise<ResponseModel<K>>{
        this.queryParam = {
            endpoint: this.endpoint+`/${id}`,
            method: `DELETE`
        }
        return this.query()
    }
}