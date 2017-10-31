export default function(){
  return {
    replace: true,
    template: `
      <div class="movie-adder-container">
        <form>
          <input type="text" class="textbox-movie" placeholder="Type a movie name" />
          <input type="submit" class="btn btn-primary" value="Add movie" />
        </form>

        <div class="load-json" ng-click='loadMovies()'>
          <span class='glyphicon glyphicon-import'></span>
          <span>Re-load movie list</span>
        </div>

      </div>`,
    link: function($scope, $element, $attrs){

      let form = $element.find('form');

      form.on('submit', function(){

        let newMovieName = $element.find('input.textbox-movie').val();

        // check for blank entries
        if(newMovieName.trim() === '') {
          alert('Please enter a name');
          return;
        };

        //without scope.apply our view will not update
        $scope.$apply(function(){
          $scope.movies.push({name: newMovieName});
          form[0].reset();
        });
      })
    }
  }
}
