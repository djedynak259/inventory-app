
angular.module("InventoryApp", [
	'ui.router'
])

.config(function($stateProvider) {
  $stateProvider.state({
    name: 'products',
    url: '/products',
    templateUrl: 'templates/products.html'
  })
  .state({
    name: 'orders',
    url: '/orders',
    templateUrl: 'templates/orders.html'
  })
  .state({
    name: 'contacts',
    // controller: 'ContactController',
    url: '/contact?id&something&new',
    templateUrl: 'templates/contacts.html'
  })
  .state({
    name: 'contact.create',
    url: '/create',
    template: '<h3>Nested Contact</h3>'
  })
})


.controller('MainCtrl', function ($scope, ProductList) {
	var database = firebase.database();
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
    templateUrl: "templates/column-headers.html"
	}; 
})

.directive('productLineItems', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=' 
    }, 
    templateUrl: 'templates/product-line-items.html'
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
    templateUrl: 'templates/order-line-items.html'
	}; 
})


.directive('contactLineItems', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=' 
    }, 
    templateUrl: 'templates/contact-line-items.html'
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