window.onload = function () {
    var menuRows = document.getElementsByTagName("li"),
        navMenu = document.getElementById("navi"),
        title = document.getElementById("title"),
        showMenu = document.getElementById("showMenuButton"),
        showRows = document.getElementsByClassName("inactive"),
        compRowsDiv = document.getElementsByClassName("compRows"),
        checkMenu = 0,
        timerId, checkChange = 0,
        checkCompRows = 1,
        w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    console.log(showRows[0]);
    console.log(compRowsDiv[0]);
    
    function preventSelection(element){
      var preventSelection = false;

      function addHandler(element, event, handler){
        if (element.attachEvent) 
          element.attachEvent('on' + event, handler);
        else 
          if (element.addEventListener) 
            element.addEventListener(event, handler, false);
      }
      function removeSelection(){
        if (window.getSelection) { window.getSelection().removeAllRanges(); }
        else if (document.selection && document.selection.clear)
          document.selection.clear();
      }
      function killCtrlA(event){
        var event = event || window.event;
        var sender = event.target || event.srcElement;

        if (sender.tagName.match(/INPUT|TEXTAREA/i))
          return;

        var key = event.keyCode || event.which;
        if (event.ctrlKey && key == 'A'.charCodeAt(0))  // 'A'.charCodeAt(0) можно заменить на 65
        {
          removeSelection();

          if (event.preventDefault) 
            event.preventDefault();
          else
            event.returnValue = false;
        }
      }

      // не даем выделять текст мышкой
      addHandler(element, 'mousemove', function(){
        if(preventSelection)
          removeSelection();
      });
      addHandler(element, 'mousedown', function(event){
        var event = event || window.event;
        var sender = event.target || event.srcElement;
        preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
      });

      // борем dblclick
      // если вешать функцию не на событие dblclick, можно избежать
      // временное выделение текста в некоторых браузерах
      addHandler(element, 'mouseup', function(){
        if (preventSelection)
          removeSelection();
        preventSelection = false;
      });

      // борем ctrl+A
      // скорей всего это и не надо, к тому же есть подозрение
      // что в случае все же такой необходимости функцию нужно 
      // вешать один раз и на document, а не на элемент
      addHandler(element, 'keydown', killCtrlA);
      addHandler(element, 'keyup', killCtrlA);
    }
    
    
    function update(){
        checkChange = w;
        w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        if ((w > 574 && w < 616)
            || (w > 744 && w < 855)
            || (w > 984)) {
            menuOpen();
        } else if ((w <= 574
            || (w >= 616 && w<= 744)
            || (w >= 855 && w<= 984)) && (checkChange != w)){
            menuClose();
        }
    }
    
    function widthStart(){
        timerId = setInterval(update, 50);
    }
    
    function menuOpen(){
        if (w > 1044){
            navMenu.style.width = "250px";
        } else {
            navMenu.style.width = "200px";
        }
        showMenu.style.right = "200px";
        showMenu.src = "img/hideMenuButton.png";
        for (i=0; i < menuRows.length; i++){
            menuRows[i].style.display = "block";
        }
        checkMenu = 1;
    }
    
    function menuClose(){
        navMenu.style.width = "70px";
        for (i=0; i < menuRows.length; i++){
            menuRows[i].style.display = "none";
        }
        showMenu.style.right = "5px";
        showMenu.src = "img/showMenuButton.png";
        checkMenu = 0;
    }
    
    widthStart();
    
    function handleStart(e) {
        e.preventDefault();
        e = e || event;
        target = e.target || e.srcElement;
        console.log(target);
        if (w <= 574
            || (w >= 616 && w<= 744)
            || (w >= 855 && w<= 984)){
            if (checkMenu == 0){
                menuOpen();
            } else if (checkMenu == 1){
                menuClose();
            }
            console.log(checkMenu);
        }
    }
    
    function compRows(e){
        e.preventDefault();
        e = e || event;
        target = e.target || e.srcElement;
        if (checkCompRows == 1){
            compRowsDiv[0].style.display = "none";
            checkCompRows = 0;
        } else if (checkCompRows == 0){
            compRowsDiv[0].style.display = "block";
            checkCompRows = 1;
        }
        console.log(checkCompRows);
    }
    
    showMenu.addEventListener("click", handleStart, false);
    function catchShowRows(){
        if (showRows[0] == null){
            console.log('catch');
        } else {
            showRows[0].addEventListener("click", compRows, false);
        }
    }
    catchShowRows();
    
    function checkComingSoonDivs(){
        var comingSoonDiv2 = document.getElementsByClassName("product2");
        var comingSoonDiv3 = document.getElementsByClassName("product3");
        var comingSoonDiv4 = document.getElementsByClassName("product4");
        var comingSoonDiv5 = document.getElementsByClassName("product5");
        var comingSoonDiv6 = document.getElementsByClassName("product6");
        var comingSoonDiv7 = document.getElementsByClassName("product7");
        var comingSoonDiv8 = document.getElementsByClassName("product8");
        if (comingSoonDiv2[0].firstChild.attributes[0].nodeValue == "img/coming_soon.png"){
            comingSoonDiv2[0].onclick = "";
            comingSoonDiv2[0].style.cursor = "auto";
            comingSoonDiv3[0].onclick = "";
            comingSoonDiv3[0].style.cursor = "auto";
            comingSoonDiv4[0].onclick = "";
            comingSoonDiv4[0].style.cursor = "auto";
            comingSoonDiv5[0].onclick = "";
            comingSoonDiv5[0].style.cursor = "auto";
            comingSoonDiv6[0].onclick = "";
            comingSoonDiv6[0].style.cursor = "auto";
            comingSoonDiv7[0].onclick = "";
            comingSoonDiv7[0].style.cursor = "auto";
            comingSoonDiv8[0].onclick = "";
            comingSoonDiv8[0].style.cursor = "auto";
        } else if (comingSoonDiv3[0].firstChild.attributes[0].nodeValue == "img/coming_soon.png"){
            comingSoonDiv3[0].onclick = "";
            comingSoonDiv3[0].style.cursor = "auto";
            comingSoonDiv4[0].onclick = "";
            comingSoonDiv4[0].style.cursor = "auto";
            comingSoonDiv5[0].onclick = "";
            comingSoonDiv5[0].style.cursor = "auto";
            comingSoonDiv6[0].onclick = "";
            comingSoonDiv6[0].style.cursor = "auto";
            comingSoonDiv7[0].onclick = "";
            comingSoonDiv7[0].style.cursor = "auto";
            comingSoonDiv8[0].onclick = "";
            comingSoonDiv8[0].style.cursor = "auto";
        } else if (comingSoonDiv4[0].firstChild.attributes[0].nodeValue == "img/coming_soon.png"){
            comingSoonDiv4[0].onclick = "";
            comingSoonDiv4[0].style.cursor = "auto";
            comingSoonDiv5[0].onclick = "";
            comingSoonDiv5[0].style.cursor = "auto";
            comingSoonDiv6[0].onclick = "";
            comingSoonDiv6[0].style.cursor = "auto";
            comingSoonDiv7[0].onclick = "";
            comingSoonDiv7[0].style.cursor = "auto";
            comingSoonDiv8[0].onclick = "";
            comingSoonDiv8[0].style.cursor = "auto";
        } else if (comingSoonDiv5[0].firstChild.attributes[0].nodeValue == "img/coming_soon.png"){
            comingSoonDiv5[0].onclick = "";
            comingSoonDiv5[0].style.cursor = "auto";
            comingSoonDiv6[0].onclick = "";
            comingSoonDiv6[0].style.cursor = "auto";
            comingSoonDiv7[0].onclick = "";
            comingSoonDiv7[0].style.cursor = "auto";
            comingSoonDiv8[0].onclick = "";
            comingSoonDiv8[0].style.cursor = "auto";
        } else if (comingSoonDiv6[0].firstChild.attributes[0].nodeValue == "img/coming_soon.png"){
            comingSoonDiv6[0].onclick = "";
            comingSoonDiv6[0].style.cursor = "auto";
            comingSoonDiv7[0].onclick = "";
            comingSoonDiv7[0].style.cursor = "auto";
            comingSoonDiv8[0].onclick = "";
            comingSoonDiv8[0].style.cursor = "auto";
        } else if (comingSoonDiv7[0].firstChild.attributes[0].nodeValue == "img/coming_soon.png"){
            comingSoonDiv7[0].onclick = "";
            comingSoonDiv7[0].style.cursor = "auto";
            comingSoonDiv8[0].onclick = "";
            comingSoonDiv8[0].style.cursor = "auto";
        } else if (comingSoonDiv8[0].firstChild.attributes[0].nodeValue == "img/coming_soon.png"){
            comingSoonDiv8[0].onclick = "";
            comingSoonDiv8[0].style.cursor = "auto";
        }
    }
    
    
    
    var videoDate1  = document.getElementById('product_date'),
        videoDate2  = document.getElementById('product2_date'),
        videoDate3  = document.getElementById('product3_date'),
        videoDate4  = document.getElementById('product4_date');
    var videoDate5  = document.getElementById('product5_date'),
        videoDate6  = document.getElementById('product6_date'),
        videoDate7  = document.getElementById('product7_date'),
        videoDate8  = document.getElementById('product8_date');
                
    function checkDate(videoNum){
        var stringTemp = videoNum.innerHTML;
        var splits = stringTemp.split('-');
        var yearTemp = parseInt(splits[0], 10);
        var monthTemp = parseInt(splits[1], 10);
        var dayTemp = parseInt(splits[2], 10);

        var date = new Date();
        var rnYear = date.getFullYear();
        var rnMonth = date.getMonth();
        var rnDay = date.getDate();

        var dayDif = rnDay - dayTemp;
        var monthDif = rnMonth - monthTemp + 1;
        var yearDif = rnYear - yearTemp;
        var dayDifStr = dayDif.toString();
        console.log(dayDif);
        console.log(rnMonth);
        if (yearDif == 0 && monthDif == 0 && dayDif == 0){
            videoNum.innerText = videoNum.textContent = "today";
        } else if (yearDif == 0 && monthDif == 0 && dayDif == 1){
            videoNum.innerText = videoNum.textContent = "yesterday";
        } else if (yearDif == 0 && monthDif == 0 && dayDif > 1 && dayDif < 7){
            videoNum.innerText = videoNum.textContent = dayDif + " days ago";
        } else if (yearDif == 0 && monthDif == 0 && dayDif > 6 && dayDif < 14){
            videoNum.innerText = videoNum.textContent = "1 week ago";
        } else if (yearDif == 0 && monthDif == 0 && dayDif > 13 && dayDif < 21){
            videoNum.innerText = videoNum.textContent = "2 weeks ago";
        } else if (yearDif == 0 && monthDif == 0 && dayDif > 20 && dayDif < 28){
            videoNum.innerText = videoNum.textContent = "3 weeks ago";
        } else if (yearDif == 0 && monthDif == 0 && dayDif > 27){
            videoNum.innerText = videoNum.textContent = "1 month ago";
        }
        
        
        else if (yearDif == 0 && monthDif == 1 && dayDif == -30 && (rnMonth == 1 || rnMonth == 3 || rnMonth == 5 || rnMonth == 7 || rnMonth == 8 || rnMonth == 10)){
            videoNum.innerText = videoNum.textContent = "yesterday";
        } else if (yearDif == 0 && monthDif == 1 && dayDif > -30 && dayDif < -24 && (rnMonth == 1 || rnMonth == 3 || rnMonth == 5 || rnMonth == 7 || rnMonth == 8 || rnMonth == 10)){
            videoNum.innerText = videoNum.textContent = 31 + dayDif + " days ago";
        } else if (yearDif == 0 && monthDif == 1 && dayDif > -25 && dayDif < -17 && (rnMonth == 1 || rnMonth == 3 || rnMonth == 5 || rnMonth == 7 || rnMonth == 8 || rnMonth == 10)){
            videoNum.innerText = videoNum.textContent = "1 week ago";
        } else if (yearDif == 0 && monthDif == 1 && dayDif > -18 && dayDif < -10 && (rnMonth == 1 || rnMonth == 3 || rnMonth == 5 || rnMonth == 7 || rnMonth == 8 || rnMonth == 10)){
            videoNum.innerText = videoNum.textContent = "2 weeks ago";
        } else if (yearDif == 0 && monthDif == 1 && dayDif > -11 && dayDif < -3 && (rnMonth == 1 || rnMonth == 3 || rnMonth == 5 || rnMonth == 7 || rnMonth == 8 || rnMonth == 10)){
            videoNum.innerText = videoNum.textContent = "3 weeks ago";
        } else if (yearDif == 0 && monthDif == 1 && dayDif > -4 && (rnMonth == 1 || rnMonth == 3 || rnMonth == 5 || rnMonth == 7 || rnMonth == 8 || rnMonth == 10)){
            videoNum.innerText = videoNum.textContent = "1 month ago";
        }
        
        
        else if (yearDif == 0 && monthDif == 1 && dayDif == -29 && (rnMonth == 4 || rnMonth == 6 || rnMonth == 9 || rnMonth == 11)){
            videoNum.innerText = videoNum.textContent = "yesterday";
        } else if (yearDif == 0 && monthDif == 1 && dayDif > -29 && dayDif < -23 && (rnMonth == 4 || rnMonth == 6 || rnMonth == 9 || rnMonth == 11)){
            videoNum.innerText = videoNum.textContent = 31 + dayDif + " days ago";
        } else if (yearDif == 0 && monthDif == 1 && dayDif > -24 && dayDif < -16 && (rnMonth == 4 || rnMonth == 6 || rnMonth == 9 || rnMonth == 11)){
            videoNum.innerText = videoNum.textContent = "1 week ago";
        } else if (yearDif == 0 && monthDif == 1 && dayDif > -17 && dayDif < -9 && (rnMonth == 4 || rnMonth == 6 || rnMonth == 9 || rnMonth == 11)){
            videoNum.innerText = videoNum.textContent = "2 weeks ago";
        } else if (yearDif == 0 && monthDif == 1 && dayDif > -10 && dayDif < -2 && (rnMonth == 4 || rnMonth == 6 || rnMonth == 9 || rnMonth == 11)){
            videoNum.innerText = videoNum.textContent = "3 weeks ago";
        } else if (yearDif == 0 && monthDif == 1 && dayDif > -3 && (rnMonth == 4 || rnMonth == 6 || rnMonth == 9 || rnMonth == 11)){
            videoNum.innerText = videoNum.textContent = "1 month ago";
        }
        
        
        else if (yearDif == 0 && monthDif == 1 && (rnYear == 2020 || rnYear == 2024 || rnYear == 2028 || rnYear == 2034) && dayDif == -28 && rnMonth == 2){
            videoNum.innerText = videoNum.textContent = "yesterday";
        } else if (yearDif == 0 && monthDif == 1 && (rnYear == 2020 || rnYear == 2024 || rnYear == 2028 || rnYear == 2034) && dayDif > -28 && dayDif < -22 && rnMonth == 2){
            videoNum.innerText = videoNum.textContent = 29 + dayDif + " days ago";
        } else if (yearDif == 0 && monthDif == 1 && (rnYear == 2020 || rnYear == 2024 || rnYear == 2028 || rnYear == 2034) && dayDif > -23 && dayDif < -15 && rnMonth == 2){
            videoNum.innerText = videoNum.textContent = "1 week ago";
        } else if (yearDif == 0 && monthDif == 1 && (rnYear == 2020 || rnYear == 2024 || rnYear == 2028 || rnYear == 2034) && dayDif > -16 && dayDif < -8 && rnMonth == 2){
            videoNum.innerText = videoNum.textContent = "2 weeks ago";
        } else if (yearDif == 0 && monthDif == 1 && (rnYear == 2020 || rnYear == 2024 || rnYear == 2028 || rnYear == 2034) && dayDif > -9 && dayDif < -1 && rnMonth == 2){
            videoNum.innerText = videoNum.textContent = "3 weeks ago";
        } else if (yearDif == 0 && monthDif == 1 && (rnYear == 2020 || rnYear == 2024 || rnYear == 2028 || rnYear == 2034) && dayDif > -2 && rnMonth == 2){
            videoNum.innerText = videoNum.textContent = "1 month ago";
        }
        
        else if (yearDif == 0 && monthDif == 1 && rnYear != 2020 && rnYear != 2024 && rnYear != 2028 && rnYear != 2034 && dayDif == -27 && rnMonth == 2){
            videoNum.innerText = videoNum.textContent = "yesterday";
        } else if (yearDif == 0 && monthDif == 1 && rnYear != 2020 && rnYear != 2024 && rnYear != 2028 && rnYear != 2034 && dayDif > -27 && dayDif < -21 && rnMonth == 2){
            videoNum.innerText = videoNum.textContent = 29 + dayDif + " days ago";
        } else if (yearDif == 0 && monthDif == 1 && rnYear != 2020 && rnYear != 2024 && rnYear != 2028 && rnYear != 2034 && dayDif > -22 && dayDif < -14 && rnMonth == 2){
            videoNum.innerText = videoNum.textContent = "1 week ago";
        } else if (yearDif == 0 && monthDif == 1 && rnYear != 2020 && rnYear != 2024 && rnYear != 2028 && rnYear != 2034 && dayDif > -15 && dayDif < -7 && rnMonth == 2){
            videoNum.innerText = videoNum.textContent = "2 weeks ago";
        } else if (yearDif == 0 && monthDif == 1 && rnYear != 2020 && rnYear != 2024 && rnYear != 2028 && rnYear != 2034 && dayDif > -8 && dayDif < 0 && rnMonth == 2){
            videoNum.innerText = videoNum.textContent = "3 weeks ago";
        } else if (yearDif == 0 && monthDif == 1 && rnYear != 2020 && rnYear != 2024 && rnYear != 2028 && rnYear != 2034 && dayDif > -1 && rnMonth == 2){
            videoNum.innerText = videoNum.textContent = "1 month ago";
        } else if (yearDif == 0 && monthDif > 1){
            videoNum.innerText = videoNum.textContent = monthDif + " months ago";
        } else if (yearDif == 1 && monthDif == -11 && dayDif == -30){
            videoNum.innerText = videoNum.textContent = "yesterday";
        } else if (yearDif == 1 && monthDif == -11 && dayDif > -30 && dayDif < -24){
            videoNum.innerText = videoNum.textContent = 31 + dayDif + " days ago";
        } else if (yearDif == 1 && monthDif == -11 && dayDif > -25 && dayDif < -18){
            videoNum.innerText = videoNum.textContent = "1 week ago";
        } else if (yearDif == 1 && monthDif == -11 && dayDif > -19 && dayDif < -11){
            videoNum.innerText = videoNum.textContent = "2 weeks ago";
        } else if (yearDif == 1 && monthDif == -11 && dayDif > -12 && dayDif < -4){
            videoNum.innerText = videoNum.textContent = "3 weeks ago";
        } else if (yearDif == 1 && monthDif == -11 && dayDif > -5){
            videoNum.innerText = videoNum.textContent = "1 month ago";
        }
        
        
        else if (yearDif == 1 && monthDif < 0){
            videoNum.innerText = videoNum.textContent = 12 + monthDif + " months ago";
        } else if (yearDif == 1){
            videoNum.innerText = videoNum.textContent = yearDif + " year ago";
        } else if (yearDif > 1){
            videoNum.innerText = videoNum.textContent = yearDif + " years ago";
        }
    }
    checkDate(videoDate1);
    checkDate(videoDate2);
    checkDate(videoDate3);
    checkDate(videoDate4);
    checkComingSoonDivs();
    checkDate(videoDate5);
    checkDate(videoDate6);
    checkDate(videoDate7);
    checkDate(videoDate8);
    var videoName1 = document.getElementById('name1'),
        videoName2 = document.getElementById('name2'),
        videoName3 = document.getElementById('name3'),
        videoName4 = document.getElementById('name4'),
        videoName5 = document.getElementById('name5'),
        videoName6 = document.getElementById('name6'),
        videoName7 = document.getElementById('name7'),
        videoName8 = document.getElementById('name8');
    console.log(videoName1);
    function shortName(x){
        if (w <= 375 || (w >=616 && w <= 854)){
            var strTemp = x.innerText;
            var s = 0;
            if (strTemp.length == 52){
                for (var i=49; i < 52; i++){
                    strTemp = setCharAt(strTemp,i,'.');
                }
            } else if (strTemp.length > 52){
                for (var i=49; i < 52; i++){
                    strTemp = setCharAt(strTemp,i,'.');
                }
                var numTemp = strTemp.length;
                for (var i=52; i < numTemp; i++){
                    var k = i;
                    k = k - s;
                    s = s + 1;
                    strTemp = setCharAt(strTemp,k,'');
                }
            }
            x.innerText = strTemp;
        }  
    }
    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }
    shortName(videoName1);
    shortName(videoName2);
    shortName(videoName3);
    shortName(videoName4);
    shortName(videoName5);
    shortName(videoName6);
    shortName(videoName7);
    shortName(videoName8);
    
    function whiteLit(e){
        e.preventDefault();
        e = e || event;
        target = e.target || e.srcElement;
        prevComp[0].childNodes[0].style.color = "white";
    }
    
    function blackLit(e){
        e.preventDefault();
        e = e || event;
        target = e.target || e.srcElement;
        prevComp[0].childNodes[0].style.color = "black";
    }
    
    var prevComp = document.getElementsByClassName("inactive");
    var checkComp = document.getElementById('checkComp');
    checkConpPage();
    function checkConpPage(){
        if (!prevComp[1]){
            console.log("catch");
        } else {
            prevComp[1].childNodes[0].style.color = "black";
            prevComp[1].classList.add("previousComp");
            prevComp[1].classList.remove("inactive");
        }
    }
    var prevComp = document.getElementsByClassName("previousComp");
    if (!checkComp){
        console.log('s');
    } else if (checkComp.innerHTML != "compilation"){
        prevComp[0].addEventListener("mouseover", whiteLit, false);
        prevComp[0].addEventListener("mouseout", blackLit, false);
    }
    
    
    function checkNewComp(x){
        if (x.innerHTML == "compilation"){
            menuRows[3].classList.add("inactive");
            menuRows[3].childNodes[0].removeAttribute("href");
            menuRows[3].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "marvel"){
            menuRows[4].classList.add("inactive");
            menuRows[4].childNodes[0].removeAttribute("href");
            menuRows[4].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "dc"){
            menuRows[5].classList.add("inactive");
            menuRows[5].childNodes[0].removeAttribute("href");
            menuRows[5].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "gotham"){
            menuRows[6].classList.add("inactive");
            menuRows[6].childNodes[0].removeAttribute("href");
            menuRows[6].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "multifandom"){
            menuRows[7].classList.add("inactive");
            menuRows[7].childNodes[0].removeAttribute("href");
            menuRows[7].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "harry_potter"){
            menuRows[8].classList.add("inactive");
            menuRows[8].childNodes[0].removeAttribute("href");
            menuRows[8].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "ahs"){
            menuRows[9].classList.add("inactive");
            menuRows[9].childNodes[0].removeAttribute("href");
            menuRows[9].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "riverdale"){
            menuRows[10].classList.add("inactive");
            menuRows[10].childNodes[0].removeAttribute("href");
            menuRows[10].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "black_mirror"){
            menuRows[11].classList.add("inactive");
            menuRows[11].childNodes[0].removeAttribute("href");
            menuRows[11].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "stranger_things"){
            menuRows[12].classList.add("inactive");
            menuRows[12].childNodes[0].removeAttribute("href");
            menuRows[12].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "spiderman"){
            menuRows[13].classList.add("inactive");
            menuRows[13].childNodes[0].removeAttribute("href");
            menuRows[13].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "videogames"){
            menuRows[14].classList.add("inactive");
            menuRows[14].childNodes[0].removeAttribute("href");
            menuRows[14].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "anime"){
            menuRows[15].classList.add("inactive");
            menuRows[15].childNodes[0].removeAttribute("href");
            menuRows[15].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "game_of_thrones"){
            menuRows[16].classList.add("inactive");
            menuRows[16].childNodes[0].removeAttribute("href");
            menuRows[16].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "sherlock"){
            menuRows[17].classList.add("inactive");
            menuRows[17].childNodes[0].removeAttribute("href");
            menuRows[17].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "walking_dead"){
            menuRows[18].classList.add("inactive");
            menuRows[18].childNodes[0].removeAttribute("href");
            menuRows[18].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "star_wars"){
            menuRows[19].classList.add("inactive");
            menuRows[19].childNodes[0].removeAttribute("href");
            menuRows[19].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "it"){
            menuRows[20].classList.add("inactive");
            menuRows[20].childNodes[0].removeAttribute("href");
            menuRows[20].childNodes[0].style.color = "white";
        } else if (x.innerHTML == "upload"){
            menuRows[21].classList.add("inactive");
            menuRows[21].childNodes[0].removeAttribute("href");
            menuRows[21].childNodes[0].style.color = "white";
        }
    }
    
    var nextPage = document.getElementById('toNextPage'),
        nextPage2 = document.getElementById('toNextPage2'),
        firstPage = document.getElementById('firstPage'),
        firstPage2 = document.getElementById('firstPage2'),
        pageNumb = document.getElementById('pageNumb'),
        rlCountTemp = document.getElementById('rl_count'),
        rlCount = parseInt(rlCountTemp.innerText, 10),
        pageStatus = document.getElementById("pageStatus");
    function disabledPage(x){
        if (x <= 1){
            nextPage.childNodes[0].classList.add("disabled");
            nextPage.childNodes[0].removeAttribute("href");
            nextPage2.childNodes[0].classList.add("disabled");
            nextPage2.childNodes[0].removeAttribute("href");
            preventSelection(nextPage);
            preventSelection(nextPage2);
        }
    }
    
    disabledPage(rlCount);
    function checkPageStatus(){
        if (!pageStatus){
            console.log("not compilations");
        } else if (pageStatus.innerText == "compilations"){
            checkNewComp(checkComp);
        }
    }
    checkPageStatus();
    console.log(menuRows[5].classList);
    function firstPageCheck(){
        if (pageNumb.innerText== "1"){
            preventSelection(firstPage);
            preventSelection(firstPage2);
        }
    }
    firstPageCheck();
}
