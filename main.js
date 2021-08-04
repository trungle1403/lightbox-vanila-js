
const lightBox = document.querySelector('.lightbox');

const imageContainer = document.querySelector('.images');

const btnClose = document.querySelector('.lightbox .btn-close')
const btnPrev = document.querySelector('.lightbox .btn-prev')
const btnNext = document.querySelector('.lightbox .btn-next')
const txtSearch = document.querySelector('.search .search-text')

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function showLightbox(event) {
    // lightBox.classList.toggle('active')
    // lightboxImg.src = event.target.src
    const src = event.target.childNodes[0].getAttribute('src')
    if (src != null) {
        const template = `
        <div class="lightbox">
            <div class="lightbox-item">
                <img src="${src}" alt="" class="lightbox-image">
                <div class="btn-prev">&#8227;</div>
                <div class="btn-next">&#8227;</div>
            </div>
            <div class="btn-close">
                <span></span>
                <span></span>
            </div>
        </div>`
        document.body.insertAdjacentHTML('beforeend',template)
    }
    
}

function clearData() {
    while (imageContainer.firstChild){
        imageContainer.removeChild(imageContainer.firstChild)
    }
}
function createArrayRandom(data){
    let arrayImg = []
    for(let i = 0; i < data.length; i++){
        let randomImg = Math.floor(Math.random() * data.length)
        if(!arrayImg.includes(randomImg)){
            arrayImg.push(randomImg)
        }else {
            i--;
        }
    }
    return arrayImg;
}

//create img with js
function createImage(data){
    //tao mang ngau nhien
    const newArr = createArrayRandom(data)
    for(let i = 0; i < data.length; i++){
        // lay so trong mang ngau nhien
        //[2,3,4,1,5,23,12,5...]
        let num = newArr[i]
        
        data[num].src.map(srcItem =>{
            if(srcItem != data[num].name){
                let imgEle = document.createElement('img')
                imgEle.setAttribute('src',srcItem)
                imgEle.classList.add('image')

                //images > content-image > desc > image + name + {category > item}
                //create div parent
                let divParent = document.createElement('div');
                divParent.classList.add('content-image');
                divParent.setAttribute('data', data[num].name)

                //create div desc 
                let divDesc = document.createElement('div');
                divDesc.classList.add('desc-image');

                //create div category 
                let divCategory = document.createElement('div');
                divCategory.classList.add('category-image');

                data[num].category.forEach(item =>{
                    //span category-item
                    let spanCategoryItem = document.createElement('span');
                    spanCategoryItem.classList.add('category-item');
                    spanCategoryItem.classList.add(randomColor());
                    spanCategoryItem.textContent = item;

                    divCategory.appendChild(spanCategoryItem);
                })
                

                //create div name 
                let divName = document.createElement('div');
                divName.classList.add('name-image');
                divName.textContent = data[num].name;

                //add to div desc-image
                divDesc.appendChild(divCategory)
                divDesc.appendChild(divName)
                
                // add to div parent
                divParent.appendChild(imgEle)
                divParent.appendChild(divDesc)
                divParent.addEventListener('click',showLightbox)
            
                imageContainer.appendChild(divParent)
            }
        })
        
    }
    
}
// createImage(dataImg)
addLocalStorage()
// ======================== localStorage ======================================
function allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    return values;
}
function addLocalStorage() {
    // clearData()
    if (typeof(Storage) !== 'undefined') {
        let arrStorage = allStorage();
        arrStorage.map(item => {
            imgArr[8].push(item)
        })
    }
    createImage(dataImg)

}


txtSearch.addEventListener('keyup',(e) => {
    let contentImage = document.querySelectorAll('.images .content-image');
    contentImage.forEach(item => {
        let data = item.getAttribute('data').toLowerCase()

        let valueSearch = e.target.value.trim().toLowerCase();

        if (data.indexOf(valueSearch) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    })


})


//event lightbox
const images = document.querySelectorAll('.images img');
let index = 0;
document.body.addEventListener('click', (e) =>{

    const lightImage = document.querySelector('.lightbox-image');
    let lightSrc = ''
    
    if (e.target.matches('.lightbox')){
        //remove lightbox out of dom
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches('.lightbox .btn-prev')){
        lightSrc = lightImage.getAttribute('src')
        index = [...images].findIndex(item => item.getAttribute('src') === lightSrc)
        index -= 1
        //back to last
        if(index <= 0){
            index = images.length - 1
        }
        const newSrc = [...images][index].getAttribute('src')
        lightImage.setAttribute('src',newSrc)
    } 
    
    else if (e.target.matches('.btn-next')){
        lightSrc = lightImage.getAttribute('src')
        index = [...images].findIndex(item => item.getAttribute('src') === lightSrc)
        index += 1
        //back to 0
        if(index >= images.length){
            index = 0
        }
        const newSrc = [...images][index].getAttribute('src')
        lightImage.setAttribute('src',newSrc)
    }
    
    if (e.target.matches('.lightbox .btn-close')){
        //remove lightbox out of dom
        document.body.removeChild(e.target.parentNode);
    }
    if (e.target.matches('.lightbox .btn-close span')){
        //remove lightbox out of dom
        document.body.removeChild(e.target.parentNode.parentNode);
    }
    
})

// scroll
window.addEventListener('scroll',function(){
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>0);
})
// scroll bar
// let progress = document.getRootNode(scrollbars);
let progress = document.querySelector('.progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight)*100;
    progress.style.height = progressHeight + "%";
}
// scroll bar end



// ========================= modal =======================================

const btnShowModal = document.querySelector('.btn-show-modal')
const modalAdd = document.querySelector('.modal-add')
const btnAddModal = document.querySelector('.modal-add .btn-add')
const btnCloseModal = document.querySelector('.modal-add .btn-close')
const btnCancelModal = document.querySelector('.modal-add .btn-cancel')


btnShowModal.addEventListener('click', () => {
    modalAdd.classList.toggle('active')
})
btnCloseModal.addEventListener('click', () => {
    modalAdd.classList.toggle('active')
})
btnCancelModal.addEventListener('click', () => {
    modalAdd.classList.toggle('active')
})


btnAddModal.addEventListener('click', () => {
    const urlImg = document.querySelector('.modal-add .url-image')
    let valueImg = urlImg.value
    if(valueImg != '') {
        localStorage.setItem(valueImg,valueImg)
    }
    modalAdd.classList.toggle('active')
    urlImg.value = ''
    window.location.reload()
})

// localStorage.setItem('test', 'https://i.pinimg.com/564x/d6/4a/86/d64a86c25d26a18cdfad916ddaa16e43.jpg');
// localStorage.clear()
