/* jQuery AJAX 範例 */

var getSelNews = function (urlSrc) {
    var curr_page = $('#currPage').val();  //目前頁數:1 (default)
    var per_page  = $('#perPage').val();   //每頁幾筆:5 (default)
    var urlSrc    = 'http://news.housefun.com.tw/api/partner/GetNewsListByPage/-/1/' + per_page + '/' + curr_page;
    $.ajax({
        url          : urlSrc,
        type         : "GET",
        dataType     : "jsonp",
        jsonpCallback: "getSelNewsCallback"
    });
};

/* callback 寫這裡 */
var getSelNewsCallback = function (data){
    $('.content').html(""); //清空div
    if (data.code === 200) {
        for (var i=0; i<data.result.length; i++) {
            $('.content').append('<div>[' + (i+1) + ']新聞標題：' + 
                data.result[i].title +
                '<br><br>' + data.result[i].brief + 
                '<br>----------------------------------------------------------------------------</div>');
        }
    }
};

/* 按下 Get News 按鈕時 */
$('#getNewsBtn').on('click', function(){
    getSelNews();
});



