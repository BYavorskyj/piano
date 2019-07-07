let audio = new Audio('audio_file.mp3');
audio.play();

const btns = document.getElementsByClassName('button');
for(let i=0; i>=btns.length; i++) {
    btns[i].addEventListener('click', play)
}
