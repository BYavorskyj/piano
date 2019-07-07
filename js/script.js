// function hendlePlay(e){
//     let audio = document.getElementById("myAudio");
//     audio.hendlePlay(e);
//               }

// let audio = new Audio(e);

// audio.play();
// const btns = document.getElementsByClassName('button');
// for(let i=0; i>=btns.length; i++) {
//     btns[i].addEventListener('click', hendlePlay)
// }


handlePlay = (e) =>{
    let audio = new Audio('piano-notes'+e.target.dataset.n+'.mp3');
    audio.play();
    }
    const btns = document.getElementsByClassName('button');
    for(let i=0; i>=btns.length; i++) {
        btns[i].addEventListener('click', hendlePlay)
    }