// 1) Add an event listener to #click-me (document.query to find this button)
// 2) Store inputs as varables using .value method 
// 3) (Max age -  age) * drinks per day * 365
// 4) output to answers for the user

//1)
document.querySelector('#click-me').onclick = function() {
//2)
	var currentAge = document.querySelector('#age').value;
	var maxAge = document.querySelector('#max-age').value;
	var favoriteDrink = document.querySelector('#item').value;
	var drinksPerDay = document.querySelector('#num-per-day').value;

//3)
    currentAge = parseInt(currentAge)
	maxAge = parseInt(maxAge)
	drinksPerDay = parseInt(drinksPerDay)

	var drinksLeft = (maxAge - currentAge) * drinksPerDay * 365

//4
	 document.querySelector('#solution').innerHTML = drinksLeft;
	 document.querySelector('#drink').innerHTML = favoriteDrink;
}

