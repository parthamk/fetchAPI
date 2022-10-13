const api_url = "https://reqres.in/api/users?page=2";

async function getUsers(url){
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    
    show(data);
}

getUsers(api_url);

function show(data){
    let tab =
            `<tr>
                <th>Id</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Email</th>
            </tr>`
    for (let x in data){
        tab += `<tr>
                    <td>${x.id}</td>
                    <td>${x.first_name} ${x.last_name}</td>
                    <td>${x.avatar}</td>
                    <td>${x.email}</td>
                </tr>`
    }
    document.getElementById("employees").innerHTML = tab;
}

// async function getUsers() {
//     let url = 'https://reqres.in/api/users?page=2';
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function renderUsers() {
//     let users = await getUsers();
//     let html = '';
//     users.forEach(user => {
//         let htmlSegment = `<div class="user">
//                             <img src="${user.avatar}" >
//                             <h2>${user.first_name} ${user.last_name}</h2>
//                             <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//                         </div>`;

//         html += htmlSegment;
//     });

//     let container = document.querySelector('.container');
//     container.innerHTML = html;
// }

// renderUsers();
