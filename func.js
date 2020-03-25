const search = document.getElementById('search');


export default function madeHTML(item){

	item.forEach(element =>{
		const div = document.createElement('div');
		div.classList.add('box','col-xs-12','col-sm-4')

		div.innerHTML =`
		<div class="text-center" id='${element.getImg()+element.getName()}'>
		<div> ${element.getName()}</div>
		<img class="wiedth-100 img-circle"  src=${element.getImg()}>
		<button class="btn btn-default btn-warning" id="touch">Погладить</button>
		</div>
		`;
		search.appendChild(div);
	})
}