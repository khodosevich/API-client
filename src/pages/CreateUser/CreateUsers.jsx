import {Box, Button, TextField} from "@mui/material";
import axios from "axios";
import {useState} from "react";


const CreateUsers = (props) => {

    const [user,setUser] = useState({name:"" , age:""});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    let PostRequestOnCreateUser = () => {

        axios.post("http://localhost:5001/api/user/createUser", {
                username:user.name,
                age:user.age
        })
            .then(response => {
                console.log(response.data);
                setUser({ name: "", age: "" });
            })
            .catch(error => {
                console.error(error);
            });
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