console.log('carousel')

 //FOTO DELLO SLIDE
const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]
   // ARRAY
const slideElements = []

let currentIndex = 0

const slidesWrapperEl = document.querySelector('.slides-wrapper')
slidesWrapperEl.innerHTML = " "

//GENERIAMO IL CONTENUTO DELLO SLIDE DALL'HTML

for (i = 0; i < slides.length; i++){
	const src = slides[i];
	// CREAZIONE LI
	const li = document.createElement('li')
	// AGGIUNGO LA CLASSE SLIDE A LI
	li.classList = 'slide'
	
	if (i === currentIndex) {
		li.classList.add('active')
	}
	// CREIAMO LA IMG
	const img = document.createElement ('img')
	// ASSEGNO ALLA PROPRIETà SRC DI IMG IL VALORE SRC DELL'ARRAY
	img.src = src
	// INSERISCE IMG DENTRO LI 
	li.append(img)
	console.log(li)
	// AGGIUNGE LI ALLO SLIDESWRAPPER
	slidesWrapperEl.append(li)
	// PUSHA GLI LI CREATI NELL'ARRAY A RIGA 12
    slideElements.push(li)
}

 // SELEZIONA LA FRECCIA NEXT DAL DOM
 const nextElement = document.querySelector('.arrow-next')

 nextElement.addEventListener('click', function () {
    // TOLGO CLASSE ACTIVE DALLA SLIDE ATTIVA
    slideElements[currentIndex].classList.remove('active');

    // AGGIUNGO LA CLASSE ACTIVE ALLA SLIDE SEGUENTE
    if (currentIndex === slideElements.length - 1) {
        currentIndex = 0;
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    } else {
		currentIndex++
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    }
})

//SELEZIONA LA FRECCIA BACK DAL DOM

const prevElement = document.querySelector('.arrow-prev')

prevArrowElement.addEventListener('click', function () {
// TOLGO CLASSE ACTIVE DALLA SLIDE ATTIVA
    slideElements[currentIndex].classList.remove('active');
       
    if (currentIndex === 0) {
        currentIndex = slideElements.length - 1;
        let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    } else {
        currentIndex--
        let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    }
})