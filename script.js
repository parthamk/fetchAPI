const api_url = "https://reqres.in/api/users?page=2";

async function getUsers(url){
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    
    show(data.data);
}

getUsers(api_url);

function show(data){
    // let tab =
    //         `<tr>
    //             <th>Id</th>
    //             <th>Photo</th>
    //             <th>Name</th>
    //             <th>Email</th>
    //         </tr>`
    let profBox;
    for (let x of data){
        profBox = `<div class="wrap">
                    <img src="${x.avatar}" alt="${x.first_name}'s picture"/>
                    <p>${x.first_name} ${x.last_name}</p>
                    <p>${x.email}</p>
                </div>`
    }
    document.getElementById("employees").innerHTML = profBox;
}