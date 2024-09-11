//your JS code here. If required.
const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');


next.addEventListener("click",mota)
function mota(){
	progress.style.backgroundColor ="#3498db";
	progress.style.width = "100px";
	progress.style.height = "10px";
}
