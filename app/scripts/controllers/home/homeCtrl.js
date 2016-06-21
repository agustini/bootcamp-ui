function HomeCtrl(Spotify) {
	'ngInject';

	// ViewModel
	const vm = this;

	vm.isPlaying = false;
	vm.searchInput = '';
	vm.artists = '';
	vm.albums = '';
	vm.tracks = '';

	vm.search = function(searchInput) {
		Spotify.search(searchInput,'artist').then(function(data) {
			vm.artists = data.artists.items;
		});
		Spotify.search(searchInput,'album').then(function(data) {
			vm.albums = data.albums.items;
		});
		Spotify.search(searchInput,'track').then(function(data) {
			vm.tracks = data.tracks.items;
		});
	}

	vm.isPaused = function() {
		return !vm.isPlaying;
	}

	vm.play = function() {
		vm.audio.play();
		vm.isPlaying = true;
	}

	vm.pause = function() {
		vm.audio.pause();
		vm.isPlaying = false;
	}

	Spotify.getTrack('3iyjOwyySLRDEW2tqP7MhX').then(function(data) {
		vm.audio = new Audio(data.preview_url);
		vm.audio.volume = 0.1;
	});

}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
