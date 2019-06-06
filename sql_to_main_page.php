<?php

$count = mysqli_query($link, "SELECT COUNT(*) FROM videos");
$count_temp = mysqli_fetch_row($count);
$rl_count = (int)$count_temp[0];

function conntodb($arg_1, $arg_2){
    $image = mysqli_query($arg_1, "SELECT img_url FROM videos WHERE id='".$arg_2."'");
    $image_temp = mysqli_fetch_row($image);
    $url = mysqli_query($arg_1, "SELECT url FROM videos WHERE id='".$arg_2."'");
    $url_temp = mysqli_fetch_row($url);
    $name = mysqli_query($arg_1, "SELECT name FROM videos WHERE id='".$arg_2."'");
    $name_temp = mysqli_fetch_row($name);
    $date = mysqli_query($arg_1, "SELECT date FROM videos WHERE id='".$arg_2."'");
    $date_temp = mysqli_fetch_row($date);
                            
    return array ($image_temp, $url_temp, $name_temp, $date_temp);
}

function conntodbreviews($arg_1, $arg_2){
    $image = mysqli_query($arg_1, "SELECT img_url FROM videos WHERE id='".$arg_2."' AND type='review'" );
    $image_temp = mysqli_fetch_row($image);
    $url = mysqli_query($arg_1, "SELECT url FROM videos WHERE id='".$arg_2."' AND type='review'");
    $url_temp = mysqli_fetch_row($url);
    $name = mysqli_query($arg_1, "SELECT name FROM videos WHERE id='".$arg_2."' AND type='review'");
    $name_temp = mysqli_fetch_row($name);
    $date = mysqli_query($arg_1, "SELECT date FROM videos WHERE id='".$arg_2."' AND type='review'");
    $date_temp = mysqli_fetch_row($date);
                            
    return array ($image_temp, $url_temp, $name_temp, $date_temp);
}
?>