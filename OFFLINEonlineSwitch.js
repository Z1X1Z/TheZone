if (window.location.protocol.match(/http/i)||window.location.href.match(/zonex.space/i))
{
    window.threeSonicStarship = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r178/three.min.js"
    window.three = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r123/three.min.js"
    window.threeThrone = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r111/three.min.js"
    window.online=true;
    window.useCDN=true;

}
else{
    window.threeSonicStarship = "three.core.min.js"//"threer127.min.js"
    window.three = "three.min.js"
    window.threeThrone = "three.min.js"
    window.online=false;
    window.useCDN=false;
}

    
