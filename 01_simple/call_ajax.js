/* jQuery AJAX 範例 */

var getSelNews = function (urlSrc) {
    $.ajax({
        url          : urlSrc,
        type         : "GET",
        dataType     : "jsonp",
        jsonpCallback: "getSelNewsCallback"
    });
};

/* callback 寫這裡 */
var getSelNewsCallback = function (data){
    if(data.code === 200) {
        for (var i=0; i<data.result.length; i++) {
        $('body').append('<div>新聞標題：' + 
                data.result[i].title +
                '<br><br>' + data.result[i].brief + 
                '<br>----------------------------------------------------------------------------</div>');
        }
    }
};

/* 初始化 丟網址當作參數進去 */
var urlSrc = 'http://news.housefun.com.tw/api/partner/GetNewsListByPage/-/1/5/1';
/*
5/1 一頁5筆/第1頁
*/
getSelNews(urlSrc);