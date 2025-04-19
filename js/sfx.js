
/* ---------- 漢堡選單 ----------*/
document.addEventListener('DOMContentLoaded', () => {
    const barIcon = document.querySelector('.bar i');
    const nav = document.querySelector('.bar');
    const overlay = document.querySelector('.overlay');
    const hasSubmenuItems = document.querySelectorAll('.bar > ul > li.has-submenu > a');

    // 漢堡選單開關
    barIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
        overlay.style.display = nav.classList.contains('active') ? 'block' : 'none';
    });

    // 點擊遮罩關閉選單
    overlay.addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.style.display = 'none';
        // 關閉所有子選單
        document.querySelectorAll('.bar > ul > li.active').forEach(item => {
            item.classList.remove('active');
        });
    });

    // 子選單點擊展開/收起（僅行動裝置）
    hasSubmenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // 僅在行動裝置（螢幕寬度 ≤ 820px）處理點擊
            if (window.innerWidth <= 820) {
                e.preventDefault(); // 防止點擊時跳轉
                const parentLi = item.parentElement;
                const isActive = parentLi.classList.contains('active');

                // 關閉其他子選單
                document.querySelectorAll('.bar > ul > li.active').forEach(li => {
                    if (li !== parentLi) {
                        li.classList.remove('active');
                    }
                });

                // 切換當前子選單
                parentLi.classList.toggle('active');

                // 管理 href 屬性
                if (!isActive) {
                    item.removeAttribute('href'); // 展開時移除 href
                } else {
                    item.setAttribute('href', item.getAttribute('href') || 'portfolio2.html'); // 收起時恢復 href
                }
            }
        });
    });
});

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
