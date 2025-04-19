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


$(function(){
    const $track = $('.thumb-track2');
    const $thumbnails2 = $('.thumbnails2');
    let scrollPosition = 0;
    const scrollAmount = 130; // 每次移動的像素數

    $('.thumb2').click(function(){
        let $this = $(this);
        let imageSrc = $this.data('image');
    
        // 設定主圖片來源
        $('#mainImage').attr('src', imageSrc);
    
        // 移除其他縮圖的 active 狀態，加到目前這張縮圖
        $('.thumb2').removeClass('active');
        $this.addClass('active');
    });

    $('.arrow2.arrow-left').click(function(){
        scrollPosition = Math.min(scrollPosition + scrollAmount, 0);
        $track.css('transform', `translateX(${scrollPosition}px)`);
    });

    $('.arrow2.arrow-right').click(function(){
        const trackWidth = $track.get(0).scrollWidth;
        const containerWidth = $thumbnails2.width();
        const maxScroll = containerWidth - trackWidth;
        scrollPosition = Math.max(scrollPosition - scrollAmount, maxScroll);
        $track.css('transform', `translateX(${scrollPosition}px)`); // 修正為 $track
    });
});
