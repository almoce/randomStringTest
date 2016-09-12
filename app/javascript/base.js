const allcase = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var output = [];
var htmlstring  = '';

for (var i = 0; i < allcase.length; i++) {
	output[i] = 0;
	htmlstring += '<li style="list-style:none;height:12px"><span style="font-size:12px;width:15px; display:inline-block;">'+allcase[i]+'</span>'+'<div class="size" style="display:inline-block;height:5px;width:'+output[i]+'px;background:red;"></div>'+'</li>'
}
document.querySelector('#hello').innerHTML = htmlstring;
var listitem = document.querySelector('#hello').getElementsByTagName('li');

setInterval(()=>{
	var a = Math.floor(Math.random()*allcase.length);
	output[a] +=1;
	listitem[a].querySelector('div.size').style.width = output[a]+'px';
	document.querySelector('#selected').innerHTML += allcase[a];
}, 10);