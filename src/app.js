import angular from 'angular';
import $ from 'jquery';
import defaultCtrl  from './controllers/default-ctrl';
import movies       from './directives/movies';
import movie        from './directives/movie';
import moviesService from './services/moviesService';
import movieAdder from './directives/movie-adder';

// Styles -----------------------------------
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// custom
import './css/style.scss';

const myApp = angular.module('app', [])
  .service('moviesService', moviesService)
  .directive('movies', movies)
  .directive('movie', movie)
  .directive('movieAdder', movieAdder)
  .controller('ctrl', defaultCtrl);
