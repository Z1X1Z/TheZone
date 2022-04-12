let touchNumber=new Map();
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var body = document.body;
    var script = document.getElementById('wadJSscript');
    script.type = 'application/javascript';
    script.src = url;
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
   // script.onreadystatechange = callback;
    //script.onload = callback;
    // Fire the loading
    body.appendChild(script);
    
    
    stallTillWad()
    
}
function stallTillWad(){if(typeof Wad=="function")initialize();else setTimeout(stallTillWad,100);}

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
let sound=Array(10);
let sound2=Array(10);
function initialize(){
    for(var o=0;o<10;o++){
    sound[o] =  new Wad({source : 'sine'});//, tuna   : hyperdriveTUNA});
     sound2[o] = new Wad({source : 'sine'});//, tuna   : hyperdriveTUNA});
    }
}

var cdnSwitch="wad.min.js";
if ( window.sessionStorage.getItem("alreadyReset")=="t"){if (window.online)cdnSwitch="https://unpkg.com/web-audio-daw@4.12.0"
loadScript(cdnSwitch,initialize);
}

let initialAngleSound = Array(10);
function startSound(e){
    sound[touchNumber.get(e.identifier)].stop();sound2[e.identifier].stop();
    
    let correlationForText=document.getElementById("allText").offsetHeight;
    
   let y = e.clientY-(window.innerHeight+correlationForText)/2.;
    let x = e.clientX- window.innerWidth/2.;
       let volume= -Math.sqrt(y*y+x*x)/(Math.max(window.innerHeight+correlationForText,window.innerWidth)/2.);
        initialAngleSound[touchNumber.get(e.identifier)] = (Math.atan2(y,x)+pi/2.+4*pi)%(2*pi);
        let frequency = Math.pow(2.,((initialAngleSound[touchNumber.get(e.identifier)])/pi/2*12+correction)/12.)*220.;
                                 //console.log(frequency)
                                 sound.pitch=frequency;
                                 sound2.pitch=frequency*2.;
                                 sound.volume=0.;
                                 sound2.volume=volume;
                                 sound[touchNumber.get(e.identifier)].play({env:{attack: .1, release:.02,hold:-1}});
                                 sound2[touchNumber.get(e.identifier)].play({env:{attack: .1, release:.02,hold:-1}});
}
                                 
function followSound(e){
let correlationForText=document.getElementById("allText").offsetHeight;

let y = e.clientY-(window.innerHeight+correlationForText)/2.;
let x = e.clientX-window.innerWidth/2.;
let volume= -Math.sqrt(y*y+x*x)/(Math.max(window.innerHeight+correlationForText,window.innerWidth)/2.);
let angleSound = Math.atan2(y,x);
angleSound=(angleSound-initialAngleSound[touchNumber.get(e.identifier)]+pi/2.+4.*pi)%(2*pi)+initialAngleSound[touchNumber.get(e.identifier)];
let frequency = Math.pow(2.,((angleSound)/pi/2*12+correction)/12.)*220.;
console.log(frequency)
     sound[touchNumber.get(e.identifier)].setPitch(frequency);
     sound2[touchNumber.get(e.identifier)].setPitch(2.*frequency);
     sound[touchNumber.get(e.identifier)].setVolume(volume*(((angleSound-initialAngleSound[touchNumber.get(e.identifier)]))/(2.*pi)));
     sound2[touchNumber.get(e.identifier)].setVolume(volume*(1.-((angleSound-initialAngleSound[touchNumber.get(e.identifier)]))/(2.*pi)));
                                      
                                     // sound.play({label:touchNumber,pitch:frequency, volume*(((angleSound-initialAngleSound[touchNumber]))/(2.*pi))},{timeConstant:0.});
                                                        //  sound2.play({label:touchNumber,pitch:frequency*2.,volume*(1.-((angleSound-initialAngleSound[touchNumber]))/(2.*pi))},{timeConstant:0.});
                                                          

}
let c = document.getElementById( 'container' );
if (navigator.userAgent.toLowerCase().match(/mobile/i)||(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)){
    container.addEventListener('touchstart', function(e)
                               {
        for(var o=0; o<e.changedTouches.length; o++)
        {touchNumber.set(e.changedTouches[o].identifier,o);startSound(e.changedTouches[o]);}
        
    }, false);
  container.addEventListener('touchmove', function(e) {
      for(var o=0; o<e.changedTouches.length; o++){
          touchNumber.set(e.changedTouches[o].identifier,o); followSound(e.changedTouches[o]);}
  }
      , false);
      
  container.addEventListener('touchend', function(e){
      for(var o=0; o<e.changedTouches.length; o++)
        {sound[touchNumber.get(e.changedTouches[o].identifier)].stop();sound2[e.changedTouches[o].identifier].stop();}
      
  }
                             , false);

    container.addEventListener('touchcancel', function(e){for(var o=0; o<e.changedTouches.length; o++)
    {sound[touchNumber.get(e.changedTouches[o].identifier)].stop();sound2[e.changedTouches[o].identifier].stop();}
        
        
    }, false);

}
else{
 c.addEventListener('mousedown', startSound, false);
 c.addEventListener('mousemove', followSound, false);
 c.addEventListener('mouseup', function(e){ sound.stop();sound2.stop()}, false);
}



