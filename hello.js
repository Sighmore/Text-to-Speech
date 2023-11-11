
document.addEventListener('DOMContentLoaded', function () {
    const textToSpeakInput = document.getElementById('textToSpeak');
    const languageSelect = document.getElementById('languageSelect');
    const listenButton = document.getElementById('listenButton');

    listenButton.addEventListener('click', function () {
        const textToSpeak = textToSpeakInput.value;
        const selectedLanguage = languageSelect.value;

        
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);

        
        utterance.lang = selectedLanguage;

        synth.speak(utterance);
    });
});
