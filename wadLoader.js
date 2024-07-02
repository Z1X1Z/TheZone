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

const screenPressCoordX=Array(maxTouchSoundCount).fill(0);
const screenPressCoordY=Array(maxTouchSoundCount).fill(0);


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
let initialAngle = Array(maxTouchSoundCount);
let lastSlip  = Array(maxTouchSoundCount).fill(0);
let firstMotion  = Array(maxTouchSoundCount).fill(true);
let pressed = false;




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
        firstMotion[id]=true;
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
                
                
                let volume= .5*-Math.sqrt(y*y+x*x)/(Math.max(heightPX,widthPX));
                 if(radialOctaveBoost)volume= pressure*.25;

                initialAngleSound[id] =(-(Math.atan2(-x,-y))*flip+pi*2)%(pi*2.);
                 angleSound[id] =initialAngleSound[id] ;
                 soundTouchComponent[id]=initialAngleSound[id];

                let frequency = Math.pow(2.,((((initialAngleSound[id]*window.flip)/pi/2*12)*window.flip-window.twist/2.)-1.)/12.
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
                         cascadeSwitch2=1*volume
                         cascadeSwitch1=0.00000000000001
                    }
                    else
                    {
                         cascadeSwitch2=0.00000000000001
                         cascadeSwitch1=1*volume
                    }
                    
                    let octaveDistance = 0.00000000000001
                    let octaveShift=0;
                    if(window.radialOctaveBoost) {
                        octaveDistance = (x*x+y*y)**.5/minimumDimension*18.;
                        octaveShift=3.;
                        cascadeSwitch2*=(1.-octaveDistance%1);
                        cascadeSwitch1*=octaveDistance%1;
                    }
                    
                    
                    sound2[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency/2.*2**Math.floor(octaveDistance-octaveShift)
                        ,volume:cascadeSwitch2*twistTRIANGLEtoSQUARE});
                    
                    sound[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency*2**Math.floor(octaveDistance-octaveShift),volume:cascadeSwitch1*twistTRIANGLEtoSQUARE});
                    
                    zound2[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency/2.*2**Math.ceil(octaveDistance-octaveShift),volume:cascadeSwitch2*twistTRIANGLEtoSQUARE});
                    zound[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency*2**Math.ceil(octaveDistance-octaveShift)
                        ,volume:cascadeSwitch1*twistTRIANGLEtoSQUARE});
                    
                    xound2[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency/2.*2**Math.floor(octaveDistance-octaveShift)
                        ,volume:cascadeSwitch2*twistTRIANGLEtoSQUARE});
                    
                    xound[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency*2**Math.floor(octaveDistance-octaveShift),volume:cascadeSwitch1*twistTRIANGLEtoSQUARE});
                    
                    tound2[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency/2.*2**Math.ceil(octaveDistance-octaveShift),volume:cascadeSwitch2*twistTRIANGLEtoSQUARE});
                    tound[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency*2**Math.ceil(octaveDistance-octaveShift)
                        ,volume:cascadeSwitch1*twistTRIANGLEtoSQUARE});


                    }
            }
}
                                             let soundTouchComponent= Array(maxTouchSoundCount).fill(0.);
                                             let octavesBoosted = Array(maxTouchSoundCount).fill(0.);
let   angleSound  = Array(maxTouchSoundCount).fill(0.);
                                             let initialTwist= Array(maxTouchSoundCount).fill(0.);
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

                    let twistIncrement=0;
if(window.grabStar)
{
    let slip = ((-Math.atan2(-x,-y)-initialAngle[id])*flip+8*pi)%(2*pi);
    twistIncrementPI =(slip-lastSlip[id])
     twistIncrement = twistIncrementPI*(24/2)/pi;
    lastSlip[id] =slip;

    window.twist+=twistIncrement;
    permanentInitialTwist[id] +=twistIncrement;

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
        let volume= .5*pressure*-Math.sqrt(y*y+x*x)/(Math.max(heightPX,widthPX));
                 if(radialOctaveBoost)volume= pressure*.25;
                 let lastAngleSound=angleSound[id];

             if(!window.grabStar) angleSound[id]=(((-Math.atan2(-x,-y)*flip-initialAngleSound[id])*flip+8.*pi)%(2*pi)+initialAngleSound[id]);
             
             else {
                 
                 for(var i = 0; i<maxTouchSoundCount;i++)  {
                     let oppositeWay = 1
                     if (i==id) angleSound[i]+= twistIncrementPI;
                     else{
                         oppositeWay=-1
                             angleSound[i]-=twistIncrementPI;
                         initialAngleSound[i]-=twistIncrementPI
                         }
                     let twisteR=(angleSound[i]-initialAngleSound[i])%(2*pi);
                     
                     let   lastTwistSign=signTwist[i];
                     signTwist[i] =Math.sign(twisteR-pi);
                     if (lastTwistSign!=signTwist[i]
                         &&(twisteR<pi/2.||twisteR>3./2.*pi)
                         )   octavesBoosted[i]+=24*signTwist[i];
                 }
                 if(firstMotion[id]==true&&signTwist[id]==-1)
                     for(var i = 0; i<maxTouchSoundCount;i++)
                         if(i!=id)
                             octavesBoosted[i]-=24;

             }
                 console.log(signTwist[id])
                 firstMotion[id]=false
                 let twistFeed;
                 if(!grabStar)
                 {soundTouchComponent[id]=angleSound[id]
                     twistFeed = twist;
                 }
                 else {
                     soundTouchComponent[id]=angleSound[id]
                   // soundTouchComponent[id]=(angleSound[id]-initialAngleSound[id]+pi*4.)%(Math.PI*2.)+initialAngleSound[id];

                     twistFeed= permanentInitialTwist[id]+octavesBoosted[id];

                 }
                let frequency = Math.pow(2.,((((soundTouchComponent[id]*window.flip)/pi/2*12)*window.flip-twistFeed/2.)-1.)/12.
                                                )*window.ConcertKey;
                                             
                                            console.log("initial FREQ" + frequency)
                                             
        if(isFinite(frequency)&&frequency>0.&&
           angleSound[id]-initialAngleSound[id]!=0&&typeof sound[id]=="object"){
                    let volumePrime=volume*(soundTouchComponent[id] - initialAngleSound[id])/(2.*pi)
                    
                    ;
                    let volumeTWO =volume*(1.-(soundTouchComponent[id]-initialAngleSound[id])/(2.*pi))
                    
                    ;
                   // console.log("angleSound"+soundTouchComponent[id])
                   // console.log("volumePrime"+volumePrime)
                  //  console.log("volumeTwo"+volumeTWO)
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
                         octaveDistance = (x*x+y*y)**.5/minimumDimension*18.;
                          octaveShift = 3;
                         volumePrime*=(1.-octaveDistance%1);
                         volumeTWO*=octaveDistance%1

                     }
                     
                    sound2[id].setPitch(frequency/2.*2**Math.floor(octaveDistance-octaveShift));
                    sound[id].setPitch(frequency*2**Math.floor(octaveDistance-octaveShift));
                    sound2[id].setVolume(volumePrime*twistTRIANGLEtoSQUARE);
                    sound[id].setVolume(volumeTWO*twistTRIANGLEtoSQUARE);
                    
                   zound2[id].setPitch(frequency/2.*2**Math.ceil(octaveDistance-octaveShift));
                    zound[id].setPitch(frequency*2**Math.ceil(octaveDistance-octaveShift));
                    zound2[id].setVolume(volumePrime*twistTRIANGLEtoSQUARE);
                    zound[id].setVolume(volumeTWO*twistTRIANGLEtoSQUARE);
                    
                   xound2[id].setPitch(frequency/2.*2**Math.floor(octaveDistance-octaveShift));
                   xound[id].setPitch(frequency*2**Math.floor(octaveDistance-octaveShift));
                   xound2[id].setVolume(volumePrime*twistTRIANGLEtoSQUARE);
                   xound[id].setVolume(volumeTWO*twistTRIANGLEtoSQUARE);
                   
                  tound2[id].setPitch(frequency/2.*2**Math.ceil(octaveDistance-octaveShift));
                   tound[id].setPitch(frequency*2**Math.ceil(octaveDistance-octaveShift));
                   tound2[id].setVolume(volumePrime*twistTRIANGLEtoSQUARE);
                   tound[id].setVolume(volumeTWO*twistTRIANGLEtoSQUARE);
                   
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

console.log   ( e.srcElement.nodeName)
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
