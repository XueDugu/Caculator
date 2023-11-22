function init() {
    // 初始化标签
    initializeLabel();
    // 添加功能
    addFunctionality();
    // 添加链接
    addLink();
}

function initializeLabel() {
    // 获取文本框元素
    let value = document.getElementById("Text1");
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
    let getText = document.getElementById("Text1");
    let getTextx = document.getElementById("outputx");
    let getTexty = document.getElementById("outputy");
    let getTextz = document.getElementById("outputz");
    // 获取所有输入框元素
    let nums = document.getElementsByTagName("input");
    let numFirst, symbol;
    var equation;

    for (let i = 0; i < nums.length; i++) {
        // 为每个按钮添加点击事件
        nums[i].onclick = function() {
            if (!isNaN(this.value)) {
                if (isNull(getText.value)) {
                    getText.value = this.value;
                } else {
                    getText.value += this.value;
                }
            } else {
                let buttonInfo = this.value;
                switch (buttonInfo) {
                    case "清":
                        getText.value = "0";
                        break;
                    case "删":
                        getText.value = removeLastCharacter(getText.value);
                        break;
                    case "+/-":
                        getText.value = toggleSign(getText.value);
                        break;
                    case "/":
                    case "*":
                    case "-":
                    case "+":
                        numFirst = Number(getText.value);
                        getText.value = "0";
                        symbol = buttonInfo;
                        break;
                    case "=":
                        switch (symbol) {
                            case "+":
                                getText.value = numFirst + Number(getText.value);
                                break;
                            case "-":
                                getText.value = numFirst - Number(getText.value);
                                break;
                            case "*":
                                getText.value = numFirst * Number(getText.value);
                                break;
                            case "/":
                                if (!isNull(getText.value)) {
                                    getText.value = numFirst / Number(getText.value);
                                } else {
                                    alert("除数不能为0或空哦~");
                                }
                                break;
                        }
                        numFirst = 0;
                        symbol = "";
                        break;
                    case "1元2次":
                        equation=1;
                        getText.value = "求解1元2次方程";
                        var X = document.getElementById("InputX1");
                        X.style.display = "block";
                        var Y = document.getElementById("InputY1");
                        Y.style.display = "block";
                        var raw = document.getElementById("Input1");
                        raw.style.display = "block";
                        var one = document.getElementById("one2x");
                        one.style.display = "block";
                        var one = document.getElementById("one1x");
                        one.style.display = "block";
                        var one = document.getElementById("onee");
                        one.style.display = "block";
                        break;
                    case "2元1次":
                        equation = 2;
                        getText.value = "求解2元1次方程组";
                        var X = document.getElementById("InputX1");
                        X.style.display = "block";
                        var Y = document.getElementById("InputY1");
                        Y.style.display = "block";
                        var raw = document.getElementById("Input1");
                        raw.style.display = "block";
                        var X = document.getElementById("InputX2");
                        X.style.display = "block";
                        var Y = document.getElementById("InputY2");
                        Y.style.display = "block";
                        var raw = document.getElementById("Input2");
                        raw.style.display = "block";
                        var one = document.getElementById("onex");
                        one.style.display = "block";
                        var one = document.getElementById("oney");
                        one.style.display = "block";
                        var one = document.getElementById("onee");
                        one.style.display = "block";
                        var two = document.getElementById("twox");
                        two.style.display = "block";
                        var two = document.getElementById("twoy");
                        two.style.display = "block";
                        var two = document.getElementById("twoe");
                        two.style.display = "block";
                        break;
                    case "3元1次":
                        equation = 3;
                        getText.value = "求解3元1次方程组";
                        var X = document.getElementById("InputX1");
                        X.style.display = "block";
                        var Y = document.getElementById("InputY1");
                        Y.style.display = "block";
                        var Z = document.getElementById("InputZ1");
                        Z.style.display = "block";
                        var raw = document.getElementById("Input1");
                        raw.style.display = "block";
                        var X = document.getElementById("InputX2");
                        X.style.display = "block";
                        var Y = document.getElementById("InputY2");
                        Y.style.display = "block";
                        var Z = document.getElementById("InputZ2");
                        Z.style.display = "block";
                        var raw = document.getElementById("Input2");
                        raw.style.display = "block";
                        var X = document.getElementById("InputX3");
                        X.style.display = "block";
                        var Y = document.getElementById("InputY3");
                        Y.style.display = "block";
                        var Z = document.getElementById("InputZ3");
                        Z.style.display = "block";
                        var raw = document.getElementById("Input3");
                        raw.style.display = "block";
                        var one = document.getElementById("onex");
                        one.style.display = "block";
                        var one = document.getElementById("oney");
                        one.style.display = "block";
                        var one = document.getElementById("onea");
                        one.style.display = "block";
                        var one = document.getElementById("onez");
                        one.style.display = "block";
                        var one = document.getElementById("onee");
                        one.style.display = "block";
                        var two = document.getElementById("twox");
                        two.style.display = "block";
                        var two = document.getElementById("twoy");
                        two.style.display = "block";
                        var two = document.getElementById("twoa");
                        two.style.display = "block";
                        var two = document.getElementById("twoz");
                        two.style.display = "block";
                        var two = document.getElementById("twoe");
                        two.style.display = "block";
                        var thr = document.getElementById("thrx");
                        thr.style.display = "block";
                        var thr = document.getElementById("thry");
                        thr.style.display = "block";
                        var thr = document.getElementById("thra");
                        thr.style.display = "block";
                        var thr = document.getElementById("thrz");
                        thr.style.display = "block";
                        var thr = document.getElementById("thre");
                        thr.style.display = "block";
                        break;
                    case "解方程":
                        if (equation == 1) {
                            var a = parseFloat(document.getElementById("InputX1").value);
                            var b = parseFloat(document.getElementById("InputY1").value);
                            var c = parseFloat(document.getElementById("Input1").value);
                            if(b*b+4*a*c==0){
                                var x1=(-b+Math.sqrt(b*b+4*a*c))/(2*a);
                                getTextx.value=x1;
                                getText.value = "2元1次方程有两个相等实根";
                            }
                            else if(b*b+4*a*c<0){
                                var c=-b/(2*a);
                                var xe=Math.sqrt(b*b+4*a*c)/(2*a);
                                getTextx.value = c+"+"+xe+"e "+c+"-"+xe+"e";
                                getText.value = "2元1次方程有两个不等虚根";
                            }
                            else{
                                var x1=(-b+Math.sqrt(b*b+4*a*c))/(2*a);
                                var x2=(-b-Math.sqrt(b*b+4*a*c))/(2*a);
                                getTextx.value = x1+" "+x2;
                                getText.value = "2元1次方程有两个不等实根";
                            }
                            if(isNaN(getText.value)||isNaN(getTexty.value)){
                                getText.value = "解不出2元1次方程";
                            }
                        }
                        else if (equation == 2) {
                            var a = parseFloat(document.getElementById("InputX1").value);
                            var b = parseFloat(document.getElementById("InputY1").value);
                            var d = parseFloat(document.getElementById("InputX2").value);
                            var e = parseFloat(document.getElementById("InputY2").value);
                            var c = parseFloat(document.getElementById("Input1").value);
                            var f = parseFloat(document.getElementById("Input2").value);
                            if (a * e != b * d) {
                                getText.value = "成功解出2元1次方程";
                                getTextx.value = (c * e - b * f) / (a * e - b * d);
                                getTexty.value = (c * d - a * f) / (b * d - a * e);
                                if(isNaN(getText.value)||isNaN(getTexty.value)){
                                    getText.value = "解不出2元1次方程";
                                }
                            }
                            else{
                                if(a*f==d*c){
                                    getText.value= "2元1次方程组有无数个解";
                                }
                                else{
                                    getText.value = "2元1次方程组无解";
                                }
                            }
                        }
                        else if (equation == 3) {
                            var a = parseFloat(document.getElementById("InputX1").value);
                            var b = parseFloat(document.getElementById("InputY1").value);
                            var c = parseFloat(document.getElementById("InputZ1").value);
                            var d = parseFloat(document.getElementById("Input1").value);
                            var e = parseFloat(document.getElementById("InputX2").value);
                            var f = parseFloat(document.getElementById("InputY2").value);
                            var g = parseFloat(document.getElementById("InputZ2").value);
                            var h = parseFloat(document.getElementById("Input2").value);
                            var i = parseFloat(document.getElementById("InputX3").value);
                            var j = parseFloat(document.getElementById("InputY3").value);
                            var k = parseFloat(document.getElementById("InputZ3").value);
                            var l = parseFloat(document.getElementById("Input3").value);
                            [getTextx.value,getTexty.value,getTextz.value] = solveThreeVariableEquation(a,b,c,d,e,f,g,h,i,j,k,l);
                            if(isNaN(getTextx.value)||isNaN(getTexty.value)||isNaN(getTextz.value)){
                                getText.value = "解不出3元1次方程";
                            }
                            else{
                                getText.value = "成功解出3元1次方程";
                            }
                        }
                        else if(equation==4){
                            getText.value = -4;
                        }
                        else{
                            getText.value = "未知方程";
                        }
                        break;
                    case "显示/关闭画板":
                        var board = document.getElementById("board");
                        if (board.style.display === "block") {
                            board.style.display = "none";
                        } else {
                            board.style.display = "block";
                        }
                        break;
                }
            }
        };
    }
}

function toggleSign(n) {
    return Number(n) * (-1);
}

function removeLastCharacter(n) {
    n = n.substr(0, n.length - 1);
    if (isNull(n)) {
        n = "0";
    }
    return n;
}

function isNull(num) {
    return num === "0" || num.length === 0;
}

function addLink() {
    // 添加链接点击事件，跳转到谷歌首页
    document.getElementById("baidu").onclick = function() {
        window.location.href = "http://www.google.com";
    };
}

// 下面的函数是注释掉的，根据需要可以保留或删除
// function solveEquation(equation) {
//     let value = equation.target.value;
//     switch (value) {
//         case "2元1次":
//             solveTwoVariableEquation(equation);
//             break;
//         case "3元1次":
//             solveThreeVariableEquation(equation);
//             break;
//     }
// }

// function solveTwoVariableEquation(equation) {
//     let getText = equation.target;
// }

function solveThreeVariableEquation(a,b,c,d,e,f,g,h,i,j,k,l) {
    var matrix=[[a,b,c],[e,f,g],[i,j,k]];
    // 计算行列式
    const det = matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[2][1] * matrix[1][2]) -
                matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
                matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);

    // 计算伴随矩阵
    const adjugateMatrix = [
        [matrix[1][1] * matrix[2][2] - matrix[2][1] * matrix[1][2], -(matrix[0][1] * matrix[2][2] - matrix[0][2] * matrix[2][1]), matrix[0][1] * matrix[1][2] - matrix[0][2] * matrix[1][1]],
        [-(matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]), matrix[0][0] * matrix[2][2] - matrix[0][2] * matrix[2][0], -(matrix[0][0] * matrix[1][2] - matrix[0][2] * matrix[1][0])],
        [matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0], -(matrix[0][0] * matrix[2][1] - matrix[0][1] * matrix[2][0]), matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]]
    ];

    // 计算逆矩阵
    const inverseMatrix = adjugateMatrix.map(row => row.map(entry => entry / det));
    let x = d*inverseMatrix[0][0]+h*inverseMatrix[0][1]+l*inverseMatrix[0][2];
    let y = d*inverseMatrix[1][0]+h*inverseMatrix[1][1]+l*inverseMatrix[1][2];
    let z = d*inverseMatrix[2][0]+h*inverseMatrix[2][1]+l*inverseMatrix[2][2];
    return [x,y,z];
}
