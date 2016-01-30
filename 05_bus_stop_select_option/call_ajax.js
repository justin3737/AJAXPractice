/* jQuery AJAX .done() 範例 */

/* document ready 後執行下面 jQuery 的 function */
$(function(){
    /* 公車路線 API */
    var urlSrc  = 'http://www.json-generator.com/api/json/get/caEpWWqRCG?indent=2';
    var busStopData = {};
    var $selectBus  = $('#selectBus');
    var $content    = $('.content');

    var init = function() {
        /* $.ajax() 後面寫 done 的 call back */
        $.ajax({
            url     : urlSrc, 
            dataType: "jsonp"
        })
        .done(function(data) {
            busStopData = data;
            
            /* 改變下拉選單的內容 */
            for (var bus in data) {
                $selectBus.append($("<option></option>").attr("value", bus).text(bus));
            }
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        });
    };

    /* 按下 Get News 按鈕時 */
    $selectBus.on('change', function(){
        var busName = $(this).val();
        if (busName !== -1) {
            $content.html(""); //清空div

            /* 這裡印出 bus name */
            $content.append('<h3>公車：' + busName + '</h3>');
            $content.append('<h4>行經路線：</h4>');

            /*利用 join 這個方法把陣列內容取出轉成字串 */
            $content.append(busStopData[busName].join('</br>'));
            $content.append('<h4>--------------' + busName + '公車結束------------------</h4>');
        }
    });

    //執行init
    init();
});

