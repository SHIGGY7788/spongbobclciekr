'use strict'


function moner() {
    // Create a new audio element
    var audio = new Audio("/images/moner.mp3");
    audio.play();
}






let money = document.getElementById('money');
let moneyPerSecond = document.getElementById('moneyPerSecond');

let cookbtn = document.getElementById('cook');
let cookUpgrade = document.getElementById('CookUpg');
let cookCost = document.getElementById('cookUpgCost');
let cookUpgrades = document.getElementById('cookUpgCount');
let cookEfficiency = 1;

//Spatular upgrade
let spatular = document.getElementById('spatular');
let spatUpgCost = document.getElementById('spatUpgCost');
let spatUpgDisplay = document.getElementById('spatUpgDisplay');
let SpatEff = 0;

//Pickle upgrade
let pickles = document.getElementById('pickles');
let pickleUpgCost = 1000;

// mayo uograde
let mayo = document.getElementById('mayo');
let mayoUpgCost = 2500;

// upgrade buns
let buns = document.getElementById('lowtierbuns');
let bunUpgCost = 5000;

//lettuce
let lettuce = document.getElementById('lettuce')
let lettuceUpgCost = 10000;

//tomator
let tomato = document.getElementById('tomator')
let tomatoUpgCost = 25000;

//ketchup
let ketchup = document.getElementById('ketchup')
let ketchupUpgCost = 50000;

//mustard
let mustard = document.getElementById('mustard')
let mustardUpgCost = 100000;

//cheese
let cheese = document.getElementById('cheese')
let cheeseUpgCost = 250000

//extra onions
let onion = document.getElementById('onion')
let onionUpgCost = 500000

//pink jelly
let pinkJelly = document.getElementById('pinkjelly')
let pinkJellyUpgCost = 1000000

//blue jelly
let blueJelly = document.getElementById('bluejelly')
let blueJellyUpgCost = 2500000

// main clicker
function cook() {
    money.innerHTML = parseInt(money.innerHTML) + cookEfficiency;
};
cookbtn.addEventListener('click', cook);

//When the user clicks on the cook, splash the cook efficiency around the users cursor
cookbtn.addEventListener('click', function(event){
    let cookEfficiencyDisplay = document.createElement('div');
    cookEfficiencyDisplay.innerHTML = '+' + cookEfficiency;
    cookEfficiencyDisplay.style.position = 'absolute';
    cookEfficiencyDisplay.style.top = (event.clientY - 35) + 'px'; // Adjusted top position
    cookEfficiencyDisplay.style.left = event.clientX + 'px';
    cookEfficiencyDisplay.style.color = 'lime';
    cookEfficiencyDisplay.style.fontSize = '20px';
    cookEfficiencyDisplay.style.fontWeight = 'bold';
    document.body.appendChild(cookEfficiencyDisplay);
    
    setTimeout(() => {
        let position = parseInt(cookEfficiencyDisplay.style.top);
        let opacity = 1;
        let interval = setInterval(() => {
            position -= 2; // Adjust the floating speed
            opacity -= 0.02; // Adjust the fading speed
            cookEfficiencyDisplay.style.top = position + 'px';
            cookEfficiencyDisplay.style.opacity = opacity;
            if (position <= -40) { // Adjust the end position
                clearInterval(interval);
                cookEfficiencyDisplay.remove();
            }
        }, 3); // Adjust the interval duration
    }, 300);
});
//////////////////////////ABBREVIATIONS//////////////////////

// function abbreviateNumber(number) {
//     const abbreviations = ['', 'K', 'M', 'B', 'T', 'Qd', 'Qn', 'Sx', 'Sp', 'Oc', 'No', 'De'];
//     const ranges = [1000, 1000000, 1000000000, 1000000000000, 1000000000000000, 
//                     1000000000000000000, 1000000000000000000000, 1000000000000000000000000,
//                     1000000000000000000000000000, 1000000000000000000000000000000,
//                     1000000000000000000000000000000000, 1000000000000000000000000000000000000];
    
//     for (let i = abbreviations.length - 1; i >= 0; i--) {
//         if (number >= ranges[i]) {
//             return (number / ranges[i]).toFixed(1) + abbreviations[i];
//         }
//     }
//     return number.toString();
// }


//money per sec update//




//////////////////////CLICKER UPGRADES/////////////////////////

//spatular upgrades
function upgSpat(){
    if (parseInt(money.innerHTML) >= parseInt(spatUpgCost.innerHTML)){
        money.innerHTML = parseInt(money.innerHTML) - parseInt(spatUpgCost.innerHTML);
        spatUpgCost.innerHTML = parseInt(spatUpgCost.innerHTML) + parseInt(spatUpgCost.innerHTML) * 0.6;
        spatUpgCost.innerHTML = (parseInt(spatUpgCost.innerHTML)).toFixed(0);
        cookEfficiency += 2;
        SpatEff = SpatEff + 2;
        spatUpgDisplay.innerHTML = SpatEff;
    };
};
spatular.addEventListener('click', upgSpat);

//pickle upgrades
function upgPickle(){
    if (parseInt(money.innerHTML) >= pickleUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - pickleUpgCost;
        cookEfficiency += 20;
        pickles.removeEventListener('click', upgPickle);
        pickles.style.transition = 'opacity 1s';
        pickles.style.opacity = 0;
        setTimeout(() => {
            pickles.remove();
        }, 1000);
    };
};
pickles.addEventListener('click', upgPickle);

//mayo upgrades
function upgMayo(){
    if (parseInt(money.innerHTML) >= mayoUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - mayoUpgCost;
        cookEfficiency += 50;
        mayo.removeEventListener('click', upgMayo);
        mayo.style.transition = 'opacity 1s';
        mayo.style.opacity = 0;
        setTimeout(() => {
            mayo.remove();
        }, 1000);
    };
};
mayo.addEventListener('click', upgMayo);

//Buns upgrades
function upgBuns(){
    if (parseInt(money.innerHTML) >= bunUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - bunUpgCost;
        cookEfficiency += 100;
        buns.removeEventListener('click', upgBuns);
        buns.style.transition = 'opacity 1s';
        buns.style.opacity = 0;
        setTimeout(() => {
            buns.remove();
        }, 1000);
    };
};
buns.addEventListener('click', upgBuns);

//lettuce upgrade
function upgLettuce(){
    if (parseInt(money.innerHTML) >= lettuceUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - lettuceUpgCost;
        cookEfficiency += 200;
        lettuce.removeEventListener('click', upgLettuce);
        lettuce.style.transition = 'opacity 1s';
        lettuce.style.opacity = 0;
        setTimeout(() => {
            lettuce.remove();
        }, 1000);
    };
};
lettuce.addEventListener('click', upgLettuce);

//tomato upgrade
function upgTomato(){
    if (parseInt(money.innerHTML) >= tomatoUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - tomatoUpgCost;
        cookEfficiency += 500;
        tomato.removeEventListener('click', upgTomato);
        tomato.style.transition = 'opacity 1s';
        tomato.style.opacity = 0;
        setTimeout(() => {
            tomato.remove();
        }, 1000);
    };
};
tomato.addEventListener('click', upgTomato);

//ketchup upg
function upgKetchup(){
    if (parseInt(money.innerHTML) >= ketchupUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - ketchupUpgCost;
        cookEfficiency += 1000;
        ketchup.removeEventListener('click', upgKetchup);
        ketchup.style.transition = 'opacity 1s';
        ketchup.style.opacity = 0;
        setTimeout(() => {
            ketchup.remove();
        }, 1000);
    };
};
ketchup.addEventListener('click', upgKetchup);

//mustard upg
function upgMustard(){
    if (parseInt(money.innerHTML) >= mustardUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - mustardUpgCost;
        cookEfficiency += 2000;
        mustard.removeEventListener('click', upgMustard);
        mustard.style.transition = 'opacity 1s';
        mustard.style.opacity = 0;
        setTimeout(() => {
            mustard.remove();
        }, 1000);
    };
};
mustard.addEventListener('click', upgMustard);

//cheese upgrade
function upgCheese(){
    if (parseInt(money.innerHTML) >= cheeseUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - cheeseUpgCost;
        cookEfficiency += 5000;
        cheese.removeEventListener('click', upgCheese);
        cheese.style.transition = 'opacity 1s';
        cheese.style.opacity = 0;
        setTimeout(() => {
            cheese.remove();
        }, 1000);
    };
};
cheese.addEventListener('click', upgCheese);

//xtra onions
function upgOnion(){
    if (parseInt(money.innerHTML) >= onionUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - onionUpgCost;
        cookEfficiency += 10000;
        onion.removeEventListener('click', upgOnion);
        onion.style.transition = 'opacity 1s';
        onion.style.opacity = 0;
        setTimeout(() => {
            onion.remove();
        }, 1000);
    };
};
onion.addEventListener('click', upgOnion);

//pink jelly upgrade
function upgPinkJelly(){
    if (parseInt(money.innerHTML) >= pinkJellyUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - pinkJellyUpgCost;
        cookEfficiency += 20000;
        pinkJelly.removeEventListener('click', upgPinkJelly);
        pinkJelly.style.transition = 'opacity 1s';
        pinkJelly.style.opacity = 0;
        setTimeout(() => {
            pinkJelly.remove();
        }, 1000);
    };
};
pinkJelly.addEventListener('click', upgPinkJelly);

//blue jelly upgrade
function upgBlueJelly(){
    if (parseInt(money.innerHTML) >= blueJellyUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - blueJellyUpgCost;
        cookEfficiency += 50000;
        blueJelly.removeEventListener('click', upgBlueJelly);
        blueJelly.style.transition = 'opacity 1s';
        blueJelly.style.opacity = 0;
        setTimeout(() => {
            blueJelly.remove();
        }, 1000);
    };
};
blueJelly.addEventListener('click', upgBlueJelly);

////////////////IDLE UPGRADES/////////////////


//pretty patty variables
let ppUnlock = document.getElementById('ppUnlock');
let ppCost = document.getElementById('ppCost');
let ppPerSecond = document.getElementById('ppBucksPerSec');
let ppHidden = document.getElementById('ppHidden');
let standsOpen = document.getElementById('standsOpen');
let buyStandBtn = document.getElementById('buyStand');
let buyAdBtn = document.getElementById('buyAd');
let buyQualityBtn = document.getElementById('buyQuality');
let ppStartCost = 500;


let openStandsDisplay = document.getElementById('openStandsDisplay');
let adCountDisplay = document.getElementById("adCountDisplay");
let qualityCountDisplay = document.getElementById('qualityCountDisplay');

let standsCostDisplay = document.getElementById('standCost');
let adsCostDisplay = document.getElementById('adCost');
let qualityCostDisplay = document.getElementById('qualityCost');

let standCost = 100;
let adCost = 1000;
let qualityCost = 5000;

let standCount = 0;
let adCount = 0;
let qualityCount = 0;
let ppTotal = 0;

let standEff = 5;
let adEff = 10;
let qualityEff = 25;

//pp Functionality

//buyStands
function buyStands(){
    if (parseInt(money.innerHTML) >= standCost) {
        money.innerHTML = parseInt(money.innerHTML) - standCost;
        standCount++;
        standCost = (standCost * 1.3).toFixed(0);
        standsCostDisplay.innerHTML = standCost;
        openStandsDisplay.innerHTML = standCount;

    }
}

buyStandBtn.addEventListener('click', buyStands);

//buyAds
function buyAds(){
    if (parseInt(money.innerHTML) >= adCost) {
        money.innerHTML = parseInt(money.innerHTML) - adCost;
        adCount++;
        adCost = (adCost * 1.1).toFixed(0);
        adsCostDisplay.innerHTML = adCost;
        adCountDisplay.innerHTML = adCount;
    }
}

buyAdBtn.addEventListener('click', buyAds);

//buyQuality
function buyQuality(){
    if (parseInt(money.innerHTML) >= standCost) {
        money.innerHTML = parseInt(money.innerHTML) - standCost;
        qualityCount++;
        qualityCost = (qualityCost * 1.1).toFixed(0);
        qualityCostDisplay.innerHTML = qualityCost;
        qualityCountDisplay.innerHTML = qualityCount;
    }
}

buyQualityBtn.addEventListener('click', buyQuality);




//get ppTotal
function getPPTotal() {
    ppTotal = standCount * (standEff + adCount * adEff + qualityCount * qualityEff);
}


setInterval(getPPTotal, 1000);

//Add the pp total to da money every second
function addppBucks() {
    money.innerHTML = parseInt(money.innerHTML) + ppTotal;
    moneyPerSecond.innerHTML = ppTotal;
}

setInterval(addppBucks, 1000);



function startPrettyPatty(){
    if (parseInt(money.innerHTML) >= ppStartCost) {
        ppUnlock.classList.remove('visible');
        ppUnlock.remove();
        ppHidden.classList.remove('hidden');
        ppHidden.classList.add('visible');
        money.innerHTML = parseInt(money.innerHTML) - ppStartCost;
        ppUnlock.removeEventListener('click', startPrettyPatty);
        standCount++;
        openStandsDisplay.innerHTML = standCount;

    }
}

ppUnlock.addEventListener('click', startPrettyPatty);


//MAID SERVICE !!!!
//pretty patty variables
let maidUnlock = document.getElementById('maidUnlock');
let maidsCost = document.getElementById('maidsCost');
let maidHidden = document.getElementById('maidHidden');
let maidsHired = document.getElementById('maidsHired');
let buyMaidButton = document.getElementById('buyMaid');
let buySpeedButton = document.getElementById('buySpeed');
let buySuppliesButton = document.getElementById('buyQuality');
let maidStartCost = 10000;


let maidCountDisplay = document.getElementById('maidCountDisplay');
let speedCountDisplay = document.getElementById("speedCountDisplay");
let suppliesCountDisplay = document.getElementById('suppliesCountDisplay');

let maidCostDisplay = document.getElementById('maidCost');
let speedCostDisplay = document.getElementById('speedCost');
let suppliesCostDisplay = document.getElementById('suppliesCost');

let maidCost = 100;
let speedCost = 1000;
let suppliesCost = 5000;

let maidCount = 0;
let speedCount = 0;
let suppliesCount = 0;
let maidTotal = 0;

let maideff = 10;
let speedEff = 20;
let suppliesEff = 50;

//maid Functionality

//buyMaids
function hireMaids(){
    if (parseInt(money.innerHTML) >= maidCost) {
        money.innerHTML = parseInt(money.innerHTML) - maidCost;
        maidCount++;
        maidCost = (maidCost * 1.3).toFixed(0);
        maidCostDisplay.innerHTML = maidCost;
        maidCountDisplay.innerHTML = maidCount;

    }
}

hireMaid.addEventListener('click', hireMaids);

//buySpeed
function buySpeed(){
    if (parseInt(money.innerHTML) >= speedCost) {
        money.innerHTML = parseInt(money.innerHTML) - speedCost;
        speedCount++;
        speedCost = (speedCost * 1.1).toFixed(0);
        speedCostDisplay.innerHTML = speedCost;
        speedCountDisplay.innerHTML = speedCount;
    }
}

buySpeedButton.addEventListener('click', buySpeed);

//buyQuality
function buySupplies(){
    if (parseInt(money.innerHTML) >= suppliesCost) {
        money.innerHTML = parseInt(money.innerHTML) - suppliesCost;
        suppliesCount++;
        suppliesCost = (suppliesCost * 1.1).toFixed(0);
        suppliesCostDisplay.innerHTML = suppliesCost;
        suppliesCountDisplay.innerHTML = suppliesCount;
    }
}

buySuppliesButton.addEventListener('click', buySupplies);




//get maidTotal
function getMaidTotal() {
    maidTotal = maidCount * (maidEff + speedCount * speedEff + suppliesCount * suppliesEff);
}


setInterval(getMaidTotal, 1000);

//Add the pp total to da money every second
function addMaidBucks() {
    money.innerHTML = parseInt(money.innerHTML) + maidTotal;
}

setInterval(addMaidBucks, 1000);



function startMaidService(){
    if (parseInt(money.innerHTML) >= maidStartCost) {
        maidUnlock.classList.remove('visible');
        maidUnlock.remove();
        maidHidden.classList.remove('hidden');
        maidHidden.classList.add('visible');
        money.innerHTML = parseInt(money.innerHTML) - maidStartCost;
        maidUnlock.removeEventListener('click', startMaidService);
        maidCount++;
        maidCountDisplay.innerHTML = maidCount;

    }
}

maidUnlock.addEventListener('click', startMaidService);


///GET TOTAL PER SCOND!
function getTotalPerSecond(){
    moneyPerSecond.innerHTML = ppTotal + maidTotal;
}