// Resources have the following methods by default:
// get(), query(), save(), remove(), delete()

angular.module('pollsApp.services', ['ngResource'])
    .factory('User', function($resource) {
        return $resource('/api/users/:id/');
    })
    .factory('Polls', function($resource) {
        return $resource('/api/polls/:id/');
    });
