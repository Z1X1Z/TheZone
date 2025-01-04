const maxTouchSoundCount = 24;
window.osmdOscillators = 15;
let touchNumber=new Map();
for(var v = 0; v<maxTouchSoundCount;v++)touchNumber.set(v,"off")
let pressIndex=new Map();

let instrument1 = "square"
let instrument2 = "triangle"


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

const singAlong=Array(osmdOscillators);
const singAlong2=Array(osmdOscillators);

let DAWnodeIndexForTouchBestFitIndex  = Array(maxTouchSoundCount).fill("not set");

let SonicTouchObject =
    {
        angleSound:.5,
        initialAngleSound:0.,
        initialAngle:0.,
        lastSlip:0,
        octavesBoosted:0.,
        twistModulated:0.,
        initialTwist:0.,
        permanentInitialTwist:0.,
        signTwist:null,
        firstMovement:true,
        lastFrequency:null,
        octavesFlippedLastFrame:true,
        lastOctaveDistance:null,
        sound:null,
        sound2:null,
         zound:null,
         zound2:null,
         xound:null,
         xound2:null,
        tound:null,
        tound2:null,
        dawAMPLITUDE:.000000000000001,
        dawNOTE:null,
        DAWtouchId:null,
        DAWx:null,
        DAWy:null,
        DAWfrequency:1,
        DAWinitialNOTE:null,
    dawNODES:0,
    dawStartTime:null,
        
    }
let SonicTouchArray  = Array(maxTouchSoundCount);
for(var ff=0;ff<SonicTouchArray.length;ff++)SonicTouchArray[ff]=Object.assign({},SonicTouchObject)

function stopSounds(SonicTouchObjectN)
{
    if(SonicTouchObjectN.sound !=null)
    {
        SonicTouchObjectN.sound.stop();
        SonicTouchObjectN.sound2.stop();
        SonicTouchObjectN.zound.stop();
        SonicTouchObjectN.zound2.stop();
        
        SonicTouchObjectN.xound.stop();
        SonicTouchObjectN.xound2.stop();
        SonicTouchObjectN.tound.stop();
        SonicTouchObjectN.tound2.stop();
    }
}

function loadDAW(SonicTouchObjectO)
{
    stopSounds(SonicTouchObjectO)
    SonicTouchObjectO.sound =  new Wad({source : instrument1})//, tuna   : hyperdriveTUNA});
    SonicTouchObjectO.sound2 = new Wad({source : instrument1})//, tuna   : hyperdriveTUNA});
    
    SonicTouchObjectO.zound =  new Wad({source : instrument1})//, tuna   : hyperdriveTUNA});
    SonicTouchObjectO.zound2 = new Wad({source : instrument1})//, tuna   : hyperdriveTUNA});
    
    SonicTouchObjectO.xound =  new Wad({source : instrument2})//, tuna   : hyperdriveTUNA});
    SonicTouchObjectO.xound2 = new Wad({source : instrument2})//, tuna   : hyperdriveTUNA});
    
    SonicTouchObjectO.tound =  new Wad({source : instrument2})//, tuna   : hyperdriveTUNA});
    SonicTouchObjectO.tound2 = new Wad({source : instrument2})//, tuna   : hyperdriveTUNA});
    
    playSounds(SonicTouchObjectO.sound2,SonicTouchObjectO.sound,SonicTouchObjectO.zound2,SonicTouchObjectO.zound,
               SonicTouchObjectO.DAWfrequency,SonicTouchObjectO.dawAMPLITUDE*window.touchVolume/3.,SonicTouchObjectO.dawAMPLITUDE)//amplitude actually takes effect for some reason, probably something to do with optimization, seems to be /3 when it "should" be /2
    
    playSounds(SonicTouchObjectO.xound2,SonicTouchObjectO.xound,SonicTouchObjectO.tound2,SonicTouchObjectO.tound,
               SonicTouchObjectO.DAWfrequency,SonicTouchObjectO.dawAMPLITUDE*window.touchVolume/3.,SonicTouchObjectO.dawAMPLITUDE)
    //timeout helps with volume optimization
    return SonicTouchObjectO;
}
function bootSounds()
{
    feedbackPitchsound[4] =  new Wad({source : instrument2})
    for(var o=0;o<4;o++)feedbackPitchsound[o] =  new Wad({source : instrument1})//, tuna   : hyperdriveTUNA});
       
        for(var o=0;o<osmdOscillators;o++){
            if(typeof singAlong[o] =="object")
            {
                singAlong[o].stop();
                singAlong2[o].stop();
            }
            singAlong[o] =  new Wad({source : instrument1})
            singAlong2[o] =  new Wad({source : instrument2})
        }
    
    
    for(var o=0;o<maxTouchSoundCount;o++)
    {SonicTouchArray[o]=loadDAW(SonicTouchArray[o]);
       stopSounds(SonicTouchArray[o]);
    }
        
    for(var o=0;o<DAWSonicTouchArray.length;o++){
        DAWSonicTouchArray[o]=loadDAW(DAWSonicTouchArray[o])
        DAWSonicTouchArray[o]=refreshNoteDAW(DAWSonicTouchArray[o])
        setTimeout(()=>{DAWSonicTouchArray[o]=refreshNoteDAW(DAWSonicTouchArray[o])},10)
    }
    

}
let minutesTillRefresh=2;
let playDuration =60*minutesTillRefresh*1000;
function refreshOldInstrument(b){
    if(typeof DAWSonicTouchArray[b]=="object")
    {
        DAWSonicTouchArray[b]=loadDAW(DAWSonicTouchArray[b])
        //DAWarray[d].dawStartTime=date;
        setTimeout(()=>(refreshOldInstrument(b)),playDuration)
    }
}

const feedbackPitchsound=Array(5); //updated in starshipMod
let wadLOADED=false;
function initialize(){
    
   // feedbackPitchsound.play({env:{attack: 0, release:0,hold:-1},pitch:1,volume:0})
        bootSounds()
    attachListeners();
    wadLOADED=true;
}

function length(x,y){
return Math.sqrt(x**2+y**2)
}


let bfi = null

let pressed = false;

let touchMagnitude=0.;

function startSound(e){
    
    let y = e.clientY-heightPX/2.;
    let x = e.clientX- widthPX/2.;
    if(window.touchMode)window.pointerZoom=true
        
    let id = touchNumber.get(pressIndex.get(e.pointerId));
    
    screenPressCoordX[id]=x;
    screenPressCoordY[id]=y;
    SonicTouchArray[id].firstMovement=true;
    if(window.grabStar||true){
        SonicTouchArray[id].initialAngle=-Math.atan2(-x,-y);
        window.twist=(window.twist+24*100)%24
        SonicTouchArray[id].permanentInitialTwist=twist;
        SonicTouchArray[id].initialTwist=twist;
        SonicTouchArray[id].lastSlip =0;
        SonicTouchArray[id].octavesBoosted=0
        SonicTouchArray[id].twistModulated=0
        SonicTouchArray[id].signTwist=-1.*flip;//"off";
    }
     touchMagnitude=Math.sqrt(y*y+x*x)/(Math.min(heightPX,widthPX))*2;
    let volume= window.touchVolume*-touchMagnitude/2.;
    if(radialOctaveBoost)volume= -window.touchVolume*pressure*.125;

    SonicTouchArray[id].initialAngleSound =(-Math.atan2(-x,-y)*flip+2.*pi)%(2*pi)

    //try with +2*pi)%(2*pi)+2*pi for seam at top
    SonicTouchArray[id].angleSound =SonicTouchArray[id].initialAngleSound ;
    
    let touchNote=(SonicTouchArray[id].initialAngleSound)/pi/2*12
    let touchNote24=touchNote*2.-twist
    
    let frequency = Math.pow(2.,(((touchNote)-window.twist/2.)-1.)/12.
                                  )*window.ConcertKey;
                                 SonicTouchArray[id].lastFrequency=frequency;
         SonicTouchArray[id].dawAMPLITUDE=(touchMagnitude);
         SonicTouchArray[id].dawNOTE=(touchNote24);
         SonicTouchArray[id].DAWtouchId=id
         SonicTouchArray[id].DAWx=x;
         SonicTouchArray[id].DAWy=y;
        
    
        
                                 
                                 
                                bfi=null;
             
             DAWnodeIndexForTouchBestFitIndex[id] = "not set"
         if(DAW){
             if(touchMagnitude<.25){
                 DAWSonicTouchArray.push(Object.assign({},SonicTouchObject))
                                     DAWnodeIndexForTouchBestFitIndex[id]=DAWSonicTouchArray.length-1

        bfi= DAWSonicTouchArray[DAWnodeIndexForTouchBestFitIndex[id]];
                 
        bfi.DAWinitialNOTE=touchNote24
        bfi.initialAngleSound=((-Math.atan2(-x,-y)*flip+2.*pi)%(2*pi))
        bfi.angleSound=(SonicTouchArray[id].initialAngleSound )
                 bfi.initialAngle=-Math.atan2(-x,-y);
                                     bfi.firstMovement=true
                
        if(window.grabStar||true){
            bfi.initialAngle=(-Math.atan2(-x,-y));
            bfi.permanentInitialTwist=(twist);
            bfi.TwistModulated=0
            bfi.initialTwist=(twist);
            bfi.lastSlip=(0);
            bfi.octavesBoosted=(0)
            bfi.signTwist=(-1.*flip);//"off";
        }
        
                 bfi.dawAMPLITUDE=(touchMagnitude);
                 bfi.dawNOTE=(touchNote24);
                 bfi.DAWtouchId=id
                 bfi.DAWx=x;
                 bfi.DAWy=y;
                 bfi=loadDAW(DAWSonicTouchArray[DAWnodeIndexForTouchBestFitIndex[id]])
                              //       bfi.dawStartTime=Date.now()
                 
               refreshOldInstrument(DAWnodeIndexForTouchBestFitIndex[id]);//may be better called in batches, but here we're going for individually

        
        setDAWdependantSize()
    }
    else{
        
         let bestFitDAWnote = .5
        for(var h=0;h<DAWSonicTouchArray.length;h++){
            let noteDifference=
            Math.abs(touchNote24%24-(DAWSonicTouchArray[h].dawNOTE)%24)
            if(noteDifference<=bestFitDAWnote){
                bestFitDAWnote=noteDifference
                DAWnodeIndexForTouchBestFitIndex[id]=h
            }
            
            
            
            noteDifference=Math.abs(24-noteDifference)%24
            
            if(noteDifference<=bestFitDAWnote){
                bestFitDAWnote=noteDifference
                DAWnodeIndexForTouchBestFitIndex[id]=h
            }
        }
        
        if(DAWnodeIndexForTouchBestFitIndex[id] != "not set"){
            bfi =DAWSonicTouchArray[DAWnodeIndexForTouchBestFitIndex[id]]
            bfi.dawNOTE=touchNote24;
            bfi.dawAMPLITUDE=touchMagnitude;//testarContinuous;//
            bfi.DAWx=x
            bfi.DAWy=y
            
            
        }
    }
}
        /*
         let twistTRIANGLEtoSQUARE=1.
         let twistSQUAREtoTRIANGLE = 1.;
         let twistZINEtoSAW = 1.;
         let twistSAWtoZINE = 1.;
         if(event.twist!=0)//untested, unimplemented
         {
         twistTRIANGLEtoSQUARE= Math.atan2(y,x)/Math.PI-event.twist/360;
         twistSQUAREtoTRIANGLE = 1.-twistTRIANGLEtoSQUARE;
         twistZINEtoSAW= (Math.atan2(y,x)/Math.PI-event.twist/360+.5)%1;
         twistSAWtoZINE=1.-twistZINEtoSAW;
         }
         */
        
        
        
        //sound[id].pitch=frequency;
        //sound2[id].pitch=frequency*2.;
        //sound[id].volume=0.;
        //sound2[id].volume=volume;
                                 
                                 
                                 if(window.radialOctaveBoost) {
                        SonicTouchArray[id].lastOctaveDistance=touchMagnitude*9.;
                                 }
                                 
        if(typeof SonicTouchArray[id].sound=="object"&&bfi==null&& (
                                                                    (window.touchMode&&!window.muteTouchTouchVolume)
                                                               ||(!window.touchMode&&!window.muteVoiceTouchVolume)
                                                               ||(window.touchOnlyMode&&!window.muteTouchTouchVolume)
                                                                   )
           )
        {
            stopSounds(SonicTouchArray[id])

            if(isFinite(volume)&&isFinite(frequency)&&frequency>0){
                playSounds(SonicTouchArray[id].sound2,SonicTouchArray[id].sound,SonicTouchArray[id].zound2,SonicTouchArray[id].zound,frequency,volume,touchMagnitude)
              playSounds(SonicTouchArray[id].xound2,SonicTouchArray[id].xound,SonicTouchArray[id].tound2,SonicTouchArray[id].tound,frequency,volume,touchMagnitude)
            }
        }
        else if(bfi!=null) bfi=refreshNoteDAW(bfi)
            

    }

                                             
                                             function playSounds(sound2,sound,zound2,zound,frequency,volume,touchMagnitude){
                    
        let cascadeSwitch1;
        let cascadeSwitch2;
        if(window.grabStar&&flip==1)
        {
             cascadeSwitch2=1*volume
             cascadeSwitch1=0.00000000000001
        }
        else
        {
             cascadeSwitch2=0.00000000000001
             cascadeSwitch1=1*volume
        }
        
        let octaveDistance = 0.
        let octaveShift=0;
        if(window.radialOctaveBoost) {
            octaveDistance = touchMagnitude*9.;
            octaveShift=4.;
           // cascadeSwitch2*=(1.-octaveDistance%1);
           // cascadeSwitch1*=octaveDistance%1;
        }
                    sound.play({env:{attack: .0, release:.0,hold:-1},
                        pitch:frequency/2.*2**Math.floor(octaveDistance-octaveShift),
                        volume:cascadeSwitch2*(1.-octaveDistance%1)});
                    sound2.play({env:{attack: .0, release:.0,hold:-1},
                        pitch:frequency*2**Math.floor(octaveDistance-octaveShift),
                        volume:cascadeSwitch1*(1.-octaveDistance%1)});
                    if(window.radialOctaveBoost)
                    {
                        zound2.play({env:{attack: .0, release:.0,hold:-1},
                        pitch:frequency*2**Math.ceil(octaveDistance-octaveShift),
                            volume:cascadeSwitch2*octaveDistance%1});
                        zound.play({env:{attack: .0, release:.0,hold:-1},
                        pitch:frequency*2.*2**Math.ceil(octaveDistance-octaveShift),
                            volume:cascadeSwitch1*octaveDistance%1});
                    }
                    
                    
                }
                                         //    let soundTouchComponent= Array(maxTouchSoundCount).fill(0.);
                               

                                          //   let lastTwistSign;

function followSound(e, SonicTouchArrayK){
            let y = e.clientY-heightPX/2.;
            let x = e.clientX-widthPX/2.;
        let id = touchNumber.get(pressIndex.get(e.pointerId));
        screenPressCoordX[id]=x;
            screenPressCoordY[id]=y;
        
        if(bfi!=null)
            id=DAWnodeIndexForTouchBestFitIndex[id]

            SonicTouchArrayK[id].DAWtouchId=id
            SonicTouchArrayK[id].DAWx=x
            SonicTouchArrayK[id].DAWy=y
                    
             twistIncrement=0;
             twistIncrementPI = 0.;
                let slip = ((-Math.atan2(-x,-y)-SonicTouchArrayK[id].initialAngle)*flip+8*pi)%(2*pi);
                twistIncrementPI =(slip-SonicTouchArrayK[id].lastSlip)
                SonicTouchArrayK[id].lastSlip =slip;

             twistIncrement = twistIncrementPI*(24/2)/pi;

                slipConstrainedPI=twistIncrementPI;
                slipConstrainedTwist=twistIncrement;
                if(slipConstrainedPI>pi)slipConstrainedPI-=2*pi;
                if(slipConstrainedTwist>12)slipConstrainedTwist-=24;
            if(grabStar)
            {
                 
                     SonicTouchArrayK[id].DAWinitialNOTE+=twistIncrement;//is this right???
                     SonicTouchArrayK[id].permanentInitialTwist +=twistIncrement;
                    if(!window.DAW)for(var i = 0; i<DAWSonicTouchArray.length;i++)
                    DAWSonicTouchArray[i].permanentInitialTwist+=twistIncrement
                    
                        if(!window.DAW||bfi!=null)
                     twist+=twistIncrement;
                 

             }

               if(!window.muteTouchVolume){

                    let b = soundRoutine(id,x,y, SonicTouchArrayK);
                    if(bfi!=null)DAWSonicTouchArray=b;
                     else SonicTouchArray=b;
             }
}
                                 
                                             
                                             
                                                
                                                let twistIncrement=0;
                                                let twistIncrementPI = 0.;

                                             
                                             
        function soundRoutine(id,x,y, SonicTouchArrayX){
                 
                    touchMagnitude=Math.sqrt(y*y+x*x)/(Math.min(heightPX,widthPX))*2.
                    let volume= window.touchVolume*pressure*-touchMagnitude/2.;

                    if(radialOctaveBoost)volume= -window.touchVolume*pressure*.25;
                    let lastAngleSound=SonicTouchArrayX[id].angleSound;

                    if(!window.grabStar) SonicTouchArrayX[id].angleSound=((( SonicTouchArrayX[id].angleSound- SonicTouchArrayX[id].initialAngleSound)+8.*pi+slipConstrainedPI)%(2*pi)+SonicTouchArrayX[id].initialAngleSound);
                    else if(!window.DAW||bfi!=null)
                        SonicTouchArrayX= bump(SonicTouchArrayX.length,id,x,y, SonicTouchArrayX)
                                   
                    
                        let twistFeed;
                        let soundTouchComponent = 0.;
                        if(!grabStar) soundTouchComponent= SonicTouchArrayX[id].angleSound
                        else soundTouchComponent=(SonicTouchArrayX[id].angleSound-SonicTouchArrayX[id].initialAngleSound)%(2*pi)+SonicTouchArrayX[id].initialAngleSound;
                 
                        twistFeed= SonicTouchArrayX[id].permanentInitialTwist+SonicTouchArrayX[id].octavesBoosted+SonicTouchArrayX[id].twistModulated;
                        let    touchNote=   soundTouchComponent/pi/2*12;
                        let frequency = Math.pow(2.,((touchNote-twistFeed/2.)-1.)/12.
                        )*window.ConcertKey;
                                                     
                                                     
                                                                              let frequencyRatio = frequency/SonicTouchArrayX[id].lastFrequency;
                                                     SonicTouchArrayX[id].lastFrequency=frequency;
                                                                            if(frequencyRatio>1.5||frequencyRatio<.75)
                                                                            {
                            var soundBuffer = SonicTouchArrayX[id].sound;
     SonicTouchArrayX[id].sound=SonicTouchArrayX[id].sound2
     SonicTouchArrayX[id].sound2=soundBuffer
                            var xoundBuffer = SonicTouchArrayX[id].xound;
     SonicTouchArrayX[id].xound=SonicTouchArrayX[id].xound2
     SonicTouchArrayX[id].xound2=xoundBuffer
                            
                            var zoundBuffer = SonicTouchArrayX[id].zound;
     SonicTouchArrayX[id].zound=SonicTouchArrayX[id].zound2
     SonicTouchArrayX[id].zound2=zoundBuffer
                            var toundBuffer = SonicTouchArrayX[id].tound;
     SonicTouchArrayX[id].tound=SonicTouchArrayX[id].tound2
     SonicTouchArrayX[id].tound2=toundBuffer

                        }
                                                     
                                                     
                                                     
                                                     let octaveDistanceChange =0;
                                                     if(window.radialOctaveBoost)
                                                     {
                                                        let octaveDistance = SonicTouchArrayX[id].dawAMPLITUDE*window.touchVolume/2.*9.;
                           // console.log(octaveDistance)
                                                        octaveDistanceChange = Math.floor(octaveDistance*4.)-Math.floor( SonicTouchArrayX[id].lastOctaveDistance*4.);
                            SonicTouchArrayX[id].lastOctaveDistance=octaveDistance;

                                                     }
                                                     
                              if(octaveDistanceChange>.0&&!SonicTouchArrayX[id].octavesFlippedLastFrame)
                                                     {
                            var zound2Buffer = SonicTouchArrayX[id].zound2;
                            SonicTouchArrayX[id].zound2=SonicTouchArrayX[id].zound
                            SonicTouchArrayX[id].zound=SonicTouchArrayX[id].sound
                            SonicTouchArrayX[id].sound=SonicTouchArrayX[id].sound2
                            SonicTouchArrayX[id].sound2=zound2Buffer
                            
                            
                            
                            
   var tound2Buffer = SonicTouchArrayX[id].tound2;
   SonicTouchArrayX[id].tound2=SonicTouchArrayX[id].tound
   SonicTouchArrayX[id].tound=SonicTouchArrayX[id].xound
   SonicTouchArrayX[id].xound=SonicTouchArrayX[id].xound2
   SonicTouchArrayX[id].xound2=tound2Buffer
                            
                            
                            SonicTouchArrayX[id].octavesFlippedLastFrame=true
                        }
                                                     else if(octaveDistanceChange<.0&&!SonicTouchArrayX[id].octavesFlippedLastFrame)
                                                     
                                                     {
                            var sound2Buffer =  SonicTouchArrayX[id].sound2
                            SonicTouchArrayX[id].sound2=SonicTouchArrayX[id].sound
                            SonicTouchArrayX[id].sound=SonicTouchArrayX[id].zound
                            SonicTouchArrayX[id].zound=SonicTouchArrayX[id].zound2
                            SonicTouchArrayX[id].zound2=sound2Buffer
                            
                            var xound2Buffer =  SonicTouchArrayX[id].xound2
                            SonicTouchArrayX[id].xound2=SonicTouchArrayX[id].xound
                            SonicTouchArrayX[id].xound=SonicTouchArrayX[id].tound
                            SonicTouchArrayX[id].tound=SonicTouchArrayX[id].tound2
                            SonicTouchArrayX[id].tound2=xound2Buffer
                            SonicTouchArrayX[id].octavesFlippedLastFrame=true
                        }
                                                     
                else if (SonicTouchArrayX[id].octavesFlippedLastFrame)
                    {
                    SonicTouchArrayX[id].octavesFlippedLastFrame=false;
                    }
                                                     
                                                     if(isFinite(frequency)&&typeof SonicTouchArrayX[id].sound=="object"){
                            if(isFinite(frequency)&&typeof SonicTouchArrayX[id].sound=="object"){
                                SonicTouchArrayX[id].dawAMPLITUDE=touchMagnitude;//testarContinuous;//
                                SonicTouchArrayX[id].DAWfrequency=frequency;
                                SonicTouchArrayX[id].dawNOTE=touchNote*2-twistFeed;
                                
                                if(grabStar)
                                {
                                    if (
                                   (window.touchMode&&!window.muteTouchTouchVolume)
                              ||(!window.touchMode&&!window.muteVoiceTouchVolume)
                              ||(window.touchOnlyMode&&!window.muteTouchTouchVolume)
                                  )
                                        for(var d = 0;d<SonicTouchArray.length;d++)
                                    {
                                        SonicTouchArray[d]=refreshNoteDAW(SonicTouchArray[d]);
                                        if(bfi==null) SonicTouchArrayX=SonicTouchArray
                                            }
                                    
                                    for(var d = 0;d<DAWSonicTouchArray.length;d++)
                                    {
                                        DAWSonicTouchArray[d]=refreshNoteDAW(DAWSonicTouchArray[d]);
                                        if(bfi!=null) SonicTouchArrayX=DAWSonicTouchArray
                                    }
                                    
                                }
                                             else if (bfi!=null||
                                                      
                                                           (
                                                            (window.touchMode&&!window.muteTouchTouchVolume)
                                                       ||(!window.touchMode&&!window.muteVoiceTouchVolume)
                                                       ||(window.touchOnlyMode&&!window.muteTouchTouchVolume)
                                                           )
                                                      )
                                             {
                                                 setSounds(frequency,soundTouchComponent,SonicTouchArrayX[id].initialAngleSound,SonicTouchArrayX[id].dawAMPLITUDE*window.touchVolume/2.,SonicTouchArrayX[id].dawAMPLITUDE, SonicTouchArrayX[id].sound2,SonicTouchArrayX[id].sound,SonicTouchArrayX[id].zound2,SonicTouchArrayX[id].zound,SonicTouchArrayX[id].xound2,SonicTouchArrayX[id].xound,SonicTouchArrayX[id].tound2,SonicTouchArrayX[id].tound);
                                             }

                                          }
                                                                   }
                                                                                              SonicTouchArrayX[id].firstMovement=false;
                                                                                              return SonicTouchArrayX;
                                           

               }
                                             
                                             
                              

    function setSounds(frequency,soundTouchComponent,initialAngleSound,volume,touchMagnitude,sound2,sound,zound2,zound,xound2,xound,tound2,tound){
                           let volumePrime=volume*((soundTouchComponent - initialAngleSound+8*pi)%(2*pi)/(2.*pi));
                           let volumeTWO =volume*(1.-(soundTouchComponent-initialAngleSound+8*pi)%(2*pi)/(2.*pi));
                          //  console.log(soundTouchComponent)
                           // console.log(volumeTWO)
                           // console.log(volumePrime)
         /*if (volumePrime==0.)
         volumePrime=.00000000001;
         else if (volumeTWO==0.)
             volumeTWO=.0000000001*/
                      
                             if(window.grabStar
                                //&&2==1
                                )
                             {
                                 let vpBuf=volumePrime
                                 volumePrime=volumeTWO
                                 volumeTWO=vpBuf
                             }
                             
                              let octaveDistance = 0
                             let octaveShift = 0;
                              if(window.radialOctaveBoost)
                              {
                                  octaveDistance = touchMagnitude*9.;
                                   octaveShift = 4;
                                  //volumePrime*=(1.-octaveDistance%1);
                                  //volumeTWO*=octaveDistance%1

                              }
                              
                             sound2.setPitch(frequency/2.*2**Math.floor(octaveDistance-octaveShift));
                             sound.setPitch(frequency*2**Math.floor(octaveDistance-octaveShift));
                             sound2.setVolume(volumePrime*(1.-octaveDistance%1));
                             sound.setVolume(volumeTWO*(1.-octaveDistance%1));
                               if(window.radialOctaveBoost)
                               {
                                   zound.setPitch(frequency*2**Math.ceil(octaveDistance-octaveShift));
                                   zound2.setPitch(frequency*2*2**Math.ceil(octaveDistance-octaveShift));
                                   zound.setVolume(volumePrime*octaveDistance%1);
                                   zound2.setVolume(volumeTWO*octaveDistance%1);
                               }
                                   xound2.setPitch(frequency/2.*2**Math.floor(octaveDistance-octaveShift));
                                   xound.setPitch(frequency*2**Math.floor(octaveDistance-octaveShift));
                                   xound2.setVolume(volumePrime*(1.-octaveDistance%1));
                                   xound.setVolume(volumeTWO*(1.-octaveDistance%1));
                               if(window.radialOctaveBoost)
                               {
                                   tound.setPitch(frequency*2**Math.ceil(octaveDistance-octaveShift));
                                   tound2.setPitch(frequency*2*2**Math.ceil(octaveDistance-octaveShift));
                                   tound.setVolume(volumePrime*octaveDistance%1);
                                   tound2.setVolume(volumeTWO*octaveDistance%1);
                               }
                         
                                 
                         }
                                             
                                                    
                                                    let slipConstrainedTwist =0;
                                                    let slipConstrainedPI =0;
                                             
                            function bump(loops,id,x,y,SonicTouchArrayZ){
                            
                            let twistBump,twistBumpPI;
                            if(SonicTouchArrayZ[id].firstMovement)
                            {
                                twistBumpPI=slipConstrainedPI;
                                twistBump=slipConstrainedTwist
                            }
                            else
                            {
                                twistBumpPI=twistIncrementPI
                                twistBump=twistIncrement
                            }
                            
                               for(var i = 0; i<loops;i++)  {
                                   
                                   if (i==id)    {                               SonicTouchArrayZ[id].angleSound=(SonicTouchArrayZ[id].angleSound+twistBumpPI);
                                   }
                                   else  {
                                       //SonicTouchArrayZ[i].twistModulated=(SonicTouchArrayZ[i].twistModulated+twistBump+24)%24
                                       
                                        
                                        //walk
                                       SonicTouchArrayZ[i].initialAngleSound=(SonicTouchArrayZ[i].initialAngleSound-twistBumpPI);
                                     SonicTouchArrayZ[i].angleSound=(SonicTouchArrayZ[i].angleSound-twistBumpPI);
                                       
                                       
                                        // no walk
                                      /* SonicTouchArrayZ[i].initialAngleSound=(SonicTouchArrayZ[i].initialAngleSound-slipConstrainedPI-SonicTouchArrayZ[i].initialAngle+pi)%(2*pi)+SonicTouchArrayZ[i].initialAngle+pi;
                                     SonicTouchArrayZ[i].angleSound=(SonicTouchArrayZ[i].angleSound-slipConstrainedPI)
                                       */
                                       
                                      //  console.log( SonicTouchArrayZ[i].twistModulated+"TwistModulated")
                                      //  console.log( SonicTouchArrayZ[i].initialAngleSound+"initial angle"+ SonicTouchArrayZ[i].angleSound)
                                        
                                        

                                   }
                               }
                               let twisteR=(SonicTouchArrayZ[id].angleSound-SonicTouchArrayZ[id].initialAngleSound+8*pi)%(2*pi);
                               let   lastTwistSign=SonicTouchArrayZ[id].signTwist;
                               SonicTouchArrayZ[id].signTwist =Math.sign(twisteR-pi);
                               if (lastTwistSign!=SonicTouchArrayZ[id].signTwist
                                   &&(twisteR<pi/2.||twisteR>3./2.*pi)
                                   ) {
                                 //  console.log(true)
                                   SonicTouchArrayZ[id].octavesBoosted+=24*SonicTouchArrayZ[id].signTwist;
                               }
                                return SonicTouchArrayZ
                           }
                                             
                                             
      function refreshNoteDAW(SonicTouchObjectD){
                           
            let twistFeed;
            let soundTouchComponent;
            if(!grabStar)
            {soundTouchComponent=SonicTouchObjectD.angleSound
            //  soundTouchComponent=(((-Math.atan2(-SonicTouchObjectD.DAWx,-SonicTouchObjectD.DAWy)*flip-SonicTouchObjectD..DAWinitialAngleSound)+8.*pi)%(2*pi)+SonicTouchObjectD..DAWinitialAngleSound);
            }
            else
            {
            soundTouchComponent=( SonicTouchObjectD.angleSound-SonicTouchObjectD.initialAngleSound)%(2*pi)+SonicTouchObjectD.initialAngleSound;
            //    soundTouchComponent=DAWarray[d].DAWangleSound
            }

            twistFeed= SonicTouchObjectD.permanentInitialTwist+SonicTouchObjectD.octavesBoosted+SonicTouchObjectD.twistModulated;
                                    let    touchNoteSpecified=   soundTouchComponent/pi/2*12;
            SonicTouchObjectD.dawNOTE=touchNoteSpecified*2-twistFeed;

                                      let   frequencySpecified = Math.pow(2.,((touchNoteSpecified-twistFeed/2.)-1.)/12.)*window.ConcertKey;
                                                 //                             console.log(frequencySpecified)

                               setSounds(frequencySpecified,soundTouchComponent,   SonicTouchObjectD.initialAngleSound, SonicTouchObjectD.dawAMPLITUDE*window.touchVolume/2., SonicTouchObjectD.dawAMPLITUDE, SonicTouchObjectD.sound2,   SonicTouchObjectD.sound,  SonicTouchObjectD.zound2,      SonicTouchObjectD.zound,        SonicTouchObjectD.xound2,        SonicTouchObjectD.xound,        SonicTouchObjectD.tound2,        SonicTouchObjectD.tound);
            return SonicTouchObjectD
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
                if(typeof requestWakeLock=="function") requestWakeLock();
//console.log   ( e.srcElement.nodeName)
                if(e.srcElement.nodeName=="CANVAS"  ||
                   e.srcElement.id=="menuDivider"||window.iOS&&e.srcElement.name=="menuButton"||
                   e.srcElement.nodeName=="DIV"//for textWindow as name and id are erased
                   ){
                    
                    let touchLimit=0;
                    while (touchNumber.get(cycler)!="off"&&touchLimit<maxTouchSoundCount)
                    {
                        cycle=(cycle+1)%maxTouchSoundCount;
                        cycler=(cycler+1)%maxTouchSoundCount;
                        
                        touchLimit++;
                    }
                    
                    pressIndex.set (e.pointerId,cycler)
                    touchNumber.set(cycler,cycle)
                    getPressure(e);
                    startSound(e);
                }
            }, false);
            c.addEventListener('pointermove', function(e) {
                if(e.srcElement.nodeName=="CANVAS"  ||
                   e.srcElement.id=="menuDivider"||window.iOS&&e.srcElement.name=="menuButton"||
                   e.srcElement.nodeName=="DIV"//for textWindow as name and id are erased
                   ){
                    let tn = touchNumber.get(pressIndex.get(e.pointerId));
                    if(typeof tn == "number"){
                        getPressure(e);
                       if(bfi==null) followSound(e,SonicTouchArray);
                        else followSound(e,DAWSonicTouchArray);
                    }
                }
                // e.stopImmediatePropagation();// e.preventDefault();
            }, false);
            
            c.addEventListener('pointerup', function(e){
                window.pointerZoom=false;
                let tn = touchNumber.get(pressIndex.get(e.pointerId));
                if(typeof tn == "number" ){
                    screenPressCoordX[tn]=0;
                    screenPressCoordY[tn]=0;
                    
                    disengageDAWpetal(tn);
                    stopSounds(SonicTouchArray[tn])

                    touchNumber.set(pressIndex.get(e.pointerId),"off");

                }
                //e.preventDefault(); e.stopImmediatePropagation();
            }
                               , false);
            
            c.addEventListener('pointercancel', function(e){
                window.pointerZoom=false;
                
                let tn = touchNumber.get(pressIndex.get(e.pointerId));
                if(typeof tn == "number" ){
                    disengageDAWpetal(tn);


                        screenPressCoordX[tn]=0;
                        screenPressCoordY[tn]=0;
                    stopSounds(SonicTouchArray[tn])
                    touchNumber.set(pressIndex.get(e.pointerId),"off");

                    //e.preventDefault(); e.stopImmediatePropagation();
                }
            }, false);
            
            c.addEventListener('pointerleave', function(e){
                window.pointerZoom=false;
                
                let tn = touchNumber.get(pressIndex.get(e.pointerId));
                if(typeof tn == "number"){
                   disengageDAWpetal(tn);

                       screenPressCoordX[tn]=0;
                        screenPressCoordY[tn]=0;
                    stopSounds(SonicTouchArray[tn])
                    touchNumber.set(pressIndex.get(e.pointerId),"off");

                    //e.preventDefault(); e.stopImmediatePropagation();
                }
            }, false);
        }

    function disengageDAWpetal(tn){
            if(touchMagnitude<.25&&DAWnodeIndexForTouchBestFitIndex[tn]!="not set") {
                stopSounds(DAWSonicTouchArray[DAWnodeIndexForTouchBestFitIndex[tn]])
                DAWSonicTouchArray.splice(DAWnodeIndexForTouchBestFitIndex[tn], 1);
                setDAWdependantSize()
                DAWnodeIndexForTouchBestFitIndex[tn] = "not set"
            }
            bfi=null;
        }
