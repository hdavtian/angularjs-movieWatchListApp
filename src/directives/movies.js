//app.directive('name', function(){
export default function(moviesService){
  return {
    link: function($scope, $element, $attrs){
      moviesService
        .getData()
          .then(function(response){
            $scope.movies = response.data
          })
    },
    template: `
      <ul>
        <li ng-repeat="movie in movies">{{movie.name}}</li>
      </ul>
    `
  }
}
