// Select all the elements in the HTML page
// and assign them to a variable
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
    {
        name: "All About That Bass",
        artist: "Meghan Trainor",
        image: "./image/1.jpg",
        path: "./music/1.mp3"
    },
    {
        name: "Price Tag",
        artist: "Jessie J ft B.o.B",
        image: "./image/2.jpg",
        path: "./music/2.mp3"
    },
    {
        name: "Shake It Off",
        artist: "Taylor Swift",
        image: "./image/3.jpg",
        path: "./music/3.mp3"
    },
    {
        name: "No Boyfriend",
        artist: "Hoàng Yến Chibi",
        image: "./image/4.jpg",
        path: "./music/4.mp3"
    },
    {
        name: "Run the world",
        artist: "Beyoncé",
        image: "./image/5.jpg",
        path: "./music/5.mp3"
    },
    {
        name: "Girl on fire",
        artist: "Alicia Keys",
        image: "./image/6.jpg",
        path: "./music/6.mp3"
    },
    {
        name: "Wonder Woman",
        artist: "Lion Babe",
        image: "./image/7.jng",
        path: "./music/7.mp3"
    },
    {
        name: "Giấc mơ khác",
        artist: "Chillies",
        image: "./image/8.jpg",
        path: "./music/8.mp3"
    },
    {
        name: "tinhdautinhdautinhdau",
        artist: "Kai Đinh",
        image: "./image/9.jpg",
        path: "./music/9.mp3"
    },
    {
        name: "Trên những đám mây",
        artist: "Chillies",
        image: "./image/10.jpg",
        path: "./music/10.mp3"
    },
    {
        name: "Va vào giai điệu này",
        artist: "MCK",
        image: "./image/11.jpg",
        path: "./music/11.mp3"
    },
    {
        name: "You",
        artist: "msmy, AK49",
        image: "./image/12.jpg",
        path: "./music/12.mp3"
    },
    {
        name: "11:11",
        artist: "MiiNa",
        image: "./image/13.jpg",
        path: "./music/13.mp3"
    },
    {
        name: "Tình Yêu Đến Sau",
        artist: "Myra Trần",
        image: "./image/14.jpg",
        path: "./music/14.mp3"
    },
    {
        name: "Cám Dỗ",
        artist: "Myra Trần",
        image: "./image/15.jpg",
        path: "./music/15.mp3"
    },
    {
        name: "Như Những Phút Ban Đầu",
        artist: "Myra Trần",
        image: "./image/16.jpg",
        path: "./music/16.mp3"
    },
    {
        name: "Dừng Yêu (feat. Negav)",
        artist: "Myra Trần",
        image: "./image/17.jpg",
        path: "./music/17.mp3"
    },
    {
        name: "Giữa Đêm Bật Khóc",
        artist: "Myra Trần",
        image: "./image/18.jpg",
        path: "./music/18.mp3"
    },
    {
        name: "Anh Chưa Thương Em Đến Vậy Đâu",
        artist: "Myra Trần",
        image: "./image/19.jpg",
        path: "./music/19.mp3"
    },
    {
        name: "Trong Trí Nhớ Của Anh (Cover)",
        artist: "Myra Trần",
        image: "./image/20.jpg",
        path: "./music/20.mp3"
    },
    {
        name: "Bạn Ơi",
        artist: "Myra Trần",
        image: "./image/21.jpg",
        path: "./music/21.mp3"
    },
    {
        name: "Bạn Ơi",
        artist: "Myra Trần",
        image: "./image/21.jpg",
        path: "./music/21.mp3"
    },
    {
        name: "Bước Qua Nhau",
        artist: "Vũ.",
        image: "./image/22.jpg",
        path: "./music/22.mp3"
    },
    {
        name: "Đợi",
        artist: "Vũ.",
        image: "./image/23.jpg",
        path: "./music/24.mp3"
    },
    {
        name: "Lời Yêu Em",
        artist: "Vũ.",
        image: "./image/24.jpg",
        path: "./music/24.mp3"
    },
    {
        name: "Bước Qua Mùa Cô Đơn",
        artist: "Vũ.",
        image: "./image/25.jpg",
        path: "./music/25.mp3"
    },
    {
        name: "Vì Anh Đâu Có Biết",
        artist: "Madihu, Vũ.",
        image: "./image/26.jpg",
        path: "./music/26.mp3"
    },
    {
        name: "Đông Kiếm Em",
        artist: "Vũ.",
        image: "./image/27.jpg",
        path: "./music/27.mp3"
    },
    {
        name: "Lạ Lùng",
        artist: "Vũ.",
        image: "./image/28.jpg",
        path: "./music/28.mp3"
    },
    {
        name: "Anh Nhớ Ra (feat. TRANG)",
        artist: "Vũ. ",
        image: "./image/29.jpg",
        path: "./music/29.mp3"
    },
    {
        name: "Thương Anh Hơn Tình Yêu",
        artist: "GiGi Hương Giang ",
        image: "./image/30.jpg",
        path: "./music/30.mp3"
    },
    {
        name: "Vừa Đi Vừa Khóc",
        artist: "GiGi Hương Giang, KayC ",
        image: "./image/31.jpg",
        path: "./music/31.mp3"
    },
    {
        name: "Mãi Chẳng Ai Yêu Mình",
        artist: "GiGi Hương Giang ",
        image: "./image/32.jpg",
        path: "./music/32.mp3"
    },
    {
        name: "Ngày Một Người Đi Xa (feat. Koo)",
        artist: "GiGi Hương Giang ",
        image: "./image/33.jpg",
        path: "./music/33.mp3"
    },
    {
        name: "Chuyện Mưa",
        artist: "GiGi Hương Giang, Trung Quân ",
        image: "./image/34.jpg",
        path: "./music/34.mp3"
    },
    {
        name: "Du Hành Vào Tâm Trí",
        artist: "GiGi Hương Giang ",
        image: "./image/35.jpg",
        path: "./music/35.mp3"
    },
    {
        name: "Có Em Là Nhà (Remake)",
        artist: "GiGi Hương Giang ",
        image: "./image/36.jpg",
        path: "./music/36.mp3"
    },
    {
        name: "Mashup Tình Đầu Cô Đơn",
        artist: "GiGi Hương Giang ",
        image: "./image/37.jpg",
        path: "./music/37.mp3"
    },
    {
        name: "Anh Tự Do Nhưng Cô Đơn",
        artist: "Trung Quân",
        image: "./image/38.jpg",
        path: "./music/38.mp3"
    },
    {
        name: "Chiều Nay Không Có Mưa Bay",
        artist: "Trung Quân",
        image: "./image/39.jpg",
        path: "./music/39.mp3"
    },
    {
        name: "Trót Yêu",
        artist: "Trung Quân",
        image: "./image/40.jpg",
        path: "./music/40.mp3"
    },
    {
        name: "Và Ngày Nào Đó",
        artist: "Trung Quân",
        image: "./image/41.jpg",
        path: "./music/41.mp3"
    },
    {
        name: "Buồn Không Thể Buông",
        artist: "Trung Quân",
        image: "./image/42.jpg",
        path: "./music/42.mp3"
    },
    {
        name: "Tình Nào Không Như Tình Đầu",
        artist: "Trung Quân",
        image: "./image/43.jpg",
        path: "./music/43.mp3"
    },
    {
        name: "Tự Tình 2",
        artist: "Trung Quân",
        image: "./image/44.jpg",
        path: "./music/44.mp3"
    },
    {
        name: "Ai Chung Tình Được Mãi",
        artist: "Trung Quân",
        image: "./image/45.jpg",
        path: "./music/45.mp3"
    },
    {
        name: "Bí Mật Nhỏ",
        artist: "B Ray",
        image: "./image/46.jpg",
        path: "./music/46.mp3"
    },
    {
        name: "Xin Đừng Nhấc Máy (feat. Masew)",
        artist: "B Ray & Han Sara"
        image: "./image/47.jpg",
        path: "./music/47.mp3"
    },
    {
        name: "Thiêu Thân",
        artist: "B Ray, Sofia, Châu Đăng Khoa, Masew",
        image: "./image/48.jpg",
        path: "./music/48.mp3"
    },
    {
        name: "Do For Love (feat. AMEE)",
        artist: "B Ray",
        image: "./image/49.jpg",
        path: "./music/49.mp3"
    },
    {
        name: "Cao Ốc 20",
        artist: "B Ray",
        image: "./image/50.jpg",
        path: "./music/50.mp3"
    },
    {
        name: "Con Trai Cưng",
        artist: "B Ray",
        image: "./image/51.jpg",
        path: "./music/51.mp3"
    },
    {
        name: "Dư Tiền",
        artist: "B Ray",
        image: "./image/52.jpg",
        path: "./music/52.mp3"
    },
    {
        name: "Hoàn Hảo",
        artist: "B Ray",
        image: "./image/53.jpg",
        path: "./music/53.mp3"
    },
];

function loadTrack(track_index) {
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();

    // Load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();

    // Update details of the track
    track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;

    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);

    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
}

// Function to reset all values to their default
function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function playpauseTrack() {
    // Switch between playing and pausing
    // depending on the current state
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    // Play the loaded track
    curr_track.play();
    isPlaying = true;

    // Replace icon with the pause icon
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
    // Pause the loaded track
    curr_track.pause();
    isPlaying = false;

    // Replace icon with the play icon
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
    // Go back to the first track if the
    // current one is the last in the track list
    if (track_index < track_list.length - 1)
        track_index += 1;
    else track_index = 0;

    // Load and play the new track
    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    // Go back to the last track if the
    // current one is the first in the track list
    if (track_index > 0)
        track_index -= 1;
    else track_index = track_list.length - 1;

    // Load and play the new track
    loadTrack(track_index);
    playTrack();
}


function seekTo() {
    // Calculate the seek position by the
    // percentage of the seek slider
    // and get the relative duration to the track
    seekto = curr_track.duration * (seek_slider.value / 100);

    // Set the current track position to the calculated seek position
    curr_track.currentTime = seekto;
}

function setVolume() {
    // Set the volume according to the
    // percentage of the volume slider set
    curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    // Check if the current track duration is a legible number
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        //Calculate the time left and the total duration
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        // Add a zero to the single digit time values
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        // Display the updated duration
        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
// Load the first track in the tracklist
loadTrack(track_index);


//WEEKLY HOT
const urlHot = 'https://billboard3.p.rapidapi.com/hot-100?date=2023-06-17&range=1-10';
const optionsHot = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '507824361bmshcdfd8840f04699fp1bc339jsn9a7f3f83ff22',
		'X-RapidAPI-Host': 'billboard3.p.rapidapi.com'
	}
};
fetch(urlHot, optionsHot).then((response) => {
    return response.json();
}).then((data) => {
    displayHot(data)
});
function displayHot(data) {
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement("li");
        li.classList.add("songItem");
        document.getElementById("songs").appendChild(li);

        let img_play = document.createElement("div");
        img_play.classList.add("img_play");

        let img = document.createElement("img");
        img.src = data[i].image;

        img_play.appendChild(img);
        li.appendChild(img_play)

        let h5 = document.createElement("h5");
        h5.innerText = data[i].title;
        li.appendChild(h5);
        console.log(li);
        
        document.getElementById("Billboard").appendChild(songs);

    }
}

//LYRICS
const urlLyric = 'https://l-yrics.p.rapidapi.com/?song=flowers&artist=jisoo';
const optionsLyric = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bcd30e9e68mshe52dde6e3382636p1ab019jsn5c62a5a88754',
		'X-RapidAPI-Host': 'l-yrics.p.rapidapi.com'
	}
};

fetch(urlLyric, optionsLyric).then((response) => {
    return response.json();
}).then((data) => {
        displayLyric(data)
});
function displayLyric(data) {
    let h6 = document.createElement("h5");
    h6.innerText = data.lyrics;
    
    document.getElementById("Lyrics").appendChild(h6);
}


