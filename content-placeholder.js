const headerEle = document.getElementById('header');
const titleEle = document.getElementById('title');
const excerptEle = document.getElementById('excerpt');
const profile_img_Ele = document.getElementById('profile_img');
const nameEle = document.getElementById('name');
const dateEle = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 3000);

function getData() {
    headerEle.innerHTML = `<img src='https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867761_1280.jpg' alt='card-header-image'/>`;

    titleEle.innerHTML = 'Lorem ipsum dolor sit amet';

    excerptEle.innerHTML =
        'Consequatur voluptas et quis et blanditiis sint ut velit.Est fugit et officia repudiandae ab hic ut molestiae.';

    profile_img_Ele.innerHTML = `<img src='https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg' alt='card-header-image'/>`;

    nameEle.innerHTML = 'Janny Young';
    dateEle.innerHTML = 'May 15, 2020';

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
    animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
