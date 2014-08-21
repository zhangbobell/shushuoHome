/**
 * Created by zhangbo21 on 14-8-15.
 */
/**
 * Created by zhangbo21 on 14-8-15.
 */
$(function(){
    $('.prj').on('mouseover mouseout click', function(e){
        var curId = $(this).attr('id').replace(/[^0-9]/ig,"");
        $('#prj-hover-' + curId).trigger('s-' + e.type);
    });

    $('.prj').on('s-mouseover', function(e){
        $(this).find('.prj-hover').addClass('popupMask');
        $(this).addClass('pointer');
    });
    $('.prj').on('s-mouseout', function(e){
        $(this).find('.prj-hover').removeClass('popupMask');
        $(this).removeClass('pointer');
    });
    $('.prj').on('s-click', function(e){
        var idx = $(this).attr('id').replace(/[^0-9]/ig,"");
        var $clickTarget = $('<a>').attr('href', prj[idx].href).attr('target', '_blank').appendTo(document.body);
        $clickTarget[0].click();
        setTimeout(function(){
            $clickTarget.remove();
        }, 100);
    });
})
