// MOSTRAR MENU

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// Remover menu

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Sombra no header


const shadowHeader =  ()=>{
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

// Enviar emails

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_ob52d6k', 'template_fyebngb', '#contact-form', 'ZYshLOvHGzqoxwGPn')
    .then(()=>{
        //Mostrar mensagem enviada
        contactMessage.textContent = 'Mensagem enviada com sucesso.'

        //Remover mensagem após 5 segundos
        setTimeout(()=>{
            contactMessage.textContent = ''
        }, 5000)

        //Limpar input
        contactForm.reset()

    }, ()=>{
        //Mostrar mensagem de Erro
        contactMessage.textContent = 'Mensagem não enviada (erro de serviço).'
    })

}
  
contactForm.addEventListener('submit', sendEmail)

// Links Ativos Scroll

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionClass.classList.add('active-link')
              }else{
                sectionClass.classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll', scrollActive)

// Mostrar Scroll UP

const scrollUP = () =>{
    const scrollUP = document.getElementById('scroll-up')
    this.scrollY>= 350 ?  scrollUP.classList.add('show-scroll')
                                            :scrollUP.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUP)

// Tema Escuro e Claro

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme)
    localStorage.setItem('selected-icon', getCurrentIcon)
})

// Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2400,
    delay: 400,
    reset: true // Repete a animação
})
sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})