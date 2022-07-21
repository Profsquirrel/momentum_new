function onGeoOk(position){
  const API_KEY="ea0d386c88c36faf17c83fd0d6d55fe4";
  const lat=position.coords.latitude;
  const lng=position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&lang=kr&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
      const weather=document.querySelector("#weather span:first-child");
      weather.innerText=`오늘 하늘은 ${data.weather[0].description}! 밖은 ${Math.round(data.main.temp)}℃네요`;});
}

function onGeoError(){
  alert("Can't find you. No Weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);