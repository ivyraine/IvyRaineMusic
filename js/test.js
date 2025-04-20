// document.addEventListener('DOMContentLoaded', function() {
//     const tracks = document.querySelectorAll('.track');
//     const playerContainer = document.getElementById('playerContainer');
//     const soundcloudPlayer = document.getElementById('soundcloudPlayer');
//     const closePlayer = document.getElementById('closePlayer');
    
//     // 为每个歌曲添加点击事件
//     tracks.forEach(track => {
//         const playButton = track.querySelector('.track-play');
//         playButton.addEventListener('click', function() {
//             const trackUrl = track.dataset.trackUrl;
//             const trackTitle = track.querySelector('.track-title').textContent;
            
//             // 构建 SoundCloud 嵌入链接
//             // 注意：您需要将以下URL替换为实际的 SoundCloud 曲目 URL
//             const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true`;
            
//             // 更新 iframe 的 src
//             soundcloudPlayer.src = embedUrl;
            
//             // 显示播放器
//             playerContainer.classList.add('active');
            
//             console.log(`正在播放: ${trackTitle}`);
//         });
//     });
    
//     // 关闭播放器
//     closePlayer.addEventListener('click', function() {
//         playerContainer.classList.remove('active');
//         soundcloudPlayer.src = '';
//     });
// });


/* ---------- 音樂播放條測試 ----------*/
// // soundcloud ID
//   const tracksData = [
//     { id: '實際ID1', title: '歌曲標題一', artist: '藝術家名稱', duration: 225 },
//     { id: '實際ID2', title: '美好的一天', artist: '陽光樂團', duration: 260 },
//     // ...其他歌曲
// ];

// // 播放功能的簡單示例
// document.addEventListener('DOMContentLoaded', function() {
// const tracks = document.querySelectorAll('.track');
// const playButton = document.querySelector('.play-button');
// const playerPlayButton = document.querySelector('.player-control.primary');
// let isPlaying = false;

// // 更新播放按鈕圖標
// function updatePlayButton(playing) {
//     isPlaying = playing;
//     if (isPlaying) {
//         playerPlayButton.innerHTML = '<div class="pause-icon"></div>';
//     } else {
//         playerPlayButton.innerHTML = '<div class="play-icon"></div>';
//     }
// }

// // 點擊主播放按鈕
// playButton.addEventListener('click', function() {
//     updatePlayButton(!isPlaying);
// });

// // 點擊播放器控制按鈕
// playerPlayButton.addEventListener('click', function() {
//     updatePlayButton(!isPlaying);
// });

// // 點擊單曲
// tracks.forEach((track, index) => {
//     const trackPlay = track.querySelector('.track-play');
//     trackPlay.addEventListener('click', function() {
//         // 更新播放狀態
//         updatePlayButton(true);
        
//         // 更新播放器信息
//         const title = track.querySelector('.track-title').textContent;
//         const artist = track.querySelector('.track-artist').textContent;
//         document.querySelector('.player-track-title').textContent = title;
//         document.querySelector('.player-track-artist').textContent = artist;
//     });
// });
// });