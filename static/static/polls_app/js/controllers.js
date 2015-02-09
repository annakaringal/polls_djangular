var pollsControllers = angular.module('pollsApp.controllers', []);

pollsControllers.controller('homeCtrl', function homeCtrl($scope, $filter, $state, Polls) {

    $scope.all_polls = Polls;

    Polls.query(function(response){
       $scope.all_polls = response;
    });

    $scope.deletePoll = function(pollId){
        var poll = new Polls({id: pollId});
        poll.$remove();
        $state.reload();
    }

});

pollsControllers.controller('UserCtrl', function UserCtrl($scope, $stateParams, User, AuthUser) {
    id = AuthUser.id;
    User.get({id:id}, function(response) {
        $scope.user = response;
    });

});

pollsControllers.controller('UserListingCtrl', function UserListingCtrl($scope, $state, User) {
    $scope.users = User;

    User.query(function(response) {
        $scope.users = response;
    });

    $scope.deleteUser = function(userId){
        var user = new User({id: userId});
        user.$remove();
        $state.reload();
    }

});

pollsControllers.controller('createUserCtrl', function createUserCtrl($scope, $state, User) {
    $scope.new_user = new User();
    $scope.$watch('new_user.username', function() {
        $scope.available = true;
        User.query(function(response) {
            angular.forEach(response, function(value, key) {
                if(value.username === $scope.new_user.username) {
                    $scope.available = false;
                }
            });
        });
    });
    $scope.addUser = function(){
        if ($scope.available) {
            $scope.new_user.$save(function(){
                $state.go('userListing');
            });  
        }
    }
});
pollsControllers.controller('updateUserCtrl', function updateUserCtrl($scope, $stateParams, $state, User) {
    $scope.new_user = User.get({id:$stateParams.id});
    $scope.$watch('new_user.username', function() {
        $scope.available = true;
        User.query(function(response) {
            angular.forEach(response, function(value, key) {
                if((value.username === $scope.new_user.username) && (value.id !== $scope.new_user.id)) {
                    $scope.available = false;
                }
            });
        });
    });
    $scope.updateUser = function(){
        if ($scope.available) {
            $scope.new_user.$update(function() {
                $state.go('userListing');
            });
        }
    }
});

pollsControllers.controller('createPollCtrl', function createPollCtrl($scope, $state, Polls) {
    $scope.new_poll = new Polls();
    $scope.addPoll = function(){
        $scope.new_poll.$save(function(){
            $state.go('/');
        });
    }
});

pollsControllers.controller('updatePollCtrl', function updatePollCtrl($scope, $stateParams, $state, Polls) {
    $scope.new_poll = Polls.get({id:$stateParams.id});

    $scope.updatePoll = function(){
        $scope.new_poll.$update(function(){
            $state.go('/');
        });
    }
});

