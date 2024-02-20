var THREE;
const leaf = -1.3247179572447460259609088544780973407344040569017333645340150503028278512455475940546993479817872803299109209947422074251089026390458977955943147570967234717541668390388674187517369315842535499082466223545337273504589879909568150627745509802486213012169894157524574548625075626524610368938904839932269952074975962828868556908150704513696109853352577281586033441141927828273765296032993584674231028483241695239006108543338219;
const gr = 1.61803398874989484820458683436563811772030917980576286213544862270526046281890244970720720418939113748475408807538689175212663386222353693179318006076672635443338908659593958290563832266131992829026788067520876689250171169620703222104321626954862629631361443814975870122034080588795445474924618569536486444924104432077134494704956584678850987433944221254487706647
if(window.useCDN)import("three").then(module => { THREE=module})
.catch((err) => {
    console.log("Error loading threeJS module;load old Threejs instead");
    document.getElementById("threeJSscript").src = "https://cdn.jsdelivr.net/gh/Z1X1Z/zonex_jsdelivr/three.min.js"//iOS needs a local module, so we give it this instead
    
})
.finally((err) => {});
else{
    console.log("load old Threejs for offline")
    document.getElementById("threeJSscript").src="three.js";
}



function stallTillTHREELoaded(){//this is a lurker. it waits for the three.js loader to resolve to a loaded library, then initializes the game.
    if(typeof THREE=="object" && document.visibilityState=="visible"
       &&(window.micOn||(location.hash.includes("t")&&!location.hash.includes(",t")))){
       document.getElementById( "background_wrap").style =  "height: 0px; width: 0px;"
        //"background-image: none;";//turn off splash!
        document.getElementById( "load message").innerHTML = "";//turn off splash!

                if(location.hash.includes("t")&&!location.hash.includes(",t"))
              {
                window.touchOnlyMode=true;
              }
            init();
     }
    else setTimeout(stallTillTHREELoaded,100);

    }//setTimeout waits for 10ms then runs stallTillTHREELoaded()
stallTillTHREELoaded();


window.pixelShaderSize = 7;
const pixelShaderToStarshipRATIO = pixelShaderSize/4.;//don't change from 7./4. or some factor of 7 seems right;
const movementRateORIGINAL = -leaf;
window.movementRate=movementRateORIGINAL;
window.zoomRate=movementRateORIGINAL;
window.radialWarp=1.;
const starshipSize = Math.E**leaf/Math.sqrt(2.);//divided by Math.sqrt(2.) to set trail to equilateral,other coefficients are scale (size)
let trailSecondsLong = 7.;
let starShipDepthInSet = (trailSecondsLong-pixelShaderToStarshipRATIO/2.)/trailSecondsLong;//base Z value

                            const zoomFrames = 60;//frames to double zoom
let ZR = Math.E**(Math.log(.5)/zoomFrames);
                  const mf = 1.75;
const MR = mf/zoomFrames;
let trailLength = Math.ceil(zoomFrames*trailSecondsLong);
                          
const dotSize = starshipSize;

let coringValue = 1./-leaf/gr;
let screenPressCoordX=0, screenPressCoordY=0;
window.pointerZoom=false;
let coordX=0., coordY=0.;
window.touchMode=false;
window.volumeSpeed = false;
window.zoomCageSize = window.pixelShaderSize/4.;//radius of zoom bounding

                  window.uniformsLoaded=false;
window.twist = 0.;
window.flip = 1.;

//if (navigator.maxTouchPoints <1) rez = window.devicePixelRatio;//redefine resolution for desktop
                          
let colorSound;
let colorSoundPURE;
let center = false;
let loopsRun =0;
let mobile = false;

      //vvvvbelow line partly from https://code-boxx.com/detect-mobile-device-javascript/




//key press handling vvvv
var pointed=false;
let zoomAtl41=false;//watch for the 1 and the l


                  var framesLong;
                  let computeFPS=false;


            function disposeArray() {

                                this.array = null;

                            }
            const container=document.getElementById( 'container' );


var zoomOutEngage=false;
var pi = Math.PI;
var bufferSize=fftSize;
var numberOfBins=bufferSize/2.;
var inputData = new Float32Array(bufferSize);
var dataArray = new Uint8Array(bufferSize/2);
const fractionOfFrame = 1024;//1024-26=998 seems not to skip much and has nice low ranges
const yinData = new Float64Array(fractionOfFrame);

var frequencies,
                            starArms,
                          
                                                        testar,
                                                        testarContinuous,
                                                        mustarD,
                        star,starColors;
                            
window.zoomOutRatchetThreshold=1./bufferSize;

let Fret = {x:null,y:null,index:null,volume:0.,note:-12};
const loudestFret=Array(4).fill(Fret);
                            function vectorize4(){
    for(var g = 0;g<loudestFret.length;g++)loudestFret[g]=Object.assign({},Fret);
    let fretCount;
    if(onO) fretCount=starArms
        else fretCount=1024;
    
    let minDifference = 1.7;
    for (var g=0; g<fretCount; g++)if(isFinite(mustarD[g]))
    {
        
        if (Math.abs(mustarD[g]%24-loudestFret[0].note%24)>minDifference&&dataArray[g]>loudestFret[0].volume)
        {
            {
                loudestFret[3]=Object.assign({},loudestFret[2]);
                loudestFret[2]=Object.assign({},loudestFret[1]);
                loudestFret[1]=Object.assign({},loudestFret[0]);
            }
            
            loudestFret[0].index=g;
            loudestFret[0].volume=dataArray[g];loudestFret[0].note = mustarD[g];
            loudestFret[0].frequency = frequencies[g];
        }
        
        else if (Math.abs(mustarD[g]%24-loudestFret[0].note%24)>minDifference&&Math.abs(mustarD[g]%24-loudestFret[1].note%24)>minDifference&&dataArray[g]>loudestFret[1].volume)
        {
            {
                loudestFret[3]=Object.assign({},loudestFret[2]);
                loudestFret[2]=Object.assign({},loudestFret[1]);
            }
            loudestFret[1].index=g;
            loudestFret[1].volume=dataArray[g];
            loudestFret[1].frequency = frequencies[g];
            loudestFret[1].note = mustarD[g];

        }
        else if(Math.abs(mustarD[g]%24-loudestFret[0].note%24)>minDifference&&Math.abs(mustarD[g]%24-loudestFret[1].note%24)>minDifference&&Math.abs(mustarD[g]%24-loudestFret[2].note%24)>minDifference&&dataArray[g]>loudestFret[2].volume)
        {
            
            loudestFret[2].index=g;loudestFret[2].volume=dataArray[g];
            loudestFret[2].frequency = frequencies[g];
loudestFret[2].note = mustarD[g]
        }
        else if (Math.abs(mustarD[g]%24-loudestFret[0].note%24)>minDifference&&Math.abs(mustarD[g]%24-loudestFret[1].note%24)>minDifference&&Math.abs(mustarD[g]%24-loudestFret[2].note%24)>minDifference&&Math.abs(mustarD[g]%24-loudestFret[3].note%24)>minDifference&&dataArray[g]>loudestFret[3].volume){
            loudestFret[3].index=g;loudestFret[3].volume=dataArray[g];
            
            loudestFret[3].frequency = frequencies[g];

            loudestFret[3].note = mustarD[g];
        }
    }
    for(var g = 0;g<loudestFret.length;g++)
    {
        var arm =(flip*mustarD[loudestFret[g].index]+twist+12)%24./24.*pi*2.;
        //var rpio2 = arm+pi;
        loudestFret[g].x = -Math.sin(arm);//*loudestFret[g].volume;
        loudestFret[g].y = -Math.cos(arm);//*loudestFret[g].volume;

    }
}
let averagedAmp =  0;
let len=0;
                            let phase = 0;
                            let phase2 = 0;
let onO = false;
var colorInstant=0.;
let updateInstant = false;
                            let innerSpirographFractionalSize=0;

                            const bufferPortion = 2048*2;//should be 2048
                            const spirray0 = new Float64Array(bufferPortion).fill(.5);
                            const spirray1 = new Float64Array(bufferPortion).fill(.5);
                          const   point = new Float64Array(bufferPortion*3*2);
                          const   pointColor = new Float64Array(bufferPortion*4*2);
function makeSpirograph(){
      phase = phase % (pi*2);
        phase2 =  phase2 % (pi*2);
      len = 0;
    const adjConstant =2*Math.PI*window.ConcertKey/pitch/512.*2**(1./3.)/1.5;//shouldn't be buffersize needs to be revised
    var maxSamp=0.;
    for(var t=0; t<bufferPortion;t++) if(inputData[t]>maxSamp)maxSamp=inputData[t];
  
    for(var m = 0; m < bufferPortion; m++)
      {
              phase += adjConstant;//spira_pitch;
        let dilation =inputData[m]/maxSamp/2.;
            let outside = (1+dilation)/2.;
            let inside  = (1.-dilation)/2.;
                var size =outside+inputData[m]*inside;// inputData[m]/maxSamp;//.75+inputData[m]/4./maxSamp;
              spirray0[m]=-Math.sin(-phase)*size;
              spirray1[m]=-Math.cos(-phase)*size;
      }
       
}

function spiral_compress(){
    let freq = 0;
  //  notesAverage = 0.;
  //  let notesAverageCOUNTER = 0.;

    const z = [...dataArray];

    testarContinuous.fill(0); testar.fill(0); mustarD.fill(0);
    for(let n=0; n<numberOfBins; n++)
    {
    //if ( z[n]>z[n-1] && z[n] > z[n+1] ){
    let d =1.;
    if(n!=0)   d = (z[n+1]-z[n-1])/(z[n-1]+z[n+1]);
    else d = (z[n+1])/(z[n]+z[n+1])/2.;
    const nAdj = n + d*4 ;
    if (Math.abs(d)<4+1.&&isFinite(d))
        freq =((( audioX.sampleRate)*(nAdj))/numberOfBins);
        else freq = audioX.sampleRate*n/numberOfBins
        //    freq = 440; //check for concert A
            frequencies[n]=freq;
    var note24 =24*Math.log(freq/window.ConcertKey)/Math.log(2.)+49*2;


        testar[Math.round(note24*EldersLeg/24.)%EldersLeg] += Math.abs(z[n])*radialWarp;
      testarContinuous[n] = Math.abs(z[n]);
                          mustarD[n] = note24;
                            }
                            
};
window.ConcertKey = 440;



const twelve = Array(12);
for(let n = 0; n<12; n++)twelve[n] = new Float64Array(10).fill(0);

var smoothTwelve =false;
function fiveAndSeven(){
    
    for(let n = 0; n<12; n++)
        for(let m = 0; m<10; m++)
            twelve[n][m]=0;
    
    
      let finger = 0 //ranges up to
      let  starNote = 0 //ranges up to 12
        for(let n = 0; n<numberOfBins; n++)        {
            //mustard is in 24ths, here we want 12ths so we divide by two
            const twelfths = (mustarD[n]/2.+12)*radialWarp//A1 is 1 with +12
           
                if( twelfths>=-.5){
                    starNote = Math.round(twelfths)%12;
                    finger = Math.floor(twelfths/10);
                    if (finger<10&&isFinite(finger)&&isFinite(starNote)&&isFinite(dataArray[n])) twelve[starNote][finger] += dataArray[n];
                }
                        
            
            }
}
                            var cx =new Float64Array(trailLength).fill(0);//c is the center of the frame moved from the origin
                            var cy = new Float64Array(trailLength).fill(0);
                            var xPerp= new Float64Array(trailLength).fill(0);//perp is the perpendicular from c
                            var yPerp = new Float64Array(trailLength).fill(0);
                            var trailWidth = new Float64Array(trailLength).fill(0);
                            var trailTimeOfRecording = new Float64Array(trailLength).fill(0);
                            var trailSegmentExpired = Array(trailLength).fill(false);
var pitchCol = Array(trailLength);
                            
            function setTrailSize(){
        
                             trailLength = Math.ceil(zoomFrames*trailSecondsLong);
                            starShipDepthInSet = (trailSecondsLong-pixelShaderToStarshipRATIO/2.)/trailSecondsLong;//base Z value
                              cx =new Float64Array(trailLength).fill(0);//c is the center of the frame moved from the origin
                              cy = new Float64Array(trailLength).fill(0);
                              xPerp= new Float64Array(trailLength).fill(0);//perp is the perpendicular from c
                              yPerp = new Float64Array(trailLength).fill(0);
                              trailWidth = new Float64Array(trailLength).fill(0);
                              trailTimeOfRecording = new Float64Array(trailLength).fill(0);
                              trailSegmentExpired = Array(trailLength).fill(false);
                            pitchCol = Array(trailLength);
                                                  if(window.INITIALIZED){
                                for(var n = 0; n<trailLength; n++)
                                {pitchCol[n]  = new THREE.Color()
                                }
                                
                                for(var v = 0; v<6*trailDepth;v++){
                                    geomeTrail.getAttribute( 'position' ).setXYZ(v,0,0,0);
                                }
                            }
                                                  trailDepth=0.;

                           }
let trailLoaded = false;
let trailDepth = 0;

let d_x=0,d_y=0;
let staticX=0,staticY=0;

let circleX=0.,circleY=.5;
let f = 0;



let pitch = -1;

let reset = 6;
let on;
let spirafreq=1;
var totalAMP;
var angle=0.;//this has nothing to do with the spin function below, it's for the pitch
                           function spin(f, angle)
                           {    //https://en.wikipedia.org/wiki/Rotation_matrix
                               const fxb=f[0];
                               f[0]=-f[0]*-Math.cos(-angle)-f[1]*-Math.sin(-angle);
                            f[1]=fxb*-Math.sin(-angle)-f[1]*-Math.cos(-angle);
                            return f;
                           }

let aboveThreshold;
                           let xAdjusted, yAdjusted;
let pushBackCounter = 0;
                          let flatline = 1.;
          const   lightingScaleTrail = 72;//note range for color scheme
                                 const  lightingScaleStar = lightingScaleTrail*2.*2.;//convert 12 to 24 and expand by factor of 2 for a divide between the octaves of the voice (trail) and the hearing (star)
                                  let note,lastNote;
                                    let BlackOrWhiteTrail=.5;//also for star
                                    let BlackOrWhiteNOTE = 1.
                                    let starMajorMinor=.5;
                                    let fromCenter = 0;
                                                  let radius = 0.;
        function  move()
        {
            if (isNaN(coordX)||(!zoomAtl41&&coordX>4.))coordX=0.;
            if (isNaN(coordY)||(!zoomAtl41&&coordY>4.))coordY=0.;



            totalAMP = 0.;
            for(var n=0; n<inputData.length;n++)totalAMP+=Math.abs(inputData[n]);
            totalAMP/=inputData.length;
                uniforms["totalAmp" ].value=totalAMP;
                
                
                
                lastPitch = pitch;
                pitch =    audioX.sampleRate/calculatePitch();
                const notNyquist = Math.abs(pitch-audioX.sampleRate/numberOfBins/2.)>1.;
                if(!notNyquist) pitch = lastPitch;

                
                
            if (isFinite(pitch) &&pitch>0&& notNyquist &&pitch!=-1&&totalAMP>zoomOutRatchetThreshold) {
                aboveThreshold = true;
                on = true;
            }
            else{aboveThreshold = false; on = false;}
                
              
                
                
                
            if(window.FeedbackSound)
            {
                const feedBackReduction = 4;
                if(wadLOADED&&aboveThreshold) {
                   //    feedbackPitchsound[4].stop();
                    
                    feedbackPitchsound[4].play({env:{attack: 0.,hold:interpolation/60.*2, release:FPS/60.},pitch:pitch,volume:(totalAMP<1.)?totalAMP/feedBackReduction:1.})
                    
                    for (var v = 0; v < 4; v++)
                    {
                        
                         ///  feedbackPitchsound[v].stop();
                            feedbackPitchsound[v].play({env:{attack: 0.,hold:interpolation/60.*2, release:FPS/60.},pitch:loudestFret[v].frequency,volume://loudestFret[v].volume
                                1./feedBackReduction/(4-v)})
                            
                    }
                }
                    else if (wadLOADED) {
                        
                        //feedbackPitchsound[4].play({env:{attack: 0,                   release:0,hold:0}, pitch:0,volume:0});
                       // feedbackPitchsound[4].stop();
                        
                        for (var v = 0; v < 4; v++)
                        {
                           // feedbackPitchsound[v].play({env:{attack: 0,                   release:0,hold:0},pitch:0, volume:0});
                            //feedbackPitchsound[v].stop();
                                
                        }

                    }
                                               }
                            //wadaw webaudiodaw code
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
        lastNote = note;
         note = 12*Math.log(pitch/window.ConcertKey)/Math.log(2.)+49;//https://en.wikipedia.org/wiki/Piano_key_frequencies
         uniforms.note.value=note;
                            
        const t =  (note +twist/2)*flip;
                            if(isFinite(t))angle = -(t*radialWarp);

                            if(on)
                            {
        //angle-=1/radialWarp;
                            const reversableColor=((angle/12./radialWarp)*flip+twist/24.+1./3.)%1.;

        colorSound = new THREE.Color();
                               const colortone = note/lightingScaleTrail;
            colorSound.setHSL(reversableColor,1.,(colortone<=.875)?((colortone>.125)?colortone:.25):.875);//lighting {note/x} should be 120 but it's out of the vocal range
                            colorSoundPURE =     new THREE.Color().setHSL(reversableColor,1.,.5);//lighting {note/x} should be 120 but it's out of the vocal range
        pitchCol[f]  = colorSoundPURE;
                            
                                                   
                                                   const nt = Math.round(note)%12;
                                                   if (nt==7||nt==5||nt==2||nt==0||nt==10)
                                                   {
                                           BlackOrWhiteNOTE=0.;
                                                   }
                                                   else
                                                   {
                                           BlackOrWhiteNOTE=1.;
                                                   }
                            
                                                   
                                                  let bwPRIMER = .125;
                                                   starMajorMinor = (BlackOrWhiteNOTE+bwPRIMER)/(1.+bwPRIMER)/2.+bwPRIMER*2.;
                                                   
                                                    bwPRIMER = .5;
                                                    BlackOrWhiteTrail = (BlackOrWhiteNOTE-bwPRIMER)/(1.-bwPRIMER);
                                                   }
                                                   else {
                                                        starMajorMinor=.5;
                                                        BlackOrWhiteTrail=.5;
                                                    }
                                                   
                                                   if(!Oreo){
                                starMajorMinor=.5;
                                BlackOrWhiteTrail=.5;
                                
                            }
                                flatline = window.movementRate;
                           //    if(window.movementRate<movementRateORIGINAL) flatline = 1.;
                            
                            
                 angle = ((angle+6*radialWarp)/12.)%1*2*pi;
                 d_x = -Math.sin(-angle)*flatline;
                 d_y = -Math.cos(-angle)*flatline;
                 uniforms.d.value=new THREE.Vector2( d_x,d_y);
              
                               
                               FEEDBACKuniforms.d.value=new THREE.Vector2(d_x,d_y);
                               FEEDBACKuniformsFlip.d.value=new THREE.Vector2(d_x,d_y);
                 d_x*=volume;
                 d_y*=volume;
                 var spunD = [d_x,d_y];
                               
                            if(uniforms.carousel.value!=0.)         spunD=spin(spunD,-uniforms.carousel.value*(uniforms[ "time" ].value*uniforms[ "rate" ].value+Math.PI)%(Math.PI*2.));
                  const d_xS=spunD[0];
                  const d_yS=spunD[1];

           const bx=coordX+d_xS*MR*zoom*interpolation;
          const by=coordY+d_yS*MR*zoom*interpolation;
                               
                            let preFromCenter= Math.sqrt(bx*bx+by*by);

             if(isFinite(d_x)&&isFinite(d_y)&&totalAMP>zoomOutRatchetThreshold&&on){
                          fromCenter = preFromCenter;

                                if( !window.touchMode)
                                {
                                    coordX=bx;
                                    coordY=by;
                                    staticX+=d_xS;
                                    staticY+=d_yS;
                                }
                        }

                               
            let expandedZoomCage=1.;
           if (uniforms.Spoker.value)expandedZoomCage*=4./3.
           if(preFromCenter>=window.zoomCageSize*expandedZoomCage){//adjust back in if too far from the center
                pushBackCounter+=60./FPS;

                coordX*=window.zoomCageSize/fromCenter*expandedZoomCage;
                coordY*=window.zoomCageSize/fromCenter*expandedZoomCage;
            }
            else pushBackCounter = 0
            if(pushBackCounter>0.){coordX=0;coordY=0;}//teleport to center if continuously flying into perimeter, set to 0 for off

                               
                               
                    if (trailDepth<trailLength)trailDepth++;

        xPerp[f] = -Math.sin(-angle+pi/2)*volume*flatline;
        yPerp[f] = -Math.cos(-angle+pi/2)*volume*flatline;
                            if(!window.flame)trailWidth[f]=0;
                            else trailWidth[f]=starshipSize;//0.;
                               trailTimeOfRecording[f]=uniforms["time"].value;
                               trailSegmentExpired[f]=false;
        if(trailDepth<trailLength||on)//||on
                               
                              {
            
        f++;//this is the primary drive chain for the trail. it should be a global
        if (f>=trailDepth)f=0;
            
         radius = interpolation*MR*4./window.pixelShaderSize;
         xAdjusted= d_x*radius;
         yAdjusted= d_y*radius;
             let decrement;
             if(!window.flame)decrement=radius*starshipSize;
             else decrement=-starshipSize/trailSecondsLong*interpolation*MR;
        if(isFinite(d_x)&&isFinite(d_y)&&on)for(let n = 0; n < trailDepth; n++) if(!trailSegmentExpired[n]&&n!=f-1){
                cx[n] += xAdjusted;
                cy[n] += yAdjusted;
                trailWidth[n] += decrement;
            
        }
            

                             cx[(trailDepth+f)%trailDepth] = 0;
                             cy[(trailDepth+f)%trailDepth] = 0;
                               trailWidth[(trailDepth+f)%trailDepth]=0.;
        }

                               }
    let camera, renderer;
let harmonicPzyghtheGeometry,harmonicPzyghtheMaterial,harmonicPzyghtheMesh;
                       //this section could use some naming clearing up

let mesh;
let feedbackStarshipmesh, feedbackStarshipmeshFlip;
let feedbackStarshipmaterialShader;

let materialShader;

                    
                    let geometryP;

                    
                    
                    
                    
                    
                    
                    
let lineMat, lineGeometry, line;
 let circleGeometry,circleMaterial,circle;
                    
                    let meshTrail, materialTrail, geomeTrail;
                    let starMesh,starGeometry,starMaterial;

                    let radialMaterial, radialLine, radialGeometry;
                    let starsANDwitnessesMesh,starsANDwitnessesGeometry;
                    let starStreamColors,starStreamPoints,starCount;
                    let starStreamMesh,starStreamMaterial,starStreamGeometry;
                           let scene, shaderScene,feedbackScene, feedbackSceneFlip;

                    

let  FEEDBACKuniforms, FEEDBACKuniformsFlip,wipeUniforms;
                             let   omniDynamicEngaged=false;
                                           window.zoom=1.;

                            let uniforms = {
         micIn:{value:null},
         pixelSTARon:{value:true},
omniDynamic:{value:null},
coreTextureSampler:{value:null},
STAR:{value: null    },
EDEN:{value: null   },
uberDuper:{value: null   },
    
eden:{value: 0},
spokesVisualizeColors: {value: false    },
note:{value: 0},
                            balloonsON:{value: 0.},
                            balloonsONexponential:{value: 0.},
sparklesON:{value: false},
SPHEREofTheLORD:{value: false},
                                
clvrVariant1:{value: false},
clvrVariant2:{value: false},
clvrVariant3:{value: false},
clvrVariant4:{value: false},
clvrVariant5:{value: false},
clvrVariant6:{value: false},
clvrVariant7:{value: false},
clvrVariant8:{value: false},
                                
Spoker:{value: true    },
spokelover:{value: false    },
continuumClover:{value: false    },
Inherited:{value: true    },
cloverSlide:{value: false    },
    
    micIn : {  value: null }, // float array (vec3)
time: {value:.0 },
rate: {value: 1.},
    
zoom: {value:  window.zoom },
colorCombo: {value: -1 },
free: {value: false },
MetaCored: {value: true },
externalCores: {value: 0. },
centralCores: {value: 0. },
outerCoresOff: {value: false},
upCoreCycler: {value: 0. },
    
morph: {value: 0.0 },
    
fourCreats: {value: 1 },
Character: {value: 0 },
articles: {value: false },
helm: {value: false },
wheel: {value: false },
Refractelate: {value: false },
petals: {value:  .0 },
    
carousel: {value: 0.0 },
metaCarousel: {value: 0. },
spirated: {value: 0. },
hearTOL: {value: false},
colorInverter: {value:false},
metronome: {value: .99 },
time2dance: {value: 0.0 },
volume: {value: 1.0 },
totalAmp: {value: 1.0 },
    
    
resolution: {value:null},//these are later resolved to the THREE.vec2() uniforms
coords: {value: [0,0]},
coordSHIFT: {value: [0,0]},
duperZoom: {value:1.},
       d: {value:null},
 dotCoord:{value:null},

     
       dynamicDance: {value: false},
       remediatedColors: {value: false },

       Clovoid:{value:false},
       dotted:{value:false},
       baseN:{value: 2.718281828},

         onehundredfortyfourthousand:{value:false},
         shaderScale:{value:window.pixelShaderSize},
       starSpin:{value:0.},
       chirality:{value:1},
       MannyONtrail:{value:1},
       NightAndDay:{value:false},
       starOnDot:{value:0},
       gameOn:{value:false},
       scoreLoaded:{value:false},
       musicAngelMan:{value:0},
       refactorCores:{value:1.},

       fieldPowerBoost:{value:false},
       fieldPowerBoostMeta:{value:false},
 flipStar:{value:1},
 twistStar:{value:0.},
       multiplicatorNexus:{value:false},//has problems may be discontinued
       squareClover:{value:false},
         mandelCloverFactor:{value:1.75},
         exponentialPetals:{value:0.}
       }

                                           var minimumDimension=Math.min(window.innerHeight,window.innerWidth);
                                           var maximumDimension=Math.max(window.innerHeight,window.innerWidth);
                                           var heightPX=window.innerHeight,widthPX=window.innerWidth;
                                           var height=heightPX/minimumDimension,width=window.innerWidth/minimumDimension;

                       let renderTarget, cloverRenderTarget;
                       let backBufferFlip=false;
                      let FeedbackrenderTarget,FeedbackrenderTargetFlipSide;
                       
                                           const trail=new Float32Array(trailLength*3*6*2);
                                           const trailColor=new Float32Array(trailLength*4*6*2);
       
                    const xenOctaveFactor = 12;
                                           const harmonicPzyghtheVertices = new Float32Array(xenOctaveFactor*12*3*6)
                                           const harmonicPzyghtheColor = new Float32Array(xenOctaveFactor*12*4*6)
                    
                                           const starsANDwitnessesPoints=new Float32Array(120*3*6);
                                           const starsANDwitnessesColors=new Float32Array(120*3*6);

                    
                    
                    const secondsToEdge=window.pixelShaderSize/4./pixelShaderToStarshipRATIO;
                  
                            let xyStarParticleArray= Array();
                                           
                                            zoomOutEngage=false;
                                            pi = Math.PI;

function setFFTdependantSizes(){
     analyser.fftSize=fftSize;
      bufferSize = fftSize;
      numberOfBins = fftSize/2.;
      frequencies= new Float64Array(numberOfBins);
     inputData = new Float32Array(bufferSize);
      dataArray = new Uint8Array( numberOfBins );

     window.zoomOutRatchetThreshold=1./bufferSize;
     
     
      star= new Float64Array(numberOfBins*3);//Elders take EldersLeg*3*2*2 and that as it stands is always less than numberOfBins
      starColors= new Float64Array(numberOfBins*4);
     
                        starArms = numberOfBins;
                      
      starCount = Math.ceil(starArms*60*secondsToEdge);
             xyStarParticleArray= Array(starCount).fill(null)
      starStreamPoints= new Float64Array(starCount*3*6);
      starStreamColors= new Float64Array(starCount*4*6);
     

                                 testar = new Float64Array((EldersLeg>0)?EldersLeg:0);
     
                                  testarContinuous =new Float64Array(starArms);
                                  mustarD =new Float64Array(starArms);
     if(window.INITIALIZED)
     {
         scene.remove(starMesh)
         starGeometry.dispose();
         starGeometry = new THREE.BufferGeometry();
         starGeometry.dynamic = true;
         starGeometry.setAttribute('position', new THREE.Float32BufferAttribute( star,3 ));
         starGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( starColors, 4 ));
         starMesh = new THREE.Mesh(starGeometry, starMaterial);
         scene.add(starMesh)
         
         //if(RockInTheWater==1||RockInTheWater==2) scene.remove(starStreamMesh);
         starStreamGeometry.dispose();
         starStreamGeometry = new THREE.BufferGeometry();
         starStreamGeometry.dynamic = true;
         starStreamGeometry.setAttribute('position', new THREE.Float32BufferAttribute( starStreamPoints,3 ));
         starStreamGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( starStreamColors, 4 ));
         starStreamMesh = new THREE.Mesh(starStreamGeometry, starStreamMaterial);
         //scene.add(starStreamMesh);

         loadAttributes();

     }
     
     
 }
                                 function          setRenderTargetSize(w,h){
    renderTarget = new THREE.WebGLRenderTarget(w,h);
     cloverRenderTarget = new THREE.WebGLRenderTarget(w,h);
    FeedbackrenderTarget = new THREE.WebGLRenderTarget(w,h);
    FeedbackrenderTargetFlipSide = new THREE.WebGLRenderTarget(w,h);
 }
                                           
                   let linePositionAttribute;
                   let lineColorAttribute;
                                           
                                           let starPositionAttribute;
                                           let starColorAttribute;
                                           
                                           let starStreamPositionAttribute;
                                           let starStreamColorAttribute;
                           let starStreamIndex=0;
                                       let harmonicPositionAttribute;
                                       let harmonicColorAttribute;
                                           
                                           let trailPositionAttribute;
                                           let trailColorAttribute;
                                           
                                       let starsANDwitnessesPositionAttribute;
                                       let starsANDwitnessesColorAttribute;
                                           function loadAttributes(){
                        
                        linePositionAttribute = lineGeometry.getAttribute( 'position' );
                        lineColorAttribute = lineGeometry.getAttribute( 'color' );
                        
                        starPositionAttribute = starGeometry.getAttribute( 'position' );
                        starColorAttribute = starGeometry.getAttribute( 'color' );
                        
                        starStreamPositionAttribute = starStreamGeometry.getAttribute( 'position' );
                        starStreamColorAttribute = starStreamGeometry.getAttribute( 'color' );
                        
                        
                        harmonicPositionAttribute = harmonicPzyghtheGeometry.getAttribute( 'position' );
                        harmonicColorAttribute = harmonicPzyghtheGeometry.getAttribute( 'color' );
                        
                        
                        trailPositionAttribute = geomeTrail.getAttribute( 'position' );
                        trailColorAttribute = geomeTrail.getAttribute( 'color' );
                        
                     starsANDwitnessesPositionAttribute = starsANDwitnessesGeometry.getAttribute( 'position' );
                     starsANDwitnessesColorAttribute = starsANDwitnessesGeometry.getAttribute( 'color' );
                    }
                                           
function init() {
             setFFTdependantSizes();
                        uniforms.coordSHIFT.value=new THREE.Vector2(0,0);
           uniforms.resolution.value = new THREE.Vector2(window.innerWidth,window.innerHeight);
     uniforms.coords.value = new THREE.Vector2(0.,0.);
     uniforms.d.value = new THREE.Vector2(0.,0.);
     uniforms.dotCoord.value = new THREE.Vector2(0.,0.);

     setRenderTargetSize(window.innerWidth,window.innerHeight)

    renderer = new THREE.WebGLRenderer();
     
    container.appendChild( renderer.domElement );//engage THREEJS visual out

    renderer.autoClear=true;//so the starship can be isolated
    renderer.setClearAlpha ( 0. )

    scene = new THREE.Scene();
     finalSceneRerenderedering= new THREE.Scene();
    feedbackScene = new THREE.Scene();
    feedbackSceneFlip= new THREE.Scene();
    shaderScene = new THREE.Scene();
    

    lineMat =
    new THREE.LineBasicMaterial( {
       //vertexColors: true,
           color: 0xffffff,
         // opacity: .5,
          linewidth: 3,//ignored by WebGLRenderer
          linecap: 'round', //ignored by WebGLRenderer
          linejoin:  'round' //ignored by WebGLRenderer
    } );

     lineGeometry=new THREE.BufferGeometry();
     lineGeometry.dynamic = true;
     lineMat.dynamic = true;
     lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute( point,3 ));
    lineGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( pointColor, 3 ));
    // line = new THREE.LineSegments(lineGeometry,lineMat);
     line = new THREE.Line(lineGeometry,lineMat);

    starMaterial= new THREE.MeshBasicMaterial({
                opacity: 1.,
              transparent: true,
                vertexColors: true,
               // side: THREE.DoubleSide
            });
    starGeometry = new THREE.BufferGeometry();
     starGeometry.dynamic = true;
    starMesh = new THREE.Mesh(starGeometry, starMaterial);
     
     starStreamGeometry = new THREE.BufferGeometry();
     starStreamMesh = new THREE.Mesh(starStreamGeometry, starMaterial);
     
     
     starsANDwitnessesGeometry = new THREE.BufferGeometry();
     
     starsANDwitnessesGeometry.dynamic = true;
     starsANDwitnessesGeometry.setAttribute('position', new THREE.Float32BufferAttribute( starsANDwitnessesPoints,3 ));
     starsANDwitnessesGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( starsANDwitnessesColors, 3 ));
     starsANDwitnessesMesh = new THREE.Mesh(starsANDwitnessesGeometry, starMaterial);
     
     
     starStreamMaterial= new THREE.MeshBasicMaterial({
                 opacity: 1.,
               transparent: true,
                 vertexColors: true,
                // side: THREE.DoubleSide
             });

    materialTrail= new THREE.MeshBasicMaterial({
                   opacity: 1.,
                 transparent: true,
                   vertexColors: true,
                  // side: THREE.DoubleSide
               });
     geomeTrail = new THREE.BufferGeometry();
     geomeTrail.dynamic = true;
     geomeTrail.setAttribute( 'position', new THREE.Float32BufferAttribute( trail, 3 ) );
      geomeTrail.setAttribute( 'color', new THREE.Float32BufferAttribute( trailColor, 4 ));
     meshTrail = new THREE.Mesh(geomeTrail, materialTrail);
     
     
     harmonicPzyghtheMaterial= new THREE.MeshBasicMaterial({
                   opacity: 1.,
                 transparent: true,
                   vertexColors: true,
                  // side: THREE.DoubleSide
               });
     harmonicPzyghtheGeometry = new THREE.BufferGeometry();
     harmonicPzyghtheGeometry.dynamic = true;
     harmonicPzyghtheGeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( harmonicPzyghtheVertices, 3 ) );
     harmonicPzyghtheGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( harmonicPzyghtheColor, 4 ));
     harmonicPzyghtheMesh= new THREE.Mesh( harmonicPzyghtheGeometry,  harmonicPzyghtheMaterial);
     
     
     circleMaterial = new THREE.MeshBasicMaterial(    { opacity: .8,
         transparent: true});
             circle = new THREE.Mesh(new THREE.CircleGeometry(dotSize,3,0.),circleMaterial);

     radialMaterial=  new THREE.MeshBasicMaterial( { color: 0x000000});
     radialGeometry=new THREE.BufferGeometry()
     radialLine = new THREE.Line(radialGeometry,radialMaterial);
     
                        loadAttributes();
                        
     scene.add(harmonicPzyghtheMesh)
     scene.add(meshTrail)
     scene.add(line);
     scene.add(starMesh);
     scene.add(starsANDwitnessesMesh)
     //scene.add(starStreamMesh)
     
    // shaderScene.add( circle );
   // shaderScene.add(radialLine);
        
     
  FEEDBACKuniforms = THREE.UniformsUtils.merge([
  THREE.UniformsLib.lights,
  {
      STAR:{value: null   },
        EDEN:{value: null  },
  eden:{value: 0    },
    loudestFret1:{value:new THREE.Vector2( 0.,0.)},
  loudestFret2:{value:new THREE.Vector2( 0.,0.)},
  loudestFret3:{value:new THREE.Vector2( 0.,0.)},
  loudestFret4:{value:new THREE.Vector2( 0.,0.)},
      
  volumeFret1:{value:0.},
  volumeFret2:{value:0.},
  volumeFret3:{value:0.},
  volumeFret4:{value:0.},
      
  resolution: {value:  new THREE.Vector2( window.innerWidth,window.innerHeight) },
  d:{value: new THREE.Vector2(0.,0.) },

  }])
    
    FEEDBACKuniformsFlip=Object.assign({},FEEDBACKuniforms);
    var characterCheck=0.;
  //if(location.hash.includes("U")) characterCheck = -1;
  // else  characterCheck= Date.now()%3;
    
  uniforms = THREE.UniformsUtils.merge([
  THREE.UniformsLib.lights,uniforms
  ]);
    window.uniformsLoaded=true;

    materialShader = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
          
      } );
     geometryP = new THREE.PlaneGeometry( 2, 2 );
      geometryP.translate(0,0,0.);
     mesh = new THREE.Mesh( geometryP, materialShader );

     shaderScene.add( mesh );


    //repeat PixelShader loader for The four Rivers

              
    feedbackStarshipmaterialShader = new THREE.ShaderMaterial( {
        uniforms: FEEDBACKuniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'FourRiversfragmentShader' ).textContent,

      } );
    feedbackStarshipmesh = new THREE.Mesh( geometryP, feedbackStarshipmaterialShader );
    feedbackScene.add(feedbackStarshipmesh);
    
     //and now for the flip frame for the feedback buffer
    feedbackStarshipmeshFlip = new THREE.Mesh( geometryP, feedbackStarshipmaterialShader );
    feedbackSceneFlip.add(feedbackStarshipmeshFlip)
    
     
     wipeUniforms=THREE.UniformsUtils.merge([
         THREE.UniformsLib.lights,
         {
         cloverSampler:{value:null},
             resolution:{value:null}
         }
         ]);
     
     wipeMaterialShader = new THREE.ShaderMaterial( {
         uniforms:wipeUniforms,
         vertexShader: document.getElementById( 'vertexShader' ).textContent,
         fragmentShader: document.getElementById( 'wipeFragmentShader' ).textContent,

       } );
     wipeStarshipMesh = new THREE.Mesh( geometryP, wipeMaterialShader );
     finalSceneRerenderedering.add(wipeStarshipMesh);
                        for(var n = 0; n<trailLength; n++)
                          {pitchCol[n]  = new THREE.Color()
                          }
     window.INITIALIZED =true;
     setFFTdependantSizes();
     setDynamicSampler2ds();
  renderer.setPixelRatio( rez);
     onWindowResize();
    animate();
     adjustThreeJSWindow();

}
                                           window.INITIALIZED=false;
function setDynamicSampler2ds(){
     let omniTexture = new THREE.DataTexture( omniData, 40, 1,THREE.RedFormat,THREE.FloatType);
     omniTexture.unpackAlignment=1
     omniTexture.needsUpdate=true;
     uniforms.omniDynamic.value=omniTexture;
     uniforms.omniDynamic.needsUpdate = true;
     
     
     let coreTexture = new THREE.DataTexture( coreData, 40, 1,THREE.RedFormat,THREE.FloatType);
     coreTexture.unpackAlignment=1
     coreTexture.needsUpdate=true;
     uniforms.coreTextureSampler.value=coreTexture;
     uniforms.coreTextureSampler.needsUpdate = true;
 }
                            function setMicInputToPIXEL(){
            let dataArrayBuffer =new Float32Array( bufferSize );
             for (var x = 0; x < bufferSize; x++) dataArrayBuffer [x]= dataArray[x]/255.;

              
             let micTexBuf = new THREE.DataTexture( dataArrayBuffer, bufferSize, 1, THREE.RedFormat,THREE.FloatType);
             micTexBuf.needsUpdate=true;

             uniforms[ "micIn" ].value = micTexBuf;
             uniforms.micIn.needsUpdate = true;

         }
         
                    let bottomOfScreenHeight = 0;
                                           let correlationForTextX = 0;
                                           let correlationForTextY = 0;

function adjustThreeJSWindow()
                    {
     
     renderer.setSize(widthPX, heightPX);

        
     uniforms.resolution.value =new THREE.Vector2(widthPX,heightPX);
     FEEDBACKuniforms.resolution.value =new THREE.Vector2(widthPX,heightPX);
                        wipeUniforms.resolution.value =new THREE.Vector2(widthPX,heightPX);
      minimumDimension = Math.min(widthPX,heightPX);
     maximumDimension = Math.max(widthPX,heightPX);
     setRenderTargetSize(widthPX,heightPX);
      height=heightPX/minimumDimension;
      width=widthPX/minimumDimension;

  camera = new THREE.OrthographicCamera( -width, width, height, -height, 1, -1);


}
window.addEventListener( 'resize', onWindowResize, false );
window.addEventListener("orientationchange", onWindowResize, false);

function onWindowResize() {
                        
                        if (!sheetTranslucent)
                        {
                            correlationForTextY=document.getElementById("osmdCanvas").offsetHeight+document.getElementById("textWindow").offsetHeight
                            bottomOfScreenHeight = correlationForTextY;
                        }
                        else{correlationForTextY=0;bottomOfScreenHeight=0}
                    if((((document.getElementById("reader").value==0&&readerSet)||(bibleWithText&&!readerSet))||mobile)&&window.BibleON==0)
                    correlationForTextX=document.getElementById("Bible").offsetWidth
                            else correlationForTextX=0.;
                            heightPX=window.innerHeight-correlationForTextY;
                            widthPX=window.innerWidth-correlationForTextX;
                        
                        if(BibleON==0)document.getElementById("Bible").height=window.innerHeight/-leaf;

            if("osmd" in window&&osmd!=null)
            {   osmd.width=widthPX;
                osmdResize();//osmdResize defined in fileSelectAndLoadOSMD.js
            }
        
           if(typeof THREE=="object") adjustThreeJSWindow();
     
     
     //menuBoxes declared in manny.html
     let numberOfColumns=Math.round(widthPX/heightPX*4.)
    for(var box=0.;box<menuBoxes.length;box++)menuBoxes[box].style.columnCount=numberOfColumns;
                        rezBox.style.columnCount=1;//this is a bit repetitious
                        scoreBox.style.columnCount=1;//this is a bit repetitious
     let numberInputElements = document.getElementsByClassName("num")
     for(var n=0; n<numberInputElements.length;n++)
         numberInputElements[n].style.width=widthPX/(numberOfColumns+1.)+"px";

  }

            let textON=false;
            let lastTime=0.;
            let ticker = 0;
            let FPS=60;

                  const interval = 250.;//sample window of FPS meter for FPS frame averaging, think 1000/FPS. 1 is more or less off. Used to keep off jitter. Think 200ms maybe
                  let elapsedTimeBetweenFrames = 0.;
                  let lastPitch = 1;

                  let lastFrameTime=0.;
                  let interpolation=0.;
                  let finalAverageAmp=1.;
                  let averageFrameTotalAmp = [];
                       
let lastVolume = 1.;
        function setZoomRate(){
        let volumeProcessed =volume/lastVolume;//should be volume not volumeBoosted
        if(!isFinite(volumeProcessed))volumeProcessed=1.;
            return Math.E**(Math.log(.5)/zoomFrames*zoomRate*interpolation*(volumeProcessed));//the square root of volume is to make it grow slower than in d_xy
        }
                       
                       
                       let cloverSuperCores = 0;
                       var singleHyperCoreDepth = 54.;//240/54=4.44444444.. I like this, also 240/48 = 5 that's okay too, since the 60th core is kindof gone to the hypercore dot
       function infinicore(){
            if(zoom<=1./2.**(singleHyperCoreDepth+3)&&fromCenter/zoom<2.){
                zoom*=2.**singleHyperCoreDepth;coordY*=2.**singleHyperCoreDepth;coordX*=2.**singleHyperCoreDepth;
                fromCenter*=2.**singleHyperCoreDepth;

                cloverSuperCores++;

            }
            
            if(zoom>1./2**3&&cloverSuperCores>0){
                zoom/=2.**singleHyperCoreDepth;coordY/=2.**singleHyperCoreDepth;coordX/=2.**singleHyperCoreDepth;
                fromCenter/=2.**singleHyperCoreDepth;
                cloverSuperCores--;
                
            }
    
            if(!isFinite(cloverSuperCores))
            {cloverSuperCores=0;
            zoom=1.;
            }
    
    
    
    
    
    if (ONbypass&&(on||zoom<1.))preserveOuterCore=true;
    else preserveOuterCore = false
    if((fromCenter>=1.||zoom>=1.)&&!zoomOutEngage&&uniforms.MetaCored.value&&!(preserveOuterCore)){coordX=(coordX/2.)%1.; coordY=(coordY/2.)%1.;zoom=(zoom/2.)%1.;
        
        if(uniforms.wheel.value)uniforms.upCoreCycler.value=(uniforms.upCoreCycler.value-1)%60;//does modulo -60%60=0?-0 it seems
        else uniforms.upCoreCycler.value = 0.;
    }
    }
                       
                       
                       
                       
let       preserveOuterCore = true;
                       
                       
                       
                      window.dupered = false;
                       let zoomCap32 =.00000075;
function zoomRoutine(){
    const metaDepth=(!dupered)?zoomCap32:zoomCap32**2;//due to pixelization limits
    let zoomCone=metaDepth*fromCenter;
    if(uniforms[ "colorCombo" ].value==16)zoomCone/=1.33333333/2.;
    
    ZR = setZoomRate();
    if (zoom>=1.)zoomOutEngage = false;
    if(!isFinite(ZR))ZR=1;
    if(!zoomOutEngage){
        if ((zoom>zoomCone && totalAMP>zoomOutRatchetThreshold&&(on&&!window.touchMode))||window.pointerZoom)zoom *=ZR;
        else if(uniforms.MetaCored.value||zoom<1.){
            zoom /= ZR;
            if(center&&zoom<1.){coordX*=ZR*2./3.;; coordY*=ZR*2./3.;}
        }
    }

    
    //.000000000000000000000001
                        if (zoom<zoomCone||(zoom<1./2**singleHyperCoreDepth*metaDepth&&cloverSuperCores<-.5)){
                            zoomOutEngage = true;}
                         if (zoomOutEngage == true) zoom *= 1.44/ZR;
                    

                          if(zoom<1./2**singleHyperCoreDepth*metaDepth)zoom = 1.;
    

}


                       

                     let thisChunk=0, lastChunk=0;
                     window.haptic = false;
                    let vibrateArray= Array();

                    function mcphrth(){
     if(window.haptic){
         let vibrateArrayNew=[];
             let vibFreq = 51.9130871975*2.**((note+24)%48./12.);//51.9130871975=440*2^(-1/12)/8
             if(on){
                 for(var t = 0; t<4; t++)
                 {
                     vibrateArrayNew.push(vibFreq*.9);
                     vibrateArrayNew.push(vibFreq*.1);
                 }
             }
             else {
                 vibrateArrayNew.push(0);
                 vibrateArrayNew.push(1);
             }
         thisChunk=0.;
         
             try{error = navigator.vibrate(vibrateArrayNew );}
             catch(e){ error+=e;}
             
             setTimeout(mcphrth,vibFreq*2.);// may work on touch instead of recursive calls which seems to bug
         }
}
//this doesn't work, and it only would work on android not on firefox

                    var volume=1;
                                 var skipNext=false;
                                 var lvs;

                                 let polygons=[];
                                 let level = 0;
                                 let metaLevel=1;
                                 let polyRad=.1;

let targets=[];
let pG=[];
let pM=[];
let lastZoom=1.;
let lastNoteTimeInScore=0;
let noteHit=false;
let timeStampLastNoteEnded=0.;
let currentMeasure=1;
let cursorMeasure=1;
let scoreColorInversion = false;
function takeNextScoreSlice(start){
     
                    osmd.setOptions({
                      drawFromMeasureNumber: start,
                      drawUpToMeasureNumber:start+3.+Math.floor(window.innerWidth/window.innerHeight*2.)//remove +3 if not renderSingleHorizontalStaffline set to true in osmd settings
                      }) // requires re-render
}
                       let timestamplast=0;
           
           
          window.date = Date.now();
          window.startTimeSecondMantissaMagnified = ((date/1000.-Math.round(date/1000.)))*144000;//for orienting the dance to time
                    
                    window.ChristoDecrypto = 0.;
                    window.timeRESET =0;
                    window.TIMESTAMP;
                    
                    /*
                    //https://www.khronos.org/webgl/wiki/HandlingContextLost
    container.addEventListener("webglcontextlost", function(event) {
            event.preventDefault();
            console.log("context lost")
            cancelAnimationFrame(animateLoopId);               }, false);

    container.addEventListener(
            "webglcontextrestored", init, false);
                
                    */

function setOSMDcolors()
                                           {
     if(osmd!=null){
         if(sheetTranslucent){
             
             
             if(scoreColorInversion)
                 osmd.setOptions({defaultColorMusic: "#000000FF"});
             else
                 osmd.setOptions({defaultColorMusic: "#FFFFFFFF"});
             
             
             osmd.EngravingRules.PageBackgroundColor =  "#00000000";
         }
         else{
             let blackWhiteHASH = ""
             if(scoreColorInversion)
             {
                 osmd.setOptions({defaultColorMusic: "#000000FF"});
                 blackWhiteHASH = "#FFFFFFFF"
             }
             else{
                 osmd.setOptions({defaultColorMusic: "#FFFFFFFF"});
                 blackWhiteHASH = "#000000FF"
             }
             osmd.EngravingRules.PageBackgroundColor = blackWhiteHASH;
         }
     }
 }
function runOSMD (){
     /*
     if (sheetTranslucent) osmd.EngravingRules.PageBackgroundColor = "#ffffff00";//translucent background
     else osmd.EngravingRules.PageBackgroundColor = "#ffffffff";
*/
     let thelastnotehit;

     //Here starts OPEN SHEET MUSIC DISPLAY score code
                       //https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/746
                       var nts = osmd.cursor.NotesUnderCursor();//the argument 0 hopefully specifies first instrument
                       let noteLength=nts[0].length.realValue
                       let noteExpired =  noteLength<(window.TIMESTAMP-timeStampLastNoteEnded)/1000./4;
                       for(var n = 0.; n< nts.length; n++){
                         let noteOfScore=(nts[n].halfTone-8)%12;
                         let  notesDifferent = (nts[n].halfTone-8 != thelastnotehit);
                     if(

                         (noteExpired|| !notesDifferent) //let you hit the next note before the last note finishes unless the notes are the same just once
                       &&  (Math.round(note)%12 ==noteOfScore && on
                           //-8 should callibrate from a halfstep count of 48 == C4 natural into concert pitch of A# == 49
                               ||osmd.cursor.NotesUnderCursor()[0].isRestFlag//exempt from having to hit the note if rest or cue
                               ||osmd.cursor.NotesUnderCursor()[0].isCueNote
                           )
                       )
                               {
                                 thelastnotehit = nts[n].halfTone-8;
                                 noteHit=true;
                                 break;
                               }


                       }



           //https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/710

           if(noteExpired&&noteHit){

               
               
               
               
             osmd.cursor.next(); // advance the cursor one note

               if(osmd.cursor.Iterator.endReached){
                 // osmd.setOptions({darkMode: scoreColorInversion}); // or false. sets defaultColorMusic and PageBackgroundColor.
                if(document.getElementById("scoreBlack").checked  == true||document.getElementById("scoreWhite").checked  == true
) scoreColorInversion= !scoreColorInversion;
                   setOSMDcolors()

             takeNextScoreSlice(1);
               
               
               osmd.cursor.hide();
               osmd.render();
               osmd.cursor.reset();
               osmd.cursor.show();
           }


         var notesUnderCursor = osmd.cursor.NotesUnderCursor();//the argument 0 hopefully specifies first instrument

               for(var n = 0.; n< notesUnderCursor.length; n++)
               {
                   let noteToHitColor = new THREE.Color();
                   noteToHitColor.setHSL((-notesUnderCursor[n].halfTone)%12/12.,1.,.5);
                   notesUnderCursor[n].noteheadColor="#"+noteToHitColor.getHexString();;
                }

                             noteHit=false;
                             timeStampLastNoteEnded=window.TIMESTAMP;

         cursorMeasure=osmd.cursor.Iterator.currentMeasureIndex+1;
         takeNextScoreSlice(cursorMeasure);
               
                   onWindowResize();//this calls window.osmd.render() by osmdResize()




           }



                             osmd.cursor.cursorOptions.color="#"+colorSoundPURE.getHexString();//this is a frame behind if it is above colorSounds definition
                             osmd.cursor.show();
         osmd.cursor.wantedZIndex="0";


    }
        //function    OSMDUPDATER(){   runOSMD();  setTimeout(OSMDUPDATER,1000/60.);}
        //OSMDUPDATER();
               function executeTouchRegime(){
                        
                        if(!zoomAtl41)
                            {
                              lastZoom = zoom;
                              zoomRoutine();
                                infinicore();

                            }
                            else lastZoom=zoom;
                                setZoomRate();
                                    const coordinator = pixelShaderSize/2./minimumDimension*movementRate;//pixelShaderSize/2 is the frame size in the shader: "p=vec2(...."

                                if(pointerZoom){
                                    ONbypass = true;

                                    const xTouch = screenPressCoordX*coordinator;
                                    const yTouch = screenPressCoordY*coordinator;
                                     const touchMovement = [-Math.abs(zoom-lastZoom)*xTouch, Math.abs(zoom-lastZoom)*yTouch];
                                    uniforms.d.value=new THREE.Vector2( -xTouch,yTouch);
                                    uniforms[ "volume" ].value=1.;
                                    var spunTouch=touchMovement;
                                          if(uniforms.carousel.value!=0.)         spunTouch=spin(touchMovement,-uniforms.carousel.value*(uniforms[ "time" ].value*uniforms[ "rate" ].value+Math.PI)%(Math.PI*2.));
                                              coordX+= spunTouch[0];
                                              coordY+= spunTouch[1];
                                    
                                                uniforms.coordSHIFT.value.x+=spunTouch[0];
                                                uniforms.coordSHIFT.value.y+=spunTouch[1];
                                                                            
                                                                        

                                                                        //else  uniforms.coordSHIFT.value=new THREE.Vector2(0,0);

                                    fromCenter = (coordX*coordX+coordY*coordY)**.5;
                                  }

                                  uniforms[ "zoom" ].value = zoom;
                                       uniforms.coords.value = new THREE.Vector2(coordX,coordY);
                                    
                        uniforms.STAR.value=null;
                        uniforms.EDEN.value=null;
                                                             
                                                                         renderer.setRenderTarget (null)
                                                                         renderer.render( shaderScene, camera );
                                                                     
                                                                   
                            if(textON)document.getElementById("textWindow").innerHTML =
                                "<div sytle='font-size: 16px;'>"+
                                
                                "cores:"+(Math.floor(uniforms["centralCores"].value)+cloverSuperCores*singleHyperCoreDepth+uniforms.upCoreCycler.value)+
                                " metaCores: "+Math.floor(uniforms["externalCores"].value)+", <p style='margin : 0px'></p>"+

                                "zoom: "+(zoom/2.**(singleHyperCoreDepth*cloverSuperCores))+"<p style='margin : 0px'></p>"+
                                "real part: "+ coordY +"<p style='margin : 0px'></p>"+
                                "imaginary part: "+ coordX+"<p style='margin : 0px'></p>"+
                                "FPS: "+Math.round(FPS)
                            +"<p></div>";
                            else document.getElementById("textWindow").innerHTML = "";



                                                                    
 }
                 let   upOrDown = 1;
                                           const coreData = new Float32Array(40).fill(1./-leaf);
                                           const omniData = new Float32Array(40).fill(0.);;
                                           let hyperCorePixel = new Uint8Array(4).fill(0.);

                                           
                                           let firstAnimation = true;
                                              let ONbypass;
                                          let lastTIMEUNIFORM = 0.;
                                          
                                          
   function animate( timestamp ) {

                                    
                                    
                                    
    ONbypass = false;
     if( window.touchMode||window.touchOnlyMode)executeTouchRegime();
                                    
     window.TIMESTAMP=timestamp;//used in hotkeys to set window.timeRESET
     if("osmd" in window&&osmd!=null)runOSMD();

    
     
     if(!sheetTranslucent&& bottomOfScreenHeight != document.getElementById("osmdCanvas").offsetHeight+document.getElementById("textWindow").offsetHeight)adjustThreeJSWindow();//readjust for verbose
    uniforms[ "time" ].value = timestamp/1000.+window.startTimeSecondMantissaMagnified;

    if(uniforms.starSpin.value!=0&&isFinite(uniforms[ "time" ].value)&&isFinite(lastTIMEUNIFORM))
    {let timeTwistIncrement=(( uniforms[ "time" ].value -lastTIMEUNIFORM)*uniforms[ "rate" ].value*-uniforms.starSpin.value*12./Math.PI)%24.;//Needs 12/PI to synchronize with carousel.
        window.twist-=timeTwistIncrement;
        for(var v = 0; v<maxTouchSoundCount;v++)initialTwist[v]-=timeTwistIncrement;
    }
                                          lastTIMEUNIFORM =uniforms[ "time" ].value;
    uniforms.twistStar.value=window.twist/24.*2.*Math.PI;

     
    if(window.ChristoDecrypto!=0) uniforms.metaCarousel.value=          1./(  window.ChristoDecrypto*uniforms.externalCores.value)*(timestamp-window.timeRESET)/10.;
         
         

    elapsedTimeBetweenFrames = (timestamp-lastTime);
                            //        if(uniforms.starSpin.value!=0)window.twist+=(elapsedTimeBetweenFrames/1000.*flip*uniforms[ "rate" ].value*uniforms.starSpin.value*4.)%24.;//Needs 12/PI to synchronize with carousel
                        if(loopsRun<3)elapsedTimeBetweenFrames = 0;

    if(elapsedTimeBetweenFrames>interval)
    {FPS=ticker/elapsedTimeBetweenFrames*1000.; ticker=0.;lastTime = timestamp;};
    ticker++;
    
    
    if(firstAnimation){lastFrameTime=timestamp;firstAnimation=false;}
    if(document.visibilityState=="hidden"||lvs=="hidden")lastFrameTime=timestamp;
    lvs=document.visibilityState
    interpolation = (timestamp-lastFrameTime)/1000.*60.;
    if (!isFinite(interpolation))interpolation = 1.;
                        if(loopsRun<3)interpolation=0.;//this is to prevent frametime leak on mobile
                        if(interpolation>60)interpolation=1.;//this is to prevent frametime leak on mobile
    if(!generated||bigCloverGapSync){interpolation=1;bigCloverGapSync=false;}
    lastFrameTime=timestamp;
    if(!window.touchMode)pointerZoom=false;
    else on=false;

if( (!window.touchMode||window.shouldShowStar)&&!window.touchOnlyMode) {

  analyser.getFloatTimeDomainData(inputData); // fill the Float32Array with data returned from getFloatTimeDomainData()
           if(window.volumeSpeed&&on)
           {
                   if(lastVolume!=0.) lastVolume=volume;
               volume = totalAMP*audioX.sampleRate/bufferSize/2.;
               if(lastVolume==0.) lastVolume=volume;

                       }
           else {volume=1.; lastVolume=1.; }
    
       move();
    
   if( !window.touchMode)
   {
       if(!zoomAtl41)zoomRoutine();
       infinicore();
   }
    spiral_compress();
    
    vectorize4();
    
    let coreShift=0;
    for(var shift = 0.;shift<4;shift++)//find maximally different loudest note
       if (Math.abs(Math.abs((note*2)%24-loudestFret[shift].note%24)-24/2.)<Math.abs(coreShift-24/2.))
        coreShift=Math.abs((note*2)%24-loudestFret[shift].note%24)/24.

           renderer.readRenderTargetPixels (cloverRenderTarget,  Math.floor(window.innerWidth/2.), Math.floor(window.innerHeight/2.),1,1,  hyperCorePixel)
           hyperCorePixel[0]/=4.;
            hyperCorePixel[1]/=4.;
    let hyperCoreOffset = Math.ceil(hyperCorePixel[0]);
    if(!isNaN(loudestFret[0].volume)&&window.dynamicCoring)
        coreData[hyperCoreOffset]=Math.abs(coreShift)+coringValue;//24*1.3247;
    else for(var h = 0; h<coreShift.length; h++)  coreData[h]=1./-leaf;
    
    if(!isNaN(loudestFret[0].volume)&&omniDynamicEngaged)
        omniData[hyperCoreOffset]=coreShift/2.;

       setDynamicSampler2ds();
    
   if(spirographMODE!=0)makeSpirograph();


    if (computeFPS)
    {
        averageFrameTotalAmp.push(totalAMP);
        if (averageFrameTotalAmp.length>framesLong)computeFPS=false;
        if(computeFPS==false){
             finalAverageAmp = 0.;
          for(var l=0.; l<averageFrameTotalAmp.length;l++)finalAverageAmp+=averageFrameTotalAmp[l];
              finalAverageAmp/=framesLong;
            zoomOutRatchetThreshold= finalAverageAmp;
            averageFrameTotalAmp=[];
        }
    }
    if(Math.round(note) ==-854)note="undefined";
    const noteNameNumber=Math.floor(Math.round(note))%12;
    var hour =Math.floor(Math.floor(note))%12;
    if (hour==0)hour = 12;
    const minute =(note-Math.floor(note))*60;
    const second =(minute-Math.floor(minute))*60
    const timeOfTheSound  =  Math.floor(hour)+":"+Math.floor(minute)+":"+Math.floor(second);
    const notes = ["G#","A","A#","B", "C","C#","D","D#","E","F","F#","G"];



     const noteName = notes[noteNameNumber];
     const cents = Math.round((note-Math.round(note))*100);
     const fr = Math.round(pitch);
    
     const n_n = Math.round(note);
     const cores = Math.floor(uniforms["centralCores"].value)+cloverSuperCores*singleHyperCoreDepth+uniforms.upCoreCycler.value;

      if(textON)
      {document.getElementById("textWindow").innerHTML =
          "<div sytle='font-size: 16px;'>"+
          "<p style='margin : 0px'></p>"+
          " note: "+noteName+", cents: "+cents+", freq: "+fr+"<p style='margin : 0px'></p>"+
          "note number: "+n_n+", time: "+timeOfTheSound+"<p style='margin : 0px'></p>"+
          "cores: "+cores+", metaCores:"+ uniforms.externalCores.value + "<p style='margin : 0px'></p>"+
          "zoom: "+zoom/2.**(singleHyperCoreDepth*cloverSuperCores)+"<p style='margin : 0px'></p>"+                // style='margin : 0px'
          "InOutThresh:"+zoomOutRatchetThreshold+"<p style='margin : 0px'></p>"+
          "amplitude : "+totalAMP+"<p style='margin : 0px'></p>"+
          "above threshold: "+aboveThreshold+", FPS: "+Math.round(FPS)+"<p style='margin : 0px'></p>"
          //+"<p style='margin : 0px'></p>"+"X: "+String(-coordX)+" Y: "+String(-coordY);
          +"<p></div>";
      }
      else document.getElementById("textWindow").innerHTML = "";

    
        uniforms[ "time2dance" ].value += audioX.sampleRate/bufferSize*totalAMP;
        uniforms["volume" ].value = audioX.sampleRate/bufferSize*totalAMP/(1.+zoomOutRatchetThreshold);
        uniforms[ "zoom" ].value = zoom;
    
    
    
    uniforms.coordSHIFT.value.x+=d_x;
    uniforms.coordSHIFT.value.y+=d_y;
    
    
   if( !window.touchMode) uniforms.coords.value = new THREE.Vector2( coordX,coordY);
   if (EldersLeg>=0){


    let metroPhase =-Math.sin(-uniforms[ "time" ].value*uniforms[ "metronome" ].value*pi)
       let frameCount=loopsRun%2;

    if(spirographMODE==2){
    lineMat.color = colorSoundPURE;
  }
       else if (uniforms[ "metronome" ].value>1)lineMat.color  = new THREE.Color("").setRGB(metroPhase,metroPhase,metroPhase)
    else if(spirographMODE==1) lineMat.color = new THREE.Color("").setRGB(frameCount,frameCount,frameCount);
    
       
  const d = -1.;
                            
                            let tx = spirray0[0], ty = spirray1[1],greyness=1.,greynessLast=-1;
                            
  var lineStride=0;
   
        //scene.add(line)
     if(spirographMODE!=0)   for (let r= 0.; r < bufferPortion; r +=1) {//spirray size supports upto r <buffersize*2
            const  txlast=tx;
            const  tylast=ty;
            tx = spirray0[r];
            ty =  spirray1[r];
           //  greynessLast = greyness
          //  if(uniforms[ "metronome" ].value>1.)greyness=.5-.5*Math.sqrt(tx*tx+ty*ty)**-leaf*metroPhase;//seems wrong
            //else
           // if(r%3==0)greyness=-1;
            // greyness=r/bufferPortion;
            // pointColor.push( greynessLast, greynessLast, greynessLast,greyness, greyness, greyness );
            if(isFinite(tx)&&isFinite(ty)&&isFinite(txlast)&isFinite(tylast))
            {
                linePositionAttribute.setXYZ(lineStride,txlast,tylast, d)
              linePositionAttribute.setXYZ(lineStride+1,tx, ty, d)
                
             //  lineColorAttribute.setXYZ(lineStride,greyness, greyness, greyness);
              //  lineColorAttribute.setXYZ(lineStride+1,greyness, greyness, greyness );
                
               // lineStride+=2;
                lineStride+=2;

                ;} }
       else  for (let r= 0.; r < bufferPortion*2; r +=1) linePositionAttribute.setXYZ(r,0,0,0)

    
    linePositionAttribute.needsUpdate = true;
    lineColorAttribute.needsUpdate = true;


  if (window.micOn)analyser.getByteFrequencyData(  dataArray);
setMicInputToPIXEL();
       
   var maxTestar=0.0000001;
   var minTestar=100000000000000;


                            const maxToMin = Math.max(height,width)/Math.min(height,width);
    

    
    
    let starStride = 0;
    if(onO){
        for (var g=0; g<starArms; g++) {
            if(isFinite(testarContinuous[g])){
                if(testarContinuous[g]>maxTestar) maxTestar=testarContinuous[g];
                if(testarContinuous[g]<minTestar) minTestar=testarContinuous[g];
            }
        }
        
        const fill =1000./(timestamp - timestamplast)*secondsToEdge;//This should be set to either sampleRate/fftSize or by predicted FPS
        timestamplast = timestamp;
        const waterRadiusScalar = 7./8.;

        
        
        
        
        
        for (var g=0; g<starArms; g++)
            
        {
            
            if(isFinite(testarContinuous[g])&&testarContinuous[g]!=0.&&isFinite(mustarD[g])&&mustarD[g]!=0.){
                
                let arm =((mustarD[g]+twist+12)*radialWarp)%24/24*pi*2.;
                const lengtOriginal=(testarContinuous[g]-minTestar)/(maxTestar-minTestar);//twice applied
                var widt = (1.-lengtOriginal)*starshipSize;
                if (widt==0)widt=starshipSize;
                //var widt =starshipSize;
                const vop = new THREE.Color();
                vop.setHSL((-mustarD[g]+8)%24/24., mustarD[g]/lightingScaleStar,mustarD[g]/lightingScaleStar);//297 is around the highest heard note
                
                const rpio2 =arm+pi/2.;
                if(RockInTheWater==0||RockInTheWater==1)
                {
                    
                    const x = widt*-Math.sin(rpio2);
                    const y = widt*-Math.cos(rpio2);
                    const xr = lengtOriginal*-Math.sin(arm);
                    const yr = lengtOriginal*-Math.cos(arm);
                    const depth = -1.+lengtOriginal/maxToMin*waterRadiusScalar*starShipDepthInSet;//shortest bar on top
                    
                    
                    if (RockInTheWater==1)
                    {    let greyTone=(mustarD[g]+72)/lightingScaleStar;//may not be an exact value
                        let maxVop = Math.max(vop.r,Math.max(vop.g,vop.b))*2.
                        let vopr=vop.r/maxVop;
                        let vopg=vop.g/maxVop;
                        let vopb=vop.b/maxVop;
                        //for(var yy=0;yy<3;yy++)
                        starColorAttribute.setXYZW(starStride+0,vopr, vopg, vopb,1.)
                        starColorAttribute.setXYZW(starStride+1,greyTone,greyTone,greyTone,1.)
                        starColorAttribute.setXYZW(starStride+2,vopr, vopg, vopb,1.)
                    }
                    else{
                        starColorAttribute.setXYZW(starStride,vop.r,vop.g,vop.b,1.)
                        starColorAttribute.setXYZW(starStride+1,vop.r,vop.g,vop.b,.0)
                        starColorAttribute.setXYZW(starStride+2,vop.r,vop.g,vop.b,1.)
                    }
                    starPositionAttribute.setXYZ(starStride,(xr-x), (yr-y),  depth)
                    starPositionAttribute.setXYZ(starStride+1, 0., 0.,  0.)
                    starPositionAttribute.setXYZ(starStride+2,(xr+x), (yr+y),  depth)
                }
                /* rectangular star    star.push(
                 
                 -x,    -y,  depth,
                 x,    y,  depth,
                 (xr+x), (yr+y),  depth,
                 -x, -y,  depth,
                 (xr+x), (yr+y),  depth,
                 (xr-x), (yr-y),  depth,
                 ) ;
                 */
                if(RockInTheWater==1||RockInTheWater==2)
                {
                    if(RockInTheWater==2){
                        
                        starPositionAttribute.setXYZ(starStride,0,0,0)
                        starPositionAttribute.setXYZ(starStride+1, 0., 0.,  0.)
                        starPositionAttribute.setXYZ(starStride+2,0,0,0)
                    }
                    var wideness =(testarContinuous[g]/255*totalAMP**.5-zoomOutRatchetThreshold)*starshipSize;//totalAMP is signal average, it may or may not be an equivalent to fft bin amp/255, but it works to prevent jamming at high volumes
                    if(wideness<=0)wideness=1./255.*starshipSize;
                    var xyStarParticle={};
                    xyStarParticle.x=wideness*-Math.sin(rpio2);//this is the
                    xyStarParticle.xr=-Math.sin(arm)/fill;//this is the outwards length of each pulse
                    xyStarParticle.y=wideness*-Math.cos(rpio2);
                    xyStarParticle.yr=-Math.cos(arm)/fill;
                    xyStarParticle.vop=vop;
                    xyStarParticle.widt=wideness;
                    xyStarParticle.lengt=1./fill
                    xyStarParticle.time = uniforms[ "time" ].value;
                    xyStarParticle.interpolation = interpolation;
                    xyStarParticle.interpolationFramesScaled = interpolation/60./4.;
                    xyStarParticle.amp=testarContinuous[g]/255.;
                    xyStarParticle.staticX=staticX;
                    xyStarParticle.staticY=staticY;
                    
                    starStreamIndex=(starStreamIndex+1)%starCount;
                    xyStarParticleArray[starStreamIndex]=xyStarParticle;
                }
                starStride+=3;

            }
            else{
                starColorAttribute.setXYZW(starStride,0,0,0,0)
                starColorAttribute.setXYZW(starStride+1,0,0,0,0)
                starColorAttribute.setXYZW(starStride+2,0,0,0,0)
            
            starPositionAttribute.setXYZ(starStride,0,0,0)
            starPositionAttribute.setXYZ(starStride+1,0,0,0)
            starPositionAttribute.setXYZ(starStride+2,0,0,0)
                starStride+=3;

        }
        }
        
        
        

        
        
        
        if ((RockInTheWater==1||RockInTheWater==2))
        {
            
            scene.add(starStreamMesh)
            
            
            let loopsToCull = starCount;
            let loopOfCulling =starStreamIndex;
            let shellBoost = 1.5;
            
           if(xyStarParticleArray[loopOfCulling]!=null) while(xyStarParticleArray[(loopOfCulling-1+starCount)%starCount]!=null&&uniforms[ "time" ].value-xyStarParticleArray[loopOfCulling].time>maxToMin*secondsToEdge*shellBoost&&loopsToCull>0)
            {
               // xyStarParticleArray.shift();
                xyStarParticleArray[loopOfCulling]=null;

                    for(var e = 0; e<3; e++){
                        starStreamPositionAttribute.setXYZ(loopOfCulling*3+e,0,0,0)
                        starStreamColorAttribute.setXYZW(loopOfCulling*3+e,0,0,0,0)
                    }
                loopOfCulling=(loopOfCulling-1+starCount)%starCount;

                loopsToCull--;

            }
            
            let OUTERSHELL =maxToMin* secondsToEdge;
            let m = xyStarParticleArray[starStreamIndex];
            if(m!=null)
            {
                let lastLoopTime=m.time;
                let timeShift = 0.;
                let w = timeShift/m.lengt/secondsToEdge;
                let withinRadialDelimiter = timeShift +m.lengt<OUTERSHELL;
                let depthINNER = -starShipDepthInSet+timeShift/OUTERSHELL*starShipDepthInSet;
                let depthOUTER = depthINNER+m.lengt;
                let starStreamStride = 0;
                
                let starMoment=starStreamIndex;
                while(xyStarParticleArray[starMoment]!=null)
                {
                    m = xyStarParticleArray[starMoment];
                    if (lastLoopTime!=m.time) {
                        timeShift = uniforms["time"].value-m.time;
                        w = timeShift/m.lengt/secondsToEdge;
                        withinRadialDelimiter = timeShift +m.lengt<OUTERSHELL*shellBoost;// OUTERSHELL times 1.1 to prevent remnant pieces around edge
                        depthINNER = -starShipDepthInSet+timeShift/OUTERSHELL*(1.-starShipDepthInSet);
                        depthOUTER = depthINNER+m.lengt;
                        
                        lastLoopTime=m.time;
                    }
                    
                    
                    
                    if( withinRadialDelimiter)
                    {
                        let bulletY=0;
                        let bulletX=0;
                        if(window.BulletMine!=0)
                        {
                            let blt= m.interpolationFramesScaled*BulletMine;
                            bulletY = (m.staticY-staticY)*blt;
                            bulletX = (m.staticX-staticX)*blt;
                        }
                        const outSetX = w*m.xr-bulletX;//apparently something is flipped
                        const outSetY = w*m.yr-bulletY;
                        let alph = timeShift*starShipDepthInSet;
                        for(var yy=0;yy<6;yy++) starStreamColorAttribute.setXYZW(starStreamStride+yy, m.vop.r, m.vop.g, m.vop.b,alph)//alpha is beta
                            
                            const nx =-m.x+outSetX
                            const ny =-m.y+outSetY
                            const xShift=m.x+outSetX;
                        const yShift=m.y+outSetY;
                        const xrShifted = m.xr+xShift;
                        const yrShifted = m.yr+yShift;
                        
                        starStreamPositionAttribute.setXYZ( starStreamStride, nx,    ny,  depthINNER)
                        starStreamPositionAttribute.setXYZ(starStreamStride+1,xShift,    yShift,  depthINNER)
                        starStreamPositionAttribute.setXYZ(starStreamStride+2,xrShifted, yrShifted,  depthOUTER)
                        starStreamPositionAttribute.setXYZ(starStreamStride+3,nx, ny,  depthINNER)
                        starStreamPositionAttribute.setXYZ(starStreamStride+4,xrShifted, yrShifted,  depthOUTER)
                        starStreamPositionAttribute.setXYZ(starStreamStride+5,m.xr+nx, m.yr+ny,  depthOUTER)
                        
                    }
                    else break ;
                    
                    starStreamStride+=6;
                    starMoment = (starMoment-1+starCount)%starCount;
                    
                }
            }
            
    starStreamPositionAttribute.needsUpdate = true;
    starStreamColorAttribute.needsUpdate = true;
        }
                
        
         }
             


else{//start drawing of just twenty four frets here
    for (var g=0; g<starArms*3; g++) {//wipe out the after image of the 1024 frets
        starColorAttribute.setXYZW(g,0,0,0,0.)
        starPositionAttribute.setXYZ(g,0,0,0)
    }


                             for (var g=0; g<EldersLeg; g++) {
                                 if(testar[g]>maxTestar){maxTestar=testar[g];}
                                 if(testar[g]<minTestar)minTestar=testar[g];
                             }
    let twoOr1= EldersLeg<=2
    if(twoOr1){maxTestar=1;minTestar=0;}
    let oddSkew =EldersLeg%2/2;
    let bottomNote = Math.round(-twist+24)%24;
    
let fretMultiplied = oddSkew+EldersLeg/((radialWarp<1)?radialWarp:1);
            for (var g=oddSkew; g<fretMultiplied; g++) {
                let incrementation = (EldersLeg%2==0)?g%2:(g+1)%2;
                //incrementation/=2.;
               incrementation++;
                let widt = starshipSize/(EldersLeg/24.)**.5/incrementation/2.;
                if (g==bottomNote&&EldersLeg==24)widt*=2.;
                let arm =flip*(g*radialWarp+twist*EldersLeg/24.)%EldersLeg/EldersLeg*pi*2.;
                let lengt = (testar[(g+EldersLeg/2.)%EldersLeg]-minTestar)/(maxTestar-minTestar);
                if(twoOr1) {
                    lengt/=2.**14./EldersLeg;
                    lengt=lengt**.25;
                    
                }
                                      const vop = new THREE.Color();
                      vop.setHSL(((20/24.*EldersLeg-g-oddSkew))%EldersLeg/EldersLeg,lengt,starMajorMinor);
                                  
                    starColorAttribute.setXYZW(starStride,vop.r,vop.g,vop.b,1.)
                    starColorAttribute.setXYZW(starStride+1,vop.r,vop.g,vop.b,1.)
                    starColorAttribute.setXYZW(starStride+2,vop.r,vop.g,vop.b,1.)
                    starColorAttribute.setXYZW(starStride+3,vop.r,vop.g,vop.b,1.)
                    starColorAttribute.setXYZW(starStride+4,vop.r,vop.g,vop.b,1.)
                    starColorAttribute.setXYZW(starStride+5,vop.r,vop.g,vop.b,1.)
                                  
                
                                  //inner Star inspired by https://www.youtube.com/watch?v=_MTbjHKtobY Neffex song
const rpio2 =arm+pi/2.;
   let centerDisplacement = 3./7.;
let xBoost = -Math.sin(arm)*centerDisplacement;
let yBoost = -Math.cos(arm)*centerDisplacement;
                
let x = widt*-Math.sin(rpio2);
let y = widt*-Math.cos(rpio2);
let xr = lengt*-Math.sin(arm);
let yr = lengt*-Math.cos(arm);
let depth = -starShipDepthInSet+lengt*(1.-starShipDepthInSet);

                
                
                starPositionAttribute.setXYZ(starStride,-x+xBoost,    -y+yBoost,  depth)
                starPositionAttribute.setXYZ(starStride+1,x+xBoost,    y+yBoost,  depth)
                starPositionAttribute.setXYZ(starStride+2,(xr+x), (yr+y),  depth)
                
                starPositionAttribute.setXYZ(starStride+3,-x+xBoost, -y+yBoost,  depth)
                starPositionAttribute.setXYZ(starStride+4,(xr+x), (yr+y),  depth)
                starPositionAttribute.setXYZ(starStride+5,(xr-x), (yr-y),  depth)
                
                
                                  
                starStride+=6;
                                 
                                x *=-centerDisplacement;
                                y *=-centerDisplacement;
                                   
                                   xr = -(lengt-1.)*-Math.sin(arm)*centerDisplacement;
                                   yr = -(lengt-1.)*-Math.cos(arm)*centerDisplacement;
                                  
                                  starPositionAttribute.setXYZ(starStride,-x+xBoost,    -y+yBoost,  depth)
                                  starPositionAttribute.setXYZ(starStride+1,x+xBoost,    y+yBoost,  depth)
                                  starPositionAttribute.setXYZ(starStride+2,(xr+x), (yr+y),  depth)
                                  
                                  starPositionAttribute.setXYZ(starStride+3,-x+xBoost, -y+yBoost,  depth)
                                  starPositionAttribute.setXYZ(starStride+4,(xr+x), (yr+y),  depth)
                                  starPositionAttribute.setXYZ(starStride+5,(xr-x), (yr-y),  depth)
                                  
                                  
                                  
                    starColorAttribute.setXYZW(starStride,vop.r,vop.g,vop.b,1.)
                    starColorAttribute.setXYZW(starStride+1,vop.r,vop.g,vop.b,1.)
                    starColorAttribute.setXYZW(starStride+2,vop.r,vop.g,vop.b,1.)
                    starColorAttribute.setXYZW(starStride+3,vop.r,vop.g,vop.b,1.)
                    starColorAttribute.setXYZW(starStride+4,vop.r,vop.g,vop.b,1.)
                    starColorAttribute.setXYZW(starStride+5,vop.r,vop.g,vop.b,1.)
                                           
                                               starStride+=6;
                                  
                                  
                                  
}
    
}
      
      starPositionAttribute.needsUpdate = true; // required after the first render
      starColorAttribute.needsUpdate = true; // required after the first render
    
         if(window.octaveStars)
         {
             
var fingerStride = 0;
             fiveAndSeven();

         let maxFinger = 0;
         let minFinger = 100000000;
         for (var t=0; t<12; t++) {
             for (var g=0; g<10; g++) {
                 if(isFinite(twelve[t][g])){
                     if (twelve[t][g]>maxFinger)maxFinger = twelve[t][g];
                     if (twelve[t][g]<minFinger)minFinger = twelve[t][g];
                 }

             }}
    
         for (var t=0; t<12; t++) {
             
             var vop = new THREE.Color();
             let BlackOrWhite=1;
             const noteGrey = Math.abs(t-(6-twist/2.)+12)%12;
             if (t==7||t==5||t==2||t==0||t==10)
             {
                 BlackOrWhite=-1.;
             }
         if  ((noteGrey<.5 || noteGrey>11.5)&&uniforms.Character.value!=2&&BlackOrWhite!=-1.)BlackOrWhite=.5;

            if( ((uniforms.Character.value==0&&(noteGrey<6.5&&noteGrey>5.5))) &&uniforms.colorCombo.value!=20&&!blankBackground&&starClover) BlackOrWhite=.5;
            else if(uniforms.colorCombo.value==20){
                     if(uniforms.musicAngelMan.value>0&&(uniforms.Character.value==4||uniforms.Character.value==3)
                        &&((uniforms.Character.value==3&&(t<.5||t>11.5))||(t<2.5&&t>1.5)||(t<10.5&&t>9.5)||(t<7.5&&t>6.5)||(t>4.5&&t<5.5))) BlackOrWhite =.5;
                     else if(uniforms.musicAngelMan.value==0&&uniforms.Character.value==3&&(t<.5||t>11.5))BlackOrWhite =.5;
                     else if (uniforms.musicAngelMan.value==0&&uniforms.Character.value==4&&(t<6.5&&t>5.5));
                     else if(((t<7.5&&t>6.5)||(t>4.5&&t<5.5))) BlackOrWhite =.5;

                 }
             vop.setRGB(BlackOrWhite,BlackOrWhite,BlackOrWhite);
             

             for (var g=0; g<10; g++) {
                 const widt = pi/120.;
                 const finger = (isFinite(twelve[t][g]))?twelve[t][g]:0;
                 let arm =(g+9)/10.*pi*2.;

                 const lengt =(isFinite(maxFinger)&&maxFinger!=0)? (finger)/maxFinger*(1.-pi/12.) : 0;


                     for(var yy=0;yy<6;yy++)   starsANDwitnessesColorAttribute.setXYZ(fingerStride+yy,vop.r,vop.g,vop.b)
                    
                     const rpio2 =arm+pi/2.;
                     const fingerTwist=(flip*(t-6)+twist/2.*flip+12)/12.*2.*pi;
                                        const x = widt*-Math.sin(rpio2+fingerTwist+pi);
                                        const y = widt*-Math.cos(rpio2+fingerTwist+pi);
                                        const xr = pi/12.*lengt*-Math.sin(arm+fingerTwist+pi);
                                        const yr = pi/12.*lengt*-Math.cos(arm+fingerTwist+pi);
                                        const offsetX=-Math.sin(fingerTwist)/1.5;
                                        const offsetY=-Math.cos(fingerTwist)/1.5;
                                        const depth = -1.;//this depth should mean that half the trail is above and half below

                      starsANDwitnessesPositionAttribute.setXYZ(fingerStride,  -x+offsetX,    -y+offsetY,  depth)
                        starsANDwitnessesPositionAttribute.setXYZ(fingerStride+1,   x+offsetX,    y+offsetY,  depth)
                          starsANDwitnessesPositionAttribute.setXYZ(fingerStride+2, (xr+x)+offsetX, (yr+y)+offsetY,  depth)
                            starsANDwitnessesPositionAttribute.setXYZ(fingerStride+3, -x+offsetX, -y+offsetY,  depth)
                      starsANDwitnessesPositionAttribute.setXYZ(fingerStride+4,  (xr+x)+offsetX, (yr+y)+offsetY,  depth)
                    starsANDwitnessesPositionAttribute.setXYZ(fingerStride+5,   (xr-x)+offsetX, (yr-y)+offsetY,  depth)

                   fingerStride +=6;
                 }
             
         }
                                        
                                  }
                                        else     for(var t=0; t<12*10*3*2;t++)
                                        {starsANDwitnessesPositionAttribute.setXYZ(t,0,0,0)
                     }
                                                              
          starsANDwitnessesPositionAttribute.needsUpdate = true; // required after the first render
          starsANDwitnessesColorAttribute.needsUpdate = true; // required after the first render
                                                              
                                                              
                                                              
                       

                                        
                                        
                                        let hpStride = 0;
                                        
                                             if(window.pzyghthe!=0)
                                             {
                                                 
                         if(window.pzyghthe>=3&&pitch-lastPitch!=0) upOrDown =  Math.sign(pitch-lastPitch);

                                             for (var t=0; t<xenOctaveFactor; t++) {
                                                 for (var g=0; g<12; g++) {
                                                     const widt = 1./3.;
                                                     //const lengt =starshipSize/(t+(g+1.)/12)**.5/7.;


                                                         var vop = new THREE.Color();
                                                     vop.setHSL((-note-g+5)%12/12.
                                                                ,1.,.5);

                                                      //   for(var yy=0;yy<6;yy++)   harmonicColorAttribute.setXYZW(hpStride+yy,vop.r,vop.g,vop.b,1.)
                                                                                   harmonicColorAttribute.setXYZW(hpStride+0,vop.r,vop.g,vop.b,0.333)
                                                                                   harmonicColorAttribute.setXYZW(hpStride+1,vop.r,vop.g,vop.b,0.333)
                                                                                   harmonicColorAttribute.setXYZW(hpStride+2,vop.r,vop.g,vop.b,1.)
                                                                                   harmonicColorAttribute.setXYZW(hpStride+3,vop.r,vop.g,vop.b,0.333)
                                                                                   harmonicColorAttribute.setXYZW(hpStride+4,vop.r,vop.g,vop.b,1.)
                                                                                   harmonicColorAttribute.setXYZW(hpStride+5,vop.r,vop.g,vop.b,1.)
                                                     let wisdom;
                                                     if (window.pzyghthe==1) wisdom=1;
                                                     else if (window.pzyghthe==2) wisdom=-1;
                                                     else if (window.pzyghthe==3) wisdom= upOrDown;
                                                     else if (window.pzyghthe==4) wisdom= -upOrDown;
                                                          let   radialHarmonicInterval =wisdom*
                                                     2.*Math.PI*2**(xenOctaveFactor-( t+(g-1.)/12.))/2**xenOctaveFactor;
                                                                                     const lengt = radialHarmonicInterval/144.;
                                                                                    radialHarmonicInterval+=angle;
                                                     const xr = widt*-Math.sin(-radialHarmonicInterval);
                                                     const yr = widt*-Math.cos(-radialHarmonicInterval);
                                                     const x = lengt*-Math.cos(radialHarmonicInterval);
                                                     const y = lengt*-Math.sin(radialHarmonicInterval);
                                                     const depth = -1;

                                                     let hollowCenterSize = 2.;
                                                     if(g==1)hollowCenterSize = 1.75;

                                                     const outSetX = xr*hollowCenterSize;
                                                     const outSetY = yr*hollowCenterSize;

                                                     const nx =-x+outSetX
                                                     const ny =-y+outSetY
                                                     const xShift=x+outSetX;
                                                     const yShift=y+outSetY;
                                                     const xrShifted = xr+xShift;
                                                     const yrShifted = yr+yShift;
                                                     
                                                     harmonicPositionAttribute.setXYZ( hpStride, nx,    ny,  depth)
                                                     harmonicPositionAttribute.setXYZ(hpStride+1,xShift,    yShift,  depth)
                                                     harmonicPositionAttribute.setXYZ(hpStride+2,xrShifted, yrShifted,  depth)
                                                     harmonicPositionAttribute.setXYZ(hpStride+3,nx, ny,  depth)
                                                     harmonicPositionAttribute.setXYZ(hpStride+4,xrShifted, yrShifted,  depth)
                                                     harmonicPositionAttribute.setXYZ(hpStride+5,xr+nx, yr+ny,  depth)
                                                     
                                                     hpStride+=6;
                                                     }
                                                 
                                             }
                                                                      }
                                                                                                  
                                              harmonicPositionAttribute.needsUpdate = true; // required after the first render
                                              harmonicColorAttribute.needsUpdate = true; // required after the first render
                                                            
                                        
                                        
                                        
                                        
                                        
                                        
                                                              
      //https://www.youtube.com/watch?v=4SH_-YhN15A&list=WL&index=10&t=2328s  wouldn't this be cool  with the equalizer starship, description of process at beginning of video (now implemented with feedback buffer
              
                             //      starGeometry = new THREE.BufferGeometry();

          //    starGeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( star, 3 ).onUpload( disposeArray ) );
          //  starGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( starColors, 4 ).onUpload( disposeArray ));
                 // starGeometry.computeBoundingBox();
                                  
                                 // starMesh.geometry.dispose();
                                  //starMesh.geometry=starGeometry;
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         

var loopLimit = (trailDepth<=trailLength)?trailDepth:trailLength;
let r = (f+loopLimit-1)%loopLimit;
let s = f;
                                                                                     
//if(isFinite(cx[r-1])&&isFinite(cx[s])&&isFinite(cy[r-1])&&isFinite(cy[s]))
                 const scalar = 1.;

                                                                                     
                 let red1=0, green1=0, blue1=0 ,
                 red2=0 , green2=0 , blue2=0;
                                             let r1=BlackOrWhiteNOTE, g1=BlackOrWhiteNOTE, b1=BlackOrWhiteNOTE,
                                             r2=BlackOrWhiteNOTE, g2=BlackOrWhiteNOTE, b2=BlackOrWhiteNOTE;
                                             
                               var  widts =0.;

                          var   widtr = 0;
                                             
                                             var widtXperpS=0;
                                             var widtYperpS=0;
                                             var widtXperpR=0;
                                             var widtYperpR=0;
                                             
                                                 
                                             var xrFinalNegatived =0;
                                             var xrFinalPositived =0;
                                             var xsFinalNegatived =0;
                                             var xsFinalPositived =0;
                                                 
                                             var yrFinalNegatived =0;
                                             var yrFinalPositived =0;
                                             var ysFinalNegatived =0;
                                             var ysFinalPositived =0;

                 if(loopLimit>1)
                 {
                      red1  = pitchCol[r].r;
                      green1  = pitchCol[r].g;
                      blue1 = pitchCol[r].b;
                     
                      red2  = pitchCol[s].r;
                      green2  = pitchCol[s].d;
                      blue2  = pitchCol[s].b;
                 
     widts = trailWidth[s];

 widtr = trailWidth[r];
                  widtXperpS=widts*xPerp[s];
                  widtYperpS=widts*yPerp[s];
                  widtXperpR=widtr*xPerp[r];
                  widtYperpR=widtr*yPerp[r];
                 
                     
                  xrFinalNegatived = cx[r]-widtXperpR;
                  xrFinalPositived = cx[r]+widtXperpR;
                  xsFinalNegatived = cx[s]-widtXperpS;
                  xsFinalPositived = cx[s]+widtXperpS;
                     
                  yrFinalNegatived = cy[r]-widtYperpR;
                  yrFinalPositived = cy[r]+widtYperpR;
                  ysFinalNegatived = cy[s]-widtYperpS;
                  ysFinalPositived = cy[s]+widtYperpS;

                 }
                 
                         const LogTwoPowerOfTwelfth=Math.log(2.**(1./12.))

                             let     timeElapsedSinceRecording=     uniforms["time"].value-trailTimeOfRecording[r];
                                  let transparencyOfTrail = 1., z = -1;
     let strideTrail = 0;
                                                                                  
          while(loopLimit>0&&r!=f){
                 if(!trailSegmentExpired[r]&&timeElapsedSinceRecording<=trailSecondsLong){
                        // timeElapsedSinceRecording=  uniforms["time"].value-trailTimeOfRecording[r];
                            const zlast = z;
                     let seg = timeElapsedSinceRecording/trailSecondsLong;
                     if(window.flame)seg*=seg;
                            z = -1.+seg*.5;
                        //   if (z>=-.153)z=.153*(-1.+timeElapsedSinceRecording/trailSecondsLong);
                            const transparencyOfTrailLast =transparencyOfTrail;
                            transparencyOfTrail =1.-seg;
                     
                     let stylus=.5;
                 
                     let timeElapsedEXPONENTIAL = Math.log(24.-timeElapsedSinceRecording*12.)/LogTwoPowerOfTwelfth;
                     let timeElapsedScaled=timeElapsedSinceRecording;

                     if (timeElapsedEXPONENTIAL<Math.log(23.)/LogTwoPowerOfTwelfth)
                     {timeElapsedEXPONENTIAL *= 2.;
                         timeElapsedScaled*=2.;
                     }
                    let  timeMinusX = timeElapsedScaled-1.;
                     if(timeMinusX<0.&&timeElapsedEXPONENTIAL%1.<Math.sign(timeMinusX)*timeMinusX%1.&&Oreo)stylus=BlackOrWhiteNOTE;

                      red2  = red1;
                      green2  = green1;
                      blue2  = blue1;

                      red1  = pitchCol[r].r;
                      green1  = pitchCol[r].g;
                      blue1  = pitchCol[r].b;
                     
                      r2 = r1;
                      g2 = g1;
                      b2 = b1;
                     if(stylus!=0.5){
                         r1=stylus;
                         g1=stylus;
                         b1=stylus;
                         
                         
                     }
                     else{
                         r1 = red1;
                         g1 = green1;
                         b1 = blue1;
                     }
                     trailColorAttribute.setXYZW(strideTrail, r1,g1,b1,transparencyOfTrail)
                                            trailColorAttribute.setXYZW(strideTrail+1, r2,g2,b2,transparencyOfTrailLast)
                                             trailColorAttribute.setXYZW(strideTrail+2,   r1,g1,b1,transparencyOfTrail)
                                             trailColorAttribute.setXYZW(strideTrail+3, r1,g1,b1,transparencyOfTrail)
                                             trailColorAttribute.setXYZW(strideTrail+4, r2,g2,b2,transparencyOfTrailLast)
                                             trailColorAttribute.setXYZW(strideTrail+5, r2,g2,b2,transparencyOfTrailLast)
                                          
                              widts = widtr;
                          widtr =  trailWidth[r];

                      widtXperpS=widtXperpR;
                      widtYperpS=widtYperpR;
                      widtXperpR=widtr*xPerp[r];
                      widtYperpR=widtr*yPerp[r];
                     
                     
                     xsFinalNegatived = xrFinalNegatived;
                     xsFinalPositived = xrFinalPositived;
                      xrFinalNegatived = cx[r]-widtXperpR;
                      xrFinalPositived = cx[r]+widtXperpR;
                     
                     
                     ysFinalNegatived = yrFinalNegatived;
                     ysFinalPositived = yrFinalPositived;
                      yrFinalNegatived = cy[r]-widtYperpR;
                      yrFinalPositived = cy[r]+widtYperpR;
                 


                                    trailPositionAttribute.setXYZ(strideTrail,xrFinalNegatived, yrFinalNegatived,z)
                     trailPositionAttribute.setXYZ(strideTrail+1,xsFinalNegatived, ysFinalNegatived,zlast)  //1//side close
                     trailPositionAttribute.setXYZ(strideTrail+2,xrFinalPositived, yrFinalPositived,z) //3//side far
                     trailPositionAttribute.setXYZ(strideTrail+3,xrFinalPositived, yrFinalPositived,z)//3//side far//close triangle
                     trailPositionAttribute.setXYZ(strideTrail+4, xsFinalNegatived, ysFinalNegatived,zlast)//1//side close
                     trailPositionAttribute.setXYZ(strideTrail+5,xsFinalPositived, ysFinalPositived,zlast)//4//side close
            }
            else
            {
                for(var v = 0; v<6;v++){
                    trailPositionAttribute.setXYZ(strideTrail+v,0,0,0);
                    trailColorAttribute.setXYZW(strideTrail+v, 0,0,0,0.);
                }

                trailSegmentExpired[r] = true;
            }
                         strideTrail+=6;

             s = r;
             r--;
             if(r<0)r+=trailDepth;
                         loopLimit--;
                         timeElapsedSinceRecording=     uniforms["time"].value-trailTimeOfRecording[r];
                         
         }



    
      trailPositionAttribute.needsUpdate = true; // required after the first render
      trailColorAttribute.needsUpdate = true; // required after the first render


                                                                                     }//end EldersLeg>0
         else//clear starship
            {
            for(let u= 0.; u < bufferPortion*2; u +=1) linePositionAttribute.setXYZ(u,0,0,0);
            for(var v = 0; v<6*trailDepth;v++) trailPositionAttribute.setXYZ(v,0,0,0);
            for(let r = 0.; r<starArms*3; r++)starPositionAttribute.setXYZ(r,0,0,0);
            for(var g=0; g<12*xenOctaveFactor*6; g++) harmonicPositionAttribute.setXYZ(g,0,0,0);
            for(var e = 0; e<xyStarParticleArray.length*3*2; e++)starStreamPositionAttribute.setXYZ(e,0,0,0);
            for(var e = 0; e<120*6; e++)  starsANDwitnessesPositionAttribute.setXYZ(e,0,0,0);


            linePositionAttribute.needsUpdate = true;
            starPositionAttribute.needsUpdate = true;
            trailPositionAttribute.needsUpdate = true;
            harmonicPositionAttribute.needsUpdate = true;
            starStreamPositionAttribute.needsUpdate = true;
            starsANDwitnessesPositionAttribute.needsUpdate = true;
        }


if(isFinite(d_x)&&isFinite(d_y)&&on) {
circleX-=xAdjusted;//xadjusted should mean this moves with the same screen scale as the trail
circleY-=yAdjusted;
       }

if (circleX>width)circleX=-width;
else if (circleX<-width)circleX=width;
if (circleY>height)circleY=-height;
else if (circleY<-height)circleY=height;
                                  circleMaterial.color=colorSound;
                                        const sides = (isFinite(note))? Math.round((Math.abs((note+.5)%1.-.5))*12.)%12+2. : 0.;
                                  circle.geometry=new THREE.CircleGeometry(dotSize,sides,0.);
//circleGeometry.computeBoundingBox ();

circle.position.set(circleX,circleY,-.99);
                              if(isFinite(note)&&isFinite(lastNote))    circle.rotateZ((on)?note-lastNote:lastNote);

                   let colorBlack= new THREE.Color();
                   colorBlack.setStyle("black");


                   let centerOfDotToEdge = [];
                   centerOfDotToEdge.push( new THREE.Vector3(circleX-Math.sin(-angle)*dotSize*volume, circleY-Math.cos(-angle)*dotSize*volume, -1. ) );
                   centerOfDotToEdge.push( new THREE.Vector3(circleX,circleY,-1) );

                                  radialLine.geometry.setFromPoints( centerOfDotToEdge )
                                        uniforms.dotCoord.value =new THREE.Vector2(circleX,circleY) ;

let allCaught = true;
for (var n=0; n<polygons.length; n++) if(  polygons[n].caught == false) allCaught = false;
if(uniforms.gameOn.value&&allCaught)
{

    if(level >= metaLevel){metaLevel +=1; level = 1;}
    level +=1;

    polygons=[];
    polyRad = 2.*Math.PI/(metaLevel)/minimumDimension*70.;

    for(let n = 0; n<metaLevel-level; n++)
    {
        polygons.push({

             centerX:Math.cos(-2.*Math.PI/((metaLevel-level+.5))*n),
             centerY:Math.sin(-2.*Math.PI/((metaLevel-level+.5))*n),
             dx:0,
             dy:0,
             caught:false,
             exited:true,
             caughtByDot:""

        });


    }
}
else if(!uniforms.gameOn.value){polygons=[]; level = 1; metaLevel=1;}
                                        
                                        const baseMag=(1.-(metaLevel-level)/(metaLevel))/8.88;
                                        let compound = interpolation*baseMag/60.*window.movementRate/pixelShaderToStarshipRATIO;

for(let n = 0; n < polygons.length; n++)
{
                         const xFromCent = polygons[n].centerX;
                         const yFromCent = polygons[n].centerY;

                if (xFromCent>width)polygons[n].centerX = -width;
                else if (xFromCent<-width)polygons[n].centerX = width;
                if (yFromCent>height)polygons[n].centerY = -height;
                else if  (yFromCent<-height)polygons[n].centerY = height;


                         const angleTarget = Math.atan2(yFromCent,xFromCent);
                                        const speed = Math.sqrt(polygons[n].dx*polygons[n].dx+polygons[n].dy*polygons[n].dy)
                                        const speedLimit = 1.;

                        var distanceFromCenter;
                         var triggerDistanceAdjustment;
                         
var neutralizer=1.;
if (!on)neutralizer=0.;
                         polygons[n].centerX += (d_x*neutralizer-polygons[n].dx)*MR;

         if(uniforms.colorCombo.value==20&&!(uniforms.musicAngelMan.value>0&&(uniforms.Character.value==3||uniforms.Character.value==4))){
                                distanceFromCenter= Math.pow((xFromCent*xFromCent+(yFromCent+.25)*(yFromCent+.25)),.5)/uniforms.shaderScale.value/1.75/(Math.min(uniforms.resolution.value.x,uniforms.resolution.value.y)/Math.max(uniforms.resolution.value.x,uniforms.resolution.value.y));
                             triggerDistance=distanceFromCenter/(1./uniforms.shaderScale.value/1.75/(Math.min(uniforms.resolution.value.x,uniforms.resolution.value.y)/Math.max(uniforms.resolution.value.x,uniforms.resolution.value.y)));
             polygons[n].centerY += (d_y*neutralizer-polygons[n].dy)*MR;

                         }
         else {
             distanceFromCenter= Math.pow(xFromCent*xFromCent+yFromCent*yFromCent,.5);
             triggerDistance=distanceFromCenter;
             
             polygons[n].centerY += (d_y*neutralizer-polygons[n].dy)*MR;
         }

                         
                       // polygons[n].dx*=1.-baseMag;//resistance to speed accumulation
                        // polygons[n].dy*=1.-baseMag;


       // if (distanceFromCenter<=1)
        {
            compound*=Math.abs(maximumDimension/minimumDimension-distanceFromCenter);
            polygons[n].dx+=-Math.cos(angleTarget)*compound;
            polygons[n].dy+=-Math.sin(angleTarget)*compound;
        }
                         

    const ddX= circleX-polygons[n].centerX;
    const ddY= circleY-polygons[n].centerY;
    const distDot = Math.sqrt(ddX*ddX+ddY*ddY);
if( uniforms.starOnDot.value!=2)
{
    if ( triggerDistance<polyRad+dotSize &&polygons[n].exited){
        if (!polygons[n].caught)polygons[n].caught = true;
        else polygons[n].caught = false;
        polygons[n].caughtByDot=false;
        polygons[n].exited = false;}
    else if (triggerDistance>polyRad+dotSize&&polygons[n].caughtByDot==false)polygons[n].exited = true;
}
    if ( distDot<polyRad+dotSize &&polygons[n].exited){
        if (!polygons[n].caught)polygons[n].caught = true;
        else polygons[n].caught = false;
        polygons[n].caughtByDot=true;
        polygons[n].exited = false;}
    else if (distDot>polyRad+dotSize&&polygons[n].caughtByDot==true)polygons[n].exited = true;

}
for(var n = 0; n<polygons.length;n++)
{
 pG[n] = new THREE.CircleGeometry( polyRad, level+1,1 );

let c = new THREE.Color;
if (polygons[n].caught)c.setStyle("white");
else c.setStyle ( "black");
 pM[n] = new THREE.MeshBasicMaterial( { color: c} );
targets[n] = new THREE.Mesh( pG[n], pM[n] );
targets[n].position.set(polygons[n].centerX,polygons[n].centerY,-.99);
if (polygons[n].caught)targets[n].rotateZ(timestamp/1000.*Math.PI*2.)
else targets[n].rotateZ(-timestamp/1000.*Math.PI*2.)
    
    if(!blankBackground) shaderScene.add( targets[n] );
     else scene.add( targets[n] );

}



                                  
                                  
   if(window.starClover)
                     {
                renderer.setRenderTarget (renderTarget)
                renderer.render( scene, camera );

            //begin the feedback of the starRivers of eden
                    if( uniforms.eden.value>=1.)
                    {

                                                var firStaRivers =  true;
                                                FEEDBACKuniforms.STAR.value=renderTarget.texture;
                        
                        FEEDBACKuniforms.eden.value=uniforms.eden.value;
                        FEEDBACKuniformsFlip.eden.value=uniforms.eden.value;
                         

                        if(uniforms.eden.value==4)
                        {
                            
                            FEEDBACKuniforms.loudestFret1.value=new THREE.Vector2( loudestFret[0].x,loudestFret[0].y);
                            FEEDBACKuniforms.loudestFret2.value=new THREE.Vector2(loudestFret[1].x,loudestFret[1].y);
                            FEEDBACKuniforms.loudestFret3.value=new THREE.Vector2(loudestFret[2].x,loudestFret[2].y);
                            FEEDBACKuniforms.loudestFret4.value=new THREE.Vector2(loudestFret[3].x,loudestFret[3].y);
                            
                            FEEDBACKuniforms.volumeFret1.value=1;
                            FEEDBACKuniforms.volumeFret2.value=loudestFret[1].volume/loudestFret[0].volume;
                            FEEDBACKuniforms.volumeFret3.value=loudestFret[2].volume/loudestFret[0].volume;
                            FEEDBACKuniforms.volumeFret4.value=loudestFret[3].volume/loudestFret[0].volume;
                            
                            FEEDBACKuniformsFlip.loudestFret1.value=new THREE.Vector2(loudestFret[0].x,loudestFret[0].y);
                            FEEDBACKuniformsFlip.loudestFret2.value=new THREE.Vector2(loudestFret[1].x,loudestFret[1].y);
                            FEEDBACKuniformsFlip.loudestFret3.value=new THREE.Vector2(loudestFret[2].x,loudestFret[2].y);
                            FEEDBACKuniformsFlip.loudestFret4.value=new THREE.Vector2(loudestFret[3].x,loudestFret[3].y);
                            
                            FEEDBACKuniformsFlip.volumeFret1.value=1.;
                            FEEDBACKuniformsFlip.volumeFret2.value=loudestFret[1].volume/loudestFret[0].volume;
                            FEEDBACKuniformsFlip.volumeFret3.value=loudestFret[2].volume/loudestFret[0].volume;
                            FEEDBACKuniformsFlip.volumeFret4.value=loudestFret[3].volume/loudestFret[0].volume;
                              }

                                                backBufferFlip=false;
                                                for(var i = 0; i <7; i++){
                                                    if(!backBufferFlip)
                                                    {
                                                        renderer.setRenderTarget (FeedbackrenderTarget)
                                                        
                                                        if(firStaRivers==true)
                                                            firStaRivers=false;
                                                        else FEEDBACKuniforms.STAR.value=FeedbackrenderTargetFlipSide.texture;
                                                        renderer.render( feedbackScene, camera );

                                                    }
                                                    else
                                                    {
                                                        renderer.setRenderTarget (FeedbackrenderTargetFlipSide)
                                                        
                                                        
                                                        FEEDBACKuniformsFlip.STAR.value=FeedbackrenderTarget.texture;
                                                        renderer.render( feedbackSceneFlip, camera );

                                                    }
                                                    backBufferFlip=!backBufferFlip;
                                                    
                                                }

                                                if(!backBufferFlip)
                                                {
                                                    uniforms.EDEN.value=FeedbackrenderTarget.texture;//should be flip if i is odd
                                                }
                                                    
                                                else
                                                {
                                                    uniforms.EDEN.value=FeedbackrenderTargetFlipSide.texture;//should be flip if i is odd
                                                }
                       
                    }
                    else uniforms.EDEN.value=null;
            
     
     }
                          
                                                       scene.background = null;
                                 if(starClover) {

                                         uniforms.STAR.value=renderTarget.texture;
                                    if(omniDynamicEngaged||dynamicCoring)
                                    {
                                        renderer.setRenderTarget (cloverRenderTarget)
                                        renderer.render( shaderScene, camera);
                                        
                                        renderer.setRenderTarget (null)
                                        
                                        finalSceneRerenderedering.add(radialLine);
                                        finalSceneRerenderedering.add(circle);
                                        wipeUniforms.cloverSampler.value=cloverRenderTarget.texture;
                                        renderer.render( finalSceneRerenderedering, camera );
                                        
                                        finalSceneRerenderedering.remove(radialLine);
                                        finalSceneRerenderedering.remove(circle);
                                    }
                                    else
                                    {
                                        
                                        shaderScene.add(radialLine);
                                        shaderScene.add(circle);
                                        renderer.setRenderTarget (null)
                                        renderer.render( shaderScene, camera);
                                        
                                        shaderScene.remove(radialLine);
                                        shaderScene.remove(circle);
                                    }

                                 }
                                 else if(!window.blankBackground){
                                      uniforms.STAR.value=null;
                                                         
                                      const shaderMeshClone = mesh.clone();
                                                         scene.add(shaderMeshClone);
                                                         
                                    if(omniDynamicEngaged||dynamicCoring)
                                    {
                                        renderer.setRenderTarget (cloverRenderTarget)
                                        renderer.render( scene, camera );
                                        renderer.setRenderTarget (null)
                                        wipeUniforms.cloverSampler.value=cloverRenderTarget.texture;

                                        finalSceneRerenderedering.add(radialLine);
                                        finalSceneRerenderedering.add(circle);
                                        renderer.render( finalSceneRerenderedering, camera );
                                        finalSceneRerenderedering.remove(radialLine);
                                        finalSceneRerenderedering.remove(circle);
                                    }
                                    else{
                                        renderer.setRenderTarget (null)
                                        
                                                           scene.add(radialLine);
                                                           scene.add(circle);
                                        renderer.render( scene, camera );
                                        
                                                           scene.remove(radialLine);
                                                           scene.remove(circle);
                                    }
                                      scene.remove(shaderMeshClone);
                                     }
                                 else
                                    {
                                    scene.background = new THREE.Color( 0x808080);
                                    scene.add(radialLine);
                                    scene.add(circle);
                                                         
                                    renderer.render( scene, camera );

                                                         scene.remove(radialLine);
                                                         scene.remove(circle);
                                    }
                              
                     
                     
                                                       circle.geometry.dispose();
                                                       radialLine.geometry.dispose( );
if(RockInTheWater==2||RockInTheWater==1)scene.remove(starStreamMesh);
                                                       if(uniforms.gameOn.value)
for(var n = 0; n<targets.length;n++){
  if(!blankBackground)shaderScene.remove( targets[n] );
  else scene.remove( targets[n] );
  pG[n].dispose();
  pM[n].dispose();
  targets[n].geometry.dispose();
}
                                   
                     }
                                                       
                              
                              if (uniforms["MetaCored"].value)
                               {
                                  
                                  var precores = .25/Math.log(.5);
                                   if(uniforms.morph.value!=0.)precores=precores-3./Math.log(.5);
                                   if(uniforms.refactorCores.value!=1.)precores=-.0;
                                   
                                   const logStabilizationConstant = 1./Math.log(3.)+(1.-1./Math.log(3.))/2.;//.9551195 is based on 1./log(3.)==0.910239 So (1.-.910239)/2+.910239=.9551195 May be incorrect but is close to right.
                                   var equilibriator = 1.;
                               
                                  uniforms[ "centralCores" ].value = Math.log(zoom)/-Math.log(2.)+precores    ;
                                  // if(uniforms[ "morph" ].value!=0.)uniforms[ "centralCores" ].value*=3./2.;//stabilize morph dance collaboration

                                  uniforms[ "externalCores" ].value =uniforms[ "centralCores" ].value/1.5+Math.log(fromCenter)*logStabilizationConstant*equilibriator;
                                
                              }
                              
                              
                              loopsRun++;
                          //   if(dupered&&zoom<zoomCap32)
                                                       
                                                       
                     if (!iOS||(iOS&&dupered)) boot();//generate clover in 64 bit, duper Core, there is a bug after maybe half a day on iOS in bigTree.js (maybe also on safari Mac)

                                                                       animateLoopId=                   window.requestAnimationFrame( animate );
                            //  renderer.forceContextLoss ()
                            //  renderer.forceContextRestore ( )

}
                                                       
                                                       //https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
                                                       function iOSCHECK() {
                                                         return [
                                                           'iPad Simulator',
                                                           'iPhone Simulator',
                                                           'iPod Simulator',
                                                           'iPad',
                                                           'iPhone',
                                                           'iPod'
                                                         ].includes(navigator.platform)
                                                         // iPad on iOS 13 detection
                                                         || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
                                                       }
                                                       let iOS = iOSCHECK();
                    let animateLoopId;
                    

//begin MIT license, code from https://github.com/adamski/pitch_detector
/** Full YIN algorithm */
function calculatePitch ()
{
                       // return Math.abs(inputData[0]-inputData[1])/audioX.sampleRate*4.

let tolerance;//(1024-26)/10000
if(window.highORlow==1)tolerance=.021344;
    else if(window.highORlow==2)tolerance=.49;
let period;
let delta = 0.0, runningSum = 0.0;
yinData[0] = 1.0;
for (let tau = 1; tau < fractionOfFrame; tau++)
{

    yinData[tau] = 0.0;
    for (let j = 0; j < fractionOfFrame; j++)
    {
        delta = inputData[j] - inputData[j + tau];
       if(isFinite(delta)) yinData[tau] += (delta * delta);
    }
    runningSum += yinData[tau];
    if (runningSum != 0)
    {
        yinData[tau] *= tau / runningSum;
    }
    else
    {
        yinData[tau] = 1.0;
    }
    period = tau - 3;


    if (tau > 4 && (yinData[period] < tolerance) &&
            (yinData[period] < yinData[period + 1]))
    {
       return quadraticPeakPosition (yinData, period);
    }
}
return quadraticPeakPosition (yinData, minElement(yinData));
}
                   
                    
                    
                    
function minElement (d)
{

let pos = 0;
let tmp = d[0];
for (let j = 0; j < fractionOfFrame; j++)
{
    pos = (tmp < d[j]) ? pos : j;
    tmp = (tmp < d[j]) ? tmp : d[j];
}

return pos;
}


function quadraticPeakPosition (d, pos)
{

let s0, s1, s2;
let x0, x2;
if (pos == 0 || pos == fractionOfFrame - 1) return pos;
x0 = (pos < 1) ? pos : pos - 1;
x2 = (pos + 1 < fractionOfFrame) ? pos + 1 : pos;
if (x0 == pos) return (d[pos] <= d[x2]) ? pos : x2;
if (x2 == pos) return (d[pos] <= d[x0]) ? pos : x0;
s0 = d[x0];
s1 = d[pos];
s2 = d[x2];
return pos + 0.5 * (s0 - s2 ) / (s0 - 2.* s1 + s2);
}
//end MIT license



