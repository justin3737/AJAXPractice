/* -------------- jQuery Deferred --------------*/
//註：需要include jquery lib.
//可以同時處理多個request 然後在 done 一起處理所有的 callback

//宣告 d1, d2, d3 是 jQuery Deferred 的物件
var d1 = $.Deferred();
var d2 = $.Deferred();
var d3 = $.Deferred();
 
//這裡寫 done 的 callback
$.when( d1, d2, d3 ).done(function ( v1, v2, v3 ) {
    console.log( v1 ); // v1 is undefined
    console.log( v2 ); // v2 is "abc"
    console.log( v3 ); // v3 is an array [ 1, 2, 3, 4, 5 ]
});
 
//這裡告訴 deferred 物件要處理（解決）的事情
d1.resolve();
d2.resolve( "abc" );
d3.resolve( 1, 2, 3, 4, 5 );


/* -------------- example 2 --------------*/
// alert "哈哈，成功了！"
// 接著等待5秒
// alert "執行完畢！"

var wait = function(){
    var tasks = function(){
        alert("執行完畢！");
    };
    setTimeout(tasks,5000);
};

$.when(wait())
    .done(function(){ alert("哈哈，成功了！"); })
    .fail(function(){ alert("出錯啦！"); });

/* -------------- deferred.promise() 的方法--------------*/
var wait = function(){
    var dtd = $.Deferred(); //在函數内部，新建一个Deferred物件
        var tasks = function(){
            alert("執行完畢！");
            dtd.resolve(); //改變Deferred物件的執行狀態
        };
    setTimeout(tasks,5000);
    return dtd.promise(); // 返回promise物件
};
$.when(wait())
    .done(function(){ alert("哈哈，成功了！"); })
    .fail(function(){ alert("出錯啦！"); });

// reference : http://www.ruanyifeng.com/blog/2011/08/a_detailed_explanation_of_jquery_deferred_object.html