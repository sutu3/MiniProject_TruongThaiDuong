import Api from './Api'

const url="/relative"

const getAll =()=>{
    return Api.get(url);
}

const getByID =(id)=>{
    return Api.get(`${url}/${id}`);
}

const updateByID =(id,body)=>{
    return Api.put(`${url}/update/${id}`,body);
}

const create =(body)=>{
    return Api.post(`${url}/create`,body);
}

const deleteByID =(id)=>{
    return Api.delete(`${url}/delete/${id}`);
}

const RelativeApi={getAll,getByID,create,deleteByID,updateByID}

export default RelativeApi;