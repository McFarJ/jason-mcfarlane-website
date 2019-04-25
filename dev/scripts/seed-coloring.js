const   $ = require ('jquery'),
        // seedColors = ['hsla(14.6,50.2%,44.9%,1)', 'hsla(203.8,45.3%,29.4%,1)', 'hsla(90.9,49.3%,40.2%,1)', 'hsla(264,43.8%,31.4%,1)', 'hsla(339.6,49.5%,39.6%,1)', 'hsla(64.7,49.2%,64.5%,1)', 'hsla(52.5,78.6%,57.8%,1)', 'hsla(212.4,31.2%,68.6%,1)', 'hsla(12.5,77.3%,55.1%,1)']
        seedColors = ['hsla(14.6,100%,44.9%,1)', 'hsla(203.8,100%,29.4%,1)', 'hsla(90.9,100%,40.2%,1)', 'hsla(264,100%,31.4%,1)', 'hsla(339.6,100%,39.6%,1)', 'hsla(64.7,100%,64.5%,1)', 'hsla(52.5,100%,57.8%,1)', 'hsla(212.4,100%,68.6%,1)', 'hsla(12.5,100%,55.1%,1)']
        // seedColors = ['hsla(14.6,100%,44.9%,.5)', 'hsla(203.8,100%,29.4%,.5)', 'hsla(90.9,100%,40.2%,.5)', 'hsla(264,100%,31.4%,.5)', 'hsla(339.6,100%,39.6%,.5)', 'hsla(64.7,100%,64.5%,.5)', 'hsla(52.5,100%,57.8%,.5)', 'hsla(212.4,100%,68.6%,.5)', 'hsla(12.5,100%,55.1%,.5)']
let     prevColorNum = null,
        currColorNum = null,
        currentColor,
        prevBgSeedNum = null,
        currBgSeedNum = null,
        currentBgSeed = 0,
        prevFgSeedNum = null,
        currFgSeedNum = null,
        currentFgSeed = 0



function randomColorGen(){
    // alert('1 ranColGen running!')
    while(prevColorNum === currColorNum){
        currColorNum = Math.floor(Math.random() * 8);
    }
    prevColorNum = currColorNum;
    currentColor = seedColors[currColorNum];
}

function bgSeedSelector(){
    // alert('2 bgSeedSel running!')
    while(prevBgSeedNum === currBgSeedNum){
        currBgSeedNum = Math.floor(Math.random() * 75) + 1;
    }
    prevBgSeedNum = currBgSeedNum;
    currentBgSeed = `bg-seed${currBgSeedNum}`
}

function fgSeedSelector(){
    // alert('3 fgSeedSel running!')
    while(prevFgSeedNum === currFgSeedNum){
        currFgSeedNum = Math.floor(Math.random() * 3) + 1;
    }
    prevFgSeedNum = currFgSeedNum;
    currentFgSeed = `fg-seed${currFgSeedNum}`
}

function ColorSeeds(){
    // alert('main colorFunction running!')
    setInterval(function () {
        $(`.${currentBgSeed}`).css({'fill': 'hsla(0,0%,50%,1)'})
        $(`.${currentFgSeed}`).css({'fill': 'hsla(0,0%,50%,1)'})
        randomColorGen()
        bgSeedSelector()
        fgSeedSelector()
        $(`.${currentBgSeed}`).css({'fill': currentColor})
        $(`.${currentFgSeed}`).css({'fill': currentColor})
    }, 5000);
    
}

export { ColorSeeds }

