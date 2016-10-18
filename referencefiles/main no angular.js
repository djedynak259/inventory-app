var products = [
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

function listInventory(products) {
	for (var i = products.length - 1; i >= 0; i--) {
		var imageSrc = products[i].img;
		console.log(products[i])
		var imageDiv = document.createElement('div');
		var image = document.createElement('img');
		image.setAttribute('src', imageSrc);
		var name = document.createTextNode(products[i].name);
		var price = document.createTextNode(products[i].price);
		var li = document.createElement('li');
		image.setAttribute('class', 'productList');
		var list = document.getElementById('inventoryList');
		imageDiv.appendChild(image);
		li.appendChild(imageDiv);
		li.appendChild(name);
		li.appendChild(price);
		list.insertBefore(li, list.childNodes[0]);
	}
}

listInventory(products);