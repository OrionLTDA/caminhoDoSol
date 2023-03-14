const prevDeclaration = $('.prevDeclaration')
const nextDeclaration = $('.nextDeclaration')
const firstDeclaration = $('#firstDeclaration')
const articleSlider = $('#articleSlider')

const ascIndex = $('#ascIndex')
const ascMax = $('#ascMax')

let declarationIndex = 1
const declarationsNumber = 2

ascIndex.text(declarationIndex)
ascMax.text(declarationsNumber)

// BUTTONS
prevDeclaration.on('click', () => {
    swipeDeclaration(-1)
})

nextDeclaration.on('click', () => {
    swipeDeclaration(1)
})

// TOUCH
$(articleSlider).on("swipeleft", swipeDeclaration(-1) );

$(articleSlider).on("swiperight", swipeDeclaration(1) );


function swipeDeclaration(i) {
    declarationIndex += i

    if (declarationIndex < 1) {
        declarationIndex = 1
        return
    }

    if (declarationIndex > 2) {
        declarationIndex = 2
        return
    }

    if (i == 1) {
        $(firstDeclaration).css({
            'margin-left': "calc( var(--declaracaoDim) * -1)"
        })
    } else if (i == -1) {
        $(firstDeclaration).css({
            'margin-left': "calc( var(--declaracaoDim) * 0)"
        })
    }

    articleSlideIndexChanger(declarationIndex)
}

function articleSlideIndexChanger(i) {
    ascIndex.text(declarationIndex)
}