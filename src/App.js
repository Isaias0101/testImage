
import React, {Fragment, useState} from 'react'



function App() {



 const [file,setFile]=useState(null)
  const selectedHandler=e=>{
    setFile( e.target.files[0])

 
    console.log(e.target.files[0])
  }
  const sendHandler=()=>{
    if(!file){
      alert('you must upload file')
      return
    }
  
    const formdata = new FormData()

    formdata.append('image', file)
 console.log(formdata)
 const reader = new FileReader();
 reader.readAsDataURL(file);
 reader.onloadend = () => {
   const base64data = reader.result;
   console.log(base64data);


  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization')

  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');


   
    fetch('https://a39rxvqrma.execute-api.us-east-1.amazonaws.com/dev/add_image', {
      method: 'POST',
      body: base64data
    })
    .then(function(response) {
      return response.json()
    })

    document.getElementById('fileinput').value = null

    setFile(null)




 

}
  }

  
  return (

    <Fragment>
      <nav className='navbar navbar-dark bg-dark'>
        <div className="container">
           <a href='#!' className='navbar-brand'>Upload image subaccount</a>
        </div>
      </nav>
      

      <div className='container mt-5'>

        <br></br>
        <div className='card p-3'>
        <div className='row'>
          <div className='col-5'>
          <input id="fileinput" onChange={selectedHandler} type="file"></input>
       
           <br></br>
           </div>
           <div className='col-5'>
          <input type="text" placeholder="Add acc_id to subaccount"></input>
  
          </div>

          <div className='col-2' >
         
   
          <button onClick={sendHandler} className="form-control btn btn-primary" type="button" >Upload</button>
         
         </div>
        
        </div>
        
        </div>
        
      </div>
      <br></br>

      <nav className='navbar navbar-dark bg-dark'>
        <div className="container">
           <a href='#!' className='navbar-brand'>Upload image agent</a>
        </div>
      </nav>
      

      <div className='container'>
        <br></br>
        <div className='card'>
          <input type="file"></input>
          <br></br>
          <input type="text" placeholder="Add sagnte_id"></input>
          <br></br>
          <button type="button" className="btn btn-primary">Upload</button>
        </div>
      </div>


    </Fragment>
  );
}

export default App;
