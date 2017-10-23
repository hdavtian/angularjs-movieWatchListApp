export default ['$http', function($http){
  this.getData = function(){
    return $http({
      method: 'get',
      url: 'data/movies.json'
    })
  }
}]
