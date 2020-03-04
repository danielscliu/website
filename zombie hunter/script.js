
// Initializing game & Score & Variables // 
// Set Score , Initialize spawn, Set Center 

let spawn = document.createElement('img');
let score = document.getElementById('scorecounter');

let count = 0

let backgroundMusic = new Audio();
backgroundMusic.src = "src/BackgroundMusic.mp3"

let spongeScream = new Audio();
spongeScream.src = "src/spongescream.m4a"

let spongeLaugh = new Audio();
spongeLaugh.src = "src/spongeLaugh.mp3"

let randomSpawn = setInterval(setSpawn, 2000);
randomSpawn = clearInterval(randomSpawn); 

spawn.src = 'images/spongedie.gif';   

let isDead = false; 

spawn.onclick = spongeClick;


// startGame
function startGame(){
    backgroundMusic.play(); 
    let button = document.getElementById('startbutton');
    if (button.value==="Start Game") {button.value = "End Game";
    randomSpawn = setInterval(setSpawn, 2000);
// endGame
}else{
button.value = "Start Game";
clearInterval(randomSpawn);
spawn.src = "images/spawn2.gif"
setTimeout(endGame, 2000);

}

}

function endGame() {
    alert("your score is "+ score.innerHTML); 
    location.reload();
}



// let backgroundMusic = document.getElementById('backgroundmusic')


    function increaseScore() {
        count +=1
        score.innerHTML = "" + count;
    }

   

    // Functions for Spawn 1 and Positionings// 

    
    // function spongeClick() {
    //     clearInterval(randomSpawn);
    //     spongeLaugh.play();
    //     increaseScore();
    //     spawn.src = 'images/spongedie.gif';   
    //     randomSpawn = setInterval(setSpawn, 2000);
    // }

    function spongeClick() {
            if (isDead) {
                return
            }
            isDead = true;
            increaseScore();
            spongeDead();
            setTimeout(function () {
                clearInterval(randomSpawn);
                randomSpawn = setInterval(setSpawn,2000); 
                isDead = false;
            }, 2000);
        }

    function spongeDead() {
        spongeLaugh.play();
        spawn.src = 'images/spongedie.gif';

    }




        
    function spawnSponge() {
        spawn.setAttribute('src', 'images/spawn1.gif');
        spawn.setAttribute('alt', 'Spongebob');    
        spawn.setAttribute('class', 'spawn');
        spawn.setAttribute('id', 'spongebob');
        document.body.appendChild(spawn);
        randomSponge();
        
    }


    function spawnCenter() {
        spawn.style.position = 'absolute';
        spawn.style.top = '50%';
        spawn.style.left = '50%';
        spawn.style.transform = "translate(-50%,-50%)";    
        spawn.style.maxHeight = "20vh";
        spawn.style.minHeight = "20vh";
    }

    function randomSponge () {
        // maximum boundaries that image can move without leaving browser
        spawn.style.transform = "translate(0%)";
        let spongeHeight = spawn.offsetHeight;
        let spongeWidth = spawn.offsetWidth;
        let browserHeight = window.innerHeight;
        let browserWidth = window.innerWidth;
        let randH = browserHeight - spongeHeight;
        let randW = browserWidth - spongeWidth;
        
        // removes the transoformation offset
        
        spawn.style.left = ((Math.random()*randW)) + 'px';
        spawn.style.top = ((Math.random()*randH)) + 'px';   
    }

// Game Functions 

function setSpawn (){
    spawnSponge();
    spawnCenter();
    randomSponge();
}

function stopSpawn() {
    clearInterval(randomSpawn);
}  

function reload() {
    location.reload(); 
}



// document.getElementById("spongebob").addEventListener("click", prompt('test'));



// // needs to be worked
// function move() {
//     let x = Math.floor(Math.random()*300);
//     let y = Math.floor(Math.random()*300);
//     object.style.top = x + 'px';
//     object.style.left = y + 'px';
// }


        // let audio = document.getElementById("explosion");
        // let img = document.getElementById("IdZombie");
        // // While isExploding varible is true, more clicking on image 
        // // will not do anything 
        // // using setTimeout, for 2 seconds isExploding remains true 
        // let isExploding = false;
        // let explosionTime= 2000;
        // img.onclick = handler;


        // function handler() {
        //     if (isExploding) {
        //         return
        //     }

        //     isExploding = true;
        //     exploid();
        //     setTimeout(function () {
        //         birth();
        //         isExploding = false;
        //     }, explosionTime);
        // }
        // function exploid() {
        //     img.src = "explosion.gif";
        //     audio.play();
        // }

        // function birth() {
        //     img.src = "zombie.gif";
        // }

 