// This function "renders" some bit of text
// as audio to the user.
function renderTTS(text) {
  var synthesis = window.speechSynthesis;

  console.log("Available Voices:");
  var voice = synthesis.getVoices().filter(function (voice) {
    console.log(voice.name + " " + voice.lang);
    return voice.name === 'Google UK English Female';
  })[0];

  // Create an utterance object
  var utterance = new SpeechSynthesisUtterance(text);

  // Set utterance properties
  utterance.voice = voice;
  utterance.pitch = 1;
  utterance.rate = 1;
  utterance.volume = 1;

  // Speak the utterance
  synthesis.speak(utterance);
}

function setVolume(){
  var volume = document.getElementById("volume");
volume.volume = document.getElementById("volume").value;
}

//I'm obviously missing something, the range seems to change the acccent of the TTS but I am unsure how to link this to the volume aspect. The resource provided all has to do with audio or external media, but TTS is from the computer/browser itswlf and I am unisre how to link to this explicity, I know I did not do it right.

function encourage() {
  let name = document.getElementById("name").value;
  let encouragment = document.getElementById("encouragment").value;
  let postScript = document.getElementById("post-script").value;
  let message = `Hello ${name}, this is ${postScript} I have something I would like to tell you. ${encouragment} Have a nice day.`;
  renderTTS(message);
}