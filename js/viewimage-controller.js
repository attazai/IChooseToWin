var mainapp = angular.module('ic2w', []);

mainapp.controller("ViewImageController", ['$scope', '$http', function ($scope, $http) {
    var _paramImageID = getParameterByName("imageid");

    console.log(_paramImageID);
    $scope.imageData = "";
    var reqs = {            
        method: 'POST',
        url: '/getImageData',
        headers: {                
            'Content-Type': 'application/json'            
        },
        data: {
            ImageId: _paramImageID
        }
    };
    $http(reqs)
        .success(function (res) {
            console.log(res);
            $scope.imageData = res.imageData;


        }).error(function (err, status) {
            alert("message:" + " " + err.message + "----" + err.hint);
        });

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }


}])
