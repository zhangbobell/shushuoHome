/**
 * Created by zhangbo21 on 14-8-15.
 */

$(function(){
    $('.prj').on('mousemove click', function(e){
        var sectionHeight = $(window).height(),
            sectionWidth = $(window).width(),
            ratio = Math.min(sectionHeight/920, Math.min(sectionWidth, 976)/976);

        var x = e.clientX - $(this).offset().left,
            y = e.clientY - (Math.round($(this).offset().top) - s.getScrollTop()),
            k = 1 / Math.sqrt(3),
            marginTop = 71*ratio,
            width = 2 * marginTop * Math.sqrt(3);

        var curId = $(this).attr('id').replace(/[^0-9]/ig,""),
            preId;

        if (k*x+y-marginTop>=0 && k*x-y-marginTop<=0 && k*x-y+marginTop*3>=0 && k*x+y-marginTop*5<=0 && x>=0 && x<=width){
            $('#prj-hover-' + curId).trigger('s-' + e.type);
        } else if (k*x+y-marginTop<0 && x>=0 && y>=0){
            preId = curId-4;
            if (isAdjacent(curId, preId)) {
                $('#prj-hover-' + preId).trigger('s-' + e.type);
            }
        } else if(k*x-y-marginTop>0 && x<=width && y>=0){
            preId = curId-3;
            if (isAdjacent(curId, preId)) {
                $('#prj-hover-' + preId).trigger('s-' + e.type);
            }
        }
    });

    $('.prj').on('mouseout', function(e){
        $('.prj-hover').removeClass('popupMask');
    });


    var $pp;
    $('.prj').on('s-mousemove', function(e){
        var $cur = $(this);
        if ($pp && $cur[0] != $pp[0]) {
            $pp.trigger('s-mouseout');
        }
        $pp = $cur;
    });

    $('.prj').on('s-mousemove', function(e){
        $(this).find('.prj-hover').addClass('popupMask');
        $(this).addClass('pointer');
    });
    $('.prj').on('s-mouseout', function(e){
        $(this).find('.prj-hover').removeClass('popupMask');
        $(this).removeClass('pointer');
    });
    $('.prj').on('s-click', function(e){
        var idx = $(this).attr('id').replace(/[^0-9]/ig,"");
        $('<a>').attr('href', prj[idx].href).attr('target', '_blank')[0].click();
    });

    /****************************** 第三部分--案例的mouseover事件 *********************************/


    /*
     *
     * function getRow : 获得给定序号的行序号
     * @param : idx -- 输入的id序号
     * return : row -- id号所在的行序号
     *
     */
    var getRow  = function(idx){
        if(idx < 0)
            return -2;

        var row = Math.floor(idx / 7) * 2;
        if (idx % 7 > 2) {
            row += 1;
        }

        return row;
    };

    /*
     *
     * function isAdjacent : 给定的两个块是否相邻
     * @param : curIdx, preId -- 两个块id序号
     * return : true/false --是否相邻
     *
     */
    var isAdjacent = function(curId, preId) {
        var curRow = getRow(curId),
            preRow = getRow(preId);

        if(curRow + 1 === curRow){
            return true;
        }

        return false;
    }

})


