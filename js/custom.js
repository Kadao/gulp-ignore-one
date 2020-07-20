(function (){

// GET request for remote image in node.js must plug in axious via HTML to use
function makeApiCallAndPlaceImage (){
axios({
	method: 'get',
	url: 'https://api.nasa.gov/planetary/apod?api_key=JW7aH9rQM7vjpYSlZRxgDvmF7XubqG3Uwxse3CVD&date=2020-02-02',
  })
	.then(function (response) {
	  console.log(response)

	  $('img').attr('src', response.data.hdurl);
	});
}

	// Calling the function via the id
	$('#generate').click(function() {
		makeApiCallAndPlaceImage();
	  });

})(); 