const shareButton = document.querySelector('.share');
const shareOptions = document.querySelector('.share-options');
const triangle = document.querySelector('.triangle');

shareButton.addEventListener('click', (event) => {
     shareOptions.classList.toggle("pop-up");
     triangle.classList.toggle("pop-up");
})

document.addEventListener('click', (event) => {
     if (!shareButton.contains(event.target) && !shareOptions.contains(event.target)) {
          shareOptions.classList.add("pop-up");
          triangle.classList.add("pop-up");
     }
})

