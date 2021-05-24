// Execute code from console once inside a Skribbl.io game

var canvas = document.getElementById('canvasGame') 
var overlay = document.getElementById('overlay')

var drawing64 = null
var downloadedFlag = false

function downloadImage(drawing64){
	var link = document.createElement('a');
	link.download = 'download.png';
	link.href = drawing64
	link.click();
	link.delete;
}

setInterval(function(){ 
	if(overlay.style.display == 'none'){
		drawing64 = canvas.toDataURL()
		downloadedFlag = false
}else if (overlay.style.display == '' && !downloadedFlag){
		// console.log(drawing64)
		document.getElementById("boxMessages").insertAdjacentHTML("beforeend",
                	`<p style="font-weight: bold;"><a style="color: rgb(83, 57, 206)" href='#' onclick="downloadImage(drawing64)"><span>Click to download image</span></a></p>`);
		downloadedFlag = true;
}
}, 1000);




