
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
            
            break;
        case keyS: 

            break;
    
        case keyD:
            
            break;
        case keyF: 
        
            break;
        case keyG:
            
            break;
        case keyH: 
        
            break;
        case keyH:
            
            break;
        case keyJ: 
        
            break;
        case keyK:
            
            break;
    
        default:
            break;
    }
} )
