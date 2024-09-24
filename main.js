'use strict'

document.addEventListener("DOMContentLoaded", () => {

    let quotes = [];
    const quoteParagraph = document.querySelector("#quoteParagraph");
    const quoteAuthor = document.querySelector("#quoteAuthor");
    const quoteCategory = document.querySelector("#quoteCategory");
    const quoteButton = document.querySelector("#quoteButton");
    const loader = document.querySelector("#loader");
    const cardLoader = document.querySelector("#cardLoader")
    
    function loading(hide){
        if(hide) {
            loader.classList.add("hidden");
            cardLoader.classList.remove("opacity-25");
            quoteButton.disabled = false;
        }else {
            loader.classList.remove("hidden");
            cardLoader.classList.add("opacity-25")
            quoteButton.disabled = true;
        }
    }
    // const proxyUrl = "https://api.codetabs.com/v1/proxy?quest=";
    
    async function getQuotes() {
        const apiQuotes = "https://api.api-ninjas.com/v1/quotes";
        loading();
        try{
            const response = await fetch(`${apiQuotes}`, {
                headers:{
                    'X-Api-Key':'qYwr7jyrOgzNNU2Ow6I3cg==houNB10VJDaIpOtb'
                }
            })
            .then((response) => {
                return response.json();
              })
            .then((data) => {
                quoteParagraph.innerText = data[0].quote;
                quoteAuthor.innerText = data[0].author;
                quoteCategory.innerText = data[0].category;
                loading(true);
              });
            
        }catch(error){
            console.log(error);
        }
    }
    getQuotes();
    quoteButton.addEventListener("click", getQuotes); 

});