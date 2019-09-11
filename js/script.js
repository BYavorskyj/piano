function handlePlay(noteId, keyCode) {
    const  currentElement = document.querySelector(`button[data-key="${keyCode}"]`);
    currentElement.classList.add('active')
    setTimeout(()=>{currentElement.classList.remove('active');}, 300)

    let audio = new Audio('piano-notes/' + noteId + '.mp3');
    audio.play();
}

const btns = document.getElementsByClassName('button');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => { 
        handlePlay(e.target.dataset.n, e.target.dataset.key) 
    })
}

window.addEventListener('keydown', (e) => {
    const keyA = 65;
    const keyS = 83;
    const keyD = 68;
    const keyF = 70;
    const keyG = 71;
    const keyH = 72;
    const keyJ = 74;
    const keyK = 75;

    switch (e.keyCode) {
        case keyA:
            handlePlay(1, e.keyCode);
            break;
        case keyS:
            handlePlay(2, e.keyCode);
            break;
        case keyD:
            handlePlay(3, e.keyCode);
            break;
        case keyF:
            handlePlay(4, e.keyCode);
            break;
        case keyG:
            handlePlay(5, e.keyCode);
            break;
        case keyH:
            handlePlay(6, e.keyCode);
            break;
        case keyJ:
            handlePlay(7, e.keyCode);
            break;
        case keyK:
            handlePlay(8, e.keyCode)
            break;

        default:
            break;
    }
})
