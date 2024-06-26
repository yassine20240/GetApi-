
 

function hello() {

let inpemail = document.getElementById('inpEmail').value;
let inpname = document.getElementById('inpName').value;


  axios.post(' https://jsonplaceholder.typicode.com', {


    "email":  inpemail,
    "password": inpname


  })



  .then(function(response) {
    let token = response.data.token;
    localStorage.setItem('token', token);
    console.log('Token received:', token);

window.location='loing.html'


  })



  .catch(function(error) {
    console.log(error);
    alert(error.response.data.error)
  });



}






















