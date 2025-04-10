window.addEventListener("load", () => {
    // 計算動畫總長度（脈衝最後一個 1.3s 延遲 + 1.2s 動畫 = 約 2.5s）
    setTimeout(() => {
        // 隱藏 logo 與 pulser
        document.querySelector("label").style.display = "none";

        // 顯示文字
        document.getElementById("brand-text").classList.add("show");
        document.getElementById("notes").classList.add("show");
    },1600); // 給多一點緩衝
    
});


// 照片跑馬燈
    document.addEventListener('DOMContentLoaded', () => {
      const marquee = document.getElementById('marquee');
    
      marquee.addEventListener('mouseenter', () => {
        marquee.classList.add('paused');
      });
    
      marquee.addEventListener('mouseleave', () => {
        marquee.classList.remove('paused');
      });
    });

// soundcloud ID
  const tracksData = [
    { id: '實際ID1', title: '歌曲標題一', artist: '藝術家名稱', duration: 225 },
    { id: '實際ID2', title: '美好的一天', artist: '陽光樂團', duration: 260 },
    // ...其他歌曲
];


// 播放功能的簡單示例
document.addEventListener('DOMContentLoaded', function() {
const tracks = document.querySelectorAll('.track');
const playButton = document.querySelector('.play-button');
const playerPlayButton = document.querySelector('.player-control.primary');
let isPlaying = false;

// 更新播放按鈕圖標
function updatePlayButton(playing) {
    isPlaying = playing;
    if (isPlaying) {
        playerPlayButton.innerHTML = '<div class="pause-icon"></div>';
    } else {
        playerPlayButton.innerHTML = '<div class="play-icon"></div>';
    }
}

// 點擊主播放按鈕
playButton.addEventListener('click', function() {
    updatePlayButton(!isPlaying);
});

// 點擊播放器控制按鈕
playerPlayButton.addEventListener('click', function() {
    updatePlayButton(!isPlaying);
});

// 點擊單曲
tracks.forEach((track, index) => {
    const trackPlay = track.querySelector('.track-play');
    trackPlay.addEventListener('click', function() {
        // 更新播放狀態
        updatePlayButton(true);
        
        // 更新播放器信息
        const title = track.querySelector('.track-title').textContent;
        const artist = track.querySelector('.track-artist').textContent;
        document.querySelector('.player-track-title').textContent = title;
        document.querySelector('.player-track-artist').textContent = artist;
    });
});
});