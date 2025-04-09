window.addEventListener("load", () => {
    // 計算動畫總長度（脈衝最後一個 1.3s 延遲 + 1.2s 動畫 = 約 2.5s）
    setTimeout(() => {
        // 隱藏 logo 與 pulser
        document.querySelector("label").style.display = "none";

        // 顯示文字
        document.getElementById("brand-text").classList.add("show");
        document.getElementById("notes").classList.add("show");
    }, 1400); // 給多一點緩衝

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