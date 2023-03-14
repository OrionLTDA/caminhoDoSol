const foto = $(".fotos")
const fotos = $("#fotos")

const photo = $("#foto")
const closeFoto = $("#closeFoto")

let ph = null
let ft = null

$(foto).on("click", (e) => {
    ph = e.currentTarget
    ft = e.target

    showPhoto()
})

$(closeFoto).on("click", () => {

    $(ph).append(ft)

    $(fotos).css({
        "display":"flex"
    })
    
    $(photo).css({
        "display":"none"
    })
})


function showPhoto(){

    $(photo).append(ft);

    $(fotos).css({
        "display":"none"
    })

    $(photo).css({
        "display":"flex"
    })

}
