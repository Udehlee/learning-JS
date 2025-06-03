const userBtn = document.getElementById("userbtn");
const userDiv = document.getElementById("userInfo");


btn.addEventListener("click", fetchUser);

async function getUser(){
    try{
        const response = await fetch("https://randomuser.me/api");
        const dataJson = await response.json();
        const  user = dataJson.results[0];

     userDiv.innerHTML = ` <p>Name: ${user.name.first} ${user.name.last}</p>
                           <p>Email: ${user.email}</p>
                           />
                          `;
    }catch{
         console.log("Error:", error);
    }
}