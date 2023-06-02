$(document).ready(function() {

  var apiBaseURL = 'https://api.themoviedb.org/3/';
  var apiKey = "2ec56988da89f63a91431a311d329aa7"

  var imageBaseUrl = 'https://image.tmdb.org/t/p/';

  const nowPlayingURL = apiBaseURL + 'movie/now_playing?api_key=' + apiKey;

  function getMoviesByGenre(genre_id) {
    const getMoviesByGenreURL = apiBaseURL + 'genre/' + genre_id + '/movies?api_key=' + apiKey + '&language=en-US&include_adult=false&sort_by=created_at.asc';

    $.getJSON(getMoviesByGenreURL, function(genreData) {
      for (let i = 0; i < genreData.results.length; i++) {
        var dataRes = genreData.results[i].id;
        var thisMovieUrl = apiBaseURL + 'movie/' + dataRes + '/videos?api_key=' + apiKey;

        $.getJSON(thisMovieUrl, function(movieKey) {
          var poster = imageBaseUrl + 'w300' + genreData.results[i].poster_path;
          var title = genreData.results[i].original_title;
          var releaseDate = genreData.results[i].release_date;
          var overview = genreData.results[i].overview;
          var voteAverage = genreData.results[i].vote_average;
          var youtubeKey = movieKey.results[0].key;
          var youtubeLink = 'https://www.youtube.com/watch?v=' + youtubeKey;
          var genreHTML = '';
          genreHTML += '<div class="col-sm-3 col-md-3 col-lg-3 eachMovie">';
          genreHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal' + i + '" data-whatever="@' + i + '">' + '<img src="' + poster + '"></button>';
          genreHTML += '<div class="modal fade" id="exampleModal' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
          genreHTML += '<div class="modal-dialog" role="document">';
          genreHTML += '<div class="modal-content col-sm-12 col-lg-12">';
          genreHTML += '<div class="col-sm-6 moviePosterInModal">';
          genreHTML += '<a href="' + youtubeLink + '"><img src="' + poster + '"></a>';
          genreHTML += '</div><br>'; //close trailerLink
          genreHTML += '<div class="col-sm-6 movieDetails">';
          genreHTML += '<div class="movieName">' + title + '</div><br>';
          genreHTML += '<div class="linkToTrailer"><a href="' + youtubeLink + '"><span class="glyphicon glyphicon-play"></span>&nbspPlay trailer</a>' + '</div><br>';
          genreHTML += '<div class="release">Release Date: ' + releaseDate + '</div><br>';
          genreHTML += '<div class="overview">' + overview + '</div><br>';
          genreHTML += '<div class="rating">Rating: ' + voteAverage + '/10</div><br>';
          genreHTML += '</div>'; 
          genreHTML += '</div>'; 
          genreHTML += '</div>'; 
          genreHTML += '</div>'; 
          genreHTML += '</div>'; 
          $('#genre-grid').append(genreHTML);
        })
      }
    })
  }

   $('#action').click(function() {
    $('#genre-grid').html('');
    getMoviesByGenre(28);
    $('#movieGenreLabel').html("Action");
  });
  $('#adventure').click(function() {
  	$('#genre-grid').html('');
    getMoviesByGenre(12);
    $('#movieGenreLabel').html("Adventure");
  });
  $('#animation').click(function() {
  	$('#genre-grid').html('');
    getMoviesByGenre(16);
    $('#movieGenreLabel').html("Animation");
  });
  $('#comedy').click(function() {
  	$('#genre-grid').html('');
    getMoviesByGenre(35);
    $('#movieGenreLabel').html("Comedy");
  });
  $('#drama').click(function() {
  	$('#genre-grid').html('');
    getMoviesByGenre(18);
    $('#movieGenreLabel').html("Drama");
  });
  $('#family').click(function() {
  	$('#genre-grid').html('');
    getMoviesByGenre(10751);
    $('#movieGenreLabel').html("Family");
  });
  $('#fantasy').click(function() {
  	$('#genre-grid').html('');
    getMoviesByGenre(14);
    $('#movieGenreLabel').html("Fantasy");
  });
  $('#horror').click(function() {
  	$('#genre-grid').html('');
    getMoviesByGenre(27);
    $('#movieGenreLabel').html("Horror");
  });
  $('#music').click(function() {
  	$('#genre-grid').html('');
    getMoviesByGenre(10402);
    $('#movieGenreLabel').html("Music");
  });
  $('#romance').click(function() {
  	$('#genre-grid').html('');
    getMoviesByGenre(10749);
    $('#movieGenreLabel').html("Romance");
  });
  $('#scifi').click(function() {
  	$('#genre-grid').html('');
    getMoviesByGenre(878);
    $('#movieGenreLabel').html("Science Fiction");
  });
  $('#thriller').click(function() {
  	$('#genre-grid').html('');
    getMoviesByGenre(53);
    $('#movieGenreLabel').html("Thriller");
  });
});