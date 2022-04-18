//alert("Connected!");
//  Check Off SPecific ToDos by clicking
//$("li").click(function(){ //click() will 
$("ul").on("click" ,"li" ,function(){   //we used on click to include new elements also and ul is selected as we appy on already existing element in which change is made and same is done in delete
    //alert("CLicked LI");
    //$(this).css("color", "gray");
    //$(this).css("text-decoration", "line-through");
    //OR
    /*
    $(this).css({
        color: "gray",
        textDecoration: "line-through"
    });*/
//or
/*
    //check li is gray
    if ($(this).css("color") === "rgb(128, 128, 128)"){
        //turn it black
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    //else
    else{ //turn it gray and striketrough
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }*/
    $(this).toggleClass("completed");
});

//Click on X to delete to delete all the todo   
$("ul").on("click", "span", function(event){
    //alert("Clicked on span!");
    $(this).parent().fadeOut(500, function(){
        $(this).remove();   //here this is span.parent()
    });
    event.stopPropagation();    //span par click karne se li,ul,div,body sab select ya clicked ho jayega soo usse avoid karne ke liye
});
$("input[type='text']").keypress(function(event){
    //console.log("Any key pressed");
    if (event.which === 13){
        //console.log("You pressed enter");
        //grabbing new text from input
        var todoText= $(this).val();
        $(this).val("");
        //create a new li and add to ul
        //$("ul").append("<li> This is the new li that we will append to the list</li>");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
});

//download as pdf
//var file= document.getElementById('pdffile');
/* 
$("#createpdf").on("click", async function generatePDF() {
    document.getElementById("createpdf").innerHTML = "Currently downloading, please wait";
    //Downloading
    var downloading = document.getElementById("container");
    var doc = new jsPDF();
    await html2canvas(downloading, {
        //allowTaint: true,
        //useCORS: true,
        width: 1000
    }).then((canvas) => {
        //Canvas (convert to PNG)
        doc.addImage(canvas.toDataURL("image/png"), 'PNG', 5, 5, 500, 200);
    })
    doc.save("Document.pdf");
    //End of downloading
    document.getElementById("createpdf").innerHTML = "Click to download";
}); */
