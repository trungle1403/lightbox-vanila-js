
const lightBox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-image')

const imageContainer = document.querySelector('.images');
const image = document.querySelectorAll('.images img');

const btnClose = document.querySelector('.lightbox .btn-close')
const btnPrev = document.querySelector('.lightbox .btn-prev')
const btnNext = document.querySelector('.lightbox .btn-next')
const txtSearch = document.querySelector('.search .search-text')


const dataImg = [
    {
        id: 1,
        src: 'https://i.pinimg.com/564x/d6/4a/86/d64a86c25d26a18cdfad916ddaa16e43.jpg'
    },
    {
        id: 2,
        src: 'https://f18-zpg.zdn.vn/2736332357556461257/000e79d78bf87ca625e9.jpg'
    },
    {
        id: 3,
        src: 'https://f41-zpg.zdn.vn/3166378426295995546/d36f7f8e8da17aff23b0.jpg'
    },
    {
        id: 4,
        src: 'https://i.pinimg.com/564x/d6/22/0d/d6220d80f2ebf1655225186d1d4bc9d5.jpg'
    },
    {
        id: 5,
        src: 'https://i.pinimg.com/564x/b2/3c/ef/b23cefecccfe85909320714f10ce5ec8.jpg'
    },
    {
        id: 6,
        src: 'https://i.pinimg.com/564x/55/c9/7b/55c97b3eda7b88fe39a548b461b0a151.jpg'
    },
    {
        id: 7,
        src: 'https://i.pinimg.com/564x/db/8e/ec/db8eec1b3a5c53f065d29752cd10168c.jpg'
    },
    {
        id: 8,
        src: 'https://i.pinimg.com/564x/6f/70/77/6f7077fb96b0a481bbc704efd307f865.jpg'
    },
    {
        id: 9,
        src: 'https://i.pinimg.com/564x/fc/fb/b8/fcfbb8e32f779d3e39e33825b87c8175.jpg'
    },
    {
        id: 10,
        src: 'https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/166241985_2855738538025699_3341946107539893583_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=PyCIFBu1xLgAX-FDX2Y&_nc_ht=scontent-xsp1-3.xx&oh=f54b9712e93388ef7adbf489a89e9ff9&oe=612C8E01'
    },
    {
        id: 11,
        src: 'https://i.pinimg.com/564x/00/83/d4/0083d40d87a455ede9954bd262020a5a.jpg'
    },
    {
        id: 12,
        src: 'https://i.pinimg.com/564x/c7/94/0b/c7940bac0670687aed71495a9803c4a1.jpg'
    },
    {
        id: 13,
        src: 'https://i.pinimg.com/564x/20/b4/c4/20b4c4f11ad3b22ca5ba5d9f1f6136aa.jpg'
    },
    {
        id: 14,
        src: 'https://i.pinimg.com/564x/4e/28/71/4e28715334e4202b8198c9ea8df8261f.jpg'
    },
    {
        id: 15,
        src: 'https://i.pinimg.com/564x/1b/08/6c/1b086c4233b4621c2d62e5d1fdc79de3.jpg'
    },
    {
        id: 16,
        src: 'https://i.pinimg.com/564x/a6/1e/22/a61e22ac7895944c36aa0a2bb27b2489.jpg'
    },
    {
        id: 17,
        src: 'https://images.unsplash.com/photo-1612729875065-1385f02852ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=883&q=80'
    },
    {
        id: 18,
        src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/102730183_1361084950759535_3304245744427977181_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=N2shy5v6ybAAX-0sRso&tn=iwpLnBEHADVMhIWN&_nc_ht=scontent-hkt1-1.xx&oh=640142293617fd27f60900b54679f722&oe=612B3A5A'
    },
    {
        id: 19,
        src: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/119663234_330101524721023_2273985977509110839_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=To2yO-WxgpwAX8YpVMg&_nc_ht=scontent.fsgn5-6.fna&oh=95a1d1cc579dcb88d19fdbb06acc022a&oe=612B5A3F'
    },
    {
        id: 20,
        src: 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/159844830_1424399811233617_4679297703946795463_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Z9m_pLoIJ_UAX8FrldD&_nc_ht=scontent.fsgn8-1.fna&oh=6469f4ca85ff81ad7c6e3dd0c2f8f0b0&oe=612C5455'
    },
    {
        id: 21,
        src: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/228132283_351471873332526_2083963259859167035_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=825194&_nc_ohc=w3MkWV1jMEEAX8CgNoY&_nc_ht=scontent.fsgn3-1.fna&oh=f9179fc27bf124ffe836541a1e72b138&oe=612D7C69'
    },
    {
        id: 22,
        src: 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/124848785_1335960793410853_193957594087227736_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=M-r3nfAPpKcAX9xItYd&_nc_ht=scontent.fsgn8-1.fna&oh=c2a4a54c2e98bdd1422ca5971cb063e7&oe=612CC13E'
    },
]
function showLightbox(event) {
    // lightBox.classList.toggle('active')
    // lightboxImg.src = event.target.src
    const src = event.target.getAttribute('src')
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

function clearData() {
    while (imageContainer.firstChild){
        imageContainer.removeChild(imageContainer.firstChild)
    }
}

//create img with js
function createImage(data){
    data.map(img => {
        let imgEle = document.createElement('img')
        imgEle.setAttribute('src',img.src)
        imgEle.classList.add('image')
        imgEle.addEventListener('click',showLightbox)
        //create div parent
        let divParent = document.createElement('div');
        divParent.classList.add('content-image');
        divParent.appendChild(imgEle)
    
        imageContainer.appendChild(divParent)
    })
    
}
createImage(dataImg)
//create event with html
// images.forEach(image => image.addEventListener('click',showLightbox));
// for(let i = 0; i < images.length; i++) {
//     images[i].addEventListener('click',showLightbox)
// }
txtSearch.addEventListener('keyup',(e) => {
    let valueSearch = e.target.value;
    if( valueSearch.trim().length > 0) {
        clearData()
        valueSearch = valueSearch.trim().toLowerCase();
        let dataFilter = dataImg.filter(img => img.id == valueSearch);
        createImage(dataFilter)
    }else{
        createImage(dataImg)
    }
})

//close lightbox
document.body.addEventListener('click', (e) =>{
    if (e.target.matches('.lightbox')){
        //remove lightbox out of dom
        e.target.parentNode.removeChild(e.target);
    }
    if (e.target.matches('.btn-close')){
        //remove lightbox out of dom
        document.body.removeChild(e.target.parentNode);
    }
    if (e.target.matches('.btn-close span')){
        //remove lightbox out of dom
        document.body.removeChild(e.target.parentNode.parentNode);
    }
    
})