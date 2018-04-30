// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
 //function getGiphy(searchterm){
//$(document).ready(function() {
  //  $.ajax({
    //    url: "https://api.giphy.com/v1/stickers/search?q=" + searchterm + "&api_key=dc6zaTOxFJmzC&limit=1",
      //  method: "GET",
        //success: function(response) {

//            var img_url = response.data[0].images.original.url;
//
  //          $('body').append('<img src=' + img_url + '>');
//
  //      },
    //});
    //$("#search").click(function() {
      //  console.log(searchterm)
        //var input = $("#search-term").val();
        // console.log(input);
       //getGiphy(input);
    //}); 
    
    function giphyURLWithSearchTerm(searchTerm) {
    var url = "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC";
    console.log("The url is: " + url);
    return url;
}

function displayImage(imageUrl) {
    $("#result").html("<img src='"+ imageUrl + "'>");
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    var apiUrl = giphyURLWithSearchTerm(searchTerm);
    
    $.ajax({
      url: apiUrl,
      method: "GET",
      success: function(response) {
          var imageUrl = response.data[0].images.original.url;
          console.log("The image url is: " + imageUrl);
          displayImage(imageUrl);
      },
    }); 
}

$(document).ready(function() {
    $("#search").click(function() {
       console.log("Search Button clicked");
      var search= $("#search-term").val();
   callGiphyAPIWithSearchTerm(search);
    });
    
    
    
    

    





});
//}