
let touchNumber=new Map();
let unerrored = true;
function loadScript(url, callback)
{
    var script = document.getElementById('wadJSscript');//document.createElement("script");//
    script.type = 'application/javascript';
    script.src = url;
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //script.onreadystatechange =  callback;
    //script.onload = callback;
    script.onerror=function(){    var s = document.createElement("script");//document.getElementById('threeJSscript');
        s.type = 'text/javascript';
        s.src = "wad.min.js";
        document.body.appendChild(s);
        }
}

function stallTillWad(){if(typeof Wad=="function"){initialize();} else  setTimeout(stallTillWad,10);}
stallTillWad()//lurker

let hyperdriveTUNA = {
Overdrive:{
        outputGain: 1.,           //-42 to 0 in dB
        drive: .2,                 //0 to 1
        curveAmount: 1.,           //0 to 1
        algorithmIndex: 5,            //0 to 5, selects one of the drive algorithms
        bypass: 2000,
cutoff: 10000   //cutoff frequency of the built in lowpass-filter. 20 to 22050

    },
    Delay:{
        feedback: .4,    //0 to 1+
        delayTime: 1,    //1 to 10000 milliseconds
        wetLevel: .5,     //0 to 1+
        dryLevel: .5,       //0 to 1+
        cutoff: 20000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
        bypass: 20
    }
};
let correction = 11. ;
let sound=Array(10);
let sound2=Array(10);
function initialize(){
    for(var o=0;o<10;o++){
    sound[o] =  new Wad({source : 'square', tuna   : hyperdriveTUNA});
     sound2[o] = new Wad({source : 'square', tuna   : hyperdriveTUNA});
    }
    try{sound[0].play({wait:1000000});
        sound2[0].play({wait:1000000});
        sound[0].stop()
        sound2[0].stop()
       }
    catch{
}
}

var cdnSwitch="wad.min.js";
if ( window.sessionStorage.getItem("alreadyReset")=="t"){if (window.online)cdnSwitch="https://unpkg.com/web-audio-daw@4.12.0";
loadScript(cdnSwitch,initialize);
}

let initialAngleSound = Array(10);
initialAngleSound[0]=0;
function startSound(e){
    let correlationForText=document.getElementById("allText").offsetHeight;//top
    correlationForText-=document.getElementById("score").offsetHeight;//bottom

   let y = e.clientY-(window.innerHeight+correlationForText)/2.;
    let x = e.clientX- window.innerWidth/2.;

    if(window.touchMode)window.pointerZoom=true

    screenPressCoordX=x;
    screenPressCoordY=y;

    if(!window.touchMode){
        var id = 0;
        if (navigator.userAgent.toLowerCase().match(/mobile/i)||(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))
            id = touchNumber.get(e.identifier);
        sound[id].stop();
        sound2[id].stop();
        
        
        let volume= Math.sqrt(y*y+x*x)/(Math.max(window.innerHeight+correlationForText,window.innerWidth)/2.);
        initialAngleSound[id] = (Math.atan2(y,x)+pi/2.+4*pi)%(2*pi);
        let frequency = Math.pow(2.,((initialAngleSound[id])/pi/2*12+correction)/12.)*220.;
        //sound[id].pitch=frequency;
        //sound2[id].pitch=frequency*2.;
        //sound[id].volume=0.;
        //sound2[id].volume=volume;
        if(isFinite(volume)&&isFinite(frequency)&&frequency>0){
            sound[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency,volume:0.});
            sound2[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency*2.,volume:volume});
            }
    }
}

function followSound(e){
            let correlationForText=document.getElementById("allText").offsetHeight;
            correlationForText-=document.getElementById("score").offsetHeight;//bottom
            let y = e.clientY-(window.innerHeight+correlationForText)/2.;
            let x = e.clientX-window.innerWidth/2.;

                        screenPressCoordX=x;
                        screenPressCoordY=y;

    if(!window.touchMode){
        
        var id = 0;
        if (navigator.userAgent.toLowerCase().match(/mobile/i)||(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))
            id = touchNumber.get(e.identifier);
        
        
        let volume= Math.sqrt(y*y+x*x)/(Math.max(window.innerHeight+correlationForText,window.innerWidth)/2.);
        let angleSound = Math.atan2(y,x);
        angleSound=(angleSound-initialAngleSound[id]+pi/2.+4.*pi)%(2*pi)+initialAngleSound[id];
        let frequency = Math.pow(2.,((angleSound)/pi/2*12+correction)/12.)*220.;
        if(isFinite(frequency)&&frequency>0.&&isFinite(angleSound)&&isFinite(volume)&&isFinite(initialAngleSound[id])&&
           angleSound-initialAngleSound[id]!=0&&angleSound-initialAngleSound[id]!=1){
            sound[id].setPitch(frequency);
            sound2[id].setPitch(2.*frequency);
            sound[id].setVolume(volume*(((angleSound-initialAngleSound[id]))/(2.*pi)));
            sound2[id].setVolume(volume*(1.-((angleSound-initialAngleSound[id]))/(2.*pi)));
        }
}

}
                                                             let cycle=0;
let c = document.getElementById( 'container' );

if (navigator.userAgent.toLowerCase().match(/mobile/i)||(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)){
    container.addEventListener('touchstart', function(e)
                               {
        e.stopImmediatePropagation();          //e.preventDefault();

c.focus();//this is to make the panel menu go down on android when you press on the container of the game
        for(var o=0; o<e.changedTouches.length; o++)
        {
            touchNumber.set(e.changedTouches[o].identifier,cycle);
            cycle=(cycle+1)%10
            startSound(e.changedTouches[o]);

        }

    }, false);
  container.addEventListener('touchmove', function(e) {
     e.stopImmediatePropagation(); e.preventDefault();

      for(var o=0; o<e.changedTouches.length; o++)
          followSound(e.changedTouches[o]);
  }
      , false);

    container.addEventListener('touchend', function(e){
        window.pointerZoom=false;
        if(!window.touchMode){
            //    e.preventDefault(); e.stopImmediatePropagation();
            
            for(var o=0; o<e.changedTouches.length; o++)
            {   let tn = touchNumber.get(e.changedTouches[o].identifier);
                sound[tn].stop();sound2[tn].stop();
            }
        }
    }
        , false);

    container.addEventListener('touchcancel', function(e){
        window.pointerZoom=false;
        if(!window.touchMode){ for(var o=0; o<e.changedTouches.length; o++)
        {
            let tn = touchNumber.get(e.changedTouches[o].identifier)
            e.preventDefault(); e.stopImmediatePropagation();
            sound[tn].stop();
            sound2[tn].stop();
            
        }
            
        }
    }, false);

}
else{

    c.addEventListener('mousedown', function(e){
        e.preventDefault(); e.stopImmediatePropagation();
        startSound(e);},
                       false);

 c.addEventListener('mousemove', function(e){
     e.preventDefault(); e.stopImmediatePropagation();
     followSound(e)},
            false);
    c.addEventListener('mouseup', function(e){window.pointerZoom=false; if(!window.touchMode){sound[0].stop();sound2[0].stop();}}, false);
}
