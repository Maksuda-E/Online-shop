
//constructor for a storeItem objects
function MakeupstoreItem(Id, Name, Price, Qty, MaxQty, Category, Image, Shipping, Reviews, Description) {
	this.Id = Id;
	this.Name = Name;
	this.Price = Price;
	this.Qty = Qty;
	this.MaxQty = MaxQty;
	this.Category = Category;
	this.Image = Image;
	this.Shipping = Shipping;
	this.Reviews = Reviews;
	this.Description = Description;

}

//constructor for a cartItem objects
function CartItem(Id, Price, Qty, Shipping) {
	this.Id = Id;
	this.Price = Price;
	this.Qty = Qty;
	this.Shipping = Shipping;
}

//declared empty array for the store item objects and cart item objects
var storeItem = [];
var cartItem = [];


//this function will be called when page loads
initialFunction();

 /*
	 Name: initialFunction()
   Purpose: this function is used to display current datetime, populate the store items array with the store items objects
   and the displayStoreitems() and displaycartitems() function will be called inside this function
	*/
function initialFunction() {

	//date function to display current date
	var d = new Date();
	document.getElementById("date").innerHTML = "Date: " + d;

// populate the store items array with the 15 store items objects 
	storeItem.push(new MakeupstoreItem("BB001", "Fenity Beauty", 40, 20, 5, "Makeup", "images/lipstick1.jpg", 2, ["Good product", "Pretty cool"], "An ultra-slim lipstick with a long wearing, soft matte finish"))

	storeItem.push(new MakeupstoreItem("BB002", "Sephora Lipgloss", 35, 40, 5, "Makeup", "images/lipstick2.jpg", 2, ["Long lasting", "light-medium"], "A creamy, weightless liquid lip, full-coverage"))

	storeItem.push(new MakeupstoreItem("BB003", "Sephora Eyeliner", 25, 15, 5, "Makeup", "images/eyliner.jpg", 2, ["Good", "Runny eyeliner"], "An ultra-precise liquid eyeliner, long wearing"))

	storeItem.push(new MakeupstoreItem("BB004", "Lancome Mascara", 30, 25, 5, "Makeup", "images/mascara.jpg", 2, ["Very cool product", "Beautiful lashes"], "Volumizing, Lengthening"))

	storeItem.push(new MakeupstoreItem("BB005", "Jordana Shadow", 50, 32, 5, "Makeup", "images/shadows.jpg", 2, ["Love this product", "Not so good"], "A feline-inspired palette, high-pigment shadows"))

	storeItem.push(new MakeupstoreItem("BB006", "Kerastase Shampoo", 20, 50, 8, "Hair Product", "images/shampoo.jpg", 2.99, ["Good product", "Not so best"], "A fiber renewal shampoo for over-processed hair"))

	storeItem.push(new MakeupstoreItem("BB007", "Pantene Shampoo", 18, 30, 8, "Hair Product", "images/shampoo1.jpg", 2.99, ["It works for me", "Not worth the Money"], "An everyday shampoo for damaged hair"))

	storeItem.push(new MakeupstoreItem("BB008", "TRESemme Shampoo", 30, 15, 5, "Hair Product", "images/shampoo2.jpg", 1.99, ["Great for oily scalps", "Not worth the Money"], "An everyday shampoo for damaged hair"))

	storeItem.push(new MakeupstoreItem("BB009", "TRESemme Conditioner", 20, 25, 5, "Hair Product", "images/conditioner.jpg", 3.99, ["Amazing", "Preety much cool"], "An everyday conditioner for damaged hair"))

	storeItem.push(new MakeupstoreItem("BB010", "Pantene Conditioner", 22, 35, 4, "Hair Product", "images/conditioner1.jpg", 2, ["Great for color damaged hair", "Not bad"], "An everyday conditioner for damaged hair"))

	storeItem.push(new MakeupstoreItem("BB011", "Olay Face Cream", 45, 10, 4, "Skincare", "images/olay.jpg", 1.99, ["Love this item", "Good product"], "Day Cream"))

	storeItem.push(new MakeupstoreItem("BB012", "Olay Moisturizer", 42, 20, 4, "Skincare", "images/olay1.jpg", 2, ["Best moisturizer ever", "Left me with glowy skin"], "Moisturizer"))

	storeItem.push(new MakeupstoreItem("BB013", "Simple Facewash", 25, 17, 5, "Skincare", "images/image1.png", 2, ["Great hydrating moisturizer ", "Brightenning feeling"], "Moisturizer"))

	storeItem.push(new MakeupstoreItem("BB014", "Bio-Oil", 25.99, 18, 5, "Skincare", "images/image.jpg", 3.99, ["Lovely product for dry skin", "All over great"], "Skincare Oil"))

	storeItem.push(new MakeupstoreItem("BB015", "Neutrogena Face Wash", 19.99, 29, 5, "Skincare", "images/image2.jpg", 2.99, ["Good for sensitive skin", "Good price"], "Face Wash", ))

	displayStoreitems(storeItem); 

	displayCartitems(cartItem);
}


 /*
	Name: displayStoreitems()
	Purpose: this fucntion is used to display all the products of the store category wise
*/
function displayStoreitems(items) {
  
  //retrieve the value of all products
	var x = document.getElementById("displayProductFilter").value;

   //retrieve the div reference
	var theDiv = document.getElementById("divProducts");
	theDiv.innerHTML = ""; // Clear the div of any html elements in it
			 

 //create tbody
  var tbody = document.createElement("tbody");
  
  //create header row
	var headerRow = document.createElement("tr");

  //create header columns for the table
	var idTh = document.createElement("th");
  idTh.innerHTML = "ID";
  
  //style the color of the th
	idTh.style.backgroundColor = "#2F4F4F";
	idTh.style.color = "white";

	var nameTh = document.createElement("th");
	nameTh.innerHTML = "Name";
	nameTh.style.backgroundColor = "#2F4F4F";
	nameTh.style.color = "white";

	var priceTh = document.createElement("th");
	priceTh.innerHTML = "Price";
	priceTh.style.backgroundColor = "#2F4F4F";
	priceTh.style.color = "white";


	var qtyTh = document.createElement("th");
	qtyTh.innerHTML = "Quantity";
	qtyTh.style.backgroundColor = "#2F4F4F";
	qtyTh.style.color = "white";


	var maxTh = document.createElement("th");
	maxTh.innerHTML = "Maximum Quantity";
	maxTh.style.backgroundColor = "#2F4F4F";
	maxTh.style.color = "white";


	var ctgTh = document.createElement("th");
	ctgTh.innerHTML = "Category";
	ctgTh.style.backgroundColor = "#2F4F4F";
	ctgTh.style.color = "white";


	var imgTh = document.createElement("th");
	imgTh.innerHTML = "Image";
	imgTh.style.backgroundColor = "#2F4F4F";
	imgTh.style.color = "white";

 // append columns to the row
	headerRow.appendChild(idTh);
	headerRow.appendChild(nameTh);
	headerRow.appendChild(priceTh);
	headerRow.appendChild(qtyTh);
	headerRow.appendChild(maxTh);
	headerRow.appendChild(ctgTh);
	headerRow.appendChild(imgTh);

  // append row to the tbody
	tbody.appendChild(headerRow);

  //use if/else statement to filter the product category
	if (x == "All") {

    //use loop to display all the products
     // create table row for each item
		for (var index = 0; index < items.length; index++) {
      
      // create a row for the item
			var theRow = document.createElement("tr");

      // create columns for displaying product details
			var tempId = document.createElement("td")
			var tempName = document.createElement("td");
			var tempPrice = document.createElement("td");
			var tempQty = document.createElement("td");
			var tempMax = document.createElement("td");
			var tempCtg = document.createElement("td");
      var tempImg = document.createElement("td");
      
       // populate the cell with data
			tempId.innerHTML = items[index].Id;
			tempName.innerHTML = items[index].Name;
			tempPrice.innerHTML = converToCurrency(items[index].Price); //call converToCurrency() function to change currency
			tempQty.innerHTML = items[index].Qty;
			tempMax.innerHTML = items[index].MaxQty;
			tempCtg.innerHTML = items[index].Category;

			var img = document.createElement("img");
			img.src = items[index].Image;

			tempImg.appendChild(img);

       // append the cells to the row
			theRow.appendChild(tempId);
			theRow.appendChild(tempName);
			theRow.appendChild(tempPrice);
			theRow.appendChild(tempQty);
			theRow.appendChild(tempMax);
			theRow.appendChild(tempCtg);
			theRow.appendChild(tempImg);

      // append Row to the table body
      tbody.appendChild(theRow);

      //append tbody to the div
			document.getElementById("divProducts").appendChild(tbody); // display output of all products
    }
    
    /* when the product category is not set to "All", 
			 create A FilteredProduct variable and filter the product list on basis of category filter*/
	} else {
		var filteredProduct = items.filter(function (filterProduct) {
			return filterProduct.Category == x;
		});

   // once filtered, display the product items according to the category//
		for (var index = 0; index < filteredProduct.length; index++) {
			var theRow = document.createElement("tr");

			var tempId = document.createElement("td");
			var tempName = document.createElement("td");
			var tempPrice = document.createElement("td");
			var tempQty = document.createElement("td");
			var tempMax = document.createElement("td");
			var tempCtg = document.createElement("td");
			var tempImg = document.createElement("td");

			tempId.innerHTML = filteredProduct[index].Id;
			tempName.innerHTML = filteredProduct[index].Name;
			tempPrice.innerHTML = converToCurrency(filteredProduct[index].Price);
			tempQty.innerHTML = filteredProduct[index].Qty;
			tempMax.innerHTML = filteredProduct[index].MaxQty;
			tempCtg.innerHTML = filteredProduct[index].Category;
      var img = filteredProduct[index].Image;
      tempImg.innerHTML = `<img height="200px" src=${img}>`
			theRow.appendChild(tempId);
			theRow.appendChild(tempName);
			theRow.appendChild(tempPrice);
			theRow.appendChild(tempQty);
			theRow.appendChild(tempMax);
			theRow.appendChild(tempCtg);
			theRow.appendChild(tempImg);

			tbody.appendChild(theRow);

			document.getElementById("divProducts").appendChild(tbody); // display output of all products according to category
		}
	}
}

/*
	Name: displayCartitems()
  Purpose: this fucntion is used to display the cart items with id, price, quantity and subtotal according to the 
  selection of product id and quantity
*/
function displayCartitems(items) {

  //retrieve the div reference
	var theDiv = document.getElementById("divCart");
	theDiv.innerHTML = ""; // Clear the div of any html elements in it

  //create table
  var table = document.createElement("table");
  
  //create tbody
  var tbody = document.createElement("tbody");
  
  //create header row
	var headerRow = document.createElement("tr");

   //create header columns for the table 
	var idTh = document.createElement("th");
  idTh.innerHTML = "ID";
  
  //style the color of the th
	idTh.style.backgroundColor = "#2F4F4F";
	idTh.style.color = 'white';

	var priceTh = document.createElement("th");
	priceTh.innerHTML = "Price";
	priceTh.style.backgroundColor = "#2F4F4F";
	priceTh.style.color = 'white';

	var qtyTh = document.createElement("th");
	qtyTh.innerHTML = "Quantity";
	qtyTh.style.backgroundColor = "#2F4F4F";
	qtyTh.style.color = 'white';

	var shipTh = document.createElement("th");
	shipTh.innerHTML = "Subtotal";
	shipTh.style.backgroundColor = "#2F4F4F";
	shipTh.style.color = 'white';

  // append columns to the row
	headerRow.appendChild(idTh);
	headerRow.appendChild(priceTh);
	headerRow.appendChild(qtyTh);
	headerRow.appendChild(shipTh);

 // append row to the tbody
  tbody.appendChild(headerRow);
  
  // use if/else statement to calculate the cost of products according to the id and quantity
	if (items.length >= 1) {
		var itemSubtotal = 0; //declared variable for subtotal before tax and shipping cost
		var estimatedShipping = 0; //declared variable for the shipping cost
		var subtotal = 0; // declared variable for the total cost
    var tax = 0; //declared variable for the tax
    
    //use loop to create columns to display the product id, price, quantity, subtotal
		for (var index = 0; index < items.length; index++) {
      
      // create a row for the cart item
      var theRow = document.createElement("tr");

       // populate the cell with  data
			var tempId = document.createElement("td")
			var tempPrice = document.createElement("td");
			var tempQty = document.createElement("td");
			var tempship = document.createElement("td");

			tempId.innerHTML = items[index].Id;
			tempPrice.innerHTML = converToCurrency(items[index].Price); //call converToCurrency() function to change currency for the item's price
      tempQty.innerHTML = items[index].Qty;

      //call converToCurrency() function to change currency for the subtotal 
      //calculate subtotal according to the quantity and price
			tempship.innerHTML = converToCurrency(items[index].Qty * items[index].Price);

      // append the cells to the row
			theRow.appendChild(tempId);
			theRow.appendChild(tempPrice);
			theRow.appendChild(tempQty);
			theRow.appendChild(tempship);

      // append Row to the tbody
			tbody.appendChild(theRow);

      //calculate subtotal of selected items according to the price and quantity
      itemSubtotal = parseFloat(itemSubtotal + parseFloat(items[index].Qty * items[index].Price));
      
      //calculate shipping cost
      estimatedShipping = parseFloat(estimatedShipping + items[index].Shipping);
      
      //calculate total cost of item with shipping cost
      subtotal = parseFloat(itemSubtotal + estimatedShipping);
      
      //calcualte total cost including 13% tax
			tax = parseFloat(subtotal * 0.13);

      //create a row to display the cost of selected items
			var itemSubtotalRow = document.createElement("tr");

      //create column
      var itemSubtotalHead = document.createElement("td");
      
      //set 2 columns for the cells
      itemSubtotalHead.colSpan = 2;
      
      //style the table columns
      itemSubtotalHead.setAttribute('style', 'text-align :left; background-color: rgb(230, 235, 230);');
      
      //populate the cells with calculated data
      itemSubtotalHead.innerHTML = "Item Subtotal : ";
      
       // append the cell to the row
      itemSubtotalRow.appendChild(itemSubtotalHead);
      
			var itemSubtotalTD = document.createElement("td");
			itemSubtotalTD.setAttribute('style', 'background-color:rgb(230, 235, 230);');
			itemSubtotalTD.colSpan = 2;
			itemSubtotalTD.innerHTML = converToCurrency(itemSubtotal);
			itemSubtotalRow.appendChild(itemSubtotalTD);

			tbody.appendChild(itemSubtotalRow);

			var shippingRow = document.createElement("tr");
			var shippingHead = document.createElement("td");
			shippingHead.colSpan = 2;
			shippingHead.setAttribute('style', 'text-align :left;background-color: rgb(230, 235, 230);');
			shippingHead.innerHTML = "Estimated Shipping : ";
			shippingRow.appendChild(shippingHead);
			var shippingTD = document.createElement("td");
			shippingTD.setAttribute('style', 'background-color:rgb(230, 235, 230);');
			shippingTD.colSpan = 2;
			shippingTD.innerHTML = converToCurrency(estimatedShipping);
			shippingRow.appendChild(shippingTD);

			tbody.appendChild(shippingRow);


			var subTotalRow = document.createElement("tr");
			var subTotalHead = document.createElement("td");
			subTotalHead.colSpan = 2;
			subTotalHead.setAttribute('style', 'text-align :left;background-color: rgb(230, 235, 230);');
			subTotalHead.innerHTML = " <b> Subtotal : </b>";
			subTotalRow.appendChild(subTotalHead);
			var subTotalTD = document.createElement("td");
			subTotalTD.setAttribute('style', 'background-color:rgb(230, 235, 230);');
			subTotalTD.colSpan = 2;
			subTotalTD.innerHTML = converToCurrency(subtotal);
			subTotalRow.appendChild(subTotalTD);

			tbody.appendChild(subTotalRow);


			var taxRow = document.createElement("tr");
			var taxHead = document.createElement("td");
			taxHead.colSpan = 2;
			taxHead.setAttribute('style', 'text-align :left;background-color: rgb(230, 235, 230);');
			taxHead.innerHTML = "Estimated Tax : ";
			taxRow.appendChild(taxHead);
			var taxTD = document.createElement("td");
			taxTD.setAttribute('style', 'background-color:rgb(230, 235, 230);');
			taxTD.colSpan = 2;
			taxTD.innerHTML = converToCurrency(tax);
			taxRow.appendChild(taxTD);

			tbody.appendChild(taxRow);

			var orderTotalRow = document.createElement("tr");
			var orderTotalHead = document.createElement("td");
			orderTotalHead.colSpan = 2;
			orderTotalHead.setAttribute('style', 'text-align :left;background-color: rgb(230, 235, 230);');
			orderTotalHead.innerHTML = " <b> Order Total : </b>";
			orderTotalRow.appendChild(orderTotalHead);
			var orderTotalTD = document.createElement("td");
			orderTotalTD.setAttribute('style', 'background-color:rgb(230, 235, 230);');
			orderTotalTD.colSpan = 2;
			orderTotalTD.innerHTML = converToCurrency(parseFloat(subtotal + tax));
			orderTotalRow.appendChild(orderTotalTD);

			tbody.appendChild(orderTotalRow);
    }
    
    //if product id and quantity are not selected, user will get the following alert
	} else {
		var theRow = document.createElement("tr");
		var noItemRow = document.createElement("td");
		noItemRow.colSpan = 4;
		noItemRow.innerHTML = "No Item in the cart! Please Add Items to the cart!";
		theRow.appendChild(noItemRow);
		tbody.appendChild(theRow);
	}


	table.appendChild(tbody);
	document.getElementById("divCart").appendChild(table); //display output of the selected cart items

}

/*
	Name: addToCart()
  Purpose: this fucntion is used for adding items to cart using the add items button
*/
function addToCart() {

  //retrieve the div reference
  var productIdDIV = document.getElementById("productId");
  
  //retrieve the value of product id
  var productIdFromDiv = productIdDIV.value;
  
  //use selection statement to check the id and quantity is added or not according to the maximum quantity of items
  //used trim() to remove whitespace 
	if (productIdFromDiv && productIdFromDiv.trim()) {

		var productDetails = storeItem.filter(function (filterProduct) {
			return filterProduct.Id == productIdFromDiv;
    });
    
    //retrieve the value of the quantity of store items
		if (productDetails.length > 0) {
			var qtyDIV = document.getElementById("Qty");
			var qtyFromDIV = parseInt(qtyDIV.value);
     
			if (qtyFromDIV) {

        //if user selects negative number then the following alert will be showed
				if (qtyFromDIV < 0) {
					alert("Quantity Can not be Negative Number!");
          return;
          
          //when user selects items more than maximum quantity then the following alert will be showed
				} else {
					var newQuantity = productDetails[0].MaxQty - qtyFromDIV;
					if (qtyFromDIV <= productDetails[0].MaxQty) {
						if (newQuantity < 0) {
							alert("Customer can choose maximum " + productDetails[0].MaxQty + " items  for this product at a time");
							return;
            }
					} else {
						qtyDIV.value = productDetails[0].MaxQty;
						qtyFromDIV = productDetails[0].MaxQty;

					}
					var alreadyInCart = cartItem.filter(function (filterCart) {
						return filterCart.Id == productIdFromDiv;
					});
          var inCaseUpdateIsGreaterThanMaxQty = 0; 
          
          /*use selection statement to check if the item is already in the cart or not and modify the quantity 
          of the item instead of creating new cart item object */
					if (alreadyInCart.length > 0) {
						for (var i = 0; i < cartItem.length; i++) {
							if (cartItem[i].Id == productIdFromDiv) {
								inCaseUpdateIsGreaterThanMaxQty = parseInt(productDetails[0].MaxQty - cartItem[i].Qty);
								cartItem[i].Qty = parseInt(cartItem[i].Qty + qtyFromDIV);

								if (cartItem[i].Qty > productDetails[0].MaxQty) {
                  cartItem[i].Qty = productDetails[0].MaxQty;
                  
                  //call updateStoreItemQty() function to update the store items according to the items quantity
									updateStoreItemQty(productDetails[0].Id, inCaseUpdateIsGreaterThanMaxQty, true);
									alert("Customer can choose maximum " + productDetails[0].MaxQty + " items  for this product at a time");
                
                //modify cart items for the new selected items
								} else {
                  
									updateStoreItemQty(productDetails[0].Id, qtyFromDIV, true);
								}
								cartItem[i].Shipping = productDetails[0].Shipping; //retrive the value of shipping cost
								displayCartitems(cartItem); //call this function to display cart items after selection of id and quantity
								productIdDIV.value = "";
								qtyDIV.value = "";
								return;
							}
            }
            //modify and display the cart items for the selected items 
					} else {
						cartItem.push(new CartItem(productDetails[0].Id, productDetails[0].Price, qtyFromDIV, productDetails[0].Shipping));
						displayCartitems(cartItem);
						updateStoreItemQty(productDetails[0].Id, qtyFromDIV, true);
						productIdDIV.value = "";
						qtyDIV.value = "";
						return;
					}

        }
        //show the followig alert if user will not type the product quantity
			} else {
				alert("You Must Enter Product Quantity!")
				return;
			}

      //show the followig alert if user types wrong id
		} else {
			alert("No Product found in store with the ID : " + productIdFromDiv);
			return;
    }
    //show the followig alert if user will not type the id
	} else {
		alert("You Must Enter Product ID!");
		return;
	}
}


/*
	Name: displayItemdetails()
  Purpose: this fuunction is used to display individual item details by using display ietms button
*/
function displayItemdetails() {

  //retrieve the div reference
  var productIdDIV = document.getElementById("productId");
  
  //retrieve the value of product id
	var productIdFromDiv = productIdDIV.value;

	if (productIdFromDiv && productIdFromDiv.trim()) {
		var productDetails = storeItem.filter(function (filterProduct) {
			return filterProduct.Id == productIdFromDiv;
    });
    
    //use selection statement to display the item details according to the product id
		if (productDetails.length > 0) {
			var message = "Item Details: \n";
			message = message + "\n";
			message = message + "ID : " + productDetails[0].Id + "\n";
			message = message + "Product : " + productDetails[0].Name + "\n";
			message = message + "Price : " + converToCurrency(productDetails[0].Price) + "\n"; //call converToCurrency() function to display the price for changed currency
			message = message + "Quantity Available : " + productDetails[0].Qty + "\n";
      message = message + "Max per Customer : " + productDetails[0].MaxQty + "\n";
      
      //call converToCurrency() function to display the shipping charge for the changed currency
			message = message + "Cost Of Shipping : " + converToCurrency(productDetails[0].Shipping) + "\n";
			message = message + "\n";
			message = message + "Description : " + productDetails[0].Description + "\n";
			message = message + "\n";
            message = message + "Reviews : " + "\n";
      
      //used loop to display the reviews for each product 
			for (var i = 0; i < productDetails[0].Reviews.length; i++) {
				message = message + "  -" + productDetails[0].Reviews[i] + "\n";
			}

      alert(message);
      
      //if id is wrong or invalid then the following alert will be displayed
		} else {
			alert("No Product found in Store with the ID : " + productIdFromDiv);
			return;
		}

    //if user will not enter id then the following alert will be displayed
	} else {
		alert("You Must Enter Product ID!");
		return;
	}
}

/*
	Name: removefromCart()
  Purpose: this function is used to remove items from the cart
*/
function removefromCart() {

  //retrieve the div reference
  var productIdDIV = document.getElementById("productId");
  
  //retrieve the value of product id
	var productIdFromDiv = productIdDIV.value;
	if (productIdFromDiv && productIdFromDiv.trim()) {

		var cartItemDetails = cartItem.filter(function (filterProduct) {
			return filterProduct.Id == productIdFromDiv;
		});

     //retrieve the value of the quantity of store items
		if (cartItemDetails.length > 0) {
			var qtyDIV = document.getElementById("Qty");
			var qtyFromDIV = parseInt(qtyDIV.value);

      //if user selects negative number then the following alert will be showed
			if (qtyFromDIV) {
				if (qtyFromDIV < 0) {
					alert("Quantity Can not be Negative Number!");
          return;
          
          //remove items from the cart and update the quantity of items 
				} else {

					for (var i = 0; i < cartItem.length; i++) {
						if (cartItem[i].Id == productIdFromDiv) {
							if (cartItem[i].Qty > qtyFromDIV) {
								cartItem[i].Qty = parseInt(cartItem[i].Qty - qtyFromDIV);
								updateStoreItemQty(cartItem[i].Id, qtyFromDIV, false);

							} else {
								updateStoreItemQty(cartItem[i].Id, cartItem[i].Qty, false);
								cartItem.splice(i, 1);
							}
							displayCartitems(cartItem);
							productIdDIV.value = "";
							qtyDIV.value = "";
							return;
						}
					}
				}
			} else {
				alert("You Must Enter Product Quantity!")
				return;
			}

		} else {
			alert("No Product found in Cart with the ID : " + productIdFromDiv);
			return;
		}
	} else {
		alert("You Must Enter Product ID!");
		return;
	}
}


/*
	Name: converToCurrency()
  Purpose: this function is used to calculate the value of items price, shipping cost and subtotal according to the currency category
*/
function converToCurrency(amount) {

	if (amount) {

    //retrieve the value of the currency
		var currency = document.getElementById("currencySelector").value;

    //use selection statement to convert the currency for items price, shipping cost and subtotal  according to the selection
		if (currency === "cad") {
			return parseFloat(amount).toFixed(2) + "$(CAD)";
		} else if (currency === "usd") {
			amount = parseFloat(amount * 0.80);
			return amount.toFixed(2) + "$(USD)";
		} else if (currency === "eur") {
			amount = parseFloat(amount * 0.66);
			return amount.toFixed(2) + "€(EUR)";
		}
	}
}

/*
	Name: convertCurrencies()
  Purpose: this function is used to convert the currency for store and cart items price, shipping cost, tax and subtotal
*/
function convertCurrencies() {

  //retrieve the value of the currency
	var currency = document.getElementById("currencySelector").value;
  
  //update the value of price, shipping cost, tax and subtotal according to the currency type
  if (currency) {
		displayStoreitems(storeItem);
		displayCartitems(cartItem);
	}
}

/*
	Name: updateStoreItemQty()
  Purpose: this function is used to update the store items when user will add or remove items 
*/
function updateStoreItemQty(Id, reducedQty, addOrRemove) { 
  
  // true = Remove from Store, false =  Returned to Store 
	for (var i = 0; i < storeItem.length; i++) {
		if (storeItem[i].Id == Id) {
			if (addOrRemove == true) {
				storeItem[i].Qty = storeItem[i].Qty - reducedQty;
			} else if (addOrRemove == false) {
				storeItem[i].Qty = storeItem[i].Qty + reducedQty;
			}
			displayStoreitems(storeItem);
			return;
		}
	}


}


/*
	Name: reviewItem()
  Purpose: this function is used to submit the review for individual item using the submit review button
*/
function reviewItem() {

	var productIdDIV = document.getElementById("productIdReview");
	var productIdFromDiv = productIdDIV.value;
	if (productIdFromDiv && productIdFromDiv.trim()) {
		var productDetails = storeItem.filter(function (filterProduct) {
			return filterProduct.Id == productIdFromDiv;
    });
    
    //use selection statement to check the product details match with id or not
		if (productDetails.length > 0) {
			for (var i = 0; i < storeItem.length; i++) {

				if (storeItem[i].Id == productIdFromDiv) {
          //retrieve the div reference
          var reviewDiv = document.getElementById("review");
          
          //retrieve the value of review
          var reviewFromDiv = reviewDiv.value;
          
          //if user input id and review then review will be submitted 
					if (reviewFromDiv && reviewFromDiv.trim()) {
						storeItem[i].Reviews.push(reviewFromDiv);
						reviewDiv.value = "";
						productIdDIV.value = "";
						alert("Review for Product : " + productIdFromDiv + " has been added!");
                        return;
            
            //if user leave the review input field blank then the following alert will be displayed
					} else {
						alert("You Must Enter Review For this Product!");
						return;
					}

				}
      }
      
       //if user will type wrong id then the following alert will be displayed 
		} else {
			alert("No Product found in Store with the ID : " + productIdFromDiv);
			return;
    }
    //if user leave the id input field blank then the following alert will be displayed
	} else {
		alert("You Must Enter Product ID!");
		return;
	}
}