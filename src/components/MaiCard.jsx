/* eslint-disable react/prop-types */
import {useState} from 'react';
import { Plus } from "react-bootstrap-icons";
import MaiButton from "./MaiButton";
import TextField from "./TextField";
import {Card, ListGroup, Table} from 'react-bootstrap';
import ItemTache from './ItemTache';
const MaiCard=({title})=>{
  const [date,setDate]=useState("");
  const [tache,setTache]=useState("");
  const [data,setData]=useState([]);
  const onHandleAdd=()=>{
    if (date.trim() === "" || tache.trim() === "") {
      alert("Veuillez reverifier les champs.");
    } else {
      setData([...data,{title:tache,date:date,id:Math.round(Math.random()*1000)}])
      setDate("");
      setTache("");
    }
  }
  const onHandleRemove=(id)=>{
    let response=confirm("Etes vous sur de supprimer?");
    if(response){
      setData((prev) => prev.filter(item=>item.id!==id));
    }
  }
    return (
      <Card
        style={{
          borderRadius: 10,
          width: "80vw",
          height: "100%",
        }}
      >
        <Card.Header>
          <h1>{title}</h1>
        </Card.Header>
        <Card.Body>
          <Table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Tache</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <TextField
                    type={"datetime-local"}
                    value={date}
                    placeholder={"Date"}
                    onChange={(e) => setDate(e)}
                  />
                </td>
                <td>
                  <TextField
                    type={"text"}
                    value={tache}
                    placeholder={"Tache"}
                    onChange={(e) => setTache(e)}
                  />
                </td>
                <td>
                  <MaiButton
                    icon={<Plus />}
                    label={"Ajouter"}
                    onClick={onHandleAdd}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <ListGroup>
            {data.length == 0 ? (
              <h1>Accune Tache</h1>
            ) : (
              data.map((item,index) => (
                <ItemTache
                  onHandleRemove={() => onHandleRemove(item.id)}
                  key={item.id}
                  index={index}
                  title={item.title}
                  subtitle={item.date}
                />
              ))
            )}
          </ListGroup>
        </Card.Body>
      </Card>
    );
}

export default MaiCard;