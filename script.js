let btn = document.querySelector('#new-quote-btn');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

console.log(btn);
console.log(quote);
console.log(person);


const quotes = [{
    quote :  "Be yourself; everyone else is already taken.",
    person : "― Oscar Wilde"
},{
    quote :  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    person : "― Marilyn Monroe"
},{
    quote :  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    person : "― Albert Einstein"
},{
    quote :  "In three words I can sum up everything I've learned about life: it goes on.",
    person : "― Robert Frost"
},{
    quote :  "Be the change that you wish to see in the world.",
    person : "― Mahatma Gandhi"
},{
    quote :  "You only live once, but if you do it right, once is enough.",
    person : "― Mae West"
},{
    quote :  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    person : "― Dr. Seuss"
},{
    quote :  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    person : "― Bernard M. Baruch"
},{
    quote :  "A room without books is like a body without a soul.",
    person : "― Marcus Tullius Cicero"
},{
    quote :  "So many books, so little time.",
    person : "― Frank Zappa"
},];

let availableQuotes = [...quotes];

function generateQuote(){
    if(availableQuotes.length>0){

    // to get max unique quotes.
    const ranNum = Math.floor((Math.random()*availableQuotes.length));
    quote.innerText = quotes[ranNum].quote;
    person.innerText = quotes[ranNum].person;
    availableQuotes.splice(ranNum, 1);
    }
    
    else{
        availableQuotes = [...quotes];
    }
}

btn.addEventListener("click", generateQuote);

generateQuote();