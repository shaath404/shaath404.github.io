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

function debugBase64(base64URL){
    var win = window.open();
    win.document.write('<iframe src="' + base64URL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
}


function changeMemeText(){


    var textEntered = document.getElementById("memeChanger").value;

    alert(textEntered);

    document.getElementById("memeWords").innerText = textEntered; 


}

