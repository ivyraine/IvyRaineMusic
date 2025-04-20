$(document).ready(function () {
    const musicData = [
        {
            id: 1,
            title: "Hidden Treasure",
            artist: "Ivy Raine",
            tags: ["Orchestra", "brass", "strings", "drums", "epic", "mysterious", "dramatic", "adventure"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/hidden-treasure?in=ivy_raine/sets/orchestral-score-collection&si=77ef8a516d324cdd97313bed10c5d2dd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 2,
            title: "Will You Still Love Me in the Morning?",
            artist: "Ivy Raine",
            tags: ["synth", "beats", "electronic", "happy", "uplifting"],
            soundcloudUrl: src = "https://soundcloud.com/ivy_raine/will-you-still-love-me-in-the-morning?in=ivy_raine/sets/vxp1ym9pdph5&si=f2d068a662614ddeb51b2dd75f690d03&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 3,
            title: "Circus Toy Box",
            artist: "Ivy Raine",
            tags: ["piano", "brass", "drums", "strings", "jazz", "happy", "uplifting"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/circus-toy-box?in=ivy_raine/sets/game-music-collection-of-2020&si=68aeb07378304eaeaac3c2913458b57c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 4,
            title: "Supreme Blessings",
            artist: "Ivy Raine",
            tags: ["beats", "guzheng", "erhu", "synth", "electronic", "uplifting", "happy", "China"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/supreme-blessings?in=ivy_raine/sets/chinese-style-score-collection-of-2024&si=1c5eb8e5ebfe4e57a2a242b08c7100ad&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 5,
            title: "Grooving Up",
            artist: "Ivy Raine",
            tags: ["keys", "beats", "guitar", "bass", "funk", "happy" ,"uplifting"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/grooving-up?in=ivy_raine/sets/wonder-show&si=9cd655033dd042dda038dbcb1b776fb7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 6,
            title: "Jungle Book",
            artist: "Ivy Raine",
            tags: ["percussion", "udu", "marimba", "woodwind", "world", "peaceful", "adventure"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/jungle-book?in=ivy_raine/sets/world-music-and-orchestral-score-collection-2024&si=49e8e75db92949459415eafcada5a33c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 7,
            title: "Coinpage",
            artist: "Ivy Raine",
            tags: ["synth", "beats", "EDM", "uplifting", "exciting"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/coinpage?in=ivy_raine/sets/hyper-cross&si=6e805378739642989debbd68caa9e04b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 8,
            title: "France Rail Tour",
            artist: "Ivy Raine",
            tags: ["vibraphone", "brass", "guitar", "jazz", "chill", "happy", "exotic", "France"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/france-rail-tour?in=ivy_raine/sets/game-soundtracks-collection-of-2021&si=5a176765a18a4e0988cb6742701192ed&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 9,
            title: "India Today",
            artist: "Ivy Raine",
            tags: ["beats", "synth", "tabla", "sitar", "flute", "marimba", "world", "electronic", "uplifting", "hopeful", "India"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/india-today?in=ivy_raine/sets/indian-music-score-collection-2024&si=2dbdf04a6f42490eb5cbd06cc4b402e3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharingg"
        },
        {
            id: 10,
            title: "The Fantasy island",
            artist: "Ivy Raine",
            tags: ["orchestra", "woodwind","flute", "drums", "cinematic", "fantasy", "peaceful"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/the-fantasy-island?in=ivy_raine/sets/game-music-collection-of-2020&si=501951c5a7ed4e55a21a593104502bc0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 11,
            title: "Young Again",
            artist: "Ivy Raine",
            tags: ["synth", "beats", "EDM", "happy", "uplifting"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/young-again?in=ivy_raine/sets/dana-base&si=3f68791af11a4a728f8fbb529b63f7aa&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 12,
            title: "Kung Fu Hip-Hop",
            artist: "Ivy Raine",
            tags: ["synth", "hiphop", "beats", "guzheng", "flute", "exotic", "China"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/kung-fu-hip-hop?in=ivy_raine/sets/chinese-style-score-collection-of-2024&si=af6e2787607a4c89b4bb4005dac88520&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 13,
            title: "Florid Sushi",
            artist: "Ivy Raine",
            tags: ["synth", "guzheng", "electronic", "romantic", "peaceful", "Japan"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/florid-sushi?in=ivy_raine/sets/game-music-collection-of-2020&si=6a83e4d520c84b4093488e04a31568e4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 14,
            title: "Wild Safari",
            artist: "Ivy Raine",
            tags: ["marimba", "world", "mysterious"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/wild-safari?in=ivy_raine/sets/world-music-and-orchestral-score-collection-2024&si=ca315244ed244ec98d34b578ce3117b2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharingg"
        },
        {
            id: 15,
            title: "Naughty Fairy",
            artist: "Ivy Raine",
            tags: ["orchestra", "woodwind", "brass", "drums", "xylophone", "cinematic", "fantasy", "adventure", "nervous"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/naughty-fairy?in=ivy_raine/sets/game-music-collection-of-2020&si=3f68791af11a4a728f8fbb529b63f7aa&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 16,
            title: "Misty Bay",
            artist: "Ivy Raine",
            tags: ["orchestra", "brass", "strings", "drums", "woodwind", "epic", "mysterious", "adventure"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/misty-bay?in=ivy_raine/sets/sailors-quest-vr&si=087e478ef0df4c02a0c26663e3a2d2df&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 17,
            title: "Phoenix Rises",
            artist: "Ivy Raine",
            tags: ["beats", "guzheng", "flute", "synth", "electronic", "uplifting", "exciting", "China"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/phoenix-rises?in=ivy_raine/sets/game-music-collection-of-2020&si=3f68791af11a4a728f8fbb529b63f7aa&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 18,
            title: "Summer Love",
            artist: "Ivy Raine",
            tags: ["synth", "beats", "EDM", "happy", "uplifting"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/summer-love?in=ivy_raine/sets/edm-score-collection-2024&si=83e0997e4a2542629f652e0598656de0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 19,
            title: "Friday Romance",
            artist: "Ivy Raine",
            tags: ["synth", "beats", "EDM", "happy", "uplifting"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/friday-romance?in=ivy_raine/sets/edm-score-collection-2024&si=42447e07b4694c23932ef1ba2f7bc2f5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 20,
            title: "Afternoon in Lisbon",
            artist: "Ivy Raine",
            tags: ["accordion", "guitar", "folk", "chill", "happy", "exotic", "Portugal"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/afternoon-in-lisbon?in=ivy_raine/sets/exotic-music-score-collection&si=5713c8029abf48c08f036ca9251fc5fc&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 21,
            title: "Samba Party",
            artist: "Ivy Raine",
            tags: ["guitar", "vocal", "percussion", "piano", "happy", "exotic", "Brazil", "latin", "energetic"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/samba-party?in=ivy_raine/sets/exotic-music-score-collection&si=c58235578e3048de95a79cb4fef3d153&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 22,
            title: "Carnival Mania",
            artist: "Ivy Raine",
            tags: ["brass", "vocal", "percussion", "piano", "happy", "exotic", "Brazil", "latin", "energetic", "exciting"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/carnival-mania?in=ivy_raine/sets/exotic-music-score-collection&si=8b60bc6a9606440fac33763cab06f6dd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 23,
            title: "The Forgotten Island",
            artist: "Ivy Raine",
            tags: ["Orchestra", "brass", "strings", "woodwind", "drums", "epic", "mysterious", "dramatic", "adventure"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/the-forgotten-island?in=ivy_raine/sets/orchestral-score-collection&si=77ef8a516d324cdd97313bed10c5d2dd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 24,
            title: "Tribal Bonfire",
            artist: "Ivy Raine",
            tags: ["percussion", "marimba", "world", "tense", "horror"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/tribal-bonfire?in=ivy_raine/sets/world-music-and-orchestral-score-collection-2024&si=9ba067e12a484fe08be183762e5f69ef&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 25,
            title: "Festas De Lisboa",
            artist: "Ivy Raine",
            tags: ["accordion", "percussion", "folk", "happy", "exotic", "Portugal"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/festas-de-lisboa?in=ivy_raine/sets/exotic-music-score-collection&si=6ae17128b5e84988bb4b1b8db1e468af&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 26,
            title: "Lisbon Carnival Parade",
            artist: "Ivy Raine",
            tags: ["accordion", "drums", "folk", "exciting", "happy", "exotic", "Portugal"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/lisbon-carnival-parade?in=ivy_raine/sets/exotic-music-score-collection&si=5d45bd50293a4882b407a9cdbd0ea1fd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 27,
            title: "The Vault",
            artist: "Ivy Raine",
            tags: ["brass", "beats", "bass", "guitar", "funk", "exciting"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/the-vault?in=ivy_raine/sets/exotic-music-score-collection&si=f105acac35834a1793bbbabba2c6b263&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 28,
            title: "King of the Throne",
            artist: "Ivy Raine",
            tags: ["orchestra", "brass", "drums", "cinematic", "serious"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/king-of-the-throne?in=ivy_raine/sets/orchestral-score-collection&si=ee557c8a4c4c4b89adb004b41ede33fb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 29,
            title: "india Fever",
            artist: "Ivy Raine",
            tags: ["beats", "synth", "udu", "tabla", "bass", "exotic", "sitar", "wordl", "electronic", "uplifting", "India"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/india-fever?in=ivy_raine/sets/indian-music-score-collection-2024&si=0c5694be49bd4adeb52ab3800debbc0e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 30,
            title: "Asha's Dream",
            artist: "Ivy Raine",
            tags: ["synth", "flute", "sitar", "percussion", "woodwind", "exotic", "world", "electronic", "sad", "India"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/ashas-dream?in=ivy_raine/sets/indian-music-score-collection-2024&si=9a6ee6cffaad4e408c2499604c1f7ac5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 31,
            title: "Vegas Vibe",
            artist: "Ivy Raine",
            tags: ["synth", "beats", "brass", "electronic", "chill", "happy", "uplifting"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/vegas-vibe?in=ivy_raine/sets/game-soundtracks-collection-of-2021&si=ed8e3238ea0c40ddb5c4db99023a9438&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 32,
            title: "Monopoly Mission",
            artist: "Ivy Raine",
            tags: ["synth", "beats", "brass", "electronic", "eciting", "happy", "uplifting"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/monopoly-mission?in=ivy_raine/sets/game-soundtracks-collection-of-2021&si=f81821611893479f809b1f298f4585b3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 33,
            title: "Long Live the Dragon",
            artist: "Ivy Raine",
            tags: ["drums", "guzheng", "strings", "flute", "world", "exotic", "serious", "mysterious", "China"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/long-live-the-dragon?in=ivy_raine/sets/game-music-collection-of-2020&si=47b33faf54af48eab8e34d2788b0c321&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 34,
            title: "Dragon Gold",
            artist: "Ivy Raine",
            tags: ["drums", "flute", "guzheng","world", "exotic", "serious", "mysterious", "China"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/dragon-gold?in=ivy_raine/sets/game-music-collection-of-2020&si=1064c68ecc3b40cc91b68fa827a6d0d3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 35,
            title: "Mysterious Night",
            artist: "Ivy Raine",
            tags: ["synth", "flute", "sitar", "percussion", "exotic", "world", "electronic", "mysterious", "India"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/mysterious-night?in=ivy_raine/sets/indian-music-score-collection-2024&si=0accd21e4ad94aee83f2fd0cf73cd1aa&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 36,
            title: "Prince of India",
            artist: "Ivy Raine",
            tags: ["udu", "tabla", "sitar", "exotic", "world", "mysterous", "India"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/prince-of-india?in=ivy_raine/sets/indian-music-score-collection-2024&si=ec1afd72830646faa0da04054d509c65&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 37,
            title: "Silk Road Journey",
            artist: "Ivy Raine",
            tags: ["udu", "tabla", "sitar", "exotic", "world", "mysterous", "India"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/silk-road-journey?in=ivy_raine/sets/indian-music-score-collection-2024&si=dd2825679a3a43e7929fd00c54e7b5fc&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 38,
            title: "Dark Night",
            artist: "Ivy Raine",
            tags: ["synth", "beats", "EDM", "nervous"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/dark-night?in=ivy_raine/sets/edm-score-collection-2024&si=666e568c936c4dd1b8d704cebb54dc4b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 39,
            title: "Kung Fu Beauty",
            artist: "Ivy Raine",
            tags: ["synth", "beats", "guzheng", "flute", "electronic", "happy", "uplifting", "exotic", "China"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/kung-pao-panda?in=ivy_raine/sets/chinese-style-score-collection-of-2024&si=321f8a0cf202427886bdc5e189728feb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },
        {
            id: 40,
            title: "The Kraken",
            artist: "Ivy Raine",
            tags: ["orchestra", "brass", "strings", "drums", "woodwind", "epic", "mysterious", "dramatic", "adventure"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/the-kraken?in=ivy_raine/sets/sailors-quest-vr&si=d326b4013fa64750ad2382b9f577b688&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 41,
            title: "Race",
            artist: "Ivy Raine",
            tags: ["synth", "beats", "EDM", "uplifting", "exciting"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/race?in=ivy_raine/sets/hyper-cross&si=a499ca66b25b427ea22e16c2518f4878&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 42,
            title: "Rank",
            artist: "Ivy Raine",
            tags: ["synth", "beats", "electronic", "sad", "mysterious"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/rank?in=ivy_raine/sets/hyper-cross&si=a499ca66b25b427ea22e16c2518f4878&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 43,
            title: "Aladdin's Fortune",
            artist: "Ivy Raine",
            tags: ["synth", "sitar", "tabla", "exotic", "world", "mysterious", "adventure"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/aladdins-fortune?in=ivy_raine/sets/game-soundtracks-collection-of-2021&si=e3090a5584f9410a8d8edfeb0a498661&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 44,
            title: "Medusa",
            artist: "Ivy Raine",
            tags: ["orchestra", "strings", "drums", "exotic", "world", "mysterious"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/medusa?in=ivy_raine/sets/game-soundtracks-collection-of-2021&si=c9bffe354a2545c386e2b78ae4fad18f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 45,
            title: "Golden Wild",
            artist: "Ivy Raine",
            tags: ["guitar", "drums", "harmonica", "country", "happy", "uplifting", "USA"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/golden-wild?in=ivy_raine/sets/game-soundtracks-collection-of-2021&si=56971fbf36a247fdb26821fb18b3e604&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharingg"
        },        
        {
            id: 46,
            title: "Wings of Hope",
            artist: "Ivy Raine",
            tags: ["synth", "beats", "vocal", "EDM", "happy", "uplifting", "Japan"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/wings-of-hope?in=ivy_raine/sets/dana-base&si=e2cad994046f4f2c8a4596c8d912c460&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 47,
            title: "Let's Play Poker",
            artist: "Ivy Raine",
            tags: ["guitar", "beats", "bass", "keys", "funk", "happy", "uplifting"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/poker-face?in=ivy_raine/sets/game-soundtracks-collection-of-2021&si=ee37dcb9db9141468f7dd0abb05db2ac&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 48,
            title: "幸福理論",
            artist: "Ivy Raine",
            tags: ["guitar", "drums", "bass", "vocal", "poprock", "happy", "uplifting", "hopeful"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/uxpgs8wkvmwc?in=ivy_raine/sets/demo&si=b73bc9b677ea49adb1f9452ad3bfb63f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 49,
            title: "Big Band Dance",
            artist: "Ivy Raine",
            tags: ["brass", "drums", "piano", "jazz", "happy", "uplifting", "exciting"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/big-band-dance?in=ivy_raine/sets/wonder-show&si=f2d068a662614ddeb51b2dd75f690d03&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },        
        {
            id: 50,
            title: "Tropical Vibe",
            artist: "Ivy Raine",
            tags: ["synth", "beats", "EDM", "happy", "hopeful", "sad", "India"],
            soundcloudUrl: "https://soundcloud.com/ivy_raine/tropical-vibe?in=ivy_raine/sets/edm-score-collection-2024&si=3cdbd32d4c604b049a8635b1089ba1cf&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        },

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
        // if (selectedTags.length === 0) {
        //     alert('請至少選擇一個標籤');
        //     return;
        // }

        // 如果沒有選擇標籤，顯示全部歌曲
        if (selectedTags.length === 0) {
            displayResults(musicData);
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
        return `https://w.soundcloud.com/player/?url=${encodeURIComponent(cleanUrl)}&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`;
    }


    // 顯示搜尋結果
    function displayResults(results) {
        const $resultsList = $('#resultsList');
        $resultsList.empty();

        if (results.length === 0) {
            $resultsList.append('<div class="no-results">沒有找到符合條件的歌曲</div>');
        } else {
            // results.forEach(song => {
            //     const embedUrl = getSoundCloudEmbedUrl(song.soundcloudUrl);
            //     const $songItem = $(`
            //         <div class="result-item">
                     
            //             <div class="player-container">
            //                 <iframe height="120" src="${embedUrl}" frameborder="0" allow="autoplay"></iframe>
            //             </div>
            //         </div>
            //     `);

            results.slice(0, 20).forEach(song => {
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