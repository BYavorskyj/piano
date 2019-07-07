
// let note = document.querySelectorAll('notes');

// element.onClick = function (event) {

// }

// note.addEventListener('notes',function (event) {
//     const audio = document.querySelector('notes')
// } )

function play(){
    let audio = document.getElementsByClassName("audio");
    audio.play();
              }


const btn = document.getElementsByClassName('button');

btn.addEventListener('click', play)