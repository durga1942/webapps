function loadjson(file,callback) {
  var x =  new XMLHttpRequest();
  x.overrideMimeType("application.json");
  x.open("GET",file,true);
  x.onreadystatechange=function() {
    if(x.readyState === 4 && x.status == "200"){
      callback(x.responseText);
  }
};
x.send(null);
}

loadjson("data.json",function(text) {
  var data = JSON.parse(text);
  console.log(data);
  basics(data.details);
  career(data.career);
  education(data.education);
  skillset(data.keyskills);
  achieves(data.achievements);
})
var child1 = document.querySelector(".child1");
function basics(det){
var image = document.createElement("img");
image.src = det.image;
child1.appendChild(image);
var name = document.createElement("h1");
name.textContent = det.name;
child1.appendChild(name);
var phone = document.createElement("h3");
phone.textContent = det.phone;
child1.appendChild(phone);
var email = document.createElement("a");
email.href = "mailto:saidurgatejamulla@gmail.com";
email.textContent = det.email;
child1.appendChild(email);
var Adress = document.createElement("h2");
Adress.textContent = "Adress";
child1.appendChild(Adress);
var hr = document.createElement("hr");
child1.appendChild(hr);
var Adress = document.createElement("p");
Adress.textContent = det.Adress;
child1.appendChild(Adress);

}
var child2 = document.querySelector(".child2");
function career(info){
  var cr = document.createElement("h2");
  cr.textContent="careerobjective";
  child2.appendChild(cr);
  var hr = document.createElement("hr");
  child2.appendChild(hr);
  var info1 = document.createElement("p");
  info1.textContent = info.info;
  child2.appendChild(info1);
}
function education(edu){
  var ed = document.createElement("h2");
  ed.textContent = "Education Qualifications:";
  child2.appendChild(ed);
  for(i=0;i<edu.length;i++){
    var deg = document.createElement("h4");
    deg.textContent = edu[i].degree;
    child2.appendChild(deg);
     var ul = document.createElement("ul");
     var li = document.createElement("li");
     li.textContent=edu[i].institute;
     ul.appendChild(li);
     child2.appendChild(ul);
     var ul = document.createElement("ul");
     var li = document.createElement("li");
     li.textContent=edu[i].date;
     ul.appendChild(li);
     child2.appendChild(ul);
  }
}
  function skillset(skillinfo){
  var sk = document.createElement("h2");
  sk.textContent = "Technicalskills";
  child2.appendChild(sk);

   var hr= document.createElement("hr");
   child2.appendChild(hr);

   var skilldata = document.createElement("table");
   skilldata.border = "1";
   child2.appendChild(skilldata);

   tabledata="";
   for(i=0;i<skillinfo.length;i++){
     tabledata += "<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].info+"</td></tr>";
   }
   skilldata.innerHTML = tabledata;
 }
 function achieves(achievements){
   var ac = document.createElement("h3");
   ac.textContent = "ACHIEVEMENTS";
   child2.appendChild(ac);
   var hr= document.createElement("hr");
   child2.appendChild(hr);

   var achievementsdata  = document.createElement("table");
   achievementsdata.border = "1";
   child2.appendChild(achievementsdata);

   tabledata="";
   for(i=0;i<achievements.length;i++){
     tabledata += "<tr><td>"+achievements[i].participation+"</td><td>"+achievements[i].description+"</td></tr>";
   }
  achievementsdata.innerHTML = tabledata;

 }
