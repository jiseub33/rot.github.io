var dictionary = [
    { korean: '안녕하세요?', malay: 'Apa Khabar?', pronunciation: '아빠 까바르?' },
    { korean: '안녕히 계세요', malay: 'Selamat tinggal', pronunciation: '슬라맛 팅갈' },
    { korean: '감사합니다', malay: 'Terima Kasih', pronunciation: '뜨리마 까시' },
    { korean: '죄송합니다', malay: 'Maaf', pronunciation: '마아프' },
    { korean: '아침 인사', malay: 'Selamat Pagi', pronunciation: '슬라맛 빠기' },
    { korean: '점심 인사', malay: 'Selamat Tengahari', pronunciation: '슬라맛 뜽하 하리' },
    { korean: '오후 인사', malay: 'Selamat Petang', pronunciation: '슬라맛 쁘땅' },
    { korean: '저녁 인사', malay: 'Selamat Malam', pronunciation: '슬라맛 말람' },
    { korean: '남성을 친근히 부를때', malay: 'Bang', pronunciation: '방' },
    { korean: '여성을 친근히 부를때', malay: 'Kak', pronunciation: '까' },
    { korean: '네', malay: 'Ya', pronunciation: '야' },
    { korean: '아니요', malay: 'Tidak', pronunciation: '띠닥' },
    { korean: '이거 하나 주세요', malay: 'Ini satu', pronunciation: '이니 사뚜' },
    { korean: '포장 가능한가요?', malay: 'Boleh bungkus?', pronunciation: '볼레 붕꺼스?' },
    { korean: '계산서 주세요', malay: 'Minta Bil', pronunciation: '민따 빌' },
    { korean: '매운가요?', malay: 'Adakah ini pedas?', pronunciation: '아드까 이니 쁘다스?' },
    { korean: '덜 달게 해주세요', malay: 'Kurang manis', pronunciation: '구랑 마니스' },
    { korean: '뜨거운 물', malay: 'Air panas', pronunciation: '아이 파나스' },
    { korean: '차가운 커피', malay: 'Kopi sejuk', pronunciation: '커피 쓰주' },
    { korean: '가격이 얼마인가요?', malay: 'Berapa harganya?', pronunciation: '베라파 할가냐?' },
    { korean: '비싸네요', malay: 'Mahal', pronunciation: '마할' },
    { korean: '싸네요', malay: 'Murah', pronunciation: '무라' },
    { korean: '입어봐도 되나요?', malay: 'Boleh cuba ini?', pronunciation: '볼레 츄바 이니?' },
    { korean: '조금 깎아주실 수 있나요?', malay: 'Boleh kurang sikit?', pronunciation: '볼레 쿠랑 시킷?' },
    { korean: '어디인가요?', malay: 'Di manakah ~?', pronunciation: '디 마나까?' },
    { korean: '화장실이 어디인가요?', malay: 'Di manakah tandas?', pronunciation: '디 마나까 딴다스?' },
    { korean: '병원은 어디인가요?', malay: 'Di manakah hospital?', pronunciation: '디 마나까 호스피털?' },
    { korean: '역은 어디인가요?', malay: 'Di manakah stesen?', pronunciation: '디 마나까 스테이슨?' },
    { korean: '~ 하고 싶습니다', malay: 'Nak ~', pronunciation: '낙 ~' },
    { korean: '~로 가고 싶습니다', malay: 'Nak pergi ke ~', pronunciation: '낙 뻘기 끄 ~' },
    { korean: '천만에요', malay: 'Sama-Sama', pronunciation: '사마사마' },
    { korean: '이름이 뭐에요?', malay: 'Siapa nama awak?', pronunciation: '시아파 나마 아왁?' },
    { korean: '내 이름은 OOO이에요.', malay: 'Nama saya OOO', pronunciation: '나마사야 OOO' },
    { korean: '당신은 어디에 살아요?', malay: 'Mana awak tinggal?', pronunciation: '마나 아왁 띵갈?' },
    { korean: '나는 OOO에 살아요', malay: 'Saya tinggal di OOO', pronunciation: '사야 띵갈 디 OOO' },
    { korean: '당신은 어디에서 왔어요?', malay: 'Awak berasal dari mana?', pronunciation: '아왁 브라살 다리 마나?' },
    { korean: '나는 한국에서 왔어요.', malay: 'Saya berasal dari korea', pronunciation: '사야 브라살 다리 코리아' },
    { korean: '1', malay: 'Satu', pronunciation: '사뚜' },
    { korean: '2', malay: 'dua', pronunciation: '두아' },
    { korean: '3', malay: 'tiga', pronunciation: '띠가' },
    { korean: '4', malay: 'empat', pronunciation: '음빳' },
    { korean: '5', malay: 'lima', pronunciation: '리나' },
    { korean: '6', malay: 'enam', pronunciation: '으남' },
    { korean: '7', malay: 'tujuh', pronunciation: '뜨주' },
    { korean: '8', malay: 'lapan', pronunciation: '라빤' },
    { korean: '9', malay: 'sembilan', pronunciation: '슴빌람' },
    { korean: '10', malay: 'sepuluh', pronunciation: '스쁠루' },
    
];

var dictionaryList = document.querySelector('.dictionary');

dictionary.forEach(function (item) {
    var li = document.createElement('li');

    var h1 = document.createElement('h1');
    h1.textContent = item.korean;
    li.appendChild(h1);

    var p = document.createElement('p');
    p.textContent = item.malay;
    li.appendChild(p);

    var b = document.createElement('b');
    b.textContent = item.pronunciation;
    li.appendChild(b);

    dictionaryList.appendChild(li);
});

// Get DOM elements
var questionElement = document.getElementById('question');
var wordList = document.getElementById('wordList').getElementsByTagName('li');

// Function to set random words to li elements
function setRandomWords() {
    // Get a random word object from the dictionary
    var randomIndex = Math.floor(Math.random() * dictionary.length);
    var randomWord = dictionary[randomIndex];

    // Set Korean word to #question element
    questionElement.textContent = randomWord.korean;

    // Create an array to store indices for other incorrect translations
    var incorrectIndices = [];

    // Generate unique indices for incorrect translations
    while (incorrectIndices.length < wordList.length - 1) {
        var randomNonIndex = Math.floor(Math.random() * dictionary.length);
        if (randomNonIndex !== randomIndex && !incorrectIndices.includes(randomNonIndex)) {
            incorrectIndices.push(randomNonIndex);
        }
    }

    // Shuffle the list of elements
    var shuffledList = Array.from(wordList);
    shuffledList.sort(() => Math.random() - 0.5);

    // Assign Malay and Pronunciation to shuffled elements
    for (var i = 0; i < shuffledList.length; i++) {
        if (i === 0) {
            // Assign correct translation to the first element
            shuffledList[i].getElementsByTagName('h1')[0].textContent = randomWord.pronunciation;
            shuffledList[i].getElementsByTagName('p')[0].textContent = randomWord.malay;
        } else {
            // Assign incorrect translations to other elements
            var incorrectWord = dictionary[incorrectIndices[i - 1]];
            shuffledList[i].getElementsByTagName('h1')[0].textContent = incorrectWord.pronunciation;
            shuffledList[i].getElementsByTagName('p')[0].textContent = incorrectWord.malay;
        }
    }
}

// Variable to keep track of whether clicks are allowed
var clicksAllowed = true;

// Function to disable click events for a specified time
function disableClicksForTime(milliseconds) {
    clicksAllowed = false;
    setTimeout(function () {
        clicksAllowed = true;
    }, milliseconds);
}

//Function to handle click events on li elements
function handleItemClick(event) {
    // Check if clicks are allowed, if not, return
    if (!clicksAllowed) return;

    var clickedLi = event.currentTarget;
    var clickedH1 = clickedLi.getElementsByTagName('h1')[0].textContent;
    var clickedP = clickedLi.getElementsByTagName('p')[0].textContent;

    // Check if the clicked word matches any property in the current dictionary object
    var isCorrect = dictionary.some(function (word) {
        return word.korean === questionElement.textContent &&
            (word.pronunciation === clickedH1 || word.malay === clickedP);
    });

    // Update score based on correctness
    var scoreElement = document.getElementById('score');
    var currentScore = parseInt(scoreElement.textContent);

    if (isCorrect) {
        // Update the score
        var newScore = currentScore + 10;
        scoreElement.textContent = newScore;
    
        // Check if it's a new best score
        var bestScoreElement = document.getElementById('best_score');
        var bestScore = parseInt(bestScoreElement.textContent);
    
        if (newScore > bestScore) {
            bestScoreElement.textContent = newScore;
            // Save the best score as a cookie
            document.cookie = "best_score=" + newScore + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        }
    
        clickedLi.classList.add('correct');
    
        // Reset classes after 3 seconds and set new random words
        setTimeout(function () {
            clickedLi.classList.remove('correct', 'wrong');
            setRandomWords(); // Set new random words
        }, 2500);
        disableClicksForTime(2500);
    } else {
        scoreElement.textContent = currentScore - 5; // Deduct 50 points for wrong answer
        clickedLi.classList.add('wrong');
        // Reset classes after 3 seconds and set new random words
        setTimeout(function () {
            clickedLi.classList.remove('correct', 'wrong');
            setRandomWords(); //Set new random words
        }, 4000);
        disableClicksForTime(4000);
    }
}
// Attach event listeners to each li element
for (var i = 0; i < wordList.length; i++) {
    wordList[i].addEventListener('click', handleItemClick);
}

// Initial setup
setRandomWords();