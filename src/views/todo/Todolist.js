import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { getTodos, addtodo, deletetodo, edittodo } from './action';
function Todolist() {

  const hobbyList=useSelector(state => state.hobby.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  },[]);

const [value,setValue] = useState('');
const [valueEdit, setValueEdit] = useState({});
const [edituserobj,setedituserobj]=useState({});
const [changeedit,setchangeedit]=useState(false);

// console.log(valueEdit)

const handleAddTodo = (value) => {
  
  if(value){
    dispatch(addtodo(value));
  }
  setValue('')
}
const deleteuser=(iduser)=>{
  // console.log(iduser)
  if(iduser){
    dispatch(deletetodo(iduser))
  }
}


const getedituser=(userobj)=>{
  // console.log(userobj)
  setedituserobj(userobj)

  setchangeedit(!changeedit)
}
const ichangegetEdit=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
  setValueEdit({[name]:value}) 
}
const saveBottom=()=>{
  const info={};
  info.id=edituserobj.id;
  info.name=valueEdit.name;
  // console.log(info)
  
  dispatch(edittodo(info))

   setchangeedit(!changeedit)
}

const showFormEdit=()=>{
  if(changeedit === true){

  return (
    <>
      <input type="text" name='name' onChange={(event)=> ichangegetEdit(event)} defaultValue={edituserobj.name}/>
      <input type="button"className="btn btn-secondary" onClick={(user)=>saveBottom(user)} value="save"/>
    </>
  )
  }
}

const changedituserstatus=()=>{
    setchangeedit(!changeedit)
  }
    return (
        <div>
          <h1>Trần Văn Hiệp</h1>

          <input  onChange={(e) => setValue(e.target.value)} value={value} type="text"/>
          <button onClick={() => handleAddTodo(value)} type="button" className=" btn-outline-primary">ADD</button>
          <ul>
            {showFormEdit()}
          {hobbyList.map((item,key) =>(
                <li key={key}>
                     {item.name}
                <button onClick={()=>deleteuser(item.id)}>Delete</button>
                <button onClick={()=>getedituser(item)}>edit</button>
                </li> 
                
                ))}
            </ul>
        </div>
    )
}

export default Todolist;
