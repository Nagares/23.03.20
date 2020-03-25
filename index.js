import Cat from './cat.js';
import Dog from './dog.js';
import madeHTML from './func.js';


let dog = new Dog('Lora', 'Ayyyyy');
let cat = new Cat("Phin","mey");
let cat2 = new Cat("Sausage",'Hmch-Hmch','https://i.pinimg.com/originals/d3/1a/ef/d31aef4c0d1a4855deef28739b2b2c0b.jpg');
let dog1 = new Dog("Bogo");


let pets = [dog, cat,cat2, dog1];

madeHTML(pets)


search.addEventListener('click', function(event) {
	
	const find = event.target.parentElement.id;
	const petName = event.target.parentElement.querySelector('img');


	const pet = pets.find((item) => {
			return (item.img+item.name) === find;
	});

pet.makeSound(petName)

})
