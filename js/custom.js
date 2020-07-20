// (function (){

// GET request for remote image in node.js must plug in axious via HTML to use
// function makeApiCallAndPlaceImage (){
// axios({
//  	method: 'get',
//  	url: 'https://api.nasa.gov/planetary/apod?api_key=JW7aH9rQM7vjpYSlZRxgDvmF7XubqG3Uwxse3CVD&date=2020-02-02',
//    })
//  	.then(function (response) {
//  	  console.log(response)

//  	  $('img').attr('src', response.data.hdurl);
//  	});
//  }

 	// Calling the function via the id
//  	$('#generate').click(function() {
//  		makeApiCallAndPlaceImage();
//  	  });

// })(); 


// Custom js

// (function(){

// 	function getRandomDate () {
// 	let date = new Date();
// 	min = Math.ceil(1996);
//   	max = Math.floor(date.getFullYear);
//   	let randomYear = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// 	console.log(getRandomDate);
// }
// })();

// custom js file
(function(){

	const regenerate = document.getElementById('generate');

	regenerate.onclick = function () {
		let titleText = document.getElementById('title');
		let explanation = document.getElementById('explanation');
		let photoDate = document.getElementById('photoDate');

		let date = new Date()

		let randomYear = getRandomYear(1996, date.getFullYear())
		let randomMonth = getRandomMonth(01, 12)
		let randomDay = getRandomDay(01, 31)

		function getRandomYear (min, max) {
		  return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function getRandomMonth (min, max) {
		  return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function getRandomDay (min, max) {
		  return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		let randomDate = randomYear + '-' + randomMonth + '-' + randomDay

		function placeImage (randomDate) {

			axios({
				method: 'get',
				url: 'https://api.nasa.gov/planetary/apod?api_key=ucVyNZZAd2ZQsvzdP9wWsmbxtgSF1BWFPFZcGBEz&date=' + randomDate,
				responseType: 'stream'
			})
				.then(function (response) {
						document.getElementById('theImage').src = response.data.hdurl;
						title.textContent = response.data.title
						explanation.textContent = response.data.explanation
						photoDate.textContent = response.data.date
						console.log(response)
				});
				}

		placeImage(randomDate);

}

regenerate.click()


})();