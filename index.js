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

    window.scrollTo(0,0);
    
    html2canvas(document.querySelector("#theUserMeme")).then(function(canvas) {   
        
        var image = canvas.toDataURL('image/jpeg', 1);
        console.log(image);
        
        
        alert("Meme must be saved in your device");

        document.getElementById("memeDownloadBtnImage").href = image;
        document.getElementById("memeDownloadBtnImage").click();
        // window.open(image);
        // document.getElementById("finalImageCopy").src = image;
    });

    // window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);

}



function changeMemeText(){

    var textEntered = document.getElementById("memeChanger").value;

    alert(textEntered);

    document.getElementById("memeWords").innerText = textEntered; 

}

