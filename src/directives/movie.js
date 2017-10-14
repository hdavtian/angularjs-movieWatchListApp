export default function(){
  return {
    scope: {
      movieObj: '='
    },
    restrict: 'E',
    replace: true,
    template: `
      <div class="row movie">
        <div class="col-xs-8">
          <span class="movie-name">{{movieObj.name}}</span>
        </div>
        <div class="col-xs-4">
          <span class='close-btn glyphicon glyphicon-remove' ng-click='remove()'></span>
          <span class='close-btn glyphicon glyphicon-eye-close' ng-click='crossOut()'></span>
        </div>
      </div>
    `,
    link: function($scope, $element, $attrs){
      let movies = $scope.$parent.movies;

      $scope.remove = function(){
        for(var i=0, l=movies.length; i<l; i++){
          if (movies[i].name === $attrs.name) {
            movies.splice(i, 1);
            return;
          }
        }
      };

      $scope.crossOut = function(){
        $element.toggleClass('crossed-out');
      };

    }
  }
}
