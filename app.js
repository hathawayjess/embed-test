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
  });
 