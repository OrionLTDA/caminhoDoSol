const prevDeclaration = $('#prevDeclaration')
const nextDeclaration = $('#nextDeclaration')
const firstDeclaration = $('#firstDeclaration')

const ascIndex = $('#ascIndex')
const ascMax = $('#ascMax')

let declarationIndex = 1
const declarationsNumber = 2

ascIndex.text(declarationIndex)
ascMax.text(declarationsNumber)

prevDeclaration.on('click', () => {
    declarationIndex -= 1

    if (declarationIndex < 1) {
        declarationIndex = 1
        return
    }

    if (declarationIndex > 2) {
        declarationIndex = 2
        return
    }
    
    $(firstDeclaration).css({
        'margin-left':"calc( var(--declaracaoDim) * 0)"
    })

    articleSlideIndexChanger(declarationIndex)
})

nextDeclaration.on('click', () => {
    declarationIndex += 1

    if (declarationIndex < 1) {
        declarationIndex = 1
        return
    }

    if (declarationIndex > 2) {
        declarationIndex = 2
        return
    }

    $(firstDeclaration).css({
        'margin-left':"calc( var(--declaracaoDim) * -1)"
    })

    articleSlideIndexChanger(declarationIndex)
})

function articleSlideIndexChanger( i ) {
    ascIndex.text(declarationIndex)
}