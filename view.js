
AOS.init();


const tl = gsap.timeline({ defaults: { ease: 'power4' } })
const tl2 = gsap.timeline({ defaults: { duration: 1.5, delay: 1 } })

tl.to('.navbar', { opacity: 0, duration: 0 })
tl.to('.text', { y: '0%', duration: 1.2 })
tl.to('.intro', { y: '-100%', duration: 1.2, delay: .7 })
tl.to('.navbar', { opacity: 1, duration: 1 })
