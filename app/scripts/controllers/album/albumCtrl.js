function AlbumCtrl(Spotify, $stateParams) {
	'ngInject';

	// ViewModel
	const vm = this;

	vm.id = $stateParams.albumId;
	vm.album = '';
	vm.tracks = '';
	vm.artist = '';

	vm.getAlbum = function(){
		Spotify.getAlbum(vm.id).then(function (data) {
			vm.album = data;
			console.log(vm.album);
		});
	};

	vm.getAlbum();


	}

	/*Spotify.getAlbumTracks('6akEvsycLGftJxYudPjmqK').then(function (data) {
  console.log(data);
});*/


	/*vm.getArtist = function(){
		Spotify.getArtist(vm.id).then(function (data) {
			vm.artist = data;
			console.log(data);
		})
	};

	vm.getTracks = function(){
		Spotify.getArtistTopTracks(vm.id, 'AR').then(function (data) {
			vm.tracks = data.tracks;
		})
	};

	vm.getAlbums = function(){
		Spotify.getArtistAlbums(vm.id, { country: 'AR' }).then(function (data) {
			vm.albums = data.items;
		})
	};

	vm.getArtist();
	vm.getTracks();
	vm.getAlbums();*/


export default {
  name: 'AlbumCtrl',
  fn: AlbumCtrl
};
