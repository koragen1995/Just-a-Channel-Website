<?php
if ($checkComp == "compilation"){
        mysqli_query($link, "CREATE TABLE compilation AS SELECT img_url, url, name, date FROM videos WHERE type='compilation'");
        mysqli_query($link, "ALTER TABLE compilation ADD id INT NOT NULL AUTO_INCREMENT FIRST ,
        ADD PRIMARY KEY ( id ) ");
        $count = mysqli_query($link, "SELECT COUNT(*) FROM compilation");
        $count_temp = mysqli_fetch_row($count);
        $rl_count = (int)$count_temp[0];
} else if ($checkComp == "review"){
        mysqli_query($link, "CREATE TABLE reviews AS SELECT img_url, url, name, date FROM videos WHERE type='review'");
        mysqli_query($link, "ALTER TABLE reviews ADD id INT NOT NULL AUTO_INCREMENT FIRST ,
        ADD PRIMARY KEY ( id ) ");
        $count = mysqli_query($link, "SELECT COUNT(*) FROM reviews");
        $count_temp = mysqli_fetch_row($count);
        $rl_count = (int)$count_temp[0];
} else if ($checkComp == "theory"){
        mysqli_query($link, "CREATE TABLE theories AS SELECT img_url, url, name, date FROM videos WHERE type='theory'");
        mysqli_query($link, "ALTER TABLE theories ADD id INT NOT NULL AUTO_INCREMENT FIRST ,
        ADD PRIMARY KEY ( id ) ");
        $count = mysqli_query($link, "SELECT COUNT(*) FROM theories");
        $count_temp = mysqli_fetch_row($count);
        $rl_count = (int)$count_temp[0];
} else if ($checkComp == "other"){
        mysqli_query($link, "CREATE TABLE other AS SELECT img_url, url, name, date FROM videos WHERE type='other'");
        mysqli_query($link, "ALTER TABLE other ADD id INT NOT NULL AUTO_INCREMENT FIRST ,
        ADD PRIMARY KEY ( id ) ");
        $count = mysqli_query($link, "SELECT COUNT(*) FROM other");
        $count_temp = mysqli_fetch_row($count);
        $rl_count = (int)$count_temp[0];
} else {
        mysqli_query($link, "CREATE TABLE compilation AS SELECT img_url, url, name, date FROM videos WHERE type='compilation' AND tag LIKE '%".$checkComp."%'");
        mysqli_query($link, "ALTER TABLE compilation ADD id INT NOT NULL AUTO_INCREMENT FIRST ,
        ADD PRIMARY KEY ( id ) ");
        $count = mysqli_query($link, "SELECT COUNT(*) FROM compilation");
        $count_temp = mysqli_fetch_row($count);
        $rl_count = (int)$count_temp[0];
}
function conntodb($arg_1, $arg_2, $arg_3){
        $image = mysqli_query($arg_1, "SELECT img_url FROM compilation WHERE id='".$arg_2."'");
        $image_temp = mysqli_fetch_row($image);
        $url = mysqli_query($arg_1, "SELECT url FROM compilation WHERE id='".$arg_2."'");
        $url_temp = mysqli_fetch_row($url);
        $name = mysqli_query($arg_1, "SELECT name FROM compilation WHERE id='".$arg_2."'");
        $name_temp = mysqli_fetch_row($name);
        $date = mysqli_query($arg_1, "SELECT date FROM compilation WHERE id='".$arg_2."'");
        $date_temp = mysqli_fetch_row($date);
        return array ($image_temp, $url_temp, $name_temp, $date_temp);
}
function conntodbreviews($arg_1, $arg_2, $arg_3){
        $image = mysqli_query($arg_1, "SELECT img_url FROM reviews WHERE id='".$arg_2."'");
        $image_temp = mysqli_fetch_row($image);
        $url = mysqli_query($arg_1, "SELECT url FROM reviews WHERE id='".$arg_2."'");
        $url_temp = mysqli_fetch_row($url);
        $name = mysqli_query($arg_1, "SELECT name FROM reviews WHERE id='".$arg_2."'");
        $name_temp = mysqli_fetch_row($name);
        $date = mysqli_query($arg_1, "SELECT date FROM reviews WHERE id='".$arg_2."'");
        $date_temp = mysqli_fetch_row($date);
        return array ($image_temp, $url_temp, $name_temp, $date_temp);
}
function conntodbtheories($arg_1, $arg_2, $arg_3){
        $image = mysqli_query($arg_1, "SELECT img_url FROM theories WHERE id='".$arg_2."'");
        $image_temp = mysqli_fetch_row($image);
        $url = mysqli_query($arg_1, "SELECT url FROM theories WHERE id='".$arg_2."'");
        $url_temp = mysqli_fetch_row($url);
        $name = mysqli_query($arg_1, "SELECT name FROM theories WHERE id='".$arg_2."'");
        $name_temp = mysqli_fetch_row($name);
        $date = mysqli_query($arg_1, "SELECT date FROM theories WHERE id='".$arg_2."'");
        $date_temp = mysqli_fetch_row($date);
        return array ($image_temp, $url_temp, $name_temp, $date_temp);
}
function conntodbother($arg_1, $arg_2, $arg_3){
        $image = mysqli_query($arg_1, "SELECT img_url FROM other WHERE id='".$arg_2."'");
        $image_temp = mysqli_fetch_row($image);
        $url = mysqli_query($arg_1, "SELECT url FROM other WHERE id='".$arg_2."'");
        $url_temp = mysqli_fetch_row($url);
        $name = mysqli_query($arg_1, "SELECT name FROM other WHERE id='".$arg_2."'");
        $name_temp = mysqli_fetch_row($name);
        $date = mysqli_query($arg_1, "SELECT date FROM other WHERE id='".$arg_2."'");
        $date_temp = mysqli_fetch_row($date);
        return array ($image_temp, $url_temp, $name_temp, $date_temp);
}
?>