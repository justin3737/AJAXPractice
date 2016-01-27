
//需要include jquery lib.

var d1 = $.Deferred();
var d2 = $.Deferred();
var d3 = $.Deferred();
 
$.when( d1, d2, d3 ).done(function ( v1, v2, v3 ) {
    console.log( v1 ); // v1 is undefined
    console.log( v2 ); // v2 is "abc"
    console.log( v3 ); // v3 is an array [ 1, 2, 3, 4, 5 ]
});
 
d1.resolve();
d2.resolve( "abc" );
d3.resolve( 1, 2, 3, 4, 5 );
