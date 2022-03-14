const dropZone=document.querySelector(".drop-zone");

const fileinput=document.querySelector("#fileinput");
const browseBtn=document.querySelector(".browseBtn");

function display()
{
	let fileType=file.type;
	//console.log(fileType);
	let filereader=new FileReader();

	filereader.onload=()=>{
		let fileURL=filereader.result;
		let imgTag=`<img src="${fileURL}" alt="">`;
		dropZone.src=imgTag;
        
	}
	filereader.readAsDataURL(file);
};


browseBtn.onclick=()=>{
	fileinput.click();
}

fileinput.addEventListener('change',function(){

	file=this.files[0];
	display();
});


