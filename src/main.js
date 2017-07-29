require("jquery");

var quoteStr = '';
var authorStr = '';
$(document).ready(function() {
    $("#button").click(function() {
        $.ajax({
            type: 'GET',
            url: 'http://quotes.rest/qod.json',
            success: function(json) {
                quoteStr = json.contents.quotes[0].quote;
                authorStr = json.contents.quotes[0].author;
                $("#quote").text(quoteStr);
                $("#author").text("- " + authorStr);
                $("#btn-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURI('"' + quoteStr + '"'));
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(jqXHR + " | textStatus: " + textStatus + " | errorThrown: " + errorThrown);
            }
        });
    });
});