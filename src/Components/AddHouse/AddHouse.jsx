import{useState} from "react"
import axios from "axios"
export const AddHouse = (props) => {

 const[formdata,setFormdata] =useState({
 name:"",
 ownerName:"",
 address:"",
 areaCode:"",
 rent:"",
 image:"",
 });

 const handleChange=(e)=>{

  const{className,value} =e.target;
  setFormdata({...formdata ,[className]:value})
 }

 const handleSubmit =(e)=>{
   e.preventDefault()
   axios.post("http://localhost:8080/houses",formdata).then(()=>{
     alert("useer updated in our data")
     setFormdata({
      name:"",
      ownerName:"",
      address:"",
      areaCode:"",
      rent:"",
      image:"",

     })

   })

   
 }


  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" onChange={handleChange} value={formdata.name} required />
        <br />
        <label>ownerName</label>
        <input value={formdata.ownerName} onChange={handleChange} type="text" className="ownerName" required />
        <br />
        <label>address</label>
        <input value={formdata.address} onChange={handleChange} type="text" className="address" required />
        <br />
        <label>areaCode</label>
        <input value={formdata.areaCode} onChange={handleChange} type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input value={formdata.rent} onChange={handleChange} type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={""} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input checked={""} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};