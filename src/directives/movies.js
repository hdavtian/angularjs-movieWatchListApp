export default function(){
  return {
    replace: true,
    restrict: 'E',
    controller: function($scope, moviesService){

      // loadMovies is a reference to the moviesService loader
      $scope.loadMovies = function(){
        moviesService
          .getData()
          .then(function(response){
              $scope.movies = response.data
          });
      };

      // remove movie
      $scope.remove = function(movieName){
        for(var i=0, l=$scope.movies.length; i<l; i++){
          if ($scope.movies[i].name === movieName) {
            $scope.movies.splice(i, 1);
            return;
          }
        }
      };

      // load movies ...
      $scope.loadMovies();

    },
    template: `
      <div class="movie-list">
        <movie 
          ng-repeat='movie in movies'
          movie-obj='movie'
          name='{{movie.name}}' />
      </div>
      `
  }
}
