export default function($scope, moviesService, $rootScope){

    $rootScope.loadMovies = function(){
      moviesService
        .getData()
          .then(function(response){
            $scope.movies = response.data
          });
    }

    $rootScope.loadMovies();
}
