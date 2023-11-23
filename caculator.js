function init() {
    // 初始化标签
    initializeLabel();
    // 添加功能
    addFunctionality();
    monitor();
}

function monitor() {
    document.getElementById( "home" ).addEventListener( "click", goHome );
    document.getElementById( "caculator" ).addEventListener( "click", showCaculator );
    document.getElementById( "search" ).addEventListener( "click", showSearch );
    document.getElementById( "equation" ).addEventListener( "click", showEquation );
    document.getElementById( "board" ).addEventListener( "click", showBoard );
    document.getElementById( "gpt" ).addEventListener( "click", showGPT );
    document.getElementById( "video" ).addEventListener( "click", showVideo );
    document.getElementById( "unlock" ).addEventListener( "click", unlock );
}

function unlock() {
    var getText = document.getElementById( "Text1" );
    if ( getText.disabled ) {
        getText.disabled = false;
    } else {
        getText.disabled = true;
    }
}

function goHome() {
    window.location.href = "http://github.com/XueDugu/";
}

function showCaculator() {
    document.getElementById( "Text1" ).value="0";
    var divElement = document.querySelector( ".div_caculator" );
    if ( divElement.style.display === "none" || divElement.style.display === "" ) {
        divElement.style.display = "block";
    } else {
        divElement.style.display = "none";
    }
    if ( document.querySelector( ".div_text" ).style.display === "none" ) {
        document.querySelector( ".div_text" ).style.display = "block";
    }
    var divElement = document.querySelector( ".div_search" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_board" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_GPT" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_video" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
}

function showSearch() {
    document.getElementById( "Text1" ).value="搜索";
    var divElement = document.querySelector( ".div_search" );
    if ( divElement.style.display === "none" || divElement.style.display === "" ) {
        divElement.style.display = "block";
    } else {
        divElement.style.display = "none";
    }
    if ( document.querySelector( ".div_text" ).style.display === "none" ) {
        document.querySelector( ".div_text" ).style.display = "block";
    }
    var divElement = document.querySelector( ".div_board" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_GPT" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_video" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_caculator" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_equation" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
}

function showEquation() {
    document.getElementById( "Text1" ).value="解方程";
    var divElement = document.querySelector( ".div_equation" );
    if ( divElement.style.display === "none" || divElement.style.display === "" ) {
        divElement.style.display = "block";
    } else {
        divElement.style.display = "none";
    }
    if ( document.querySelector( ".div_text" ).style.display === "none" ) {
        document.querySelector( ".div_text" ).style.display = "block";
    }
    var divElement = document.querySelector( ".div_search" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_board" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_GPT" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_video" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
}

function showBoard() {
    document.getElementById( "Text1" ).value="画板";
    var divElement = document.querySelector( ".div_board" );
    if ( divElement.style.display === "none" || divElement.style.display === "" ) {
        divElement.style.display = "block";
    } else {
        divElement.style.display = "none";
    }
    if ( document.querySelector( ".div_text" ).style.display === "none" ) {
        document.querySelector( ".div_text" ).style.display = "block";
    }
    var divElement = document.querySelector( ".div_search" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_GPT" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_video" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_caculator" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_equation" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
}

function showGPT() {
    document.getElementById( "Text1" ).value="大语言模型";
    var divElement = document.querySelector( ".div_GPT" );
    if ( divElement.style.display === "none" || divElement.style.display === "" ) {
        divElement.style.display = "block";
    } else {
        divElement.style.display = "none";
    }
    if ( document.querySelector( ".div_text" ).style.display === "none" ) {
        document.querySelector( ".div_text" ).style.display = "block";
    }
    var divElement = document.querySelector( ".div_search" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_board" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_video" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_caculator" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_equation" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
}

function showVideo() {
    document.getElementById( "Text1" ).value="视频";
    var divElement = document.querySelector( ".div_video" );
    if ( divElement.style.display === "none" || divElement.style.display === "" ) {
        divElement.style.display = "block";
    } else {
        divElement.style.display = "none";
    }
    if ( document.querySelector( ".div_text" ).style.display === "none" ) {
        document.querySelector( ".div_text" ).style.display = "block";
    }
    var divElement = document.querySelector( ".div_search" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_board" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_GPT" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_caculator" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
    var divElement = document.querySelector( ".div_equation" );
    if ( divElement.style.display === "block" || divElement.style.display === "" ) {
        divElement.style.display = "none";
    }
}

function initializeLabel() {
    // 获取文本框元素
    let value = document.getElementById( "Text1" );
    // 设置初始值为 "0"，并禁用文本框
    value.value = "0";
    value.disabled = true;

    // 注释掉的部分是可能未使用的代码，可根据需要决定是否保留
    // let vx = document.getElementById("outputx");
    // vx.value = "0";
    // vx.disabled = true;
    // let vy = document.getElementById("outputy");
    // vy.value = "0";
    // vy.disabled = true;
    // let vz = document.getElementById("outputz");
    // vz.value = "0";
    // vz.disabled = true;
}

function addFunctionality() {
    // 获取文本框元素
    let getText = document.getElementById( "Text1" );
    let getTextx = document.getElementById( "outputx" );
    let getTexty = document.getElementById( "outputy" );
    let getTextz = document.getElementById( "outputz" );
    let getTextw = document.getElementById( "outputw" );
    // 获取所有输入框元素
    let nums = document.getElementsByTagName( "input" );
    let numFirst, symbol;
    var equation;
    var question = "";
    var choose_search = 0;

    for ( let i = 0; i < nums.length; i++ ) {
        // 为每个按钮添加点击事件
        nums[ i ].onclick = function () {
            if ( !isNaN( this.value ) ) {
                if ( isNull( getText.value ) ) {
                    getText.value = this.value;
                } else {
                    getText.value += this.value;
                }
            } else {
                let buttonInfo = this.value;
                switch ( buttonInfo ) {

                    case "清":
                        getText.value = "0";
                        question = question.slice( 0, 0 );
                        break;
                    case "删":
                        getText.value = removeLastCharacter( getText.value );
                        break;
                    case "+/-":
                        getText.value = toggleSign( getText.value );
                        break;
                    case "/":
                    case "*":
                    case "-":
                    case "+":
                        question += getText.value + buttonInfo;
                        numFirst = Number( getText.value );
                        getText.value = "0";
                        symbol = buttonInfo;
                        question += getText.value;
                        break;
                    case "=":
                        switch ( symbol ) {
                            case "+":
                                getText.value = numFirst + Number( getText.value );
                                break;
                            case "-":
                                getText.value = numFirst - Number( getText.value );
                                break;
                            case "*":
                                getText.value = numFirst * Number( getText.value );
                                break;
                            case "/":
                                if ( !isNull( getText.value ) ) {
                                    getText.value = numFirst / Number( getText.value );
                                } else {
                                    alert( "除数不能为0或空哦~" );
                                }
                                break;
                        }
                        numFirst = 0;
                        symbol = "";
                        break;
                    case "搜":
                        if(getText.value=="搜索"){
                            getText.value="";
                        }
                        if ( getText.value != 0 ) {
                            question += getText.value;
                        }
                        if ( choose_search == 0 ) {
                            var baidu = document.getElementById( "baidu" );
                            baidu.style.display = "block";
                            var google = document.getElementById( "google" );
                            google.style.display = "block";
                            var bing = document.getElementById( "bing" );
                            bing.style.display = "block";
                            var yahoo = document.getElementById( "yahoo" );
                            yahoo.style.display = "block";
                        } else if ( choose_search == 1 ) {
                            if ( question == "" ) {
                                window.location.href = "http://www.baidu.com/";
                            } else {
                                window.location.href = "http://www.baidu.com/s?wd=" + question;
                            }
                        } else if ( choose_search == 2 ) {
                            if ( question == "" ) {
                                window.location.href = "http://www.google.com/";
                            } else {
                                window.location.href = "http://www.google.com/search?q=" + question;
                            }
                        } else if ( choose_search == 3 ) {
                            if ( question == "" ) {
                                window.location.href = "http://www.bing.com/";
                            } else {
                                window.location.href = "http://www.bing.com/search?q=" + question;
                            }
                        } else if ( choose_search == 4 ) {
                            if ( question == "" ) {
                                window.location.href = "http://sg.search.yahoo.com/";
                            } else {
                                window.location.href = "http://sg.search.yahoo.com/search?q=" + question;
                            }
                        }
                        break;
                    case "Baidu":
                        choose_search = 1;
                        if ( getText.value != 0&&getText.value!="" ) {
                            question = getText.value;
                        }
                        if ( question == "" ) {
                            window.location.href = "http://www.baidu.com/";
                        } else {
                            window.location.href = "http://www.baidu.com/s?wd=" + question;
                        }
                        break;
                    case "Google":
                        choose_search = 2;if ( getText.value != 0&&getText.value!="" ) {
                            question = getText.value;
                        }
                        if ( question == "" ) {
                            window.location.href = "http://www.google.com/";
                        } else {
                            window.location.href = "http://www.google.com/search?q=" + question;
                        }
                        break;
                    case "Bing":
                        choose_search = 3;
                        if ( getText.value != 0&&getText.value!="" ) {
                            question = getText.value;
                        }
                        if ( question == "" ) {
                            window.location.href = "http://www.bing.com/";
                        } else {
                            window.location.href = "http://www.bing.com/search?q=" + question;
                        }
                        break;
                    case "Yahoo":
                        choose_search = 4;
                        if ( getText.value != 0&&getText.value!="" ) {
                            question = getText.value;
                        }
                        if ( question == "" ) {
                            window.location.href = "http://sg.search.yahoo.com/";
                        } else {
                            window.location.href = "http://sg.search.yahoo.com/search?q=" + question;
                        }
                        break;
                    case "1元2次":
                        equation = 1;
                        getText.value = "求解1元2次方程";
                        var X = document.getElementById( "InputX1" );
                        X.style.display = "block";
                        var Y = document.getElementById( "InputY1" );
                        Y.style.display = "block";
                        var raw = document.getElementById( "Input1" );
                        raw.style.display = "block";
                        var one = document.getElementById( "one2x" );
                        one.style.display = "block";
                        var one = document.getElementById( "one1x" );
                        one.style.display = "block";
                        var one = document.getElementById( "onee" );
                        one.style.display = "block";
                        break;
                    case "2元1次":
                        equation = 2;
                        getText.value = "求解2元1次方程组";
                        var X = document.getElementById( "InputX1" );
                        X.style.display = "block";
                        var Y = document.getElementById( "InputY1" );
                        Y.style.display = "block";
                        var raw = document.getElementById( "Input1" );
                        raw.style.display = "block";
                        var X = document.getElementById( "InputX2" );
                        X.style.display = "block";
                        var Y = document.getElementById( "InputY2" );
                        Y.style.display = "block";
                        var raw = document.getElementById( "Input2" );
                        raw.style.display = "block";
                        var one = document.getElementById( "onex" );
                        one.style.display = "block";
                        var one = document.getElementById( "oney" );
                        one.style.display = "block";
                        var one = document.getElementById( "onee" );
                        one.style.display = "block";
                        var two = document.getElementById( "twox" );
                        two.style.display = "block";
                        var two = document.getElementById( "twoy" );
                        two.style.display = "block";
                        var two = document.getElementById( "twoe" );
                        two.style.display = "block";
                        break;
                    case "3元1次":
                        equation = 3;
                        getText.value = "求解3元1次方程组";
                        var X = document.getElementById( "InputX1" );
                        X.style.display = "block";
                        var Y = document.getElementById( "InputY1" );
                        Y.style.display = "block";
                        var Z = document.getElementById( "InputZ1" );
                        Z.style.display = "block";
                        var raw = document.getElementById( "Input1" );
                        raw.style.display = "block";
                        var X = document.getElementById( "InputX2" );
                        X.style.display = "block";
                        var Y = document.getElementById( "InputY2" );
                        Y.style.display = "block";
                        var Z = document.getElementById( "InputZ2" );
                        Z.style.display = "block";
                        var raw = document.getElementById( "Input2" );
                        raw.style.display = "block";
                        var X = document.getElementById( "InputX3" );
                        X.style.display = "block";
                        var Y = document.getElementById( "InputY3" );
                        Y.style.display = "block";
                        var Z = document.getElementById( "InputZ3" );
                        Z.style.display = "block";
                        var raw = document.getElementById( "Input3" );
                        raw.style.display = "block";
                        var one = document.getElementById( "onex" );
                        one.style.display = "block";
                        var one = document.getElementById( "oney" );
                        one.style.display = "block";
                        var one = document.getElementById( "onea" );
                        one.style.display = "block";
                        var one = document.getElementById( "onez" );
                        one.style.display = "block";
                        var one = document.getElementById( "onee" );
                        one.style.display = "block";
                        var two = document.getElementById( "twox" );
                        two.style.display = "block";
                        var two = document.getElementById( "twoy" );
                        two.style.display = "block";
                        var two = document.getElementById( "twoa" );
                        two.style.display = "block";
                        var two = document.getElementById( "twoz" );
                        two.style.display = "block";
                        var two = document.getElementById( "twoe" );
                        two.style.display = "block";
                        var thr = document.getElementById( "thrx" );
                        thr.style.display = "block";
                        var thr = document.getElementById( "thry" );
                        thr.style.display = "block";
                        var thr = document.getElementById( "thra" );
                        thr.style.display = "block";
                        var thr = document.getElementById( "thrz" );
                        thr.style.display = "block";
                        var thr = document.getElementById( "thre" );
                        thr.style.display = "block";
                        break;
                    case "4元1次":
                        equation = 4;
                        getText.value = "求解4元1次方程组";
                        var X = document.getElementById( "InputX1" );
                        X.style.display = "block";
                        var Y = document.getElementById( "InputY1" );
                        Y.style.display = "block";
                        var Z = document.getElementById( "InputZ1" );
                        Z.style.display = "block";
                        var W = document.getElementById( "InputW1" );
                        W.style.display = "block";
                        var raw = document.getElementById( "Input1" );
                        raw.style.display = "block";
                        var X = document.getElementById( "InputX2" );
                        X.style.display = "block";
                        var Y = document.getElementById( "InputY2" );
                        Y.style.display = "block";
                        var Z = document.getElementById( "InputZ2" );
                        Z.style.display = "block";
                        var W = document.getElementById( "InputW2" );
                        W.style.display = "block";
                        var raw = document.getElementById( "Input2" );
                        raw.style.display = "block";
                        var X = document.getElementById( "InputX3" );
                        X.style.display = "block";
                        var Y = document.getElementById( "InputY3" );
                        Y.style.display = "block";
                        var Z = document.getElementById( "InputZ3" );
                        Z.style.display = "block";
                        var W = document.getElementById( "InputW3" );
                        W.style.display = "block";
                        var raw = document.getElementById( "Input3" );
                        raw.style.display = "block";
                        var X = document.getElementById( "InputX4" );
                        X.style.display = "block";
                        var Y = document.getElementById( "InputY4" );
                        Y.style.display = "block";
                        var Z = document.getElementById( "InputZ4" );
                        Z.style.display = "block";
                        var W = document.getElementById( "InputW4" );
                        W.style.display = "block";
                        var raw = document.getElementById( "Input4" );
                        raw.style.display = "block";
                        var one = document.getElementById( "onex" );
                        one.style.display = "block";
                        var one = document.getElementById( "oney" );
                        one.style.display = "block";
                        var one = document.getElementById( "onea" );
                        one.style.display = "block";
                        var one = document.getElementById( "onez" );
                        one.style.display = "block";
                        var one = document.getElementById( "onead" );
                        one.style.display = "block";
                        var one = document.getElementById( "onew" );
                        one.style.display = "block";
                        var one = document.getElementById( "onee" );
                        one.style.display = "block";
                        var two = document.getElementById( "twox" );
                        two.style.display = "block";
                        var two = document.getElementById( "twoy" );
                        two.style.display = "block";
                        var two = document.getElementById( "twoa" );
                        two.style.display = "block";
                        var two = document.getElementById( "twoz" );
                        two.style.display = "block";
                        var two = document.getElementById( "twoad" );
                        two.style.display = "block";
                        var two = document.getElementById( "twow" );
                        two.style.display = "block";
                        var two = document.getElementById( "twoe" );
                        two.style.display = "block";
                        var thr = document.getElementById( "thrx" );
                        thr.style.display = "block";
                        var thr = document.getElementById( "thry" );
                        thr.style.display = "block";
                        var thr = document.getElementById( "thra" );
                        thr.style.display = "block";
                        var thr = document.getElementById( "thrz" );
                        thr.style.display = "block";
                        var thr = document.getElementById( "thrad" );
                        thr.style.display = "block";
                        var thr = document.getElementById( "thrw" );
                        thr.style.display = "block";
                        var thr = document.getElementById( "thre" );
                        thr.style.display = "block";
                        var four = document.getElementById( "fourx" );
                        four.style.display = "block";
                        var four = document.getElementById( "foury" );
                        four.style.display = "block";
                        var four = document.getElementById( "foura" );
                        four.style.display = "block";
                        var four = document.getElementById( "fourz" );
                        four.style.display = "block";
                        var four = document.getElementById( "fourad" );
                        four.style.display = "block";
                        var four = document.getElementById( "fourw" );
                        four.style.display = "block";
                        var four = document.getElementById( "foure" );
                        four.style.display = "block";
                        break;
                    case "解方程":
                        if ( equation == 1 ) {
                            var a = parseFloat( document.getElementById( "InputX1" ).value );
                            var b = parseFloat( document.getElementById( "InputY1" ).value );
                            var c = parseFloat( document.getElementById( "Input1" ).value );
                            if ( b * b + 4 * a * c == 0 ) {
                                var x1 = ( -b + Math.sqrt( b * b + 4 * a * c ) ) / ( 2 * a );
                                getTextx.value = x1;
                                getText.value = "2元1次方程有两个相等实根";
                            } else if ( b * b + 4 * a * c < 0 ) {
                                var c = -b / ( 2 * a );
                                var xe = Math.sqrt( b * b + 4 * a * c ) / ( 2 * a );
                                getTextx.value = c + "+" + xe + "e " + c + "-" + xe + "e";
                                getText.value = "2元1次方程有两个不等虚根";
                            } else {
                                var x1 = ( -b + Math.sqrt( b * b + 4 * a * c ) ) / ( 2 * a );
                                var x2 = ( -b - Math.sqrt( b * b + 4 * a * c ) ) / ( 2 * a );
                                getTextx.value = x1 + " " + x2;
                                getText.value = "2元1次方程有两个不等实根";
                            }
                            if ( isNaN( getText.value ) || isNaN( getTexty.value ) ) {
                                getText.value = "解不出2元1次方程";
                            }
                        } else if ( equation == 2 ) {
                            var a = parseFloat( document.getElementById( "InputX1" ).value );
                            var b = parseFloat( document.getElementById( "InputY1" ).value );
                            var d = parseFloat( document.getElementById( "InputX2" ).value );
                            var e = parseFloat( document.getElementById( "InputY2" ).value );
                            var c = parseFloat( document.getElementById( "Input1" ).value );
                            var f = parseFloat( document.getElementById( "Input2" ).value );
                            if ( a * e != b * d ) {
                                getText.value = "成功解出2元1次方程";
                                getTextx.value = ( c * e - b * f ) / ( a * e - b * d );
                                getTexty.value = ( c * d - a * f ) / ( b * d - a * e );
                                if ( isNaN( getText.value ) || isNaN( getTexty.value ) ) {
                                    getText.value = "解不出2元1次方程";
                                }
                            } else {
                                if ( a * f == d * c ) {
                                    getText.value = "2元1次方程组有无数个解";
                                } else {
                                    getText.value = "2元1次方程组无解";
                                }
                            }
                        } else if ( equation == 3 ) {
                            var a = parseFloat( document.getElementById( "InputX1" ).value );
                            var b = parseFloat( document.getElementById( "InputY1" ).value );
                            var c = parseFloat( document.getElementById( "InputZ1" ).value );
                            var d = parseFloat( document.getElementById( "Input1" ).value );
                            var e = parseFloat( document.getElementById( "InputX2" ).value );
                            var f = parseFloat( document.getElementById( "InputY2" ).value );
                            var g = parseFloat( document.getElementById( "InputZ2" ).value );
                            var h = parseFloat( document.getElementById( "Input2" ).value );
                            var i = parseFloat( document.getElementById( "InputX3" ).value );
                            var j = parseFloat( document.getElementById( "InputY3" ).value );
                            var k = parseFloat( document.getElementById( "InputZ3" ).value );
                            var l = parseFloat( document.getElementById( "Input3" ).value );
                            [ getTextx.value, getTexty.value, getTextz.value ] = solveThreeVariableEquation( a, b, c, d, e, f, g, h, i, j, k, l );
                            if ( isNaN( getTextx.value ) || isNaN( getTexty.value ) || isNaN( getTextz.value ) ) {
                                getText.value = "解不出3元1次方程";
                            } else {
                                getText.value = "成功解出3元1次方程";
                            }
                        } else if ( equation == 4 ) {
                            var a = parseFloat( document.getElementById( "InputX1" ).value );
                            var b = parseFloat( document.getElementById( "InputY1" ).value );
                            var c = parseFloat( document.getElementById( "InputZ1" ).value );
                            var d = parseFloat( document.getElementById( "InputW1" ).value );
                            var e = parseFloat( document.getElementById( "Input1" ).value );

                            var f = parseFloat( document.getElementById( "InputX2" ).value );
                            var g = parseFloat( document.getElementById( "InputY2" ).value );
                            var h = parseFloat( document.getElementById( "InputZ2" ).value );
                            var i = parseFloat( document.getElementById( "InputW2" ).value );
                            var j = parseFloat( document.getElementById( "Input2" ).value );

                            var k = parseFloat( document.getElementById( "InputX3" ).value );
                            var l = parseFloat( document.getElementById( "InputY3" ).value );
                            var m = parseFloat( document.getElementById( "InputZ3" ).value );
                            var n = parseFloat( document.getElementById( "InputW3" ).value );
                            var o = parseFloat( document.getElementById( "Input3" ).value );

                            var p = parseFloat( document.getElementById( "InputX4" ).value );
                            var q = parseFloat( document.getElementById( "InputY4" ).value );
                            var r = parseFloat( document.getElementById( "InputZ4" ).value );
                            var s = parseFloat( document.getElementById( "InputW4" ).value );
                            var t = parseFloat( document.getElementById( "Input4" ).value );

                            [ getTextx.value, getTexty.value, getTextz.value, getTextw.value ] = solveFourVariableEquation( a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t );
                            if ( isNaN( getTextx.value ) || isNaN( getTexty.value ) || isNaN( getTextz.value ) || isNaN( getTextw.value ) || isNaN ) {
                                getText.value = "解不出3元1次方程";
                            } else {
                                getText.value = "成功解出3元1次方程";
                            }
                        } else {
                            getText.value = "未知方程";
                        }
                        break;
                    case "显示/关闭画板":
                        var board = document.getElementById( "board" );
                        if ( board.style.display === "block" ) {
                            board.style.display = "none";
                        } else {
                            board.style.display = "block";
                        }
                        break;
                    case "显示/关闭需代理ChatGPT":
                        var board = document.getElementById( "openai" );
                        if ( board.style.display === "block" ) {
                            board.style.display = "none";
                        } else {
                            board.style.display = "block";
                        }
                        break;
                    case "显示/关闭需代理ChatGPT":
                        var board = document.getElementById( "chat" );
                        if ( board.style.display === "block" ) {
                            board.style.display = "none";
                        } else {
                            board.style.display = "block";
                        }
                        break;
                    case "显示/关闭视频":
                        var video = document.getElementById( "video" );
                        var put = document.getElementById( "ChangeVideo" );
                        var change = document.getElementById( "changeVideo" );
                        if ( video.style.display == "block" ) {
                            video.style.display = "none";
                            put.style.display = "none";
                            change.style.display = "none";
                        } else {
                            video.style.display = "block";
                            put.style.display = "block";
                            change.style.display = "block";
                        }
                        break;
                    case "切换视频":
                        var bvid = document.getElementById( "ChangeVideo" ).value;
                        if ( ( bvid.length != 12 ) || ( bvid[ 0 ] != 'B' && bvid[ 1 ] != 'V' && /^[a-zA-Z0-9]{10}$/.test( bvid.substring( 2 ) ) ) ) {
                            getText.value = "请重新输入正确BV号";
                        } else {
                            var require = "https://api.bilibili.com/x/web-interface/view?bvid=" + bvid;
                            fetch( require )
                                .then( response => {
                                    // 检查HTTP响应状态
                                    if ( !response.ok ) {
                                        throw new Error( "Network response was not ok" );
                                    }
                                    // 将响应解析为JSON
                                    return response.json();
                                } )
                                .then( data => {
                                    // 检查数据是否存在以及包含所需的字段
                                    if ( data && data.aid && data.cid ) {
                                        var aid = data.aid;
                                        var cid = data.cid;
                                        // 设置视频源
                                        document.getElementById( "video" ).src = "https://player.bilibili.com/player.html?aid=" + aid + "&bvid=" + bvid + "&cid=" + cid + "&page=1&high_quality=1&danmaku=0";
                                    } else {
                                        getText.value = "获取aid失败";
                                        throw new Error( "Invalid data format or missing required fields" );
                                    }
                                } )
                                .catch( error => {
                                    // 处理错误
                                    console.error( "Error during fetch operation:", error );
                                } );
                        }
                        break;
                }
            }
        };
    }
}

function toggleSign( n ) {
    return Number( n ) * ( -1 );
}

function removeLastCharacter( n ) {
    n = n.substr( 0, n.length - 1 );
    if ( isNull( n ) ) {
        n = "0";
    }
    return n;
}

function isNull( num ) {
    return num === "0" || num.length === 0;
}

function solveThreeVariableEquation( a, b, c, d, e, f, g, h, i, j, k, l ) {
    var matrix = [
        [ a, b, c ],
        [ e, f, g ],
        [ i, j, k ]
    ];
    // 计算行列式
    const det = matrix[ 0 ][ 0 ] * ( matrix[ 1 ][ 1 ] * matrix[ 2 ][ 2 ] - matrix[ 2 ][ 1 ] * matrix[ 1 ][ 2 ] ) -
        matrix[ 0 ][ 1 ] * ( matrix[ 1 ][ 0 ] * matrix[ 2 ][ 2 ] - matrix[ 1 ][ 2 ] * matrix[ 2 ][ 0 ] ) +
        matrix[ 0 ][ 2 ] * ( matrix[ 1 ][ 0 ] * matrix[ 2 ][ 1 ] - matrix[ 1 ][ 1 ] * matrix[ 2 ][ 0 ] );

    // 计算伴随矩阵
    const adjugateMatrix = [
        [ matrix[ 1 ][ 1 ] * matrix[ 2 ][ 2 ] - matrix[ 2 ][ 1 ] * matrix[ 1 ][ 2 ], -( matrix[ 0 ][ 1 ] * matrix[ 2 ][ 2 ] - matrix[ 0 ][ 2 ] * matrix[ 2 ][ 1 ] ), matrix[ 0 ][ 1 ] * matrix[ 1 ][ 2 ] - matrix[ 0 ][ 2 ] * matrix[ 1 ][ 1 ] ],
        [ -( matrix[ 1 ][ 0 ] * matrix[ 2 ][ 2 ] - matrix[ 1 ][ 2 ] * matrix[ 2 ][ 0 ] ), matrix[ 0 ][ 0 ] * matrix[ 2 ][ 2 ] - matrix[ 0 ][ 2 ] * matrix[ 2 ][ 0 ], -( matrix[ 0 ][ 0 ] * matrix[ 1 ][ 2 ] - matrix[ 0 ][ 2 ] * matrix[ 1 ][ 0 ] ) ],
        [ matrix[ 1 ][ 0 ] * matrix[ 2 ][ 1 ] - matrix[ 1 ][ 1 ] * matrix[ 2 ][ 0 ], -( matrix[ 0 ][ 0 ] * matrix[ 2 ][ 1 ] - matrix[ 0 ][ 1 ] * matrix[ 2 ][ 0 ] ), matrix[ 0 ][ 0 ] * matrix[ 1 ][ 1 ] - matrix[ 0 ][ 1 ] * matrix[ 1 ][ 0 ] ]
    ];

    // 计算逆矩阵
    const inverseMatrix = adjugateMatrix.map( row => row.map( entry => entry / det ) );
    let x = d * inverseMatrix[ 0 ][ 0 ] + h * inverseMatrix[ 0 ][ 1 ] + l * inverseMatrix[ 0 ][ 2 ];
    let y = d * inverseMatrix[ 1 ][ 0 ] + h * inverseMatrix[ 1 ][ 1 ] + l * inverseMatrix[ 1 ][ 2 ];
    let z = d * inverseMatrix[ 2 ][ 0 ] + h * inverseMatrix[ 2 ][ 1 ] + l * inverseMatrix[ 2 ][ 2 ];
    return [ x, y, z ];
}

function solveFourVariableEquation( a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t ) {
    var matrix = [
        [ a, b, c, d ],
        [ f, g, h, i ],
        [ k, l, m, n ],
        [ p, q, r, s ]
    ];
    // 计算行列式
    const det = matrix[ 0 ][ 0 ] * ( matrix[ 1 ][ 1 ] * ( matrix[ 2 ][ 2 ] * matrix[ 3 ][ 3 ] - matrix[ 3 ][ 2 ] * matrix[ 2 ][ 3 ] ) -
            matrix[ 1 ][ 2 ] * ( matrix[ 2 ][ 1 ] * matrix[ 3 ][ 3 ] - matrix[ 3 ][ 1 ] * matrix[ 2 ][ 3 ] ) +
            matrix[ 1 ][ 3 ] * ( matrix[ 2 ][ 1 ] * matrix[ 3 ][ 2 ] - matrix[ 3 ][ 1 ] * matrix[ 2 ][ 2 ] ) ) -
        matrix[ 0 ][ 1 ] * ( matrix[ 1 ][ 0 ] * ( matrix[ 2 ][ 2 ] * matrix[ 3 ][ 3 ] - matrix[ 3 ][ 2 ] * matrix[ 2 ][ 3 ] ) -
            matrix[ 1 ][ 2 ] * ( matrix[ 2 ][ 0 ] * matrix[ 3 ][ 3 ] - matrix[ 3 ][ 0 ] * matrix[ 2 ][ 3 ] ) +
            matrix[ 1 ][ 3 ] * ( matrix[ 2 ][ 0 ] * matrix[ 3 ][ 2 ] - matrix[ 3 ][ 0 ] * matrix[ 2 ][ 2 ] ) ) +
        matrix[ 0 ][ 2 ] * ( matrix[ 1 ][ 0 ] * ( matrix[ 2 ][ 1 ] * matrix[ 3 ][ 3 ] - matrix[ 3 ][ 1 ] * matrix[ 2 ][ 3 ] ) -
            matrix[ 1 ][ 1 ] * ( matrix[ 2 ][ 0 ] * matrix[ 3 ][ 3 ] - matrix[ 3 ][ 0 ] * matrix[ 2 ][ 3 ] ) +
            matrix[ 1 ][ 3 ] * ( matrix[ 2 ][ 0 ] * matrix[ 3 ][ 1 ] - matrix[ 3 ][ 0 ] * matrix[ 2 ][ 1 ] ) ) +
        matrix[ 0 ][ 3 ] * ( matrix[ 1 ][ 0 ] * ( matrix[ 2 ][ 1 ] * matrix[ 3 ][ 2 ] - matrix[ 3 ][ 1 ] * matrix[ 2 ][ 2 ] ) -
            matrix[ 1 ][ 1 ] * ( matrix[ 2 ][ 0 ] * matrix[ 3 ][ 2 ] - matrix[ 3 ][ 0 ] * matrix[ 2 ][ 2 ] ) +
            matrix[ 1 ][ 2 ] * ( matrix[ 2 ][ 0 ] * matrix[ 3 ][ 1 ] - matrix[ 3 ][ 0 ] * matrix[ 2 ][ 1 ] ) );

    // 计算逆矩阵
    const inverseMatrix = [
        [ ( matrix[ 1 ][ 1 ] * matrix[ 2 ][ 2 ] * matrix[ 3 ][ 3 ] - matrix[ 1 ][ 1 ] * matrix[ 3 ][ 2 ] * matrix[ 2 ][ 3 ] - matrix[ 2 ][ 1 ] * matrix[ 1 ][ 2 ] * matrix[ 3 ][ 3 ] + matrix[ 3 ][ 1 ] * matrix[ 1 ][ 2 ] * matrix[ 2 ][ 3 ] ) / det,
            -( matrix[ 0 ][ 1 ] * matrix[ 2 ][ 2 ] * matrix[ 3 ][ 3 ] - matrix[ 0 ][ 1 ] * matrix[ 3 ][ 2 ] * matrix[ 2 ][ 3 ] - matrix[ 2 ][ 1 ] * matrix[ 0 ][ 2 ] * matrix[ 3 ][ 3 ] + matrix[ 3 ][ 1 ] * matrix[ 0 ][ 2 ] * matrix[ 2 ][ 3 ] ) / det,
            ( matrix[ 0 ][ 1 ] * matrix[ 1 ][ 2 ] * matrix[ 3 ][ 3 ] - matrix[ 0 ][ 1 ] * matrix[ 3 ][ 2 ] * matrix[ 1 ][ 3 ] - matrix[ 1 ][ 1 ] * matrix[ 0 ][ 2 ] * matrix[ 3 ][ 3 ] + matrix[ 3 ][ 1 ] * matrix[ 0 ][ 2 ] * matrix[ 1 ][ 3 ] ) / det,
            -( matrix[ 0 ][ 1 ] * matrix[ 1 ][ 2 ] * matrix[ 2 ][ 3 ] - matrix[ 0 ][ 1 ] * matrix[ 2 ][ 2 ] * matrix[ 1 ][ 3 ] - matrix[ 1 ][ 1 ] * matrix[ 0 ][ 2 ] * matrix[ 2 ][ 3 ] + matrix[ 2 ][ 1 ] * matrix[ 0 ][ 2 ] * matrix[ 1 ][ 3 ] ) / det
        ],
        [ -( matrix[ 1 ][ 0 ] * matrix[ 2 ][ 2 ] * matrix[ 3 ][ 3 ] - matrix[ 1 ][ 0 ] * matrix[ 3 ][ 2 ] * matrix[ 2 ][ 3 ] - matrix[ 2 ][ 0 ] * matrix[ 1 ][ 2 ] * matrix[ 3 ][ 3 ] + matrix[ 3 ][ 0 ] * matrix[ 1 ][ 2 ] * matrix[ 2 ][ 3 ] ) / det,
            ( matrix[ 0 ][ 0 ] * matrix[ 2 ][ 2 ] * matrix[ 3 ][ 3 ] - matrix[ 0 ][ 0 ] * matrix[ 3 ][ 2 ] * matrix[ 2 ][ 3 ] - matrix[ 2 ][ 0 ] * matrix[ 0 ][ 2 ] * matrix[ 3 ][ 3 ] + matrix[ 3 ][ 0 ] * matrix[ 0 ][ 2 ] * matrix[ 2 ][ 3 ] ) / det,
            -( matrix[ 0 ][ 0 ] * matrix[ 1 ][ 2 ] * matrix[ 3 ][ 3 ] - matrix[ 0 ][ 0 ] * matrix[ 3 ][ 2 ] * matrix[ 1 ][ 3 ] - matrix[ 1 ][ 0 ] * matrix[ 0 ][ 2 ] * matrix[ 3 ][ 3 ] + matrix[ 3 ][ 0 ] * matrix[ 0 ][ 2 ] * matrix[ 1 ][ 3 ] ) / det,
            ( matrix[ 0 ][ 0 ] * matrix[ 1 ][ 2 ] * matrix[ 2 ][ 3 ] - matrix[ 0 ][ 0 ] * matrix[ 2 ][ 2 ] * matrix[ 1 ][ 3 ] - matrix[ 1 ][ 0 ] * matrix[ 0 ][ 2 ] * matrix[ 2 ][ 3 ] + matrix[ 2 ][ 0 ] * matrix[ 0 ][ 2 ] * matrix[ 1 ][ 3 ] ) / det
        ],
        [ ( matrix[ 1 ][ 0 ] * matrix[ 2 ][ 1 ] * matrix[ 3 ][ 3 ] - matrix[ 1 ][ 0 ] * matrix[ 3 ][ 1 ] * matrix[ 2 ][ 3 ] - matrix[ 2 ][ 0 ] * matrix[ 1 ][ 1 ] * matrix[ 3 ][ 3 ] + matrix[ 3 ][ 0 ] * matrix[ 1 ][ 1 ] * matrix[ 2 ][ 3 ] ) / det,
            -( matrix[ 0 ][ 0 ] * matrix[ 2 ][ 1 ] * matrix[ 3 ][ 3 ] - matrix[ 0 ][ 0 ] * matrix[ 3 ][ 1 ] * matrix[ 2 ][ 3 ] - matrix[ 2 ][ 0 ] * matrix[ 0 ][ 1 ] * matrix[ 3 ][ 3 ] + matrix[ 3 ][ 0 ] * matrix[ 0 ][ 1 ] * matrix[ 2 ][ 3 ] ) / det,
            ( matrix[ 0 ][ 0 ] * matrix[ 1 ][ 1 ] * matrix[ 3 ][ 3 ] - matrix[ 0 ][ 0 ] * matrix[ 3 ][ 1 ] * matrix[ 1 ][ 3 ] - matrix[ 1 ][ 0 ] * matrix[ 0 ][ 1 ] * matrix[ 3 ][ 3 ] + matrix[ 3 ][ 0 ] * matrix[ 0 ][ 1 ] * matrix[ 1 ][ 3 ] ) / det,
            -( matrix[ 0 ][ 0 ] * matrix[ 1 ][ 1 ] * matrix[ 2 ][ 3 ] - matrix[ 0 ][ 0 ] * matrix[ 2 ][ 1 ] * matrix[ 1 ][ 3 ] - matrix[ 1 ][ 0 ] * matrix[ 0 ][ 1 ] * matrix[ 2 ][ 3 ] + matrix[ 2 ][ 0 ] * matrix[ 0 ][ 1 ] * matrix[ 1 ][ 3 ] ) / det
        ]
    ];

    let x = e * inverseMatrix[ 0 ][ 0 ] + j * inverseMatrix[ 0 ][ 1 ] + o * inverseMatrix[ 0 ][ 2 ] + t * inverseMatrix[ 0 ][ 3 ];
    let y = e * inverseMatrix[ 1 ][ 0 ] + j * inverseMatrix[ 1 ][ 1 ] + o * inverseMatrix[ 1 ][ 2 ] + t * inverseMatrix[ 1 ][ 3 ];
    let z = e * inverseMatrix[ 2 ][ 0 ] + j * inverseMatrix[ 2 ][ 1 ] + o * inverseMatrix[ 2 ][ 2 ] + t * inverseMatrix[ 2 ][ 3 ];
    let w = e * inverseMatrix[ 3 ][ 0 ] + j * inverseMatrix[ 3 ][ 1 ] + o * inverseMatrix[ 3 ][ 2 ] + t * inverseMatrix[ 3 ][ 3 ];
    return [ x, y, z, w ];
}

function changeAid() {
    var newAid = "123456789"; // The new aid value you want to set
    var iframe = document.getElementById( "bilibiliIframe" );
    var currentSrc = iframe.getAttribute( "src" );

    // Use regex to replace the current aid value
    var newSrc = currentSrc.replace( /aid=\d+/, "aid=" + newAid );

    // Update the src attribute of the iframe
    iframe.setAttribute( "src", newSrc );
}