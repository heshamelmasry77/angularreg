myApp.factory('Authentication', ['$rootScope', '$firebaseAuth', function($rootScope, $firebaseAuth) {
    // create a reference to the database
    var ref = firebase.database().ref();
    // So this will be a reference to our database

    // another variable for the authentication part.
    var auth = $firebaseAuth();

    // this service is going to return an object and this object is going to have a couple of methods
    return {
        login: function(user) {
            $rootScope.message = "Welcome " + $rootScope.user.email;

        }, //login
        register: function(user) {

            // so that we can register with an account
            // a special function from Firebase called createUserWithEmailAndPassword

            // then Firebase is going to give us a promise which you can get to with a then statement and it's going to return some registration information that we'll pass along into a variable called regUser.

            auth.$createUserWithEmailAndPassword(
                // whenever I'm calling this function called register I'm going to pass along the user information and put it in a user variable. When I call the create user with e-mail and password
                // I don't need rootScope to pass along the information here
                user.email,
                user.password
            ).then(function(regUser) {
                $rootScope.message = "Hi " + user.firstname + ", Thank's for registering";

            }).catch(function(error) {
                $rootScope.message = error.message;
            }); //createUserWithEmailAndPassword

        } //register
    } //return

}]); //factory
