function adBlockCheck() {
    setTimeout(function() {
        document.body.innerHTML += `<div class="adsbygoogle" id="test-ad"></div>`;
        const testAd = document.getElementById('test-ad');
        const testAdStyle = getComputedStyle(testAd);

        if (testAdStyle.display === 'none') {	
            // Adblock enabled: do something
        } else {	
            // Adblock disabled: do something
        }
    },1000)
}

// 2) Call the function:
adBlockCheck()
