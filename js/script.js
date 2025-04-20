
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

/* ---------- 音樂卡片輪播 ----------*/
$(document).ready(function() {
    const carousel = $("#carousel");
    const items = carousel.find("li");
    const itemCount = items.length;
    
    let currentPosition = 0;
    let startX, moveX, initialPosition;
    let itemWidth, visibleItems, maxPosition;
    
    // 計算大小和位置限制
    function calculateDimensions() {
        const playerWidth = $(".player").width();
        itemWidth = items.first().outerWidth(true);
        
        // 計算可見項目數（取整數）
        visibleItems = Math.floor(playerWidth / itemWidth);
        if (visibleItems === 0) visibleItems = 1;
        
        // 計算總寬度
        const totalWidth = itemWidth * itemCount;
        
        // 計算最大位移：負的總寬度減去容器寬度
        maxPosition = -(totalWidth - playerWidth);
        
        // 確保 maxPosition 不為正值
        if (maxPosition > 0) {
            maxPosition = 0;
        }
        
        // 確保當前位置在有效範圍內
        if (currentPosition < maxPosition) {
            currentPosition = maxPosition;
            carousel.css("transform", `translateX(${currentPosition}px)`);
        } else if (currentPosition > 0) {
            currentPosition = 0;
            carousel.css("transform", `translateX(${currentPosition}px)`);
        }
        
        // 如果所有項目都能顯示，則隱藏導航按鈕
        if (totalWidth <= playerWidth) {
            $(".nav-btn").css("display", "none");
        } else {
            $(".nav-btn").css("display", "flex");
        }
    }
    
    // 初始化
    calculateDimensions();
    
    // 窗口大小變化時重新計算
    $(window).on("resize", calculateDimensions);
    
    // 下一個按鈕點擊事件
    $(".next-btn").on("click", function() {
        currentPosition = Math.max(currentPosition - itemWidth, maxPosition);
        carousel.css("transform", `translateX(${currentPosition}px)`);
        
        // 更新按鈕狀態
        updateButtonsState();
    });
    
    // 上一個按鈕點擊事件
    $(".prev-btn").on("click", function() {
        currentPosition = Math.min(currentPosition + itemWidth, 0);
        carousel.css("transform", `translateX(${currentPosition}px)`);
        
        // 更新按鈕狀態
        updateButtonsState();
    });
    
    // 更新按鈕狀態
    function updateButtonsState() {
        // 當到達最左側時，禁用上一個按鈕
        if (currentPosition >= 0) {
            $(".prev-btn").css("opacity", "0.5").prop("disabled", true);
        } else {
            $(".prev-btn").css("opacity", "1").prop("disabled", false);
        }
        
        // 當到達最右側時，禁用下一個按鈕
        if (currentPosition <= maxPosition) {
            $(".next-btn").css("opacity", "0.5").prop("disabled", true);
        } else {
            $(".next-btn").css("opacity", "1").prop("disabled", false);
        }
    }
    
    // // 初始化按鈕狀態
    // updateButtonsState();
    
    // // 觸摸事件處理（適用於移動設備）
    // carousel.on("touchstart", function(e) {
    //     startX = e.originalEvent.touches[0].clientX;
    //     initialPosition = currentPosition;
    //     carousel.css("transition", "none");
    // });
    
    // carousel.on("touchmove", function(e) {
    //     moveX = e.originalEvent.touches[0].clientX;
    //     const diff = moveX - startX;
        
    //     // 增加阻力，防止過度滑動
    //     let newPosition = initialPosition + diff;
    //     if (newPosition > 0) {
    //         newPosition = initialPosition + diff * 0.3;
    //     } else if (newPosition < maxPosition) {
    //         newPosition = initialPosition + diff * 0.3;
    //     }
        
    //     carousel.css("transform", `translateX(${newPosition}px)`);
    // });
    
    // carousel.on("touchend", function(e) {
    //     carousel.css("transition", "transform 0.3s ease");
    //     const endX = e.originalEvent.changedTouches[0].clientX;
    //     const diff = endX - startX;
        
    //     // 判断滑动方向和距离来确定是否切换
    //     if (Math.abs(diff) > 50) {
    //         if (diff > 0) {
    //             // 向右滑，向前移动
    //             currentPosition = Math.min(currentPosition + itemWidth, 0);
    //         } else {
    //             // 向左滑，向后移动
    //             currentPosition = Math.max(currentPosition - itemWidth, maxPosition);
    //         }
    //     } else {
    //         // 如果滑动距离小，恢复到原位置
    //         currentPosition = initialPosition;
    //     }
        
    //     carousel.css("transform", `translateX(${currentPosition}px)`);
    //     updateButtonsState();
    // });
    
    // // 鼠標拖拽事件（適用於桌面設備）
    // carousel.on("mousedown", function(e) {
    //     e.preventDefault();
    //     startX = e.pageX;
    //     initialPosition = currentPosition;
    //     carousel.css("transition", "none");
        
    //     $(document).on("mousemove", dragHandler);
    //     $(document).on("mouseup", releaseHandler);
    // });
    
    // function dragHandler(e) {
    //     moveX = e.pageX;
    //     const diff = moveX - startX;
        
    //     // 增加阻力，防止過度滑動
    //     let newPosition = initialPosition + diff;
    //     if (newPosition > 0) {
    //         newPosition = initialPosition + diff * 0.3;
    //     } else if (newPosition < maxPosition) {
    //         newPosition = initialPosition + diff * 0.3;
    //     }
        
    //     carousel.css("transform", `translateX(${newPosition}px)`);
    // }
    
    // function releaseHandler(e) {
    //     $(document).off("mousemove", dragHandler);
    //     $(document).off("mouseup", releaseHandler);
        
    //     carousel.css("transition", "transform 0.3s ease");
    //     const endX = e.pageX;
    //     const diff = endX - startX;
        
    //     // 判断滑动方向和距离来确定是否切换
    //     if (Math.abs(diff) > 50) {
    //         if (diff > 0) {
    //             // 向右拖，向前移动
    //             currentPosition = Math.min(currentPosition + itemWidth, 0);
    //         } else {
    //             // 向左拖，向后移动
    //             currentPosition = Math.max(currentPosition - itemWidth, maxPosition);
    //         }
    //     } else {
    //         // 如果拖动距离小，恢复到原位置
    //         currentPosition = initialPosition;
    //     }
        
    //     carousel.css("transform", `translateX(${currentPosition}px)`);
    //     updateButtonsState();
    // }
    
    // // 防止拖拽過程中選擇文字
    // carousel.on("selectstart", function(e) {
    //     e.preventDefault();
    //     return false;
    // });
});

/* ---------- 照片跑馬燈 ----------*/
document.addEventListener('DOMContentLoaded', () => {
      const marquee = document.getElementById('marquee');
    
      marquee.addEventListener('mouseenter', () => {
        marquee.classList.add('paused');
      });
    
      marquee.addEventListener('mouseleave', () => {
        marquee.classList.remove('paused');
      });
    });

/* ---------- 影片輪播 ----------*/
$(function(){
    const $track = $('.thumb-track');
    const $thumbnails = $('.thumbnails');
    let scrollPosition = 0;
    const scrollAmount = 130; // 每次移動的像素數

    $('.thumb').click(function(){
        let $this = $(this);
        let videoSrc = $this.data('video');
    
        // 設定影片來源
        $('#mainVideo').attr('src', videoSrc);
    
        // 移除其他縮圖的 active 狀態，加到目前這張縮圖
        $('.thumb').removeClass('active');
        $this.addClass('active');
    });

    $('.arrow-left').click(function(){
        scrollPosition = Math.min(scrollPosition + scrollAmount, 0);
        $track.css('transform', `translateX(${scrollPosition}px)`);
    });

    $('.arrow-right').click(function(){
        const trackWidth = $track.get(0).scrollWidth;
        const containerWidth = $thumbnails.width();
        const maxScroll = containerWidth - trackWidth;
        scrollPosition = Math.max(scrollPosition - scrollAmount, maxScroll);
        $track.css('transform', `translateX(${scrollPosition}px)`);
    });
});

/* ---------- 活動照片切換tab ----------*/

document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有標籤頁和內容區
    const tabs = document.querySelectorAll('.album-tab');
    const tabContents = document.querySelectorAll('.album-grid');
    
    // 為每個標籤添加點擊事件
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 獲取當前點擊的標籤對應的內容區 ID
            const tabId = this.getAttribute('data-tab');
            
            // 移除所有標籤的 active 類
            tabs.forEach(t => t.classList.remove('active'));
            
            // 移除所有內容區的 active-tab 類
            tabContents.forEach(content => content.classList.remove('active-tab'));
            
            // 將當前點擊的標籤和對應內容區添加 active 類
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active-tab');
        });
    });
});

/* ---------- 彈出視窗 ----------*/

document.addEventListener("DOMContentLoaded", () => {
    // 所有有 .show-image-btn 類別的按鈕
    document.querySelectorAll('.album-grid-item').forEach(button => {
        button.addEventListener('click', function () {
            const imgSrc = this.getAttribute('data-img-src');
            document.getElementById('modalImage').src = imgSrc;
        });
    });
});


/* ---------- 倒數計時器 ----------*/
window.addEventListener('load', () => {
    // 設定目標日期的倒數計時器
    countdownTo('2025-06-30 23:59:59');
});

// 設定某個指定日期的倒數計時器
function countdownTo(targetDate) {
    let countDownDate = new Date(targetDate);
    let countdownDisplay = document.querySelector('.clock');
    
    // 立即更新一次顯示，避免等待第一次間隔
    updateCountdown();
    
    let timer = setInterval(updateCountdown, 1000);
    
    function updateCountdown() {
        let now = new Date();
        let distance = countDownDate - now;
        
        if(distance < 0) {
            clearInterval(timer);
            countdownDisplay.innerText = `倒數時間到!`;
            return;
        }
        
        let days = Math.floor(distance / (24 * 60 * 60 * 1000));
        let hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        let minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
        let seconds = Math.floor((distance % (60 * 1000)) / 1000);
        
        // 確保顯示格式一致，保持個位數的前導零
        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        
        countdownDisplay.innerText = `${days}天${hours}時${minutes}分${seconds}秒`;
    }
}