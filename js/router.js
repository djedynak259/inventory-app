angular.module('App', [
  'ui.router'
])
.config(function($stateProvider) {
  $stateProvider.state({
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  })
  .state({
    name: 'about',
    url: '/about',
    template: '<h3><x></x>Its the UI-Router hello world app!</h3>'
  })
  .state({
    name: 'contact',
    controller: 'ContactController',
    url: '/contact?id&something&new',
    template: '<h3><x></x><button ui-sref="contact.create">Create</button>Its the UI-Router hello world app!<ui-view></ui-view></h3>'
  })
  .state({
    name: 'contact.create',
    url: '/create',
    template: '<h3>Nested Contact</h3>'
  });
})