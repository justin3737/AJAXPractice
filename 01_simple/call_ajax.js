/* jQuery AJAX 範例 */

var getSelNews = function (urlSrc) {
	$.ajax({
		url      : urlSrc,
		type     : "GET",
		cache    : false,
		dataType : "jsonp",
		async    : false,
		timeout  : 1000,
		jsonpCallback: "getSelNewsCallback"
	});
};

/* callback 寫這裡 */
var getSelNewsCallback = function (data){
  	if(data.code === 200) {
    	for (var i=0; i<data.result.length; i++) {
      	console.log('新聞標題：' + 
                data.result[i].title +
                '\n\n' + data.result[i].brief + 
                '\n----------------------------------------------------------------------------');
    	}
  	}
};

/* 初始化 丟網址當作參數進去 */
var urlSrc = 'http://news.housefun.com.tw/api/partner/GetNewsListByPage/-/1/5/1';
getSelNews(urlSrc);