<script>
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB10|IEMobile|Opera Mini/i.test(navigator.userAgent) ) //Specify the mobile devices that you would like this if statement to apply to. 
	{
		image_y = document.getElementById('bodyID'); //Get the ID of the body and assign it to a variable.
 		image_y.parentNode.removeChild(image_y); //Remove the body to prevent anything loading on the screen in case there are issues with the window location redirect.
		window.location = "mobile.html"; //Re-assign the window location to a new html page that is caters for the redirect. 
	}
</script>