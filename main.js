/* 
Name:: Sahil Sutariya
Student Number:: 200446745
@JavaScript 
*/

// Assignment 1

//Creating Object Literal
let coffee = {
	//populating object literal by using prompt
	name: prompt("Enter your name:: "),
	drinkType: prompt("Which drink type do you prefer(Latte/Coffee/Espresso)?"),
	coffeeSize: prompt("Which cup size do you prefer (Short/Tall/Grande/Venti/Trenta)?"),
	drizzle: prompt("Do you like to add drizzle? (yes/no)"),
	whippedCream: prompt("Do you like to add Whipped Cream? (yes/no)"),
	sweetner: prompt("Do you like to add Sweetner? (yes/no)"),
	coldFoam: prompt("Do you like to add Cold Foam? (yes/no)"),
	dairy: prompt("Do you like to add Dairy(Cream/2% milk/almond milk)?"),

	//Creating function called coffeeOrderDetails which give output in the console as well as HTML page;
	coffeeOrderDetails: function()
	{
		console.log("Name:: " + this.name);
		console.log("Drink Type::" + this.drinkType);
		console.log("Coffee Size:: " + this.coffeeSize);

		if(this.drizzle === "yes" || this.drizzle === "Yes" || this.drizzle === "YES")
		{
		console.log("Drizzle:: " + this.drizzle);
		document.getElementById("demo4").innerHTML = "Drizzle:: " + this.drizzle;
		}


		if(this.whippedCream === "yes" || this.whippedCream === "Yes" || this.whippedCream === "YES")
		{
		console.log("whipped Cream:: " + this.whippedCream);
		document.getElementById("demo5").innerHTML = "Whipped Cream:: " + this.whippedCream;
		}


		if(this.sweetner === "yes" || this.sweetner === "Yes" || this.sweetner === "YES")
		{
		console.log("Sweetner:: " + this.sweetner);
		document.getElementById("demo6").innerHTML = "Sweetner:: " + this.sweetner;
		}


		if(this.coldFoam === "yes" || this.coldFoam === "Yes" || this.coldFoam === "YES")
		{
		console.log("Cold Foam:: " + this.coldFoam);
		document.getElementById("demo7").innerHTML = "Cold Foam:: " + this.coldFoam;
		}

		console.log("Dairy:: " + this.dairy);

		 document.getElementById("demo1").innerHTML = "Customer Name:: " + this.name;
		 document.getElementById("demo2").innerHTML = "Drink Type:: " + this.drinkType;
		 document.getElementById("demo3").innerHTML = "Coffee cup size:: " + this.coffeeSize;
		 document.getElementById("demo8").innerHTML = "Dairy:: " + this.dairy;
	}
	//coffeeOrderDetails();
};

coffee.name;
coffee.drinkType;
coffee.coffeeSize;
coffee.drizzle;
coffee.whippedCream;
coffee.sweetner;
coffee.coldFoam;
coffee.dairy;
coffee.coffeeOrderDetails();

// let coffee = function()
// {
// 	let customerName = document.getElementById("name").value;
// 	let drinkType;

// 	let drink = document.getElementByIdByName("drinkType");

// 	for(let i = 0; i<drink.length; i++)
// 	{
// 		if(drink[i].checked)
// 		{
// 			drinkType = drink[i].value;
// 		}
// 	}

// 	let size = document.getElementById("size").value;

// 	let drizzle = (document.getElementById("drizzle").checked)? true: false;
// 	let whippedCream = (document.getElementById("whippedCream").checked)? true: false;
// 	let sweetner = (document.getElementById("sweetner").checked)? true : false;
// 	let coldFoam = (document.getElementById("coldFoam").checked)? true : false;

// 	let dairy = document.getElementById("dairy").value;

// 	function order(customerName, drinkType, size, drizzle, whippedCream, sweetner, coldFoam, dairy)
// 	{
// 		this.customerName=customerName;
// 		this.drinkType=drinkType;
// 		this.size=size;
// 		this.drizzle=drizzle;
// 		this.whippedCream=whippedCream;
// 		this.sweetner=sweetner;
// 		this.coldFoam=coldFoam;
// 		this.dairy=dairy;

// 		this.order = function()
// 		{
// 			document.getElementById("disname").innerText = this.customerName;
// 			document.getElementById("dissize").innerText = this.size;
// 			document.getElementById("disdairy").innerText = this.dairy;
// 		};
// 	}
// 	let order ord = new Order(customerName, drinkType, size, drizzle, whippedCream, sweetner, coldFoam, dairy)
// 	{
// 		ord.Order();
// 	}

// }