import React from 'react';
import {NavLink} from "react-router-dom";
import {Box, List} from '@mui/material';
import links from "./links.json"

const Header = () => {
    return(
        <Box sx={{margin:"20px 0" }}>
            <List
                sx={{
                    display: "flex",
                    justifyContent: "space-between",

                }}
            >
                {links.map(x => (
                    <NavLink
                        style={{
                            textDecoration:"none",
                            color:"black",
                        }}
                        to={x.link}>{x.name}</NavLink>
                ))}
            </List>
        </Box>
    )
}
export default Header;