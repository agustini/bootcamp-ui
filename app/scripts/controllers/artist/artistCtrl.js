function ArtistCtrl(Spotify, $stateParams) {
	'ngInject';

	// ViewModel
	const vm = this;

	vm.id = $stateParams.artistId;
	vm.albums = '';
	vm.tracks = '';
	vm.artist = '';

	vm.getArtist = function(){
		Spotify.getArtist(vm.id).then(function (data) {
			vm.artist = data;
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
	vm.getAlbums();
}

export default {
  name: 'ArtistCtrl',
  fn: ArtistCtrl
};
