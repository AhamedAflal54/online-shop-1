let bar = document.querySelector('#slid-bar');
let nav = document.querySelector('#navbar');


bar.onclick = () => {
    nav.classList.add("active");
}
// if (bar) {
//     bar.addEventListener("click", () => {
//         nav.classList.add("active");
//     });
// }

document.addEventListener('DOMContentLoaded', function () {
    var mainImg = document.querySelector('.MainImg');
    var smallImgs = document.querySelectorAll('.smallimg');

    smallImgs.forEach(function (smallImg, index) {
        smallImg.addEventListener('click', function () {
            mainImg.src = smallImg.src;
        });
    });
});