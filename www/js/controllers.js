angular.module('starter.controllers', [

])

.controller('LoginCtrl', function($scope) {
$scope.email= '';
$scope.senha= '';

$scope.fazerLogin = function(email, senha) {
  alert(email + senha);
 }

 $scope.novoCadastro= function(email, senha){
   alert(email+ ' - ' + senha);
 }
})

.controller('TarefasCtrl', function($scope) {
  $scope.tarefas = [
  {
    nome: 'Pamella'
  }, 
  {
    nome: 'Pamella'
  },
  {
    nome: 'Pamella'
  }
];
})

