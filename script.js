//const { default: axios } = require("axios");
/*
 let url ="https://tarmeezacademy.com/api/v1";


 function getApi (){
 
axios.get( `${url}/posts?limit=5`)
//.then(data=>{console.log( data) })
.then(Response=>{
   
let posts = Response.data.data;
console.log(posts)

document.getElementById('post').innerHTML = ' ';

for (post of posts ){
 
  
const author= post.author;



let tiTele = '';
if(post.tiTele != null){
  tiTele = post.tiTele ; 
}



    let content = ` 

<div id="post">
  <div class="card mt-3">
    <div class="card-header">
   <img src="images/images.jpeg" alt="" class="rounded-circle "  style="width: 100px ; height: 100px;">
  <samp style="font-size: 2rem;">${post.author.username }</samp> 
  </div>
    <div class="card-body">
      
      <img src=" ${ post.image   }" alt="" style="width:100%; height: 200px ;">
                 
      <h4 class="c-info">${post.created_at} </h4>
             
                 <h6>${tiTele} </h6>
       <p>

       ${post.body}
      </p>
<hr>

<div>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-0-square-fill" viewBox="0 0 16 16">
    <path d="M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895"/>
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99"/>
  </svg>
  tree coments 
</div>
    </div>

  </div>
</div> `

document.getElementById('post').innerHTML   += content ; 

    
}


}

)


.catch(e=>{console.log(e)
})

 }


getApi()



*/

/*



function change() {
  let uservalue = document.getElementById('userId').value;
  let passwordValue = document.getElementById('passwordNum').value;

  // Ensure the data structure matches the API requirements
  let params = {
    "username": uservalue,
    "password": passwordValue
  };

  let url2 = `${url}/login`;

  axios.post(url2, params)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
       
    console.log(error)
    
    });

  console.log(uservalue, passwordValue);
}
*/