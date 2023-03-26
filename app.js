// Make images listen for click event
const images = document.querySelectorAll('.gallery-img');
[...images].forEach(image => {
    image.addEventListener('click', ()=> {
        console.log('hi')
        showPopup(image);
    })
});

// Expand and popup window for images
const showPopup = (item) => {
    console.log(item)
    let popup = document.querySelector('.image-popup');
    const image = document.querySelector('.large-img');
    const closeBtn = document.querySelector('.close-btn');

    popup.classList.remove('hide');
    image.src = item.src;
    closeBtn.addEventListener('click', () => {
        popup.classList.add('hide');
    })
}

// Filter selection
const filters = document.querySelectorAll('.list');
let currentActive = document.querySelector('.list.active');
[...filters].forEach(filter => {
    filter.addEventListener('click', () => {
        filter.classList.add('active');
        currentActive.classList.remove('active');
        currentActive = filter;
    })
})


// // When the user scrolls the page, execute myFunction
// window.onscroll = () => stickyPrompt();

// // Get the prompt box
// const promptBox = document.querySelector(".prompt-box");

// // Get the offset position of the prompt box
// let sticky = promptBox.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// const stickyPrompt = () => {
//     window.pageYOffset >= sticky ? promptBox.classList.add("sticky") : promptBox.classList.remove("sticky");
// }