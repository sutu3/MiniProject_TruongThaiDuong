import Api from './Api'

const url="/department"

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

const DepartmentApi={getAll,getByID,create,deleteByID,updateByID}

export default DepartmentApi;