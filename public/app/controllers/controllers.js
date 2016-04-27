app.controller('AdicionarCtrl', function($scope, $location, $http)
{
   $scope.activetab = $location.path();
   $scope.usuario = [];

   // Adicionar usuario ao banco
   $scope.adicionar = function() {
       $scope.usuario.push({'name' : $scope.usuario.name, 'email': $scope.usuario.email});

       if($scope.verificaCamposPreenchidos($scope.usuario)) {
       $http.post('/crudTeste', $scope.usuario).success(function(response) {
       console.log("LOG: Usuario Adicionado.");
       Materialize.toast('Usuário adicionado com sucesso!', 4000);
       $scope.limparCampos();
     }).error(function () {
       console.log("LOG: Error ao tentar gravar no banco!");
       Materialize.toast('Ocorreu um erro!', 4000);
       });;
     } else {
       Materialize.toast('Favor preencher os campos corretamente!', 4000);
       }
   };


   $scope.verificaCamposPreenchidos = function(usuario){
     console.log("LOG: Verificando campos preenchidos.");
    var isExistente = true;

    if(usuario.name == "" || usuario.name == null) {
    isExistente = false;
    }

    if(usuario.name == "" || usuario.email == null) {
    isExistente = false;
    }

   return isExistente;
 };

 $scope.limparCampos = function(){
   $scope.usuario.name = null;
   $scope.usuario.email = null;
 };


});

app.controller('ListaCtrl', function($scope, $location, $http)
{
   $scope.activetab = $location.path();
   $scope.usuarios = [];

   $scope.init = function() {
   $http.get('/crudTeste').success (function(data){
     $scope.usuarios = data;
   }).error(function () {
     console.log("LOG: Usuário não encontrado.");
     alert("Usuário não existente. Tente Novamente!");
     });
 };
});

app.controller('SobreCtrl', function($scope, $location, $http)
{
   $scope.activetab = $location.path();
});
