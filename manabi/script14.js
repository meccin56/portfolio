
const fromText = document.querySelector('.fromText');
const toText = document.querySelector('.toText');
const fromLang = document.querySelector('.fromLang');
const toLang = document.querySelector('.toLang');
const honyakuBtn = document.querySelector('.honyaku-btn');


let fromVal = 'ja-JP';
let toVal = 'en-US';

fromLang.addEventListener('change', ()=>{
    fromVal = fromLang.value;
});

toLang.addEventListener('change', ()=> {
    toVal = toLang.value;
});


honyakuBtn.addEventListener('click', ()=> {

  let sentence = fromText.value;

 fetch
 (`https://api.mymemory.translated.net/get?q=${sentence}&langpair=${fromVal}|${toVal}`)
 .then((res) => res.json())
 .then((data) => {
    return (toText.value=data.responseData.translatedText);
 });

});




const kikukopis = document.querySelectorAll('.kikukopi');
kikukopis.forEach((kikukopi) => {
    kikukopi.addEventListener('click',(data)=>{
        let voice;
        if(data.target.id==='fromAudio'){
            voice = new SpeechSynthesisUtterance(fromText.value);
        }
        if(data.target.id==='fromCopy'){
            navigator.clipboard.writeText(fromText.value); 
        }
        if(data.target.id==='toAudio'){
            voice = new SpeechSynthesisUtterance(toText.value);  
        }
        if(data.target.id==='toCopy'){
            navigator.clipboard.writeText(toText.value);    
        }
       speechSynthesis.speak(voice);
    });
});

