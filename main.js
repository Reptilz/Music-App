window.onload = () => {
    //Selectionne les informations affichées selon la musique.
    const song_img_el = document.getElementById('song-image');
    const song_title_el = document.getElementById('song-title');
    const song_artist_el = document.getElementById('song-artist');
    const song_next_up_el = document.getElementById('song-next-up');

    //Selectionne les boutons
    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
    const prev_btn = document.getElementById('prev-btn');
    const next_btn = document.getElementById('next-btn');

    //Selectionne le player
    const audio_player = document.getElementById('music-player');

    //variables musique play
    let current_song_index;
    let next_song_index;

    //variable qui contient toutes les musiques en format json
    let songs = [
        {
            title: 'Baby Are You Home',
            artist: 'Lil Uzi Vert vs. The World',
            song_path: 'music/lil-uzi-vert-baby-are-you-home.mp3',
            img_path: 'images/LilUziVert-BabyAreYouHome.jpg'
        },
        {
            title: 'Heart in Pieces',
            artist: 'Lil Uzi Vert ft. Future',
            song_path: 'music/future-lil-uzi-vert-heart-in-pieces.mp3',
            img_path: 'images/plutox.png'
        },
        {
            title: 'Comin Out Strong',
            artist: 'Future ft. The Weeknd',
            song_path: 'music/future-comin-out-strong-feat-the-weeknd.mp3',
            img_path: 'images/comin-out-strong.jpg'
        },
        {
            title: 'Is There Someone Else?',
            artist: 'The Weeknd - Dawn FM',
            song_path: 'music/the-weeknd-is-there-someone-else-official-audio.mp3',
            img_path: 'images/dawnfm.png'
        },
        {
            title: 'The Color Violet',
            artist: 'Tory Lanez - Alone At Prom',
            song_path: 'music/tory-lanez-the-color-violet-official-audio.mp3',
            img_path: 'images/aloneatprom.png'
        },

    ];

    //call des fonctions...
    play_btn.addEventListener('click', togglePlaySong);
    next_btn.addEventListener('click', () => changeSong());
    prev_btn.addEventListener('click', () => changeSong(false));
    
    initPlayer();

    //fonction qui prend l'index(play), et qui l'incrémente de +1 (next)
    function initPlayer() {
        current_song_index = 0;
        next_song_index = current_song_index + 1;
        updatePlayer();
    }

    //fonction qui va changer le titre, l'image et la prochaine musique
    function updatePlayer() {
        let song = songs[current_song_index]; //initialise l'index de la musique

        //les informations de la musique
        song_img_el.style = `background-image: url("${song.img_path}")`;
        song_title_el.innerText = song.title;
        song_artist_el.innerText = song.artist;

        //next musique
        song_next_up_el.innerText = songs[next_song_index].title + " - " + songs[next_song_index].artist;

        //lecteur audio (musique play)
        audio_player.src = song.song_path;

    }

    //fonction qui va changer le logo(changer la class) quand la musique est en pause ou play
    function togglePlaySong(){
        if (audio_player.paused){
            audio_player.play();
            play_btn_icon.classList.remove('fa-play');
            play_btn_icon.classList.add('fa-pause');
        } else {
            audio_player.pause();
            play_btn_icon.classList.add('fa-play');
            play_btn_icon.classList.remove('fa-pause');
        }
    }

    //fonction qui passe de musique...
    function changeSong(next = true) {
        //next btn (next=true)
        if(next){
            current_song_index++;
            next_song_index = current_song_index + 1;

            if(current_song_index > songs.length - 1){
                current_song_index = 0;
                next_song_index = current_song_index + 1;
            }

            if(next_song_index > songs.length - 1){
                next_song_index = 0;
            }
            //previous btn (next=false)
        } else {
            current_song_index--;
            next_song_index = current_song_index + 1;

            if(current_song_index < 0){
                current_song_index = songs.length - 1;
                next_song_index = 0;
            }
        }

        updatePlayer();
        togglePlaySong();
    }
}

