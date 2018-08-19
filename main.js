// function Loadjson(file,callback){
// 	var xhr= new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState === 4 && xhr.status == "200"){
// 			callback(xhr.responseText);
// 		}
// 	};
// xhr.send(null);
// }
// Loadjson("data.json",function(text)
// {
// 	var data = JSON.parse(text);
// 	console.log(data);
// 	basics(data.details);
// 	careerinfo(data.career);
// 	education(data.education);
// 	skillset(data.skills);
// 	achievement(data.achievements);
// })
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
		var newfile = loadjson("data.json");
		newfile.then(data=>{
	console.log(data);
	basics(data.details);
	careerinfo(data.career);
	education(data.education);
	skillset(data.skills);
	achievement(data.achievements);
})
var left=document.querySelector(".left");
function basics(det){
	var img=document.createElement("img");
	img.src=det.image;
	left.appendChild(img);
	var name=document.createElement("h3");
	name.textContent=det.name;
	left.appendChild(name);
	var phnno1=document.createElement("h3");
	phnno1.textContent=det.phnno;
	left.appendChild(phnno1);
	var email1=document.createElement("a");
	email1.href="mailto:aswinigamidi99@gmail.com";
	email1.textContent=det.email;
	left.appendChild(email1);
	var add=document.createElement("h2");
	add.textContent="address";
	left.appendChild(add);
	var hr=document.createElement("hr");
	hr.href="vignan's nirula";
	hr.textContent=det.address;
	left.appendChild(hr);
}
var right=document.querySelector(".right");
function careerinfo(info){
	var care=document.createElement("p");
	care.textContent="career objective";
	right.appendChild(care);
	var ca=document.createElement("hr");
	right.appendChild(ca);
	var c=document.createElement("p");
	c.textContent=info.info;
	right.appendChild(c);
}
	function education(edu)
	{
	var qualification=document.createElement("p");
	qualification.textContent="education";
	right.appendChild(qualification);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var table1 = document.createElement("table");
	table1.border = "1";
	right.appendChild(table1);
	tabledata = "";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table1.innerHTML=tabledata;
}
function skillset(skill){
	var sk=document.createElement("h1");
	sk.textContent="technical skills";
	right.appendChild(sk);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	for(i=0;i<skill.length;i++)
	{
		var s =document.createElement("h3");
		s.textContent=skill[i].title;
		right.appendChild(s);
		var u1=document.createElement("u1");
		var li=document.createElement("li");
		li.textContent = skill[i].info;
		u1.appendChild(li);
		right.appendChild(u1);
}
}
function achievement(a){
	var a1=document.createElement("h1");
	a1.textContent="achievements";
	right.appendChild(a1);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	for(i=0;i<a.length;i++){
		var u1=document.createElement("u1");
		var li=document.createElement("li");
		li.textContent=a[i].title;
		u1.appendChild(li);
		right.appendChild(u1);
		
	}
}
function openpage(){
	window.open("pwaresume.html", "_self",true)

}
