<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Just A Channel</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
    <script src="main.js"></script>
        <div class="container">
            <header>
                <a href="" class="logo"></a>
                <div class="icons">
                    <a href="" class="facebook"></a>
                    <a href="" class="youtube"></a>
                    <a href="https://twitter.com/kolya_yashkov" class="twitter"></a>
                    <a href="" class="instagram"></a>
                </div>
                <div class="welcome">
                    <h3>welcome to<br>just a channel</h3>
                    <p>The compilation of all videos I published on both of my channels</p>
                </div>
                <form action="#">
                    <button>SIGN UP</button>
                </form>
            </header>
            <section>
                <nav id='navi'>
                    <img id='showMenuButton' src="img/showMenuButton.png">
                    <ul>
                        <li id='title'>Menu</li>
                        <li><a class='row' href="allvideos.php">All videos</a></li>
                        <li><a class='row' href="compilations.php?comp=compilation">Compilations</a></li>
                        <li><a class='row' href="reviews.php?comp=review">Reviews</a></li>
                        <li><a class='row' href="theories.php?comp=theory">Theories</a></li>
                        <li><a class='row' href="other.php?comp=other">Other</a></li>
                        <li><a class='row' href="index3.html">Mini game</a></li>
                    </ul>
                </nav>
                <main>
                    <div class="NewVideos">
                        <h4>NEW VIDEOS</h4>
                        <?php
                        
                        require_once 'connection.php';
                        
                        $link = mysqli_connect($host, $user, $password, $database) 
                        or die("Ошибка " . mysqli_error($link));

                        require_once 'sql_to_main_page.php';
                        
                        list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodb($link, $rl_count);
                        
                        $rl_count = $rl_count - 1;
                        
                        ?>

                        <div class='product' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><img src="<?=$bg_image_temp[0]?>"></div>
                        <div class='product_name'><a onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_name_temp[0]?></a></div>
                        <div class='product_date'><a id='product_date' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_date_temp[0]?></a></div>

                        <?php

                            $bg_image_temp = array();
                            $bg_url_temp = array();
                            $bg_name_temp = array();
                            $bg_date_temp = array();

                            list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodb($link, $rl_count);
                        
                        $rl_count = $rl_count - 1;
                        ?>
                        <div class='product2' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><img src="<?=$bg_image_temp[0]?>"></div>
                        <div class='product2_name'><a onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_name_temp[0]?></a></div>
                        <div class='product2_date'><a id='product2_date' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_date_temp[0]?></a></div>
                        
                        <?php

                            $bg_image_temp = array();
                            $bg_url_temp = array();
                            $bg_name_temp = array();
                            $bg_date_temp = array();

                            list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodb($link, $rl_count);
                        
                        $rl_count = $rl_count - 1;
                        ?>
                        <div class='product3' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><img src="<?=$bg_image_temp[0]?>"></div>
                        <div class='product3_name'><a onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_name_temp[0]?></a></div>
                        <div class='product3_date'><a id='product3_date' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_date_temp[0]?></a></div>
                        
                        <?php

                            $bg_image_temp = array();
                            $bg_url_temp = array();
                            $bg_name_temp = array();
                            $bg_date_temp = array();

                            list ($bg_image_temp, $bg_url_temp, $bg_name_temp, $bg_date_temp) = conntodb($link, $rl_count);

                        ?>
                        <div class='product4' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><img src="<?=$bg_image_temp[0]?>"></div>
                        <div class='product4_name'><a onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_name_temp[0]?></a></div>
                        <div class='product4_date'><a id='product4_date' onclick="window.open('<?=$bg_url_temp[0]?>','mywindow');" style="cursor: pointer;"><?=$bg_date_temp[0]?></a></div>
                        
                        <a href="allvideos.php" class="formore">MORE></a>
                    </div>
                </main>
            </section>
            <div class="clr"></div>
        </div>
        <footer>
                
        </footer>
    </body>
</html>