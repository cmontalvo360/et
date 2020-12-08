window.addEventListener("load", function () {
    time();
    setStyles();
    createTable();
});

// #3
document.querySelector("h1").style.color = "lightgreen";

var places = document.createElement("h3");
places.innerHTML = "Click to find out where E.T. has 'visited'";
document.getElementById("schedule").appendChild(places);



// #4
var nav = document.querySelector("ul");
nav.addEventListener("mouseover", function (e) {
    e.target.style.color = "purple";
    setTimeout(function () {
        e.target.style.color = "yellow";

    }, 1500);
});

document.addEventListener("keydown", function (e) {
    if(e.key === "Enter"){
    document.querySelector("body").style.backgroundColor = "blue";
    setTimeout(function () {
        e.target.style.backgroundColor = "cornflowerblue";

    }, 500);
    }
});

var pics = document.querySelectorAll("img");
pics.forEach(element => {
    var size = element.style.width;
    element.addEventListener("mouseover", function(e){
        element.style.width = "500px";
    });
    element.addEventListener("mouseout", function(e){
        element.style.width = size;
    })
});



// #5
var msg = document.getElementById("secretmsg");
msg.addEventListener("click", deleteMsg);
function deleteMsg() {
    var text = document.createElement("p");
    var content = document.createTextNode("If You find my ship Ill fly you to my home planet!");
    text.appendChild(content);
    text.style.color = "yellow";
    msg.insertAdjacentElement("afterend", text);

    setTimeout(function () {
        text.removeChild(content);
    }, 2000);

};

var factsBtn = document.createElement("input");
factsBtn.setAttribute("type", "button");
factsBtn.setAttribute("value", "Web View");

// #6 
function setStyles() {
    var styles = document.createElement("link");
    styles.setAttribute("href", "ss_insert.css");
    styles.setAttribute("rel", "stylesheet");
    document.head.appendChild(styles);
}
// #7 time
var d1 = document.createElement("div");
d1.setAttribute("id", "time");
function time() {
    var date = new Date();
    var time = date.toLocaleString();

    d1.innerHTML = time;
    document.querySelector("h3").insertAdjacentElement("afterend", d1);
}
d1.style.color = "pink";
d1.style.textAlign = "center";
setInterval(time, 1000);

// #8
function createTable(){
    var sched = document.getElementById("schedule");
    var table = document.createElement("table");
    var row = document.createElement("tr");
    var locations = ["https://www.google.com/maps/place/51%C2%B010'43.7%22N+1%C2%B049'34.2%22W/@51.1788775,-1.8261626,3a,75y,162.29h,90t/data=!3m8!1e2!3m6!1sAF1QipM4nFtYs3pwRMmzEuooPMG22a3p85D211abjIN1!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM4nFtYs3pwRMmzEuooPMG22a3p85D211abjIN1%3Dw203-h114-k-no!7i4160!8i2340!4m12!1m6!3m5!1s0x4873e63b850af611:0x979170e2bcd3d2dd!2sStonehenge!8m2!3d51.178882!4d-1.826215!3m4!1s0x0:0x0!8m2!3d51.1788452!4d-1.8261462",
        "https://www.google.com/maps/place/Area+51,+NV/@37.2430548,-115.7930198,12z/data=!4m13!1m7!3m6!1s0x80b81baaba3e8c81:0x970427e38e6237ae!2sArea+51,+NV!3b1!8m2!3d37.2430548!4d-115.7930198!3m4!1s0x80b81baaba3e8c81:0x970427e38e6237ae!8m2!3d37.2430548!4d-115.7930198",
        "https://www.google.com/maps/@47.6203875,-122.349369,3a,75y,146.92h,68.06t/data=!3m8!1e1!3m6!1sAF1QipNPOaQEwR02ZTC3fvDtLdRpLmCHNQ1p_ObxjXc1!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNPOaQEwR02ZTC3fvDtLdRpLmCHNQ1p_ObxjXc1%3Dw203-h100-k-no-pi-28.45824-ya172.14963-ro-5.698996-fo100!7i5376!8i2688",
        "https://www.google.com/maps/place/The+White+House/@38.8971419,-77.0360685,17.25z/data=!4m5!3m4!1s0x0:0x715969d86d0b76bf!8m2!3d38.8976763!4d-77.0365298",
        "https://www.google.com/maps/@29.9770643,31.1318492,2a,75y,212.4h,99.27t/data=!3m6!1e1!3m4!1sHnHWRfQJV4vZU2wxEK3CyQ!2e0!7i13312!8i6656"];

    for(var i = 0; i < 5; i++){
        var cell = document.createElement("td");
        cell.setAttribute("value", locations[i]);
        var text = document.createTextNode("Mystery place " + (i+1));
        cell.style.border = "solid magenta";
        cell.style.background = "white";
        cell.appendChild(text);
        row.appendChild(cell);

        cell.addEventListener("click", function(e){
            location.href = e.target.getAttribute("value");
        });
    }
    table.appendChild(row);
    sched.appendChild(table);
}

// #10

var friends = document.forms.friend;
   for (var i = 0; i < friends.length; i++) {
        friends[i].onclick = function(e){
            switch(e.target.value){
                case "yes": alert("Im so happy you said yes!!");
                break;
                case "no": alert("oh well. I guess I can use some more people to experiment on!!");
                break;
                case "maybe": alert("welllll okkkkkk?......");
            }
        }
   }

document.getElementById("subBtn").onclick = name;
function name(){
    var name = document.forms.name.fname.value;
    var h2 = document.createElement("h2");
    var msg = document.createTextNode("I was a lone wolf until I met " + name + "...but now I am apart of a wolf pack! :D");
    h2.appendChild(msg);
    document.getElementById("bottom").appendChild(h2);
}


// #11
var styles = document.createElement("style");
document.head.appendChild(styles);
styles.sheet.insertRule("div#schedule table{margin-left: auto; margin-right: auto}", 0);
styles.sheet.insertRule("div {padding: 20px}", 1);
styles.sheet.insertRule("#bottom {text-align: center;}", 2);
