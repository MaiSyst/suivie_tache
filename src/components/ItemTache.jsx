/* eslint-disable react/prop-types */
import {Badge, ListGroup,Button} from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
const ItemTache = ({title,subtitle,index,onHandleRemove}) => {
 return (
   <>
     <ListGroup.Item
       as="li"
       style={{
         display: "flex",
         flexDirection: "row",
         justifyContent: "start",
         alignItems: "center",
         backgroundColor: "rgba(235,235,235)",
         padding: 10,
         borderRadius: 10,
         marginBottom: 10,
         marginTop: 20,
         boxShadow: "0 5px 3px 2px rgba(0,0,0,0.1)",
       }}
     >
       <Badge style={{ fontSize: 20, fontWeight: "bold", marginRight: 20 }}>
         {index + 1}
       </Badge>
       <div
         className="ms-2 me-auto"
         style={{
           color: "grey",
           marginInline: 20,
           display: "flex",
           justifyContent: "start",
           flexDirection: "column",
           alignItems: "start",
         }}
       >
         <div
           className="fw-bold"
           style={{
             fontSize: 25,
             color: "black",
           }}
         >
           {title}
         </div>
         {subtitle}
       </div>
       <Button onClick={onHandleRemove} className="btn-danger">
         <Trash />
       </Button>
     </ListGroup.Item>
   </>
 );
};

export default ItemTache;