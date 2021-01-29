// + option
document.getElementById('case-plusnum').addEventListener('click' , function(){
    mobileCaseCost(true)
});
// - option
document.getElementById('case-decrease').addEventListener('click', function() {

    mobileCaseCost(false);
});

function mobileCaseCost(isIncrise) {
    const caseInput = document.getElementById('case-count');
        const caseCount = parseInt(caseInput.value);
        let caseNewCount = caseCount; 
        if (isIncrise == true) {
            caseNewCount = caseCount + 1;
        }
        if (isIncrise == false && caseCount>0) {
            caseNewCount = caseCount - 1
        }
        caseInput.value = caseNewCount;
        const caseTotal = caseNewCount * 59;
        document.getElementById('case-total').innerText = '$' + caseTotal;
}            
// phone Total plus count 
// document.getElementById('phone-Plus').addEventListener('click',function() {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;

//     const phoneTotalCost = phoneNewCount * 1219;
//     document.getElementById('phone-cost').innerText = "$" + phoneTotalCost
    
// })

// phone Total mines count
// document.getElementById('phone-decreas').addEventListener('click', function() {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     if (phoneCount > 0) {
//          phoneNewCount = phoneCount - 1;
        
//     }
//     phoneInput.value = phoneNewCount;

//     const phoneTotalCost = phoneNewCount * 1219;
//     document.getElementById('phone-cost').innerText = "$" + phoneTotalCost;

// })

// phone Total Count 
function phoneTotalCost(isincreases) {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if (isincreases == true) {
        phoneNewCount = phoneCount + 1;
        
    }

    if (isincreases== false && phoneCount > 0) {
         phoneNewCount = phoneCount - 1;
        
    }
    phoneInput.value = phoneNewCount;

    const phoneTotalCost = phoneNewCount * 1219;
    document.getElementById('phone-cost').innerText = "$" + phoneTotalCost;
 
}

document.getElementById('phone-Plus').addEventListener('click',function() {
    phoneTotalCost(true)
});


document.getElementById('phone-decreas').addEventListener('click', function() { 
    phoneTotalCost(false);
})




// document.getElementById('case-plusnum').addEventListener('click' , function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;

//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = "$"+caseTotal;
// })
// - option
// document.getElementById('case-deceras').addEventListener('click', function() {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
    
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = "$" + caseTotal;
// })




