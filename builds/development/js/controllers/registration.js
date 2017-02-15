myApp.controller('RegistrationController', ['$scope', '$firebase', '$firebaseAuth',
    function($scope, $firebase, $firebaseAuth) {
        // $scope.message = "Welcome to my App";

        // create a reference to the database
        var ref = firebase.database().ref();
        // So this will be a reference to our database

        // another variable for the authentication part.
        var auth = $firebaseAuth();

        $scope.login = function() {
            $scope.message = "Welcome " + $scope.user.email;
        };
        $scope.register = function() {

            // so that we can register with an account
            // a special function from Firebase called createUserWithEmailAndPassword

            // then Firebase is going to give us a promise which you can get to with a then statement and it's going to return some registration information that we'll pass along into a variable called regUser.

            auth.$createUserWithEmailAndPassword(
                $scope.user.email,
                $scope.user.password
            ).then(function(regUser) {
                $scope.message = "Hi " + $scope.user.firstname + ", Thank's for registering";

            }).catch(function(error) {
                $scope.message = error.message;
            }); //createUserWithEmailAndPassword
        }; //register
    }
]); //Controller
