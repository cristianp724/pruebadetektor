var app = angular.module('Detektor',['ui.router'])

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('menu',{
			url:'/',
            templateUrl: 'views/menu.html',
            controller: 'MainController'
        })
      

    $urlRouterProvider.otherwise(function($injector, $location){
        $injector.invoke(['$state', function($state) {
            if( $location.$$path == '')
                $state.go('menu'); 
           
        }]);
    });
});