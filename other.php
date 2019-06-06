<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Other - Just A Channel</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="style2.css">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <script src="main.js"></script>
        <div class="container">
            <header>
                <a href="index.php" class="logo"></a>
                <div class="icons">
                    <a href="" class="facebook"></a>
                    <a href="" class="youtube"></a>
                    <a href="" class="twitter"></a>
                    <a href="" class="instagram"></a>
                </div>
            </header>
            <section>
                <nav id='navi'>
                    <img id='showMenuButton' src="img/showMenuButton.png">
                    <ul>
                        <li><a id='title' class="backmenu" href="index.php">back</a></li>
                        <li><a class='row' href="allvideos.php">All Videos</a></li>
                        <li><a class='row' href="compilations.php?comp=compilation">Compilations</a></li>
                        <li><a class='row' href="reviews.php?comp=review">Reviews</a></li>
                        <li><a class='row' href="theories.php?comp=theory">Theories</a></li>
                        <li class="inactive"><a class='row' id="inactive">Other</a></li>
                        <li><a class='row' href="index3.html">Mini game</a></li>
                    </ul>
                </nav>
                <main>
                    <div class="NewVideos">
                        <h4>other</h4>
                        <?php
                        
                        $num = 1;
                        
                        $checkComp = $_GET['comp'];
                        
                        ?>
                        <div class="pagination1">
                            <div style="display: none;" id="pageNumb"><?=$num?></div>
                            <span id="firstPage"><a class="disabled">1</a></span>
                            <span id="toNextPage"><a class="disabled">2</a></span>
                        </div>
                        <?php
    
                        require_once 'connection.php';
                        
                        $link = mysqli_connect($host, $user, $password, $database) 
                        or die("Ошибка " . mysqli_error($link));

                        require_once 'sql_to_compilations_page_main.php';
                        
                        $rl_count = $rl_count - ($num - 1) * 8;
                        list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodbother($link, $rl_count, $checkComp);
                        
                        $rl_count = $rl_count - 1;
                        ?>

                        <div class='product' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><img src="<?=$bg_image_temp[0]?>"></div>
                        <div class='product_name'><span id="name1"><a onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_name_temp[0]?></a></span></div>
                        <div class='product_date'><a id='product_date' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_date_temp[0]?></a></div>

                        <?php

                            $bg_image_temp = array();
                            $bg_url_temp = array();
                            $bg_name_temp = array();
                            $bg_date_temp = array();

                            if ($rl_count == 0){
                                $bg_image_temp[0] = "img/coming_soon.png";
                                $bg_url_temp[0] = "";
                                $bg_name_temp[0] = "";
                                $bg_date_temp[0] = "";
                            } else {
                                list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodbother($link, $rl_count, $checkComp);
                                $rl_count = $rl_count - 1;
                            }
                        ?>
                        <div class='product2' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><img src="<?=$bg_image_temp[0]?>"></div>
                        <div class='product2_name'><span id="name2"><a onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_name_temp[0]?></a></span></div>
                        <div class='product2_date'><a id='product2_date' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_date_temp[0]?></a></div>
                        
                        <?php

                            $bg_image_temp = array();
                            $bg_url_temp = array();
                            $bg_name_temp = array();
                            $bg_date_temp = array();

                            if ($rl_count == 0){
                                $bg_image_temp[0] = "img/coming_soon.png";
                                $bg_url_temp[0] = "";
                                $bg_name_temp[0] = "";
                                $bg_date_temp[0] = "";
                            } else {
                                list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodbother($link, $rl_count, $checkComp);
                                $rl_count = $rl_count - 1;
                            }
                        ?>
                        <div class='product3' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><img src="<?=$bg_image_temp[0]?>"></div>
                        <div class='product3_name'><span id="name3"><a onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_name_temp[0]?></a></span></div>
                        <div class='product3_date'><a id='product3_date' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_date_temp[0]?></a></div>
                        
                        <?php

                            $bg_image_temp = array();
                            $bg_url_temp = array();
                            $bg_name_temp = array();
                            $bg_date_temp = array();

                            if ($rl_count == 0){
                                $bg_image_temp[0] = "img/coming_soon.png";
                                $bg_url_temp[0] = "";
                                $bg_name_temp[0] = "";
                                $bg_date_temp[0] = "";
                            } else {
                                list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodbother($link, $rl_count, $checkComp);
                                $rl_count = $rl_count - 1;
                            }
                        ?>
                        <div class='product4' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><img src="<?=$bg_image_temp[0]?>"></div>
                        <div class='product4_name'><span id="name4"><a onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_name_temp[0]?></a></span></div>
                        <div class='product4_date'><a id='product4_date' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_date_temp[0]?></a></div>
                        
                        <?php

                            $bg_image_temp = array();
                            $bg_url_temp = array();
                            $bg_name_temp = array();
                            $bg_date_temp = array();

                            if ($rl_count == 0){
                                $bg_image_temp[0] = "img/coming_soon.png";
                                $bg_url_temp[0] = "";
                                $bg_name_temp[0] = "";
                                $bg_date_temp[0] = "";
                            } else {
                                list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodbother($link, $rl_count, $checkComp);
                                $rl_count = $rl_count - 1;
                            }
                        ?>
                        <div class='product5' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><img src="<?=$bg_image_temp[0]?>"></div>
                        <div class='product5_name'><span id="name5"><a onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_name_temp[0]?></a></span></div>
                        <div class='product5_date'><a id='product5_date' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_date_temp[0]?></a></div>
                        
                        <?php

                            $bg_image_temp = array();
                            $bg_url_temp = array();
                            $bg_name_temp = array();
                            $bg_date_temp = array();

                            if ($rl_count == 0){
                                $bg_image_temp[0] = "img/coming_soon.png";
                                $bg_url_temp[0] = "";
                                $bg_name_temp[0] = "";
                                $bg_date_temp[0] = "";
                            } else {
                                list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodbother($link, $rl_count, $checkComp);
                                $rl_count = $rl_count - 1;
                            }
                        ?>
                        <div class='product6' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><img src="<?=$bg_image_temp[0]?>"></div>
                        <div class='product6_name'><span id="name6"><a onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_name_temp[0]?></a></span></div>
                        <div class='product6_date'><a id='product6_date' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_date_temp[0]?></a></div>
                        
                        <?php

                            $bg_image_temp = array();
                            $bg_url_temp = array();
                            $bg_name_temp = array();
                            $bg_date_temp = array();

                            if ($rl_count == 0){
                                $bg_image_temp[0] = "img/coming_soon.png";
                                $bg_url_temp[0] = "";
                                $bg_name_temp[0] = "";
                                $bg_date_temp[0] = "";
                            } else {
                                list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodbother($link, $rl_count, $checkComp);
                                $rl_count = $rl_count - 1;
                            }
                        ?>
                        <div class='product7' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><img src="<?=$bg_image_temp[0]?>"></div>
                        <div class='product7_name'><span id="name7"><a onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_name_temp[0]?></a></span></div>
                        <div class='product7_date'><a id='product7_date' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_date_temp[0]?></a></div>
                        
                        <?php

                            $bg_image_temp = array();
                            $bg_url_temp = array();
                            $bg_name_temp = array();
                            $bg_date_temp = array();

                            if ($rl_count == 0){
                                $bg_image_temp[0] = "img/coming_soon.png";
                                $bg_url_temp[0] = "";
                                $bg_name_temp[0] = "";
                                $bg_date_temp[0] = "";
                            } else {
                                list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodbother($link, $rl_count, $checkComp);
                            }
                            mysqli_query($link, "DROP TABLE other");
                        ?>
                        <div id='rl_count' style="display: none;"><?=$rl_count?></div>
                        <div class='product8' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><img src="<?=$bg_image_temp[0]?>"></div>
                        <div class='product8_name'><span id="name8"><a onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_name_temp[0]?></a></span></div>
                        <div class='product8_date'><a id='product8_date' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_date_temp[0]?></a></div>
                        
                        <div class="pagination2">
                            <span id="firstPage2"><a class="disabled">1</a></span>
                            <span id="toNextPage2"><a class="disabled">2</a></span>
                        </div>
                    </div>
                </main>
            </section>
            <div class="clr"></div>
        </div>
        <footer>
                
            </footer>
    </body>
</html>