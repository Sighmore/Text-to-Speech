// hello.js
document.addEventListener('DOMContentLoaded', function () {
    const textToSpeakInput = document.getElementById('textToSpeak');
    const languageSelect = document.getElementById('languageSelect');
    const listenButton = document.getElementById('listenButton');

    listenButton.addEventListener('click', function () {
        const textToSpeak = textToSpeakInput.value;
        const selectedLanguage = languageSelect.value;

        // Use the Web Speech API to speak the text
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);

        // Set the language based on the selected option
        utterance.lang = selectedLanguage;

        // Speak the text
        synth.speak(utterance);
    });
});
