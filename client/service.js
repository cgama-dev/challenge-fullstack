(function () {
    'use strict';

    angular.module("app-challenge").service('ngMap', ngMap)

    function ngMap($q, $rootScope) {

        let autocomplete;

        this.init = function () {
            const options = {
                center: new google.maps.LatLng(-23.6265677, -46.6339294),
                zoom: 13,
                disableDefaultUI: true
            }
            this.map = new google.maps.Map(
                document.getElementById("map"), options
            );

            autocomplete = new google.maps.places.Autocomplete(
                document.getElementById('pac-input'), { types: ['geocode'] });

            autocomplete.setFields(['name']);

            autocomplete.addListener('place_changed', this.getAddressChange);

            this.places = new google.maps.places.PlacesService(this.map);
        }

        this.getAddressChange = function () {
            const place = autocomplete.getPlace();
            $rootScope.$emit('placeKey', place)
        }

        this.search = function (str) {
            const promisse = $q.defer();
            this.places.textSearch({ query: str }, function (results, status) {
                if (status == 'OK') {
                    promisse.resolve(results[0]);
                }
                else promisse.reject(status);
            });
            return promisse.promise;
        }

        this.addMarker = function (res) {
            if (this.marker) this.marker.setMap(null);
            this.marker = new google.maps.Marker({
                map: this.map,
                position: res.geometry.location,
                animation: google.maps.Animation.DROP
            });
            this.map.setCenter(res.geometry.location);
        }
    }

})()