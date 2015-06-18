(function() {
angular.module('eventModule', [])
  .config([function() {
    console.log('Event Module: Config');
  }])
  .run([function() {
    console.log('Event Module: Run');
  }])
  .controller('NavController', ['$scope', '$location', function($scope, $location) {
    $scope.title = "Revision Films";
    $scope.menu=[
      {
        name: "Home",
        href: "index.html"
      },
      {
        name: "Short Films",
        href: "shortfilms.html"
      },
      {
        name: "Video Blog",
        href: "videoblog.html"
      },
      {
        name: "Staff",
        href: "staff.html"
      },
      {
        name: "Mission",
        href: "mission.html"
      },
      {
        name: "Contact",
        href: "contact.html"
      },
      {
        name: "Posters",
        href: "posters.html"
      },
      {
        name: "Gallery",
        href: "gallery.html"
      },
      {
        name: "Submit your Film",
        href: "submitfilm.html"
      },
      {
        name: "2015 Auditions",
        href: "auditions.html"
      }

    ]

    $scope.index = 0;
    $scope.setIndex = function(val) {
      $scope.index = parseInt(val);
      if($scope.index==0)
      {
        $location.path('revisionfilms')
      }
      if($scope.index==1)
      {
        $location.path('shortfilms')
      }
      if($scope.index==2)
      {
        $location.path('videoblog')
      }
      if($scope.index==3)
      {
        $location.path('staff')
      }
      if($scope.index==4)
      {
        $location.path('mission')
      }
      if($scope.index==5)
      {
        $location.path('contact')
      }
      if($scope.index==6)
      {
        $location.path('posters')
      }
      if($scope.index==7)
      {
        $location.path('gallery')
      }
      if($scope.index==8)
      {
        $location.path('submitfilm')
      }
      if($scope.index==9)
      {
        $location.path('auditions')
      }
    }

    $scope.getIndex = function() {
      return($scope.index);
    };
  }])
  .controller('MainVideoCtrl', ['$scope', function($scope) {
    $scope.mainVideo = ''; /*video id # */
  }])
  .controller('FunStuff', [ function() {
    this.title = "Fun Stuff";
    this.tab = 0;
    this.setTab = function(val)
    {
      this.tab = val;
    }
    this.getTab = function(val)
    {
      return(this.tab);
    };
    this.images = [
      {project: 'August Woods', image: '105.jpg', date: '2014', names: 'Tanner Kyle', description: 'photo id'},
      {project: 'August Woods', image: '108.jpg', date: '2014', names: 'Carlos Kate', description: 'photo id'},
      {project: 'August Woods', image: '111.jpg', date: '2014', names: 'Jadon', description: 'photo id'},
      {project: 'August Woods', image: '119.jpg', date: '2014', names: 'Tanner Isabel', description: 'photo id'},
      {project: 'August Woods', image: '120.jpg', date: '2014', names: 'Carlos Austin Isabel Morgan Courtney', description: 'photo id'},
      {project: 'August Woods', image: '121.jpg', date: '2014', names: 'Ian', description: 'photo id'},
      {project: 'August Woods', image: '129.jpg', date: '2014', names: 'Courtney', description: 'photo id'},
      {project: 'August Woods', image: '131.jpg', date: '2014', names: 'Austin', description: 'photo id'},
      {project: 'August Woods', image: '133.jpg', date: '2014', names: 'Kennedy', description: 'photo id'},
      {project: 'August Woods', image: '134.jpg', date: '2014', names: 'Kellie Morgan Jordan', description: 'photo id'},
      {project: 'August Woods', image: '139.jpg', date: '2014', names: 'Carlos', description: 'photo id'},
      {project: 'August Woods', image: '140.jpg', date: '2014', names: 'Tami Kennedy', description: 'photo id'},
      {project: 'August Woods', image: '143.jpg', date: '2014', names: 'Fred', description: 'photo id'},
      {project: 'August Woods', image: '145.jpg', date: '2014', names: 'Isabel', description: 'photo id'}
    ]
  }])


})();
