document.onkeydown = function checkKeycode(event)
{
    if(!event) var event = window.event;
         
        //right
    if (event.keyCode == 39){
        right();
    } else 
    {if(event.which == 39){
        right();
    }}

        //down
    if (event.keyCode == 40){
        bottom();
    } else 
    {if(event.which == 40){
        bottom();
    }}
 
        //left
    if (event.keyCode == 37){
        left();
    } else 
    {if(event.which == 37){
        left();
    }}
 
        //up
    if (event.keyCode == 38){
        topp();
    }
    else {if(event.which == 38){
        topp();
    }}
    
    //menuOpen
    if (event.keyCode == 32){
        menu();
    }
    else if(event.which == 32){
        menu();
    }
    
    //кнопка enter
    if (event.keyCode == 13){
        enter();
    }
}
var mapp                = null, 
    mainn               = null,
    nLeft               = 0,
    nRight              = 0,
    nUp                 = 0,
    nDown               = 0,
    nHour               = 0,
    nMinutes            = 0,
    checkMenu           = -1,
    checkMenuScroll     = 1,
    checkDrctn          = 3,
    checkAuto           = -1,
    checkHeroMenu       = -1,
    checkXHeroScroll    = 0,
    checkYHeroScroll    = 0,
    heroChoId           = 0,
    nickName            = 0,
    checkNameMenu       = -1,
    checkMainMenuScroll = 1,
    checkMainMenu       = 1,
    checkAlertMenu      = -1,
    mainLocationId      = 0,
    checkAlertMenuScroll= 0,
    newLocationId       = 0,
    previousLocationId  = 0,
    xIfAlertNo          = 0,
    yIfAlertNo          = 0,
    correctX            = 0,
    w                   = 0,
    isDown              = false,
    timerIdL            = 0,
    timerIdT            = 0,
    timerIdB            = 0,
    timerIdR            = 0,
    timerIdM            = 0,
    timerIdE            = 0;

function correctMain(){
    w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    correctX = 555 - (w - 240)/2;
    
    mainn.style.left = (mainn.offsetLeft - correctX) + "px";
    mapp1.style.left = (mapp1.offsetLeft - correctX) + "px";
    mapp.style.left = (mapp.offsetLeft) + "px";
    menuu.style.left = (575 - correctX) + "px";
    changeName.style.left = (changeName.offsetLeft - correctX) + "px";
    clokk.style.left = (clokk.offsetLeft - correctX) + "px";
    hChoose1.style.left = (hChoose1.offsetLeft - correctX) + "px";
    hChoose2.style.left = (hChoose2.offsetLeft - correctX) + "px";
    hChoose3.style.left = (hChoose3.offsetLeft - correctX) + "px";
    hChoose4.style.left = (hChoose4.offsetLeft - correctX) + "px";
    hChoose5.style.left = (hChoose5.offsetLeft - correctX) + "px";
    hChoose6.style.left = (hChoose6.offsetLeft - correctX) + "px";
    hChooseMenu.style.left = (hChooseMenu.offsetLeft - correctX) + "px";
    regAt.style.left = (regAt.offsetLeft - correctX) + "px";
    rgstrMenu.style.left = (rgstrMenu.offsetLeft - correctX) + "px";
    mMenu.style.left = (mMenu.offsetLeft - correctX) + "px";
    mMenu1.style.left = (mMenu1.offsetLeft - correctX) + "px";
    mMenu2.style.left = (mMenu2.offsetLeft - correctX) + "px";
    mMenu3.style.left = (mMenu3.offsetLeft - correctX) + "px";
    mMenu4.style.left = (mMenu4.offsetLeft - correctX) + "px";
    mMenu5.style.left = (mMenu5.offsetLeft - correctX) + "px";
    mMenu6.style.left = (mMenu6.offsetLeft - correctX) + "px";
    motoo.style.left = (motoo.offsetLeft - correctX) + "px";
    inpName.style.left = (inpName.offsetLeft - correctX) + "px";
    alertMenu.style.left = (555 - correctX) + "px";
    ctrlLeft.style.left = (ctrlLeft.offsetLeft - correctX) + "px";
    ctrlTop.style.left = (ctrlTop.offsetLeft - correctX) + "px";
    ctrlBottom.style.left = (ctrlBottom.offsetLeft - correctX) + "px";
    ctrlRight.style.left = (ctrlRight.offsetLeft - correctX) + "px";
    ctrlMenu.style.left = (ctrlMenu.offsetLeft - correctX) + "px";
    ctrlEnter.style.left = (ctrlEnter.offsetLeft - correctX) + "px";
}

//логика работы часов
var timerId = setInterval(function(){
    var h = new Date();
    nHour = h.getHours();
    nMinutes = h.getMinutes();
        
    if (nHour < 10 && nMinutes >= 10){
        clokk.innerHTML = '0' + nHour + ':' + nMinutes;
    } else if (nHour >= 10 && nMinutes < 10){
        clokk.innerHTML = nHour + ':' + '0' + nMinutes;
    } else if (nHour < 10 && nMinutes < 10){
        clokk.innerHTML = '0' + nHour + ':' + '0' + nMinutes;
    } else
        clokk.innerHTML = nHour + ':' + nMinutes;
}, 1000);

//скролл в алерт меню
function alertMessageScroll(xAlertScroll){
    var x = xAlertScroll;
    if (checkAlertMenu == 1){
        if (checkAlertMenuScroll == 0 && x == 1 || checkAlertMenuScroll == 1 && x == -1){
            checkAlertMenuScroll = checkAlertMenuScroll + x;
            if (checkAlertMenuScroll == 0){
                alertMenuYes.style.opacity = 1;
                alertMenuNo.style.opacity = 0.7;
            }else if (checkAlertMenuScroll == 1){
                alertMenuYes.style.opacity = 0.7;
                alertMenuNo.style.opacity = 1;
            }
        }
    }
}

//алерт меню
function openAlertMessage(){
    if (mainLocationId == 0){
        var xAlert = mapp.offsetLeft;
        var yAlert = mapp.offsetTop;
    } else if (mainLocationId == 1){
        var xAlert = mapp1.offsetLeft;
        var yAlert = mapp1.offsetTop;
    }
    alertMenuYes.style.opacity = 1;
    alertMenuNo.style.opacity = 0.7;
    if (xAlert == 105 && yAlert >= -240 && yAlert <=-100 && mainLocationId == 0){
        alertMenu.style.zIndex = 3;
        alertMenu.style.display = "block";
        checkAlertMenu = 1;
        previousLocationId = 0;
        newLocationId = 1;
    } else if (xAlert == -810 && yAlert >= -670 && yAlert <=-530 && mainLocationId == 1){
        alertMenu.style.zIndex = 3;
        alertMenu.style.display = "block";;
        checkAlertMenu = 1;
        previousLocationId = 1;
        newLocationId = 0;
    }
}

function left(){
    if (checkAlertMenu > 0){
            alertMessageScroll(-1);
        }else if (checkHeroMenu > 0){
            heroMenuScroll(0, -1);
        } else if (checkMenu < 0 && checkHeroMenu < 0 && heroChoId == 0){
            move(-1, 0);
            openAlertMessage();
            nDown = 0;
            nRight = 0;
            nUp = 0;
            checkDrctn = 2;
            if (checkAuto == 1){
                motoo.src = "img/1heroauto2.png";
            } else if (checkAuto == -1){
               if (nLeft == 0 || nLeft == 1 || nLeft == 2 || nLeft == 3){
                    motoo.src = "img/4hero6.png";
                    nLeft = nLeft + 1;
                } else if (nLeft == 4 || nLeft == 5 || nLeft == 6 || nLeft == 7){
                    motoo.src = "img/4hero5.png";
                    nLeft = nLeft + 1;
                } else if (nLeft == 8 || nLeft == 9 || nLeft == 10 || nLeft == 11){
                    motoo.src = "img/4hero4.png";
                    nLeft = nLeft + 1;
                } else if (nLeft == 12 || nLeft == 13 || nLeft == 14 || nLeft == 15){
                    motoo.src = "img/4hero5.png";
                    if (nLeft == 15){
                        nLeft = 0;
                    }
                    nLeft = nLeft + 1;
                } 
            } 
        } else if (checkMenu < 0 && checkHeroMenu < 0 && heroChoId == 1){
            move(-1, 0);
            openAlertMessage();
            nDown = 0;
            nRight = 0;
            nUp = 0;
            checkDrctn = 2;
            if (checkAuto == 1){
                motoo.src = "img/2heroauto2.png";
            } else if (checkAuto == -1){
               if (nLeft == 0 || nLeft == 1 || nLeft == 2 || nLeft == 3){
                    motoo.src = "img/5hero6.png";
                    nLeft = nLeft + 1;
                } else if (nLeft == 4 || nLeft == 5 || nLeft == 6 || nLeft == 7){
                    motoo.src = "img/5hero5.png";
                    nLeft = nLeft + 1;
                } else if (nLeft == 8 || nLeft == 9 || nLeft == 10 || nLeft == 11){
                    motoo.src = "img/5hero4.png";
                    nLeft = nLeft + 1;
                } else if (nLeft == 12 || nLeft == 13 || nLeft == 14 || nLeft == 15){
                    motoo.src = "img/5hero5.png";
                    if (nLeft == 15){
                        nLeft = 0;
                    }
                    nLeft = nLeft + 1;
                } 
            } 
        } else if (checkMenu < 0 && checkHeroMenu < 0 && heroChoId == 2){
            move(-1, 0);
            openAlertMessage();
            nDown = 0;
            nRight = 0;
            nUp = 0;
            checkDrctn = 2;
            if (checkAuto == 1){
                motoo.src = "img/2heroauto2.png";
            } else if (checkAuto == -1){
               if (nLeft == 0 || nLeft == 1 || nLeft == 2 || nLeft == 3){
                    motoo.src = "img/3hero6.png";
                    nLeft = nLeft + 1;
                } else if (nLeft == 4 || nLeft == 5 || nLeft == 6 || nLeft == 7){
                    motoo.src = "img/3hero5.png";
                    nLeft = nLeft + 1;
                } else if (nLeft == 8 || nLeft == 9 || nLeft == 10 || nLeft == 11){
                    motoo.src = "img/3hero4.png";
                    nLeft = nLeft + 1;
                } else if (nLeft == 12 || nLeft == 13 || nLeft == 14 || nLeft == 15){
                    motoo.src = "img/3hero5.png";
                    if (nLeft == 15){
                        nLeft = 0;
                    }
                    nLeft = nLeft + 1;
                } 
            } 
        }
}

function topp(){
    if (checkAlertMenu < 0){
            if (checkMainMenu > 0){
                mainMenuScroll(-1);
            } else if (checkHeroMenu > 0){
                heroMenuScroll(-1, 0);
            } else if (checkMenu < 0 && checkHeroMenu < 0 && heroChoId == 0){
                move(0, -1);
                openAlertMessage();
                nDown = 0;
                nRight = 0;
                nLeft = 0;
                checkDrctn = 3;
                if (checkAuto == 1){
                    motoo.src = "img/1heroauto4.png";
                } else if (checkAuto == -1){
                    if (nUp == 0 || nUp == 1 || nUp == 2 || nUp == 3){
                        motoo.src = "img/4hero8.png";
                        nUp = nUp + 1;
                    } else if (nUp == 4 || nUp == 5 || nUp == 6 || nUp == 7){
                        motoo.src = "img/4hero7.png";
                        nUp = nUp + 1;
                    } else if (nUp == 8 || nUp == 9 || nUp == 10 || nUp == 11){
                        motoo.src = "img/4hero9.png";
                        nUp = nUp + 1;
                    } else if (nUp == 12 || nUp == 13 || nUp == 14 || nUp == 15){
                        motoo.src = "img/4hero7.png";
                        if (nUp == 15){
                            nUp = 0;
                        }
                        nUp = nUp + 1;
                    }
                }
            } else if (checkMenu < 0 && checkHeroMenu < 0 && heroChoId == 1){
                move(0, -1);
                openAlertMessage();
                nDown = 0;
                nRight = 0;
                nLeft = 0;
                checkDrctn = 3;
                if (checkAuto == 1){
                    motoo.src = "img/2heroauto4.png";
                } else if (checkAuto == -1){
                    if (nUp == 0 || nUp == 1 || nUp == 2 || nUp == 3){
                        motoo.src = "img/5hero8.png";
                        nUp = nUp + 1;
                    } else if (nUp == 4 || nUp == 5 || nUp == 6 || nUp == 7){
                        motoo.src = "img/5hero7.png";
                        nUp = nUp + 1;
                    } else if (nUp == 8 || nUp == 9 || nUp == 10 || nUp == 11){
                        motoo.src = "img/5hero9.png";
                        nUp = nUp + 1;
                    } else if (nUp == 12 || nUp == 13 || nUp == 14 || nUp == 15){
                        motoo.src = "img/5hero7.png";
                        if (nUp == 15){
                            nUp = 0;
                        }
                        nUp = nUp + 1;
                    }
                }
                } else if (checkMenu < 0 && checkHeroMenu < 0 && heroChoId == 2){
                move(0, -1);
                openAlertMessage();
                nDown = 0;
                nRight = 0;
                nLeft = 0;
                checkDrctn = 3;
                if (checkAuto == 1){
                    motoo.src = "img/2heroauto4.png";
                } else if (checkAuto == -1){
                    if (nUp == 0 || nUp == 1 || nUp == 2 || nUp == 3){
                        motoo.src = "img/3hero8.png";
                        nUp = nUp + 1;
                    } else if (nUp == 4 || nUp == 5 || nUp == 6 || nUp == 7){
                        motoo.src = "img/3hero7.png";
                        nUp = nUp + 1;
                    } else if (nUp == 8 || nUp == 9 || nUp == 10 || nUp == 11){
                        motoo.src = "img/3hero9.png";
                        nUp = nUp + 1;
                    } else if (nUp == 12 || nUp == 13 || nUp == 14 || nUp == 15){
                        motoo.src = "img/3hero7.png";
                        if (nUp == 15){
                            nUp = 0;
                        }
                        nUp = nUp + 1;
                    }
                } 
            } else if (checkMenu > 0){
                menuScroll(-1);
            }
        }
}

function bottom(){
    if (checkAlertMenu < 0){
            if (checkMainMenu > 0){
                mainMenuScroll(1);
            } else if (checkHeroMenu > 0){
                heroMenuScroll(1, 0);
            } else 
            if (checkMenu < 0 && checkHeroMenu < 0 && heroChoId == 0){
                move(0, 1);
                openAlertMessage();
                nLeft = 0;
                nRight = 0;
                nUp = 0;
                checkDrctn = 4;
                if (checkAuto == 1){
                    moto.src = "img/1heroauto1.png";
                } else if (checkAuto == -1){
                    if (nDown == 0 || nDown == 1 || nDown == 2 || nDown == 3){
                        motoo.src = "img/4hero2.png";
                        nDown = nDown + 1;
                    } else if (nDown == 4 || nDown == 5 || nDown == 6 || nDown == 7){
                        motoo.src = "img/4hero1.png";
                        nDown = nDown + 1;
                    } else if (nDown == 8 || nDown == 9 || nDown == 10 || nDown == 11){
                        motoo.src = "img/4hero3.png";
                        nDown = nDown + 1;
                    } else if (nDown == 12 || nDown == 13 || nDown == 14 || nDown == 15){
                        motoo.src = "img/4hero1.png";
                        if (nDown == 15){
                            nDown = 0;
                        }
                        nDown = nDown + 1;
                    }
                }
            } else if (checkMenu < 0 && checkHeroMenu < 0 && heroChoId == 1){
                move(0, 1);
                openAlertMessage();
                nLeft = 0;
                nRight = 0;
                nUp = 0;
                checkDrctn = 4;
                if (checkAuto == 1){
                    moto.src = "img/2heroauto1.png";
                } else if (checkAuto == -1){
                    if (nDown == 0 || nDown == 1 || nDown == 2 || nDown == 3){
                        motoo.src = "img/5hero2.png";
                        nDown = nDown + 1;
                    } else if (nDown == 4 || nDown == 5 || nDown == 6 || nDown == 7){
                        motoo.src = "img/5hero1.png";
                        nDown = nDown + 1;
                    } else if (nDown == 8 || nDown == 9 || nDown == 10 || nDown == 11){
                        motoo.src = "img/5hero3.png";
                        nDown = nDown + 1;
                    } else if (nDown == 12 || nDown == 13 || nDown == 14 || nDown == 15){
                        motoo.src = "img/5hero1.png";
                        if (nDown == 15){
                            nDown = 0;
                        }
                        nDown = nDown + 1;
                    }
                }
            } else if (checkMenu < 0 && checkHeroMenu < 0 && heroChoId == 2){
                move(0, 1);
                openAlertMessage();
                nLeft = 0;
                nRight = 0;
                nUp = 0;
                checkDrctn = 4;
                if (checkAuto == 1){
                    moto.src = "img/2heroauto1.png";
                } else if (checkAuto == -1){
                    if (nDown == 0 || nDown == 1 || nDown == 2 || nDown == 3){
                        motoo.src = "img/3hero2.png";
                        nDown = nDown + 1;
                    } else if (nDown == 4 || nDown == 5 || nDown == 6 || nDown == 7){
                        motoo.src = "img/3hero1.png";
                        nDown = nDown + 1;
                    } else if (nDown == 8 || nDown == 9 || nDown == 10 || nDown == 11){
                        motoo.src = "img/3hero3.png";
                        nDown = nDown + 1;
                    } else if (nDown == 12 || nDown == 13 || nDown == 14 || nDown == 15){
                        motoo.src = "img/3hero1.png";
                        if (nDown == 15){
                            nDown = 0;
                        }
                        nDown = nDown + 1;
                    }
                }
            } else if (checkMenu > 0){
                menuScroll(1);
            }
        }
}

function right(){
    if (checkAlertMenu > 0){
            alertMessageScroll(1);
        }else if (checkHeroMenu > 0){
            heroMenuScroll(0, 1);
        } else if (checkHeroMenu < 0 && heroChoId == 0){ 
            if (checkMenu < 0){
                move(1, 0);
                openAlertMessage();
                nLeft = 0;
                nUp = 0;
                nDown = 0;
                checkDrctn = 1;
                if (checkAuto == 1){
                    motoo.src = "img/1heroauto3.png";
                } else if (checkAuto == -1){   
                    if (nRight == 0 || nRight == 1 || nRight == 2 || nRight == 3){
                        motoo.src = "img/4hero12.png";
                        nRight = nRight + 1;
                    } else if (nRight == 4 || nRight == 5 || nRight == 6 || nRight == 7){
                        motoo.src = "img/4hero11.png";
                        nRight = nRight + 1;
                    } else if (nRight == 8 || nRight == 9 || nRight == 10 || nRight == 11){
                        motoo.src = "img/4hero10.png";
                        nRight = nRight + 1;
                    } else if (nRight == 12 || nRight == 13 || nRight == 14 || nRight == 15){
                        motoo.src = "img/4hero11.png";
                        if (nRight == 15){
                            nRight = 0;
                        }
                        nRight = nRight + 1;
                    }
                }
            }
        } else if (checkHeroMenu < 0 && heroChoId == 1){ 
            if (checkMenu < 0){
                move(1, 0);
                openAlertMessage();
                nLeft = 0;
                nUp = 0;
                nDown = 0;
                checkDrctn = 1;
                if (checkAuto == 1){
                    motoo.src = "img/2heroauto3.png";
                } else if (checkAuto == -1){   
                    if (nRight == 0 || nRight == 1 || nRight == 2 || nRight == 3){
                        motoo.src = "img/5hero12.png";
                        nRight = nRight + 1;
                    } else if (nRight == 4 || nRight == 5 || nRight == 6 || nRight == 7){
                        motoo.src = "img/5hero11.png";
                        nRight = nRight + 1;
                    } else if (nRight == 8 || nRight == 9 || nRight == 10 || nRight == 11){
                        motoo.src = "img/5hero10.png";
                        nRight = nRight + 1;
                    } else if (nRight == 12 || nRight == 13 || nRight == 14 || nRight == 15){
                        motoo.src = "img/5hero11.png";
                        if (nRight == 15){
                            nRight = 0;
                        }
                        nRight = nRight + 1;
                    }
                }
            }
        } else if (checkHeroMenu < 0 && heroChoId == 2){ 
            if (checkMenu < 0){
                move(1, 0);
                openAlertMessage();
                nLeft = 0;
                nUp = 0;
                nDown = 0;
                checkDrctn = 1;
                if (checkAuto == 1){
                    motoo.src = "img/2heroauto3.png";
                } else if (checkAuto == -1){   
                    if (nRight == 0 || nRight == 1 || nRight == 2 || nRight == 3){
                        motoo.src = "img/3hero12.png";
                        nRight = nRight + 1;
                    } else if (nRight == 4 || nRight == 5 || nRight == 6 || nRight == 7){
                        motoo.src = "img/3hero11.png";
                        nRight = nRight + 1;
                    } else if (nRight == 8 || nRight == 9 || nRight == 10 || nRight == 11){
                        motoo.src = "img/3hero10.png";
                        nRight = nRight + 1;
                    } else if (nRight == 12 || nRight == 13 || nRight == 14 || nRight == 15){
                        motoo.src = "img/3hero11.png";
                        if (nRight == 15){
                            nRight = 0;
                        }
                        nRight = nRight + 1;
                    }
                }
            }
        }
}

function menu(){
    if (checkAlertMenu < 0){
            if (checkMenu < 0){
                menuu.style.display = "block";
                checkMenu = 1;
                icon1.style.boxSizing = "border-box";
                icon1.style.border = "2px solid #E610EC";

            } else if (checkMenu > 0){
                menuu.style.display = "none";
                checkMenu = -1;
                checkMenuScroll = 1;
                icon1.style.border = "0px";
                icon2.style.border = "0px";
                icon3.style.border = "0px";
                icon4.style.border = "0px";
                icon5.style.border = "0px";
                icon6.style.border = "0px";
                icon7.style.border = "0px";
                icon8.style.border = "0px";
                icon9.style.border = "0px";
            }
        }
}

function enter(){
    if (checkAlertMenu > 0){
            if (checkAlertMenuScroll == 0){
                if (mainLocationId == 0){
                    mapp.style.display = "none";
                    mapp1.style.display = "block";
                    checkAlertMenu = -1;
                    checkAlertMenuScroll = 0;
                    alertMenu.style.display = "none";
                    mapp1.style.left = -795 + "px";
                    mapp1.style.top = -580 + "px";
                    if (heroChoId == 0){
                        motoo.src = "img/4hero5.png";
                    } else if (heroChoId == 1){
                        motoo.src = "img/5hero5.png";
                    } else if (heroChoId == 2){
                        motoo.src = "img/3hero5.png";
                    }
                    mainLocationId = newLocationId;
                } else if (mainLocationId == 1){
                    mapp1.style.display = "none";
                    mapp.style.display = "block";
                    checkAlertMenu = -1;
                    checkAlertMenuScroll = 0;
                    alertMenu.style.display = "none";
                    mainLocationId = newLocationId;
                    mapp.style.left = 95 + "px";
                    mapp.style.top = -170 + "px";
                    if (heroChoId == 0){
                        motoo.src = "img/4hero11.png";
                    } else if (heroChoId == 1){
                        motoo.src = "img/5hero11.png";
                    } else if (heroChoId == 2){
                        motoo.src = "img/3hero11.png";
                    }
                }
                alertMenuYes.style.opacity = 1;
                alertMenuNo.style.opacity = 0.7;
            } else if (checkAlertMenuScroll == 1){
                checkAlertMenu = -1;
                checkAlertMenuScroll = 0;
                alertMenu.style.zIndex = -1;
                mainLocationId = previousLocationId;
                alertMenuYes.style.opacity = 1;
                alertMenuNo.style.opacity = 0.7;
                if (mainLocationId == 0){
                    mapp.style.left = 95 + "px";
                    mapp.style.top = -170 + "px";
                    if (heroChoId == 0){
                        motoo.src = "img/4hero11.png";
                    } else if (heroChoId == 1){
                        motoo.src = "img/5hero11.png";
                    } else if (heroChoId == 2){
                        motoo.src = "img/3hero11.png";
                    }
                } else if (mainLocationId == 1){
                    mapp1.style.left = -795 + "px";
                    mapp1.style.top = -580 + "px";
                    if (heroChoId == 0){
                        motoo.src = "img/4hero5.png";
                    } else if (heroChoId == 1){
                        motoo.src = "img/5hero5.png";
                    } else if (heroChoId == 2){
                        motoo.src = "img/3hero5.png";
                    }
                }
            }
        }
        if (checkMainMenu > 0){
            if (checkMainMenuScroll == 3){
                checkMainMenu = -1;
                mMenu.style.display = "none";
                checkNameMenu = 1;
            }
        } else if (checkNameMenu > 0){
            changeName.innerHTML = nickName;
            rgstrMenu.style.display= "none";
            checkNameMenu = -1;
            checkHeroMenu = 1;
        } else if (checkHeroMenu > 0){
            if (
                checkXHeroScroll == 0
                && checkYHeroScroll == 0){
                heroChoId = 0;
                motoo.src = "img/4hero7.png";
            } else if (  
                checkXHeroScroll == 0
                && checkYHeroScroll == 1){
                heroChoId = 1;
                motoo.src = "img/5hero7.png";
            } else if (  
                checkXHeroScroll == 0
                && checkYHeroScroll == 2){
                heroChoId = 2;
                motoo.src = "img/3hero7.png";
            }
            checkHeroMenu = -1;
            hChooseMenu.style.display = "none";
        } else if (checkMenuScroll == 5 && checkAuto == -1 && heroChoId == 0){
            if (checkDrctn == 1){
                motoo.src="img/1heroauto3.png";
            }else if (checkDrctn == 2){
                motoo.src="img/1heroauto2.png";
            }else if (checkDrctn == 3){
                motoo.src="img/1heroauto4.png";
            }else if (checkDrctn == 4){
                motoo.src="img/1heroauto1.png";
            }
            checkAuto = 1;
        } else if (checkMenuScroll == 5 && checkAuto == 1  && heroChoId == 0){
            if (checkDrctn == 1){
                motoo.src="img/4hero11.png";
            } else if (checkDrctn == 2){
                motoo.src="img/4hero5.png";
            } else if (checkDrctn == 3){
                motoo.src="img/4hero7.png";
            } else if (checkDrctn == 4){
                motoo.src="img/4hero1.png";
            }
            checkAuto = -1;
            nLeft = 0;
            nUp = 0;
            nDown = 0;
            nRight = 0;
        } else if (checkMenuScroll == 5 && checkAuto == -1 && heroChoId == 1){
            if (checkDrctn == 1){
                motoo.src="img/2heroauto3.png";
            }else if (checkDrctn == 2){
                motoo.src="img/2heroauto2.png";
            }else if (checkDrctn == 3){
                motoo.src="img/2heroauto4.png";
            }else if (checkDrctn == 4){
                motoo.src="img/2heroauto1.png";
            }
            checkAuto = 1;
        } else if (checkMenuScroll == 5 && checkAuto == 1  && heroChoId == 1){
            if (checkDrctn == 1){
                motoo.src="img/5hero11.png";
            } else if (checkDrctn == 2){
                motoo.src="img/5hero5.png";
            } else if (checkDrctn == 3){
                motoo.src="img/5hero7.png";
            } else if (checkDrctn == 4){
                motoo.src="img/5hero1.png";
            }
            checkAuto = -1;
            nLeft = 0;
            nUp = 0;
            nDown = 0;
            nRight = 0;
        } else if (checkMenuScroll == 5 && checkAuto == -1 && heroChoId == 2){
            if (checkDrctn == 1){
                motoo.src="img/2heroauto3.png";
            }else if (checkDrctn == 2){
                motoo.src="img/2heroauto2.png";
            }else if (checkDrctn == 3){
                motoo.src="img/2heroauto4.png";
            }else if (checkDrctn == 4){
                motoo.src="img/2heroauto1.png";
            }
            checkAuto = 1;
        } else if (checkMenuScroll == 5 && checkAuto == 1  && heroChoId == 2){
            if (checkDrctn == 1){
                motoo.src="img/3hero11.png";
            } else if (checkDrctn == 2){
                motoo.src="img/3hero5.png";
            } else if (checkDrctn == 3){
                motoo.src="img/3hero7.png";
            } else if (checkDrctn == 4){
                motoo.src="img/3hero1.png";
            }
            checkAuto = -1;
            nLeft = 0;
            nUp = 0;
            nDown = 0;
            nRight = 0;
        }
            menuu.style.display = "none";
            checkMenu = -1;
            checkMenuScroll = 1;
            icon1.style.border = "0px";
            icon2.style.border = "0px";
            icon3.style.border = "0px";
            icon4.style.border = "0px";
            icon5.style.border = "0px";
            icon6.style.border = "0px";
            icon7.style.border = "0px";
            icon8.style.border = "0px";
            icon9.style.border = "0px";
}

function leftButton(e) {
    e.preventDefault();
    e = e || event;
    target = e.target || e.srcElement;
    if (checkMenu < 0
       && checkHeroMenu < 0
       && checkNameMenu < 0
       && checkAlertMenu < 0
       && checkMainMenu < 0){
        timerIdL = setInterval(function() {
            left();
        }, 40);
    } else {
        left();
        timerIdL = setInterval(function() {
            left();
        }, 300);
    }
    
}

function topButton(e2) {
    e2.preventDefault();
    e2 = e2 || event;
    target = e2.target || e2.srcElement;
    if (checkMenu < 0
       && checkHeroMenu < 0
       && checkNameMenu < 0
       && checkAlertMenu < 0
       && checkMainMenu < 0){
        timerIdT = setInterval(function() {
            topp();
        }, 40);
    } else {
        topp();
        timerIdT = setInterval(function() {
            topp();
        }, 300);
    }
}

function bottomButton(e3) {
    e3.preventDefault();
    e3 = e3 || event;
    target = e3.target || e3.srcElement;
    
    if (checkMenu < 0
       && checkHeroMenu < 0
       && checkNameMenu < 0
       && checkAlertMenu < 0
       && checkMainMenu < 0){
        timerIdB = setInterval(function() {
            bottom();
        }, 40);
    } else {
        bottom();
        timerIdB = setInterval(function() {
            bottom();
        }, 300);
    }
}

function rightButton(e4) {
    e4.preventDefault();
    e4 = e4 || event;
    target = e4.target || e4.srcElement;
    
    if (checkMenu < 0
       && checkHeroMenu < 0
       && checkNameMenu < 0
       && checkAlertMenu < 0
       && checkMainMenu < 0){
        timerIdR = setInterval(function() {
            right();
        }, 40);
    } else {
        right();
        timerIdR = setInterval(function() {
            right();
        }, 300);
    }
}

function menuButton(e5) {
    e5.preventDefault();
    e5 = e5 || event;
    target = e5.target || e5.srcElement;
    menu();
    timerIdM = setInterval(function() {
        menu();
    }, 300);
}

function enterButton(e6) {
    e6.preventDefault();
    e6 = e6 || event;
    target = e6.target || e6.srcElement;
    enter();
    timerIdE = setInterval(function() {
        enter();
    }, 300);
}

//сохранение введенного имени
function saveNameValue(){
    nickName = document.getElementById("inputName").value;
}

//main menu
function mainMenuScroll(mainScroll){
    var xMain = mainScroll;
    if (checkMainMenuScroll == 1 
        && xMain < 0){
        checkMainMenuScroll = 1;
    }else if(checkMainMenuScroll == 6
            && xMain > 0){
        checkMenuScroll = 6;
    } else {
        checkMainMenuScroll = checkMainMenuScroll + xMain;
        if (checkMainMenuScroll == 1){
            mMenu1.style.opacity = "1";
            mMenu2.style.opacity = "0.7";
        } else if (checkMainMenuScroll == 2){
            mMenu2.style.opacity = "1";
            mMenu1.style.opacity = "0.7";
            mMenu3.style.opacity = "0.7";
        } else if (checkMainMenuScroll == 3){
            mMenu3.style.opacity = "1";
            mMenu2.style.opacity = "0.7";
            mMenu4.style.opacity = "0.7";
        } else if (checkMainMenuScroll == 4){
            mMenu4.style.opacity = "1";
            mMenu3.style.opacity = "0.7";
            mMenu5.style.opacity = "0.7";
        } else if (checkMainMenuScroll == 5){
            mMenu5.style.opacity = "1";
            mMenu4.style.opacity = "0.7";
            mMenu6.style.opacity = "0.7";
        } else if (checkMainMenuScroll == 6){
            mMenu6.style.opacity = "1";
            mMenu5.style.opacity = "0.7";
        }
    }
}

//логика меню выбора персонажа
function heroMenuScroll(vHXScroll, VHYScroll){
    var xHero = vHXScroll;
    var yHero = VHYScroll;
    if (checkXHeroScroll == 0
       && checkYHeroScroll == 0
       && (xHero < 0 || yHero < 0)){
            checkXHeroScroll = 0;
            checkYHeroScroll = 0;
        } else if (
            checkXHeroScroll == 0
            && checkYHeroScroll == 1
            && xHero < 0){
                checkXHeroScroll = 0;
                checkYHeroScroll = 1;
        } else if (
            checkXHeroScroll == 0
            && checkYHeroScroll == 2
            && (yHero > 0 || xHero < 0)){
                checkXHeroScroll = 0;
                checkYHeroScroll = 2;
        } else if (
            checkXHeroScroll == 1
            && checkYHeroScroll == 0
            && (yHero < 0 || xHero > 0)){
                checkXHeroScroll = 1;
                checkYHeroScroll = 0;
        } else if (
            checkXHeroScroll == 1
            && checkYHeroScroll == 1
            && xHero > 0){
                checkXHeroScroll = 1;
                checkYHeroScroll = 1;
        } else if (
            checkXHeroScroll == 1
            && checkYHeroScroll == 2
            && (yHero > 0 || xHero > 0)){
                checkXHeroScroll = 1;
                checkYHeroScroll = 2;
        } else {
            checkXHeroScroll = checkXHeroScroll + xHero;
            checkYHeroScroll = checkYHeroScroll + yHero;
            if (checkXHeroScroll == 0
                && checkYHeroScroll == 0){
                hChoose1.style.opacity = "1";
                hChoose2.style.opacity = "0.7";
                hChoose4.style.opacity = "0.7";
            } else if (checkXHeroScroll == 0
                && checkYHeroScroll == 1){
                hChoose2.style.opacity = "1";
                hChoose1.style.opacity = "0.7";
                hChoose3.style.opacity = "0.7";
                hChoose5.style.opacity = "0.7";
            } else if (checkXHeroScroll == 0
                && checkYHeroScroll == 2){
                hChoose3.style.opacity = "1";
                hChoose2.style.opacity = "0.7";
                hChoose6.style.opacity = "0.7";
            } else if (checkXHeroScroll == 1
                && checkYHeroScroll == 0){
                hChoose4.style.opacity = "1";
                hChoose1.style.opacity = "0.7";
                hChoose5.style.opacity = "0.7";
            } else if (checkXHeroScroll == 1
                && checkYHeroScroll == 1){
                hChoose5.style.opacity = "1";
                hChoose4.style.opacity = "0.7";
                hChoose2.style.opacity = "0.7";
                hChoose6.style.opacity = "0.7";
            } else if (checkXHeroScroll == 1
                && checkYHeroScroll == 2){
                hChoose6.style.opacity = "1";
                hChoose3.style.opacity = "0.7";
                hChoose5.style.opacity = "0.7";
            }
        }
    
}

//логика бокового меню
function menuScroll(vScroll){
    if (checkMenuScroll == 1 
        && vScroll < 0){
        checkMenuScroll = 1;
    }else if(checkMenuScroll == 9
            && vScroll > 0){
        checkMenuScroll = 9;
    } else {
        checkMenuScroll = checkMenuScroll + vScroll;
        if (checkMenuScroll == 1){
            icon1.style.boxSizing = "border-box";
            icon1.style.border = "2px solid #E610EC";
            icon2.style.border = "0px";
        } else if (checkMenuScroll == 2){
            icon2.style.boxSizing = "border-box";
            icon2.style.border = "2px solid #E610EC";
            icon1.style.border = "0px";
            icon3.style.border = "0px";
        } else if (checkMenuScroll == 3){
            icon3.style.boxSizing = "border-box";
            icon3.style.border = "2px solid #E610EC";
            icon2.style.border = "0px";
            icon4.style.border = "0px";
        } else if (checkMenuScroll == 4){
            icon4.style.boxSizing = "border-box";
            icon4.style.border = "2px solid #E610EC";
            icon3.style.border = "0px";
            icon5.style.border = "0px";
        } else if (checkMenuScroll == 5){
            icon5.style.boxSizing = "border-box";
            icon5.style.border = "2px solid #E610EC";
            icon4.style.border = "0px";
            icon6.style.border = "0px";
        } else if (checkMenuScroll == 6){
            icon6.style.boxSizing = "border-box";
            icon6.style.border = "2px solid #E610EC";
            icon5.style.border = "0px";
            icon7.style.border = "0px";
        } else if (checkMenuScroll == 7){
            icon7.style.boxSizing = "border-box";
            icon7.style.border = "2px solid #E610EC";
            icon6.style.border = "0px";
            icon8.style.border = "0px";
        } else if (checkMenuScroll == 8){
            icon8.style.boxSizing = "border-box";
            icon8.style.border = "2px solid #E610EC";
            icon7.style.border = "0px";
            icon9.style.border = "0px";
        } else if (checkMenuScroll == 9){
            icon9.style.boxSizing = "border-box";
            icon9.style.border = "2px solid #E610EC";
            icon8.style.border = "0px";
        }
    }
}

//логика движения персонажа
function move(vX, vY) {
        mainn.style.top = 0 + "px";
        mainn.style.left = 0 + "px";
            if ( mainLocationId == 0 && ( 
                mapp.offsetTop - vY * 5<= -1425
                || mapp.offsetLeft - vX * 5>= 110
                || mapp.offsetTop - vY * 5>= 171
                || mapp.offsetLeft - vX * 5<= -1480
                ||
                (mapp.offsetLeft - vX * 5>= -280
                 && mapp.offsetTop - vY * 5>= -97
                 && mapp.offsetTop - vY * 5<= 35
                 )
                ||
                (mapp.offsetTop - vY * 5>= 20
                && mapp.offsetLeft - vX * 5>= -60
                )
                ||
                (mapp.offsetLeft - vX * 5>= -470
                 && mapp.offsetTop - vY * 5>= -435
                 && mapp.offsetTop - vY * 5<= -245
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -410
                 && mapp.offsetTop - vY * 5>= -565
                 && mapp.offsetTop - vY * 5<= -435
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -410
                 && mapp.offsetTop - vY * 5>= -605
                 && mapp.offsetTop - vY * 5<= -565
                 && mapp.offsetLeft - vX * 5<= -330
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -250
                 && mapp.offsetTop - vY * 5>= -605
                 && mapp.offsetTop - vY * 5<= -565
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -230
                 && mapp.offsetTop - vY * 5>= -855
                 && mapp.offsetTop - vY * 5<= -605
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -230
                 && mapp.offsetLeft - vX * 5<= -200
                 && mapp.offsetTop - vY * 5>= -895
                 && mapp.offsetTop - vY * 5<= -855
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -120
                 && mapp.offsetTop - vY * 5>= -895
                 && mapp.offsetTop - vY * 5<= -855
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -30
                 && mapp.offsetTop - vY * 5>= -975
                 && mapp.offsetTop - vY * 5<= -895
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -230
                 && mapp.offsetTop - vY * 5>= -1195
                 && mapp.offsetTop - vY * 5<= -975
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -590
                 && mapp.offsetTop - vY * 5>= -1425
                 && mapp.offsetTop - vY * 5<= -1195
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -460
                 && mapp.offsetLeft - vX * 5<= -390
                 && mapp.offsetTop - vY * 5>= -1085
                 && mapp.offsetTop - vY * 5<= -705
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -1080
                 && mapp.offsetLeft - vX * 5<= -440
                 && mapp.offsetTop - vY * 5>= -1085
                 && mapp.offsetTop - vY * 5<= -1015
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -1080
                 && mapp.offsetLeft - vX * 5<= -1010
                 && mapp.offsetTop - vY * 5>= -1015
                 && mapp.offsetTop - vY * 5<= -705
                 )
                ||
                (mapp.offsetLeft - vX * 5<= -900
                 && mapp.offsetTop - vY * 5<= -1185
                 )
                ||
                (mapp.offsetLeft - vX * 5<= -1300
                 && mapp.offsetTop - vY * 5<= -185
                 )
                ||
                (mapp.offsetLeft - vX * 5<= -1190
                 && mapp.offsetTop - vY * 5>= -475
                 && mapp.offsetTop - vY * 5<= -185
                 )
                ||
                (mapp.offsetLeft - vX * 5<= -1090
                 && mapp.offsetTop - vY * 5>= -435
                 && mapp.offsetTop - vY * 5<= -185
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -1110
                 && mapp.offsetLeft - vX * 5<= -1030
                 && mapp.offsetTop - vY * 5>= -475
                 && mapp.offsetTop - vY * 5<= -185
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -920
                 && mapp.offsetLeft - vX * 5<= -570
                 && mapp.offsetTop - vY * 5>= -485
                 && mapp.offsetTop - vY * 5<= -185
                 )
                ||
                (mapp.offsetLeft - vX * 5<= -190
                 && mapp.offsetTop - vY * 5>= 145
                 )
                ||
                (mapp.offsetLeft - vX * 5<= -470
                 && mapp.offsetTop - vY * 5>= 35
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -530
                 && mapp.offsetLeft - vX * 5<= -470
                 && mapp.offsetTop - vY * 5>= -15
                 && mapp.offsetTop - vY * 5<= 35
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -860
                 && mapp.offsetLeft - vX * 5<= -610
                 && mapp.offsetTop - vY * 5>= -15
                 && mapp.offsetTop - vY * 5<= 35
                 )
                ||
                (mapp.offsetLeft - vX * 5>= -1200
                 && mapp.offsetLeft - vX * 5<= -950
                 && mapp.offsetTop - vY * 5>= -15
                 && mapp.offsetTop - vY * 5<= 35
                 )
                ||
                (mapp.offsetLeft - vX * 5<= -1280
                 && mapp.offsetTop - vY * 5>= -15
                 )
               ))
                {
                    var x = mapp.offsetLeft;
                    var y = mapp.offsetTop;
                    mapp.style.left =  x + "px";
                    mapp.style.top = y + "px";
                } else if (mainLocationId == 1 && (
                    mapp1.offsetTop - vY * 5<= -675
                    || mapp1.offsetLeft - vX * 5>= 110
                    || mapp1.offsetTop - vY * 5>= 185
                    || mapp1.offsetLeft - vX * 5<= -815
                    ||
                    (mapp1.offsetLeft - vX *5>= 100
                     && mapp1.offsetTop - vY * 5<= -660
                    )
                    ||
                    (mapp1.offsetLeft - vX *5>= 95
                     && mapp1.offsetTop - vY * 5>= -630
                     && mapp1.offsetTop - vY * 5<= -385
                    )
                    ||
                    (mapp1.offsetLeft - vX *5>= 80
                     && mapp1.offsetTop - vY * 5>= -615
                     && mapp1.offsetTop - vY * 5<= -560
                    )
                    ||
                    (mapp1.offsetLeft - vX *5>= 85
                     && mapp1.offsetTop - vY * 5>= -610
                     && mapp1.offsetTop - vY * 5<= -565
                    )
                    ||
                    (mapp1.offsetLeft - vX *5>= 70
                     && mapp1.offsetTop - vY * 5>= -615
                     && mapp1.offsetTop - vY * 5<= -585
                    )
                    ||
                    (mapp1.offsetLeft - vX *5>= 30
                     && mapp1.offsetTop - vY * 5>= -535
                     && mapp1.offsetTop - vY * 5<= -485
                    )
                    ||
                    (mapp1.offsetLeft - vX *5>= 55
                     && mapp1.offsetTop - vY * 5>= -485
                     && mapp1.offsetTop - vY * 5<= -390
                    )
                    ||
                    (mapp1.offsetLeft - vX *5>= 95
                     && mapp1.offsetTop - vY * 5>= -290
                     && mapp1.offsetTop - vY * 5<= -240
                    )
                    ||
                    (mapp1.offsetLeft - vX *5>= 59
                     && mapp1.offsetTop - vY * 5>= -200
                     && mapp1.offsetTop - vY * 5<= -155
                    )
                    ||
                    (mapp1.offsetLeft - vX *5>= 80
                     && mapp1.offsetTop - vY * 5>= -155
                     && mapp1.offsetTop - vY * 5<= -60
                    )
                    ||
                    (mapp1.offsetLeft - vX *5>= 75
                     && mapp1.offsetTop - vY * 5>= -15
                     && mapp1.offsetTop - vY * 5<= 35
                    )
                    ||
                    (mapp1.offsetLeft - vX *5<= -800
                     && mapp1.offsetTop - vY * 5>= -450
                     && mapp1.offsetTop - vY * 5<= -405
                    )
                    ||
                    (mapp1.offsetLeft - vX *5<= -805
                     && mapp1.offsetTop - vY * 5>= -370
                     && mapp1.offsetTop - vY * 5<= -300
                    )
                    ||
                    (mapp1.offsetLeft - vX *5<= -790
                     && mapp1.offsetTop - vY * 5>= -360
                     && mapp1.offsetTop - vY * 5<= -310
                    )
                    ||
                    (mapp1.offsetLeft - vX *5<= -780
                     && mapp1.offsetTop - vY * 5>= -350
                     && mapp1.offsetTop - vY * 5<= -320
                    )
                    ||
                    (mapp1.offsetLeft - vX *5<= -745
                     && mapp1.offsetTop - vY * 5>= -280
                     && mapp1.offsetTop - vY * 5<= -150
                    )
                    ||
                    (mapp1.offsetLeft - vX *5<= -725
                     && mapp1.offsetTop - vY * 5>= -150
                     && mapp1.offsetTop - vY * 5<= -80
                    )
                    ||
                    (mapp1.offsetLeft - vX *5<= -760
                     && mapp1.offsetTop - vY * 5>= -80
                     && mapp1.offsetTop - vY * 5<= -50
                    )
                    ||
                    (mapp1.offsetLeft - vX *5<= -675
                     && mapp1.offsetTop - vY * 5>= -50
                     && mapp1.offsetTop - vY * 5<= 50
                    )
                    ||
                    (mapp1.offsetLeft - vX *5<= -650
                     && mapp1.offsetTop - vY * 5>= 50
                     && mapp1.offsetTop - vY * 5<= 100
                    )
                    ||
                    (mapp1.offsetLeft - vX *5<= -650
                     && mapp1.offsetTop - vY * 5>= 50
                     && mapp1.offsetTop - vY * 5<= 100
                    )
                    ||
                    (mapp1.offsetLeft - vX *5<= -685
                     && mapp1.offsetTop - vY * 5>= 100
                     && mapp1.offsetTop - vY * 5<= 140
                    )
                    ||
                    (mapp1.offsetLeft - vX *5<= -615
                     && mapp1.offsetTop - vY * 5>= 140
                    )
            )) {
                var x = mapp1.offsetLeft;
                var y = mapp1.offsetTop;
                mapp1.style.left =  x + "px";
                mapp1.style.top = y + "px";
            }
            else if (mainLocationId == 0) {
                var x = mapp.offsetLeft - vX * 5;
                var y = mapp.offsetTop - vY * 5;
                mapp.style.left =  x + "px";
                mapp.style.top = y + "px";
            } else if (mainLocationId == 1) {
                var x = mapp1.offsetLeft - vX * 5;
                var y = mapp1.offsetTop - vY * 5;
                mapp1.style.left =  x + "px";
                mapp1.style.top = y + "px";
            }
            mainn.style.top = 20 + "px";
            mainn.style.left = (w-240)/2 + "px";
        }
    
function endDragL(e) {
    e.preventDefault();
    e = e || event;
    target = e.target || e.srcElement;
    clearInterval(timerIdL);
}

function endDragT(e2) {
    e2.preventDefault();
    e2 = e2 || event;
    target = e2.target || e2.srcElement;
    clearInterval(timerIdT);
}

function endDragB(e3) {
    e3.preventDefault();
    e3 = e3 || event;
    target = e3.target || e3.srcElement;
    clearInterval(timerIdB);
}

function endDragR(e4) {
    e4.preventDefault();
    e4 = e4 || event;
    target = e4.target || e4.srcElement;
    clearInterval(timerIdR);
}

function endDragM(e5) {
    e5.preventDefault();
    e5 = e5 || event;
    target = e5.target || e5.srcElement;
    clearInterval(timerIdM);
}

function endDragE(e6) {
    e6.preventDefault();
    e6 = e6 || event;
    target = e6.target || e6.srcElement;
    clearInterval(timerIdE);
}

window.onload = function () {
    mapp = document.getElementById("map");
    mapp1 = document.getElementById("map1");
    mainn = document.getElementById("main");
    motoo = document.getElementById("moto");
    clokk = document.getElementById("clock");
    menuu = document.getElementById("menu");
    icon1 = document.getElementById("ico1");
    icon2 = document.getElementById("ico2");
    icon3 = document.getElementById("ico3");
    icon4 = document.getElementById("ico4");
    icon5 = document.getElementById("ico5");
    icon6 = document.getElementById("ico6");
    icon7 = document.getElementById("ico7");
    icon8 = document.getElementById("ico8");
    icon9 = document.getElementById("ico9");
    hChooseMenu = document.getElementById("heroChoose");
    hChoose1 = document.getElementById("heroChoose1");
    hChoose2 = document.getElementById("heroChoose2");
    hChoose3 = document.getElementById("heroChoose3");
    hChoose4 = document.getElementById("heroChoose4");
    hChoose5 = document.getElementById("heroChoose5");
    hChoose6 = document.getElementById("heroChoose6");
    changeName = document.getElementById("nickname");
    rgstrMenu = document.getElementById("regMenu");
    hChoose1.style.opacity = "1";
    mMenu1 = document.getElementById("mainMenu1");
    mMenu2 = document.getElementById("mainMenu2");
    mMenu3 = document.getElementById("mainMenu3");
    mMenu4 = document.getElementById("mainMenu4");
    mMenu5 = document.getElementById("mainMenu5");
    mMenu6 = document.getElementById("mainMenu6");
    mMenu = document.getElementById("MainMenu");
    mMenu1.style.opacity = "1";
    alertMenu = document.getElementById("alertMenu");
    chngLocAlert = document.getElementById("changeLocMes");
    alertMenuYes = document.getElementById("answYes");
    alertMenuNo = document.getElementById("answNo");
    regAt = document.getElementById("regAtt");
    inpName = document.getElementById("inputName");
    ctrlLeft = document.getElementById("ctrlL");
    ctrlTop = document.getElementById("ctrlT");
    ctrlBottom = document.getElementById("ctrlB");
    ctrlRight = document.getElementById("ctrlR");
    ctrlMenu = document.getElementById("ctrlM");
    ctrlEnter = document.getElementById("ctrlE");
    correctMain();
    
    ctrlLeft.addEventListener("touchstart", leftButton, false);
    ctrlLeft.addEventListener("touchend", endDragL, false);
    ctrlTop.addEventListener("touchstart", topButton, false);
    ctrlTop.addEventListener("touchend", endDragT, false);
    ctrlBottom.addEventListener("touchstart", bottomButton, false);
    ctrlBottom.addEventListener("touchend", endDragB, false);
    ctrlRight.addEventListener("touchstart", rightButton, false);
    ctrlRight.addEventListener("touchend", endDragR, false);
    ctrlMenu.addEventListener("touchstart", menuButton, false);
    ctrlMenu.addEventListener("touchend", endDragM, false);
    ctrlEnter.addEventListener("touchstart", enterButton, false);
    ctrlEnter.addEventListener("touchend", endDragE, false);
}