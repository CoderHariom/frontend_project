import { useState,useRef } from "react";


function AddTodo({ addData }) {
  //const [nameinput, setNameinput] = useState("");
  //const [dateinput, setDateinput] = useState("");

  const nameRef =useRef();
  const dateRef =useRef();
  

  //const changeName = (e) => {
   // setNameinput(e.target.value);}
  //const changeDate = (e) => {
    //setDateinput(e.target.value);}

  const handleAddData = () => {
    const nameinput=nameRef.current.value;
    const dateinput=dateRef.current.value;
    addData(nameinput, dateinput);
    nameRef.current.value='';
    dateRef.current.value='';

    //setNameinput();
    //setDateinput();

  }

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" 
           ref={nameRef}
            
          //onChange={changeName} 
          />
        </div>

        <div className="col-4">
          <input type="date"  ref={dateRef} 
          //onChange={changeDate}
           />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={handleAddData}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;