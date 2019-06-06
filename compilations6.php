<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>All videos - Just A Channel</title>
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
                        <li class="inactive"><a class='row' id="inactive">Compilations</a></li>
                        <ul class="compRows">
                            <li class="inactive" id='compilation'><a href="compilations.php?comp=compilation" id='inactive'>All compilations</a></li>
                            <li id='marvel'><a href="compilations.php?comp=marvel">marvel</a></li>
                            <li id='dc'><a href="compilations.php?comp=dc">dc comics</a></li>
                            <li id='gotham'><a href="compilations.php?comp=gotham">gotham</a></li>
                            <li id='multifandom'><a href="compilations.php?comp=multifandom">multifandom</a></li>
                            <li id='harry_potter'><a href="compilations.php?comp=harry_potter">harry potter</a></li>
                            <li id='ahs'><a href="compilations.php?comp=ahs">ahs</a></li>
                            <li id='riverdale'><a href="compilations.php?comp=riverdale">riverdale</a></li>
                            <li id='black_mirror'><a href="compilations.php?comp=black_mirror">black mirror</a></li>
                            <li id='stranger_things'><a href="compilations.php?comp=stranger_things">stranger things</a></li>
                            <li id='spiderman'><a href="compilations.php?comp=spiderman">spider-man</a></li>
                            <li id='videogames'><a href="compilations.php?comp=videogames">videogames</a></li>
                            <li id='anime'><a href="compilations.php?comp=anime">anime</a></li>
                            <li id='got'><a href="compilations.php?comp=game_of_thrones">game of thrones</a></li>
                            <li id='sherlock'><a href="compilations.php?comp=sherlock">sherlock</a></li>
                            <li id='twd'><a href="compilations.php?comp=walking_dead">the walking dead</a></li>
                            <li id='star_wars'><a href="compilations.php?comp=star_wars">star wars</a></li>
                            <li id='it'><a href="compilations.php?comp=it">it</a></li>
                            <li id='reupload'><a href="compilations.php?comp=upload">collections</a></li>
                            </ul>
                        <li><a class='row' href="reviews.php?comp=review">Reviews</a></li>
                        <li><a class='row' href="theories.php?comp=theory">Theories</a></li>
                        <li><a class='row' href="other.php?comp=other">Other</a></li>
                        <li><a class='row' href="index3.html">Mini game</a></li>
                    </ul>
                </nav>
                <main>
                    <div id="pageStatus" style="display: none;">compilations</div>
                    <div class="NewVideos">
                        <h4>compilations</h4>
                        <?php
                        
                        $checkComp = $_GET['comp'];
                            
                        ?>
                        <div class="pagination1">
                            <?php
                            echo '<a href="compilations5.php?comp=' . $checkComp . '">5</a>';
                                ?>
                            <?php
                            echo '<span id="toNextPage"><a href="compilations7.php?comp=' . $checkComp . '">7</a></span>';
                                ?>
                        </div>
                        <?php
                        
                        require_once 'connection.php';
                        
                        $link = mysqli_connect($host, $user, $password, $database) 
                        or die("Ошибка " . mysqli_error($link));
                        
                        $num = 6;
                        
                        require_once 'sql_to_compilations_page_main.php';
                        
                        $rl_count = $rl_count - ($num - 1) * 8;
                        
                        list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodb($link, $rl_count, $checkComp);
                        
                        $rl_count = $rl_count - 1;
                        ?>

                        <div style="display: none;" id='checkComp'><?=$checkComp?></div>
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
                                list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodb($link, $rl_count, $checkComp);
                        
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
                                list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodb($link, $rl_count, $checkComp);
                        
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
                                list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodb($link, $rl_count, $checkComp);
                        
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
                                list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodb($link, $rl_count, $checkComp);
                        
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
                                list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodb($link, $rl_count, $checkComp);
                        
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
                                list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodb($link, $rl_count, $checkComp);
                        
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
                                list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodb($link, $rl_count, $checkComp);
                            }
                            mysqli_query($link, "DROP TABLE compilation");
                        ?>
                        <div id='rl_count' style="display: none;"><?=$rl_count?></div>
                        <div class='product8' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><img src="<?=$bg_image_temp[0]?>"></div>
                        <div class='product8_name'><span id="name8"><a onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_name_temp[0]?></a></span></div>
                        <div class='product8_date'><a id='product8_date' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_date_temp[0]?></a></div>
                        
                        <div class="pagination2">
                            <?php
                            echo '<a href="compilations5.php?comp=' . $checkComp . '">5</a>';
                                ?>
                            <?php
                            echo '<span id="toNextPage2"><a href="compilations7.php?comp=' . $checkComp . '">7</a></span>';
                                ?>
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