import {Card} from "antd";

const CardUser = ( props ) =>{

    return(
        <Card key={props.id} size="small" title={props.state.username} extra={<a href="src/pages/GetUsers#">More</a>} style={{ width: 300 }}>
            <p>Age is {props.state.age}</p>
            <p>ID is {props.state.id}</p>
        </Card>
    )
}

export default CardUser;