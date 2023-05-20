
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
let xyStarParticleArray=Array();
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
window.zoomCageSize =100000.* window.pixelShaderSize/4.;//radius of zoom bounding

                  window.uniformsLoaded=false;
window.gameOn=false;
window.twist = 0;
window.flip = 1;

var rez=.5;
if (navigator.maxTouchPoints <1) rez = 1;
let colorSound;
let center = false;
                  let geome;
                  let geomeTrail;
                  let meshe;
                  let materialTrail;

     
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
var rez = window.devicePixelRatio*rez;


                  var framesLong;
                  let computeFPS=false;


            function disposeArray() {

                                this.array = null;

                            }
            let container;


var zoomOutEngage=false;
const pi = Math.PI;
const bufferSize = fftSize;
let inputData = new Float32Array(bufferSize);

window.zoomOutRatchetThreshold=1./bufferSize;

const numberOfBins = fftSize/2.;
const spirray0 = Array(bufferSize);
const spirray1 = Array(bufferSize);
const starArms = numberOfBins;
let Fret = {x:null,y:null,index:null,volume:0.,note:null};
let loudestFret=Array(4).fill(Fret);
function vectorize4(){
    for(var g = 0;g<loudestFret.length;g++)loudestFret[g]=Object.assign({},Fret);
    let fretCount;
    if(onO) fretCount=starArms
        else fretCount=24;
    for (var g=0; g<fretCount; g++)if(isFinite(testar[g]))
    {
        
        if (testar[g]>loudestFret[0].volume)
        {
            if (Math.abs(loudestFret[0].note-loudestFret[1].note)>.25){
                loudestFret[3]=Object.assign({},loudestFret[2]); loudestFret[2]=Object.assign({},loudestFret[1]);
                loudestFret[1]=Object.assign({},loudestFret[0]);loudestFret[0].index=g;
            }
                loudestFret[0].volume=testar[g];loudestFret[0].note = mustarD[g];
        }
        else if (testar[g]>loudestFret[1].volume)
        {
            if (Math.abs(loudestFret[1].note-loudestFret[2].note)>.25)
            {
            
            loudestFret[3]=Object.assign({},loudestFret[2]); loudestFret[2]=Object.assign({},loudestFret[1]);
            }
            loudestFret[1].index=g;
            loudestFret[1].volume=testar[g];
        }
        else if(testar[g]>loudestFret[2].volume)
        {
            if (Math.abs(loudestFret[2].note-loudestFret[3].note)>.25) loudestFret[3]=Object.assign({},loudestFret[2]);
            loudestFret[2].index=g;loudestFret[2].volume=testar[g];}
        else if (testar[g]>loudestFret[3].volume){loudestFret[3].index=g;loudestFret[3].volume=testar[g];}
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
const mustarDAverager= Array(24);
let averagedAmp =  0;
let len=0;
let spiregulator=0;
let phase = 0;
let onO = false;

function makeSpirograph(){
      phase = phase % (pi*2);
      len = 0;
      let adjConstant = 1./(pitch)*Math.PI*2.;
    var maxSamp=0.;
    for(var t=0; t<bufferSize;t++) if(inputData[t]>maxSamp)maxSamp=inputData[t];
      if(Math.abs(inputData[0])>.0    )
      for(var m = 0; m < bufferSize; m++)
      {
              phase += adjConstant;//spira_pitch;
              spirray0[m]=-Math.sin(phase)*(inputData[m]/maxSamp+1.)*m;
              spirray1[m]=-Math.cos(phase)*(inputData[m]/maxSamp+1.)*m;
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
    let z = dataArray;

    for(let n = 0; n<starArms; n++){testar[n] = 0;mustarD[n] = 1;}
    mustarDAverager.fill(0);
    for(let n=0; n<numberOfBins; n++)
    {
    //if ( z[n]>z[n-1] && z[n] > z[n+1] ){
    let d =1.;
    if(n!=0)   d = (z[n+1]-z[n-1])/(z[n-1]+z[n+1]);
    else d = (z[n+1])/(z[n]+z[n+1])/2.;
    let nAdj = n + d*4 ;
    //if (Math.abs(nAdj-n) < 10)
    if (Math.abs(d)<4+1.)
        freq =((( audioX.sampleRate)*(nAdj))/numberOfBins);
        else freq = audioX.sampleRate*n/numberOfBins
        //    freq = 440; //check for concert A
 
    let note =24*Math.log(freq/440)/Math.log(2.)+49*2;//I would like this 69 to be a 49 as it is it centers around e6
                          if (!onO){
        testar[(Math.round(note))%24] += Math.abs(z[n]);
        mustarD[(Math.round(note))%24]+=(Math.round(note))%24;//for Stegasaurus tail
        mustarDAverager[(Math.round(note))%24]+=1;
    }
    else{//if constinuous star is engaged pipe directly through avoiding the 24 modulo
      testar[n] = Math.abs(z[n]);
        mustarD[n] = note;
    }
                          
  }
                          if(!onO)  for(var a = 0; a<24; a++)mustarD[a]=mustarD[a]/mustarDAverager[a]

};




const twelve = Array(12);
for(let n = 0; n<12; n++)twelve[n] = Array(10);

var smoothTwelve =false;
function fiveAndSeven(){
    
    for(let n = 0; n<12; n++)
        for(let m = 0; m<10; m++)
            twelve[n][m]=0;
    
    
      let finger = 0 //ranges up to
      let  starNote = 0 //ranges up to 12
        for(let n = 0; n<numberOfBins; n++)        {
            //mustard is in 24ths, here we want 12ths so we divide by two
            let twelfths = (mustarD[n])/2.+12//A1 is 1 with +12
           
                if( twelfths>=-.5){
                    starNote = Math.round(twelfths)%12;
                    finger = Math.floor(twelfths/10);
                    if (finger<10&&!isNaN(starNote)&&!isNaN(dataArray[n])) twelve[starNote][finger] += dataArray[n];
                }
                        
            
            }
}

                          const trailSecondsLong = 7;
                          const trailLength = zoomFrames*trailSecondsLong;
const trail = Array(trailLength);
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
let circleGeometry,circleMaterial,circle;
let dotSize = .112;
let f = 0;



let pitch = -1;

let reset = 6;
let on;
let spirafreq=1;
var totalAMP;
var angle=0.;
                           function spin(f, angle)
                           {    //https://en.wikipedia.org/wiki/Rotation_matrix
                               var fxb=f[0];
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
        let notNyquist = Math.abs(pitch-audioX.sampleRate/numberOfBins/2.)>1.;
        if(!notNyquist) pitch = lastPitch;
    if (isFinite(pitch) &&pitch>0&& notNyquist &&pitch!=-1&&totalAMP>zoomOutRatchetThreshold) {
        aboveThreshold = true;
        on = true;

    }
    else{aboveThreshold = false; on = false}

let note = 12*Math.log(pitch/440)/Math.log(2.)+49;//https://en.wikipedia.org/wiki/Piano_key_frequencies
let t =  (note )*flip+twist/2;
if(isFinite(t))angle = -(30*t)%360;


colorSound = new THREE.Color();
             //          colorSound.setHSL((angle+90)/360.,(180+note)/297,(180+note)/297);
let reversableColor=0.;
                       let j = 0;
reversableColor=(angle/360.+twist/24.)*flip+120/360.;
                       
    colorSound.setHSL(reversableColor,1.,note/lightingScaleTrail);//lighting {note/x} should be 120 but it's out of the vocal range

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
          let d_xS=spunD[0];
          let d_yS=spunD[1];

    bx=coordX+d_xS*MR*zoom*interpolation;
  by=coordY+d_yS*MR*zoom*interpolation;
                       
    let sqC = Math.sqrt(bx*bx+by*by);

     if(isFinite(d_x)&&isFinite(d_y)&&totalAMP>zoomOutRatchetThreshold&&on){

                    coordX=bx;
                    coordY=by;
         staticX+=d_xS;
         staticY+=d_yS;
                }
                       /*disable zoomcage instead relying on upcore
let expandedZoomCage=1.;
   if (uniforms.Spoker.value)expandedZoomCage*=4./3.
   if(sqC>=window.zoomCageSize*expandedZoomCage){//adjust back in if too far from the center
        pushBackCounter+=FPS/60.;

        coordX*=window.zoomCageSize/sqC*expandedZoomCage;
        coordY*=window.zoomCageSize/sqC*expandedZoomCage;
    }
    else pushBackCounter = 0
    if(pushBackCounter>14){coordX=0;coordY=0;}//teleport to center if continuously flying into perimeter
*/
                       
                       
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
    
let radius = interpolation*MR*4./window.pixelShaderSize;
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
let material;
    let camera, renderer;
let mesh;
let feedbackStarshipmesh, feedbackStarshipmeshFlip;

let materials;
let feedbackStarshipmaterials, feedbackStarshipmaterialsFlip;

let materialShader;
let feedbackStarshipmaterialShader, feedbackStarshipmaterialShaderFlip;

let geometry;



let geometryP;
                       let feedbackStarshipgeometryP, feedbackStarshipgeometryPFlip;

let uniforms, FEEDBACKuniforms, FEEDBACKuniformsFlip;
                     let scene, shaderScene,feedbackScene, feedbackSceneFlip;

                     var minimumDimension=1;
                     var height=window.innerHeight,width=window.innerWidth;
                       let texture;
                       let renderTarget;
                       let backBufferFlip=false;
                      let FeedbackrenderTarget,FeedbackrenderTargetFlipSide;
                       
                       
                     
                       
                       
function init() {
    container = document.getElementById( 'container' );
    renderTarget = new THREE.WebGLRenderTarget(Math.min(window.innerWidth,window.innerHeight)*4./3.,
                                               Math.min(window.innerWidth,window.innerHeight)*4./3.);

    FeedbackrenderTarget = new THREE.WebGLRenderTarget(Math.min(window.innerWidth,window.innerHeight)*4./3.,
                                                Math.min(window.innerWidth,window.innerHeight)*4./3.);


    FeedbackrenderTargetFlipSide = new THREE.WebGLRenderTarget(Math.min(window.innerWidth,window.innerHeight)*4./3.,
                                                Math.min(window.innerWidth,window.innerHeight)*4./3.);


    scene = new THREE.Scene();
    feedbackScene = new THREE.Scene();
    feedbackSceneFlip= new THREE.Scene();
    shaderScene = new THREE.Scene();



        renderer = new THREE.WebGLRenderer();
    container.appendChild( renderer.domElement );//engage THREEJS visual out

                renderer.autoClear=true;//so the starship can be isolated
                renderer.setClearAlpha ( 0. )
    
    
  FEEDBACKuniforms = THREE.UniformsUtils.merge([
  THREE.UniformsLib.lights,
  {
      STAR:{value: renderTarget.texture    },
        EDEN:{value: FeedbackrenderTarget.texture    },
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
    
  uniforms = THREE.UniformsUtils.merge([
  THREE.UniformsLib.lights,
  {
  STAR:{value: renderTarget.texture    },
    EDEN:{value: FeedbackrenderTarget.texture    },
  eden:{value: 0},
      spokesVisualizeColors: {value: false    },

  Spoker:{value: true    },
  spokelover:{value: false    },
  continuumClover:{value: false    },
  Inherited:{value: false    },
  cloverSlide:{value: false    },

      micIn : {  value: null }, // float array (vec3)
      time: {value: 1.0 },
  rate: {value: 1./window.movementRate },

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
  Character: {value: Date.now()%3 },
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

    }
  ]);
    
    window.uniformsLoaded=true;

    materialShader = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
          transparent: true,
          opacity:.5
          
      } );




      geometryP = new THREE.PlaneGeometry( 2, 2 );
      //geometryP.translate(0,0,-1.);

           mesh = new THREE.Mesh( geometryP, materialShader );
    
    
    //repeat PixelShader loader for The four Rivers

              
    feedbackStarshipmaterialShader = new THREE.ShaderMaterial( {
        uniforms: FEEDBACKuniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'FourRiversfragmentShader' ).textContent,
          transparent: true,
          opacity:.5
          
      } );



    feedbackStarshipgeometryP = new THREE.PlaneGeometry( 2, 2 );
      //geometryP.translate(0,0,-1.);

    feedbackStarshipmesh = new THREE.Mesh( feedbackStarshipgeometryP, feedbackStarshipmaterialShader );
              
    
    //repeat PixelShader loader for The four Rivers second fold

              
    feedbackStarshipmaterialShaderFlip = new THREE.ShaderMaterial( {
        uniforms: FEEDBACKuniformsFlip,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'FourRiversfragmentShader' ).textContent,
          transparent: true,
          opacity:.5
          
      } );



    feedbackStarshipgeometryPFlip = new THREE.PlaneGeometry( 2, 2 );
      //geometryP.translate(0,0,-1.);

    feedbackStarshipmeshFlip = new THREE.Mesh( feedbackStarshipgeometryPFlip, feedbackStarshipmaterialShaderFlip );
    //and now for the flip frame for the feedback buffer
              
    feedbackScene.add( feedbackStarshipmesh );
    feedbackSceneFlip.add( feedbackStarshipmeshFlip );
    
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
    let metaDepth=.00000075;//due to pixelization limits
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


                       /*

                     let thisChunk=0, lastChunk=0;
                      let v=document.getElementById("Vibrate")
                       v.onclick=
function mcphrth(){
    let audioFramesPerMillisecond=audioX.sampleRate*.001;
    let vibrateArray=[0];
    let thisChunkGreaterThanLastChunk=0,thisChunkLessThanLastChunk=0;
    counter=0.;
    for(var n=0; n<inputData.length-1;n++)
    {
        thisChunk+=Math.abs(inputData[n+1]-inputData[n]);

        if(counter>=audioFramesPerMillisecond) {

            if(thisChunk>lastChunk){
                thisChunkGreaterThanLastChunk+=1;
                if(thisChunkGreaterThanLastChunk!=0)vibrateArray.push(thisChunkLessThanLastChunk);
                thisChunkLessThanLastChunk=0;

            }
                else {thisChunkLessThanLastChunk+=1;
                    if(thisChunkGreaterThanLastChunk!=0)vibrateArray.push(thisChunkLessThanLastChunk);
                    thisChunkGreaterThanLastChunk=0;
                }

            lastChunk=thisChunk;
            thisChunk=0;
            counter=0;
        }
        counter++;
    }
            try{navigator.vibrate(vibrateArray);}catch(e){console.log(e);}

}
//this doesn't work, and it only would work on android not on firefox
                        */
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
let noteNumber;
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
                       
                       
                       let STARSHIPMAP;
                      window.date = Date.now();
                      window.startTimeSecondMantissaMagnified = ((date/1000.-Math.round(date)/1000.)-.5)*144000;//for orienting the dance to time
                       function animate( timestamp ) {
    adjustThreeJSWindow();//mostly for ios here, so the screen readjusts to fill dimensions after rotation
    
    
    
    
    
    
    uniforms[ "time" ].value = timestamp/1000.+window.startTimeSecondMantissaMagnified;
    if(starSpin!=0)twist=(uniforms[ "time" ].value*flip*uniforms[ "rate" ].value*starSpin*12./Math.PI)%24.;//Needs 12/PI to synchronize with carousel
    
    
    
    elapsedTimeBetweenFrames = (timestamp-lastTime);
    if(elapsedTimeBetweenFrames>interval)
    {FPS=ticker/elapsedTimeBetweenFrames*1000.; ticker=0.;lastTime = timestamp;};
    ticker++;
    
    
    
    if (uniforms["MetaCored"].value){
        uniforms[ "centralCores" ].value = Math.log(zoom)/Math.log(.5);
        uniforms[ "externalCores" ].value =(uniforms[ "centralCores" ].value)*2./3.+Math.log(Math.sqrt(coordX*coordX+coordY*coordY))*0.9551195;
        
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
     noteNumber =  Math.log(pitch/440)/Math.log(Math.pow ( 2, (1/12.0)))+49;
    if(Math.round(noteNumber) ==-854)noteNumber="undefined";
    let noteNameNumber=Math.floor(Math.round(noteNumber))%12;
    let hour =Math.floor(Math.floor(noteNumber))%12;
    if (hour==0)hour = 12;
    let minute =(noteNumber-Math.floor(noteNumber))*60;
    let second =(minute-Math.floor(minute))*60
    let timeOfTheSound  =  Math.floor(hour)+":"+Math.floor(minute)+":"+Math.floor(second);
    let notes = ["G#","A","A#","B", "C","C#","D","D#","E","F","F#","G"];



     let note = notes[noteNameNumber];
     let cents = Math.round((noteNumber-Math.round(noteNumber))*100);
     let fr = Math.round(pitch);
     let n_n = Math.round(noteNumber);
     let cores = Math.floor(uniforms["centralCores"].value)+cloverSuperCores*singleHyperCoreDepth+uniforms.upCoreCycler.value;
      if(textON)document.getElementById("textWindow").innerHTML =
"<div sytle='font-size: 16px;'>"+

                                " note: "+note+", cents: "+cents+", freq: "+fr+"<p style='margin : 0px'></p>"+
                                "note number: "+n_n+", time: "+timeOfTheSound+"<p style='margin : 0px'></p>"+
                                "cores: "+cores+", zoom: "+zoom/2.**(singleHyperCoreDepth*cloverSuperCores)+"<p style='margin : 0px'></p>"+                // style='margin : 0px'
                                "InOutThresh:"+zoomOutRatchetThreshold+"<p style='margin : 0px'></p>"+
                                "amplitude : "+totalAMP+"<p style='margin : 0px'></p>"+
                                "above threshold: "+aboveThreshold+", FPS: "+Math.round(FPS)+"<p style='margin : 0px'></p>"
                            //+"<p style='margin : 0px'></p>"+"X: "+String(-coordX)+" Y: "+String(-coordY);
+"</div>";
      else document.getElementById("textWindow").innerHTML = "";






  let lineMat =
  new THREE.LineBasicMaterial( {
     vertexColors: true,
         color: 0xffffff,
       // opacity: .5,
        linewidth: 2,
        linecap: 'round', //ignored by WebGLRenderer
        linejoin:  'round' //ignored by WebGLRenderer
  } );
  if (uniforms[ "metronome" ].value>1.)
    lineMat.color = new THREE.Color(-Math.sin(uniforms[ "time" ].value*uniforms[ "metronome" ].value))
else if(blankBackground) {
    lineMat.color = colorSound;
  }

  let depth = -.991;
                            
                                                      let pointColor = [];
                                                      let point = [];
                            let tx = 0, ty = 0, txlast = 0, tylast=0,greyness,greynessLast;
                            
  if (on)for (let r= 0; r < bufferSize; r ++) {
         txlast=tx;
         tylast=ty;
     tx = spirray0[r]/spiregulator;
     ty =  spirray1[r]/spiregulator;
         greynessLast = greyness
         greyness = 1.-Math.sqrt(tx*tx+ty*ty)**1.3247
         pointColor.push(
                         greynessLast, greynessLast, greynessLast,
                         greyness, greyness, greyness
                         );

    point.push( new THREE.Vector3(txlast,tylast, depth),new THREE.Vector3( tx, ty, depth));
  }
                            let line;
  let lineGeometry = new THREE.BufferGeometry()
                            if(on){lineGeometry.setFromPoints( point );
         lineGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( pointColor, 3 ).onUpload( disposeArray ));
         line = new THREE.LineSegments(lineGeometry, lineMat );

     }



  uniforms[ "time2dance" ].value += audioX.sampleRate/bufferSize*totalAMP;
                            
         uniforms["volume" ].value = audioX.sampleRate/bufferSize*totalAMP/(1.+zoomOutRatchetThreshold);


              uniforms[ "zoom" ].value = zoom;
              uniforms.coords.value = [coordX,coordY];

  if (window.micOn)analyser.getByteFrequencyData(  dataArray);

   var maxTestar=0.;
   var minTestar=100000000000000;

   var star=[];
   const starColors=[];

                            let maxToMin = Math.max(height,width)/Math.min(height,width);
let index;
if(!window.touchMode){
         if(onO){
             for (var g=0; g<starArms; g++) {
                 if(isFinite(testar[g])){
                     if(testar[g]>maxTestar) { maxTestar=testar[g];index = g;}
                     if(testar[g]<minTestar) minTestar=testar[g];
                 }
             }

             let secondsToEdge=1;
             secondsToEdge*=window.pixelShaderSize/4./movementRate;
             let fill =1000./(timestamp - timestamplast)*secondsToEdge;//This should be set to either sampleRate/fftSize or by predicted FPS
             timestamplast = timestamp;

             const starCount = starArms*60*secondsToEdge;
             
             for (var g=0; g<starArms; g++)
                 
             {
                 if(isFinite(testar[g])&&testar[g]!=0.&&isFinite(mustarD[g])&&mustarD[g]!=0.){
                     
                     var arm =(flip*mustarD[g]+twist+12)%24./24.*pi*2.;
                     let lengtOriginal=(testar[g]-minTestar)/(maxTestar-minTestar);//twice applied
                     var widt = (1.-lengtOriginal)*starshipSize;
                     if (widt==0)widt=starshipSize;
                     //var widt =starshipSize;
                     var vop = new THREE.Color();
                     vop.setHSL((-mustarD[g]+8)%24./24., mustarD[g]/lightingScaleStar,mustarD[g]/lightingScaleStar);//297 is around the highest heard note
                     material = new THREE.MeshBasicMaterial({
                     color:vop,
                     opacity: 1.,
                     transparent: true,
                     });
                     
                     rpio2 =arm+pi/2.;

        if(RockInTheWater==0||RockInTheWater==1)
        {
       
            let x = widt*-Math.sin(rpio2);
            let y = widt*-Math.cos(rpio2);
            let xr = lengtOriginal*-Math.sin(arm);
            let yr = lengtOriginal*-Math.cos(arm);
            let depth = (-1.+lengtOriginal/maxToMin);//shortest bar on top
            
            let starshipseethrough = lengtOriginal;
            //for(var yy=0;yy<3;yy++)
            if (RockInTheWater==1)
                for(var yy=0;yy<3;yy++)
                    starColors.push( mustarD[g]/lightingScaleStar, mustarD[g]/lightingScaleStar, mustarD[g]/lightingScaleStar,1.)
            else
                 starColors.push(
                                 vop.r,vop.g,vop.b,1.,
                                 vop.r,vop.g,vop.b,.5,
                                 vop.r,vop.g,vop.b,1.)
                 
            star.push(
                      (xr-x), (yr-y),  depth,
                      0., 0.,  depth,
                      (xr+x), (yr+y),  depth,
                      ) ;
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
                         while(xyStarParticleArray.length>starCount)xyStarParticleArray.shift();
                     }
                 }}
             
             let OUTERSHELL =maxToMin*secondsToEdge;
             
             
             if ((RockInTheWater==1||RockInTheWater==2)&&xyStarParticleArray.length>0)
             {
                             let m = xyStarParticleArray[xyStarParticleArray.length-1];
                             let lastLoopTime=m.time;
                             let timeShift = 0.;
                             let w = timeShift/m.lengt/secondsToEdge;
                             let withinRadialDelimiter = timeShift +m.lengt<OUTERSHELL;
                             let depthINNER = (-1.+timeShift/OUTERSHELL);
                             let depthOUTER = depthINNER+m.lengt;

                 for(let starMoment=xyStarParticleArray.length-1; starMoment>=0; starMoment--)
               
                 {
                     
                      m = xyStarParticleArray[starMoment];
                     if (lastLoopTime!=m.time) {
                         timeShift = uniforms["time"].value-m.time;
                          w = timeShift/m.lengt/secondsToEdge;
                         withinRadialDelimiter = timeShift +m.lengt<OUTERSHELL;
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
                         let outSetX = w*m.xr-bulletX;//apparently something is flipped
                         let outSetY = w*m.yr-bulletY;
               
                         let outSet = new THREE.Vector2(outSetX,outSetY)
                         for(var yy=0;yy<6;yy++)
                         
                             starColors.push(
                                           m.vop.r,
                                           m.vop.g,
                                           m.vop.b,-depthINNER,
                                           )
                         let nx =-m.x+outSetX
                         let ny =-m.y+outSetY
                         let xShift=m.x+outSetX;
                         let yShift=m.y+outSetY;
                         let xrShifted = m.xr+xShift;
                         let yrShifted = m.yr+yShift;
                         
                         star.push(
                                   
                                   nx,    ny,  depthINNER,
                                   xShift,    yShift,  depthINNER,
                                   xrShifted, yrShifted,  depthOUTER,
                                   nx, ny,  depthINNER,
                                   xrShifted, yrShifted,  depthOUTER,
                                   m.xr+nx, m.yr+ny,  depthOUTER,
                                   )
                         
                         
                     }
                     else break ;

                 }

             }
         }
             


else{//start drawing of just twenty four frets here
             maxTestar=.000000000000000001;
                             for (var g=0; g<24; g++) {
                                 if(testar[g]>maxTestar){maxTestar=testar[g];}
                                 if(testar[g]<minTestar)minTestar=testar[g];
                             }

            for (var g=0; g<24; g++) {
            var widt = starshipSize;
            var arm =(flip*g+twist)%24./24.*pi*2.;

            var lengt = (testar[(g+12)%24]-minTestar)/(maxTestar-minTestar);

                var vop = new THREE.Color();
                      vop.setHSL((20-g)%24/24.,1.,.5);

               // for(var yy=0;yy<1;yy++)
                    starColors.push(vop.r,vop.g,vop.b,0.,
                                    vop.r,vop.g,vop.b,0.,
                                    vop.r,vop.g,vop.b,1,
                                    vop.r,vop.g,vop.b,0,
                                    vop.r,vop.g,vop.b,1.,
                                    vop.r,vop.g,vop.b,1
                                    )


rpio2 =arm+pi/2.;
let x = widt*-Math.sin(rpio2);
let y = widt*-Math.cos(rpio2);
let xr = lengt*-Math.sin(arm);
let yr = lengt*-Math.cos(arm);
let depth = -1.+lengt;

star.push(

-x,    -y,  depth,
x,    y,  depth,
(xr+x), (yr+y),  depth,
-x, -y,  depth,
(xr+x), (yr+y),  depth,
(xr-x), (yr-y),  depth,
) ;

} }
      
         
         if(window.octaveStars)
         {
             fiveAndSeven();

         let maxFinger = 0
         let minFinger = 10000000000000000;
         for (var t=0; t<12; t++) {
             for (var g=0; g<10; g++) {
                 if (twelve[t][g]>maxFinger)maxFinger = twelve[t][g];
                 if (twelve[t][g]<minFinger)minFinger = twelve[t][g];

             }}
    
         for (var t=0; t<12; t++) {
             
             for (var g=0; g<10; g++) {
                 var widt = starshipSize**(2.41421);
                 var finger = twelve[t][g];
                 var arm =(g+9)/10.*pi*2.;
                 
                 var lengt = (finger-minFinger)/(maxFinger-minFinger)/1.5;
                 if(lengt>0){
                     var vop = new THREE.Color();
                     let BlackOrWhite;
                     let noteGrey = Math.abs(t-(6-twist/2.)+12)%12;
                     if (t==7||t==5||t==2||t==0||t==10)
                         if(uniforms.colorCombo.value!=20)
                         BlackOrWhite=-1.;
                     else BlackOrWhite =.5;
                     
                     else if( (noteGrey<.5 || noteGrey>11.5) &&starClover&&uniforms.colorCombo.value!=20)
                        BlackOrWhite=.5;
                    else
                         BlackOrWhite=1;
                     vop.setRGB(BlackOrWhite,BlackOrWhite,BlackOrWhite);
                     
                     for(var yy=0;yy<6;yy++)   starColors.push(vop.r,vop.g,vop.b,1.)

                     rpio2 =arm+pi/2.;
                     fingerTwist=(flip*(t-6)+twist/2.+12)/12.*2.*pi
                     let x = widt*-Math.sin(rpio2+fingerTwist+pi);
                     let y = widt*-Math.cos(rpio2+fingerTwist+pi);
                     let xr = pi/12.*lengt*-Math.sin(arm+fingerTwist+pi);
                     let yr = pi/12.*lengt*-Math.cos(arm+fingerTwist+pi);
                     let offsetX=-Math.sin(fingerTwist)/1.5;
                     let offsetY=-Math.cos(fingerTwist)/1.5;
                     let depth = -.98;//this depth should mean that half the trail is above and half below
                     
                     star.push(
                               
                               -x+offsetX,    -y+offsetY,  depth,
                               x+offsetX,    y+offsetY,  depth,
                               (xr+x)+offsetX, (yr+y)+offsetY,  depth,
                               -x+offsetX, -y+offsetY,  depth,
                               (xr+x)+offsetX, (yr+y)+offsetY,  depth,
                               (xr-x)+offsetX, (yr-y)+offsetY,  depth,
                               ) ;
                 }
             }
         }
                                  }
      /*https://www.youtube.com/watch?v=4SH_-YhN15A&list=WL&index=10&t=2328s  wouldn't this be cool with the equalizer starship, description of process at beginning of video
              const quaternion = new THREE.Quaternion();
              quaternion.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), Math.PI / 2 );
                                          for(var n=0.; n<star.length;n+=3){
                                          const a= new THREE.Vector3(star[n],star[n+1],star[n+2])
              const b = a.applyQuaternion(quaternion);
                                          star[n]=b.x;
                                          star[n+1]=b.y
                                          }
                    */
              geome = new THREE.BufferGeometry();

              geome.setAttribute( 'position', new THREE.Float32BufferAttribute( star, 3 ).onUpload( disposeArray ) );
                 geome.setAttribute( 'color', new THREE.Float32BufferAttribute( starColors, 4 ).onUpload( disposeArray ));
                  geome.computeBoundingBox();

                material= new THREE.MeshBasicMaterial({
                            opacity: 1.,
                          transparent: true,
                            vertexColors: true,
                           // side: THREE.DoubleSide
                        });

                 meshe = new THREE.Mesh(geome , material );
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         

                 var trail=[];
                 var trailColor=[];
                                  

let r = (f+trailDepth-1)%trailDepth;
let s = f;

let loopLimit = trailDepth;
//if(isFinite(cx[r-1])&&isFinite(cx[s])&&isFinite(cy[r-1])&&isFinite(cy[s]))
                 let scalar = 1.;


                             let     timeElapsedSinceRecording=     uniforms["time"].value-trailTimeOfRecording[r];
                                  let transparencyOfTrail = 1., z = -1;
                                  let transparencyOfTrailLast = 1, zlast = -1;
                                  
          while(loopLimit>0&&r!=f){
                 if(!trailSegmentExpired[r]&&timeElapsedSinceRecording<=trailSecondsLong){
                        // timeElapsedSinceRecording=  uniforms["time"].value-trailTimeOfRecording[r];
                            let zlast = z;
                            z = -1.+timeElapsedSinceRecording**2.*.33333;//*.33333 is three seconds long over star
                           if (z>=-.153)z=.153*(-1.+timeElapsedSinceRecording/trailSecondsLong);
                            transparencyOfTrailLast =transparencyOfTrail;
                            transparencyOfTrail =1.-timeElapsedSinceRecording/trailSecondsLong;
                         
                          trailColor.push(
                                          pitchCol[r].r,pitchCol[r].g,pitchCol[r].b,transparencyOfTrail,
                                          pitchCol[s].r,pitchCol[s].g,pitchCol[s].b,transparencyOfTrailLast,
                                          pitchCol[r].r,pitchCol[r].g,pitchCol[r].b,transparencyOfTrail,
                                          pitchCol[r].r,pitchCol[r].g,pitchCol[r].b,transparencyOfTrail,
                                          pitchCol[s].r,pitchCol[s].g,pitchCol[s].b,transparencyOfTrailLast,
                                          pitchCol[s].r,pitchCol[s].g,pitchCol[s].b,transparencyOfTrailLast
                                          )
                         let widtr = trailWidth[r];
                         let widts = trailWidth[s];
                         let widtXperpR=widtr*xPerp[r];
                         let widtYperpR=widtr*yPerp[r];
                         let widtXperpS=widts*xPerp[s];
                         let widtYperpS=widts*yPerp[s];
                         
                         let xrFinalNegatived = cx[r]-widtXperpR;
                         let xrFinalPositived = cx[r]+widtXperpR;
                         let xsFinalNegatived = cx[s]-widtXperpS;
                         let xsFinalPositived = cx[s]+widtXperpS;
                         
                         let yrFinalNegatived = cy[r]-widtYperpR;
                         let yrFinalPositived = cy[r]+widtYperpR;
                         let ysFinalNegatived = cy[s]-widtYperpS;
                         let ysFinalPositived = cy[s]+widtYperpS;

                         trail.push(

                                    xrFinalNegatived, yrFinalNegatived,z, //2//side far//far triangle
                                    xsFinalNegatived, ysFinalNegatived,zlast,  //1//side close
                                    xrFinalPositived, yrFinalPositived,z, //3//side far
                                    xrFinalPositived, yrFinalPositived,z,//3//side far//close triangle
                                    xsFinalNegatived, ysFinalNegatived,zlast,//1//side close
                                    xsFinalPositived, ysFinalPositived,zlast,//4//side close
                          );
            }
            else trailSegmentExpired[r] = true;
             s = r;
             r--;
             if(r<0)r+=trailDepth;
                         loopLimit--;
                         timeElapsedSinceRecording=     uniforms["time"].value-trailTimeOfRecording[r];
                         
         }






                 geomeTrail = new THREE.BufferGeometry();

                                            geomeTrail.setAttribute( 'position', new THREE.Float32BufferAttribute( trail, 3 ).onUpload( disposeArray ) );
                                            geomeTrail.setAttribute( 'color', new THREE.Float32BufferAttribute( trailColor, 4 ).onUpload( disposeArray ));
                                            geomeTrail.computeBoundingBox();


                materialTrail= new THREE.MeshBasicMaterial({
                               opacity: 1.,
                             transparent: true,
                               vertexColors: true,
                              // side: THREE.DoubleSide
                           });

                    meshTrail = new THREE.Mesh(geomeTrail , materialTrail );

if(isFinite(d_x)&&isFinite(d_y)&&on) {
circleX-=xAdjusted;//xadjusted should mean this moves with the same screen scale as the trail
circleY-=yAdjusted;
       }

if (circleX>width)circleX=-width;
else if (circleX<-width)circleX=width;
if (circleY>height)circleY=-height;
else if (circleY<-height)circleY=height;

                                  dotSize=starshipSize;
circleGeometry = new THREE.CircleGeometry( dotSize, Math.round((Math.abs((noteNumber+.5)%1.-.5))*12.)%12+2.,1 );//
//circleGeometry.computeBoundingBox ();
circleMaterial = new THREE.MeshBasicMaterial( { color: colorSound} );

circle = new THREE.Mesh( circleGeometry, circleMaterial );
circle.position.set(circleX,circleY,-1.);
                                  circle.rotateZ(pitch);

                   let colorBlack= new THREE.Color();
                   colorBlack.setStyle("black");


                   let centerOfDotToEdge = [];
                   centerOfDotToEdge.push( new THREE.Vector3(circleX-Math.sin(-angle)*dotSize*volume, circleY-Math.cos(-angle)*dotSize*volume, -1. ) );
                   centerOfDotToEdge.push( new THREE.Vector3(circleX,circleY,-1.) );


                   let radialMaterial=  new THREE.MeshBasicMaterial( { color: colorBlack});
                                  
                   let radialLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints( centerOfDotToEdge ), radialMaterial );
                                  if(isFinite(circleX)&&isFinite(circleY))radialLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints( centerOfDotToEdge ), radialMaterial );




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


for(let n = 0; n < polygons.length; n++)
{
    let xFromCent = polygons[n].centerX;
    let yFromCent = polygons[n].centerY;

                if (xFromCent>width)polygons[n].centerX = -width;
                else if (xFromCent<-width)polygons[n].centerX = width;
                if (yFromCent>height)polygons[n].centerY = -height;
                else if  (yFromCent<-height)polygons[n].centerY = height;


        let angleTarget = Math.atan2(yFromCent,xFromCent);
        let baseMag=(1.-(metaLevel-level)/(metaLevel))/2.;
        let speed = Math.sqrt(polygons[n].dx*polygons[n].dx+polygons[n].dy*polygons[n].dy)
        let speedLimit = 1.;

                         let distanceFromCenter = Math.pow(xFromCent*xFromCent+yFromCent*yFromCent,.5);

                       // polygons[n].dx*=1.-baseMag;//resistance to speed accumulation
                        // polygons[n].dy*=1.-baseMag;


        if (distanceFromCenter<=1.)
        {
            polygons[n].dx+=-Math.cos(angleTarget)*interpolation*baseMag/60.;
            polygons[n].dy+=-Math.sin(angleTarget)*interpolation*baseMag/60.;
        }
                         
var neutralizer=1.;
if (!on)neutralizer=0.;
                polygons[n].centerX += (d_x*neutralizer-polygons[n].dx)*MR;
                polygons[n].centerY += (d_y*neutralizer-polygons[n].dy)*MR;

    let ddX= circleX-polygons[n].centerX;
    let ddY= circleY-polygons[n].centerY;
    let distDot = Math.sqrt(ddX*ddX+ddY*ddY);


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
scene.add( targets[n] );
}


if (on)scene.add(line);
scene.add(meshe);
scene.add( circle );
scene.add(radialLine);
scene.add(meshTrail)

                                  
                                  
   if(window.starClover&&!(touchMode||touchOnlyMode))
                     {
            if(window.blankBackground) shaderScene.background = new THREE.Color( 0x808080);
            else  scene.background = null;
            
            renderer.setRenderTarget (renderTarget)
                
                
                
                
                
                renderer.render( scene, camera );
            
            //begin the feedback of the starRivers of eden
                    if( uniforms.eden.value>=1.)
                    {

                                                var firStaRivers =  true;
                                                FEEDBACKuniforms.STAR.value=renderTarget.texture;

                            FEEDBACKuniforms.eden.value=uniforms.eden.value;
                        
                        if(uniforms.eden.value==4)
                        {
                            
                            vectorize4();
                            FEEDBACKuniforms.loudestFret1.value=[loudestFret[0].x,loudestFret[0].y];
                            FEEDBACKuniforms.loudestFret2.value=[loudestFret[1].x,loudestFret[1].y];
                            FEEDBACKuniforms.loudestFret3.value=[loudestFret[2].x,loudestFret[2].y];
                            FEEDBACKuniforms.loudestFret4.value=[loudestFret[3].x,loudestFret[3].y];
                            
                            FEEDBACKuniforms.volumeFret1.value=loudestFret[0].volume/maxTestar;
                            FEEDBACKuniforms.volumeFret2.value=loudestFret[1].volume/maxTestar;
                            FEEDBACKuniforms.volumeFret3.value=loudestFret[2].volume/maxTestar;
                            FEEDBACKuniforms.volumeFret4.value=loudestFret[3].volume/maxTestar;
                              }
                        else
                        {FEEDBACKuniforms.loudestFret1.value=[0,0];
                            FEEDBACKuniforms.loudestFret2.value=[0,0];
                            FEEDBACKuniforms.loudestFret3.value=[0,0];
                            FEEDBACKuniforms.loudestFret4.value=[0,0];
                            
                            FEEDBACKuniforms.volumeFret1.value=0;
                            FEEDBACKuniforms.volumeFret2.value=0;
                            FEEDBACKuniforms.volumeFret3.value=0;
                            FEEDBACKuniforms.volumeFret4.value=0;
                            }
                        FEEDBACKuniformsFlip=Object.assign({},FEEDBACKuniforms)
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
            
            uniforms.STAR.value=renderTarget.texture;
        
             renderer.setRenderTarget (null)
            //  uniforms.STAR.value=renderTarget.texture;


            shaderScene.add( mesh );
             renderer.render( shaderScene, camera )
             shaderScene.remove( mesh );
     }
          else{
            
                 uniforms.STAR.value=null;
                 renderer.setRenderTarget (null);
                    if(!window.blankBackground) {
                        scene.background = null;
                        scene.add( mesh );
                    }
                    else   scene.background = new THREE.Color( 0x808080);
        renderer.render( scene, camera );
            if(!window.blankBackground)scene.remove(mesh);
             }
                          
                                  
                                  

scene.remove( circle );
circleGeometry.dispose();
circleMaterial.dispose();
circle.geometry.dispose();
scene.remove(radialLine);
radialMaterial.dispose();
radialLine.geometry.dispose( );

for(var n = 0; n<targets.length;n++){
  scene.remove( targets[n] );
  pG[n].dispose();
  pM[n].dispose();
  targets[n].geometry.dispose();
}
     if(on){
            scene.remove(line);
            line.geometry.dispose( );
        }
                 scene.remove(meshe);
                 scene.remove(meshTrail);

                                            geome.dispose();
                                            material.dispose();
                                            geomeTrail.dispose();
                                            materialTrail.dispose();
                                                                                                                                        
                     }}else {//begin touch frame
            
            if(!zoomAtl41)
                {
                  lastZoom = zoom;
                  zoomRoutine();
                    infinicore();

                }
                else lastZoom=zoom/zoomRate();
                        var d = pixelShaderSize/2.;//this is the frame size in the shader: "p=vec2(...."

                    if(pointerZoom){
                        let xTouch = screenPressCoordX/(Math.min(uniforms.resolution.value.x,uniforms.resolution.value.y)/d);
                        let yTouch = screenPressCoordY/(Math.min(uniforms.resolution.value.x,uniforms.resolution.value.y)/d);
                         var touchMovement = [-Math.abs(zoom-lastZoom)*xTouch, Math.abs(zoom-lastZoom)*yTouch];
                        uniforms.d.value.x=-xTouch;
                        uniforms.d.value.y=yTouch;
                        uniforms[ "volume" ].value=1.;
                        let spunTouch=touchMovement;
                              if(uniforms.carousel.value!=0.)         spunTouch=spin(touchMovement,-uniforms.carousel.value*(uniforms[ "time" ].value*uniforms[ "rate" ].value+Math.PI)%(Math.PI*2.));
                                  coordX+= spunTouch[0];
                                  coordY+= spunTouch[1];
                      }

                      uniforms[ "zoom" ].value = zoom;
                      uniforms.coords.value.x = coordX;
                      uniforms.coords.value.y = coordY;
                        
            uniforms.STAR.value=null;
            uniforms.EDEN.value=null;

                                     shaderScene.add( mesh );
                    renderer.render( shaderScene, camera );
                                     shaderScene.remove( mesh );

                        
                if(textON)document.getElementById("textWindow").innerHTML =
                    "<div sytle='font-size: 16px;'>"+
                    "cores:"+(Math.floor(uniforms["centralCores"].value)+
                    cloverSuperCores*singleHyperCoreDepth+uniforms.upCoreCycler.value)+
                    ", zoom: "+(zoom/2.**(singleHyperCoreDepth*cloverSuperCores))+"<p style='margin : 0px'></p>"+
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
                  &&  (Math.round(noteNumber)%12 ==noteOfScore && on
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
let fractionOfFrame = Math.floor(bufferSize/2.);
let tolerance; //, confidence;
const yinData = Array(fractionOfFrame);

function calculatePitch ()
{
if(highORlow==1)tolerance=totalAMP-(1./bufferSize)**1.5//works well for smoothly and quickly determining sung notes especially low ones
else if (highORlow==2)tolerance = .49;//when I play different notes on harmonica it mostly hears C, this clears up the distinction of the notes
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

let j, pos = 0;
let tmp = d[0];
for (j = 0; j < fractionOfFrame; j++)
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
x2 = (pos + 1 < bufferSize) ? pos + 1 : pos;
if (x0 == pos) return (d[pos] <= d[x2]) ? pos : x2;
if (x2 == pos) return (d[pos] <= d[x0]) ? pos : x0;
s0 = d[x0];
s1 = d[pos];
s2 = d[x2];
return pos + 0.5 * (s0 - s2 ) / (s0 - 2.* s1 + s2);
}
//end MIT license
