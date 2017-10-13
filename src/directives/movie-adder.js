export default function(){
  return {
    replace: true,
    template: `
      <div>
        <form>
          <label>Movie Name: </label>
          <input type="text" class="textbox" />
          <input type="submit" class="btn btn-primary" value="add" />
        </form>
      </div>
    `,
    link: function($scope, $element, $attrs){

      let form = $element.find('form');
      let submitBtn = $element.find('input.btn');

      form.on('submit', function(){
        let newMovieName = $element.find('input.textbox').val();

        // check for blank entries
        if(newMovieName.trim() === '') {
          alert('Please enter a name');
          return;
        };

        // without scope.apply our view will not update
        $scope.$apply(function(){
          $scope.movies.push({name: newMovieName});
          form[0].reset();
        });
      })
    }
  }
}
