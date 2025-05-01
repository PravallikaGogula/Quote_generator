const quoteText = document.getElementById('quote');

const authorText = document.getElementById('author');

const button = document.getElementById('new-quote');

const apikey = `YQ4Rjr+s3Ax80rHCsTgrZQ==W37jvZBnQExFf8bk`;
 
function getQuote() {
    fetch("https://api.api-ninjas.com/v1/quotes",{
        method: 'GET',
        headers:{
            'X-Api-Key': apikey
        }
    })
    .then(Response => Response.json())
    .then(data => {
        const quoteData = data[0];
        quoteText.textContent = `"${quoteData.quote}"`;
        authorText.textContent = `- ${quoteData.author}`;
        speakQuote(quoteData.quote);    
    })
    .catch(error =>{
        quoteText.textContent = "Failed to load quote.";
        authorText.textContent = "";
        console.error("Error fetching quote:",error);
    });
}

function speakQuote(text){
    const speech = new
        SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);    
}

button.addEventListener('click',getQuote);

// getQuote();