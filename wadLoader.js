function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var body = document.body;
    var script = document.getElementById('wadJSscript');
    script.type = 'application/javascript';
    script.src = url;
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //script.onreadystatechange = callback;
    //script.onload = callback;
    // Fire the loading
   // body.appendChild(script);
    
    
    stallTillWad()
}
function stallTillWad(){if(typeof Wad=="function")initialize();else setTimeout(stallTillWad,1);}

let hyperdriveTUNA = {
Overdrive:{
        outputGain: -9.154,           //-42 to 0 in dB
        drive: .2,                 //0 to 1
        curveAmount: .2,           //0 to 1
        algorithmIndex: 0,            //0 to 5, selects one of the drive algorithms
        bypass: 0
    },
    Delay:{
        feedback: .5,    //0 to 1+
        delayTime: 100,    //1 to 10000 milliseconds
        wetLevel: 0.25,     //0 to 1+
        dryLevel: .5,       //0 to 1+
        cutoff: 20000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
        bypass: 0
    }
};
let correction = 11.5 ;
let sound;
let sound2;
function initialize(){
    
    sound =  new Wad({source : 'sine'});//, tuna   : hyperdriveTUNA});
     sound2 = new Wad({source : 'sine'});//, tuna   : hyperdriveTUNA});
}

var cdnSwitch="wad.min.js";
if ( window.sessionStorage.getItem("alreadyReset")=="t"){if (window.online)cdnSwitch="https://unpkg.com/web-audio-daw@4.12.0"
loadScript(cdnSwitch,initialize);
}

let initialAngleSound;
function startSound(e){
    sound.stop();sound2.stop()
    
    let correlationForText=document.getElementById("allText").offsetHeight;
    
   let y = e.clientY-(window.innerHeight+correlationForText)/2.;
    let x = e.clientX- window.innerWidth/2.;
       let volume= -Math.sqrt(y*y+x*x)/(Math.max(window.innerHeight+correlationForText,window.innerWidth)/2.)*10.;
        initialAngleSound = (Math.atan2(y,x)+pi/2.+4*pi)%(2*pi);
        let frequency = Math.pow(2.,((initialAngleSound)/pi/2*12+correction)/12.)*220.;
                                 sound.pitch=frequency;
                                 sound2.pitch=frequency*2;
        sound.setVolume(0.);
        sound2.setVolume(volume);

        sound.play({env:{attack: .2, release:.1,hold:-1}});
        sound2.play({env:{attack: .2, release:.1,hold:-1}});
}
                                 
function followSound(e){
            
let correlationForText=document.getElementById("allText").offsetHeight;

let y = e.clientY-(window.innerHeight+correlationForText)/2.;
let x = e.clientX-window.innerWidth/2.;
let volume= -Math.sqrt(y*y+x*x)/(Math.max(window.innerHeight+correlationForText,window.innerWidth)/2.)*10.;
let angleSound = Math.atan2(y,x);
angleSound=(angleSound-initialAngleSound+pi/2.+4.*pi)%(2*pi)+initialAngleSound;
let frequency = Math.pow(2.,((angleSound)/pi/2*12+correction)/12.)*220.;
sound.setPitch(frequency);
sound2.setPitch(frequency*2);
sound.setVolume(volume*(((angleSound-initialAngleSound))/(2.*pi)));
sound2.setVolume(volume*(1.-((angleSound-initialAngleSound))/(2.*pi)));
}
let c = document.getElementById( 'container' );
if (navigator.userAgent.toLowerCase().match(/mobile/i)||(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)){
  c.addEventListener('touchstart', function(e) {e.preventDefault(); e.stopImmediatePropagation();
                                                startSound(e.touches[0]);}, false);
  c.addEventListener('touchmove', function(e) {e.preventDefault();e.stopImmediatePropagation();
                                                followSound(e.touches[0]);}, false);
  c.addEventListener('touchend', function(e){ e.preventDefault();e.stopImmediatePropagation()
                                            sound.stop();sound2.stop()}, false);
  c.addEventListener('touchcancel', function(e){ e.preventDefault();e.stopImmediatePropagation()
                                            ysound.stop();sound2.stop()}, false);
}
else{
 c.addEventListener('mousedown', startSound, false);
 c.addEventListener('mousemove', followSound, false);
 c.addEventListener('mouseup', function(e){ sound.stop();sound2.stop()}, false);
}



