// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
 function getGiphy(searchterm){
$(document).ready(function() {
    $.ajax({
        url: "https://api.giphy.com/v1/stickers/search?q=" + searchterm + "&api_key=dc6zaTOxFJmzC&limit=1",
        method: "GET",
        success: function(response) {

            var img_url = response.data[0].images.original.url;

            $('body').append('<img src=' + img_url + '>');

        },
    });
    $("#search").click(function() {
        console.log(searchterm)
        var input = $("#search-term").val();
         console.log(input);
       getGiphy(input);
    });

    //function find() {
    //  var xhttp = new XMLHttpRequest();
    //    xhttp.open("POST", "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC&limit=10", true);
    //   xhttp.setRequestHeader("Content-type", "application/json");
    //  xhttp.send();
    //    var response = JSON.parse(xhttp.responseText);
    //}






});
}