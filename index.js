//text to speech
let listenPara = document.querySelector('.listenpara')
let listenBtn = document.querySelector('.listenbtn')

listenBtn.addEventListener('click', ()=>{
    let utterance = new SpeechSynthesisUtterance(listenPara.value);
    speechSynthesis.speak(utterance);
    })
    

//speech to text
let speakPara = document.querySelector('.speakvalue')
let speakBtn = document.querySelector('.speakbtn')

speakBtn.addEventListener('click', ()=>{
    let speech = true;
    window.speechRecognition = window.webkitSpeechRecognition
    const recognition = new speechRecognition()
    recognition.interimResults = true

recognition.addEventListener('result', (e)=>{
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    speakPara.innerHTML = transcript
})
    if(speech == true){
        recognition.start()
    }
})