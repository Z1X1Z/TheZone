var THREE;
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
       &&(window.micOn||location.hash.includes("t"))){
       document.getElementById( "background_wrap").style =  "height: 0px; width: 0px;"
        //"background-image: none;";//turn off splash!
        document.getElementById( "load message").innerHTML = "";//turn off splash!

                if(location.hash.includes("t"))
              {
                window.touchOnlyMode=true;
              }
            init();
     }
    else setTimeout(stallTillTHREELoaded,100);

    }//setTimeout waits for 10ms then runs stallTillTHREELoaded()
stallTillTHREELoaded();

const xyStarParticleArray=Array();
window.zoom=1.;

const starshipSize = Math.E**-1.3247/Math.sqrt(2.);//divided by Math.sqrt(2.) to set trail to equilateral,other coefficients are scale (size)
let screenPressCoordX, screenPressCoordY;
window.pointerZoom=false;
let coordX=0., coordY=0.;
if(!("spiroRainbow" in window))window.spiroRainbow = false;
window.pixelShaderSize = 7;
const pixelShaderToStarshipRATIO = pixelShaderSize/4.;//don't change from 7./4. or some factor of 7 seems right;
window.movementRate=pixelShaderToStarshipRATIO;//value of 1.5 moves trail to edge of screen in 1 second
window.touchMode=false;
window.volumeSpeed = false;
const zoomFrames = 60;//frames to double zoom
let ZR = Math.E**(Math.log(.5)/zoomFrames);
                  const mf = 1.;
const MR = mf/zoomFrames;
window.zoomCageSize = window.pixelShaderSize/4.;//radius of zoom bounding

                  window.uniformsLoaded=false;
window.gameOn=false;
window.twist = 0;
window.flip = 1;

let rez=.5;
if (navigator.maxTouchPoints <1) rez = 1;
let colorSound;
let center = false;
     
/*let mobile = false;

      //vvvvbelow line partly from https://code-boxx.com/detect-mobile-device-javascript/

    if (/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) )
      {
          rez=.5;
          //fftSize=512;
          //trailLength = 144;
          mobile=true;
      }
      else if(navigator.userAgent.toLowerCase().match(/mobile/i)){
           rez=.5;
           //fftSize=512;
           //trailLength = 144;
           mobile=true;
       }*/



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
const pi = Math.PI;
const bufferSize = fftSize;
const numberOfBins = fftSize/2.;

const inputData = new Float32Array(bufferSize);

window.zoomOutRatchetThreshold=1./bufferSize;

const spirray0 = Array(bufferSize);
const spirray1 = Array(bufferSize);
const starArms = numberOfBins;
let Fret = {x:null,y:null,index:null,volume:0.,note:null};
const loudestFret=Array(4).fill(Fret);
function vectorize4(){
    for(var g = 0;g<loudestFret.length;g++)loudestFret[g]=Object.assign({},Fret);
    let fretCount;
    if(onO) fretCount=starArms
        else fretCount=24;
    for (var g=0; g<fretCount; g++)if(isFinite(mustarD[g]))
    {
        
        if (dataArray[g]>loudestFret[0].volume)
        {
            if (Math.abs(loudestFret[0].note-loudestFret[1].note)>.25){
                loudestFret[3]=Object.assign({},loudestFret[2]); loudestFret[2]=Object.assign({},loudestFret[1]);
                loudestFret[1]=Object.assign({},loudestFret[0]);loudestFret[0].index=g;
            }
                loudestFret[0].volume=dataArray[g];loudestFret[0].note = mustarD[g];
            loudestFret[0].frequency = mustarD[g]
        }
        else if (dataArray[g]>loudestFret[1].volume)
        {
            if (Math.abs(loudestFret[1].note-loudestFret[2].note)>.25)
            {
            
            loudestFret[3]=Object.assign({},loudestFret[2]); loudestFret[2]=Object.assign({},loudestFret[1]);
            }
            loudestFret[1].index=g;
            loudestFret[1].volume=dataArray[g];
            loudestFret[1].frequency = mustarD[g]
        }
        else if(dataArray[g]>loudestFret[2].volume)
        {
            if (Math.abs(loudestFret[2].note-loudestFret[3].note)>.25) loudestFret[3]=Object.assign({},loudestFret[2]);
            loudestFret[2].index=g;loudestFret[2].volume=dataArray[g];loudestFret[2].frequency = mustarD[g]}
        else if (dataArray[g]>loudestFret[3].volume){loudestFret[3].index=g;loudestFret[3].volume=dataArray[g];loudestFret[3].frequency = mustarD[g]}
    }
    for(var g = 0;g<loudestFret.length;g++)
    {
        var arm =(flip*mustarD[loudestFret[g].index]+twist+12)%24./24.*pi*2.;
        //var rpio2 = arm+pi;
        loudestFret[g].x = -Math.sin(arm);//*loudestFret[g].volume;
        loudestFret[g].y = -Math.cos(arm);//*loudestFret[g].volume;

    }
}

const testar = Array(starArms);
const mustarD = Array(starArms);
let averagedAmp =  0;
let len=0;
let spiregulator=0;
let phase = 0;
let onO = false;
let largest_loop = 0;

function makeSpirograph(){
      phase = phase % (pi*2);
      len = 0;
      const adjConstant = 1./(pitch)*Math.PI*2.;
    var maxSamp=0.;
    for(var t=0; t<bufferSize;t++) if(inputData[t]>maxSamp)maxSamp=inputData[t];
      if(Math.abs(inputData[0])>.0    )
      for(var m = 0; m < bufferSize; m++)
      {
              phase += adjConstant;//spira_pitch;
              spirray0[m]=-Math.sin(phase)*(inputData[m]);
              spirray1[m]=-Math.cos(phase)*(inputData[m]);
             // len++;
      }
      len -= 1;
      largest_loop = 0;
      spiregulator = 0;
      for(let j = 0; j<bufferSize; j++)
      {
          if (Math.abs(spirray0[j])>largest_loop)largest_loop = Math.abs(spirray0[j]);
          if (Math.abs(spirray1[j])>largest_loop)largest_loop = Math.abs(spirray1[j]);
      }
      spiregulator=largest_loop;//*on;
}
function spiral_compress(){
    let freq = 0;
    const z = dataArray;

    for(let n = 0; n<starArms; n++){testar[n] = 0;mustarD[n] = 1;}
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
 
    var note24 =24*Math.log(freq/window.ConcertKey)/Math.log(2.)+49*2;//I would like this 69 to be a 49 as it is it centers around e6
                          if (!onO){
        testar[(Math.round(note24))%24] += Math.abs(z[n]);
  
    }
    else{//if constinuous star is engaged pipe directly through avoiding the 24 modulo
      testar[n] = Math.abs(z[n]);
    }
                          mustarD[n] = note24;

  }

};
window.ConcertKey = 440;



const twelve = Array(12);
for(let n = 0; n<12; n++)twelve[n] = Array(10).fill(0);

var smoothTwelve =false;
function fiveAndSeven(){
    
    for(let n = 0; n<12; n++)
        for(let m = 0; m<10; m++)
            twelve[n][m]=0;
    
    
      let finger = 0 //ranges up to
      let  starNote = 0 //ranges up to 12
        for(let n = 0; n<numberOfBins; n++)        {
            //mustard is in 24ths, here we want 12ths so we divide by two
            const twelfths = (mustarD[n])/2.+12//A1 is 1 with +12
           
                if( twelfths>=-.5){
                    starNote = Math.round(twelfths)%12;
                    finger = Math.floor(twelfths/10);
                    if (finger<10&&isFinite(finger)&&isFinite(starNote)&&isFinite(dataArray[n])) twelve[starNote][finger] += dataArray[n];
                }
                        
            
            }
}

                          const trailSecondsLong = 4.;
                          const trailLength = zoomFrames*trailSecondsLong;
const cx = Array(trailLength);//c is the center of the frame moved from the origin
const cy = Array(trailLength);
const xPerp= Array(trailLength);//perp is the perpendicular from c
const yPerp = Array(trailLength);
const trailWidth = Array(trailLength);
const trailTimeOfRecording = Array(trailLength);
const trailSegmentExpired = Array(trailLength).fill(false);
const pitchCol = Array(trailLength);
let trailLoaded = false;
let trailDepth = -1;

let d_x=0,d_y=0;
let staticX=0,staticY=0;

let circleX=0.,circleY=0.;
let dotSize = starshipSize;
let f = 0;



let pitch = -1;

let reset = 6;
let on;
let spirafreq=1;
var totalAMP;
var angle=0.;
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
                          let flatline = pixelShaderToStarshipRATIO;
                          
                       const   lightingScaleTrail = 72;//note range for color scheme
                         const  lightingScaleStar = lightingScaleTrail*2.*2.;//convert 12 to 24 and expand by factor of 2 for a divide between the octaves of the voice (trail) and the hearing (star)
                          let note,lastNote;
function  move()
{
    if (isNaN(coordX)||(!zoomAtl41&&coordX>4.))coordX=0.;
    if (isNaN(coordY)||(!zoomAtl41&&coordY>4.))coordY=0.;

  if (!trailLoaded) {trailLoaded = true;
      for(var n = 0; n<trailLength; n++)
        {trailTimeOfRecording[n]=0;xPerp[n]=0;yPerp[n]=0;cx[n]=0;cy[n]=0;trailWidth[n]=0.;pitchCol[n]  = new THREE.Color()
        }
  }

    totalAMP = 0.;
    for(var n=0; n<bufferSize;n++)totalAMP+=Math.abs(inputData[n]);
    totalAMP/=inputData.length;
        uniforms["totalAmp" ].value=totalAMP;
        lastPitch = pitch;
if (totalAMP>zoomOutRatchetThreshold) pitch =    audioX.sampleRate/calculatePitch();
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
            feedbackPitchsound[0].stop();
            feedbackPitchsound[0].play({env:{attack: 0.,hold:interpolation/60.*2, release:FPS/60.},pitch:pitch,volume:totalAMP/feedBackReduction})
            
            for (var v = 0; v < 4; v++)
            {
                
                    feedbackPitchsound[v].stop();
                    feedbackPitchsound[v].play({env:{attack: 0.,hold:interpolation/60.*2, release:FPS/60.},pitch:loudestFret[v].frequency,volume://loudestFret[v].volume
                        1./feedBackReduction/(4-v)})
                    
            }
        }
            else if (wadLOADED) {
                
                feedbackPitchsound[0].play({env:{attack: 0,                   release:0,hold:0}, pitch:0,volume:0});
                feedbackPitchsound[0].stop();
                
                for (var v = 0; v < 4; v++)
                {
                    feedbackPitchsound[v].play({env:{attack: 0,                   release:0,hold:0},pitch:0, volume:0});
                    feedbackPitchsound[v].stop();
                        
                }

            }
                                       }
                    //wadaw webaudiodaw code
                            
                            
                            
                            
                            
                            
                            
                            
                            
lastNote = note;
 note = 12*Math.log(pitch/window.ConcertKey)/Math.log(2.)+49;//https://en.wikipedia.org/wiki/Piano_key_frequencies
const t =  (note )*flip+twist/2;
if(isFinite(t))angle = -(30*t)%360;


colorSound = new THREE.Color();
             //          colorSound.setHSL((angle+90)/360.,(180+note)/297,(180+note)/297);
const reversableColor=(angle/360.+twist/24.)*flip+120/360.;
                       const colortone = note/lightingScaleTrail;
    colorSound.setHSL(reversableColor,1.,(colortone<=.75)?colortone:.75);//lighting {note/x} should be 120 but it's out of the vocal range

pitchCol[f]  = colorSound;
angle = ((angle+180)/360*2*pi);
                        flatline = pixelShaderToStarshipRATIO;
                       if(window.movementRate>pixelShaderToStarshipRATIO) flatline = window.movementRate;
         
         d_x = -Math.sin(-angle)*flatline;
         d_y = -Math.cos(-angle)*flatline;
                     //  console.log("x"+d_x)
                    //   console.log("y"+d_y)
         uniforms.d.value=[d_x,d_y];
      
                       
                       FEEDBACKuniforms.d.value=[d_x,d_y]
                       FEEDBACKuniformsFlip.d.value=[d_x,d_y]
         d_x*=volume;
         d_y*=volume;
         var spunD = [d_x,d_y];
                       
                    if(uniforms.carousel.value!=0.)         spunD=spin(spunD,-uniforms.carousel.value*(uniforms[ "time" ].value*uniforms[ "rate" ].value+Math.PI)%(Math.PI*2.));
          const d_xS=spunD[0];
          const d_yS=spunD[1];

   const bx=coordX+d_xS*MR*zoom*interpolation;
  const by=coordY+d_yS*MR*zoom*interpolation;
                       
    const sqC = Math.sqrt(bx*bx+by*by);

     if(isFinite(d_x)&&isFinite(d_y)&&totalAMP>zoomOutRatchetThreshold&&on){

                    coordX=bx;
                    coordY=by;
         staticX+=d_xS;
         staticY+=d_yS;
                }

                       
    let expandedZoomCage=1.;
   if (uniforms.Spoker.value)expandedZoomCage*=4./3.
   if(sqC>=window.zoomCageSize*expandedZoomCage){//adjust back in if too far from the center
        pushBackCounter+=60./FPS;

        coordX*=window.zoomCageSize/sqC*expandedZoomCage;
        coordY*=window.zoomCageSize/sqC*expandedZoomCage;
    }
    else pushBackCounter = 0
    if(pushBackCounter>0.){coordX=0;coordY=0;}//teleport to center if continuously flying into perimeter, set to 0 for off

                       
                       
            if (trailDepth<trailLength)trailDepth++;

xPerp[f] = -Math.sin(-angle+pi/2)*volume*flatline;
yPerp[f] = -Math.cos(-angle+pi/2)*volume*flatline;
                     trailWidth[f]=0.;
                       trailTimeOfRecording[f]=uniforms["time"].value;
                       trailSegmentExpired[f]=false;
if(trailDepth<trailLength||on)//||on
                       
                      {
    
f++;//this is the primary drive chain for the trail. it should be a global
if (f>=trailDepth)f=0;
    
const radius = interpolation*MR*4./window.pixelShaderSize;
 xAdjusted= d_x*radius;
 yAdjusted= d_y*radius;

if(isFinite(d_x)&&isFinite(d_y)&&on)for(let n = 0; n < trailDepth; n++) if(!trailSegmentExpired[n]){

    cx[n] += xAdjusted;
    cy[n] += yAdjusted;
trailWidth[n] += radius*starshipSize;
}
    

                     cx[(trailDepth+f)%trailDepth] = 0;
                     cy[(trailDepth+f)%trailDepth] = 0;
                       trailWidth[(trailDepth+f)%trailDepth]=0.;
}

                       }
    let camera, renderer;
                       

let mesh;
let feedbackStarshipmesh, feedbackStarshipmeshFlip;
let feedbackStarshipmaterialShader;

let materialShader;

let lineMat, lineGeometry, line;
 let circleGeometry,circleMaterial,circle;
                    
                    let meshTrail, materialTrail, geomeTrail;
                    let starMesh,starGeometry,starMaterial;
                    let radialMaterial, radialLine, radialGeometry;
                    let starsANDwitnessesMesh,starsANDwitnessesGeometry;
                    let starStreamMesh,starStreamGeometry;

                    
let geometryP;

let uniforms, FEEDBACKuniforms, FEEDBACKuniformsFlip;
                     let scene, shaderScene,feedbackScene, feedbackSceneFlip;

                     var minimumDimension=1;
                     var height=window.innerHeight,width=window.innerWidth;
                       let texture;
                       let renderTarget;
                       let backBufferFlip=false;
                      let FeedbackrenderTarget,FeedbackrenderTargetFlipSide;
                       
                                            const point = new Float32Array(bufferSize*3*2);
                                              const pointColor = new Float32Array(bufferSize*4*2);
                    
                    const star= new Float32Array(fftSize/2*3);
                    const starColors= new Float32Array(fftSize/2*4);
                    
                    const trail=new Float32Array(trailLength*3*6);
                    const trailColor=new Float32Array(trailLength*4*6);
       
                    const starsANDwitnessesPoints=new Float32Array(120*3*6);
                    const starsANDwitnessesColors=new Float32Array(120*3*6);

                    
                    
                    const secondsToEdge=window.pixelShaderSize/4./pixelShaderToStarshipRATIO;
                    const starCount = starArms*60*secondsToEdge;
                    
                                 const starStreamPoints=new Float32Array(starCount*3*6);
                                 const starStreamColors=new Float32Array(starCount*4*6);

                    
                    
function init() {
    renderTarget = new THREE.WebGLRenderTarget(Math.min(window.innerWidth,window.innerHeight)*4./3.,
                                               Math.min(window.innerWidth,window.innerHeight)*4./3.);

    FeedbackrenderTarget = new THREE.WebGLRenderTarget(Math.min(window.innerWidth,window.innerHeight)*4./3.,
                                                Math.min(window.innerWidth,window.innerHeight)*4./3.);


    FeedbackrenderTargetFlipSide = new THREE.WebGLRenderTarget(Math.min(window.innerWidth,window.innerHeight)*4./3.,
                                                Math.min(window.innerWidth,window.innerHeight)*4./3.);


    renderer = new THREE.WebGLRenderer();
    container.appendChild( renderer.domElement );//engage THREEJS visual out

    renderer.autoClear=true;//so the starship can be isolated
    renderer.setClearAlpha ( 0. )

    scene = new THREE.Scene();
    feedbackScene = new THREE.Scene();
    feedbackSceneFlip= new THREE.Scene();
    shaderScene = new THREE.Scene();
    

    lineMat =
    new THREE.LineBasicMaterial( {
       vertexColors: true,
           color: 0xffffff,
         // opacity: .5,
          linewidth: 2,
          linecap: 'round', //ignored by WebGLRenderer
          linejoin:  'round' //ignored by WebGLRenderer
    } );

     lineGeometry=new THREE.BufferGeometry();
     lineGeometry.dynamic = true;
    //line.geometry.verticesNeedUpdate=true
         lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute( point,3 ));
       lineGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( pointColor, 3 ));
     line = new THREE.LineSegments(lineGeometry,lineMat);


    starMaterial= new THREE.MeshBasicMaterial({
                opacity: 1.,
              transparent: true,
                vertexColors: true,
               // side: THREE.DoubleSide
            });
    starGeometry = new THREE.BufferGeometry();
     starGeometry.dynamic = true;
     
     starGeometry.setAttribute('position', new THREE.Float32BufferAttribute( star,3 ));
     starGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( starColors, 4 ));
    starMesh = new THREE.Mesh(starGeometry, starMaterial);

     starsANDwitnessesGeometry = new THREE.BufferGeometry();
     
     starsANDwitnessesGeometry.dynamic = true;
     starsANDwitnessesGeometry.setAttribute('position', new THREE.Float32BufferAttribute( starsANDwitnessesPoints,3 ));
     starsANDwitnessesGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( starsANDwitnessesColors, 3 ));
     starsANDwitnessesMesh = new THREE.Mesh(starsANDwitnessesGeometry, starMaterial);
     
     
     starStreamGeometry = new THREE.BufferGeometry();
     starStreamGeometry.dynamic = true;
     starStreamGeometry.setAttribute('position', new THREE.Float32BufferAttribute( starStreamPoints,3 ));
     starStreamGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( starStreamColors, 4 ));
     starStreamMesh = new THREE.Mesh(starStreamGeometry, starMaterial);

     
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

    
     circleMaterial = new THREE.MeshBasicMaterial( );
     circle = new THREE.Mesh(new THREE.CircleGeometry(dotSize,3,0.),circleMaterial);

     radialMaterial=  new THREE.MeshBasicMaterial( { color: 0x000000});
     radialGeometry=new THREE.BufferGeometry()
     radialLine = new THREE.Line(radialGeometry,radialMaterial);
     
     scene.add(meshTrail)
   //  scene.add(line);

    shaderScene.add( circle );
     shaderScene.add(radialLine);
      
    scene.add(starMesh);//20+ minutes error free
     scene.add(starsANDwitnessesMesh)
     
     
    // scene.add(starStreamMesh)
     
     
  FEEDBACKuniforms = THREE.UniformsUtils.merge([
  THREE.UniformsLib.lights,
  {
      STAR:{value: null   },
        EDEN:{value: null  },
  eden:{value: 0    },
    loudestFret1:{value:[0.,0.]},
  loudestFret2:{value:[0.,0.]},
  loudestFret3:{value:[0.,0.]},
  loudestFret4:{value:[0.,0.]},
      
  volumeFret1:{value:0.},
  volumeFret2:{value:0.},
  volumeFret3:{value:0.},
  volumeFret4:{value:0.},
      
  resolution: {value: [ window.innerWidth,window.innerHeight] },
  d:{value: new THREE.Vector2() },

  }])
    
    FEEDBACKuniformsFlip=Object.assign({},FEEDBACKuniforms);
    var charactarCheck;
  if(location.hash.includes("U")) charactarCheck = 0;
   else  charactarCheck= Date.now()%3;
    
  uniforms = THREE.UniformsUtils.merge([
  THREE.UniformsLib.lights,
  {
  STAR:{value: null    },
    EDEN:{value: null   },
  eden:{value: 0},
      spokesVisualizeColors: {value: false    },

  Spoker:{value: true    },
  spokelover:{value: false    },
  continuumClover:{value: false    },
  Inherited:{value: false    },
  cloverSlide:{value: false    },

      micIn : {  value: null }, // float array (vec3)
      time: {value: 1.0 },
  rate: {value: 1.},

      zoom: {value: window.zoom },
      colorCombo: {value: 1 },
        free: {value: false },
        MetaCored: {value: true },
        externalCores: {value: 0. },
        centralCores: {value: 0. },
        outerCoresOff: {value: false},
    upCoreCycler: {value: 0. },

        morph: {value: 0.0 },

  fourCreats: {value: 1 },
  Character: {value: charactarCheck },
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
  volume: {value: 0.0 },
  totalAmp: {value: 1.0 },

      resolution: {value: [ window.innerWidth, window.innerHeight] },
      coords: {value: [coordX,coordY] },
  d: {value: new THREE.Vector2() },
  dynamicDance: {value: false},
  remediatedColors: {value: false },

Clovoid:{value:false},
dotted:{value:false},
  base3:{value:false},

    onehundredfortyfourthousand:{value:false},
    shaderScale:{value:window.pixelShaderSize},
  starSpin:{value:0.},
  chirality:{value:0},
  MannyONtrail:{value:1},
  twistStar:{value:0.},
  flipStar:{value:1.},
  NightAndDay:{value:false},
  dotCoord:{value:[0,0]},
  starOnDot:{value:false},


    }
  ]);
    window.uniformsLoaded=true;

    materialShader = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
          
      } );
     geometryP = new THREE.PlaneGeometry( 2, 2 );
      //geometryP.translate(0,0,-1.);
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
    
  renderer.setPixelRatio( rez);

    animate();
    
}
function adjustThreeJSWindow()
{
    
         let correlationForText = document.getElementById("allText").offsetHeight;
         correlationForText+=document.getElementById("score").offsetHeight;


         height=window.innerHeight-correlationForText;
         width=window.innerWidth;
    

         uniforms.resolution.value.x = width;
         uniforms.resolution.value.y = height;

    FEEDBACKuniforms.resolution.value.x = width;
    FEEDBACKuniforms.resolution.value.y = height;

      minimumDimension = Math.min(width,height);

      height/=minimumDimension;
      width/=minimumDimension;

  renderer.setSize( uniforms.resolution.value.x, uniforms.resolution.value.y);
  camera = new THREE.OrthographicCamera( -width, width, height, -height, 1, -1);


}
//window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {


let correlationForText;

correlationForText=document.getElementById("score").offsetHeight;
correlationForText+=document.getElementById("allText").offsetHeight;

    if(!isNaN(correlationForText) )//this was added with the "score" osmd to prevent rare iOs glitch
       {
            if("osmd" in window)
            {
                osmdResize();//osmdResize defined in fileSelectAndLoadOSMD.js
            }
        }
        else//solution to iOS freeze glitch rare
        {
          document.getElementById("score").offsetHeight=0;
        document.getElementById("allText").offsetHeight=0;
        if("osmd" in window)osmd.render();
        }

        //reset correlation for osmd adjusted size
        correlationForText=document.getElementById("score").offsetHeight;
        correlationForText+=document.getElementById("allText").offsetHeight;
        //if(!isNaN(correlationForText) )//this was added with the "score" osmd to prevent rare iOs glitch
            adjustThreeJSWindow();

  }

            let textON=false;
            let lastTime=0.;
            let ticker = 0;
            let FPS=0.;

                  const interval = 250.;//sample window of FPS meter for FPS frame averaging, think 1000/FPS. 1 is more or less off. Used to keep off jitter. Think 200ms maybe
                  let elapsedTimeBetweenFrames = 0.;
                  let lastPitch = 1;

                  let lastFrameTime=-1.;
                  let interpolation=1.;
                  let finalAverageAmp=1.;
                  let averageFrameTotalAmp = [];
                       
let lastVolume = 1.;
        function zoomRate(){
        let volumeProcessed =volume/lastVolume;//should be volume not volumeBoosted
        if(!isFinite(volumeProcessed))volumeProcessed=1.;
            return Math.E**(Math.log(.5)/zoomFrames*window.movementRate*interpolation*(volumeProcessed));//the square root of volume is to make it grow slower than in d_xy
        }
                       
                       
                       let cloverSuperCores = 0;
                       var singleHyperCoreDepth = 60.;
       function infinicore(){
            if(zoom<=1./2.**63&&(coordY*coordY+coordX*coordX)**.5/zoom<2.){
                zoom*=2.**singleHyperCoreDepth;coordY*=2.**singleHyperCoreDepth;coordX*=2.**singleHyperCoreDepth;
                cloverSuperCores++;

            }
            
            if(zoom>1./2**3&&cloverSuperCores>0){
                zoom/=2.**singleHyperCoreDepth;coordY/=2.**singleHyperCoreDepth;coordX/=2.**singleHyperCoreDepth;
                cloverSuperCores--;
                
            }
    
            if(!isFinite(cloverSuperCores))
            {cloverSuperCores=0;
            zoom=1.;
            }
    
    
    
    
    
    if (on||zoom<1.)preserveOuterCore=true;
    else preserveOuterCore = false
    if((Math.sqrt(coordX*coordX+coordY*coordY)>=1.||zoom>=1.&&!zoomOutEngage&&uniforms.MetaCored.value)&&!(preserveOuterCore)){coordX=(coordX/2.)%1.; coordY=(coordY/2.)%1.;zoom=(zoom/2.)%1.;
        
        if(uniforms.wheel.value)uniforms.upCoreCycler.value=(uniforms.upCoreCycler.value-1)%60;//does modulo -60%60=0?-0 it seems
        else uniforms.upCoreCycler.value = 0.;
    }
    }
                       
                       
                       
                       
let       preserveOuterCore = true;
                       
                       
                       
                       
                       
function zoomRoutine(){
    const metaDepth=.00000075;//due to pixelization limits
    let zoomCone=metaDepth*Math.sqrt(coordX*coordX+coordY*coordY);
    if(uniforms[ "colorCombo" ].value==16)zoomCone/=1.33333333/2.;
    
    ZR = zoomRate();
    if (zoom>=1.)zoomOutEngage = false;
    if(!isFinite(ZR))ZR=1;
    if(!zoomOutEngage){
        if ((zoom>zoomCone && totalAMP>zoomOutRatchetThreshold&&on)||window.pointerZoom)zoom *=ZR;
        else if(uniforms.MetaCored.value||zoom<1.){
            zoom /= ZR;
            if(center&&zoom<1.){coordX*=(1-zoom)/ZR*2./3.; coordY*=(1-zoom)/ZR*2./3.;}
        }
    }

    
    //.000000000000000000000001
                       if ( zoom<zoomCone||zoom<1./2**63.*metaDepth)zoomOutEngage = true;
                         if (zoomOutEngage == true) zoom *= 1.44/ZR;
                    

                          if(zoom<1./2**63.*metaDepth)zoom = 1.;
    

}


                       

                     let thisChunk=0, lastChunk=0;
                     window.haptic = false;
                    let vibrateArray=[];

                    function mcphrth(){
     if(window.haptic){
             let audioFramesPerMillisecond=audioX.sampleRate*.001;
             let thisChunkGreaterThanLastChunk=0,thisChunkLessThanLastChunk=0;
             counter=0.;
         let vibrateArrayNew=[];

             for(var n=0; n<inputData.length-1;n++)
             {
                 thisChunk+=Math.abs(inputData[n+1]-inputData[n]);
             }
             
             if(thisChunk>=zoomOutRatchetThreshold*bufferSize ){
                     vibrateArrayNew.push(1000.);
                 vibrateArrayNew.push(0);
             }
             else {
                 vibrateArrayNew.push(0.);
                 vibrateArrayNew.push(1000.);
             }
         thisChunk=0.;
         
       //  vibrateArray =         vibrateArrayNew.concat(vibrateArray);
       //  console.log(vibrateArray)
       //  while (vibrateArray.length>10)vibrateArray.pop();
             try{error = navigator.vibrate(vibrateArrayNew
                                           );}
             catch(e){ error+=e;}
             
             setTimeout(mcphrth,250);// may work on touch instead of recursive calls which seems to bug
         }
}
//this doesn't work, and it only would work on android not on firefox

                    var volume=1;
                                 var skipNext=false;
                                 var lvs;

                                 let polygons=[];
                                 let level = 0;
                                 let metaLevel=0;
                                 let polyRad=.1;

let targets=[];
let pG=[];
let pM=[];
let lastZoom=1.;
let lastTimeStamp=0.;
let lastNoteTimeInScore=0;
let noteHit=false;
let timeStampLastNoteEnded=0.;
let currentMeasure=1;
let cursorMeasure=1;
let scoreColorInversion = true;
function takeNextScoreSlice(start){
                    window.osmd.setOptions({
                      drawFromMeasureNumber: start,
                      drawUpToMeasureNumber:start+Math.floor(window.innerWidth/window.innerHeight*2.)
                      }) // requires re-render
}
                       let timestamplast=0;
           
           
          window.date = Date.now();
          window.startTimeSecondMantissaMagnified = ((date/1000.-Math.round(date)/1000.)-.5)*144000;//for orienting the dance to time
                    
                    
                    window.ChristoDecrypto = 0.;
                    window.timeRESET =0;
                    window.TIMESTAMP;
   function animate( timestamp ) {

     adjustThreeJSWindow();//mostly for ios here, so the screen readjusts to fill dimensions after rotation
    
    
    
    
    
    
    uniforms[ "time" ].value = timestamp/1000.+window.startTimeSecondMantissaMagnified;
    if(starSpin!=0)twist=(uniforms[ "time" ].value*flip*uniforms[ "rate" ].value*starSpin*12./Math.PI)%24.;//Needs 12/PI to synchronize with carousel
     
     
     window.TIMESTAMP=timestamp;//used in hotkeys to set window.timeRESET
    if(window.ChristoDecrypto!=0) uniforms.metaCarousel.value=          1./(  window.ChristoDecrypto*uniforms.externalCores.value)*(timestamp-window.timeRESET)/10.;
         
         
         

    elapsedTimeBetweenFrames = (timestamp-lastTime);
    if(elapsedTimeBetweenFrames>interval)
    {FPS=ticker/elapsedTimeBetweenFrames*1000.; ticker=0.;lastTime = timestamp;};
    ticker++;
    
    
    
    if (uniforms["MetaCored"].value)
     {
        
        var precores = -.75;
        if(uniforms.morph.value!=0.)precores-=2.25;
        if(uniforms.wheel.value)precores-=.25;
        if(uniforms.cloverSlide.value)precores-=.25;
        if(uniforms.spirated.value!=0.)precores+=.25;
        const logStabilizationConstant = 1./Math.log(3.)+(1.-1./Math.log(3.))/2.;//.9551195 is based on 1./log(3.)==0.910239 So (1.-.910239)/2+.910239=.9551195 May be incorrect but is close to right.

        
        uniforms[ "centralCores" ].value = Math.log(zoom)/Math.log(.5)+precores    ;
         if(uniforms[ "morph" ].value!=0.)uniforms[ "centralCores" ].value*=3./2.;//stabilize morph dance collaboration

        uniforms[ "externalCores" ].value =(uniforms[ "centralCores" ].value)*2./3.+Math.log(Math.sqrt(coordX*coordX+coordY*coordY))*logStabilizationConstant+.25/Math.log(.5);
        
        if(uniforms[ "Spoker" ].value&&uniforms[ "MetaCored" ].value)
            uniforms[ "externalCores" ].value*=4./3./(1./Math.log(3.)+(1.-1./Math.log(3.))/1.75);
    }
    
    
    if(document.visibilityState=="hidden"||lvs=="hidden")lastFrameTime=timestamp;
    lvs=document.visibilityState
    interpolation = (timestamp-lastFrameTime)/1000.*60.;
    if(interpolation>60)interpolation=60;//this is to prevent frametime leak on mobile
    if (!isFinite(interpolation))interpolation = 1.;
    lastFrameTime=timestamp;
    if(!window.touchMode)pointerZoom=false;
    else on=false;

if( !window.touchMode&&!window.touchOnlyMode) {

  analyser.getFloatTimeDomainData(inputData); // fill the Float32Array with data returned from getFloatTimeDomainData()
           if(window.volumeSpeed)
           {
                    lastVolume=volume;
               volume = totalAMP+(1./bufferSize);//uses totalAMP hence bufferSize not fractionOfFrame
               volume =volume*audioX.sampleRate/bufferSize;
                       }
           else {volume=1.; lastVolume=1.; }
    move();
    if(!zoomAtl41)zoomRoutine();
    infinicore();

    
    spiral_compress();
    
    vectorize4();
    
    if(on) makeSpirograph();


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
      if(textON)document.getElementById("textWindow").innerHTML =
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
+"</div>";
      else document.getElementById("textWindow").innerHTML = "";






   
  if (uniforms[ "metronome" ].value>1.)
    lineMat.color = new THREE.Color(-Math.sin(uniforms[ "time" ].value*uniforms[ "metronome" ].value))
else if(blankBackground) {
    lineMat.color = colorSound;
  }

  const d = -.991;
                            
                            let tx = 0, ty = 0,greyness;
                            
    const linePositionAttribute = lineGeometry.getAttribute( 'position' );
    const lineColorAttribute = lineGeometry.getAttribute( 'color' );
  var lineStride=0;
  if (on)for (let r= 0; r < bufferSize; r +=1) {
      scene.add(line)
       const  txlast=tx;
       const  tylast=ty;
     tx = spirray0[r]/spiregulator;
     ty =  spirray1[r]/spiregulator;
        const greynessLast = greyness
         greyness = 1.-Math.sqrt(tx*tx+ty*ty)**1.3247
        // pointColor.push( greynessLast, greynessLast, greynessLast,greyness, greyness, greyness );
      linePositionAttribute.setXYZ(lineStride,txlast,tylast, d)
      linePositionAttribute.setXYZ(lineStride+1,tx, ty, d)
      lineColorAttribute.setXYZ(lineStride,greynessLast, greynessLast, greynessLast)
      lineColorAttribute.setXYZ(lineStride+1,greyness, greyness, greyness )
      lineStride+=2  }
    linePositionAttribute.needsUpdate = true; // required after the first render
    lineColorAttribute.needsUpdate = true; // required after the first render


  uniforms[ "time2dance" ].value += audioX.sampleRate/bufferSize*totalAMP;
                            
         uniforms["volume" ].value = audioX.sampleRate/bufferSize*totalAMP/(1.+zoomOutRatchetThreshold);


              uniforms[ "zoom" ].value = zoom;
              uniforms.coords.value = [coordX,coordY];

  if (window.micOn)analyser.getByteFrequencyData(  dataArray);

   var maxTestar=0.0000001;
   var minTestar=100000000000000;


                            const maxToMin = Math.max(height,width)/Math.min(height,width);
    

if(!window.touchMode){
    
    
    const starPositionAttribute = starGeometry.getAttribute( 'position' );
    const starColorAttribute = starGeometry.getAttribute( 'color' );
    let starStride = 0;

    if(onO){
        for (var g=0; g<starArms; g++) {
            if(isFinite(testar[g])){
                if(testar[g]>maxTestar) { maxTestar=testar[g];}
                if(testar[g]<minTestar) minTestar=testar[g];
            }
        }
        
        const fill =1000./(timestamp - timestamplast)*secondsToEdge;//This should be set to either sampleRate/fftSize or by predicted FPS
        timestamplast = timestamp;
        const waterRadiusScalar = 7./8.;

        
        
        
        
        
        for (var g=0; g<starArms; g++)
            
        {
            
            if(isFinite(testar[g])&&testar[g]!=0.&&isFinite(mustarD[g])&&mustarD[g]!=0.){
                
                const arm =(flip*mustarD[g]+twist+12)%24./24.*pi*2.;
                const lengtOriginal=(testar[g]-minTestar)/(maxTestar-minTestar);//twice applied
                var widt = (1.-lengtOriginal)*starshipSize;
                if (widt==0)widt=starshipSize;
                //var widt =starshipSize;
                const vop = new THREE.Color();
                vop.setHSL((-mustarD[g]+8)%24./24., mustarD[g]/lightingScaleStar,mustarD[g]/lightingScaleStar);//297 is around the highest heard note
                
                
                const rpio2 =arm+pi/2.;
                if(RockInTheWater==0||RockInTheWater==1)
                {
                    
                    const x = widt*-Math.sin(rpio2);
                    const y = widt*-Math.cos(rpio2);
                    const xr = lengtOriginal*-Math.sin(arm);
                    const yr = lengtOriginal*-Math.cos(arm);
                    const depth = -1.+lengtOriginal/maxToMin*waterRadiusScalar;//shortest bar on top
                    
                    const starshipseethrough = lengtOriginal;
                    //for(var yy=0;yy<3;yy++)
                    if (RockInTheWater==1)
                        for(var yy=0;yy<3;yy++)
                            starColorAttribute.setXYZW(starStride+yy,mustarD[g]/lightingScaleStar, mustarD[g]/lightingScaleStar, mustarD[g]/lightingScaleStar,1.)
                    else{
                        starColorAttribute.setXYZW(starStride,vop.r,vop.g,vop.b,1.)
                        starColorAttribute.setXYZW(starStride+1,vop.r,vop.g,vop.b,.5)
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
                    var wideness =(testar[g]/255*totalAMP**.5-zoomOutRatchetThreshold)*starshipSize;//totalAMP is signal average, it may or may not be an equivalent to fft bin amp/255, but it works to prevent jamming at high volumes
                    if(wideness<=0)wideness=1./255.*starshipSize;
                    var xyStarParticle={};
                    xyStarParticle.amp = testar[g];
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
                    xyStarParticle.amp=testar[g]/255.;
                    xyStarParticle.staticX=staticX;
                    xyStarParticle.staticY=staticY;
                    
                    xyStarParticleArray.push(xyStarParticle);
                    let loopOfCulling =0;
                    while((xyStarParticleArray.length>starCount||uniforms[ "time" ].value-xyStarParticleArray[loopOfCulling].time>maxToMin)&&loopOfCulling>0)
                    {
                        xyStarParticleArray.shift();
                        loopOfCulling++;
                        
                            for(var e = 0; e<6; e++){
                                starStreamPositionAttribute.setXYZ(loopOfCulling+e,0,0,0)
                                starStreamColorAttribute.setXYZW(starStreamStride+e,0,0,0,0)
                            }

                    }
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
        
        let OUTERSHELL =maxToMin* secondsToEdge;
        
        const starStreamPositionAttribute = starStreamGeometry.getAttribute( 'position' );
        const starStreamColorAttribute = starStreamGeometry.getAttribute( 'color' );
        
        if ((RockInTheWater==1||RockInTheWater==2)&&xyStarParticleArray.length>0)
        {
            scene.add(starStreamMesh)
            
            let m = xyStarParticleArray[xyStarParticleArray.length-1];
            let lastLoopTime=m.time;
            let timeShift = 0.;
            let w = timeShift/m.lengt/secondsToEdge;
            let withinRadialDelimiter = timeShift +m.lengt<OUTERSHELL;
            let depthINNER = (-1.+timeShift/OUTERSHELL);
            let depthOUTER = depthINNER+m.lengt;
            let starStreamStride = 0;
            for(let starMoment=xyStarParticleArray.length-1; starMoment>=0; starMoment--)
                
            {
                
                m = xyStarParticleArray[starMoment];
                if (lastLoopTime!=m.time) {
                    timeShift = uniforms["time"].value-m.time;
                    w = timeShift/m.lengt/secondsToEdge;
                    withinRadialDelimiter = timeShift +m.lengt<OUTERSHELL*1.1;// OUTERSHELL times 1.1 to prevent remnant pieces around edge
                    depthINNER = (-1.+timeShift/OUTERSHELL);
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
                    
                     for(var yy=0;yy<6;yy++) starStreamColorAttribute.setXYZW(starStreamStride+yy, m.vop.r, m.vop.g, m.vop.b,-depthINNER)
                     
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
                
                starStreamStride+=6

            }

            
        }
  
        
        starStreamPositionAttribute.needsUpdate = true;
        starStreamColorAttribute.needsUpdate = true;
         }
             


else{//start drawing of just twenty four frets here
    for (var g=0; g<starArms*3; g++) {//wipe out the after image of the 1024 frets
        starColorAttribute.setXYZW(g,0,0,0,0.)
        starPositionAttribute.setXYZ(g,0,0,0)
    }


                             for (var g=0; g<24; g++) {
                                 if(testar[g]>maxTestar){maxTestar=testar[g];}
                                 if(testar[g]<minTestar)minTestar=testar[g];
                             }

            for (var g=0; g<24; g++) {
            const widt = starshipSize;
            const arm =(flip*g+twist)%24./24.*pi*2.;

            const lengt = (testar[(g+12)%24]-minTestar)/(maxTestar-minTestar);

                const vop = new THREE.Color();
                      vop.setHSL((20-g)%24/24.,1.,.5);

                  
                  starColorAttribute.setXYZW(starStride,vop.r,vop.g,vop.b,0.)
                  starColorAttribute.setXYZW(starStride+1,vop.r,vop.g,vop.b,0.)
                  starColorAttribute.setXYZW(starStride+2,vop.r,vop.g,vop.b,1.)
                  starColorAttribute.setXYZW(starStride+3,vop.r,vop.g,vop.b,0.)
                  starColorAttribute.setXYZW(starStride+4,vop.r,vop.g,vop.b,1.)
                  starColorAttribute.setXYZW(starStride+5,vop.r,vop.g,vop.b,1.)

const rpio2 =arm+pi/2.;
const x = widt*-Math.sin(rpio2);
const y = widt*-Math.cos(rpio2);
const xr = lengt*-Math.sin(arm);
const yr = lengt*-Math.cos(arm);
const depth = -1.+lengt;

                
                starPositionAttribute.setXYZ(starStride,-x,    -y,  depth)
                starPositionAttribute.setXYZ(starStride+1,x,    y,  depth)
                starPositionAttribute.setXYZ(starStride+2,(xr+x), (yr+y),  depth)
                
                starPositionAttribute.setXYZ(starStride+3,-x, -y,  depth)
                starPositionAttribute.setXYZ(starStride+4,(xr+x), (yr+y),  depth)
                starPositionAttribute.setXYZ(starStride+5,(xr-x), (yr-y),  depth)
                
                
                
            
                starStride+=6;
}
    
}
      
      starPositionAttribute.needsUpdate = true; // required after the first render
      starColorAttribute.needsUpdate = true; // required after the first render
    
const starsANDwitnessesPositionAttribute = starsANDwitnessesGeometry.getAttribute( 'position' );
const starsANDwitnessesColorAttribute = starsANDwitnessesGeometry.getAttribute( 'color' );
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
             
             for (var g=0; g<10; g++) {
                 const widt = starshipSize**(2.41421);
                 const finger = (isFinite(twelve[t][g]))?twelve[t][g]:0;
                 const arm =(g+9)/10.*pi*2.;

                 const lengt =(isFinite(maxFinger)&&maxFinger!=0)? (finger)/maxFinger/1.5 : 0;


                     var vop = new THREE.Color();
                     let BlackOrWhite;
                     const noteGrey = Math.abs(t-(6-twist/2.)+12)%12;
                     if (t==7||t==5||t==2||t==0||t==10)
                         if(uniforms.colorCombo.value!=20)
                         BlackOrWhite=-1.;
                         else BlackOrWhite =.5;
                     else if( (noteGrey<.5 || noteGrey>11.5) &&starClover&&uniforms.colorCombo.value!=20)
                        BlackOrWhite=.5;
                    else
                         BlackOrWhite=1;
                     vop.setRGB(BlackOrWhite,BlackOrWhite,BlackOrWhite);
                     

                     for(var yy=0;yy<6;yy++)   starsANDwitnessesColorAttribute.setXYZ(fingerStride+yy,vop.r,vop.g,vop.b)

                     const rpio2 =arm+pi/2.;
                     const fingerTwist=(flip*(t-6)+twist/2.+12)/12.*2.*pi;
                                        const x = widt*-Math.sin(rpio2+fingerTwist+pi);
                                        const y = widt*-Math.cos(rpio2+fingerTwist+pi);
                                        const xr = pi/12.*lengt*-Math.sin(arm+fingerTwist+pi);
                                        const yr = pi/12.*lengt*-Math.cos(arm+fingerTwist+pi);
                                        const offsetX=-Math.sin(fingerTwist)/1.5;
                                        const offsetY=-Math.cos(fingerTwist)/1.5;
                                        const depth = -.98;//this depth should mean that half the trail is above and half below

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
                                                              
          starsANDwitnessesPositionAttribute.needsUpdate = true; // required after the first render
          starsANDwitnessesColorAttribute.needsUpdate = true; // required after the first render
                                                              
                                                              
                                                              
                                                              
                                                              
      //https://www.youtube.com/watch?v=4SH_-YhN15A&list=WL&index=10&t=2328s  wouldn't this be cool  with the equalizer starship, description of process at beginning of video (now implemented with feedback buffer
              
                             //      starGeometry = new THREE.BufferGeometry();

          //    starGeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( star, 3 ).onUpload( disposeArray ) );
          //  starGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( starColors, 4 ).onUpload( disposeArray ));
                 // starGeometry.computeBoundingBox();
                                  
                                 // starMesh.geometry.dispose();
                                  //starMesh.geometry=starGeometry;
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         

    const trailPositionAttribute = geomeTrail.getAttribute( 'position' );
    const trailColorAttribute = geomeTrail.getAttribute( 'color' );

let r = (f+trailDepth-1)%trailDepth;
let s = f;

var loopLimit = trailDepth;
//if(isFinite(cx[r-1])&&isFinite(cx[s])&&isFinite(cy[r-1])&&isFinite(cy[s]))
                 const scalar = 1.;


                             let     timeElapsedSinceRecording=     uniforms["time"].value-trailTimeOfRecording[r];
                                  let transparencyOfTrail = 1., z = -1;
     let strideTrail = 0;
                                  
          while(loopLimit>0&&r!=f){
                 if(!trailSegmentExpired[r]&&timeElapsedSinceRecording<=trailSecondsLong){
                        // timeElapsedSinceRecording=  uniforms["time"].value-trailTimeOfRecording[r];
                            const zlast = z;
                            z = -1.+timeElapsedSinceRecording/trailSecondsLong;
                        //   if (z>=-.153)z=.153*(-1.+timeElapsedSinceRecording/trailSecondsLong);
                            const transparencyOfTrailLast =transparencyOfTrail;
                            transparencyOfTrail =1.-timeElapsedSinceRecording/trailSecondsLong;
                           if(transparencyOfTrail<.01)transparencyOfTrail=.01;
                                          trailColorAttribute.setXYZW(strideTrail, pitchCol[r].r,pitchCol[r].g,pitchCol[r].b,transparencyOfTrail)
                                            trailColorAttribute.setXYZW(strideTrail+1, pitchCol[s].r,pitchCol[s].g,pitchCol[s].b,transparencyOfTrailLast)
                                             trailColorAttribute.setXYZW(strideTrail+2,   pitchCol[r].r,pitchCol[r].g,pitchCol[r].b,transparencyOfTrail)
                                             trailColorAttribute.setXYZW(strideTrail+3, pitchCol[r].r,pitchCol[r].g,pitchCol[r].b,transparencyOfTrail)
                                             trailColorAttribute.setXYZW(strideTrail+4, pitchCol[s].r,pitchCol[s].g,pitchCol[s].b,transparencyOfTrailLast)
                                             trailColorAttribute.setXYZW(strideTrail+5, pitchCol[s].r,pitchCol[s].g,pitchCol[s].b,transparencyOfTrailLast)
                                          
                         const widtr = trailWidth[r];
                     const widts = trailWidth[s];
                     const widtXperpR=widtr*xPerp[r];
                     const widtYperpR=widtr*yPerp[r];
                     const widtXperpS=widts*xPerp[s];
                     const widtYperpS=widts*yPerp[s];
                         
                     const xrFinalNegatived = cx[r]-widtXperpR;
                     const xrFinalPositived = cx[r]+widtXperpR;
                     const xsFinalNegatived = cx[s]-widtXperpS;
                     const xsFinalPositived = cx[s]+widtXperpS;
                         
                     const yrFinalNegatived = cy[r]-widtYperpR;
                     const yrFinalPositived = cy[r]+widtYperpR;
                     const ysFinalNegatived = cy[s]-widtYperpS;
                     const ysFinalPositived = cy[s]+widtYperpS;


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
                    trailColorAttribute.setXYZW(strideTrail+v, 0,0,0,0);
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

circle.position.set(circleX,circleY,-1.);
                              if(isFinite(note)&&isFinite(lastNote))    circle.rotateZ(note-lastNote);

                   let colorBlack= new THREE.Color();
                   colorBlack.setStyle("black");


                   let centerOfDotToEdge = [];
                   centerOfDotToEdge.push( new THREE.Vector3(circleX-Math.sin(-angle)*dotSize*volume, circleY-Math.cos(-angle)*dotSize*volume, -1. ) );
                   centerOfDotToEdge.push( new THREE.Vector3(circleX,circleY,-1.) );

                                  radialLine.geometry.setFromPoints( centerOfDotToEdge )
                                        uniforms.dotCoord.value =[circleX,circleY] ;

let allCaught = true;
for (var n=0; n<polygons.length; n++) if(  polygons[n].caught == false) allCaught = false;
if(window.gameOn&&allCaught)
{

    if(level >= metaLevel){metaLevel +=1; level = 1;}
    level +=1;

    polygons=[];
    polyRad = 2.*Math.PI/(metaLevel)/minimumDimension*70.;

    for(let n = 0; n<metaLevel-level; n++)
    {
        polygons.push({

             centerX:Math.cos(-2.*Math.PI/((metaLevel-level+2)-2)*n),
             centerY:Math.sin(-2.*Math.PI/((metaLevel-level+2)-2)*n),
             dx:0,
             dy:0,
             caught:false,
             exited:true,
             caughtByDot:""

        });


    }
}
else if(!window.gameOn){polygons=[]; level = 0; metaLevel=0;}
                                        
                                        const baseMag=(1.-(metaLevel-level)/(metaLevel))/2.;
                                        const compound = interpolation*baseMag/60.*window.movementRate;

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

                                        const distanceFromCenter = Math.pow(xFromCent*xFromCent+yFromCent*yFromCent,.5);

                       // polygons[n].dx*=1.-baseMag;//resistance to speed accumulation
                        // polygons[n].dy*=1.-baseMag;


        if (distanceFromCenter<=1)
        {
            polygons[n].dx+=-Math.cos(angleTarget)*compound;
            polygons[n].dy+=-Math.sin(angleTarget)*interpolation*compound;
        }
                         
var neutralizer=1.;
if (!on)neutralizer=0.;
                polygons[n].centerX += (d_x*neutralizer-polygons[n].dx)*MR;
                polygons[n].centerY += (d_y*neutralizer-polygons[n].dy)*MR;

    const ddX= circleX-polygons[n].centerX;
    const ddY= circleY-polygons[n].centerY;
    const distDot = Math.sqrt(ddX*ddX+ddY*ddY);


    if ( distanceFromCenter<polyRad+dotSize &&polygons[n].exited){//here I use dotSize, though it's really the center trigger
        if (!polygons[n].caught)polygons[n].caught = true;
        else polygons[n].caught = false;
        polygons[n].caughtByDot=false;
        polygons[n].exited = false;}
    else if (distanceFromCenter>polyRad+dotSize&&polygons[n].caughtByDot==false)polygons[n].exited = true;

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
shaderScene.add( targets[n] );
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
                            
                            FEEDBACKuniforms.loudestFret1.value=[loudestFret[0].x,loudestFret[0].y];
                            FEEDBACKuniforms.loudestFret2.value=[loudestFret[1].x,loudestFret[1].y];
                            FEEDBACKuniforms.loudestFret3.value=[loudestFret[2].x,loudestFret[2].y];
                            FEEDBACKuniforms.loudestFret4.value=[loudestFret[3].x,loudestFret[3].y];
                            
                            FEEDBACKuniforms.volumeFret1.value=1;
                            FEEDBACKuniforms.volumeFret2.value=loudestFret[1].volume/loudestFret[0].volume;
                            FEEDBACKuniforms.volumeFret3.value=loudestFret[2].volume/loudestFret[0].volume;
                            FEEDBACKuniforms.volumeFret4.value=loudestFret[3].volume/loudestFret[0].volume;
                            
                            FEEDBACKuniformsFlip.loudestFret1.value=[loudestFret[0].x,loudestFret[0].y];
                            FEEDBACKuniformsFlip.loudestFret2.value=[loudestFret[1].x,loudestFret[1].y];
                            FEEDBACKuniformsFlip.loudestFret3.value=[loudestFret[2].x,loudestFret[2].y];
                            FEEDBACKuniformsFlip.loudestFret4.value=[loudestFret[3].x,loudestFret[3].y];
                            
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
                          
                     renderer.setRenderTarget (null)

                 if(!window.blankBackground) scene.background = null;
                 else scene.background = new THREE.Color( 0x808080);
                     
                                 if(starClover) {
                                         uniforms.STAR.value=renderTarget.texture;
                                         renderer.render( shaderScene, camera )
                                 }
                                 else if(!window.blankBackground){
                                      uniforms.STAR.value=null;
                                      const shaderMeshClone = mesh.clone();
                                      scene.add(shaderMeshClone);
                                      renderer.render( scene, camera );
                                      scene.remove(shaderMeshClone);
                                     }
                                 else   renderer.render( scene, camera );

                              

//scene.remove( circle );
//circleGeometry.dispose();
//circleMaterial.dispose();
//scene.remove(radialLine);
//radialMaterial.dispose();

                     
                     
                     
circle.geometry.dispose();
radialLine.geometry.dispose( );
scene.remove(starStreamMesh);
scene.remove(line);
for(var n = 0; n<targets.length;n++){
  shaderScene.remove( targets[n] );
  pG[n].dispose();
  pM[n].dispose();
  targets[n].geometry.dispose();
}
    /*
     if(on){
            scene.remove(line);
            line.geometry.dispose( );
        }
                     
                 scene.remove(starMesh);
                 scene.remove(meshTrail);

                                            starGeometry.dispose();
                                            geomeTrail.dispose();
                                            materialTrail.dispose();
                                   */
                     }}else {//begin touch frame
            
            if(!zoomAtl41)
                {
                  lastZoom = zoom;
                  zoomRoutine();
                    infinicore();

                }
                else lastZoom=zoom/zoomRate();
                        const coordinator = pixelShaderSize/2.;//this is the frame size in the shader: "p=vec2(...."

                    if(pointerZoom){
                        const xTouch = screenPressCoordX/(Math.min(uniforms.resolution.value.x,uniforms.resolution.value.y)/coordinator);
                        const yTouch = screenPressCoordY/(Math.min(uniforms.resolution.value.x,uniforms.resolution.value.y)/coordinator);
                         const touchMovement = [-Math.abs(zoom-lastZoom)*xTouch, Math.abs(zoom-lastZoom)*yTouch];
                        uniforms.d.value.x=-xTouch;
                        uniforms.d.value.y=yTouch;
                        uniforms[ "volume" ].value=1.;
                        var spunTouch=touchMovement;
                              if(uniforms.carousel.value!=0.)         spunTouch=spin(touchMovement,-uniforms.carousel.value*(uniforms[ "time" ].value*uniforms[ "rate" ].value+Math.PI)%(Math.PI*2.));
                                  coordX+= spunTouch[0];
                                  coordY+= spunTouch[1];
                      }

                      uniforms[ "zoom" ].value = zoom;
                      uniforms.coords.value.x = coordX;
                      uniforms.coords.value.y = coordY;
                        
            uniforms.STAR.value=null;
            uniforms.EDEN.value=null;

                    renderer.render( shaderScene, camera );

                        
                if(textON)document.getElementById("textWindow").innerHTML =
                    "<div sytle='font-size: 16px;'>"+
                    
                    "cores:"+(Math.floor(uniforms["centralCores"].value)+cloverSuperCores*singleHyperCoreDepth+uniforms.upCoreCycler.value)+
                    " outerCores: "+Math.floor(uniforms["externalCores"].value)+", <p style='margin : 0px'></p>"+

                    "zoom: "+(zoom/2.**(singleHyperCoreDepth*cloverSuperCores))+"<p style='margin : 0px'></p>"+
                    "real part: "+ coordY +"<p style='margin : 0px'></p>"+
                    "imaginary part: "+ coordX+"<p style='margin : 0px'></p>"+
                    "FPS: "+Math.round(FPS)
                +"</div>";
                else document.getElementById("textWindow").innerHTML = "";



                        
                  }//end touch mode centerOfDotToEdge

let thelastnotehit;

//Here starts OPEN SHEET MUSIC DISPLAY score code
if("osmd" in window){
        //takeNextScoreSlice(window.osmd.cursor.Iterator.currentMeasureIndex+1);
        cursorMeasure=window.osmd.cursor.Iterator.currentMeasureIndex+1;//this is the measure number of the cursor
        takeNextScoreSlice(cursorMeasure);
                  //https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/746
                  var nts = osmd.cursor.NotesUnderCursor();//the argument 0 hopefully specifies first instrument
                  let noteLength=nts[0].length.realValue
                  let noteExpired =  noteLength<(timestamp-timeStampLastNoteEnded)/1000./4;
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





                        let noteToHitColor = new THREE.Color();
                        noteToHitColor.setHSL((-nts[n].halfTone)%12/12.,1.,.5);
                        osmd.cursor.NotesUnderCursor()[n].noteheadColor="#"+noteToHitColor.getHexString();;
                  }



      //https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/710


      if(noteExpired&&noteHit){


        osmd.cursor.next(); // advance the cursor one note

      if(osmd.cursor.Iterator.endReached){

        osmd.setOptions({darkMode: scoreColorInversion}); // or false. sets defaultColorMusic and PageBackgroundColor.
        scoreColorInversion= !scoreColorInversion;

        takeNextScoreSlice(1);
        osmd.cursor.reset();
                              }


                            var notesUnderCursor = osmd.cursor.NotesUnderCursor();//the argument 0 hopefully specifies first instrument

                                        for(var n = 0.; n< notesUnderCursor.length; n++){

                                              let noteToHitColor = new THREE.Color();
                                              noteToHitColor.setHSL((-notesUnderCursor[n].halfTone)%12/12.,1.,.5);
                                              notesUnderCursor[n].noteheadColor="#"+noteToHitColor.getHexString();;
                                        }
                            cursorMeasure=osmd.cursor.Iterator.currentMeasureIndex+1;
                            takeNextScoreSlice(cursorMeasure);
                            onWindowResize();//this calls window.osmd.render() by osmdResize()


                        noteHit=false;
                        timeStampLastNoteEnded=timestamp;




      }



                        osmd.cursor.cursorOptions.color="#"+colorSound.getHexString();//this is a frame behind if it is above colorSounds definition
                        osmd.cursor.show();

      cursorMeasure=window.osmd.cursor.Iterator.currentMeasureIndex+1;//this is the measure number of the cursor

      }//end osmd







                                                                                           window.requestAnimationFrame( animate );
}


                    
                    

//begin MIT license, code from https://github.com/adamski/pitch_detector
/** Full YIN algorithm */
const fractionOfFrame = Math.floor(bufferSize/2.);
const yinData = Array(fractionOfFrame);

function calculatePitch ()
{
let tolerance; //, confidence;
if(highORlow==1)tolerance=totalAMP-(1./bufferSize)**1.5//works well for smoothly and quickly determining sung notes especially low ones
else if (highORlow==2)tolerance = .5;//when I play different notes on harmonica it mostly hears C, this clears up the distinction of the notes
                        
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
