function readUrl() {
    
    var url = document.getElementById("memeUploader").value;
    
    alert("Image dropped");
    alert(url);

    // document.getElementById('memeImage').src = url;


    var input = document.getElementById("memeUploader");
    console.log(input);

    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    
    fReader.onloadend = function(event){
        var img = document.getElementById("memeImage");
        img.src = event.target.result;
    }

  

}

function generateMeme(){

    html2canvas(document.querySelector("#theUserMeme")).then(canvas => {
        // document.body.appendChild(canvas)
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        console.log(image);
        window.location.href = image;
    });


}

function changeMemeText(){


    var textEntered = document.getElementById("memeChanger").value;

    alert(textEntered);

    document.getElementById("memeWords").innerText = textEntered; 


}

