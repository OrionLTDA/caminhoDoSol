const menuBtn = $('#menuBtn')

menuBtn.on('click', () => {
    $('#navbar').toggle()
})

$( window ).resize( () => {
    showMenu()
})

showMenu()

function showMenu(){
    const screenWidth = screen.width;
    const windowWidth = window.innerWidth;

    if ( screenWidth <= 700 || windowWidth <= 700){
        $('#navbar').css({
            "display":"none"
        })

        $('#menuBtn').css({
            "display":"flex"
        })

    }else{
        $('#navbar').css({
            "display":"flex"
        })
        $('#menuBtn').css({
            "display":"none"
        })
    }
}