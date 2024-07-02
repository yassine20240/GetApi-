let btn = document.getElementById('btn');
let id = document.getElementById('id');
let names = document.getElementById('name');
let email = document.getElementById('email');

let mood = 'create';
let tmp;
let data;

if (localStorage.getItem('aray') !== null) {
    data = JSON.parse(localStorage.getItem('aray'));
} else {
    data = [];
}
//get data of  user 
btn.addEventListener('click', function() {
    let x = {
        iddata: id.value,
        namedata: names.value,
        emaildata: email.value
    };

 
//////////////////////////////////////////

     
if (mood === 'create') {
  data.push(x);
} else {
  data[tmp] = x;
  mood = 'create';
  btn.innerHTML = 'Create';
}




    localStorage.setItem('aray', JSON.stringify(data));
    showData(); // Call showData to update the table immediately
    cleandata();
});
//create user 
function showData() {
    let table = '';

    for (let i = 0; i < data.length; i++) {

        table += `<tr>
            <td>${i}</td>
            <td>${data[i].namedata}</td>
            <td>${data[i].iddata}</td>
            <td>${data[i].emaildata}</td>
            <td>
                <p>
                    <button class="delete-button" onclick="DeleteData(${i})">Delete</button>
                    <button class="update-button" onclick="updateRow(${i})">Update</button><hr/>
                </p>
            </td>
        </tr>`;

    }

    document.getElementById('tbody').innerHTML = table;
}

showData();



//Delte userr
function DeleteData(i) {
    data.splice(i, 1);
    localStorage.setItem('aray', JSON.stringify(data));
 
    
    showData();
}




//UpDate user 

function updateRow(i) {
    id.value = data[i].iddata;
    names.value = data[i].namedata;
    email.value = data[i].emaildata;

    btn.innerHTML = 'Update';
    mood = 'update';
    tmp = i;
}


//Clean Data 
function cleandata() {
    id.value = '';
    names.value = '';
    email.value = '';
}

