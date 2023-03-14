const menuBtn = $('#menuBtn')
const openMenu = $("#openMenu")
const closeMenu = $("#closeMenu")
const headerWppNAV = $('#headerWppNAV')
const menuLi = $(".navbarLi")

$(menuBtn).on('click', () => {
    $('#navbar').toggle()
    $(openMenu).toggle()
    $(closeMenu).toggle()
    $(headerWppNAV).toggle()
})

$("#navbar>ul").on("click", () => {
    $('#navbar').toggle()
    $(openMenu).toggle()
    $(closeMenu).toggle()
    $(headerWppNAV).toggle()
})

$( window ).resize( () => {
    showMenu()
})

showMenu()

function showMenu(){
    const screenWidth = screen.width;
    const windowWidth = window.innerWidth;

    // SE FOR MENOR QUE 900
    if ( screenWidth <= 900 || windowWidth <= 900){
        $('#navbar').css({
            "display":"none"
        })

        $(openMenu).css({
            "display":"flex"
        })

        $(closeMenu).css({
            "display":"none"
        })

        $(headerWppNAV).css({
            "display":"none"
        })

    }else{
        $('#navbar').css({
            "display":"flex"
        })

        $(closeMenu).css({
            "display":"none"
        })

        $(headerWppNAV).css({
            "display":"none"
        })

    }
}

