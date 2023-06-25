import {Box, Button} from "@mui/material";
import axios from "axios";
import {Card} from "antd";
import {useEffect, useState} from "react";

const GetUsers = () => {

    const [data,setData] = useState([]);

    useEffect(() => {
        getUsersRequest();
    }, []);

    let getUsersRequest = () => {
        axios.get("http://localhost:5001/api/user/getUsers")
            .then(res => {
                console.log(res)
                setData(res.data);
            })
            .catch(e => {console.log(e)})
    }

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
                        <Card key={x.id} size="small" title={x.username} extra={<a href="#">More</a>} style={{ width: 300 }}>
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