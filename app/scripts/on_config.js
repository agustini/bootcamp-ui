function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'HomeCtrl as home',
    templateUrl: 'controllers/home/home.html',
    title: 'Home'
  })
	/*.state('Search', {
    url: '/',
    controller: 'SearchCtrl as search',
    templateUrl: 'controllers/home/home.html',
    title: 'Search'
  })*/
	.state('Artist', {
    url: '/artist/:artistId',
    controller: 'ArtistCtrl as artist',
    templateUrl: 'controllers/artist/artist.html',
    title: 'Artist'
  })
	.state('Album', {
    url: '/album/:albumId',
    controller: 'AlbumCtrl as album',
    templateUrl: 'controllers/album/album.html',
    title: 'Album'
  });


  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
