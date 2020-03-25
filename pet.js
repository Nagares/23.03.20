


export default class Pet {
	constructor(name, sound, img ='https://image.freepik.com/free-vector/_24877-23263.jpg') {
		this.name = name;
		this.sound = sound;
		this.img = img;
	}
	getName(){
		return this.name
	}
	getSound(){
		return this.sound
	}
	getImg(){
		return this.img
	}

	makeSound(makeHois){
		
		let div = document.createElement('div');
		div.innerText = `${this.sound}`;
		div.classList.add('toblur');
		makeHois.classList.add('blur');
		makeHois.before(div);

		setTimeout((() =>{
			makeHois.classList.remove('blur');
			div.remove();
			

		}), 3000);
	
	}
	
};
