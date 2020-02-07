(function () {

    'use strict';

    angular.module("app-challenge", [])

    angular.module("app-challenge").controller("appChanllengeController", appChanllengeController)

    function appChanllengeController($scope, $rootScope, ngMap) {

        const vm = this;

        vm.delivery = {}

        vm.init = function () {
            $rootScope.$on("placeKey", function (event, data) {
                vm.searchPlace = data.name
            })
            vm.nome = "Cleyton Gama"
        }

        vm.search = function () {
            $scope.apiError = false;
            ngMap.search(vm.searchPlace)
                .then(
                    function (res) { // success
                        vm.delivery.client = res.name;
                        vm.delivery.lat = res.geometry.location.lat();
                        vm.delivery.lng = res.geometry.location.lng();

                        console.log(vm.delivery)

                        ngMap.addMarker(res);
                    },
                    function (status) { // error
                        $scope.apiError = true;
                        $scope.apiStatus = status;
                    }
                );
        }

        vm.saveClient = function () {
            console.log(vm.delivery)
        }

        ngMap.init();
    }
})()

