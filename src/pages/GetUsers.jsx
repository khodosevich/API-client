import {Box, Button} from "@mui/material";
import {useEffect, useState} from "react";
import {getUsersAPI} from "../api/methods";
import CardUser from "./CardUser";

const GetUsers = () => {

    const [data,setData] = useState([]);

    const getUsersRequest = async () => {
        try{
            const users = await getUsersAPI()
            setData(users);
        }catch (error){
            console.log(error)
            throw error;
        }
    }

    useEffect(() => {
        getUsersRequest();
    }, []);

    return(
        <Box>
            <Box>
                Get Users
            </Box>
            <Box sx={{
                marginTop:"40px"
            }}>
                <Button onClick={getUsersRequest} variant="contained">click</Button>
            </Box>
            <Box
                sx={{
                    background:"black",
                    padding:"20px",
                    marginTop:"20px"
                }}
            >
                <Box sx={{
                    display:"flex",
                    flexWrap:"wrap",
                    gap:"10px",
                    justifyContent:"center"
                }}>
                    {data.map(x => (
                        <CardUser state={x} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default GetUsers;