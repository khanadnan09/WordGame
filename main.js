let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]
const Scramble_word = document.querySelector('.Scramble_word')
const hintIs = document.querySelector('.hintIs')
const refresh = document.querySelector('.refresh')
const answer = document.querySelector('.answer')
const check = document.querySelector('.check')
const popup_back = document.querySelector('.popup_back')
const popup = document.querySelector('.popup')
const popup_text = document.querySelector('.popup_text')
const play_again = document.querySelector('.play_again')
const timeIs = document.querySelector('.timeIs')
const getWord = () => {
    const selectWord = words[Math.floor(Math.random() * words.length)]
    // console.log(selectWord)
    const splitWord = selectWord.word.split("")

    // console.log(splitWord)

    for (let i = splitWord.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = splitWord[i];
        splitWord[i] = splitWord[j];
        splitWord[j] = temp;
    }

    // console.log(splitWord)


    // display split word
    Scramble_word.innerHTML = splitWord.join("  ")
    //  display hint
    hintIs.textContent = selectWord.hint;


    // working on input
    check.addEventListener('click', () => {
        console.log(answer.value)

        if (answer.value.toLocaleLowerCase() == selectWord.word) {
            // console.log("correct")
            popup_text.textContent = "Well Done , your answer is correct 👏😀🎉."
        } else {
            // console.log("wrong")
            popup_text.textContent = "oops , your answer is wrong 🙄😫😥."
        }
        answer.value = ""
        // displaying popup modal
        popup_back.style.display = "block";
        setInterval(() => {
            popup.style.top = "50%";
            popup.style.opacity = "1";
        }, 100);
        clearInterval(timeon);
    })


}

play_again.addEventListener("click", () => {
    location.reload();
})



const timer = () => {
    let t = 30
     timeon = setInterval(() => {
        if (t >= 0) {
            timeIs.innerText = `${t--}s`;
        } else {
            clearInterval();
            popup_back.style.display = "block";
            setInterval(() => {
                popup.style.top = "50%";
                popup.style.opacity = "1";
                popup_text.textContent = "oops , your time is over 🕛🕛🕚."
            }, 100);
        }
    }, 1000);
 
}
timer()  
getWord()
refresh.addEventListener('click', getWord)
refresh.addEventListener('click', ()=>{
    clearInterval(timeon);
    timer()
})