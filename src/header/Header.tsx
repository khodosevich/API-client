import React from 'react';
import {NavLink} from "react-router-dom";
import { List } from '@mui/material';
import links from "./links.json"

const Header = () => {
    return(
        <List
            sx={{
                display: "flex",
                justifyContent: "space-around"
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
    )
}
export default Header;