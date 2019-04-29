const   $ = require ('jquery')
let     prevBgSeedNum = null,
        currBgSeedNum = null,
        currentBgSeed = 0,
        prevFgSeedNum = null,
        currFgSeedNum = null,
        currentFgSeed = 0

function bgSeedSelector(){
    while(prevBgSeedNum === currBgSeedNum){
        currBgSeedNum = Math.floor(Math.random() * 75) + 1;
    }
    prevBgSeedNum = currBgSeedNum;
    currentBgSeed = `bg-seed${currBgSeedNum}`
}

function fgSeedSelector(){
    while(prevFgSeedNum === currFgSeedNum){
        currFgSeedNum = Math.floor(Math.random() * 3) + 1;
    }
    prevFgSeedNum = currFgSeedNum;
    currentFgSeed = `fg-seed${currFgSeedNum}`
}

colorSeeds(){
    let thisVar = this;
    setInterval(function () {
        $(`.${currentBgSeed}`).css({'fill': 'hsla(0,0%,50%,1)'})
        if (thisVar.state.enlightened){
            $(`.${currentFgSeed}`).css({'fill': 'hsla(100,50%,50%,1)'})
        }
        else if (!thisVar.state.enlightened){
            $(`.${currentFgSeed}`).css({'fill': 'hsla(100,50%,50%,1)'})
        }
        bgSeedSelector()
        fgSeedSelector()
        $(`.${currentBgSeed}`).css({'fill': 'hsla(339.6,49.5%,39.6%,1)'})
        $(`.${currentFgSeed}`).css({'fill': 'hsla(339.6,49.5%,39.6%,1)'})
    }, 5000);
}

export { ColorSeeds }