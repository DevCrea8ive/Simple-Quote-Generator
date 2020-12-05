    //Code by Goodness
    const qu = document.querySelector("h2");
    //Random Words
    const quotes = ["People always call it luck when you've acted more sensibly than they have.",
    "Chance favors only the prepared mind.",
    "A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What one can be, one must be.",
    "A friend in need is a friend indeed.",
    "Love is the greatest weapon",
    "When you are rich, relation exists; when you are poor, relations desist.",
    "The physician does not drink the medicine for the patient.",
    "If you have much, give of your wealth; if you have little, give of your heart.",
    "You cannot fight against the future. Time is on our side.",
    "Life is a gamble, at terrible odds—if it was a bet, you wouldn't take it.",
    "A straight road has no turnings.",
    "Everything comes to him who waits upon the lord.",
    "Faith cometh by hearing and, hearing by the word of God.",
    "The word of God is sharper than any two edged sword.",
    "When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.",
    "Think Big and you will be successful in life.",
];
const btn = document.querySelector("#btn").addEventListener("click", () => {
        //for the random Quotes
    const randWords = Math.floor(Math.random() * quotes.length);
    //Output the random Quote
    qu.innerHTML = '<span>“</span> ' + quotes[randWords] + ' <span>”</span>';
    });