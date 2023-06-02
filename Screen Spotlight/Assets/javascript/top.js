$(document).ready(function() {

	var apiBaseURL = 'https://api.themoviedb.org/3/';
  	var apiKey = "2ec56988da89f63a91431a311d329aa7"
  	var imageBaseUrl = 'https://image.tmdb.org/t/p/';
	const topUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=2ec56988da89f63a91431a311d329aa7&language=en-US&page=1';

	function getTopData() {
    $.getJSON(topUrl, function(topData) {
      for (let i = 0; i < topData.results.length; i++) {
        var dataRes = topData.results[i].id;
        var thisMovieUrl = apiBaseURL + 'movie/' + dataRes + '/videos?api_key=' + apiKey;

        $.getJSON(thisMovieUrl, function(movieKey) {
          var poster = imageBaseUrl + 'w300' + topData.results[i].poster_path;

          var title = topData.results[i].original_title;

          var releaseDate = topData.results[i].release_date;

          var overview = topData.results[i].overview;

          var voteAverage = topData.results[i].vote_average;

          var youtubeKey = movieKey.results[0].key;

          var youtubeLink = 'https://www.youtube.com/watch?v=' + youtubeKey;
          var nowPlayingHTML = '';
          nowPlayingHTML += '<div class="col-sm-3 eachMovie">';
          nowPlayingHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal' + i + '" data-whatever="@' + i + '">' + '<img src="' + poster + '"></button>';
          nowPlayingHTML += '<div class="modal fade" id="exampleModal' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
          nowPlayingHTML += '<div class="modal-dialog" role="document">';
          nowPlayingHTML += '<div class="modal-content col-sm-12">';
          nowPlayingHTML += '<div class="col-sm-6 moviePosterInModal">';
          nowPlayingHTML += '<a href="' + youtubeLink + '"><img src="' + poster + '"></a>';
          nowPlayingHTML += '</div><br>'; //close trailerLink
          nowPlayingHTML += '<div class="col-sm-6 movieDetails">';
          nowPlayingHTML += '<div class="movieName">' + title + '</div><br>';
          nowPlayingHTML += '<div class="linkToTrailer"><a href="' + youtubeLink + '"><span class="glyphicon glyphicon-play"></span>&nbspPlay trailer</a>' + '</div><br>';
          nowPlayingHTML += '<div class="release">Release Date: ' + releaseDate + '</div><br>';
          nowPlayingHTML += '<div class="overview">' + overview + '</div><br>';
          nowPlayingHTML += '<div class="rating">Rating: ' + voteAverage + '/10</div><br>';
          nowPlayingHTML += '</div>'; 
          nowPlayingHTML += '</div>'; 
          nowPlayingHTML += '</div>'; 
          nowPlayingHTML += '</div>'; 
          nowPlayingHTML += '</div>'; 
          $('#movie-grid').append(nowPlayingHTML);
          $('#movieGenreLabel').html("Top Rated Movies");
        })
      }
    })
  }

  getTopData();
});