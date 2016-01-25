
/* --------------資料型別--------------
"BMW"  : string   字串
4      : interger 整數
3.3333 : float    浮點數
true or false :bool 布林
*/

/* --------------Array-------------- */
var fruit = ["apple", "banana", "orange"];
console.log(fruit);
// ["apple", "banana", "orange"]
console.log(fruit[1]);
// "banana"

/* --------------Object-------------- */
var myCar = {
	brand : "BMW",
	wheels: 4,
	color : "red",
	door  : 4
}

var myMusic = {
	Mayday : ["01-擁抱","02-純真","03-尬車"],
	Jolin  : ["01-馬德里","02-倒帶","03-七十二變"]
}

console.log(myCar.color);
//"red"

console.log(myMusic);
/*
 {
  Jolin: ["01-馬德里", "02-倒帶", "03-七十二變"],
  Mayday: ["01-擁抱", "02-純真", "03-尬車"]
}
*/

console.log(myMusic.Mayday);
//["01-擁抱", "02-純真", "03-尬車"]
console.log(myMusic["Mayday"]);
//["01-擁抱", "02-純真", "03-尬車"]
console.log(myMusic.Mayday[2]);
//"03-尬車"
console.log(myMusic.Jolin[2]);
//"03-七十二變"


/* --------------for loop example-------------- */
/* 印出五月天專輯所有歌曲 */
console.log('====印出五月天專輯所有歌曲====');
for (var i=0; i<myMusic.Mayday.length; i++) {
	console(myMusic.Mayday[i]);
};

/* 
"====印出五月天專輯所有歌曲===="
"01-擁抱"
"02-純真"
"03-尬車"
*/



/* --------------JSON-------------- */
//JSON 跟Object 可以互轉
{
	"employees":[
	    {"firstName":"John", "lastName":"Doe"}, 
	    {"firstName":"Anna", "lastName":"Smith"},
	    {"firstName":"Peter", "lastName":"Jones"}
	]
}

/*--------------API：Application Programming Interface--------------*/

/* --------------JSONP:JSON with Padding-------------- */
//http://jsonlint.com/