import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:5001/api/"
})

export const deleteUserByIdAPI = async (userID) => {
    try{
        const response = await api.delete( "/user/delete",{
            data: {
                id:userID
            }
        });
        console.log(response);
        return response;
    }catch (error){
        console.log(error);
        throw error;
    }
}

export const getUserByIdAPI = async (userID) => {

    try {
        const response = await api.get("/user/getUserById",{ params: {id:userID} });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getUsersAPI = async () => {

    try{
        const response = await api.get(  "/user/getUsers");
        console.log(response.data);
        return response.data;
    }catch (error){
        console.log(error);
        throw error;
    }
}

export const getCounterAPI = async () => {

    try{
        const response = await api.get(  "/getRequestsCount");
        console.log(response.data);
        return response.data;
    }catch (error){
        console.log(error);
        throw error;
    }
}

export const createUserAPI =  async (user) => {
    try{
        const response = await api.post("/user/createUser", {
                username:user.name,
                age:user.age
            })
        console.log(response.data);
        alert("all is good");
    }catch (error){
        console.log(error);
        throw error;
    }
}