// const { name } = require("ejs");

// const { json } = require("body-parser");

let c = "";
let t = "";
let i0, i1, i2, i3, i4, i5, i6, i7, i8;
let br = new Array(100);
let string1 = "";
let canvases = document.querySelectorAll("input.canvas");
let  palettes = document.querySelectorAll("input.palette");
let tools = document.querySelectorAll("input.tool");
let row = document.getElementById("rowNum").value
let col = document.getElementById("colNum").value
a = localStorage.getItem("id");

if (a == null)
{
    localStorage.setItem("id", "")
}

// addEvent();

function Check()
{
    console.log(canvases, palettes, tools);
}

let board = []
let i = 0;

function sendBoard() {
    console.log('Happy Day')
    data = [];
    let pictureName = document.getElementById('pictureName').value
    let result = "";
    let n = 0;
    let k;
    var a = "";
    a = localStorage.getItem("id")
    if (a == "")
    {
        alert('로그인 하세요')
        // location.href = '/login'
    }
    else
    {
        console.log(document.getElementById('rowNum').value, document.getElementById('colNum').value)
        for(let r = 0; r < document.getElementById('rowNum').value ; r++) {
            for(let c = 0; c < document.getElementById('colNum').value; c++) {
                let cr = r.toString()+c.toString();
                console.log(cr);
                if (document.getElementById(cr).style.backgroundColor == "pink") {
                    data[n] = "00";
                }
                else if (document.getElementById(cr).style.backgroundColor == "red") {
                    data[n] = "01";
                }
                else if (document.getElementById(cr).style.backgroundColor == "#c60000") {
                    data[n] = "02";
                }
                else if (document.getElementById(cr).style.backgroundColor == "orange") {
                    data[n] = "03";
                }
                else if (document.getElementById(cr).style.backgroundColor == "orangered") {
                    data[n] = "04";
                }
                else if (document.getElementById(cr).style.backgroundColor == "rgb(139, 34, 34)") {
                    data[n] = "05";
                }
                else if (document.getElementById(cr).style.backgroundColor == "rgba(255, 255, 0, 0.5)") {
                    data[n] = "06";
                }
                else if (document.getElementById(cr).style.backgroundColor == "yellow") {
                    data[n] = "07";
                }
                else if (document.getElementById(cr).style.backgroundColor == "greenyellow") {
                    data[n] = "08";
                }
                else if (document.getElementById(cr).style.backgroundColor == "green") {
                    data[n] = "09";
                }
                else if (document.getElementById(cr).style.backgroundColor == "powderblue") {
                    data[n] = "10";
                }
                else if (document.getElementById(cr).style.backgroundColor == "blue") {
                    data[n] = "11";
                }
                else if (document.getElementById(cr).style.backgroundColor == "darkblue") {
                    data[n] = "12";
                }
                else if (document.getElementById(cr).style.backgroundColor == "purple") {
                    data[n] = "13";
                }
                else if (document.getElementById(cr).style.backgroundColor == "gray") {
                    data[n] = "14";
                }
                else if (document.getElementById(cr).style.backgroundColor == "black") {
                    data[n] = "15";
                }
                else {
                    data[n] = "16";   
                }
                
                n++;
            }
        }
        n = 0;
        console.log(data);
        if (pictureName == null)
        {
            pictureName = "";
        }
        jsonData = JSON.stringify({
            rows: document.getElementById('rowNum').value,
            cols: document.getElementById('colNum').value,
            name: a,
            pictureName: pictureName,
            data: data,
        });
        console.log(jsonData);
        console.log("mangham");
        fetch('/saveBoard', {
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: jsonData,
        })
        .then((response) => rest = response.json())
        .then((rest) => alert(rest.res));
    }
};

i = 0
function bringBoard(req, res) {
    let result = "Hello";
    id = req
    console.log("1");
    jsonData = JSON.stringify({
        id: id,
    });
    fetch('/bringBoard', {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
        method: 'POST',
        body: jsonData,
    })
    .then((response) => rest = response.json())
    .then(
        (rest) => {
            console.log(rest.res);
            let info = rest.res;
            let a=2;
            console.log(info[0].colNum);
            console.log(info[0].rowNum);
            localStorage.setItem("row", info[0].rowNum)
            localStorage.setItem("col", info[0].colNum)
            localStorage.setItem("colors", info[0].colors);
            console.log(localStorage.getItem("info"));
            localStorage.setItem("start", "start");
            location.href = "/"+info[0].colNum+"/"+info[0].rowNum;
            addEvent();
        }
    );
}

palettes.forEach(button => {
    button.addEventListener("click",function(){
        c = this.style.backgroundColor;
        console.log(c);
    });
});

tools.forEach(button => {
    button.addEventListener("click",function(){
        
        
        
        t = this.id;
        this.style.filter = "brightness(50%)";
        
        for (let i = 0; i < tools.length ; i++)
        {
            if (this != tools[i])
            {
                tools[i].style.filter = "brightness(100%)";
            }   
        }
        console.log(t);
    });
});

canvases.forEach(button => {
    button.addEventListener("click",function(){
        canvases = document.querySelectorAll("input.canvas");
        palettes = document.querySelectorAll("input.palette");
        console.log('asdd')
        if (t == "")
        {
            console.log(t);
        }
        else if(t == "Brush")
        {
            this.style.backgroundColor = c;
            console.log(t);
        }
        else if(t == 'Stamp1')
        {
            this.style.backgroundColor = c;
            i0 = this.id;
            console.log(row)
            if(Number(i0[1])+1 < row)
            {
                i1 = document.getElementById(i0[0] + (Number(i0[1])+1).toString());
                i1.style.backgroundColor = c;
            }
            if(Number(i0[0])+1 < col)
            {
                i2 = document.getElementById((Number(i0[0])+1).toString() + i0[1]);
                i2.style.backgroundColor = c;
            }
            if(Number(i0[0])+1 < row || Number(i0[1])+1 <= col)
            {
                i3 = document.getElementById((Number(i0[0])+1).toString() + (Number(i0[1])+1).toString());
                i3.style.backgroundColor = c;
            }
            console.log(t);
        }
        else if(t == 'Stamp2')
        {
            this.style.backgroundColor = c;
            i0 = this.id;
            if(Number(i0[1])+1 < row)
            {
                i1 = document.getElementById(i0[0] + (Number(i0[1])+1).toString());
                i1.style.backgroundColor = c;
            }
            if(Number(i0[0])+1 < col)
            {
                i2 = document.getElementById((Number(i0[0])+1).toString() + i0[1]);
                i2.style.backgroundColor = c;
            }
            if(Number(i0[0])+1 < col && Number(i0[1])+1 < row)
            {
                i3 = document.getElementById((Number(i0[0])+1).toString() + (Number(i0[1])+1).toString());
                i3.style.backgroundColor = c;
            }
            if(Number(i0[1])+2 < row)
            {
                i4 = document.getElementById(i0[0] + (Number(i0[1])+2).toString());
                i4.style.backgroundColor = c;
            }
            if(Number(i0[0])+2 < col)
            {
                i5 = document.getElementById((Number(i0[0])+2).toString() + i0[1]);
                i5.style.backgroundColor = c;
            }
            if(Number(i0[0])+1 < col && Number(i0[1])+2 < row)
            {
                i3 = document.getElementById((Number(i0[0])+1).toString() + (Number(i0[1])+2).toString());
                i3.style.backgroundColor = c;
            }
            if(Number(i0[0])+2 < col && Number(i0[1])+1 < row)
            {
                i3 = document.getElementById((Number(i0[0])+2).toString() + (Number(i0[1])+1).toString());
                i3.style.backgroundColor = c;
            }
            if(Number(i0[0])+2 < col && Number(i0[1])+2 < row)
            {
                i3 = document.getElementById((Number(i0[0])+2).toString() + (Number(i0[1])+2).toString());
                i3.style.backgroundColor = c;
            }
            console.log(t);
        }
        else if(t == "Paint")
        {
            for (let i = 0; i < canvases.length ; i++){
                canvases[i].style.backgroundColor = c;
            }
            console.log(t);
        }
        else if(t == "Eraser")
        {
            this.style.backgroundColor = "";
            console.log(t);
        }
        else
        {
            console.log("Bug")
        }
    });
});


document.getElementById("Clear").addEventListener("click",function(){
    
    
    
    for (let i = 0; i < canvases.length ; i++){
        canvases[i].style.backgroundColor = "";
    }
});

function BSC()
{
    row = document.getElementById("row").value
    col = document.getElementById("col").value
    location.href = "/"+row+"/"+col;
}
function GOwn()
{
    var a = ""
    a = localStorage.getItem("id")
    if (a == "")
    {
        console.log(a);
        alert('로그인 하세요')
        // location.href = "/login"
    }
    else if (a != "")
    {
        var result = "";
        var length;
        PictureNames = [];
        id = localStorage.getItem("id")
        jsonData = JSON.stringify({
                id: id,
        });
        console.log(id);
        fetch('/MyPicture', {
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: jsonData,
        })
        .then((response) => rest = response.json())
        .then((rest) => {
            console.log(rest.res);
            result = rest.res;
            data = [];
            id = [];
            for (var i = 0 ; i < result.length ; i++)
            {
                PictureNames[i] = result[i].pictureName;
                console.log(PictureNames[i])
                data[i] = PictureNames[i]
                id[i] = result[i].id
                if(data[i] == "")
                {
                    data[i] = "No name"
                }
                console.log(result.length)
            }
            console.log(id)
            jsonData = JSON.stringify({
                length: result.length,
                id : id,
                pictureName : data
            });
            console.log(PictureNames)
            fetch('/GoOwn', {
                headers: {
                    'Accept': "application/json",
                    "Content-Type": "application/json",
                },
                method: 'POST',
                body: jsonData,
            })
            .then((response) => rest = response.json())
        .then((rest) => {console.log(rest.res)});
        });
        console.log(a);
        location.href = "/own/";
    }
}

function GOJoin()
{
    a = localStorage.getItem("id")
    if (a == "")
    {
        location.href = "/join";
    }
    else
    {
        localStorage.setItem("id", "");
        location.href = '/'
    }
}
function GOLOGIN()
{
    location.href = '/login'
}

const logbtn = document.getElementById('Login');
const jobtn = document.getElementById('Join');

if (localStorage.getItem("id") != "")
{
    console.log(localStorage.getItem("id"))
    logbtn.style.display = 'none'
    jobtn.style.width = '220px';
    jobtn.value = 'Logout'
}
else
{
    console.log(localStorage.getItem("id"))
}

if (localStorage.getItem("start") == "start")
{
    console.log(localStorage.getItem("info"))
    colors = localStorage.getItem("colors");
    rowNum = localStorage.getItem("row")
    colNum = localStorage.getItem("col")
    let canvas = document.querySelector('#canvas');
    a = 2;
    canvas.innerHTML = "";

    for(let i = 0 ; i < rowNum ; i++)
    {
        for(let j = 0 ; j < colNum ; j++)
        {
            console.log(colors[a] + colors[a+1])
            let color = "";
            if (colors[a] + colors[a+1] == "00") {
                color = "pink";
            }
            else if (colors[a] + colors[a+1] == "01") {
                color = "red";
            }
            else if (colors[a] + colors[a+1] == "02") {
                color = "#c60000";
            }
            else if (colors[a] + colors[a+1] == "03") {
                color = "orange";
            }
            else if (colors[a] + colors[a+1] == "04") {
                color = "orangered";
            }
            else if (colors[a] + colors[a+1] == "05") {
                color = "rgb(139, 34, 34)";
            }
            else if (colors[a] + colors[a+1] == "06") {
                color = "rgba(255, 255, 0, 0.5)";
            }
            else if (colors[a] + colors[a+1] == "07") {
                color = "yellow";
            }
            else if (colors[a] + colors[a+1] == "08") {
                color = "greenyellow";
            }
            else if (colors[a] + colors[a+1] == "09") {
                color = "green";
            }
            else if (colors[a] + colors[a+1] == "10") {
                color = "powderblue";
            }
            else if (colors[a] + colors[a+1] == "11") {
                color = "blue";
            }
            else if (colors[a] + colors[a+1] == "12") {
                color = "darkblue";
            }
            else if (colors[a] + colors[a+1] == "13") {
                color = "purple";
            }
            else if (colors[a] + colors[a+1] == "14") {
                color = "gray";
            }
            else if (colors[a] + colors[a+1] == "15") {
                color = "black";
            }
            else if (colors[a] + colors[a+1] == "16") {
                color = "";
            }
            canvas.innerHTML += `
                <input type="button" style="width: 70px;height: 70px;background-color: ${color};" class = "canvas" id="${i}${j}">`;
            
            a += 5;
        }
        canvas.innerHTML += "<br />";
    }
    canvases = document.querySelectorAll("input.canvas");
    canvases.forEach(button => {
        button.addEventListener("click",function(){
            canvases = document.querySelectorAll("input.canvas");
            palettes = document.querySelectorAll("input.palette");
            console.log('asdd')
            if (t == "")
            {
                console.log(t);
            }
            else if(t == "Brush")
            {
                this.style.backgroundColor = c;
                console.log(t);
            }
            else if(t == 'Stamp1')
            {
                this.style.backgroundColor = c;
                i0 = this.id;
                console.log(row)
                if(Number(i0[1])+1 < row)
                {
                    i1 = document.getElementById(i0[0] + (Number(i0[1])+1).toString());
                    i1.style.backgroundColor = c;
                }
                if(Number(i0[0])+1 < col)
                {
                    i2 = document.getElementById((Number(i0[0])+1).toString() + i0[1]);
                    i2.style.backgroundColor = c;
                }
                if(Number(i0[0])+1 < row || Number(i0[1])+1 <= col)
                {
                    i3 = document.getElementById((Number(i0[0])+1).toString() + (Number(i0[1])+1).toString());
                    i3.style.backgroundColor = c;
                }
                console.log(t);
            }
            else if(t == 'Stamp2')
            {
                this.style.backgroundColor = c;
                i0 = this.id;
                if(Number(i0[1])+1 < row)
                {
                    i1 = document.getElementById(i0[0] + (Number(i0[1])+1).toString());
                    i1.style.backgroundColor = c;
                }
                if(Number(i0[0])+1 < col)
                {
                    i2 = document.getElementById((Number(i0[0])+1).toString() + i0[1]);
                    i2.style.backgroundColor = c;
                }
                if(Number(i0[0])+1 < col && Number(i0[1])+1 < row)
                {
                    i3 = document.getElementById((Number(i0[0])+1).toString() + (Number(i0[1])+1).toString());
                    i3.style.backgroundColor = c;
                }
                if(Number(i0[1])+2 < row)
                {
                    i4 = document.getElementById(i0[0] + (Number(i0[1])+2).toString());
                    i4.style.backgroundColor = c;
                }
                if(Number(i0[0])+2 < col)
                {
                    i5 = document.getElementById((Number(i0[0])+2).toString() + i0[1]);
                    i5.style.backgroundColor = c;
                }
                if(Number(i0[0])+1 < col && Number(i0[1])+2 < row)
                {
                    i3 = document.getElementById((Number(i0[0])+1).toString() + (Number(i0[1])+2).toString());
                    i3.style.backgroundColor = c;
                }
                if(Number(i0[0])+2 < col && Number(i0[1])+1 < row)
                {
                    i3 = document.getElementById((Number(i0[0])+2).toString() + (Number(i0[1])+1).toString());
                    i3.style.backgroundColor = c;
                }
                if(Number(i0[0])+2 < col && Number(i0[1])+2 < row)
                {
                    i3 = document.getElementById((Number(i0[0])+2).toString() + (Number(i0[1])+2).toString());
                    i3.style.backgroundColor = c;
                }
                console.log(t);
            }
            else if(t == "Paint")
            {
                for (let i = 0; i < canvases.length ; i++){
                    canvases[i].style.backgroundColor = c;
                }
                console.log(t);
            }
            else if(t == "Eraser")
            {
                this.style.backgroundColor = "";
                console.log(t);
            }
            else
            {
                console.log("Bug")
            }
        });
    });
    localStorage.setItem("start", "")
}
function deleteBoard(req, res) {
    id = req
    console.log(req)
    jsonData = JSON.stringify({
        id: id,
    });

    fetch('/deleteBoard', {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
        method: 'POST',
        body: jsonData,
    })
    .then((response) => rest = response.json())
    .then((rest) => {
        alert(rest.res)
        
        var a = rest.id; 
        console.log(rest.id)
        localStorage.setItem("id", a)
    });
    location.href = "/5/5"
}
