export default function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movieObj: '='
    },
    template: `
      <div class="row movie">
        <div class="col-xs-8">
          <span class="movie-name">{{movieObj.name}}</span>
        </div>
        <div class="col-xs-4">
          <span class='close-btn glyphicon glyphicon-remove' ng-click='$parent.remove(movieObj.name)'></span>
          <span class='close-btn glyphicon glyphicon-eye-close' ng-click='crossOut()'></span>
        </div>
      </div>`,
    link: function($scope, $element, $attrs){
      $scope.crossOut = function(){
        $element.toggleClass('crossed-out');
      };
    }
  }
}
