<?php 
    require_once 'Mobile_Detect.php';
    $detect = new Mobile_Detect;

    if( $detect->isMobile() ){
        include('mobile/index.html');
    }else{
        include('pc/index.html');
    }
?>