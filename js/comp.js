$(document).ready(function () {
    const musicData = [
        {
            id: 1,
            title: "Don't Stop Me Now",
            artist: "Queen",
            tags: ["Rock", "Happy", "Energetic"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/misty-bay?in=ivy_raine/sets/sailors-quest-vr&si=71872b9d448b4c97b5daa8650e8d393c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 2,
            title: "Bohemian Rhapsody",
            artist: "Queen",
            tags: ["Rock", "Sad"],
            soundcloudUrl: src = "https://soundcloud.com/ivy_raine/jungle-book?in=ivy_raine/sets/world-music-and-orchestral-score-collection-2024&si=1d81623f5b284489898ade08903f797b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 3,
            title: "What a Wonderful World",
            artist: "Louis Armstrong",
            tags: ["Rock", "Happy", "Relaxed"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/tribal-bonfire?si=887a5b6aa80f4408be5291c7da4da29b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 4,
            title: "Billie Jean",
            artist: "Michael Jackson",
            tags: ["Pop", "Energetic"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/supreme-blessings?si=756e972ec8b64da8bad51c41197c2063&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 5,
            title: "Moonlight Sonata",
            artist: "Beethoven",
            tags: ["classical", "sad", "relaxed"],
            soundcloudUrl: "https://soundcloud.com/classical-music-therapy/beethovens-moonlight-sonata?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 6,
            title: "California Love",
            artist: "2Pac ft. Dr. Dre",
            tags: ["hip-hop", "energetic"],
            soundcloudUrl: "https://soundcloud.com/2pac/california-love?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 7,
            title: "All of Me",
            artist: "John Legend",
            tags: ["pop", "romantic"],
            soundcloudUrl: "https://soundcloud.com/johnlegend/all-of-me-3?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 8,
            title: "November Rain",
            artist: "Guns N' Roses",
            tags: ["rock", "sad", "romantic"],
            soundcloudUrl: "https://soundcloud.com/gunsnroses/november-rain-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 9,
            title: "Take Five",
            artist: "Dave Brubeck",
            tags: ["jazz", "relaxed"],
            soundcloudUrl: "https://soundcloud.com/brubeckjazz/take-five?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 10,
            title: "Hey Jude",
            artist: "The Beatles",
            tags: ["rock", "happy"],
            soundcloudUrl: "https://soundcloud.com/thebeatles/hey-jude-remastered-2015?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 11,
            title: "Canon in D",
            artist: "Pachelbel",
            tags: ["classical", "romantic", "relaxed"],
            soundcloudUrl: "https://soundcloud.com/classicalmusichq/pachelbel-canon-in-d?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 12,
            title: "Juicy",
            artist: "The Notorious B.I.G.",
            tags: ["hip-hop", "happy"],
            soundcloudUrl: "https://soundcloud.com/notorious-big/juicy-remastered?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 13,
            title: "Someone Like You",
            artist: "Adele",
            tags: ["pop", "sad", "romantic"],
            soundcloudUrl: "https://soundcloud.com/adele/someone-like-you?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 14,
            title: "Back in Black",
            artist: "AC/DC",
            tags: ["rock", "energetic"],
            soundcloudUrl: "https://soundcloud.com/acdc/back-in-black-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 15,
            title: "Fly Me to the Moon",
            artist: "Frank Sinatra",
            tags: ["jazz", "romantic", "happy"],
            soundcloudUrl: "https://soundcloud.com/franksinatra/fly-me-to-the-moon-with-count?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        }
    ];

    let selectedTags = [];

    // 切換主類別標籤
    $('.category-tab').click(function () {
        const category = $(this).data('category');

        // 重設所有 tab 狀態
        $('.category-tab').removeClass('active');
        $('.category-tab i').removeClass('fa-chevron-down').addClass('fa-chevron-up');

        // 設定當前 tab 為 active 並改箭頭
        $(this).addClass('active');
        $(this).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');

        // 切換標籤組內容
        $('.tabs-group').removeClass('active');
        $(`#${category}-tabs-group`).addClass('active');
    });

    // 點擊內容標籤添加到搜尋區
    $('.content-tab').click(function () {
        const category = $(this).data('category');
        const value = $(this).data('value');
        const text = $(this).text();

        // 檢查是否已選擇此標籤
        if (!isTagSelected(category, value)) {
            addTag(category, value, text);
        }
    });

    // 檢查標籤是否已被選中
    function isTagSelected(category, value) {
        return selectedTags.some(tag => tag.category === category && tag.value === value);
    }

    // 添加標籤到搜尋區
    function addTag(category, value, text) {
        // 儲存選中的標籤
        selectedTags.push({ category, value, text });

        // 創建標籤元素
        const $tag = $('<div class="search-tag"></div>');
        $tag.html(`
            <span class="tag-text">${text}</span>
            <span class="tag-remove" data-category="${category}" data-value="${value}">x</span>
        `);

        // 添加到搜尋區
        $('#searchTags').append($tag);

        // 綁定刪除事件
        $tag.find('.tag-remove').click(function () {
            const removeCategory = $(this).data('category');
            const removeValue = $(this).data('value');

            // 從陣列中移除標籤
            selectedTags = selectedTags.filter(tag =>
                !(tag.category === removeCategory && tag.value === removeValue)
            );

            // 移除元素
            $(this).parent().remove();
        });
    }

    // 搜尋按鈕點擊事件
    $('#searchButton').click(function () {
        if (selectedTags.length === 0) {
            alert('請至少選擇一個標籤');
            return;
        }

        // 根據選中的標籤過濾音樂
        const filteredMusic = musicData.filter(music => {
            return selectedTags.every(tag => music.tags.includes(tag.value));
        });

        // 顯示結果
        displayResults(filteredMusic);

        // ✅ 清空搜尋欄
        // selectedTags = [];
        // $('#searchTags').empty();
    });
    
    displayResults(musicData);

    // 從 SoundCloud URL 獲取嵌入代碼
    function getSoundCloudEmbedUrl(url) {
        // 從 URL 獲取 track ID，這是一個示例方法，您可能需要根據實際 SoundCloud URL 格式調整
        const cleanUrl = url.split('?')[0];
        return `https://w.soundcloud.com/player/?url=${encodeURIComponent(cleanUrl)}&color=%23000000&theme=dark&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`;
    }

    // 顯示搜尋結果
    function displayResults(results) {
        const $resultsList = $('#resultsList');
        $resultsList.empty();

        if (results.length === 0) {
            $resultsList.append('<div class="no-results">沒有找到符合條件的歌曲</div>');
        } else {
            results.forEach(song => {
                const embedUrl = getSoundCloudEmbedUrl(song.soundcloudUrl);
                const $songItem = $(`
                    <div class="result-item">
                     
                        <div class="player-container">
                            <iframe height="120" src="${embedUrl}" frameborder="0" allow="autoplay"></iframe>
                        </div>
                    </div>
                `);

                $resultsList.append($songItem);
            });
        }

        $('#resultsSection').show();
    }
});