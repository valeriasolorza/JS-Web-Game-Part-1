
function tile (src, left, bottom, width, height){
    for( let h = 0; h < height; h++){
        for ( let w = 0; w < width; w++){
            newImg(src,left + w,bottom + h)
        }
    }
}

function newImg(src, left, bottom){
    let image = document.createElement('img')
    image.src = src
    image.style.position = 'fixed'
    image.style.left = left 
    image.style.bottom = bottom
    document.body.append(image)
    return image
}

function newItem(url, left, bottom){
    let item = newImg(url, left, bottom)
    item.addEventListener('dblclick', function(){item.remove
    ()})
}

let skyHeight = window.innerHeight / 2
let grassHeight = window.innerHeight / 2

// tile('assets/sky.png', '0', '0', window.innerWidth(), skyHeight)



newImg('assets/green-character.gif', '100px', '100px')
newImg('assets/pine-tree.png', '450px', '200px')
newImg('assets/tree.png', '200px', '300px')
newImg('assets/pillar.png', '350px', '100px')
newImg('assets/crate.png', '150px', '200px')
newImg('assets/well.png', '500px', '425px')

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')




// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)