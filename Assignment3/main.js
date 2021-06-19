const inputValue=document.getElementById('input-value');
const btn=document.getElementById('btn');
const name1=document.getElementById('name');
const description=document.getElementById('description');
const temp=document.getElementById('temp');
const apikey='1b9781a98484be0a14f11a530e8020c6';
const KELVIN=273;

btn.addEventListener('click',function(name){
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${apikey}`;
    fetch(url).then(res=>res.json())
    .then(weatherData=>{
        let n=weatherData.name;
        let t=weatherData.main.temp;
        let d=weatherData.weather[0].description;
        name1.innerHTML=n;
        description.innerHTML=d;
        temp.innerHTML=t-KELVIN+' Celcius';
    })
    .catch(err=>alert('wrong city name'));
    // const weatherData=await res.json();
    // let n=weatherData.name;
    // let t=weatherData.main.temp;
    // let d=weatherData.weather.description;
    // name1.innerHTML=n;
    // description.innerHTML=d;
    // temp.innerHTML=t;
})


//http://api.openweathermap.org/data/2.5/weather?q=london&appid=1b9781a98484be0a14f11a530e8020c6