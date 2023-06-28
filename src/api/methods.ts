import axios from "axios";

type UserId = number | null

export type UserType = {
    username: string,
    id?: UserId,
    age: number
}

const api = axios.create({
    baseURL: "http://localhost:5001/api/"
})

export const method = {
    async deleteUserByIdAPI(userID: UserId) {
        try{
            const response = await api.delete( "/user/delete",{
                data: {
                    id: userID
                }
            });
            console.log(response);
            return response;
        }catch (error){
            console.log(error);
            throw error;
        }
    },
    async getUserByIdAPI(userID: UserId) {
        try {
            const response = await api.get("/user/getUserById",{ params: {id: userID} });
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    async getUsersAPI() {
        try {
            const response = await api.get("/user/getUsers");

            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    async getCounterAPI() {
        try{
            const response = await api.get(  "/getRequestsCount");
            console.log(response.data);
            return response.data;
        }catch (error){
            console.log(error);
            throw error;
        }
    },
    async createUserAPI(user: { name: string , age: string }) {
        try{
            await api.post("/user/createUser", 
            {
                username: user.name,
                age: user.age
            })
        } catch (error){
            console.log(error);
            throw error;
        }
    }
} 