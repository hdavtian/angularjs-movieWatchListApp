export default function($scope, moviesService){
  moviesService
    .getData()
      .then(function(response){
        $scope.movies = response.data
      });
}
