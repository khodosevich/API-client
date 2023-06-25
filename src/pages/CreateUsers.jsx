import {Box, Button, TextField} from "@mui/material";
import axios from "axios";
import {useState} from "react";
import {CreateUserAPI} from "../api/methods";


const CreateUsers = () => {

    const [user,setUser] = useState({name:"" , age:""});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    let PostRequestOnCreateUser = async () => {

        try{
            await CreateUserAPI(user);
            setUser({ name: "", age: "" });
        }catch (error){
            console.log(error);
            throw error;
        }
    }

    return (
        <Box>
            Create Users
            <Box sx={{ marginTop: "20px" }}>
                <TextField
                    name="name"
                    label="Name"
                    value={user.name}
                    onChange={handleInputChange}
                />
            </Box>
            <Box sx={{ marginTop: "20px" }}>
                <TextField
                    name="age"
                    label="Age"
                    value={user.age}
                    onChange={handleInputChange}
                />
            </Box>
            <Box sx={{ marginTop: "20px" }}>
                <Button onClick={PostRequestOnCreateUser} variant="contained">
                    Create User
                </Button>
            </Box>
        </Box>
    );
};

export default CreateUsers;