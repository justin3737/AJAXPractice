/* jQuery AJAX .done() 範例 */

/* document ready 後執行下面 jQuery 的 function */
$(function(){
    
    /* 按下 Get News 按鈕時 */
    $('#getBus').on('click', function(){
        var urlSrc    = 'http://www.json-generator.com/api/json/get/bIfmqnSxSG?indent=2';
        var $content  = $('.content');
        /* $.ajax() 後面寫 done 的 call back */
        $.ajax({
            url     : urlSrc, 
            dataType: "jsonp"
        })
        .done(function(data) {
            $content.html(""); //清空div

            var busStop = [];
            for (var busName in data) {
                /* 這裡印出 bus name */
                $content.append('<h3>公車：' + busName + '</h3>');
                $content.append('<h4>行經路線：</h4>');

                /* 這裡印出 bus stop */
                /* 先把所有內容取出來存到 busStop Array */
                busStop = data[busName]; //data["208"]

                /*利用 join 這個方法把陣列內容取出轉成字串 */
                $content.append(busStop.join('</br>'));
                $content.append('<h4>--------------' + busName + '公車結束------------------</h4>');
            }

        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        });
    });
});

