const quoteText = document.querySelector(".quore"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
tweetBtn = document.querySelector(".tweet"),
facebookBtn = document.querySelector(".facebook")
const quoteAuthor = document.querySelector(".name")

function randomQuote() {
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading ..."
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result =>{
        console.log(result);
        quoteText.innerText = result.content
        quoteAuthor.innerText = result.author
        quoteBtn.innerText = "New Quote"
        quoteBtn.classList.remove("loading")
    })
}

soundBtn.addEventListener("click" , ()=>{
   let utterance = new SpeechSynthesisUtterance(`${ quoteText.innerText} by ${ quoteAuthor.innerText}`)
   speechSynthesis.speak(utterance)
})

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText( quoteText.innerText)
})

tweetBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank")
})


quoteBtn.addEventListener('click', randomQuote)
