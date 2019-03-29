document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

  if ("IntersectionObserver" in window) {
   let lazyObserver = new IntersectionObserver((entries, observer) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         let lazyImage = entry.target;
         lazyImage.src = lazyImage.dataset.src;
         lazyImage.classList.remove('lazy');
         lazyObserver.unobserve(lazyImage);
      }
    })
  });

    lazyImages.forEach(lazyImage => lazyObserver.observe(lazyImage));
  } else {
    lazyImages.forEach((lazyImage) => {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove('lazy');
    });
  }
});