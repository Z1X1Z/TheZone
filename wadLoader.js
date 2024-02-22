const maxTouchSoundCount = 24;
let touchNumber=new Map();
for(var v = 0; v<maxTouchSoundCount;v++)touchNumber.set(v,"off")
let pressIndex=new Map();

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
const sound=Array(maxTouchSoundCount);
const sound2=Array(maxTouchSoundCount);

const zound=Array(maxTouchSoundCount);
const zound2=Array(maxTouchSoundCount);


const xound=Array(maxTouchSoundCount);
const xound2=Array(maxTouchSoundCount);


const tound=Array(maxTouchSoundCount);
const tound2=Array(maxTouchSoundCount);


const feedbackPitchsound=Array(5); //updated in starshipMod
let wadLOADED=false;
function initialize(){
    feedbackPitchsound[4] =  new Wad({source : 'triangle'})
    for(var o=0;o<4;o++)feedbackPitchsound[o] =  new Wad({source : 'square'})//, tuna   : hyperdriveTUNA});

   // feedbackPitchsound.play({env:{attack: 0, release:0,hold:-1},pitch:1,volume:0})
    for(var o=0;o<maxTouchSoundCount;o++){
        sound[o] =  new Wad({source : 'square'})//, tuna   : hyperdriveTUNA});
     sound2[o] = new Wad({source : 'square'})//, tuna   : hyperdriveTUNA});
        
            zound[o] =  new Wad({source : 'triangle'})//, tuna   : hyperdriveTUNA});
         zound2[o] = new Wad({source : 'triangle'})//, tuna   : hyperdriveTUNA});
        
        xound[o] =  new Wad({source : 'sine'})//, tuna   : hyperdriveTUNA});
     xound2[o] = new Wad({source : 'sine'})//, tuna   : hyperdriveTUNA});
        
            tound[o] =  new Wad({source : 'sawtooth'})//, tuna   : hyperdriveTUNA});
         tound2[o] = new Wad({source : 'sawtooth'})//, tuna   : hyperdriveTUNA});
    }
    try{sound[0].play({wait:1000000});
        sound2[0].play({wait:1000000});
        sound[0].stop()
        sound2[0].stop()
        
        zound[0].play({wait:1000000});
            zound2[0].play({wait:1000000});
            zound[0].stop()
            zound2[0].stop()
        
        
        xound[0].play({wait:1000000});
            xound2[0].play({wait:1000000});
            xound[0].stop()
            xound2[0].stop()
            
            tound[0].play({wait:1000000});
                tound2[0].play({wait:1000000});
                tound[0].stop()
                tound2[0].stop()
       }
    catch{
}
   
    attachListeners();
    wadLOADED=true;
}

let initialAngleSound = Array(maxTouchSoundCount);
initialAngleSound[0]=0;
let initialAngle = Array(maxTouchSoundCount);
let lastSlip  = Array(maxTouchSoundCount).fill(0);
let pressed = false;
function startSound(e){
    
    
    let y = e.clientY-heightPX/2.;
    let x = e.clientX- widthPX/2.;
    if(window.touchMode)window.pointerZoom=true
        
        screenPressCoordX=x;
    screenPressCoordY=y;
    let id = touchNumber.get(pressIndex.get(e.pointerId));

    if(window.grabStar){
        initialAngle[id]=Math.atan2(y,x)/Math.PI/2.;
        window.twist=(window.twist+24)%24
        initialTwist[id]=window.twist
        permanentInitialTwist[id]=window.twist;//(window.twist+24)%24
        lastSlip[id] =0;
        octavesBoosted[id]=0
        signTwist[id]=false;

    }
    
             if((!window.touchMode&&!window.muteVoiceTouchVolume)||(window.touchMode&&!window.muteTouchTouchVolume)){
                let twistTRIANGLEtoSQUARE=1.;
                let twistSQUAREtoTRIANGLE = 1.;
                let twistZINEtoSAW = 1.;
                let twistSAWtoZINE = 1.;
                if(event.twist!=0 && 0==1 )//untested
                {
                    twistTRIANGLEtoSQUARE= Math.atan2(y,x)/Math.PI-event.twist/360;
                    twistSQUAREtoTRIANGLE = 1.-twistTRIANGLEtoSQUARE;
                    twistZINEtoSAW= (Math.atan2(y,x)/Math.PI-event.twist/360+.5)%1;
                    twistSAWtoZINE=1.-twistZINEtoSAW;
                }
                
                
                let volume= pressure*-Math.sqrt(y*y+x*x)/(Math.max(heightPX,widthPX));

                initialAngleSound[id] =(Math.atan2(y,x))*flip;
                 angleSound[id] =initialAngleSound[id] ;
                 soundTouchComponent[id]=initialAngleSound[id];

                let frequency = Math.pow(2.,((((initialAngleSound[id]*window.flip)/pi/2*12+3-flip)*window.flip-window.twist/2.))/12.
                                              )*window.ConcertKey;
                //sound[id].pitch=frequency;
                //sound2[id].pitch=frequency*2.;
                //sound[id].volume=0.;
                //sound2[id].volume=volume;
                if(typeof sound[id]=="object")
                if(isFinite(volume)&&isFinite(frequency)&&frequency>0){
                    
                    sound[id].stop();
                    sound2[id].stop();
                    zound[id].stop();
                    zound2[id].stop();
                    
                    xound[id].stop();
                    xound2[id].stop();
                    tound[id].stop();
                    tound2[id].stop();
                    
                    let cascadeSwitch1;
                    let cascadeSwitch2;
                    if(window.grabStar&&flip==1)
                    {
                         cascadeSwitch2=1*volume*.5
                         cascadeSwitch1=0.00000000000001
                    }
                    else
                    {
                         cascadeSwitch2=0.00000000000001
                         cascadeSwitch1=1*volume*.5
                    }
                    sound[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency,volume:cascadeSwitch1*twistTRIANGLEtoSQUARE});
                    sound2[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency/2.,volume:cascadeSwitch2*twistTRIANGLEtoSQUARE});
                    
                    zound[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency,volume:cascadeSwitch1*twistSQUAREtoTRIANGLE});
                    zound2[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency/2.,volume:cascadeSwitch2});
                    
                    
                    xound[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency,volume:cascadeSwitch1*volume*twistZINEtoSAW});
                    xound2[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency/2.,volume:cascadeSwitch2});
                    
                    tound[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency,volume:cascadeSwitch1*twistSAWtoZINE});
                    tound2[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency/2.,volume:cascadeSwitch2});


                    }
            }
                                             
}
                                             let soundTouchComponent= Array(maxTouchSoundCount).fill(0);
                                             let octavesBoosted = Array(maxTouchSoundCount).fill(0);
let   angleSound  = Array(maxTouchSoundCount);
                                             let initialTwist= Array(maxTouchSoundCount).fill(0.);
                                             let permanentInitialTwist= Array(maxTouchSoundCount).fill(0.);
                                             
                                             let signTwist= Array(maxTouchSoundCount).fill(0.);

                                             
function followSound(e){
            let y = e.clientY-heightPX/2.;
            let x = e.clientX-widthPX/2.;

                        screenPressCoordX=x;
                        screenPressCoordY=y;
                    let id = touchNumber.get(pressIndex.get(e.pointerId));

                    let twistIncrement=0;
if(window.grabStar)
{
    let slip = (Math.atan2(y,x)/Math.PI/2.-initialAngle[id]+1.)%1;
   // if(lastSlip==0)lastSlip=slip;
     twistIncrement = (slip-lastSlip[id])*24*flip;
    //if(twistIncrement>12)twistIncrement=-twistIncrement;
    lastSlip[id] =slip;

    window.twist+=twistIncrement;
    for(var t=0; t<maxTouchSoundCount;t++)if(t!=id)
    {initialTwist[t]+=twistIncrement;
    }
//console.log("twisteR"+permanentInitialTwist[id])
    for(var t=0; t<maxTouchSoundCount;t++)
    {
        let lastTwistSign=signTwist[t];
        let twisteR=(twist-initialTwist[t])%24+initialTwist[t];
       // console.log("aaaa"+permanentInitialTwist[t])

        signTwist[t] =Math.sign(twisteR-12.);
     //   if(t==0)console.log("st"+ ticker)
        if (lastTwistSign!=signTwist[t]&&(
                                           Math.abs(twisteR)<6.*Math.sign(twisteR)||Math.abs(twisteR)>18.*Math.sign(twisteR))
            ){
            octavesBoosted[t]+=24*signTwist[t]
        }
    }
    window.twist=(window.twist-initialTwist[id]+24*100)%24+initialTwist[id];

}
         if(!window.muteTouchVolume){
        
        let twistTRIANGLEtoSQUARE=1.;
        let twistSQUAREtoTRIANGLE = 1.;
        let twistZINEtoSAW = 1.;
        let twistSAWtoZINE = 1.;
        if(event.twist!=0 && 0==1 )
        {
            twistTRIANGLEtoSQUARE= Math.atan2(y,x)/Math.PI-event.twist/360;
            twistSQUAREtoTRIANGLE = 1.-twistTRIANGLEtoSQUARE;

            twistZINEtoSAW= (Math.atan2(y,x)/Math.PI-event.twist/360+.5)%1;
            twistSAWtoZINE= 1.-twistZINEtoSAW;
           console.log("testing stylus"+twistZINEtoSAW)//this should get tested
        }
             if((!window.touchMode&&!window.muteVoiceTouchVolume)||(window.touchMode&&!window.muteTouchTouchVolume))
             {
        let volume= pressure*-Math.sqrt(y*y+x*x)/(Math.max(heightPX,widthPX));
                 let lastAngleSound=angleSound[id];

             if(!window.grabStar) angleSound[id]=(((Math.atan2(y,x)*flip-initialAngleSound[id])*flip+8.*pi)%(2*pi)+initialAngleSound[id]);
             
             else {
                 angleSound[id]+=  twistIncrement/24*(Math.PI*2.);//redundant operations done and undone to twistIncrement
                  angleSound[id]=(angleSound[id]-initialAngleSound[id]+4*pi)%(Math.PI*2.)+initialAngleSound[id];
                 // angleSound[id]=(angleSound[id]+2*pi)%(Math.PI*2.);

             }
                 
                 let twistFeed;
                 if(!grabStar)
                 {soundTouchComponent[id]=angleSound[id]
                     twistFeed = twist;
                 }
                 else {
                    // soundTouchComponent=angleSound[id]
                    soundTouchComponent[id] = (initialAngleSound[id]-angleSound[id])%(2*pi)+angleSound[id];//angleSound[id];//
              
                    // let dif = angleSound[id]-lastAngleSound;
                   //  console.log(dif)
                    // if(dif>2)octavesBoosted[id]+=24;
                     //  else if(dif<-2)octavesBoosted[id]-=24;
                     twistFeed = initialTwist[id]+octavesBoosted[id];//
                   //  (initialTwist[id]-twist)%(24.)+twist+octavesBoosted[id];
                   //  console.log(octavesBoosted[id])

                 }
                                  
                       //               console.log("as"+angleSound[id])
                        //            console.log("twist"+twistFeed)
                let frequency = Math.pow(2.,((((soundTouchComponent[id]*window.flip)/pi/2*12+3-flip)*window.flip-twistFeed/2.))/12.
                                                )*window.ConcertKey;
        if(isFinite(frequency)&&frequency>0.&&
           angleSound[id]-initialAngleSound[id]!=0){
                 if(typeof sound[id]=="object"){
                     let volumePrime=volume*(angleSound[id] - initialAngleSound[id])/(2.*pi)*.5;
                     let volumeTWO =volume*(1.-(angleSound[id]-initialAngleSound[id])/(2.*pi))*.5;
                     if(window.grabStar
                        //&&2==1
                        )
                     {
                         let vpBuf=volumePrime
                         volumePrime=volumeTWO
                         volumeTWO=vpBuf
                     }

                     sound2[id].setPitch(frequency/2.);
                     sound[id].setPitch(frequency);
                     sound2[id].setVolume(volumePrime*twistTRIANGLEtoSQUARE);
                     sound[id].setVolume(volumeTWO*twistTRIANGLEtoSQUARE);
                     
                     
                     zound2[id].setPitch(frequency/2.);
                     zound[id].setPitch(frequency);
                     zound2[id].setVolume(volumePrime*twistSQUAREtoTRIANGLE);
                     zound[id].setVolume(volumeTWO*twistSQUAREtoTRIANGLE);
                     
                     xound2[id].setPitch(frequency/2.);
                     xound[id].setPitch(frequency);
                     xound2[id].setVolume(volumePrime*twistZINEtoSAW);
                     xound[id].setVolume(volumeTWO*twistZINEtoSAW);
                     
                     
                     tound2[id].setPitch(frequency/2.);
                     tound[id].setPitch(frequency);
                     tound2[id].setVolume(volumePrime*twistSAWtoZINE);
                     tound[id].setVolume(volumeTWO*twistSAWtoZINE);
                 }
            }
        }
}

}
                                                             let cycle=0;
let c = document.body;//document.getElementById("container")
                                 
                                 
                                var pressure = 1.;
    function getPressure(event){
        if (event.pressure === 0) pressure=1;
        else if (event.pressure === 1) pressure = 1;
        else if (event.pressure === .5) pressure = 1;
        else pressure = event.pressure;
    }
                                             let cycler = 0;
 function attachListeners(){
            c.addEventListener('pointerdown', function(e)
                               {
                
                
                //   e.stopImmediatePropagation();          //e.preventDefault();
                

                let touchLimit=0;
                while (touchNumber.get(cycler)!="off"&&touchLimit<maxTouchSoundCount)
                {
                    cycle=(cycle+1)%maxTouchSoundCount;
                    cycler=(cycler+1)%maxTouchSoundCount;

                    touchLimit++;
                }
                
                pressIndex.set (e.pointerId,cycler)
                touchNumber.set(cycler,cycle)
                 *///needs to be sorted out to allow for more consecutive uninterrupted touches
                getPressure(e);
                startSound(e);
                
            }, false);
            c.addEventListener('pointermove', function(e) {
                let tn = touchNumber.get(pressIndex.get(e.pointerId));
                if(typeof tn == "number"){
                    getPressure(e);
                    followSound(e);
                }

                // e.stopImmediatePropagation();// e.preventDefault();
            }, false);
            
            c.addEventListener('pointerup', function(e){
                window.pointerZoom=false;
                let tn = touchNumber.get(pressIndex.get(e.pointerId));
                if(typeof tn == "number" ){
                    sound[tn].stop();sound2[tn].stop();
                    zound[tn].stop();zound2[tn].stop();
                    xound[tn].stop();xound2[tn].stop();
                    tound[tn].stop();tound2[tn].stop();
                    touchNumber.set(pressIndex.get(e.pointerId),"off");

                }
                //e.preventDefault(); e.stopImmediatePropagation();
            }
                               , false);
            
            c.addEventListener('pointercancel', function(e){
                window.pointerZoom=false;
                
                let tn = touchNumber.get(pressIndex.get(e.pointerId));
                if(typeof tn == "number" ){
                    sound[tn].stop();
                    sound2[tn].stop();
                    zound[tn].stop();
                    zound2[tn].stop();
                    
                    xound[tn].stop();
                    xound2[tn].stop();
                    tound[tn].stop();
                    tound2[tn].stop();
                    touchNumber.set(pressIndex.get(e.pointerId),"off");

                    //e.preventDefault(); e.stopImmediatePropagation();
                }
            }, false);
            
            c.addEventListener('pointerleave', function(e){
                window.pointerZoom=false;
                
                let tn = touchNumber.get(pressIndex.get(e.pointerId));
                if(typeof tn == "number"){
                    sound[tn].stop();
                    sound2[tn].stop();
                    zound[tn].stop();
                    zound2[tn].stop();
                    
                    xound[tn].stop();
                    xound2[tn].stop();
                    tound[tn].stop();
                    tound2[tn].stop();
                    touchNumber.set(pressIndex.get(e.pointerId),"off");

                    //e.preventDefault(); e.stopImmediatePropagation();
                }
            }, false);
        }
