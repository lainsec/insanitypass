(function() {
    var a = function() {
            try {
                return !!window.addEventListener
            } catch (e) {
                return !1
            }
        },
        b = function(b, c) {
            a() ? document.addEventListener("DOMContentLoaded", b, c) : document.attachEvent("onreadystatechange", b)
        };
    b(function() {
        var timeleft = 5;
        var downloadTimer = setInterval(function() {
            timeleft--;
            document.getElementById("countdowntimer").textContent = timeleft;
            if (timeleft <= 0)
                clearInterval(downloadTimer);
        }, 1000);
        setTimeout(function() {
            var now = new Date();
            var time = now.getTime();
            time += 300 * 1000;
            now.setTime(time);
            document.cookie = 'ri6eqmDJwTnA4Mqo015UFNcO2W8=hX1Xk4dv7Cr2Vwu3p3ujSNu7mNM' + '; expires=' + 'Sun, 08-Dec-24 02:29:16 GMT' + '; path=/';
            //javascript puzzle for browser to figure out to get answer
            if (!window._phantom || !window.callPhantom) {
                /*phantomjs*/
                if (!window.__phantomas) {
                    /*phantomas PhantomJS-based web perf metrics + monitoring tool*/
                    if (!window.Buffer) {
                        /*nodejs*/
                        if (!window.emit) {
                            /*couchjs*/
                            if (!window.spawn) {
                                /*rhino*/
                                if (!window.webdriver) {
                                    /*selenium*/
                                    if (!window.domAutomation || !window.domAutomationController) {
                                        /*chromium based automation driver*/
                                        if (!window.document.documentElement.getAttribute("webdriver")) {
                                            /*if(navigator.userAgent){*/
                                            if (!/bot|curl|kodi|xbmc|wget|urllib|python|winhttp|httrack|alexa|ia_archiver|facebook|twitter|linkedin|pingdom/i.test(navigator.userAgent)) {
                                                /*if(navigator.cookieEnabled){*/
                                                /*if(document.cookie.match(/^(?:.*;)?\s*[0-9a-f]{32}\s*=\s*([^;]+)(?:.*)?$/)){*/
                                                /*HttpOnly Cookie flags prevent this*/
                                                var __1932 = parseInt("20241206", 10) + parseInt("06122024", 10);
                                                /*}*/
                                                /*}*/
                                            }
                                            /*}*/
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            //end javascript puzzle
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState === 4) {
                    document.getElementById("status").innerHTML = "Te enviando pela Darkweb. Caso não saia dessa tela, atualize.";
                    location.reload(true);
                }
            };
            xhttp.open("POST", "/insanitypass.php", true);
            xhttp.setRequestHeader('R2RgfPrjmuTUkI5sxOtO5Z5Zg', __1932); //make the answer what ever the browser figures it out to be
            xhttp.setRequestHeader('X-Requested-with', 'XMLHttpRequest');
            xhttp.setRequestHeader('X-Requested-TimeStamp', '');
            xhttp.setRequestHeader('X-Requested-TimeStamp-Expire', '');
            xhttp.setRequestHeader('X-Requested-TimeStamp-Combination', '');
            xhttp.setRequestHeader('X-Requested-Type', 'GET');
            xhttp.setRequestHeader('X-Requested-Type-Combination', 'GET'); //Encrypted for todays date
            xhttp.withCredentials = true;
            var sw, sh, ww, wh, v;
            sw = screen.width;
            sh = screen.height;
            ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
            wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
            if ((sw == ww) && (sh == wh)) {
                v = true;
                if (!(ww % 200) && (wh % 100)) {
                    v = true;
                }
            }
            //v = true; //test var nulled out used for debugging purpose
            if (v == true) {
                xhttp.setRequestHeader('Of9rQq53nzaVOPfZjlQBAR-U', 'DeGQ8yE66lk-8g74SLskj5ToVY');
            }
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send("name1=Henry&name2=Ford");
        }, 6000); /*if correct data has been sent then the auth response will allow access*/
    }, false);
})();