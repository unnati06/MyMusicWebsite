// console.log('hello world');
// let songs = [
//     {songname: "O meri Jaan", filepath: "songs/omerijaan.mp3"}
// ]



// let flag = 0;
// const playAudio = (song) => {
//     let audioElement = document.;

//     audio.forEach(element => {
    //         if(element == song) {
        
//             if(!flag){
//                 song.play();
//                 flag = 1;
//                 fontAwe.className = "far fa-pause-circle";
//             }else{
//                 song.pause();
//                 flag = 0;
//                 fontAwe.className = "far fa-play-circle";
//             }
//         }
//     });

// }
// const value = document.querySelector(".log")
// const validateForm = () => {
    
    //     let x=document.forms["myForm"]["a"].value;
    //     if (x== ""){
        //         alert("it must be filled out");
        //         return false;
        //     }
        // }
        
    let fontAwe = document.querySelector(".far");

        let flag = 0;
        let audio = new Audio();
        let preAudio = "";
        let preIcon = "pbt";
        let prevSong;
        
        const playAudio = (song, classN) => {
            let fontAwe = document.querySelector(classN);
            let dskafjl = ".".concat(preIcon);
            console.log(dskafjl)
            if(song == preAudio)
            {}
            else{
                audio.src = song;
                flag = 0;
                prevSong = document.querySelector(dskafjl);
                prevSong.className = `far fa-play-circle ${preIcon}`;
            }
            if(!flag) {
                audio.play();
                flag = 1;
                fontAwe.className = `far fa-pause-circle ${classN.slice(1,classN.length)}`;
            }
            else{
                audio.pause();
                flag = 0;
                fontAwe.className = `far fa-play-circle ${classN.slice(1,classN.length)}`;
            }
            preAudio = song;
            preIcon = classN.slice(1,classN.length);
        }

        