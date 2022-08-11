 let deg=document.getElementById("deg");
 let wind=document.getElementById("wind");
//  let cloud=document.getElementById("cloud");
 let today=document.getElementById("today");
 let tomorrow=document.getElementById("tomorrow");
 let wind1=document.getElementById("wind1");
 let wind2=document.getElementById("wind2");
fetch("https://goweather.herokuapp.com/weather/gorakhpur").then(res=>res.json()).then(result=>{
     
    
    deg.innerText=result.temperature;
   wind.innerText=result.description;
//    cloud.innerText=result.forecast[0].wind;
   today.innerText=result.forecast[0].temperature;
   tomorrow.innerText=result.forecast[1].temperature;
   wind1.innerText=result.forecast[0].wind;
   wind2.innerText=result.forecast[1].wind;
});
