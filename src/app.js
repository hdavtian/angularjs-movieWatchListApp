import angular from 'angular';
import defaultCtrl  from './controllers/default-ctrl';
import movies       from './directives/movies';
import moviesService from './services/moviesService';

const myApp = angular.module('app', [])
  .service('moviesService', moviesService)
  .directive('movies', movies)
  .controller('ctrl', defaultCtrl);
