console.log("hello");
function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "/img/d-explore") 
    {
        document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
    }
}