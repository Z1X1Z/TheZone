function stallTillTHREE(){

    if(typeof THREE=="object"&& document.visibilityState=="visible"){


        init();
    }else setTimeout(stallTillTHREE,10);}//setTimeout waits for 10ms then runs stallTillTHREE();
stallTillTHREE();//this is a lurker. it waits for the three.js loader to resolve to a loaded library, then initializes the game.
//document.head.addEventListener('beforeunload', event => { cancelAnimationFrame();});
let screenPressCoordX, screenPressCoordY;
window.pointerZoom=false;
let zoom=1., coordX=0., coordY=0.;
if(!("shaderOn" in window))window.shaderOn=true;
if(!("spiroRainbow" in window))window.spiroRainbow = false;
window.movementRate=2.;
window.touchMode=false;
window.volumeSpeed = false;

let zoomFrames = 60;//frames to double zoom
let ZR = Math.E**(Math.log(.5)/zoomFrames);
                  const mf = 1.;
const MR = mf/zoomFrames;
window.zoomCageSize = 1.5;//radius of zoom bounding
                  window.uniformsLoaded=false;
window.gameOn=false;
zoomOutRatchetThreshold=1.5/255.;
let radius = 1.;
var rez=1.;
let fftSize=2048;
let trailLength = 576;
let colorSound;
let center = false;
                  let geome;
                  let geomeTrail;
                  let meshe;
                  let materialTrail;

      let mobile = false;

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
       }


//key press handling vvvv
var pointed=false;
let zoomAtl41=false;//watch for the 1 and the l
var rez = window.devicePixelRatio*rez;


                  var framesLong;
                  let computeFPS=false;


            function disposeArray() {

                                this.array = null;

                            }
            let container = document.getElementById( 'container' );


var zoomOutEngage=false;
let pi = Math.PI;
let inputData;
let dataArray;
let bufferSize = fftSize;
let numberOfBins = fftSize/2.;
let spirray0 = new Float32Array(bufferSize);
let spirray1 = new Float32Array(bufferSize);
const starArms = numberOfBins;
var testar = Array(starArms);
var mustarD = Array(starArms);
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
    for(var t=0; t<inputData.length;t++) if(inputData[t]>maxSamp)maxSamp=inputData[t];
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
      for(let j = 0; j<inputData.length-24; j++)
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
    for(let t=1; t<numberOfBins; t+=1)
    {
    let n =t;
    //if ( z[n]>z[n-1] && z[n] > z[n+1] ){
    let   d = (z[n+1]-z[n-1])/(z[n-1]+z[n+1]);
    let nAdj = n + d*4 ;
    //if (Math.abs(nAdj-n) < 10)
    if (Math.abs(d)<4+1)freq =((( audioX.sampleRate)*(nAdj))/numberOfBins);

    let g = Math.pow ( 2, (1/24.));
    let aa = freq/440.0;
    let note = Math.log(aa)/Math.log(g)+69*2;
    if (!onO)testar[(Math.round(note))%24] += Math.abs(z[n]);
    else{
      testar[n] = Math.abs(z[n]);
      mustarD[n] = note;
    }
  }
};

let trail = Array(1000);
let cx = Array(1000);
let cy = Array(1000);
let trailWidth = Array(1000);
let pitchCol = Array(trailWidth.length);
let trailLoaded = false;
let trailDepth = -1;
let d_x=0,d_y=0;
let circleX=0.,circleY=0.;
let circleGeometry,circleMaterial,circle;
let dotSize = .112;
let f = 0;

let xPerp= Array(1000);
let yPerp = Array(1000);

let pitch = 1;

let reset = 6;
let on;
let spirafreq=1;
var totalAMP;
var angle;
                           function spin(f, t)
                           {    //https://en.wikipedia.org/wiki/Rotation_matrix
                               var angle =t;
                               var fxb=f[0];
                               f[0]=f[0]*-Math.cos(-angle)-f[1]*-Math.sin(-angle);
                            f[1]=fxb*-Math.sin(-angle)+f[1]*-Math.cos(-angle);
                            return f;
                           }

let pitchFound;
                           let xAdjusted, yAdjusted;
function  move()
{
    if (isNaN(coordX)||(!zoomAtl41&&coordX>4.))coordX=0.;
    if (isNaN(coordY)||(!zoomAtl41&&coordY>4.))coordY=0.;

  if (!trailLoaded) {trailLoaded = true;
      for(var n = 0; n<trailLength; n++)
        {xPerp[n]=0;yPerp[n]=0;cx[n]=0;cy[n]=0;trailWidth[n]=1.;pitchCol[n]  = new THREE.Color()
        }
  }
    pitch=1;
    var pb = -1;

    totalAMP = 0.;
    for(var n=0; n<inputData.length-1;n++)totalAMP+=Math.abs(inputData[n+1]-inputData[n]);
    totalAMP*=audioX.sampleRate/inputData.length/255;

if (totalAMP>zoomOutRatchetThreshold||on)
  pb =    calculatePitch();
  if(pb>0) pb =audioX.sampleRate/pb;
on = true;
if (isFinite(pb) &&pb>0&& Math.abs(pb-audioX.sampleRate/numberOfBins/2.)>1. &&pb!=-1&&totalAMP>zoomOutRatchetThreshold) { pitch =pb;reset =0;}
else if (reset>3||pitch==1){on = false;
}
else reset++



    if(pitch!=1){lastPitch = pitch;pitchFound=true;}//here we update lastPitch but only if!
    else pitchFound=false;

    pitch=lastPitch;

let note = Math.log(Math.sqrt(pitch)/440.0)/Math.log(Math.pow ( 2, (1/24.0)))+49;
let inc = 8.25 ;
let t =  (note * 30+30*inc);
angle = t%360;
angle = -angle;

colorSound = new THREE.Color();
             //          colorSound.setHSL((angle+90)/360.,(180+note)/297,(180+note)/297);

    colorSound.setHSL((angle+90)/360.,1.,.5);

pitchCol[f]  = colorSound;
angle = ((angle-30+180)/360*2*pi);

         d_x = -Math.sin(-angle)*volume*window.movementRate;
         d_y = -Math.cos(-angle)*volume*window.movementRate;
         var spunD = [d_x,d_y];

                    if(uniforms.carousel.value!=0.)         spunD=spin(spunD,uniforms.carousel.value*(uniforms[ "time" ].value*uniforms[ "rate" ].value)%(Math.PI*2.));
          let d_xS=spunD[0];
          let d_yS=spunD[1];


    bx=coordX+d_xS*MR*zoom*interpolation;
  by=coordY+d_yS*MR*zoom*interpolation;
if(isFinite(d_x)&&isFinite(d_y)&&totalAMP>zoomOutRatchetThreshold&&on){

               coordX=bx;
               coordY=by;
           }
if(Math.sqrt(by*by+bx*bx)>=window.zoomCageSize){//adjust back in if too far from the cener
               if (Math.abs(by)>Math.sqrt(window.zoomCageSize))coordY*=1.-(Math.abs(by)-window.zoomCageSize)/35.;
               if (Math.abs(bx)>Math.sqrt(window.zoomCageSize))coordX*=1.-(Math.abs(bx)-window.zoomCageSize)/35.;
  }

         if(Math.sqrt(coordY*coordY+coordX*coordX)>zoomCageSize*4./3.){coordX=0;coordY=0;}//teleport to center if too far from the center




            if (trailDepth<trailLength)trailDepth++;

xPerp[f-1] = -Math.sin(-angle+pi/2)*radius*volume*window.movementRate*.5;
yPerp[f-1] = -Math.cos(-angle+pi/2)*radius*volume*window.movementRate*.5;
                     trailWidth[f-1]=1.;//has to be 1 for trail drawing algorithms
f++;//this is the primary drive chain for the trail. it should be a global
if (f>=trailDepth)f=0;
 xAdjusted= d_x*interpolation*MR*2./3.
 yAdjusted= d_y*interpolation*MR*2./3.
if(isFinite(d_x)&&isFinite(d_y)&&on)for(let n = 0; n < trailDepth; n++) {

    cx[n] += xAdjusted;//this is accumulating the length of a trail segment//12 is hopefully based on the size of seven clovers.  Grip is elusive!!!!
    cy[n] += yAdjusted;// two thirds seems to fit it to seven clovers neatly on "L"
trailWidth[n] *= Math.pow(.997,interpolation);
}

                     cx[(trailDepth+f-1)%trailDepth] = 0;
                     cy[(trailDepth+f-1)%trailDepth] = 0;
                       trailWidth[(trailDepth+f-1)%trailDepth]=1.;
}


let material;
    let camera, renderer;
let mesh;
let analyser;
let source;
let materials;
let materialShader;
let geometry;



let geometryP;
let uniforms;
                     let scene;

                     var minimumDimension=1;
                     var height,width;
function init() {
    scene = new THREE.Scene();


    inputData = new Float32Array(bufferSize);

        renderer = new THREE.WebGLRenderer();


  uniforms = THREE.UniformsUtils.merge([
  THREE.UniformsLib.lights,
    {
      micIn : {  value: null }, // float array (vec3)
      time: {value: 1.0 },
  rate: {value: 1. },

      zoom: {value: 1.0 },
      colorCombo: {value: 1 },
        free: {value: false },
        MetaCored: {value: true },
        externalCores: {value: 0. },
        centralCores: {value: 0. },

        morph: {value: 0.0 },

      fourCreats: {value: 1 },
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
      resolution: {value: new THREE.Vector2() },
      coords: {value: new THREE.Vector2() },
Clovoid:{value:false}
    }
  ]);
  uniforms.resolution.value.x = window.innerWidth;
  uniforms.resolution.value.y = window.innerHeight;
  uniforms.coords.value.x = coordX;
  uniforms.coords.value.y = coordY;
    window.uniformsLoaded=true;
  if(window.shaderOn)
      materialShader = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent
      } );






  renderer = new THREE.WebGLRenderer();
      geometryP = new THREE.PlaneGeometry( 2, 2 );
      geometryP.z=-1.;




      if(window.shaderOn){
            mesh = new THREE.Mesh( geometryP, materialShader );
            scene.add( mesh );
        }
        else{
           window.gameOn=true;
           scene.background = new THREE.Color( 0x808080);
         }

  renderer.setPixelRatio( rez);


    if(location.hash.includes("t"))
  {
    touchOnlyMode=true;
    document.getElementById( "background_wrap").style = "position: unset;";//turn off splash!
    container.appendChild( renderer.domElement );//engage THREEJS visual out
    animate();
  }
    else startMic();

    onWindowResize()
}
function adjustThreeJSWindow()
{
         let correlationForText = document.getElementById("allText").offsetHeight;
         correlationForText+=document.getElementById("score").offsetHeight;


         height=window.innerHeight-correlationForText;
         width=window.innerWidth;

         uniforms.resolution.value.x = width;
         uniforms.resolution.value.y = height;

      minimumDimension = Math.min(width,height);

      height/=minimumDimension;
      width/=minimumDimension;

  renderer.setSize( uniforms.resolution.value.x, uniforms.resolution.value.y);
  camera = new THREE.OrthographicCamera( -width, width, height, -height, 1, -1);


}
window.addEventListener( 'resize', onWindowResize, false );

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
            let point = [];

            let textON=false;
            let lastTime=0.;
            let ticker = 0;
            let FPS=0.;

                  const interval = 200;
                  let elapsedTimeBetweenFrames = 0.;
                  let lastPitch = 1;

                  let lastFrameTime=-1.;
                  let interpolation=1.;
                  let finalAverageAmp=1.;
                  let averageFrameTotalAmp = [];
                  function zoomRate(){
                    return Math.E**(Math.log(.5)/zoomFrames*window.movementRate*interpolation*(Math.sqrt(volume)/2.+.5));//the square root of volume is to make it grow slower than in d_xy
                  }
function zoomRoutine(){  let zoomCone=.000001*Math.sqrt(coordX*coordX+coordY*coordY);
                     if(uniforms[ "colorCombo" ].value==16)zoomCone/=1.33333333/2.;

                   ZR = zoomRate();
                   if(!zoomOutEngage){
                     if ((zoom>zoomCone && totalAMP>zoomOutRatchetThreshold&&on)||window.pointerZoom)zoom *=ZR;
                     else if(zoom<1.){zoom /= ZR;
                     if(center){coordX*=(1-zoom)*ZR*2./3.; coordY*=(1-zoom)*ZR*2./3.;}
                     }
                   }
                     if (zoom>1.)zoom=1.;
                     if (zoom>=1.)zoomOutEngage = false;
                      else if ( zoom<zoomCone||zoom<.000000000000000000000001)zoomOutEngage = true;
                         if (zoomOutEngage == true){
                            zoom *= 1.44/ZR;
                        }

                          if(zoom<.0000000000000000000000001)zoom = 1.;

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
let scoreColorInversion = false;
function takeNextScoreSlice(start){
                    window.osmd.setOptions({
                      drawFromMeasureNumber: start,
                      drawUpToMeasureNumber:start+Math.floor(window.innerWidth/window.innerHeight*2.)
                      }) // requires re-render
}
function animate( timestamp ) {
adjustThreeJSWindow();//mostly for ios here







    uniforms[ "time" ].value = Math.fround(timestamp/1000.);





if (uniforms["MetaCored"].value){
    uniforms[ "centralCores" ].value = Math.log(zoom)/Math.log(.5)+1;
    uniforms[ "externalCores" ].value =uniforms[ "centralCores" ].value*2./3.+Math.log(Math.sqrt(coordX*coordX+coordY*coordY))*0.9551195;
  }



                                                              if(document.visibilityState=="hidden"||lvs=="hidden")lastFrameTime=timestamp;
                                                              lvs=document.visibilityState
                                                              interpolation = (timestamp-lastFrameTime)/1000.*60.;
                                                              lastFrameTime=timestamp;
if(!window.touchMode)pointerZoom=false;
else on=false;
if( !window.touchMode&&!touchOnlyMode) {

  analyser.getFloatTimeDomainData(inputData); // fill the Float32Array with data returned from getFloatTimeDomainData()
           if(window.volumeSpeed)
           {
                           volume = 0.;
                           for(var n=0; n<inputData.length-1;n++)volume+=Math.abs(inputData[n+1]-inputData[n]);
                           volume*=audioX.sampleRate/inputData.length/255;

               volume*=2.;
                       }
                else volume=1.;

                                                              spiral_compress();
                           move();
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
     noteNumber =  Math.log(lastPitch/440)/Math.log(Math.pow ( 2, (1/12.0)))+49;
    if(Math.round(noteNumber) ==-854)noteNumber="undefined";
    let noteNameNumber=Math.floor(Math.round(noteNumber))%12;
    let hour =Math.floor(Math.floor(noteNumber))%12;
    if (hour==0)hour = 12;
    let minute =(noteNumber-Math.floor(noteNumber))*60;
    let second =(minute-Math.floor(minute))*60
    let timeOfTheSound  =  Math.floor(hour)+":"+Math.floor(minute)+":"+Math.floor(second);
    let notes = ["G#","A","A#","B", "C","C#","D","D#","E","F","F#","G"];

              elapsedTimeBetweenFrames = (timestamp-lastTime);
              if(elapsedTimeBetweenFrames>interval){FPS=ticker/elapsedTimeBetweenFrames*1000.; ticker=0.;lastTime = timestamp;};
                  ticker++;




     let note = notes[noteNameNumber];
     let cents = Math.round((noteNumber-Math.round(noteNumber))*100);
     let fr = Math.round(pitch);
     let n_n = Math.round(noteNumber);
     let cores = Math.floor(uniforms["centralCores"].value);
      if(textON)document.getElementById("textWindow").innerHTML =
"<div sytle='font-size: 16px;'>"+

                                " note: "+note+", cents: "+cents+", freq: "+fr+"<p style='margin : 0px'></p>"+
                                "note number: "+n_n+", time: "+timeOfTheSound+"<p style='margin : 0px'></p>"+
                                "cores: "+cores+", zoom: "+zoom+"<p style='margin : 0px'></p>"+                // style='margin : 0px'
                                "InOutThresh: "+zoomOutRatchetThreshold+"<p style='margin : 0px'></p>"+
                                "AMP: "+totalAMP+"<p style='margin : 0px'></p>"+
                                "pitch found: "+pitchFound+", FPS: "+Math.round(FPS)+"<p style='margin : 0px'></p>"
                            //+"<p style='margin : 0px'></p>"+"X: "+String(-coordX)+" Y: "+String(-coordY);
+"</div>";
      else document.getElementById("textWindow").innerHTML = "";








  let lineMat =
  new THREE.LineBasicMaterial( {
        color: 0xffffff,
        opacity: .5,
        linewidth: 2,
        linecap: 'round', //ignored by WebGLRenderer
        linejoin:  'round' //ignored by WebGLRenderer
  } );
  if (uniforms[ "metronome" ].value>1.)
    lineMat.color = new THREE.Color(-Math.sin(uniforms[ "time" ].value*uniforms[ "metronome" ].value))
  if(onO||window.spiroRainbow)
  {
    lineMat.color = colorSound;
    lineMat.opacity = 1.; //opacity has no effect
  }

  let depth = -.97;
  if (on)for (let r= 0; r < bufferSize; r ++) {
    let tx = spirray0[r]/spiregulator;
    let ty =  spirray1[r]/spiregulator;
    point[r]=new THREE.Vector3( tx, ty, depth );
  }
  const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints( point ), lineMat );

  if (on)scene.add(line);


if(!zoomAtl41)zoomRoutine();//  zoomAtl41 is zoom freeze
  uniforms[ "time2dance" ].value += totalAMP;



              uniforms[ "zoom" ].value = zoom;
              uniforms.coords.value.x = coordX;
              uniforms.coords.value.y = coordY;

  if (micOn)analyser.getByteFrequencyData(  dataArray);

   var maxTestar=0.;
   var minTestar=100000000000000;

   var star=[];
   const starColors=[];
if(!window.touchMode){
   if(onO){
    for (var g=0; g<starArms; g++) if(testar[g]>maxTestar) maxTestar=testar[g];
      for (var g=0; g<starArms; g++) if(testar[g]<minTestar) minTestar=testar[g];

    for (var g=0; g<starArms; g++)if(isFinite(testar[g])&&testar[g]!=0.&&isFinite(mustarD[g])&&mustarD[g]!=0.) {
        var widt = .02;
        var arm =(mustarD[g]+20)%24./24.*pi*2.;
        var lengt = (testar[g]-minTestar)/(maxTestar-minTestar);

        var vop = new THREE.Color();
       vop.setHSL(-mustarD[g]%24./24., mustarD[g]/297.,mustarD[g]/297.);//297 is the highest heard note
        material = new THREE.MeshBasicMaterial({
        color:vop,
        opacity: 1.,
        transparent: true,
      });

                  for(var yy=0;yy<6;yy++)   starColors.push(vop.r,vop.g,vop.b,1.)

            rpio2 =arm+pi/2.;
            let x = widt*-Math.sin(rpio2);
            let y = widt*-Math.cos(rpio2);
            let xr = lengt*-Math.sin(arm);
            let yr = lengt*-Math.cos(arm);
    let depth = -1.+lengt;//this depth should draw the back around the middle up towards the top.

     star.push(

       -x,    -y,  depth,
        x,    y,  depth,
        (xr+x), (yr+y),  depth,
        -x, -y,  depth,
        (xr+x), (yr+y),  depth,
        (xr-x), (yr-y),  depth,
    ) ;

/*
      0-widt*-Math.sin(rpio2),    0-widt*-Math.cos(rpio2),  -0.05,
      (lengt*-Math.sin(yy)+widt*-Math.sin(rpio2)),
      (lengt*-Math.cos(yy)+widt*-Math.cos(rpio2)),  -0.05,
      (lengt*-Math.sin(yy)-widt*-Math.sin(rpio2)),
      (lengt*-Math.cos(yy)-widt*-Math.cos(rpio2)),  -0.05,
      */
    // itemSize = 3 because there are 3 values (components) per vertex

        }

}
else{//start drawing of just twenty four frets here
            var maxTestar=1.;
            for (var g=0; g<24; g++) if(testar[g]>maxTestar){maxTestar=testar[g];}
           for (var g=0; g<24; g++) if(testar[g]<minTestar)minTestar=testar[g];

            for (var g=0; g<24; g++) {
            var widt = .02;

            var lengt = (testar[(g+4)%24]-minTestar)/(maxTestar-minTestar);

                var vop = new THREE.Color();
                      vop.setHSL((20-g)%24/24.,1.,.5);

                             for(var yy=0;yy<6;yy++)   starColors.push(vop.r,vop.g,vop.b,1.)


var vertices;
var z = -.99;
             star.push(
                0-widt*-Math.sin(g*pi*2./24+pi/2.),    0-widt*-Math.cos(g*pi*2./24+pi/2.), z,
                0+widt*-Math.sin(g*pi*2./24+pi/2.),    0+widt*-Math.cos(g*pi*2./24+pi/2.),  z,
                (lengt*-Math.sin(g*pi*2./24)+widt*-Math.sin(g*pi*2./24+pi/2.)),
                (lengt*-Math.cos(g*pi*2./24)+widt*-Math.cos(g*pi*2./24+pi/2.)),  z,
                0-widt*-Math.sin(g*pi*2./24+pi/2.),    0-widt*-Math.cos(g*pi*2./24+pi/2.),  z,
                (lengt*-Math.sin(g*pi*2./24)+widt*-Math.sin(g*pi*2./24+pi/2.)),
                (lengt*-Math.cos(g*pi*2./24)+widt*-Math.cos(g*pi*2./24+pi/2.)),  z,
                (lengt*-Math.sin(g*pi*2./24)-widt*-Math.sin(g*pi*2./24+pi/2.)),
                (lengt*-Math.cos(g*pi*2./24)-widt*-Math.cos(g*pi*2./24+pi/2.)),  z,
                    );
} }
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

                  var  opac=1.;
                  if(onO)opac=.3+.7/uniforms[ "metronome" ].value
                   material= new THREE.MeshBasicMaterial({
                               opacity: opac,
                             transparent: true,
                               vertexColors: true,
                              // side: THREE.DoubleSide
                           });

                    meshe = new THREE.Mesh(geome , material );

                   scene.add(meshe);
                 var trail=[];
                 var trailColor=[];

let r = (f+trailDepth-2)%trailDepth;
let s = (f+trailDepth-1)%trailDepth;

let loopLimit = trailDepth;
//if(isFinite(cx[r-1])&&isFinite(cx[s])&&isFinite(cy[r-1])&&isFinite(cy[s]))
                 let scalar = 1.;



while(loopLimit>0&&r!=f){


  let widtr = (1.-trailWidth[r]);
  let widts = (1.-trailWidth[s]);
  let tt = 0.;
  var z = -1.+(trailDepth-loopLimit)/trailDepth;
                          let transparencyOfTrail=.75*(1.-(trailDepth-loopLimit)/trailDepth);
                          trailColor.push(

                                          pitchCol[r].r,pitchCol[r].g,pitchCol[r].b,transparencyOfTrail,
                                          pitchCol[s].r,pitchCol[s].g,pitchCol[s].b,transparencyOfTrail,
                                           pitchCol[r].r,pitchCol[r].g,pitchCol[r].b,transparencyOfTrail,
                                                                                      pitchCol[r].r,pitchCol[r].g,pitchCol[r].b,transparencyOfTrail,

                                                                                      pitchCol[s].r,pitchCol[s].g,pitchCol[s].b,transparencyOfTrail,
                                                                                                                                 pitchCol[s].r,pitchCol[s].g,pitchCol[s].b,transparencyOfTrail
                    )

 trail.push(

            cx[r]-widtr*xPerp[r], cy[r]-widtr*yPerp[r],z, //2//side far//far triangle
            cx[s]-widts*xPerp[s], cy[s]-widts*yPerp[s],z,  //1//side close
            cx[r]+widtr*xPerp[r], cy[r]+widtr*yPerp[r],z, //3//side far

    cx[r]+widtr*xPerp[r], cy[r]+widtr*yPerp[r],z,//3//side far//close triangle
    cx[s]-widts*xPerp[s], cy[s]-widts*yPerp[s],z,//1//side close
    cx[s]+widts*xPerp[s], cy[s]+widts*yPerp[s],z,//4//side close
  );

  s = r;
  r--;
  if(r< 0)r+=trailDepth;
              loopLimit--;

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
scene.add(meshTrail)

if(isFinite(d_x)&&isFinite(d_y)&&on) {
circleX-=xAdjusted;//xadjusted should mean this moves with the same screen scale as the trail
circleY-=yAdjusted;
       }

if (circleX>width)circleX=-width;
else if (circleX<-width)circleX=width;
if (circleY>height)circleY=-height;
else if (circleY<-height)circleY=height;


circleGeometry = new THREE.CircleGeometry( dotSize, 32,1 );
//circleGeometry.computeBoundingBox ();
circleMaterial = new THREE.MeshBasicMaterial( { color: colorSound} );

circle = new THREE.Mesh( circleGeometry, circleMaterial );
circle.position.set(circleX,circleY,-1.);
scene.add( circle );

                   let colorBlack= new THREE.Color();
                   colorBlack.setStyle("black");



                   let centerOfDotToEdge = [];
                   centerOfDotToEdge.push( new THREE.Vector3(circleX+-Math.sin(-angle)*dotSize*volume, circleY+-Math.cos(-angle)*dotSize*volume, -1. ) );
                   centerOfDotToEdge.push( new THREE.Vector3(circleX,circleY,-1.) );


                   let radialMaterial=  new THREE.MeshBasicMaterial( { color: colorBlack});

                   const radialLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints( centerOfDotToEdge ), radialMaterial );

scene.add(radialLine);




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
        let baseMag=level;
        let speed = Math.sqrt(polygons[n].dx*polygons[n].dx+polygons[n].dy*polygons[n].dy)
        let speedLimit = 1.;




        polygons[n].dx*=Math.pow(.999,interpolation);//resistance to speed accumulation
        polygons[n].dy*=Math.pow(.999,interpolation);

        if (speed<=speedLimit)
        {
            polygons[n].dx+=baseMag*-Math.cos(angleTarget);
            polygons[n].dy+=baseMag*-Math.sin(angleTarget);
        }
var neutralizer=1.;
if (!on)neutralizer=0.;
                polygons[n].centerX += (6.*d_x*neutralizer-polygons[n].dx)*interpolation/minimumDimension;
                polygons[n].centerY += (6.*d_y*neutralizer-polygons[n].dy)*interpolation/minimumDimension;

    let distanceFromCenter = Math.pow(xFromCent*xFromCent+yFromCent*yFromCent,.5);
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



renderer.render( scene, camera );

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

  scene.remove(line);
  line.geometry.dispose( );

                 scene.remove(meshe);
                 scene.remove(meshTrail);

                                            geome.dispose();
                                            material.dispose();
                                            geomeTrail.dispose();
                                            materialTrail.dispose();
                                                                                                                                         }}
else {//begin touch frame

if(!zoomAtl41)
    {
      lastZoom = zoom
      zoomRoutine();
    }
    else lastZoom=zoom/zoomRate();
            var d = 3.;//this is the frame size in the shader: "p=vec2(...."
            if(uniforms.colorCombo.value==15&&window.mandelbrot) d = 10.;//for zonex.html
        if(pointerZoom){
             var spunTouch = [-Math.abs(zoom-lastZoom)*screenPressCoordX/(Math.min(uniforms.resolution.value.x,uniforms.resolution.value.y)/d),
                              Math.abs(zoom-lastZoom)*screenPressCoordY/(Math.min(uniforms.resolution.value.x,uniforms.resolution.value.y)/d)];

                  if(uniforms.carousel.value!=0.)         spunTouch=spin(spunTouch,uniforms.carousel.value*(uniforms[ "time" ].value*uniforms[ "rate" ].value)%(Math.PI*2.));

                      coordX+= spunTouch[0];
                      coordY+= spunTouch[1];
                  }

          uniforms[ "zoom" ].value = zoom;
          uniforms.coords.value.x = coordX;
          uniforms.coords.value.y = coordY;
        renderer.render( scene, camera );

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
                    let  notesDifferent = (noteOfScore != thelastnotehit);
                if(

                    (noteExpired|| !notesDifferent) //let you hit the next note before the last note finishes unless the notes are the same just once
                  &&  (Math.round(noteNumber)%12 ==noteOfScore
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


let audioX;
let micOn = false;
let touchOnlyMode=false;

async function startMic() {
  //https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
    navigator.mediaDevices.getUserMedia({audio: true})
  .then((stream) => {
    /* use the stream */


      micOn = true;
      audioX = new AudioContext();
      analyser = audioX.createAnalyser();
      source = audioX.createMediaStreamSource( stream );
      source.connect(analyser);
      analyser.fftSize = fftSize;
      dataArray = new Uint8Array( bufferSize );
      //init();
  }).catch((err) => {
                    console.log("Touch only mode!")
                    touchOnlyMode=true;
                    window.touchMode = true;
                    })
  .finally((err) => {
    /* engage touch only mode */
    document.getElementById( "background_wrap").style = "position: unset;";//turn off splash!
    container.appendChild( renderer.domElement );//engage THREEJS visual out
    animate();
  });

}
//begin MIT license, code from https://github.com/adamski/pitch_detector
/** Full YIN algorithm */
function calculatePitch ()
{
let yinData = Array(bufferSize/2);
let period;
let delta = 0.0, runningSum = 0.0;
yinData[0] = 1.0;
for (let tau = 1; tau < yinData.length; tau++)
{

    yinData[tau] = 0.0;
    for (let j = 0; j < yinData.length; j++)
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




let tolerance=.5; //, confidence;
let sampleRate=44100;
function minElement (d)
{

let j, pos = 0;
let tmp = d[0];
for (j = 0; j < bufferSize; j++)
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
if (pos == 0 || pos == bufferSize - 1) return pos;
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
