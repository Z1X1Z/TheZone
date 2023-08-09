
let touchNumber=new Map();

function stallTillWad(){if(typeof(Wad)=="function"&&userHasGestured){initialize();} else  setTimeout(stallTillWad,100);}
stallTillWad()//lurker

let hyperdriveTUNA = {
Overdrive:{
        outputGain: -1.,           //-42 to 0 in dB
        drive: .2,                 //0 to 1
        curveAmount: 1.,           //0 to 1
        algorithmIndex: 5,            //0 to 5, selects one of the drive algorithms
        bypass: 2000,
cutoff: 10000   //cutoff frequency of the built in lowpass-filter. 20 to 22050

    },
    Delay:{
        feedback: .0,    //0 to 1+
        delayTime: 1,    //1 to 10000 milliseconds
        wetLevel: .5,     //0 to 1+
        dryLevel: .5,       //0 to 1+
        cutoff: 20000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
        bypass: 20
    }
};
const correction = 11. ;
const sound=Array(10);
const sound2=Array(10);
const feedbackPitchsound=Array(5); //updated in starshipMod
let wadLOADED=false;
function initialize(){
    feedbackPitchsound[4] =  new Wad({source : 'triangle'})
    for(var o=0;o<4;o++)feedbackPitchsound[o] =  new Wad({source : 'square'})//, tuna   : hyperdriveTUNA});

   // feedbackPitchsound.play({env:{attack: 0, release:0,hold:-1},pitch:1,volume:0})
    for(var o=0;o<10;o++){
        sound[o] =  new Wad({source : 'square'})//, tuna   : hyperdriveTUNA});
     sound2[o] = new Wad({source : 'square'})//, tuna   : hyperdriveTUNA});
    }
    try{sound[0].play({wait:1000000});
        sound2[0].play({wait:1000000});
        sound[0].stop()
        sound2[0].stop()
       }
    catch{
}
    wadLOADED=true;
}

let initialAngleSound = Array(10);
initialAngleSound[0]=0;
function startSound(e){
    let correlationForText = 0.;
    if (!sheetTranslucent) correlationForText += document.getElementById("osmdCanvas").offsetHeight+document.getElementById("textWindow").offsetHeight;
                    
    

   let y = e.clientY-(window.innerHeight+correlationForText)/2.;
    let x = e.clientX- window.innerWidth/2.;

    if(window.touchMode)window.pointerZoom=true

    screenPressCoordX=x;
    screenPressCoordY=y;

    if(!window.touchMode){
        var id = 0;
        if (navigator.maxTouchPoints > 0) //navigator.userAgent.toLowerCase().match(/mobile/i)||(navigator.platform === 'MacIntel' ))
            id = touchNumber.get(e.identifier);
       
        
        
        let volume= -Math.sqrt(y*y+x*x)/(Math.max(window.innerHeight+correlationForText,window.innerWidth));
        initialAngleSound[id] = (Math.atan2(y,x)+pi/2.+4*pi)%(2*pi);
        let frequency = Math.pow(2.,((((initialAngleSound[id]*window.flip)/pi/2*12+correction)*window.flip-window.flip*window.twist/2.))/12.)*window.ConcertKey/2.;
        //sound[id].pitch=frequency;
        //sound2[id].pitch=frequency*2.;
        //sound[id].volume=0.;
        //sound2[id].volume=volume;
        if(typeof sound[id]=="object")
        if(isFinite(volume)&&isFinite(frequency)&&frequency>0){
            
            sound[id].stop();
            sound2[id].stop();
            
            sound2[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency,volume:0.});
            sound[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency*2.,volume:volume});
            }
    }
}

                                     
function followSound(e){
            let correlationForText = 0.;
if (!sheetTranslucent) correlationForText += document.getElementById("osmdCanvas").offsetHeight+document.getElementById("textWindow").offsetHeight;
                
            let y = e.clientY-(window.innerHeight+correlationForText)/2.;
            let x = e.clientX-window.innerWidth/2.;

                        screenPressCoordX=x;
                        screenPressCoordY=y;

    if(!window.touchMode){
        
        var id = 0;
        if (//navigator.userAgent.toLowerCase().match(/mobile/i)||(navigator.platform === 'MacIntel' &&)
            navigator.maxTouchPoints > 0)
            id = touchNumber.get(e.identifier);
        
        
        let volume= -Math.sqrt(y*y+x*x)/(Math.max(window.innerHeight+correlationForText,window.innerWidth));
        let angleSound = Math.atan2(y,x);
        angleSound=((angleSound-initialAngleSound[id])+pi/2.+4.*pi)%(2*pi)*window.flip+initialAngleSound[id];
   
        let frequency = Math.pow(2.,((angleSound/pi/2*12)-window.twist*window.flip/2.+correction)/12.)*window.ConcertKey/2.;
        if(isFinite(frequency)&&frequency>0.&&
           angleSound-initialAngleSound[id]!=0){
            if(typeof sound[id]=="object"){
                sound2[id].setPitch(frequency);
                sound[id].setPitch(2.*frequency);
                sound2[id].setVolume(volume*(angleSound - initialAngleSound[id])/(2.*pi));
                sound[id].setVolume(volume*(1.-(angleSound-initialAngleSound[id])/(2.*pi)));
            }
        }
}

}
                                                             let cycle=0;
let c = document.getElementById("container");

if (//navigator.userAgent.toLowerCase().match(/mobile/i)||(navigator.platform === 'MacIntel' &&)
navigator.maxTouchPoints > 0){
    c.addEventListener('touchstart', function(e)
                               {
        //mcphrth();//reproc vibrate

     //   e.stopImmediatePropagation();          //e.preventDefault();
c.focus();//this is to make the panel menu go down on android when you press on the container of the game
        for(var o=0; o<e.changedTouches.length; o++)
        {
            touchNumber.set(e.changedTouches[o].identifier,cycle);
            cycle=(cycle+1)%10
            startSound(e.changedTouches[o]);

        }

    }, false);
c.addEventListener('touchmove', function(e) {
    //mcphrth();//reproc vibrate

    for(var o=0; o<e.changedTouches.length; o++)followSound(e.changedTouches[o]);
   // e.stopImmediatePropagation();// e.preventDefault();
}, false);

c.addEventListener('touchend', function(e){
        window.pointerZoom=false;
        if(!window.touchMode){
            
            for(var o=0; o<e.changedTouches.length; o++)
            {   let tn = touchNumber.get(e.changedTouches[o].identifier);
                sound[tn].stop();sound2[tn].stop();
            }
        }
        //e.preventDefault();
    //e.stopImmediatePropagation();
    }
        , false);

    c.addEventListener('touchcancel', function(e){
        window.pointerZoom=false;
        if(!window.touchMode){ for(var o=0; o<e.changedTouches.length; o++)
        {
            let tn = touchNumber.get(e.changedTouches[o].identifier)
            sound[tn].stop();
            sound2[tn].stop();
            
        }
            e.preventDefault(); e.stopImmediatePropagation();

        }
    }, false);

}
else{

c.addEventListener('mousedown', function(e){
    startSound(e);
    e.preventDefault(); e.stopImmediatePropagation();
},
                   false);

 c.addEventListener('mousemove', function(e){
     followSound(e)
     e.preventDefault(); e.stopImmediatePropagation();
 },
            false);
    
    c.addEventListener('mouseup', function(e){
        window.pointerZoom=false;
        if(!window.touchMode&& typeof(Wad)=="function"){sound[0].stop();sound2[0].stop();}
        e.preventDefault(); e.stopImmediatePropagation();
    }, false);
}
