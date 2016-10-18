
angular.module("InventoryApp", [])

.controller('MainCtrl', function ($scope, ProductList) {
	$scope.tabName = "Products";

	$scope.productAdd = function () {
		ProductList.push($scope.newProd);
		$scope.newProd = {};
	};
})
	
.controller('ProductListCtrl', function($scope, ProductList, Headers){
	$scope.products = ProductList;
	$scope.header = Headers.productHeaders;

})

.controller('OrderListCtrl', function($scope, OrderList, Headers){
	$scope.orders = OrderList;
	$scope.header = Headers.orderHeaders;
	// $scope.view = function(item) {		
	// 	console.log(item);
	// }
})

.controller('ContactListCtrl', function($scope, ContactList, Headers){
	$scope.contacts = ContactList;
	$scope.header = Headers.contactHeaders;

})


// DIRECTIVES

.directive('columnHeaders', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=' 
    }, 
    template: "<div class='tableHeader row'><div class='col-xs-4'>{{ dataset.col_1 }}</div><div class='col-xs-4'>{{ dataset.col_2 }}</div><div class=' col-xs-4'>{{ dataset.col_3 }}</div></div>" 
	}; 
})

.directive('productLineItems', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=' 
    }, 
    // templateUrl: 'product-template.html'
    template: "<div class='tableLine row'><div class='col-xs-4'><img class='iconWrap' ng-src='{{ dataset.img }}'></div><p class='col-xs-4'>{{ dataset.name }}</p><p class=' col-xs-4'>{{ dataset.price | currency }}</p></div>" 
	}; 
})

.directive('orderLineItems', function() { 

	function controller($scope ) {
			$scope.view = function(item) {
			console.log(item);
		};
	}

  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=',
      view: '&' 
    }, 
    controller: controller,
    // templateUrl: 'product-template.html'
    template: "<div class='tableLine row' data-toggle='modal' data-target='#viewOrderModal' ng-click='view(dataset)'><p class='col-xs-4'>{{ dataset.number }}</p><p class='col-xs-4'>{{ dataset.contact }}</p><p class=' col-xs-4'>{{ dataset.price | currency }}</p></div>" +
    			"<div class='modal fade' id='viewOrderModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>" +
			  "<div class='modal-dialog' role='document'>" +
			    "<div class='modal-content'>" +
			      "<div class='modal-header'>" +
			        "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
			        "<h4 class='modal-title' id='myModalLabel'>Order</h4>" +
			      "</div>" +
				      "<div class='modal-body'>" +
				      "{{dataset}}"+
				      "</div>" +

				      "<div class='modal-footer'>" +
				        "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>" +
				      "</div>" +
			    "</div>" +
			  "</div>" +
			"</div>"
	}; 
})


.directive('contactLineItems', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=' 
    }, 
    // templateUrl: 'product-template.html'
    template: "<div class='tableLine row'><p class='col-xs-4'>{{ dataset.name }}</p><p class='col-xs-4'>{{ dataset.email }}</p><p class=' col-xs-4'>{{ dataset.address }}</p></div>" 
	}; 
})



// FACTORIES


.factory('ProductList', function(){
	return [
		{
			name: "box",
			price: 10,
			img: "img/box.png"
		},
		{
			name: "box2",
			price: 10,
			img: "img/box.png"
		},
		{
			name: "box3",
			price: 10,
			img: "img/box.png"
		}
	];
})

.factory('OrderList', function(){
	return [
		{
			number: "01",
			contact: "bill",
			price: 40
		},
		{
			number: "02",
			contact: "billll",
			price: 4004
		},
		{
			number: "03",
			contact: "billllll",
			price: 404
		}
	];
})

.factory('ContactList', function(){
	return [
		{
			name: "joe",
			email: 'some@thing.com',
			address: "589 Clementina Blvd"
		},
		{
			name: "joe2",
			email: 'some@thing.com',
			address: "589 Clementina Blvd"
		},
		{
			name: "jo3e",
			email: 'some@thing.com',
			address: "589 Clementina Blvd"
		}
	];
})

.factory('Headers', function(){
	var productHeaders = {
		col_1: "Image",
		col_2: "Name",
		col_3: "Price"
		};

	var contactHeaders= {
		col_1: "Name",
		col_2: "Email",
		col_3: "Address"
		};

	var orderHeaders={
		col_1: "Number",
		col_2: "Contact",
		col_3: "Price"
	};

	return {
			productHeaders: productHeaders,
			contactHeaders: contactHeaders,
			orderHeaders: orderHeaders
			};
		
	}					
)

;