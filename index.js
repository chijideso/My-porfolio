const dropdown = document.getElementById("nav")
    let open = false;
    const openmenu = () =>{
          if(open){
            dropdown.style.right ="-300px"
            open = false
          }
          else{
            dropdown.style.right =0;
            open= true
          } 
    }
    // const cancel = document.getElementById("nav")
    // let close = true;
    // const closemenu = () =>{
    //   if (close){
    //     cancel.style.backgroundColor = "red"
    //   }
    //   //   cancel.style.right =0
    //   //   close = true
    //   // }
    //   else{
    //     cancel.style.right = "-300px"
    //     close = false
    //   }
    // }
 
   

