document.getElementById("file").addEventListener("change",function () {
        var file = document.getElementById('file').files[0];
		var url = URL.createObjectURL(file);
		console.log(url);
		document.getElementById("audio_id").src = url;
});