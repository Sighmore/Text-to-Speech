Basic Text-to-Speech (TTS) Application

This is a simple text-to-speech application that reads text entered in a text area and generates English speech.

Features

Text Input: Users can enter text in the provided text area.
Language Selection: The application currently supports only English.
Speech Generation: The entered text is converted to speech and played back.

Usage

Open the Application: Open the HTML file in a web browser.
Enter Text: Type the text you want to convert to speech in the text area.
Select Language: Ensure that the language is set to English.
Click the Listen Button: Click the "Listen" button to generate the speech.

Technical Details

JavaScript Library: The application uses the window—speech synthesis API to generate speech.
SpeechSynthesisUtterance: The SpeechSynthesisUtterance object is used to define the text to be spoken.
Event Listener: The "Listen" button is assigned to an event listener to trigger the speech generation when clicked.
Limitations
Language Support: Currently, the application only supports English.
No Error Handling: The application does not handle errors or exceptions.
Future Development
Multi-Language Support: Adding support for multiple languages.
Error Handling: Implementing error handling to handle potential issues.
Credits

API Documentation: 

The window.speech synthesis API documentation was used to develop this application.
Code Examples: 

Code examples from various sources were used to understand the API and develop the application.
