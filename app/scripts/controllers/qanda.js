'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:QandaCtrl
 * @description
 * # QandaCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('QandaCtrl', function ($scope) {

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

            answer(this.final_transcript.replace('computer', '').trim().toLowerCase());
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

    const answer = (message) => {
      if (this.final_transcript.trim().startsWith('computer')) {
        if (message === 'who is the best') {
          this.answer = 'You , Jeff.'
          speak(this.answer);
        }
        if (message === 'hello') {
          this.answer = 'Hi Jeff.'
          speak(this.answer);
        }
        if (message === 'who is the best student') {
          this.answer = 'Birdy Wilde is the best student at Indian Hills Middle School';
          speak(this.answer);
        }
        if (message === 'what time is it') {
          this.answer = (new Date()).toTimeString();
          speak(this.answer);
        }
        if (message === 'what is your name') {
          this.answer = 'I am a computer.  I do what computer programmers tell me to do.  I am your slave.'
          speak(this.answer);
        }
        if (message === 'why should i be a computer programmer') {
          this.answer = 'Because it is fun and you get paid a lot';
          speak(this.answer);
        }
        if (message === 'what do i need to do') {
          this.answer = 'Start programming today.  You can Learn a lot online.';
          speak(this.answer);
        }
        if (message === 'do i need a college degree') {
          this.answer = 'It is a good idea.  Many computer programmers do not though';
          speak(this.answer);
        }
        if (message === 'what are the benefits') {
          this.answer = 'Flexible schedules.  Good pay.  Lots of jobs.  Plus it is fun.';
          speak(this.answer);
        }
      }
      $scope.$apply();
    }


  });
