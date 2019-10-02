/* Setup Rounting For All Pages */
App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/hotel"); //home jabe
    $stateProvider

    // Dashboard

    //Added by Tanvir

    .state('hotel', {
        url: "/hotel",
        templateUrl: "/hotel",
        data: {pageTitle: 'Hotel'},
        controller: "HotelController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'App',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                    'angular/js/controllers/HotelController.js'
                    ]
                });
            }]
        }
    })






}]);
