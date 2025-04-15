

// header
$(function(){
    // 漢堡選單點擊
    $('.bar i').click(function(e){
        e.stopPropagation(); // 防止事件冒泡
        $('.bar').toggleClass('active');
        $('.overlay').fadeToggle(300);
    });
    
    // 點擊遮罩時關閉選單
    $('.overlay').click(function(){
        $('.bar').removeClass('active');
        $(this).fadeOut(300);
    });
   // 為有子選單的項目添加類別
   $('.bar ul li:has(ol)').addClass('has-submenu');
    
   // 行動裝置模式下的子選單手風琴效果
   if ($(window).width() <= 820) {
       $('.bar ul li.has-submenu > a').click(function(e){
           e.preventDefault(); // 阻止默認跳轉
           
           var $parent = $(this).parent();
           
           // 如果點擊的項目已經是活動狀態，則關閉它
           if ($parent.hasClass('active')) {
               $parent.removeClass('active');
           } else {
               // 關閉其他已開啟的子選單（手風琴效果）
               $('.bar ul li.has-submenu.active').removeClass('active');
               
               // 開啟當前點擊的子選單
               $parent.addClass('active');
           }
       });
   }
    
    // 點擊頁面其他區域時關閉選單
    $(document).click(function(e){
        if (!$(e.target).closest('.bar ul').length && !$(e.target).closest('.bar i').length) {
            $('.bar').removeClass('active');
        }
    });
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


