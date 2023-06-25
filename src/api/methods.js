import axios from "axios";

const url =" http://localhost:5001/api";

export const DeleteUserByIdAPI = async (userID) => {
    try{
        const response = await axios.delete(url + "/user/delete",{
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

export const GetUserByIdAPI = async (userID) => {

    try {
        const response = await axios.get(url + `/user/getUserById?id=${userID}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const GetUsersAPI = async () => {

    try{
        const response = await axios.get(url + "/user/getUsers");
        console.log(response.data);
        return response.data;
    }catch (error){
        console.log(error);
        throw error;
    }
}

export const GetCounterAPI = async () => {

    try{
        const response = await axios.get(url + "/getRequestsCount");
        console.log(response.data);
        return response.data;
    }catch (error){
        console.log(error);
        throw error;
    }
}

export const CreateUserAPI =  async (user) => {
    try{
        const response = await axios.post("http://localhost:5001/api/user/createUser", {
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