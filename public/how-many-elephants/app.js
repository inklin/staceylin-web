
var quizApp = angular.module('quizApp', []);

quizApp.controller('QuizController', function($scope, quizFactory) {

  $scope.elephants = 0;
  $scope.score = 0;
  $scope.state = 'start';


  $scope.start = function(){
    $scope.id= 0;
    $scope.getNextQuestion();

  };

  $scope.reset = function(){
    $scope.state = 'start';
    
    $scope.score = 0;
  };

  $scope.getNextQuestion = function(){
    $scope.state = 'question';

    var q = quizFactory.getQuestion($scope.id);
    if (q){
      $scope.question = q;
      $scope.elephants = q.min;
      $scope.sliderConfig = {
        min: $scope.question.min,
        max: $scope.question.max,
        value: $scope.question.min,
        step: 1
      };
    } else {
      $scope.showSummary();
    }
  };

  $scope.showSummary = function() {
    $scope.state = 'summary';
  };

  $scope.checkAnswer = function() {
    $scope.state = 'result';

    if ($scope.attempt === $scope.question.answer){
      $scope.score++;
      $scope.correctAns = true;
    } else {
      $scope.correctAns = false;
    }
  };

  $scope.nextQuestion = function(){
    $scope.id++;
    $scope.getNextQuestion();
  };
});

quizApp.directive('slider', function(){
  return {
    restrict: 'A',
    scope: {
      config: "=",
      elephants: "=model",
      attempt: "="
    },
    link: function(scope, elem, attrs) {
      var setModel = function(value){
        scope.model = value;
      };


      scope.$watch('config', function() {
        setSlider();
      });

      var setSlider = function() {
        if (scope.config) {
          $(elem).slider({
            range: false,
            min: scope.config.min,
            max: scope.config.max,
            value: scope.config.min,
            step: 1,
            slide: function(event, ui){
              scope.$apply(function(){
                scope.elephants = ui.value;
                scope.attempt = ui.value;
              });
            }
          });
        }
      };
    }
  };
});

quizApp.factory('quizFactory', function(){
 var questions = [
  {
    "text": "How many elephants tall is the height of the CN Tower?",
    "min": 130,
    "max": 150,
    "answer": 139
  },
  {
    "text": "How many elephants long was Titanic?",
    "min": 25,
    "max": 40,
    "answer": 38
  },
  {
    "text": "How many elephants tall is the Statue of Liberty?",
    "min": 10,
    "max": 25,
    "answer": 23
  },
  {
    "text": "How many elephants long is the Nile?",
    "min": 15,
    "max": 30,
    "answer": 27
  },
  {
    "text": "How many elephants tall is Niagara falls?",
    "min": 5,
    "max": 20,
    "answer": 13
  },

];

      return {
        getQuestion: function(id){
          if (id < questions.length){
            return questions[id];
          } else {
            return false;
          }
        }
      };
});