(function(){
	'use strict'

	app.controller('MainController',MenuController);

	MenuController.$inject = ['$scope','$stateParams', 'Data'];

   
    function MenuController($scope,$stateParams,Data)
	{

       
     

        CargarInfo();

        

        $scope.popup_actualizar = function(item){
            $scope.item_motivo = item;
            $('#modal_update').modal('show');
        }

     

        $scope.quitar_pop = function(item){
            $scope.item_motivo = item;
            $('#remove_modal').modal('show');
        }
        
        $scope.agregar = function(){
            
            Data.get('motivos',{
                id: $('#item_motivo').val(),
                des_motivo: $('#item_des_motivo').val(),
                estado: $('#item_estado').val(),
                tipo: $('#item_tipo').val(),
                action: 'agregar'
            }).then(function(results){
                var obj ={
                    motivo: $('#item_motivo').val(),
                    des_motivo: $('#item_des_motivo').val(),
                    estado: $('#item_estado').val(),
                    tipo: $('#item_tipo').val()
                }
                $scope.tableResults.push(obj);

                $('#motivos').DataTable();

                $('#item_motivo').val("");
                $('#item_des_motivo').val("");
                $('#item_estado').val("");
                $('#item_tipo').val("");

             
            });
        }

       

        $scope.Actualizar = function(){
            
            Data.get('motivos',{
                id: $('#edit_item_motivo').val(),
                des_motivo: $('#edit_item_des_motivo').val(),
                estado: $('#edit_item_estado').val(),
                tipo: $('#edit_item_tipo').val(),
                action: 'actualizar'
            }).then(function(results){
               
                location.reload();
            });
        }

        $scope.deleteItem = function(){
            
            Data.get('motivos',{
                id: $scope.item_motivo.motivo,
                action: 'borrar'
            }).then(function(results){        
              
                location.reload();
            });
        }

        function CargarInfo(){
            Data.get('motivos',{
                id: -1,
                action: 'leer'
                
            }).then(function(results){
                              
                $scope.tableResults = results;
            });
        }
        

        setTimeout(function () {
            $(function () {
              $('#motivos').DataTable();
            });
          }, 500);


    }
    
})();