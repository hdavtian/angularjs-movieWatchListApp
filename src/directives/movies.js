export default function(){
  return {
    replace: true,
    restrict: 'E',
    template: `
        <div class="movie-list">
          <movie ng-repeat='movie in movies' movie-obj='movie' name='{{movie.name}}'></movie>
        </div>
      `
  }
}
