
angular
    .module('UsersApp.controller', [])
    .controller('HelloWorldCtrl', function ($scope, UserService) {
        
        $scope.usern = "Jorawar";
        $scope.firstName = "";
        $scope.tradeName = "";
        $scope.users = [];
        $scope.trades = [{ cn: "Gold" }, { cn: "Silver" }, { cn: "Iron" }, { cn: "Rice" }, { cn: "Water" }, { cn: "Dung" }]
        $scope.toggle = "";



        $scope.toggler = function () {
            console.log("toggler called")
            if ($scope.toggle === "false") $scope.toggle = "true"
            else { $scope.toggle = "false"; console.log("togelselelelelegler called") }
            console.log($scope.toggle)

        }

        UserService.getUsers().success(function (response) {
            $scope.users = response;

        });
        $scope.add = function () {
            let c = { cn: $scope.input }
            $scope.trades.push(c);
            $scope.input = '';
        };

        $scope.message = "";
        $scope.remove = function (index) {
            $scope.trades.splice(index, 1);
        };

        $scope.remove2 = function (index,id) {
            UserService.deleteUser(id);
            $scope.users.splice(index, 1);
          
        };


        $scope.postApi = function () {
            $scope.user1 = JSON.stringify({ "name": $scope.name, "email": $scope.email, "address": $scope.address })
            UserService.addUsers($scope.user1);
            $scope.users.push(JSON.parse($scope.user1))

            $scope.name="";
            $scope.email="";
            $scope.address="";
             



        }

    }



    )

