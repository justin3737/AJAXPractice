/*
for (variable in [object | array]) {
    statements 
}
*/

// Initialize object.
a = {"a" : "Athens" , "b" : "Belgrade", "c" : "Cairo"}

// Iterate over the properties.
var s = ""
for (var key in a) {
    s += key + ": " + a[key];
    s += "<br />";
    }
document.write (s);

// Output:
// a: Athens
// b: Belgrade
// c: Cairo




// Initialize the array.
var arr = new Array("zero","one","two");

// Add a few expando properties to the array.
arr["orange"] = "fruit";
arr["carrot"] = "vegetable";

// Iterate over the properties and elements.
var s = "";
for (var key in arr) {
    s += key + ": " + arr[key];
    s += "<br />";
}

document.write (s);

// Output:
//   0: zero
//   1: one
//   2: two
//   orange: fruit
//   carrot: vegetable







var myMusic = {
  Mayday : ["01-擁抱","02-純真","03-尬車"],
	Jolin  : ["01-馬德里","02-倒帶","03-七十二變"],
  Jay    : ["01-晴天","02-七里香","03-雙節棍"]
};
            
console.log('------印出myMusic 的歌手------');

/* result:
"------印出myMusic 的歌手------"
"歌手：Mayday"
"歌手：Jolin"
"歌手：Jay"
*/




var singer = []; /* 宣告一個陣列來放歌手的名字 */
for(var ss in myMusic) {
  console.log('歌手：' + ss);
  singer.push(ss);
}

/* 宣告多個歌手變數 */
var singer1 = singer[0]; // Mayday
var singer2 = singer[1]; // Jolin
var singer3 = singer[2]; // Jay

console.log('------印出myMusic 第ㄧ個歌手的音樂------');

for (var i=0; i< myMusic[singer1].length; i++) {
  console.log('歌手：'+ singer1 +  '歌曲：'+ myMusic[singer1][i]);
}

console.log('------印出myMusic 第二個歌手的音樂------');

for (var j=0; j< myMusic[singer2].length; j++) {
  console.log('歌手：'+ singer2 +  '歌曲：'+ myMusic[singer2][j]);
}

console.log('------印出myMusic 第三個歌手的音樂------');

for (var k=0; k< myMusic[singer3].length; k++) {
  console.log('歌手：'+ singer3 +  '歌曲：'+ myMusic[singer3][k]);
}

/* result:
"------印出myMusic 第ㄧ個歌手的音樂------"
"歌手：Mayday歌曲：01-擁抱"
"歌手：Mayday歌曲：02-純真"
"歌手：Mayday歌曲：03-尬車"
"------印出myMusic 第二個歌手的音樂------"
"歌手：Jolin歌曲：01-馬德里"
"歌手：Jolin歌曲：02-倒帶"
"歌手：Jolin歌曲：03-七十二變"
"------印出myMusic 第三個歌手的音樂------"
"歌手：Jay歌曲：01-晴天"
"歌手：Jay歌曲：02-七里香"
"歌手：Jay歌曲：03-雙節棍"
*/



