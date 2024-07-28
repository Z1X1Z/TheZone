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
        
            zound[o] =  new Wad({source : 'square'})//, tuna   : hyperdriveTUNA});
         zound2[o] = new Wad({source : 'square'})//, tuna   : hyperdriveTUNA});
        
        xound[o] =  new Wad({source : 'triangle'})//, tuna   : hyperdriveTUNA});
     xound2[o] = new Wad({source : 'triangle'})//, tuna   : hyperdriveTUNA});
        
            tound[o] =  new Wad({source : 'triangle'})//, tuna   : hyperdriveTUNA});
         tound2[o] = new Wad({source : 'triangle'})//, tuna   : hyperdriveTUNA});
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
















function length(x,y){
return Math.sqrt(x**2+y**2)
}

let initialX,initialY;
function dilator(currentCoordX, currentCoordY )
{
    let dilation = length(initialX-currentCoordX,initialY-currentCoordY)
    
    window.uniforms.coreDilation.value=dilation/length(window.innerHeight,window.innerWidth)*Math.sqrt(24);
    //console.log(uniforms.coreDilation.value)
    
}











let initialAngleSound = Array(maxTouchSoundCount).fill(0);
let initialAngle = Array(maxTouchSoundCount).fill(0.);
let lastSlip  = Array(maxTouchSoundCount).fill(0);
let DAWnodeIndexForTouchBestFitIndex  = Array(maxTouchSoundCount).fill("not set");
let pressed = false;


let touchMagnitude=0.;

function startSound(e){
    
    
    
    
    
    
    
    
    let y = e.clientY-heightPX/2.;
    let x = e.clientX- widthPX/2.;
    if(window.touchMode)window.pointerZoom=true
        
    let id = touchNumber.get(pressIndex.get(e.pointerId));
    
    screenPressCoordX[id]=x;
    screenPressCoordY[id]=y;
    initialX = x
    initialY = y

    if(window.grabStar){
        initialAngle[id]=-Math.atan2(-x,-y);

        window.twist=(window.twist+24*100)%24
        permanentInitialTwist[id]=twist;
        initialTwist[id]=twist;
        lastSlip[id] =0;
        octavesBoosted[id]=0
        signTwist[id]=-1.*flip;//"off";
    }
     touchMagnitude=Math.sqrt(y*y+x*x)/(Math.min(heightPX,widthPX))*2;
    let volume= window.touchVolume*-touchMagnitude/2.;
    if(radialOctaveBoost)volume= window.touchVolume*pressure*.25;

    initialAngleSound[id] =(-Math.atan2(-x,-y)*flip+2.*pi)%(2*pi)

    //try with +2*pi)%(2*pi)+2*pi for seam at top
    angleSound[id] =initialAngleSound[id] ;
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    let touchNote=(initialAngleSound[id])/pi/2*12
    let touchNote24=touchNote*2.
    
    
    
    
    let frequency = Math.pow(2.,(((touchNote)-window.twist/2.)-1.)/12.
                                  )*window.ConcertKey;
                                 
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
                                     octaveDistance = (x*x+y*y)**.5/minimumDimension*18.;
                                     octaveShift=3.;
                                    // cascadeSwitch2*=(1.-octaveDistance%1);
                                    // cascadeSwitch1*=octaveDistance%1;
                                 }
                                 
                                 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 DAWnodeIndexForTouchBestFitIndex[id] = "not set"
                                 if(DAW){
                                 if(touchMagnitude<.25){
        DAWarray.push(Object.assign({},window.DAWobject))
                                     DAWnodeIndexForTouchBestFitIndex[id]=DAWarray.length-1
        let bfi= DAWarray[DAWnodeIndexForTouchBestFitIndex[id]];
        bfi.dawNOTE=(touchNote24);
        bfi.dawAMPLITUDE=(touchMagnitude);
        bfi.DAWinitialAngleSound=((-Math.atan2(-x,-y)*flip+2.*pi)%(2*pi))
        bfi.DAWangleSound=(initialAngleSound[id] );

        if(window.grabStar||true){
            bfi.DAWinitialAngle=(-Math.atan2(-x,-y));
            bfi.DAWpermanentInitialTwist=(twist);
            bfi.DAWlastSlip=(0);
            bfi.DAWoctavesBoosted=(0)
            bfi.DAWsignTwist=(-1.*flip);//"off";
        }
        
        bfi.DAWsound=(new Wad({source : 'square'}))//, tuna   : hyperdriveTUNA});
        bfi.DAWsound2=(new Wad({source : 'square'}))//, tuna   : hyperdriveTUNA});
            
        bfi.DAWzound=(new Wad({source : 'square'}))//, tuna   : hyperdriveTUNA});
        bfi.DAWzound2=( new Wad({source : 'square'}))//, tuna   : hyperdriveTUNA});
        
        bfi.DAWxound=(new Wad({source : 'triangle'}))//, tuna   : hyperdriveTUNA});
        bfi.DAWxound2=( new Wad({source : 'triangle'}))//, tuna   : hyperdriveTUNA});
        
        bfi.DAWtound=( new Wad({source : 'triangle'}))//, tuna   : hyperdriveTUNA});
        bfi.DAWtound2=( new Wad({source : 'triangle'}))//, tuna   : hyperdriveTUNA});
        
            playSounds(bfi.DAWsound2,bfi.DAWsound,bfi.DAWzound2,bfi.DAWzound,
                       frequency,octaveDistance,octaveShift,
                       cascadeSwitch1,
                       cascadeSwitch2)
             
          playSounds(bfi.DAWxound2,bfi.DAWxound,bfi.DAWtound2,bfi.DAWtound
                     ,frequency,octaveDistance,octaveShift,
                       cascadeSwitch1,
                       cascadeSwitch2)
        
        
        
        
        
        setDAWdependantSize()
    }
    else{
        
         let bestFitDAWnote = .5
        for(var h=0;h<DAWarray.length;h++){
            let noteDifference=
            Math.abs(touchNote24-DAWarray[h].dawNOTE)
            if(noteDifference<bestFitDAWnote){
                bestFitDAWnote=noteDifference
                DAWnodeIndexForTouchBestFitIndex[id]=h
            }
            
            
            
            noteDifference=Math.abs(24-noteDifference)%24
            
            if(noteDifference<bestFitDAWnote){
                bestFitDAWnote=noteDifference
                DAWnodeIndexForTouchBestFitIndex[id]=h
            }
        }
        
        if(DAWnodeIndexForTouchBestFitIndex[id] != "not set"){
            DAWarray[DAWnodeIndexForTouchBestFitIndex[id]].dawNOTE=touchNote24;
            DAWarray[DAWnodeIndexForTouchBestFitIndex[id]].dawAMPLITUDE=touchMagnitude;//testarContinuous;//
        }
    }
}
        if((!window.touchMode&&!window.muteVoiceTouchVolume)||(window.touchMode&&!window.muteTouchTouchVolume)){
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
                    
                    playSounds(sound2[id],sound[id],zound2[id],zound[id],frequency,octaveDistance,octaveShift,
                                cascadeSwitch1,
                                cascadeSwitch2)
                    playSounds(xound2[id],xound[id],tound2[id],tound[id],frequency[id],octaveDistance[id],octaveShift[id],
                               cascadeSwitch1,
                               cascadeSwitch2)
                   
                    
                    }
            }
}
                                             
                                             function playSounds(sound2,sound,zound2,zound,frequency,octaveDistance,octaveShift,
                                                cascadeSwitch1,
                                                cascadeSwitch2){
                    
                    
                    sound2.play({env:{attack: .1, release:.1,hold:-1},
                        pitch:frequency/2.*2**Math.floor(octaveDistance-octaveShift),
                        volume:cascadeSwitch2*(1.-octaveDistance%1)});
                    sound.play({env:{attack: .1, release:.1,hold:-1},
                        pitch:frequency*2**Math.floor(octaveDistance-octaveShift),
                        volume:cascadeSwitch1*(1.-octaveDistance%1)});
                    if(window.radialOctaveBoost)
                    {
                        zound2.play({env:{attack: .1, release:.1,hold:-1},
                        pitch:frequency*2**Math.ceil(octaveDistance-octaveShift),
                            volume:cascadeSwitch2*octaveDistance%1});
                        zound.play({env:{attack: .1, release:.1,hold:-1},
                        pitch:frequency*2.*2**Math.ceil(octaveDistance-octaveShift),
                            volume:cascadeSwitch1*octaveDistance%1});
                    }
                    
                    
                }
                                         //    let soundTouchComponent= Array(maxTouchSoundCount).fill(0.);
                                             let octavesBoosted = Array(maxTouchSoundCount).fill(0.);
                                 let initialTwist= Array(maxTouchSoundCount).fill(0.);
let   angleSound  = Array(maxTouchSoundCount).fill(0.);
                                           
                                             let permanentInitialTwist= Array(maxTouchSoundCount).fill(0.);
                                             
                                             let signTwist= Array(maxTouchSoundCount);

                                          //   let lastTwistSign;

function followSound(e){
                    

            let y = e.clientY-heightPX/2.;
            let x = e.clientX-widthPX/2.;
                    if(window.INITIALIZED){
                        if(window.ISdilated)
                            dilator(x,y);
                        else uniforms.coreDilation.value=0
                            }
                    let id = touchNumber.get(pressIndex.get(e.pointerId));

                    screenPressCoordX[id]=x;
                        screenPressCoordY[id]=y;
                    
        if(grabStar){
            
             twistIncrement=0;
             twistIncrementPI = 0.;

            let slip = ((-Math.atan2(-x,-y)-initialAngle[id])*flip+8*pi)%(2*pi);
            twistIncrementPI =(slip-lastSlip[id])
             twistIncrement = twistIncrementPI*(24/2)/pi;
                                                
                    console.log(slip)

            lastSlip[id] =slip;
                                                
                                      if (DAWnodeIndexForTouchBestFitIndex[id]!="not set")
                                      DAWarray[DAWnodeIndexForTouchBestFitIndex[id]].permanentInitialTwist+=twistIncrement;
                                         //       else
                                                
            permanentInitialTwist[id] +=twistIncrement;
                                                twist+=twistIncrement;
        }
                    
                    
        if(!window.muteTouchVolume){
            
            if((!window.touchMode&&!window.muteVoiceTouchVolume)||(window.touchMode&&!window.muteTouchTouchVolume))
            {
                
                
                soundRoutine(false,id,x,y,angleSound[id],initialAngleSound[id],initialAngle[id],permanentInitialTwist[id]);
            }
            if(window.DAW)if(DAWnodeIndexForTouchBestFitIndex[id]!="not set")
                 soundRoutine(true,id,x,y,
                                 DAWarray[DAWnodeIndexForTouchBestFitIndex[id]].DAWangleSound,
                                 DAWarray[DAWnodeIndexForTouchBestFitIndex[id]].DAWinitialAngleSound,
                                 DAWarray[DAWnodeIndexForTouchBestFitIndex[id]].DAWinitialAngle,
                                 DAWarray[DAWnodeIndexForTouchBestFitIndex[id]].DAWpermanentInitialTwist);
                
        }

}
                                 
                                             
                                             
                                                
                                                let twistIncrement=0;
                                                let twistIncrementPI = 0.;

                                             
                                             
                                             
                                             
                                             
                                             
                                             
                                             
                                             
                                             
                                             
                                             
                                             function soundRoutine(ISdaw,id,x,y,angleSoundX,initialAngleSoundX,initialAngleX,permanentInitialTwistX,octavesBoostedX){
                    
                    touchMagnitude=Math.sqrt(y*y+x*x)/(Math.min(heightPX,widthPX))*2.
                    let volume= window.touchVolume*pressure*-touchMagnitude/2.;

                    if(radialOctaveBoost)volume= window.touchVolume*pressure*.25;
                    let lastAngleSound=angleSoundX;
                    
                    if(!window.grabStar)
                    {
                        angleSoundX=(((-Math.atan2(-x,-y)*flip-initialAngleSoundX)+8.*pi)%(2*pi)+initialAngleSoundX);
                }
                    else {
                        console.log("here"+lastSlip[0])
                      if(!ISdaw)
                      {let b= bump(id,x,y,signTwist,angleSound,initialAngleSound,octavesBoosted)
                          signTwist=b.signTwist;
                          angleSound=b.angleSound;
                          initialAngleSound=b.initialAngleSound;
                          octavesBoosted=b.octavesBoosted;
                          
                          angleSoundX=b.angleSound[id]
                          initialAngleSoundX=b.initialAngleSound[id];
                          octavesBoostedX=b.octavesBoosted[id];

                                   }
                        else if (DAWnodeIndexForTouchBestFitIndex[id]!="not set")
                        {
                            let bfi = DAWarray[DAWnodeIndexForTouchBestFitIndex[id]];

                            let b= bump(id,x,y,
                                        bfi.DAWsignTwist,
                                        bfi.DAWangleSound,
                                        bfi.DAWinitialAngleSound,
                                        bfi.DAWoctavesBoosted)

                            console.log(b)

                            bfi.DAWsignTwist= b.signTwist,
                            bfi.DAWangleSound=b.angleSound;
                            bfi.DAWinitialAngleSound=b.initialAngleSound;
                            bfi.DAWoctavesBoosted=b.octavesBoosted;
                            
                            angleSoundX=b.angleSound[id]
                            initialAngleSoundX=b.initialAngleSound[id];
                            octavesBoostedX=b.octavesBoosted[id];
                                     }


                    }
                        let twistFeed;
                                                            let soundTouchComponent = 0.;
                        if(!grabStar)
                        {soundTouchComponent=angleSoundX
                            twistFeed = twist;
                        }
                        else {
                             soundTouchComponent=(angleSoundX-initialAngleSoundX+pi*8.)%(2*pi)+initialAngleSoundX;

                            twistFeed= permanentInitialTwistX+octavesBoostedX;

                        }
                                                            
                                                        let    touchNote=   soundTouchComponent/pi/2*12;
                       let frequency = Math.pow(2.,((touchNote-twistFeed/2.)-1.)/12.
                                                       )*window.ConcertKey;
                                                    
                                                    
                                                    
                                                    
            
                                                                                                  
                                                    angleSound[id]=angleSoundX
                                                
                                                    initialAngleSound[id]=initialAngleSoundX
                                                    initialAngle[id]=initialAngleX
                                                   // soundTouchComponent[id]=soundTouchComponentX
                                                    
                                                    if(isFinite(frequency)&&typeof sound[id]=="object"){
                             
                             setSounds(id,frequency,soundTouchComponent,initialAngleSoundX,volume,sound2[id],sound[id],zound2[id],zound[id],xound2[id],xound[id],tound2[id],tound[id]);
                             
                             if(DAW)
                                 if(DAWnodeIndexForTouchBestFitIndex[id]!="not set")
                                     
                                 {

                                     
                                     let bfi = DAWarray[DAWnodeIndexForTouchBestFitIndex[id]];
                                     bfi.dawNOTE=touchNote*2;
                                     bfi.dawAMPLITUDE=touchMagnitude;//testarContinuous;//
                    
                                     setSounds(id,frequency,soundTouchComponent,initialAngleSoundX,volume,
                                               bfi.DAWsound2,bfi.DAWsound,bfi.DAWzound2,bfi.DAWzound,bfi.DAWxound2,bfi.DAWxound,bfi.DAWtound2,bfi.DAWtound);
                                 }
                         }
                                                    }
                                             
                                             
                                                    
                                             
                                             
                                                    function setSounds(id,frequency,soundTouchComponent,initialAngleSound,volume,sound2,sound,zound2,zound,xound2,xound,tound2,tound){
                             let volumePrime=volume*(soundTouchComponent - initialAngleSound)/(2.*pi);
                             let volumeTWO =volume*(1.-(soundTouchComponent-initialAngleSound)/(2.*pi));
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
                                   octaveShift = 3;
                                  //volumePrime*=(1.-octaveDistance%1);
                                  //volumeTWO*=octaveDistance%1

                              }
                              
                             sound2.setPitch(frequency/2.*2**Math.floor(octaveDistance-octaveShift));
                             sound.setPitch(frequency*2**Math.floor(octaveDistance-octaveShift));
                             sound2.setVolume(volumePrime*(1.-octaveDistance%1));
                             sound.setVolume(volumeTWO*(1.-octaveDistance%1));
                               if(window.radialOctaveBoost)
                               {
                                   zound2.setPitch(frequency*2**Math.ceil(octaveDistance-octaveShift));
                                   zound.setPitch(frequency*2*2**Math.ceil(octaveDistance-octaveShift));
                                   zound2.setVolume(volumePrime*octaveDistance%1);
                                   zound.setVolume(volumeTWO*octaveDistance%1);
                               }
                                   xound2.setPitch(frequency/2.*2**Math.floor(octaveDistance-octaveShift));
                                   xound.setPitch(frequency*2**Math.floor(octaveDistance-octaveShift));
                                   xound2.setVolume(volumePrime*(1.-octaveDistance%1));
                                   xound.setVolume(volumeTWO*(1.-octaveDistance%1));
                               if(window.radialOctaveBoost)
                               {
                                   tound2.setPitch(frequency*2**Math.ceil(octaveDistance-octaveShift));
                                   tound.setPitch(frequency*2*2**Math.ceil(octaveDistance-octaveShift));
                                   tound2.setVolume(volumePrime*octaveDistance%1);
                                   tound.setVolume(volumeTWO*octaveDistance%1);
                               }
                         
                                 
                         }
                                             
                                                    
                                             
                                                    function bump(id,x,y,signTwistZ,angleSoundZ,initialAngleSoundZ,octavesBoostedZ){
                           
                                                               
                                                               for(var i = 0; i<octavesBoosted.length;i++)  {
                                if (i==id) angleSoundZ[id]= (angleSoundZ[id]+twistIncrementPI+8*pi)%(2*pi);
                                else{
                                    let slipConstrained =twistIncrementPI;
                                    if(slipConstrained>pi)slipConstrained-=2*pi;
                                    angleSoundZ[i]=(angleSoundZ[i]-slipConstrained+8*pi)%(2*pi);
                                    initialAngleSoundZ[i]=(initialAngleSoundZ[i]-slipConstrained+8*pi)%(2*pi);
                                    
                                }
                                let twisteR=(angleSoundZ[i]-initialAngleSoundZ[i]+8*pi)%(2*pi);
                                let   lastTwistSign=signTwistZ[i];
                                signTwistZ[i] =Math.sign(twisteR-pi);
                                if (lastTwistSign!=signTwistZ[i]
                                    &&(twisteR<pi/2.||twisteR>3./2.*pi)
                                    )   octavesBoostedZ[i]+=24*signTwistZ[i];
                                
                            }
                                                               
                                                  return {
                                signTwist:signTwistZ,angleSound:angleSoundZ,initialAngleSound:initialAngleSoundZ,octavesBoosted:octavesBoostedZ
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
                        followSound(e);
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
                    disengageDAWpetal(tn);


                        screenPressCoordX[tn]=0;
                        screenPressCoordY[tn]=0;
                    
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
                   disengageDAWpetal(tn);

                        screenPressCoordX[tn]=0;
                        screenPressCoordY[tn]=0;
                    
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

                                                    function disengageDAWpetal(tn){
                                                    
                             if(touchMagnitude<.25&&DAWnodeIndexForTouchBestFitIndex[tn]!="not set") {
                                 DAWarray[DAWnodeIndexForTouchBestFitIndex[tn]].DAWsound2.stop()
                                 DAWarray[DAWnodeIndexForTouchBestFitIndex[tn]].DAWsound.stop()
                                 DAWarray[DAWnodeIndexForTouchBestFitIndex[tn]].DAWzound2.stop()
                                 DAWarray[DAWnodeIndexForTouchBestFitIndex[tn]].DAWzound.stop()
                                 DAWarray[DAWnodeIndexForTouchBestFitIndex[tn]].DAWxound2.stop()
                                 DAWarray[DAWnodeIndexForTouchBestFitIndex[tn]].DAWxound.stop()
                                 DAWarray[DAWnodeIndexForTouchBestFitIndex[tn]].DAWtound2.stop()
                                 DAWarray[DAWnodeIndexForTouchBestFitIndex[tn]].DAWtound.stop()
                                 
                                 
                                 DAWarray.splice(DAWnodeIndexForTouchBestFitIndex[tn], 1);
                                 DAWnodeIndexForTouchBestFitIndex[tn] = "not set"
                                 setDAWdependantSize()

                             }
                                                    
                                                    }
