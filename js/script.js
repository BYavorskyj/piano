
function handlePlay (e) {
    let audio = new Audio('piano-notes/' + e.target.dataset.n + '.mp3');
    audio.play();
}

const btns = document.getElementsByClassName('button');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', handlePlay)
}


 window.addEventListener("keydown", handlePlay);


window.addEventListener('keydown', (e) => {
    const keyA =65;
    const keyS =83;
    const keyD =68;
    const keyF =70;
    const keyG =71;
    const keyH =72;
    const keyJ =74;
    const keyK =75;

    switch (e.keyCode) {
        case keyA:
            handlePlay (1);
            break;
        case keyS: 
            handlePlay (2);
            break;    
        case keyD:
            handlePlay (3);
            break;
        case keyF: 
            handlePlay (4);
            break;
        case keyG:
            handlePlay (5);
            break;
        case keyH: 
            handlePlay (6);
            break;
        case keyH:
            handlePlay (7);
            break;
        case keyJ: 
            handlePlay (8);
            break;
        case keyK:
            handlePlay (9);
            break;
    
        default:
            break;
    }
} )
