angular.module('appService').factory('AuthService', function ($http, $location, $rootScope) {

    var user = {
        isAuthenticated: false,
        name: '',
        isAdmin: false
    };

    function authenticate(callback) {
        $http.get('/Api/User/CurrentUser').success(function (data) {
            if (!!data.email) {
                user.isAuthenticated = true;
                user.name = data.firstName + ' ' + data.lastName;
                user.isAdmin = data.roleType === 'ADMIN';
                // $rootScope.isAuthenticated = true;
            }
            callback && callback();
        }).error(function () {
            user.isAuthenticated = false;
            user.name = '';
            user.isAdmin = false;
            // $rootScope.isAuthenticated = false;
            $location.path('#/Login');
            callback && callback();
        });
    }

    var authService = {
        checkAuth: authenticate
    };

    authService.init = function (isAuthenticated, userName, isAdmin) {
        user.isAuthenticated = isAuthenticated;
        user.name = userName;
        user.isAdmin = isAdmin;

    };

    authService.getUsername = function () {
        return user.name;
    };

    authService.isAdmin = function () {
        return user.isAdmin;
    };

    authService.isAuthenticated = function () {
        return user.isAuthenticated;
    };

    authService.login = function (username, password, rememberMe) {
        var data = 'username=' + username + '&password=' + password + '&remember-me=' + rememberMe;
        $http.post('login', data, {
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        }).success(function (data) {
            authenticate(function () {
                if (user.isAuthenticated) {
                    $location.path("#/");
                    user.isAuthenticated = true;
                    // $rootScope.isAuthenticated = true;
                } else {
                    $location.path("#/Login");
                    user.isAuthenticated = false;
                    user.name = '';
                    user.isAdmin = false;
                    // $rootScope.isAuthenticated = false;
                }
            });
        }).error(function (data) {
            $location.path("#/Login");
            user.isAuthenticated = false;
            user.name = '';
            user.isAdmin = false;
            // $rootScope.isAuthenticated = false;
        })
    };

    authService.logout = function () {
        $http.post('/logout', {}).success(function () {
            user.isAuthenticated = false;
            user.name = '';
            user.isAdmin = false;
            $rootScope.isAuthenticated = false;
            $location.path('#/Login');
        }).error(function (data) {
            user.isAuthenticated = false;
            user.name = '';
            user.isAdmin = false;
            $rootScope.isAuthenticated = false;
            $location.path('#/Login');
        });
    };

    authService.setUser = function () {
        authenticate();
    };


    return authService;
});