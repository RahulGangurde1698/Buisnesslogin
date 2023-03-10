import React from 'react'

function Welcome() {

    const outClick = ()=> {
        // alert('Click happened');
        localStorage.removeItem("signup :")
        window.location.reload();
    
    
      }
    
      const del=()=>{
          localStorage.clear();
        window.location.reload();
    
      }
      
  return (
    <div>  

        <h1>Welcome To Engageit</h1>


        
<button class="btn btn-danger float-right card-footer "  onClick={() =>outClick()}>LogOut</button>
<br/>
<button class="btn btn-danger float-right card-footer "  onClick={() =>del()}>Delete</button>
    </div>

    
  )
}

export default Welcome