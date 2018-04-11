// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function() {
    $.ajax({
        url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC&limit=10",
        method: "GET",
        success: function(response) {
            // Below log the response object to the console
            console.log(response);
            //Log the data array to the console
            console.log(response.data);
            //Log the first gif objectf from the data array
            console.log(response.data[0]);
            //Log the images array to the console
            console.log(response.data[0].images);
            //Log the orignal image to the console
            console.log(response.data[0].images.original_still);
            //Log the url from the orignial gif to the console  

            console.log(response.data[0].images.original_still.url);
            var img_url = response.data[8].images.original.url;

            $('body').append('<img src=' + img_url + '>');

        },
    });

function find() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC&limit=10", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
}


});
