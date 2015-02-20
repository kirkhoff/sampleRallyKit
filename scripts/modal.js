angular.module('sampleApp', ['ui.bootstrap'])
    .controller('modalCtrl', function ($scope, $modal) {
        $scope.openModal = function () {
            $modal.open({
                templateUrl: './templates/modal.html',
//                controller: 'UpgradeBrowserModalCtrl',
                windowClass: 'robo-modal'
            });
        };
    })