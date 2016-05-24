'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:EchoCtrl
 * @description
 * # EchoCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('EchoCtrl', function ($scope) {

    if (!('webkitSpeechRecognition' in window)) {
      upgrade();
    } else {
      var recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = function () { }
      recognition.onerror = function (event) { }
      recognition.onend = function () { }



      recognition.onresult = (event) => {
        var interim_transcript = '';

        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            this.final_transcript = event.results[i][0].transcript;
            speak(this.final_transcript);
            $scope.$apply();
          } else {
            this.interim_transcript += event.results[i][0].transcript;
          }
        }

      };
      recognition.start();
    }

    const speak = (message) => {
      var msg = new SpeechSynthesisUtterance();
      var voices = window.speechSynthesis.getVoices();
      msg.voice = voices[0]; // Note: some voices don't support altering params
      msg.voiceURI = 'native';
      msg.volume = 1; // 0 to 1
      msg.rate = 1; // 0.1 to 10
      msg.pitch = 1; //0 to 2
      msg.text = message;
      msg.lang = 'en-US';

      msg.onend = function (e) {
        console.log('Finished in ' + event.elapsedTime + ' seconds.');
      };

      speechSynthesis.speak(msg);
    }


  });
