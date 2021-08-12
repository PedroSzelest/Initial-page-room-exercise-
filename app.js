function slide() {
    $first_section = document.querySelector(".main-section-first")
    $second_section = document.querySelector(".main-section-second")
    $third_section = document.querySelector(".main-section-third")
    $back = document.querySelector(".back")
    $next = document.querySelector(".next")
    patron = 0

    $next.addEventListener("click", ()=> {
        if (patron > -200) {
            patron -= 100
            $first_section.style.transform = `translateX(${patron}vw)`
            $second_section.style.transform = `translateX(${patron}vw)`
            $third_section.style.transform = `translateX(${patron}vw)`
            console.log(patron)
        }
    })

    $back.addEventListener("click", ()=> {
        if (patron < 0) {
            patron += 100
            $first_section.style.transform = `translateX(${patron}vw)`
            $second_section.style.transform = `translateX(${patron}vw)`
            $third_section.style.transform = `translateX(${patron}vw)`
            console.log(patron)
        }
    })
}

slide()