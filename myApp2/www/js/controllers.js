angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicActionSheet, $ionicBackdrop, 
  $ionicLoading, $cordovaImagePicker, $cordovaFile,
   $cordovaLocalNotification,  $ionicPlatform) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // test
  // $scope.statu = "ready" ;
  //   $cordovaFile.checkDir("file:///data", "data")
  //     .then(function (success) {
  //       // success
  //       $scope.statu = "success";
  //       console.log(statu);
  //        alert(statu);

  //     }, function (error) {
  //       // error
  //       $scope.statu = "error";
  //       console.log(error);
  //     });
   

  // Form data for the login modal
  $scope.show = function() {
    $ionicLoading.show({
        templates: 'ionicLoading...',
        noBackdrop: true
    });
   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
    $ionicLoading.hide();
   }, 2000);

  };

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
   //image picker
  $scope.pickImage = function () {

      console.log("haha");

      var options = {
          maximumImagesCount: 1,
          width: 800,
          height: 800,
          quality: 80
      };

      $cordovaImagePicker.getPictures(options)
          .then(function (results) {
              console.log(results);
              $scope.imgSrc = results[0];
          }, function (error) {
              // error getting photos
          });

  }
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $cordovaImagePicker) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  $scope.pickImage = function () {
            console.log("haha");
            var options = {
                maximumImagesCount: 1,
                width: 800,
                height: 800,
                quality: 80
            };
            $cordovaImagePicker.getPictures(options)
                .then(function (results) {
                    console.log(results);
                    $scope.imgSrc = results[0];
                }, function (error) {
                    // error getting photos
                });
        };

})

.controller('PlaylistCtrl', function($scope, $stateParams, $ionicNavBarDelegate) {
  $ionicNavBarDelegate.showBar(false);
});
