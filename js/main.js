let projectLength = projects.length;
console.log("projects length: " + projectLength);
projects.forEach(proj => console.log(proj.name))
let loadedLength = 0;
let startTime = new Date().getTime();
function init(){
  let hook = document.getElementById('content');
  hook.innerHTML = "";
	//cycle elements
	projects.forEach((proj)=>{
		let projElement = document.createElement('div');
		projElement.className = 'project-container';
		projElement.innerHTML = '<a href=' + 
										proj.link + '><div class="project-div"><table class="thumb-table"><tr><td><img onload="imgLoad" class="project-vinyet" src=' + 
										proj.img + ' ></td></tr><tr><td><div class="photo-credit">'+ 
										proj.credit + '</div></td></tr></table><div class="project-name">' + 
										proj.name + '</div><div class="blurb">' + 
										proj.blurb + '</div></div><div class="project-overlay"></div></a>';

		hook.appendChild(projElement);
	}
	)
	
}

function hover(elem){
//		elem.style.opacity = .2;
		elem.style.opacity = 1;
		elem.style.borderBottom = '1px solid #717171';
//		elem.style.borderBottomStyle = 'outset';
}
function hoverOut(elem){
		elem.style.opacity = 0;
		elem.style.borderBottom = 'none';
}
function loaded(){
setTimeout(()=>{
  document.getElementById('loading-screen')
  ? document.getElementById('loading-screen').style.display
  : 0;
},2000 + startTime - new Date().getTime());
//console.log('startTime: ' + startTime);

}
function imgLoad(){
loadedLength++;
if(loadedLength == projectLength){loaded()}
}

document.addEventListener("DOMContentLoaded", init());
