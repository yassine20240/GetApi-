function getpost() {
    let request = new XMLHttpRequest(); 
    request.open("GET", "https://jsonplaceholder.typicode.com/posts" ); // Corrected URL  /  ?userId=   
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {

console.log(JSON.parse(request.response))



        } else {
            alert('Error: Unable to fetch posts.');
        }
    };
}
/*
         /*   let posts = request.response;
            let content = '';

            document.getElementById('posts').innerHTML = '';

            for (let post of posts) {
                content += `
                    <div>
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                `;
            }
           
            document.getElementById('posts').innerHTML = content; 
           
function getusers() {
    let request = new XMLHttpRequest(); 
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            let users = request.response;
            let content = '';

            document.getElementById('users').innerHTML = '';

            for (let user of users) {
                content += `
                    <div id='user' onclick="userclick(${user.id},this)">
                        <h2>${user.name}</h2>
                        <h5>${user.email}</h5>
                    </div>
                `;
            }

            document.getElementById('users').innerHTML = content;
        } else {
            alert('Error: Unable to fetch users.');
        }
    };
}

getpost(1);
getusers();

function userclick(id,e) {
    getpost(id);
    let se = document.getElementsByClassName('selected');
    for(e of se ){
        e.classList.remove('selected')
    }

  e.classList.add("selected")

}
*/


// her i want to finish this lesson of api 
// i wnat to now how to api in javascript 

