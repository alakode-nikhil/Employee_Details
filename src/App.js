import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [data,setData] = useState([]);

  useEffect(() =>{
    axios
    .get('http://127.0.0.1:8000/create-employee/')
    .then((response)=>{
      setData(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[]);

  return (
    <div className="container-fluid m-auto p-5" style={{backgroundColor:'black'}}>
      <h2 className="text-center" style={{color:'white',fontWeight:'bold'}}>Team Members</h2>
      <div className="row">
        {
          data.map((item)=>(
            <div className="card m-5 col-3" key={item.id}>
              <img src={item.img} className="card-img-top mt-2" alt="..." style={{height:'40%'}}/>
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight:'bold'}}>My Profile</h5>
                <div className="row">
                  <p className="col">Name: </p>
                  <p className="col justify-content-end">{item.name}</p>
                </div>
                <hr></hr>
                <div className="row">
                  <p className="col">Job: </p>
                  <p className="col justify-content-end">{item.job}</p>
                </div>
                <hr></hr>
                <div className="row">
                  <p className="col">Company: </p>
                  <p className="col justify-content-end">{item.company}</p>
                </div>
                <hr></hr>
                <div style={{marginLeft:'33%'}}>
                  <i class="bi bi-twitter ps-2"></i>
                  <i class="bi bi-github ps-2"></i>
                  <i class="bi bi-google ps-2"></i>
                </div>
                <button className="btn btn-primary" style={{marginLeft:'35%'}}>Profile</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
