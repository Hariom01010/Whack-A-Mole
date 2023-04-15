let time = 60
let score = 0;
let moleBox;
let intervalId;

function start(){
        time = 60;
        score = 0;
        document.getElementById("score").innerText = score;
        document.getElementById("timer").innerText = time;
        intervalId = setInterval(() => {
            time = time - 1;
            document.getElementById("timer").innerText = time;
            randomMole();
            if (time == 0) {
                clearInterval(intervalId);
            }
        }, 800);
}

function reset(){
    time = 60;
    score = 0;
    document.getElementById("timer").innerText = time;
    document.getElementById("score").innerText = score
    clearInterval(intervalId)
    moleBox.removeAttribute("src")
}

function randomMole(){
    if(moleBox !== undefined){
        moleBox.removeAttribute("src")
    }
    const imageId = Math.ceil(Math.random()*10)
    if(imageId == 0 || imageId == 10){
        null
    }else{
    moleBox = document.getElementById(imageId)
    moleBox.setAttribute("src","/public/mole2.svg")
    }

}

function setScore(e){
    console.log(e.target)
    if(document.getElementById("timer").innerText !== 0){
        if(e.srcElement.tagName == "DIV"){
            let imageId = e.target.childNodes[0].id;
            let image = document.getElementById(imageId)
            let imgSrc = image.getAttribute("src")
            if(imgSrc == "/public/mole2.svg"){
                score = score+1;
                document.getElementById("score").innerText = score
            }else{
                score = score;
                document.getElementById("score").innerText = score
            }
        }else if(e.srcElement.tagName == "IMG"){
            let imageId = e.target.id;
            let image = document.getElementById(imageId)
            let imgSrc = image.getAttribute("src")
            if(imgSrc == "/public/mole2.svg"){
                score = score+1;
                document.getElementById("score").innerText = score
            }else{
                score = score;
                document.getElementById("score").innerText = score
            }
        }
    }else{
        null
    }

}