
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

const zound=Array(10);
const zound2=Array(10);


const xound=Array(10);
const xound2=Array(10);


const tound=Array(10);
const tound2=Array(10);


const feedbackPitchsound=Array(5); //updated in starshipMod
let wadLOADED=false;
function initialize(){
    feedbackPitchsound[4] =  new Wad({source : 'triangle'})
    for(var o=0;o<4;o++)feedbackPitchsound[o] =  new Wad({source : 'square'})//, tuna   : hyperdriveTUNA});

   // feedbackPitchsound.play({env:{attack: 0, release:0,hold:-1},pitch:1,volume:0})
    for(var o=0;o<10;o++){
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
   
    attachPointerActions();
    wadLOADED=true;
}

let initialAngleSound = Array(10);
initialAngleSound[0]=0;
function startSound(e){


   let y = e.clientY-heightPX/2.;
    let x = e.clientX- widthPX/2.;
    if(window.touchMode)window.pointerZoom=true

    screenPressCoordX=x;
    screenPressCoordY=y;
   
    let twistTRIANGLEtoSQUARE=1.;
    let twistSQUAREtoTRIANGLE = 1.;
    let twistZINEtoSAW = 1.;
    let twistSAWtoZINE = 1.;
    if(event.twist!=0)
    {
        twistTRIANGLEtoSQUARE= Math.atan(y,x)/Math.PI-event.twist/360;
        twistSQUAREtoTRIANGLE = 1.-twistTRIANGLEtoSQUARE;
        twistZINEtoSAW= (Math.atan(y,x)/Math.PI-event.twist/360+.5)%1;
        twistSAWtoZINE=1.-twistZINEtoSAW;
    }
    if(!window.touchMode){
        var id = touchNumber.get(e.pointerId);
       
        
        
        let volume= pressure*-Math.sqrt(y*y+x*x)/(Math.max(heightPX,widthPX));

        initialAngleSound[id] = (Math.atan2(y,x)+pi/2.+4*pi)%(2*pi);
        let frequency = Math.pow(2.,((((initialAngleSound[id]*window.flip)/pi/2*12+correction)*window.flip-window.flip*window.twist/2.))/12.)*window.ConcertKey;
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
            
            sound[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency,volume:volume*twistTRIANGLEtoSQUARE*.5});
            sound2[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency/2.,volume:.000000000000001});
            
            zound[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency,volume:volume*twistSQUAREtoTRIANGLE*.5});
            zound2[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency/2.,volume:.000000000000001});
            
            
            xound[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency,volume:volume*twistZINEtoSAW*.5});
            xound2[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency/2.,volume:.000000000000001});
            
            tound[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency,volume:volume*twistSAWtoZINE*.5});
            tound2[id].play({env:{attack: .1, release:.1,hold:-1},pitch:frequency/2.,volume:.000000000000001});


            }
    }
}

                                     
function followSound(e){
            let y = e.clientY-heightPX/2.;
            let x = e.clientX-widthPX/2.;

                        screenPressCoordX=x;
                        screenPressCoordY=y;
         
    if(!window.touchMode){
        
        var id =touchNumber.get(e.pointerId);
        let twistTRIANGLEtoSQUARE=1.;
        let twistSQUAREtoTRIANGLE = 1.;
        let twistZINEtoSAW = 1.;
        let twistSAWtoZINE = 1.;
        if(event.twist!=0)
        {
            twistTRIANGLEtoSQUARE= Math.atan(y,x)/Math.PI-event.twist/360;
            twistSQUAREtoTRIANGLE = 1.-twistTRIANGLEtoSQUARE;

            twistZINEtoSAW= (Math.atan(y,x)/Math.PI-event.twist/360+.5)%1;
            twistSAWtoZINE= 1.-twistZINEtoSAW;
           console.log(twistZINEtoSAW)//this should get tested
        }
        let volume= pressure*-Math.sqrt(y*y+x*x)/(Math.max(heightPX,widthPX));
        let angleSound = Math.atan2(y,x);
        angleSound=(((angleSound-initialAngleSound[id])+8.*pi)%(2*pi)+pi/2.)*window.flip+initialAngleSound[id];
        let frequency = Math.pow(2.,((angleSound/pi/2*12)-window.twist*window.flip/2.+correction)/12.)*window.ConcertKey;
               //                  console.log(Math.pow(2.,((angleSound/pi/2*12)-window.twist*window.flip/2.+correction)/12.))
        if(isFinite(frequency)&&frequency>0.&&
           angleSound-initialAngleSound[id]!=0){
            if(typeof sound[id]=="object"){
                let volumePrime=volume*(angleSound - initialAngleSound[id])/(2.*pi)*.5;
                let volumeTWO =volume*(1.-(angleSound-initialAngleSound[id])/(2.*pi))*.5;
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
                                                             let cycle=0;
let c = document.body;//document.getElementById("container")
                                 
                                 
                                var pressure = 1.;
    function getPressure(event){
        if (event.pressure === 0) pressure=1;
        else if (event.pressure === 1) pressure = 1;
        else if (event.pressure === .5) pressure = 1;
        else pressure = event.pressure;
    }
                               
                                 function attachPointerActions(){
            c.addEventListener('pointerdown', function(e)
                               {
                
                
                //   e.stopImmediatePropagation();          //e.preventDefault();
                touchNumber.set(e.pointerId,cycle);
                cycle=(cycle+1)%10
                getPressure(e);
                startSound(e);
                
            }, false);
            c.addEventListener('pointermove', function(e) {
                let tn = touchNumber.get(e.pointerId)
                if(typeof tn == "number"){
                    getPressure(e);
                    followSound(e);
                }
                // e.stopImmediatePropagation();// e.preventDefault();
            }, false);
            
            c.addEventListener('pointerup', function(e){
                window.pointerZoom=false;
                
                let tn = touchNumber.get(e.pointerId)
                if(typeof tn == "number" ){                                         {
                    let tn = touchNumber.get(e.pointerId);
                    sound[tn].stop();sound2[tn].stop();
                    zound[tn].stop();zound2[tn].stop();
                    xound[tn].stop();xound2[tn].stop();
                    tound[tn].stop();tound2[tn].stop();
                }
                }
                //e.preventDefault(); e.stopImmediatePropagation();
            }
                               , false);
            
            c.addEventListener('pointercancel', function(e){
                window.pointerZoom=false;
                
                let tn = touchNumber.get(e.pointerId);
                if(typeof tn == "number" ){
                    let tn = touchNumber.get(e.pointerId)
                    sound[tn].stop();
                    sound2[tn].stop();
                    zound[tn].stop();
                    zound2[tn].stop();
                    
                    xound[tn].stop();
                    xound2[tn].stop();
                    tound[tn].stop();
                    tound2[tn].stop();
                    
                    //e.preventDefault(); e.stopImmediatePropagation();
                }
            }, false);
            
            c.addEventListener('pointerleave', function(e){
                window.pointerZoom=false;
                
                let tn = touchNumber.get(e.pointerId)
                if(typeof tn == "number"){
                    let tn = touchNumber.get(e.pointerId)
                    sound[tn].stop();
                    sound2[tn].stop();
                    zound[tn].stop();
                    zound2[tn].stop();
                    
                    xound[tn].stop();
                    xound2[tn].stop();
                    tound[tn].stop();
                    tound2[tn].stop();
                    
                    //e.preventDefault(); e.stopImmediatePropagation();
                }
            }, false);
        }
