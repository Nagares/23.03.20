
import Pet from './pet.js';


export default class Dog extends Pet {
	
	constructor(name,sound,img) {

		super(name, sound, img) 
           
			sound === undefined ? this.sound ='WooW!': this.sound = sound;
			img === undefined ? this.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbIZx7RCUdsoRKIoTL1oMv4ccV_Z_9jQGCWgGXK_MuG6jjvSNI': this.img = img;
	}
}


