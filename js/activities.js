/* ---------- 切換tab ----------*/

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