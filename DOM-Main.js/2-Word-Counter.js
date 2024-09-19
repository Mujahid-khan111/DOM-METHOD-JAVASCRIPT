let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function () {
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();
    let words = text.split(" "); // start or last ke space ho hta dena
    let cleanList = words.filter(function (elm) {
        return elm != "";
    })

    //  console.log(cleanList);

    document.getElementById("Word").innerHTML = cleanList.length;

})

