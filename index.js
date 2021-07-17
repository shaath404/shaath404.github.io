function readUrl() {
    
    var url = document.getElementById("memeUploader").value;
    
    alert("Image dropped");
    // alert(url);

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

// (Not done yet)
function generateMeme(){
    
    var options = {
        quality: 1,
    };
    
    domtoimage.toBlob(document.getElementById('theUserMeme'), options)
    .then(function (blob) {
        window.saveAs(blob, 'instant meme.jpeg');
        alert("**********Plz read*********/n" + "Image must be saved in your device /n" + "If it's white try again, otherwise, feel free to get in touch with us");
    });
    
}


function changeMemeText(){

    var textEntered = document.getElementById("memeChanger").value;

    alert(textEntered);

    document.getElementById("memeWords").innerText = textEntered; 

}

