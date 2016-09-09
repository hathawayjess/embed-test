angular.module('embed', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('single',{
    url:'/',
    templateUrl: "./templates/single.html"
  })
  .state('multiple', {
  	url:'/multiple',
  	templateUrl: "./templates/multiple.html"
  })
  .state('video', {
  	url:'/video',
  	templateUrl: "./templates/video.html"
  })
  .state('audio', {
  	url:'/audio',
  	templateUrl: "./templates/audio.html"
  })
  .state('pdf', {
  	url:'/pdf',
  	templateUrl: "./templates/pdf.html"
  })
  .state('small', {
    url:'/small',
    templateUrl: "./templates/small.html"
  })
  .state('overlap', {
    url:'/overlap',
    templateUrl: "./templates/overlap.html"
  })
  .state('collection', {
    url:'/collection',
    templateUrl: "./templates/collection.html"
  })
  .state('test-single',{
    url:'/test-single',
    templateUrl: "./templates/test/test-single.html"
  })
  .state('test-multiple', {
    url:'/test-multiple',
    templateUrl: "./templates/test/test-multiple.html"
  })
  .state('test-video', {
    url:'/test-video',
    templateUrl: "./templates/test/test-video.html"
  })
  .state('test-audio', {
    url:'/test-audio',
    templateUrl: "./templates/test/test-audio.html"
  })
  .state('test-pdf', {
    url:'/test-pdf',
    templateUrl: "./templates/test/test-pdf.html"
  })
  .state('test-small', {
    url:'/test-small',
    templateUrl: "./templates/test/test-small.html"
  })
  .state('test-overlap', {
    url:'/test-overlap',
    templateUrl: "./templates/test/test-overlap.html"
  })
  .state('test-collection', {
    url:'/test-collection',
    templateUrl: "./templates/test/test-collection.html"
  })

  $urlRouterProvider
  .otherwise('/');
})

.directive('script', function() {
    return {
      restrict: 'E',
      scope: false,
      link: function(scope, elem, attr) 
      {
        if (attr.type==='text/javascript-lazy') 
        {
          var s = document.createElement("script");
          s.type = "text/javascript";                
          var src = elem.attr('src');
          if(src!==undefined)
          {
              s.src = src;
          }
          else
          {
              var code = elem.text();
              s.text = code;
          }
          document.head.appendChild(s);
          elem.remove();
        }
      }
    };
  })

