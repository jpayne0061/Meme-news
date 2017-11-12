

$("#set-text").on("click", function () {
    var topText = $("#top-text").val();
    var bottomText = $("#bottom-text").val();

    $(".meme-container").append("<div class='top' >" + topText + "</div>");
    $(".meme-container").append("<div class='bottom' >" + bottomText + "</div>")


});


$("#submit-meme").on("click", function () {

    SubmitMeme();

});

function SubmitMeme()
{
    var topText = $("#top-text").val();
    var bottomText = $("#bottom-text").val();

    var data = "<div class='top' >" + topText + "</div>" + "<div class='bottom' >" + bottomText + "</div>";

    var imgSrc = $(".meme-with-text").attr("src");

    SendData(data, imgSrc);

}


function SendData(data, img)
{
    $.ajax({
        type: "POST",
        url: "/api/Meme/Post",
        data: { ImageLocation: img, Htmltext: data }
    });
}


$(".side-bar-memes").on("click", function () {

    var src = $(this).attr("src");
    $(".meme-container").append("<img src='" + src + "' class='meme-with-text'>");

    $("#meme-input").toggle();

});

//$.ajax({
//    type: "POST",
//    url: "test.json",
//    data: data
//});

//$.ajax({
//    type: 'Get',
//    url: "test.json",
//    //data: { message: data },
//    success: function (data) {
//        console.log(data);
//    }
//});

//function SendData(data) {
//    var formData = new FormData();

//    //formData.append("username", "Groucho");
//    //formData.append("accountnum", 123456); // number 123456 is immediately converted to a string "123456"

//    // HTML file input, chosen by user
//    formData.append("data", data);

//    // JavaScript file-like object
//    //var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
//    //var blob = new Blob([content], { type: "text/xml" });

//    //formData.append("webmasterfile", blob);

//    var request = new XMLHttpRequest();
//    request.open("POST", "test.json");
//    request.send(formData);
//}


