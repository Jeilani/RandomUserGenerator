var nextUser = document.querySelector("#nextuser");
var imageIcon = document.querySelector(".img");
var namee = document.querySelector(".name");
var username = document.querySelector(".username");
var email = document.querySelector(".email");
var city = document.querySelector(".city");


var changeUser = ()=>{
    let url = "https://randomuser.me/api"
    fetch(url)
    .then((response)=>{
        if (!response.ok){
            throw Error(response.status);
        }
        return response.json()
    })
    .then((data)=>{
        let object = data.results[0];

        imageIcon.src = object.picture.large;
        namee.textContent = object.name.first + " " + object.name.last;
        username.textContent = object.login.username;
        email.textContent = object.email;
        city.textContent = object.location.city + ", " + object.location.state;
    })
    .catch((error)=>{
        console.log("Something went wrong");
    });
};

changeUser();

nextUser.addEventListener("click", ()=>{
    changeUser();


});


