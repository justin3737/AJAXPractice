/* jQuery AJAX .done() 範例 可以比對 02 example 的寫法 */

/* document ready 後執行下面 jQuery 的 function */
$(function(){
    
    /* 按下 Get News 按鈕時 */
    $('#getNewsBtn').on('click', function(){
        var curr_page = $('#currPage').val();  //目前頁數:1 (default)
        var per_page  = $('#perPage').val();   //每頁幾筆:5 (default)
        var urlSrc    = 'http://news.housefun.com.tw/api/partner/GetNewsListByPage/-/1/' + per_page + '/' + curr_page;

        /* $.ajax() 後面寫 done 的 call back */
        $.ajax({
            url     : urlSrc, 
            dataType: "jsonp"
        })
        .done(function(data) {
            $('.content').html(""); //清空div
            if (data.code === 200) {
                for (var i=0; i<data.result.length; i++) {
                    $('.content').append('<div>[' + (i+1) + ']新聞標題：' + 
                        data.result[i].title +
                        '<br><br>' + data.result[i].brief + 
                        '<br>----------------------------------------------------------------------------</div>');
                }
            }
        })
        /* 這邊可以寫 fail 的 callback (可不寫)*/
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        });
        /* 這邊可以寫 always 的 callback (可不寫)*/
        .always(function(){
            console.log('不論成功或是失敗這個 callback always 觸發！');
        })
    });
});
