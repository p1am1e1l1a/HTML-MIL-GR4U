angular.module('starter.controllers', [

])

.controller('LoginCtrl', function($scope, Login) {
$scope.email= '';
$scope.senha= '';

$scope.fazerLogin = function(email, senha) {
  alert(email + senha);
 }

 $scope.novoCadastro= function(email, senha) {
  Login.novo(email, senha, function(error) {
    alert(erro);
  });
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

