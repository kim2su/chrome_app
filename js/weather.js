const API_KEY = "75c8086cd370bb71b92b35c1822ffe2c"; 


function onGeoSuccess(position){
    const lat = position.coords.latitude; 
    const longi = position.coords.longitude; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&appid=${API_KEY}&units=metric&lang=kr`; 
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)");
        const weather = document.querySelector("#weather span:last-child");

        city.innerText = data.name; 
        temp.innerText = Math.ceil(data.main.temp)+"℃";
        weather.innerText = data.weather[0].main; 

    })
}
function onGeoError(){
    alert(" 당신의 위치를 찾을수 없습니다. 혹시 화성에 계신가요? ")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)  //geolocation 지리적위치 
