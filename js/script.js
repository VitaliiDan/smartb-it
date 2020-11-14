 function parallax (event) {
     this.querySelectorAll(".words").forEach(words => {
         let speed = words.getAttribute('data-speed');
         words.style.transform = `translate(${event.clientX*speed/1000}px, ${event.clientY*speed/1000}px)`
     })
 }

 document.addEventListener('mousemove', parallax);