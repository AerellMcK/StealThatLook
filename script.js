const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
        console.log(entry.target, entry.isIntersecting, entry.intersectionRatio);
        if(entry.target.dataset.anim) entry.target.classList.toggle(entry.target.dataset.anim, entry.isIntersecting)
    }
});

const sections = document.querySelectorAll('.section');
for (const section of sections) observer.observe(section);