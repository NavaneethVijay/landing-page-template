window.onload = () => {
  let options = {
    threshold: 0,
  }

  let rotateLens = (e) => {
      let lens = document.querySelectorAll('.lens')
      let parent = document.getElementById('lens-hero-main');
      parent.style.transform = 'rotate(' + window.pageYOffset / 20 + 'deg)'
      lens.forEach(len => {
        len.style.transform = 'rotate(' + window.pageYOffset / 20 + 'deg)'
      })
  }
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry.intersectionRatio);
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        // entry.target.classList.add('sticky')
        // entry.target.classList.add('bottom-0')
        document.addEventListener('scroll', rotateLens)
      } else {
        // entry.target.classList.remove('sticky')
        // entry.target.classList.remove('bottom-0')
        document.removeEventListener('scroll', rotateLens)
      }
    })
  }

  let observer = new IntersectionObserver(callback, options)

  let sections = document.getElementById('lenssection')
  observer.observe(sections)
}
