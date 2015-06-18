
  angular.module('revisionApp', ['eventModule', 'ngRoute', 'ngAnimate'])

  .config(['$routeProvider', function($routeProvider) {
    console.log('$routeProvider');
    $routeProvider.
      when('/', {
        templateUrl: 'revisionfilms.html',
        controller: 'HomeCtrl'
      }).
      when('/shortfilms', {
        templateUrl: 'shortfilms.html',
        controller: "ShortFilmsCtrl"
      }).
      when('/videoblog', {
        templateUrl: 'videoblog.html',
        controller: "VideoBlogCtrl"
      }).
      when('/staff', {
        templateUrl: 'staff.html',
        controller: 'StaffCtrl'
      }).
      when('/mission', {
        templateUrl: 'mission.html',
        controller: 'MissionCtrl'
      }).
      when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactCtrl'
      }).
      when('/posters', {
        templateUrl: 'posters.html',
        controller: 'PostersCtrl'
      }).
      when('/gallery', {
        templateUrl: 'gallery.html',
        controller: 'GalleryCtrl'
      }).
      when('/submitfilm', {
        templateUrl: 'submitfilm.html',
        controller: 'SubmitfilmCtrl'
      }).
      when('/auditions', {
        templateUrl: 'auditions.html'
      }).
      otherwise({redirectTo: '/'
      });


  }])
  .run([function() {
    console.log('run');
  }])
  .controller('HomeCtrl', ['$scope', function($scope) {

  }])
  .controller('ShortFilmsCtrl', ['$scope', function($scope) {

  }])
  .controller('VideoBlogCtrl', ['$scope', function($scope) {
    $scope.mainvideoblog = '';
   
  }])
  .controller('StaffCtrl', ['$scope', function($scope) {

  }])
  .controller('MissionCtrl', ['$scope', function($scope) {

  }])
  .controller('ContactCtrl', ['$scope', function($scope) {

  }])
  .controller('PostersCtrl', ['$scope', function($scope) {

  }])
  .controller('GalleryCtrl', ['$scope', function($scope) {
    $scope.images = [
      {project: 'August Woods', image: '105.jpg', year: '2013', names: 'Tanner Kyle', description: 'photo id'},
      {project: 'August Woods', image: '108.jpg', year: '2013', names: 'Carlos Kate', description: 'photo id'},
      {project: 'August Woods', image: '111.jpg', year: '2013', names: 'Jadon', description: 'photo id'},
      {project: 'August Woods', image: '119.jpg', year: '2013', names: 'Tanner Isabel', description: 'photo id'},
      {project: 'August Woods', image: '120.jpg', year: '2013', names: 'Carlos Austin Isabel Morgan Courtney', description: 'photo id'},
      {project: 'August Woods', image: '121.jpg', year: '2013', names: 'Ian', description: 'photo id'},
      {project: 'August Woods', image: '129.jpg', year: '2013', names: 'Courtney', description: 'photo id'},
      {project: 'August Woods', image: '131.jpg', year: '2013', names: 'Austin', description: 'photo id'},
      {project: 'August Woods', image: '133.jpg', year: '2013', names: 'Kennedy', description: 'photo id'},
      {project: 'August Woods', image: '134.jpg', year: '2013', names: 'Kellie Morgan Jordan', description: 'photo id'},
      {project: 'August Woods', image: '139.jpg', year: '2013', names: 'Carlos', description: 'photo id'},
      {project: 'August Woods', image: '140.jpg', year: '2013', names: 'Tami Kennedy', description: 'photo id'},
      {project: 'August Woods', image: '143.jpg', year: '2013', names: 'Fred', description: 'photo id'},
      {project: 'August Woods', image: '145.jpg', year: '2013', names: 'Isabel', description: 'photo id'},
      {project: 'August Woods', image: 'austin_camera_400.jpg', year: '2013', names: 'Chad Austin', description: 'photo id'},
      {project: 'August Woods', image: 'DSC00267_400.jpg', year: '2013', names: 'Cameron', description: 'photo id'},
      {project: 'August Woods', image: 'IMG_2836_400.jpg', year: '2013', names: 'Isabel Morgan Chad', description: 'photo id'},
      {project: 'August Woods', image: 'IMG_2993_400.jpg', year: '2013', names: 'Morgan Courtney', description: 'photo id'},
      {project: 'August Woods', image: 'IMG_3020_400.jpg', year: '2013', names: 'Tyler', description: 'photo id'},
      {project: 'August Woods', image: 'IMG_3050_400.jpg', year: '2013', names: 'Kennedy', description: 'photo id'},
      {project: 'August Woods', image: 'IMG_3164_400.jpg', year: '2013', names: 'Jordan', description: 'photo id'},
      {project: 'August Woods', image: 'IMG_3209_400.jpg', year: '2013', names: 'Kyle Tanner Tyler', description: 'photo id'},
      {project: 'August Woods', image: 'IMG_3220_400.jpg', year: '2013', names: 'Jadon', description: 'photo id'},
      {project: 'August Woods', image: 'IMG_3280_400.jpg', year: '2013', names: 'Kate', description: 'photo id'},
      {project: 'August Woods', image: 'IMG_4257_400.jpg', year: '2013', names: 'Neal Chad', description: 'photo id'},
      {project: 'August Woods', image: 'IMG_4283_400.jpg', year: '2013', names: 'Mike Reddinger', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01887_400.gif', year: '2013', names: 'Morgan Isabel Kennedy Courtney', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01888_400.gif', year: '2013', names: 'Carlos', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01889_400.gif', year: '2013', names: 'Tami', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01890_400.gif', year: '2013', names: 'Carlos Morgan Isabel Chad Austin', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01895_400.gif', year: '2013', names: 'Jadon', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01898_400.gif', year: '2013', names: 'Neal', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01906_400.gif', year: '2013', names: 'Kennedy', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01910_400.gif', year: '2013', names: 'Cameron', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01911_400.gif', year: '2013', names: 'Carlos Chad August', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01915_400.gif', year: '2013', names: 'Carlos', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01919_400.gif', year: '2013', names: 'Morgan', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01921_400.gif', year: '2013', names: 'Jodan', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01923_400.gif', year: '2013', names: 'Carlos Isabel Mike', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01932_400.gif', year: '2013', names: 'Carlos Isabel Mike', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01934_400.gif', year: '2013', names: 'Carlos Chad Austin Neal', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01940_400.gif', year: '2013', names: 'Cameron Chad Austin Jadon', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01942_400.gif', year: '2013', names: 'Cameron Chad Austin Jadon', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01947_400.gif', year: '2013', names: 'Kennedy', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01973_400.gif', year: '2013', names: 'Carlos Neal', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01983_400.gif', year: '2013', names: 'Carlos Kennedy', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01996_400.gif', year: '2013', names: 'Carlos', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01997_400.gif', year: '2013', names: 'Cameron', description: 'photo id'},
      {project: 'August Woods', image: 'DSC01999_400.gif', year: '2013', names: 'Carlos', description: 'photo id'},
      {project: 'August Woods', image: 'DSC02000_400.gif', year: '2013', names: 'Isabel', description: 'photo id'},
      {project: 'August Woods', image: 'DSC02002_400.gif', year: '2013', names: 'Morgan', description: 'photo id'},
      {project: 'August Woods', image: 'DSC02003_400.gif', year: '2013', names: 'Carlos Chad August Morgan Isabel', description: 'photo id'},
      {project: 'August Woods', image: 'DSC02007_400.gif', year: '2013', names: 'Courtney', description: 'photo id'},
      {project: 'August Woods', image: 'DSC02010_400.gif', year: '2013', names: 'Carlos Chad Austin Morgan Isabel', description: 'photo id'},
      {project: 'August Woods', image: 'DSC02018_400.gif', year: '2013', names: 'Carlos', description: 'photo id'},
      {project: 'August Woods', image: 'DSC02022_400.gif', year: '2013', names: 'Carlos Chad Austin', description: 'photo id'},
      {project: 'August Woods', image: 'DSC02025_400.gif', year: '2013', names: 'Carlos Tami Helena', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06222_400.gif', year: '2014', names: 'Isabel', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06224_400.gif', year: '2014', names: 'Isabel Tyler Chad Austin', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06309_400.gif', year: '2014', names: 'Morgan Tanner', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC062391_400.gif', year: '2014', names: 'Tyler Chad Austin Ashley', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06180_400.gif', year: '2014', names: 'Tyler', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06190_400.gif', year: '2014', names: 'Chad', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06192_400.gif', year: '2014', names: 'Tyler Chad Austin', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06193_400.gif', year: '2014', names: 'Chad Austin', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06195_400.gif', year: '2014', names: 'Ashley Morgan Sammie', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06205_400.gif', year: '2014', names: 'Morgan Madison', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06207_400.gif', year: '2014', names: 'Isabel', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06210_400.gif', year: '2014', names: 'Chad Ashley', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06214_400.gif', year: '2014', names: 'Tyler Tanner', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06247_400.gif', year: '2014', names: 'Isabel', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06228_400.gif', year: '2014', names: 'Isabel', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06218_400.gif', year: '2014', names: 'Tyler Tanner', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06220_400.gif', year: '2014', names: 'Tyler', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06215_400.gif', year: '2014', names: 'Ashley Morgan', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06223_400.gif', year: '2014', names: 'Ashley Morgan', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06225_400.gif', year: '2014', names: 'Chad Austin Isabel', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06226_400.gif', year: '2014', names: 'Tyler Chad Austin', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06234_400.gif', year: '2014', names: 'Tyler Chad Austin Ashley', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06236_400.gif', year: '2014', names: 'Tyler Chad Austin Ashley', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06249_400.gif', year: '2014', names: 'Isabel', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06250_400.gif', year: '2014', names: 'Tyler Chad', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06251_400.gif', year: '2014', names: 'Tyler Chad', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06255_400.gif', year: '2014', names: 'Chad Austin', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06259_400.gif', year: '2014', names: 'Madison Kennedy Chad', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06270_400.gif', year: '2014', names: 'Tyler Madison', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06275_400.gif', year: '2014', names: 'Cameron Chad Austin', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06278_400.gif', year: '2014', names: 'Tyler ', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06289_400.gif', year: '2014', names: 'Cameron Chad Austin', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06292_400.gif', year: '2014', names: 'Cameron Isabel', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06308_400.gif', year: '2014', names: 'Chad Austin Morgan', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06318_400.gif', year: '2014', names: 'Cameron Ashley Chad', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06339_400.gif', year: '2014', names: 'Tanner Morgan Chad Austin', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06257_400.gif', year: '2014', names: 'Morgan Ashley Madison', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06403_400.gif', year: '2014', names: 'Ashley', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06411_400.gif', year: '2014', names: 'Ashley Morgan', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06427_400.gif', year: '2014', names: 'Madison', description: 'photo id'},
      {project: '23:56:04:09', image: 'DSC06449_400.gif', year: '2014', names: 'Ashley', description: 'photo id'},
      {project: 'Sailing', image: 'DSC08975_400.gif', year: '2013', names: '', description: 'photo id'},
      {project: 'Sailing', image: 'DSC08977_400.gif', year: '2013', names: 'Morgan Ian', description: 'photo id'},
      {project: 'Sailing', image: 'DSC08979_400.gif', year: '2013', names: 'Kyle', description: 'photo id'},
      {project: 'Sailing', image: 'DSC08980_400.gif', year: '2013', names: 'Jadon Logan', description: 'photo id'},
      {project: 'Sailing', image: 'DSC08981_400.gif', year: '2013', names: 'Morgan Jordan', description: 'photo id'},
      {project: 'Sailing', image: 'DSC08982_400.gif', year: '2013', names: 'Tyler logan', description: 'photo id'},
      {project: 'Sailing', image: 'DSC08984_400.gif', year: '2013', names: 'Tami', description: 'photo id'},
      {project: 'Sailing', image: 'DSC08986_400.gif', year: '2013', names: 'Tyler', description: 'photo id'},
      {project: 'Sailing', image: 'DSC08987_400.gif', year: '2013', names: 'Morgan Ian Steven', description: 'photo id'},
      {project: 'Sailing', image: 'DSC08990_400.gif', year: '2013', names: 'Kyle', description: 'photo id'},
      {project: 'Sailing', image: 'DSC09020_400.gif', year: '2013', names: 'Chad', description: 'photo id'},
      {project: 'Sailing', image: 'DSC09022_400.gif', year: '2013', names: 'Jordan', description: 'photo id'},
      {project: 'Sailing', image: 'DSC09027_400.gif', year: '2013', names: 'Morgan Chad Austin Tyler', description: 'photo id'},
      {project: 'Sailing', image: 'DSC09044_400.gif', year: '2013', names: 'Chad Austin Tanner', description: 'photo id'},
      {project: 'Sailing', image: 'DSC09049_400.gif', year: '2013', names: 'Tami', description: 'photo id'},
      {project: 'Sailing', image: 'DSC09056_400.gif', year: '2013', names: 'Chad Austin', description: 'photo id'},
      {project: 'Sailing', image: 'DSC09057_400.gif', year: '2013', names: 'Ian', description: 'photo id'},
      {project: 'Sailing', image: 'DSC09061_400.gif', year: '2013', names: 'Kyle', description: 'photo id'},
      {project: 'Sailing', image: 'DSC09083_400.gif', year: '2013', names: 'Jadon', description: 'photo id'},
      {project: 'Sailing', image: 'DSC09086_400.gif', year: '2013', names: 'Morgan', description: 'photo id'},
      {project: 'Sailing', image: 'DSC09087_400.gif', year: '2013', names: 'Ian', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01163_400.gif', year: '2014', names: 'Morgan Hiedi', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01164_400.gif', year: '2014', names: 'David Chad Austin', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01167_400.gif', year: '2014', names: 'Ian Chad', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01172_400.gif', year: '2014', names: 'Morgan', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01174_400.gif', year: '2014', names: 'Madison ', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01189_400.gif', year: '2014', names: 'Morgan', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01191_400.gif', year: '2014', names: 'Morgan', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01195_400.gif', year: '2014', names: 'Tyler Chad Austin', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01208_400.gif', year: '2014', names: 'Madison', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01216_400.gif', year: '2014', names: 'Isabel', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01218_400.gif', year: '2014', names: 'Morgan Chad Austin', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01220_400.gif', year: '2014', names: 'Morgan Tyler', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01221_400.gif', year: '2014', names: 'Chad Austin Tyler', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01224_400.gif', year: '2014', names: 'Courtney Hiedi', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01230_400.gif', year: '2014', names: 'David', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01232_400.gif', year: '2014', names: 'Ashley Kennedy', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01235_400.gif', year: '2014', names: 'Ian Chad Austin', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01236_400.gif', year: '2014', names: 'Ian Chad Austin', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01244_400.gif', year: '2014', names: 'Morgan', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01246_400.gif', year: '2014', names: 'Chad Austin', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01250_400.gif', year: '2014', names: '', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01264_400.gif', year: '2014', names: 'Chad Austin', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01266_400.gif', year: '2014', names: 'Ian Chad Austin', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01276_400.gif', year: '2014', names: 'Ashley', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01278_400.gif', year: '2014', names: 'Ashley Morgan Tyler', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01280_400.gif', year: '2014', names: '', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01281_400.gif', year: '2014', names: 'Ashley Chad Austin Ian', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01282_400.gif', year: '2014', names: 'Ashley Morgan', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01284_400.gif', year: '2014', names: 'Kennedy Tyler', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01286_400.gif', year: '2014', names: 'Chad Austin', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01292_400.gif', year: '2014', names: 'Ashley Tyler', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01294_400.gif', year: '2014', names: 'Ian Chad Austin', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01298_400.gif', year: '2014', names: 'Ian Chad Austin', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01300_400.gif', year: '2014', names: 'Ashley Morgan', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01307_400.gif', year: '2014', names: 'Isabel', description: 'photo id'},
      {project: 'Swimming Dead', image: 'DSC01311_400.gif', year: '2014', names: 'Ashley Morgan', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03584.gif', year: '2015', names: 'Carlos Isabel ', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03665.gif', year: '2015', names: 'Ian', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03449.gif', year: '2015', names: 'Mark Chad Austin Heidi Morgan', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03434.gif', year: '2015', names: 'Carlos', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03444.gif', year: '2015', names: 'Chad Austin Morgan Heidi', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03446.gif', year: '2015', names: 'Krysta', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03491.gif', year: '2015', names: 'Chad Jared', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03459.gif', year: '2015', names: 'Ian', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03481.gif', year: '2015', names: 'Morgan Heidi Chad', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03504.gif', year: '2015', names: 'Ezra Isabel', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03514.gif', year: '2015', names: 'Cameron Tanner', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03516.gif', year: '2015', names: 'Cameron', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03510.gif', year: '2015', names: 'Jadon', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03513.gif', year: '2015', names: 'Ezra Isabel Heidi', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03521.gif', year: '2015', names: 'Chad Austin Carlos', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03532.gif', year: '2015', names: 'Mark', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03554.gif', year: '2015', names: 'Mark Chad Austin', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03563.gif', year: '2015', names: 'Chad', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03568.gif', year: '2015', names: 'Jared Luke', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03582.gif', year: '2015', names: 'Jadon Cameron', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03592.gif', year: '2015', names: 'Luke', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03605.gif', year: '2015', names: 'Jadon', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03619.gif', year: '2015', names: 'Morgan', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03681.gif', year: '2015', names: 'Krysta Luke', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03689.gif', year: '2015', names: 'Ezra', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03698.gif', year: '2015', names: 'Heidi', description: 'photo id'},
      {project: 'Sword Fighting', image: 'DSC03559.gif', year: '2015', names: 'Cameron', description: 'photo id'}

    ];
    $scope.title = "gallery";
  }])


  /*.directive('video1', function()
  {
    return {
      restrict: 'E',
      transclude: true,
      template: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CgOR52lFsMA?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
    }
  });*/














  /*app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.youtube.com/**'
    ]);
  });

  app.controller('RevisionController', ['$scope', function MyCtrl($scope) {
    $scope.product = [
      {
        name: 'Commercial',
        date: '2014',
        director: 'Chad Austin Kerr',
        media: [{ src: 'rZmHRq5u2wU' }]
      },
      {
        name: 'Magic',
        date: '2014',
        director: 'Ian Schank',
        media: [{ src: 'k2Nx22D8Fww'}]
      },
      {
        name: '23:56:09:04',
        date: '2014',
        director: 'Chad Austin Kerr',
        media: [{ src: 'PBOmMX5kpBo'}]
      },
      {
        name: 'August Woods',
        date: '2013',
        director: 'Carlos Gonzalez',
        media: [{ src: 'CgOR52lFsMA'}]
      }

    ];

    $scope.getIframeSrc = function(src) {
      return 'https://www.youtube.com/embed/' + src;
    };

  }]);*/
