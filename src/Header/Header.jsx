import {NavLink} from "react-router-dom";

import links from "./links.json"

const Header = () => {

    return(
        <ul
            style={{
                display:"flex",
                justifyContent:"space-around"
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
        </ul>
    )
}

export default Header;