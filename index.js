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

    html2canvas(document.querySelector("#theUserMeme")).then(canvas => {
        // document.body.appendChild(canvas)
        var image = canvas.toDataURL('image/jpeg', 1);
        console.log(image);
        // window.open(image);
        
        //debugBase64(image);
        alert(image);
    });


}



function changeMemeText(){


    var textEntered = document.getElementById("memeChanger").value;

    alert(textEntered);

    document.getElementById("memeWords").innerText = textEntered; 


}

