var dictionary = [
    { korean: '안녕하세요?', malay: 'Apa Khabar?', pronunciation: '아빠 까바르?' },
    { korean: '안녕히 계세요', malay: 'Selamat tinggal', pronunciation: '슬라맛 팅갈' },
    { korean: '아침 인사', malay: 'Selamat Pagi', pronunciation: '슬라맛 빠기' },
    { korean: '점심 인사', malay: 'Selamat Petang hari', pronunciation: '슬라맛 쁘땅 하리' },
    { korean: '저녁 인사', malay: 'Selamat Malam', pronunciation: '슬라맛 말람' },
    { korean: '감사합니다', malay: 'Terima Kasih', pronunciation: '뜨리마 까시' },
    { korean: '천만에요', malay: 'Sama-Sama', pronunciation: '사마사마' },
    { korean: '이름이 뭐에요?', malay: 'Siapa nama awak?', pronunciation: '시아파 나마 아왁' },
    { korean: '내 이름은 OOO이에요.', malay: 'Nama saya OOO', pronunciation: '나마사야 OOO' },
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
        }, 5000);
        disableClicksForTime(5000);
    }
}
// Attach event listeners to each li element
for (var i = 0; i < wordList.length; i++) {
    wordList[i].addEventListener('click', handleItemClick);
}

// Initial setup
setRandomWords();