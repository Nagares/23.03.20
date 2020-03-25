import Pet from './pet.js';

export default class Cat extends Pet {
	constructor(name,sound,img) {

		super(name, sound, img) 
      
			sound === undefined ? this.sound = 'Meuy': this.sound = sound;
			img === undefined ? this.img = 'https://i.pinimg.com/originals/20/e4/ac/20e4ac8189c3bf292883caaac9dee4bc.jpg': this.img = img;
	}
}

