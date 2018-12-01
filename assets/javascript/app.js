var key = "70dfc31d2caa4d56941af9c18d03ddc9";

$(document).ready(function() {
  $("#myBtn").on("click", function() {
    getData();
  });
});

function getData() {
  topic = "trump";
  var url =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=70dfc31d2caa4d56941af9c18d03ddc9&q=" +
    topic;
  $.ajax({
    url: url,
    method: "GET"
  })
    .done(function(result) {
      console.log(result);
    })
    .fail(function(err) {
      throw err;
    });
}
