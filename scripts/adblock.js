setTimeout(function() {
fetch('https://www3.doubleclick.net', {
method: "HEAD",
mode: "no-cors",
cache: "no-store",
}).catch(()=>{
alert("detect AdBlock")
});
}, 3500);
