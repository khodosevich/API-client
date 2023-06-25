import {Box, Button} from "@mui/material";
import {Card} from "antd";
import {useEffect, useState} from "react";
import {GetUsersAPI} from "../api/methods";

const GetUsers = () => {

    const [data,setData] = useState([]);

    const getUsersRequest = async () => {
        try{
            const users = await GetUsersAPI()
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
                        <Card key={x.id} size="small" title={x.username} extra={<a href="src/pages/GetUsers#">More</a>} style={{ width: 300 }}>
                            <p>Age is {x.age}</p>
                            <p>ID is {x.id}</p>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default GetUsers;