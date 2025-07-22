var THREE;

if(window.useCDN||true)import("three").then(module => { THREE=module})
.catch((err) => {
    console.log(err)

    console.log("Error loading threeJS module;load old Threejs instead");
    document.getElementById("threeJSscript").src = "https://cdn.jsdelivr.net/gh/Z1X1Z/zonex_jsdelivr/three.min.js"//iOS needs a local module, so we give it this instead
})
.finally((err) => {    //console.log(err)
});
else{

    console.log("load old Threejs for offline")
    document.getElementById("threeJSscript").src="three.js";
}



function stallTillTHREELoaded(){//this is a lurker. it waits for the three.js loader to resolve to a loaded library, then initializes the game.
    if(!runningHash&&typeof THREE=="object" && document.visibilityState=="visible"
       &&(window.micOn||(location.hash.includes("t")&&!location.hash.includes(",t")&&!location.hash.includes(".t")))){
       document.getElementById( "background_wrap").style =  "height: 0px; width: 0px;"
        //"background-image: none;";//turn off splash!
        document.getElementById( "load message").innerHTML = "";//turn off splash!

                if(location.hash.includes("t")&&!location.hash.includes(",t")&&!location.hash.includes(".t"))
              {
                window.touchOnlyMode=true;
              }
            init();
     }
    else setTimeout(stallTillTHREELoaded,100);

    }//setTimeout waits for 10ms then runs stallTillTHREELoaded()
stallTillTHREELoaded();


const dotSize = starshipSize;

let coringValue = 1./-leaf/gr;
window.pointerZoom=false;
window.zoomCageSize = window.pixelShaderSize/4.;//radius of zoom bounding

                  window.uniformsLoaded=false;

//if (navigator.maxTouchPoints <1) rez = window.devicePixelRatio;//redefine resolution for desktop
                          
let colorSound;
let colorSoundPURE;
let loopsRun =0;

      //vvvvbelow line partly from https://code-boxx.com/detect-mobile-device-javascript/




//key press handling vvvv


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
                            
                          
                                                        testar,
                                                        
                                                        mustarD,
star,starColors;
let testarContinuous=[];//

var  DAWstar,DAWstarColors;
let Fret = {x:null,y:null,index:null,volume:0.,note:-12};
const loudestFret=Array(4).fill(Fret);
//uniform.

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
var colorInstant=0.;
let updateInstant = false;
                            let innerSpirographFractionalSize=0;

                            const bufferPortion = 2048;//should be 2048
                            const spirray0 = new Float64Array(bufferPortion).fill(.5);
                            const spirray1 = new Float64Array(bufferPortion).fill(.5);
                          const   point = new Float32Array(bufferPortion*3*2);
                          const   pointColor = new Float32Array(bufferPortion*4*2);
function makeSpirograph(){
      phase = phase % (pi*2);
        phase2 =  phase2 % (pi*2);
      len = 0;
    const adjConstant =2*Math.PI*window.ConcertKey/pitch/512.*2**(1./3.)/1.5;//shouldn't be buffersize needs to be revised
    var maxSamp=0.;
    for(var t=0; t<bufferPortion;t++) if(inputData[t]>maxSamp)maxSamp=inputData[t];
                                                                  uniforms.maxSamp.value=maxSamp;
  
  var minSamp=100000000.;
  for(var t=0; t<bufferPortion;t++) if(inputData[t]<maxSamp)minSamp=inputData[t];
                                                                uniforms.minSamp.value=minSamp;
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
                                                                  spirray0[0]=spirray0[1];
                                                                  spirray1[0]=spirray1[1];//remove line from center
                                                                  
                                                                                             //                                 spirray0[bufferPortion-1]=spirray0[bufferPortion-2];
                                                                                              //                                spirray1[bufferPortion-1]=spirray1[bufferPortion-2];
       
}
let callibratorArray = new Float32Array(1024).fill(0);
                                                                  let stack12Array = new Float32Array(12).fill(0);
function spiral_compress(){
    let freq = 0;
  //  notesAverage = 0.;
  //  let notesAverageCOUNTER = 0.;

    const z = [...dataArray];

    testarContinuous.fill(0); testar.fill(0); mustarD.fill(0);stack12Array.fill(0.);
    for(let n=0; n<numberOfBins; n++)
    {
    //if ( z[n]>z[n-1] && z[n] > z[n+1] ){
    let d =1.;
    if(n!=0)   d = (z[n+1]-z[n-1])/(z[n-1]+z[n+1]);
    else d = z[n+1]/z[n];
    const nAdj = n + d *6. ;//seems like it should be times 4 for rationality, but 5 works better with continuous star, 6 seems effectively correct
      //if (Math.abs(d)<4+1.&&isFinite(d))
        freq =((( audioX.sampleRate)*(nAdj))/numberOfBins);
    // else
    //    freq = audioX.sampleRate*n/numberOfBins
        //   freq = 440; //check for concert A
    var note24 =24*Math.log(freq/window.ConcertKey)/Math.log(2.)+49*2;
                     if(unitTest)
                            {
           freq = audioX.sampleRate*n/numberOfBins //ensures uses n not n adj for test
                     note24 =24*Math.log(freq/window.ConcertKey)/Math.log(2.)+49*2;
                                         
                                                             var noteToTest =(window.TIMESTAMP/1000.+20)%120.;
                                         if(Math.abs(note24/2.-noteToTest)<=1.//&&Math.abs(note24/2.-noteToTest)>.25
                              ){ callibratorArray[n]=1.;console.log(note24/2.);
                         frequencies[n]=1.;
                         z[n]=1
                         dataArray[n]=1


                     }// test witness in pixel shader, add to setMicInputToPIXEL()
                                         else {
                         callibratorArray[n]=.0001;
                         frequencies[n]=.0001;
                                             z[n]=.0001
                                             dataArray[n]=.0001
                     }
                                         }
                                         else             frequencies[n]=freq;

                            
       if(EldersLeg!=0.) testar[Math.round(note24*EldersLeg/24.)%EldersLeg] += Math.abs(z[n])*radialWarp;
                            stack12Array[Math.round(note24/2.)%12]+= Math.abs(z[n]);
      testarContinuous[n] = Math.abs(z[n]);
                          mustarD[n] = note24;
                            }
                            for (var g=0; g<EldersLeg; g++)   innerFrets[g] = testar[g];

                       if(window.extremeFrets&&EldersLeg>2)
                            {
        for(var b = 0; b<EldersLeg; b++)if(testar[b]!=0.) testar[b]=(1.-1./(testar[b]*exFactor)**(1./Math.E))**(Math.E)
        //    for(var b = 0; b<12; b++)if(testar[b]!=0.) stack12Array[b]=(1.-1./stack12Array[b]**(1./Math.E))**(Math.E)
                }
                            
};
                                      var exFactor=   100./255.;
var innerFrets = new Float64Array((EldersLeg>0)?EldersLeg:0.);


const twelve = Array(12);
for(let n = 0; n<12; n++)twelve[n] = new Float64Array(10).fill(0);

var smoothTwelve =false;
function fiveAndSeven(){
    
    for(let n = 0; n<12; n++)
        for(let m = 0; m<10; m++)
            twelve[n][m]=0;
    
    
      let finger = 0 //ranges up to <10
      let  starNote = 0 //ranges up to <12
        for(let n = 0; n<numberOfBins; n++)        {
            //mustard is in 24ths, here we want 12ths so we divide by two
            let twelfths = (mustarD[n]/2.+1)*radialWarp//A1 is 1 with +12
          // twelfths = 60.;
                if( twelfths>=-.5){
                    starNote = Math.round(twelfths)%(12);
                    finger = Math.floor((twelfths-.5)/12);
                    if (finger<10&&finger>=0&&isFinite(finger)&&isFinite(starNote)&&isFinite(dataArray[n])) twelve[starNote][finger] +=dataArray[n];
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
                            
                                  var trail=new Float32Array(trailLength*3*6*2);
                                   var trailColor=new Float32Array(trailLength*4*6*2);
                                
            function setTrailSize(){
        
                             trailLength = Math.ceil(zoomFrames*trailSecondsLong);
                            starShipDepthInSet = (trailSecondsLong-pixelShaderToStarshipRATIO/2.)/((trailSecondsLong>0)?trailSecondsLong:1);//base Z value
                              cx =new Float64Array(trailLength).fill(0);//c is the center of the frame moved from the origin
                              cy = new Float64Array(trailLength).fill(0);
                              xPerp= new Float64Array(trailLength).fill(0);//perp is the perpendicular from c
                              yPerp = new Float64Array(trailLength).fill(0);
                              trailWidth = new Float64Array(trailLength).fill(0);
                              trailTimeOfRecording = new Float64Array(trailLength).fill(0);
                              trailSegmentExpired = Array(trailLength).fill(false);
                            pitchCol = Array(trailLength);
                                   trail=new Float32Array(trailLength*3*6*2);
                                    trailColor=new Float32Array(trailLength*4*6*2);
                                
                                if(window.INITIALIZED){
                                
                                    scene.remove(meshTrail)
                                geomeTrail.dispose();
                                 geomeTrail = new THREE.BufferGeometry();
                                 geomeTrail.dynamic = true;
                                 geomeTrail.setAttribute( 'position', new THREE.Float32BufferAttribute( trail, 3 ) );
                                  geomeTrail.setAttribute( 'color', new THREE.Float32BufferAttribute( trailColor, 4 ));
                                 meshTrail = new THREE.Mesh(geomeTrail, materialTrail);
                                scene.add(meshTrail)

                                
                                trailPositionAttribute = geomeTrail.getAttribute( 'position' );
                                trailColorAttribute = geomeTrail.getAttribute( 'color' );
                                
                                for(var n = 0; n<trailLength; n++)
                                pitchCol[n]  = new THREE.Color()
                                
                                
                                for(var v = 0; v<6*trailDepth;v++)
                                    geomeTrail.getAttribute( 'position' ).setXYZ(v,0,0,0);
                                
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
let on=false;
let spirafreq=1;
var totalAMP=0;
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
                                                  let note=0.,lastNote=0.;
                                    let BlackOrWhiteTrail=.5;//also for star
                                    let BlackOrWhiteNOTE = .5
                                    let starMajorMinor=.5;
                                    let fromCenter = 0;
                                                  let radius = 0.;
        function  move()
        {
            if (isNaN(coordX)||(!zoomAtl41&&coordX>4.))coordX=0.;
            if (isNaN(coordY)||(!zoomAtl41&&coordY>4.))coordY=0.;





                
                
                
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
                            if(!isFinite(note))note=0.;
                            uniforms.note.value=note;
        const t =  (note +twist/2)*flip;
                            if(isFinite(t))angle = -(t*radialWarp);
                            let reversableColor=((uniforms.brelued.value*angle/12./((radialWarp>0)?radialWarp:1))*flip+twist/24.*uniforms.brelued.value+1./3.)%1.;
             //if(uniforms.brelued.value==-1)reversableColor=.25-reversableColor;

                           
         
        const colortone = note/lightingScaleTrail;
        colorSound.setHSL(reversableColor,1.,(colortone<=.875)?((colortone>.125)?colortone:.25):.875);//lighting {note/x} should be 120 but it's out of the vocal range
        //angle-=1/radialWarp;
            if(on)
            {
             uniforms.noteFrozen.value=note;
             colorSoundPURE =     new THREE.Color().setHSL(reversableColor,1.,.5);
             
            pitchCol[f]  = colorSoundPURE;

            const nt = Math.round(note)%12;
            if (nt==7||nt==5||nt==2||nt==0||nt==10)BlackOrWhiteNOTE=0.;
            else BlackOrWhiteNOTE=1.;


            let bwPRIMER = .125;
            starMajorMinor = (BlackOrWhiteNOTE+bwPRIMER)/(1.+bwPRIMER)/2.+bwPRIMER*2.;

            bwPRIMER = .5;
            BlackOrWhiteTrail = (BlackOrWhiteNOTE-bwPRIMER)/(1.-bwPRIMER);
            }
            else {
            starMajorMinor=.5;
             BlackOrWhiteNOTE=.5
            BlackOrWhiteTrail=.5;
            }
                                                   
                                                   if(!Oreo){
                                starMajorMinor=.5;
                                
                            }
                            if(!window.stylusON)  BlackOrWhiteTrail=.5;

                                flatline = window.movementRate;
                           //    if(window.movementRate<movementRateORIGINAL) flatline = 1.;
                            
                            
                 angle = ((angle+6*radialWarp)/12.)%1*2*pi;
                 d_x = -Math.sin(-angle);
                 d_y = -Math.cos(-angle);
                            d_x*=flatline;
                            d_y*=flatline
                            if(on&&totalAMP>.000001)
                            {
             
             if(shouldShowStar&&touchMode)
             {
                 uniforms.d.value.x+=d_x;
                 uniforms.d.value.y+=d_y;
             }
             else {

                     uniforms.d.value.x=d_x;
                     uniforms.d.value.y=d_y;
             }
      
                               
                               FEEDBACKuniforms.d.value=new THREE.Vector2(d_x,d_y);
                               FEEDBACKuniformsFlip.d.value=new THREE.Vector2(d_x,d_y);
         }
                 d_x*=volume;
                 d_y*=volume;
                 var spunD = [d_x,d_y];
                               
                            if(uniforms.carousel.value!=0.)         spunD=spin(spunD,-uniforms.carousel.value*(uniforms[ "time" ].value*uniforms[ "rate" ].value+Math.PI)%(Math.PI*2.));
                  const d_xS=spunD[0]*interpolation;
                  const d_yS=spunD[1]*interpolation;

           const bx=coordX+d_xS*MR*zoom;
          const by=coordY+d_yS*MR*zoom;
                               
                            let preFromCenter= Math.sqrt(bx*bx+by*by);

             if(isFinite(d_x)&&isFinite(d_y)&&totalAMP>zoomOutRatchetThreshold&&on){
                          fromCenter = preFromCenter;

                                if( !window.touchMode//&&!DAW
                                   )
                                {
                                    coordX=bx;
                                    coordY=by;
                                    staticX+=d_xS;
                                    staticY+=d_yS;
                                }
                        }

                        
          // if (uniforms.Spoker.value)expandedZoomCage=4./3.
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
        if(trailSecondsLong!=0&&// trailDepth<trailLength||
           on)
                               
                              {
            
        f++;//this is the primary drive chain for the trail. it should be a global
        if (f>=trailDepth)f=0;
            
         radius = interpolation*MR*4./window.pixelShaderSize;
         xAdjusted= d_x*radius;
         yAdjusted= d_y*radius;
             let decrement;
             if(!window.flame)decrement=radius*starshipSize;
             else decrement=-starshipSize/((trailSecondsLong>0)?trailSecondsLong:1)*interpolation*MR;
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
                            let stackMesh, stackMaterial, stackGeometry;
                            let starMesh,starGeometry,starMaterial;
                            let DAWstarMesh,DAWstarGeometry,DAWstarMaterial;

                    let radialMaterial, radialLine, radialGeometry;
                            let starsANDwitnessesMesh,starsANDwitnessesGeometry;
                    let starStreamColors,starStreamPoints;//window.starCount
                    let starStreamMesh,starStreamMaterial,starStreamGeometry;
                           let scene, shaderScene,feedbackScene, feedbackSceneFlip;

                    

let  FEEDBACKuniforms, FEEDBACKuniformsFlip,wipeUniforms;

                        
                                           var minimumDimension=Math.min(window.innerHeight,window.innerWidth);
                                           var maximumDimension=Math.max(window.innerHeight,window.innerWidth);
                                           var heightPX=window.innerHeight,widthPX=window.innerWidth;
                                           var height=heightPX/minimumDimension,width=window.innerWidth/minimumDimension;

                       let renderTarget, cloverRenderTarget;
                       let backBufferFlip=false;
                      let FeedbackrenderTarget,FeedbackrenderTargetFlipSide;
                       
                            
                                         const xenOctaveFactor = 12;
                                                                const harmonicPzyghtheVertices = new Float32Array(xenOctaveFactor*12*3*6)
                                                                const harmonicPzyghtheColor = new Float32Array(xenOctaveFactor*12*4*6)
                            
                                                                const stackVertices = new Float32Array(12*3*6*2)
                                                                const stackColor = new Float32Array(12*4*6*2)
                            
                    
                                           const starsANDwitnessesPoints=new Float32Array(120*3*6);
                                           const starsANDwitnessesColors=new Float32Array(120*3*6);

                    
                    
                  
                            let xyStarParticleArray= Array();
                                           
                                            zoomOutEngage=false;
                                            pi = Math.PI;

        function setDAWdependantSize()
        {
             window.dawNODES = (DAWSonicTouchArray.length)
             if(dawNODES<0)dawNODES=0;
             DAWstar= new Float32Array(dawNODES*3*6);//Elders take EldersLeg*3*2*2 and that as it stands is always less than numberOfBins
             DAWstarColors= new Float32Array(dawNODES*4*6);
             if(window.INITIALIZED)
             {
                 scene.remove(DAWstarMesh)
                 DAWstarGeometry.dispose();
                 DAWstarGeometry = new THREE.BufferGeometry();
                 DAWstarGeometry.dynamic = true;
                 DAWstarGeometry.setAttribute('position', new THREE.Float32BufferAttribute( DAWstar,3 ));
                 DAWstarGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( DAWstarColors, 4 ));
                 DAWstarMesh = new THREE.Mesh(DAWstarGeometry, DAWstarMaterial);
                 scene.add(DAWstarMesh)
                 loadAttributes();

             }
         }

function setFFTdependantSizes(){
     analyser.fftSize=fftSize;
      bufferSize = fftSize;
      numberOfBins = fftSize/2.;
      frequencies= new Float64Array(numberOfBins);
     inputData = new Float32Array(bufferSize);
      dataArray = new Uint8Array( numberOfBins );

     window.zoomOutRatchetThreshold=starSHIPVOLUMEdefaultLowVolume;//5./1024;////or 1/1024.//maybe shouldn't need to be here could be solved away
     
     
      star= new Float32Array((numberOfBins>EldersLeg)?numberOfBins*3*3:EldersLeg*3*2*3);//Elders take EldersLeg*3*2*2 and that as it stands is always less than numberOfBins
      starColors= new Float32Array((numberOfBins>EldersLeg)?numberOfBins*3*4:EldersLeg*6*4*3);
     
                        starArms = numberOfBins;
             window.starCount = Math.ceil(starArms*60*secondsToEdge);

      starCount = Math.ceil(starArms*60*secondsToEdge);
             xyStarParticleArray= Array(starCount).fill(null)
      starStreamPoints= new Float32Array(starCount*3*6);
      starStreamColors= new Float32Array(starCount*4*6);
     

             
             testar = new Float64Array((EldersLeg>0)?EldersLeg:0.);
             innerFrets = new Float64Array((EldersLeg>0)?EldersLeg:0.);

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
                            
                            let DAWstarPositionAttribute;
                            let DAWstarColorAttribute;
                            
                                           let starStreamPositionAttribute;
                                           let starStreamColorAttribute;
                           let starStreamIndex=0;
                            let harmonicPositionAttribute;
                            let harmonicColorAttribute;
                            let stackPositionAttribute;
                            let stackColorAttribute;
                                
                                           let trailPositionAttribute;
                                           let trailColorAttribute;
                                           
                                       let starsANDwitnessesPositionAttribute;
                                       let starsANDwitnessesColorAttribute;
                                           
                            
            function loadAttributes(){
             
             linePositionAttribute = lineGeometry.getAttribute( 'position' );
             lineColorAttribute = lineGeometry.getAttribute( 'color' );
             
             stackPositionAttribute = stackGeometry.getAttribute( 'position' );
             stackColorAttribute = stackGeometry.getAttribute( 'color' );
  
             starPositionAttribute = starGeometry.getAttribute( 'position' );
             starColorAttribute = starGeometry.getAttribute( 'color' );
             
             DAWstarPositionAttribute = DAWstarGeometry.getAttribute( 'position' );
             DAWstarColorAttribute = DAWstarGeometry.getAttribute( 'color' );
             
                        starStreamPositionAttribute = starStreamGeometry.getAttribute( 'position' );
                        starStreamColorAttribute = starStreamGeometry.getAttribute( 'color' );
                        
                        
                        harmonicPositionAttribute = harmonicPzyghtheGeometry.getAttribute( 'position' );
                        harmonicColorAttribute = harmonicPzyghtheGeometry.getAttribute( 'color' );
                        
                        
                        trailPositionAttribute = geomeTrail.getAttribute( 'position' );
                        trailColorAttribute = geomeTrail.getAttribute( 'color' );
                        
                     starsANDwitnessesPositionAttribute = starsANDwitnessesGeometry.getAttribute( 'position' );
                     starsANDwitnessesColorAttribute = starsANDwitnessesGeometry.getAttribute( 'color' );
                    }
                            function setVectors(){
             uniforms.coordSHIFT.value=new THREE.Vector2(0,0);
uniforms.resolution.value = new THREE.Vector2(window.innerWidth,window.innerHeight);
             uniforms.coords.value = new THREE.Vector2(0.,0.);
             uniforms.constellationCoord.value = new THREE.Vector2(0.,0.);
uniforms.d.value = new THREE.Vector2(0.,1./10000.);
uniforms.dotCoord.value = new THREE.Vector2(0.,0.);
  
   uniforms.pongBallCoords.value = new THREE.Vector2(0.,window.innerHeight/gr);

         }
function init() {
             
             for(var m=0;m<cloverConstellation.length;m++)cloverConstellation[m]=new THREE.Vector2(0.,0.)
                // for(var m=0;m<cloverSquirgle.length;m++)cloverSquirgle[m]=new THREE.Vector2(0.,0.)
                 
             colorSound = new THREE.Color();
                  colorSoundPURE =     new THREE.Color();

            // setFFTdependantSizes();
             //setTrailSize();
              setVectors();
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
          linewidth: 1,//ignored by WebGLRenderer
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
              
             
             
             DAWstarMaterial= new THREE.MeshBasicMaterial({
                         opacity: 1.,
                       transparent: true,
                         vertexColors: true,
                        // side: THREE.DoubleSide
                     });
             DAWstarGeometry = new THREE.BufferGeometry();
              DAWstarGeometry.dynamic = true;
             DAWstarMesh = new THREE.Mesh(DAWstarGeometry, DAWstarMaterial);
              
             
             
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
             
             
             stackMaterial= new THREE.MeshBasicMaterial({
                           opacity: 1.,
                         transparent: true,
                           vertexColors: true,
                          // side: THREE.DoubleSide
                       });
             stackGeometry = new THREE.BufferGeometry();
             stackGeometry.dynamic = true;
             stackGeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( stackVertices, 3 ) );
             stackGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( stackColor, 4 ));
             stackMesh= new THREE.Mesh( stackGeometry,  stackMaterial);
             
             
     
     circleMaterial = new THREE.MeshBasicMaterial(    { opacity: .8,
         transparent: true});
             circle = new THREE.Mesh(new THREE.CircleGeometry(dotSize,3,0.),circleMaterial);

     radialMaterial=  new THREE.MeshBasicMaterial( { color: 0x000000});
     radialGeometry=new THREE.BufferGeometry()
     radialLine = new THREE.Line(radialGeometry,radialMaterial);
     
                        loadAttributes();
             shaderScene.add(stackMesh)

     scene.add(harmonicPzyghtheMesh)
     scene.add(meshTrail)
             shaderScene.add(line);
             scene.add(starMesh);
             scene.add(DAWstarMesh);
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
             setDAWdependantSize();

     setFFTdependantSizes();
             setTrailSize();

     setDynamicSampler2ds();
  renderer.setPixelRatio( rez);
     onWindowResize();
     adjustThreeJSWindow();
    animate();

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
             
             
             loadData(cloverConstellation,constellationData);//defined in wad, transfers from Vector2 to array
             let constellationTexture = new THREE.DataTexture( window.constellationData, window.constellationSize, 2,THREE.RedFormat,THREE.FloatType);
            // console.log(constellationTexture)
             constellationTexture.unpackAlignment=1
             constellationTexture.needsUpdate=true;
             uniforms.constellationDynamic.value=constellationTexture;
             uniforms.constellationDynamic.needsUpdate = true;
            // console.log(uniforms.constellationDynamic)
             
            // loadData(cloverSquirgle,squirgleData);//defined in wad, transfers from Vector2 to array
             let squirgleTexture = new THREE.DataTexture( window.squirgleData, window.squirgleSize, 1,THREE.RedFormat,THREE.FloatType);
            // console.log(constellationTexture)
             squirgleTexture.unpackAlignment=1
             squirgleTexture.needsUpdate=true;
             uniforms.squirgleDynamic.value=squirgleTexture;
             uniforms.squirgleDynamic.needsUpdate = true;
 }
function setMicInputToStarPIXEL(){
             if(!touchMode//&&!DAW
                ||(window.shouldShowStar))
             {
                 
                 let withinMaxsafeSizeBins=(numberOfBins<=2**13)//(EldersLeg<=682);
                 let withinMaxsafeSizeFFT=(fftSize<=2**13)//(EldersLeg<=682);
                 uniforms.sampleRate.value =       audioX.sampleRate     ;
                 uniforms.fftSize.value =             analyser.fftSize;
                 uniforms.nyq.value =            audioX.sampleRate/analyser.fftSize;
                 
                 //console.log(nyq)
                 if(withinMaxsafeSizeBins){
                     let size = (withinMaxsafeSizeBins)?numberOfBins:1;
                     let dataArrayBuff=dataArrayBuffer=new Float32Array( size ).fill(0.);
                     for (var x = 0; x < numberOfBins; x++)dataArrayBuffer[x]=dataArray[x]/255.;
                     
                     // callibratorArray //dataArrayBuffer
                     let micThrough = null;
                     if(unitTest)micThrough= callibratorArray;
                         else micThrough= dataArrayBuffer;
                     let micTexBuf = new THREE.DataTexture( micThrough, size, 1, THREE.RedFormat,THREE.FloatType);
                     micTexBuf.needsUpdate=true;
                     
                     uniforms[ "micIn" ].value = micTexBuf;
                     uniforms.micIn.needsUpdate = true;
                     
                 }
                 if(withinMaxsafeSizeFFT) {
                     let size = (withinMaxsafeSizeFFT)?fftSize:1;
                     
                     let inputDataBuffer =new Float32Array( size ).fill(0.);
                     
                     for (var x = 0; x < fftSize; x++)inputDataBuffer[x]=inputData[x];
                     
                     
                     
                     let RAWaudioTexBuf = new THREE.DataTexture(inputDataBuffer , size, 1, THREE.RedFormat,THREE.FloatType);
                     RAWaudioTexBuf.needsUpdate=true;
                     
                     uniforms["audioBuffer"].value = RAWaudioTexBuf;
                     uniforms.audioBuffer.needsUpdate = true;
                 }
             }
                 else{
                     //uniforms["volume"].value = 0.;

                     uniforms["audioBuffer"].value = null;
                     uniforms.audioBuffer.needsUpdate = true;
                     
                     uniforms[ "micIn" ].value = null;
                     uniforms.micIn.needsUpdate = true;
             }

             //console.log(uniforms.micIn.value[0])

         }
         
                    let bottomOfScreenHeight = 0;
                                           let correlationForTextX = 0;
                                           let correlationForTextY = 0;
                            let maxToMin = 1;

function adjustThreeJSWindow()
                    {

     renderer.setSize(widthPX, heightPX);
             if (streaming) {
                 video.setAttribute("width", window.innerWidth);
                 video.setAttribute("height", window.innerHeight);
                 
                 videoCanvas.setAttribute("width", window.innerWidth);
                 videoCanvas.setAttribute("height", window.innerHeight);
             }
        
     uniforms.resolution.value =new THREE.Vector2(widthPX,heightPX);
         
     FEEDBACKuniforms.resolution.value =new THREE.Vector2(widthPX,heightPX);
                        wipeUniforms.resolution.value =new THREE.Vector2(widthPX,heightPX);
      minimumDimension = Math.min(widthPX,heightPX);
     maximumDimension = Math.max(widthPX,heightPX);
     setRenderTargetSize(widthPX,heightPX);
      height=heightPX/minimumDimension;
      width=widthPX/minimumDimension;
             maxToMin = Math.max(height,width)/Math.min(height,width);

  camera = new THREE.OrthographicCamera( -width, width, height, -height, 1, -1);


}
window.addEventListener( 'resize', onWindowResize, false );
window.addEventListener("orientationchange", onWindowResize, false);

function onWindowResize() {

                        if (!sheetTranslucent&&"osmd" in window &&osmd!=null)
                        {
                            correlationForTextY=document.getElementById("osmdCanvas").offsetHeight+document.getElementById("textWindow").offsetHeight
                            bottomOfScreenHeight = correlationForTextY;
                        }
                        else{correlationForTextY=0;bottomOfScreenHeight=0}
                    if(((((document.getElementById("reader").value==0&&readerSet)||(bibleWithText)))||mobile)&&window.BibleON==0)
                        
                    correlationForTextX=document.getElementById("Bible").offsetWidth*.5
                            else correlationForTextX=0.;
                            heightPX=window.innerHeight-correlationForTextY;
                            widthPX=window.innerWidth-correlationForTextX;
             
              mf = (Math.max(heightPX,widthPX)/Math.min(heightPX,widthPX));//advantage of translation over zoom (right?)
             MR = mf/zoomFrames;
                      //  if(BibleON==0)document.getElementById("Bible").height=window.innerHeight/-leaf;

            if("osmd" in window&&osmd!=null)
            {   osmd.width=widthPX;
                osmdResize();//osmdResize defined in fileSelectAndLoadOSMD.js
            }
        
           if(INITIALIZED) adjustThreeJSWindow();
     
     
     //menuBoxes declared in manny.html
     let numberOfColumns=Math.round(widthPX/heightPX*4.)
    for(var box=0.;box<menuBoxes.length;box++)menuBoxes[box].style.columnCount=numberOfColumns;
                        rezBox.style.columnCount=1;//this is a bit repetitious
                        scoreBox.style.columnCount=1;//this is a bit repetitious
     let numberInputElements = document.getElementsByClassName("num")
     for(var n=0; n<numberInputElements.length;n++)
         numberInputElements[n].style.width=widthPX/(numberOfColumns+1.)+"px";

  }

            let lastTime=0.;
            let ticker = 0;
           // window.FPS=60; //declared in hotkeys

                  const interval = 250.;//sample window of FPS meter for FPS frame averaging, think 1000/FPS. 1 is more or less off. Used to keep off jitter. Think 200ms maybe
                  let elapsedTimeBetweenFrames = 0.;
                  let lastPitch = 1;

                  let lastFrameTime=0.;
                  let interpolation=1.;
                  let finalAverageAmp=1.;
                  let averageFrameTotalAmp = [];
                       
let lastVolume = 1.;
        function setZoomRate(){
        let volumeProcessed =(volume/lastVolume)**.5;//should be volume not volumeBoosted
        if(!on||!isFinite(volumeProcessed))volumeProcessed=1.;
             
           if(zoomRate>0) return Math.E**(Math.log(.5)/zoomFrames*zoomRate*interpolation*(volumeProcessed));//the square root of volume is to make it grow slower than in d_xy
             else return 0;
        }
                       
                       
                       let cloverSuperCores = 0;
                       var singleHyperCoreDepth = 54.;//240/54=4.44444444.. I like this, also 240/48 = 5 that's okay too, since the 60th core is kindof gone to the hypercore dot
                            let expandedZoomCage=1.;

       function infinicore(){
            if(zoom<=1./2.**(singleHyperCoreDepth+3)){
                let lastCoord=coordX
                zoom*=2.**(singleHyperCoreDepth);coordY*=2.**(singleHyperCoreDepth);coordX*=2.**(singleHyperCoreDepth);
                fromCenter*=2.**(singleHyperCoreDepth);
                lastZoom*=2.**singleHyperCoreDepth;

                cloverSuperCores++;

            }
             if(cloverSuperCores<0.) cloverSuperCores=0.;

            if(zoom>1./2**2&&cloverSuperCores>0){
                zoom/=2.**singleHyperCoreDepth;coordY/=2.**singleHyperCoreDepth;coordX/=2.**singleHyperCoreDepth;
                fromCenter/=2.**singleHyperCoreDepth;
                    lastZoom/=2.**singleHyperCoreDepth;
                cloverSuperCores--;

                
            }

            if(!isFinite(cloverSuperCores))
            {cloverSuperCores=0;
            zoom=1.;
            }
    
    
    
    
    
    if (ONbypass||(on&&zoom<1.))preserveOuterCore=true;
    else preserveOuterCore = false
        
        expandedZoomCage=1;
             if (uniforms.Spoker.value)expandedZoomCage*=2.
                 if (uniforms.continuumClover.value)expandedZoomCage/=1.5

    else expandedZoomCage = 1.;
             
             
    if((fromCenter>=zoomCageSize*expandedZoomCage||zoom>=1.)&&!zoomOutEngage&&uniforms.MetaCored.value&&!(preserveOuterCore)){coordX=(coordX/2.)%1.; coordY=(coordY/2.)%1.;zoom=(zoom/2.)%1.;
        if(uniforms.wheel.value&&window.cycleCores)uniforms.upCoreCycler.value=(uniforms.upCoreCycler.value-1)%60;//this is for the heart to expand and contract//does modulo -60%60=0?-0 it seems
        else uniforms.upCoreCycler.value = 0.;
    }
    }
                       
                       
                       
                       
let       preserveOuterCore = true;
                       
                       
                       
                       const zoomCap32 =.00000075;
                            
function zoomRoutine(){
    const metaDepth=(!dupered)?zoomCap32:zoomCap32**2;//due to pixelization limits
    let zoomCone=metaDepth*fromCenter;
    if(uniforms[ "colorCombo" ].value==16)zoomCone/=1.33333333/2.;
    
    ZR = setZoomRate();
    if (zoom>=1.)//could work as one (also below) but my phone was partially crashing on continuum clover zoomout
        zoomOutEngage = false;
    if(!isFinite(ZR))ZR=1;
    if(!zoomOutEngage&&zoomRate>0.){
        if ((zoom>zoomCone && totalAMP>zoomOutRatchetThreshold&&(on&&!window.touchMode))||xTouch+yTouch!=0)zoom *=ZR;
        else if(uniforms.MetaCored.value||zoom<1.){
            zoom /= ZR;
            if(center&&zoom<1.){coordX*=ZR*2./3.;; coordY*=ZR*2./3.;}
        }
    }

    
    //.000000000000000000000001
                        if (zoom<zoomCone||(zoom<1./2**singleHyperCoreDepth*metaDepth&&
                                            cloverSuperCores<-.5)
                            ){
                            zoomOutEngage = true;}
                         if (zoomOutEngage == true) zoom *= 1.44/ZR;
                    

                        //  if(zoom<1./2**singleHyperCoreDepth*metaDepth)zoom = 1.;
    

             
             
             
             if (uniforms["MetaCored"].value)
              {
                 
                 var precores = .25/Math.log(.5);
                  //if(clvrVariant4&&cloverSlide) precores=precores-1./Math.log(.5);
                  //else if(clvrVariant4)precores=0.;
                  
                  if(refactorCores!=1.)precores=-.0;
                  const logStabilizationConstant = 1./Math.log(3.)+(1.-1./Math.log(3.))/2.;//.9551195 is based on 1./log(3.)==0.910239 So (1.-.910239)/2+.910239=.9551195 May be incorrect but is close to right.
                  var equilibriator = 1.;
              
                 uniforms[ "centralCores" ].value = Math.log(zoom)/-Math.log(2.)+precores    ;
                 // if(uniforms[ "morph" ].value!=0.)uniforms[ "centralCores" ].value*=3./2.;//stabilize morph dance collaboration
                 
                 uniforms[ "externalCores" ].value = uniforms[ "centralCores" ].value/1.5+Math.log(fromCenter)*logStabilizationConstant;
                  ;
               
             }
             
}
        function pongRoutine(x,y){
             let diag = (uniforms.resolution.value.x**2+uniforms.resolution.value.y**2)**.5*window.movementRate*interpolation/60./4.;
             uniforms.pongBallCoords.value.x+=diag*ballVectorX;//-.1*ballVectorX;//
             uniforms.pongBallCoords.value.y+=diag*ballVectorY//=d_y/minimumDimension*50;//0.;//
             let xEdge = widthPX;
             let yEdge = heightPX;
             let paddleStrikePosition=(uniforms.pongBallCoords.value.y/uniforms.resolution.value.y-((note*flip+twist/2.)+12*100)%12./12.+13./12.)%1;
             let paddleHitBall=(paddleStrikePosition <1./12.);
             if(uniforms.pongBallCoords.value.x>xEdge) {
                    if(paddleHitBall)
                    {
                        uniforms.pongBallCoords.value.x=xEdge;
                        ballVectorX*=-1
                        ballVectorY=Math.sign(ballVectorY)*-paddleStrikePosition*12.;
                    }
                    else uniforms.pongBallCoords.value.x=0.
                }
            else if (uniforms.pongBallCoords.value.x<0){
                if(paddleHitBall)
                {
                    uniforms.pongBallCoords.value.x=0;
                    ballVectorX*=-1
                    ballVectorY=Math.sign(ballVectorY)*-paddleStrikePosition*12.;
                }                else uniforms.pongBallCoords.value.x=xEdge
                    
            }
                                    
           if(uniforms.pongBallCoords.value.y<0){
                    ballVectorY*=-1.;
                    uniforms.pongBallCoords.value.y=0
                }
            else if(uniforms.pongBallCoords.value.y>yEdge){
                    ballVectorY*=-1.;
                    uniforms.pongBallCoords.value.y=yEdge
                }
                                    
         }
                       

                     let thisChunk=0, lastChunk=0;
                    let vibrateArray= Array();
                            let error;
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
window.noteHit=false;
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
                    window.TIMESTAMP=0;
                    
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
             if(!scoreColorInversion)
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

                         (noteExpired|| (!notesDifferent&&window.osmdSound==0)) //let you hit the next note before the last note finishes unless the notes are the same just once
                       &&  ((Math.round(note)%12 ==noteOfScore && on
                           //-8 should callibrate from a halfstep count of 48 == C4 natural into concert pitch of A# == 49
                               ||osmd.cursor.NotesUnderCursor()[0].isRestFlag//exempt from having to hit the note if rest or cue
                               ||osmd.cursor.NotesUnderCursor()[0].isCueNote
                           )||window.osmdSound==2)
                       )
                               {
                             
                                           // singAlong2[o] =  new Wad({source : instrument2})
                                       
                                   c
                                 thelastnotehit = nts[n].halfTone-8;
                                 noteHit=true;
                                 break;
                               }


                       }



           //https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/710
           if(noteExpired&&(noteHit||window.osmdSound==2)){
               
               
               
               
             osmd.cursor.next(); // advance the cursor one note
            
               if(osmd.cursor.Iterator.endReached){
                 // osmd.setOptions({darkMode: scoreColorInversion}); // or false. sets defaultColorMusic and PageBackgroundColor.
                if(!(document.getElementById("scoreBlack").checked  == true||document.getElementById("scoreWhite").checked  == true)
) scoreColorInversion= !scoreColorInversion;
                   setOSMDcolors()

             takeNextScoreSlice(1);
               
               
               osmd.cursor.hide();
               osmd.render();
               osmd.cursor.reset();
               osmd.cursor.show();
           }


         var notesUnderCursor = osmd.cursor.NotesUnderCursor();//the argument 0 hopefully specifies first instrument

               for(var i=0;i<window.osmdOscillators;i++)  for(var o=0;o<window.osmdOscillators;o++)
               {singAlong[o].stop();
                   singAlong2[o].stop();
               }
               for(var n = 0.; n< notesUnderCursor.length; n++){
                   let noteOfScore=(notesUnderCursor[n].halfTone-8)%12;
                   
                   if(window.osmdSound!=0){
                       let frequencyOfNote = Math.pow(2.,(((noteOfScore))-1.)/12.
                                                      )*window.ConcertKey;
                       
                       if(n<osmdOscillators){
                           singAlong[n].play({env:{attack: .1, release:.0,hold:-1},
                           pitch:frequencyOfNote,
                               volume:window.touchVolume})
                           
                           singAlong2[n].play({env:{attack: .1, release:.0,hold:-1},
                           pitch:frequencyOfNote,
                               volume:window.touchVolume})
                       }
                   }
               }
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
                                let TouchMicroizer = false;
               function executeTouchRegime(){
                   
                   if(!shouldShowStar||touchOnlyMode)
                   {
                       uniforms.d.value.x = 0.;
                       uniforms.d.value.y = 0.;
                       uniforms.pongBallCoords.value.x=-window.innerWidth/2.;
                       uniforms.pongBallCoords.value.y=window.innerHeight/gr;

                   }
                   let coordinator = pixelShaderSize/2./minimumDimension*movementRate;//pixelShaderSize/2 is the frame size in the shader: "p=vec2(...."
                   if(xTouch==0&&yTouch==0&&!TouchMicroizer)
                   {
                       xTouchMicroBuffer=xTouchMicroBuffer/10000.;
                       yTouchMicroBuffer=yTouchMicroBuffer/10000.;
                       TouchMicroizer=true;
                   }
                   xTouch=0;
                   yTouch=0;
                   for(n=0;n<screenPressCoordX.length;n++)
                   {xTouch+= screenPressCoordX[n]*coordinator;
                       yTouch += screenPressCoordY[n]*coordinator;
                   }
                   
                   if(xTouch!=0)
                   {xTouchMicroBuffer=xTouch;
                       TouchMicroizer=false;
                   }
                   if(yTouch!=0){
                       yTouchMicroBuffer=yTouch;
                       TouchMicroizer=false;

                   }
                        if(!zoomAtl41)
                            {
                              lastZoom = zoom;
                              zoomRoutine();
                                infinicore();

                            }
                            else lastZoom=zoom;
                                setZoomRate();

                                //if(pointerZoom)
                                {
                                    ONbypass = true;
                                    uniforms.d.value.x=0.;
                                    uniforms.d.value.y=0.;
                                    let touchMovement=[0,0];
                                     if(zoomRate!=0&&!zoomAtl41) touchMovement = [-Math.abs(zoom-lastZoom)*xTouch, Math.abs(zoom-lastZoom)*yTouch];
                                        else touchMovement=[-xTouch/zoomFrames,yTouch/zoomFrames]
                                    if(!window.shouldShowStar||touchOnlyMode)uniforms[ "volume" ].value=1.;
                                    uniforms["zoomOutRatchetThreshold" ].value=0.;
                                    let dxVolumized =xTouchMicroBuffer
                                    let dyVolumized =yTouchMicroBuffer

                                    if(uniforms[ "volume" ].value>zoomOutRatchetThreshold)
                                    {
                                        dxVolumized /=uniforms[ "volume" ].value
                                        dyVolumized /=uniforms[ "volume" ].value
                                    }
                                    else uniforms[ "volume" ].value=1.;
                                        uniforms.d.value.x+=dxVolumized;
                                        uniforms.d.value.y+=-dyVolumized;
                                    
                                    var spunTouch=touchMovement;
                                          if(uniforms.carousel.value!=0.)
                                              spunTouch=spin(touchMovement,-uniforms.carousel.value*(uniforms[ "time" ].value*uniforms[ "rate" ].value+Math.PI)%(Math.PI*2.));
                                              coordX+= spunTouch[0];
                                              coordY+= spunTouch[1];
                                    
                                                uniforms.coordSHIFT.value.x+=spunTouch[0];
                                                uniforms.coordSHIFT.value.y+=spunTouch[1];
                                                                            
                                                                        
                                    uniforms.maxSamp.value=0.;
                                                                        //else  uniforms.coordSHIFT.value=new THREE.Vector2(0,0);

                                    fromCenter = (coordX*coordX+coordY*coordY)**.5;
                                  }

                                  uniforms[ "zoom" ].value = zoom;
                                       uniforms.coords.value = new THREE.Vector2(coordX,coordY);
                                    constellationCoordFind();
                        uniforms.STAR.value=null;
                        uniforms.EDEN.value=null;
                   freezeTop();
                   shaderScene.remove(line)

                   renderer.setRenderTarget (null)
                                                                         renderer.render( shaderScene, camera );
                   shaderScene.add(line)

                                                                     
                                                                   
                            if(textON)
                            {
                                document.getElementById("textWindow").innerHTML =
                                
                                "cores: " +(Math.floor(uniforms["centralCores"].value)+cloverSuperCores*singleHyperCoreDepth+uniforms.upCoreCycler.value)+
                                " metaCores: "+Math.floor(uniforms["externalCores"].value)+", <p style='margin : 0px'></p>"+

                                "zoom: "+(zoom/2.**(singleHyperCoreDepth*cloverSuperCores))+"<p style='margin : 0px'></p>"+
                                "real part: "+ coordY +"<p style='margin : 0px'></p>"+
                                "imaginary part: "+ coordX+"<p style='margin : 0px'></p>"+
                                "FPS: "+Math.round(FPS)
                            ;
                                          
                                          }
                            else document.getElementById("textWindow").innerHTML = "";



                                                                    
 }
                 let   upOrDown = 1;
                                           let hyperCorePixel = new Uint8Array(4).fill(0.);

                                           
                                           let firstAnimation = true;
                                              let ONbypass;
                                          let lastTIMEUNIFORM = 0.;
                                          
                                          let lowAmpFreq = 1;

                                          function animate( timestamp ) {
                                   // console.log('colorCombo '+uniforms.colorCombo.value+' colorCombo2 '+uniforms.colorCombo2.value)
                                    if(window.streaming)
                                    {
                                        const context = videoCanvas.getContext("2d");
                                        
                                        context.drawImage(window.video, 0, 0, window.innerWidth, window.innerHeight);
                                        
                                        const myImageData = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
                                        
                                        let videoTexture = new THREE.DataTexture( myImageData.data, window.innerWidth, window.innerHeight, THREE.RGBAFormat,THREE.UnsignedByteType);
                                        videoTexture.needsUpdate=true;
                                        uniforms.videoTexture.value=videoTexture;
                                        uniforms.videoTexture.needsUpdate = true;
                                        
                                        
                                        
                                    }
                                    else
                                    {
                                    //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas the eponymous hippopotamus
                                    let videoTexture = new THREE.DataTexture(  new Uint8Array(window.innerWidth* window.innerHeight*4.), window.innerWidth, window.innerHeight, THREE.RGBAFormat,THREE.UnsignedByteType);
                                    videoTexture.needsUpdate=true;
                                    uniforms.videoTexture.value=videoTexture;
                                    uniforms.videoTexture.needsUpdate = true;
                                }

                                    
                                    
                                    
                                    
                                    if(window.streaming2)
                                    {
                                        
                                            const context2 = videoCanvas2.getContext("2d");
                                            
                                            context2.drawImage(window.video2, 0, 0, window.innerWidth, window.innerHeight);
                                            
                                            const myImageData2 = context2.getImageData(0, 0, window.innerWidth, window.innerHeight);
                                            
                                            let videoTexture2 = new THREE.DataTexture( myImageData2.data, window.innerWidth, window.innerHeight, THREE.RGBAFormat,THREE.UnsignedByteType);
                                            videoTexture2.needsUpdate=true;
                                            uniforms.videoTexture2.value=videoTexture2;
                                            uniforms.videoTexture2.needsUpdate = true;
                                        
                                        
                                    }
                                    else
                                    {
                                    //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas the eponymous hippopotamus
                                    let videoTexture2 = new THREE.DataTexture(  new Uint8Array(window.innerWidth* window.innerHeight*4.), window.innerWidth, window.innerHeight, THREE.RGBAFormat,THREE.UnsignedByteType);
                                    videoTexture2.needsUpdate=true;
                                    uniforms.videoTexture2.value=videoTexture2;
                                    uniforms.videoTexture2.needsUpdate = true;
                                }

                                    
                                    
                                    
                                    
                                    
    ONbypass = false;
     if( window.touchMode//&&!DAW
        ||window.touchOnlyMode)
     {    setDynamicSampler2ds();//normally does nothing

         setMicInputToStarPIXEL();
         executeTouchRegime();
     }
                     
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
           if(window.DAW)
           {
               
               let DAWstarStride=0.;
               
               var maxTestar=.5;
               var minTestar=1.;
              
               /*
               
               for (var g=0; g<dawNODES; g++) {
                   if(isFinite(dawAMPLITUDE[g])){
                       if(dawAMPLITUDE[g]>maxTestar) maxTestar=dawAMPLITUDE[g];
                       if(dawAMPLITUDE[g]<minTestar) minTestar=dawAMPLITUDE[g];
                   }
                   
               }*/
                   
                   
                   
                   
                   for (var g=0; g<DAWSonicTouchArray.length;
                        g++)
                       
                   {
                       let dawNOTE=DAWSonicTouchArray[g].dawNOTE
                       let dawNOTEbase=DAWSonicTouchArray[g].DAWinitialNOTE
                       let dawAMPLITUDE=DAWSonicTouchArray[g].dawAMPLITUDE

                       if(isFinite(dawAMPLITUDE)&&dawAMPLITUDE!=0.&&isFinite(dawNOTE)&&dawNOTE!=0.){
                           
                           let arm =flip*((dawNOTE+twist+12)*radialWarp)%24/24*pi*2.;
                           const lengtOriginal=dawAMPLITUDE;//twice applied
                           var widt = pi/24.;
                           //if (widt==0)widt=starshipSize;
                        //   console.log(arm+"arm DAW widt"+widt+" node"+g)
                          // console.log(lengtOriginal+"lengtOriginal node"+g)
                           //var widt =starshipSize;
                           const colorNoteCurrent = new THREE.Color();
                           const colorNoteCurrentOctave = new THREE.Color();
                         //  const octaveColor = (-DAWarray[g].DAWoctavesBoosted+5.)/24/10./2.;
                           colorNoteCurrent.setHSL(((-dawNOTE+8*uniforms.brelued.value)*uniforms.brelued.value)%24/24.,1.,.5 );
                           //colorNoteOctave.setHSL(((-dawNOTE+8*uniforms.brelued.value)*uniforms.brelued.value)%24/24., .5+octaveColor,.25+octaveColor);
                           const colorNoteInitial = new THREE.Color();
                           colorNoteInitial.setHSL(((-dawNOTEbase+8*uniforms.brelued.value)*uniforms.brelued.value)%24/24., 1.,.5);//297 is around the highest heard note
                           const rpio2 =arm+pi/2.;
                           const x =widt*-Math.sin(rpio2);
                           const y = widt*-Math.cos(rpio2);
                           const xr = lengtOriginal*-Math.sin(arm);
                           const yr = lengtOriginal*-Math.cos(arm);
                           const depth = -.0;//+lengtOriginal/maxToMin*starShipDepthInSet;//shortest bar on top
                 /*          DAWstarColorAttribute.setXYZW(DAWstarStride,.5,.5,.5,1.)
                           DAWstarColorAttribute.setXYZW(DAWstarStride+1,vop.r,vop.g,vop.b,.0)
                           DAWstarColorAttribute.setXYZW(DAWstarStride+2,vop.r,vop.g,vop.b,1.)
                           DAWstarPositionAttribute.setXYZ(DAWstarStride,(xr-x), (yr-y),  depth)
                           DAWstarPositionAttribute.setXYZ(DAWstarStride+1, 0., 0.,  0.)
                           DAWstarPositionAttribute.setXYZ(DAWstarStride+2,(xr+x), (yr+y),  depth)
                           DAWstarStride+=3
*/
                          
                           let colorA = colorNoteCurrent ;
                           let colorB = colorNoteInitial ;
                           let BlackOrWhite=1.;

                           if(Oreo!=0)
                           {
                               let t = Math.round(dawNOTE%24/2.)
                               if (t==7||t==5||t==2||t==0||t==10)
                               {
                                   BlackOrWhite=-.5;
                                   colorA.r*=2.;
                                   colorA.g*=2.;
                                   colorA.b*=2.;
                                   colorB.r*=2.;
                                   colorB.g*=2.;
                                   colorB.b*=2.;
                                    
                               }
                           }
                           else BlackOrWhite=0.5;
                           DAWstarColorAttribute.setXYZW(DAWstarStride,colorA.r,colorA.g,colorA.b,1.)
                           DAWstarColorAttribute.setXYZW(DAWstarStride+1,BlackOrWhite,BlackOrWhite,BlackOrWhite,1.)
                           DAWstarColorAttribute.setXYZW(DAWstarStride+2,colorA.r,colorA.g,colorA.b,1.)
                           DAWstarPositionAttribute.setXYZ(DAWstarStride,(xr-x), (yr-y),  -1.)
                           DAWstarPositionAttribute.setXYZ(DAWstarStride+1, 0., 0.,  -1.)
                           DAWstarPositionAttribute.setXYZ(DAWstarStride+2,(xr+x), (yr+y),  -1.)
                           DAWstarStride+=3

                     //      console.log(DAWstarStride)
                         
                           const x2 =x;
                           const y2 =y;
                           const xrTIPTRIANGLE = widt*-Math.sin(arm)*2.;
                           const yrTIPTRIANGLE = widt*-Math.cos(arm)*2.;
                           DAWstarColorAttribute.setXYZW(DAWstarStride,colorB.r,colorB.g,colorB.b,1.)
                           DAWstarColorAttribute.setXYZW(DAWstarStride+1,BlackOrWhite,BlackOrWhite,BlackOrWhite,1.)
                           DAWstarColorAttribute.setXYZW(DAWstarStride+2,colorB.r,colorB.g,colorB.b,1.)
                           
                           DAWstarPositionAttribute.setXYZ(DAWstarStride,(xr+x2)-xrTIPTRIANGLE, (yr +y2)-yrTIPTRIANGLE,  -1.)
                           DAWstarPositionAttribute.setXYZ(DAWstarStride+1, xr+xrTIPTRIANGLE/3., yr+yrTIPTRIANGLE/3.,  -1.)
                           DAWstarPositionAttribute.setXYZ(DAWstarStride+2,(xr-x2)-xrTIPTRIANGLE, (yr-y2)-yrTIPTRIANGLE,  -1.)
                           DAWstarStride+=3
                           
                           /*working tip, wrong direction
                            const xTIPTRIANGLE =widt*-Math.sin(rpio2)/2.;
                           const yTIPTRIANGLE = widt*-Math.cos(rpio2)/2.;
                           const xrTIPTRIANGLE = widt*-Math.sin(arm);
                           const yrTIPTRIANGLE = widt*-Math.cos(arm);
                           DAWstarColorAttribute.setXYZW(DAWstarStride,.5,.5,.5,1.)
                           DAWstarColorAttribute.setXYZW(DAWstarStride+1,.5,.5,.5,1.)
                           DAWstarColorAttribute.setXYZW(DAWstarStride+2,.5,.5,.5,1.)
                           DAWstarPositionAttribute.setXYZ(DAWstarStride+2,(xr-x), (yr-y),  depth)
                           DAWstarPositionAttribute.setXYZ(DAWstarStride+1, xr+xrTIPTRIANGLE, yr+yrTIPTRIANGLE,  1.)
                           
                           DAWstarPositionAttribute.setXYZ(DAWstarStride,(xr+x), (yr +y),  depth)
                           DAWstarStride+=3
*/
                     //      console.log(DAWstarStride)
                       }
                   }
                   
               
               
               DAWstarPositionAttribute.needsUpdate = true; // required after the first render
               DAWstarColorAttribute.needsUpdate = true; // required after the first render
               
           }
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
     window.TIMESTAMP=timestamp;//used in hotkeys to set window.timeRESET

    
     
     if(!sheetTranslucent&& bottomOfScreenHeight != document.getElementById("osmdCanvas").offsetHeight+document.getElementById("textWindow").offsetHeight)onWindowResize();//readjust for verbose
    uniforms[ "time" ].value = timestamp/1000.+window.startTimeSecondMantissaMagnified;

    if(uniforms.starSpin.value!=0&&isFinite(uniforms[ "time" ].value)&&isFinite(lastTIMEUNIFORM))
    {let timeTwistIncrement=(( uniforms[ "time" ].value -lastTIMEUNIFORM)*uniforms[ "rate" ].value*-uniforms.starSpin.value*12./Math.PI)%24.;//Needs 12/PI to synchronize with carousel.
        window.twist-=timeTwistIncrement;
        
        for(var v = 0; v<maxTouchSoundCount;v++){
            
           // SonicTouchArray[v].initialTwist[v]-=timeTwistIncrement;
            SonicTouchArray[v].permanentInitialTwist[v]-=timeTwistIncrement;
           // SonicTouchArray[v].twistModulated-=timeTwistIncrement;

        }
        
        for(var v = 0; v<DAWSonicTouchArray.length;v++){
          //  DAWSonicTouchArray[v].twistModulated-=timeTwistIncrement;
            //DAWSonicTouchArray[v].initialTwist[v]-=timeTwistIncrement;
            DAWSonicTouchArray[v].permanentInitialTwist[v]-=timeTwistIncrement;
        }
    }
                                          lastTIMEUNIFORM =uniforms[ "time" ].value;
    uniforms.twistStar.value=(window.twist/24.+1.)%1.*2.*Math.PI;

     
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
    if (!isFinite(interpolation)||interpolation==0.)interpolation = 1.;
                        if(loopsRun<3)interpolation=1.;//this is to prevent frametime leak on mobile
                                    
                        if(interpolation>60)interpolation=1.;//this is to prevent frametime leak on mobile
    if(!generated||bigCloverGapSync){interpolation=1;bigCloverGapSync=false;}
    lastFrameTime=timestamp;
    if(!window.touchMode)pointerZoom=false;
    else on=false;

                                    
                                    if (window.micOn&&!touchOnlyMode){
                                        analyser.getFloatTimeDomainData(inputData); // fill the Float32Array with data returned from getFloatTimeDomainData()
                                        analyser.getByteFrequencyData(  dataArray);
                                        setMicInputToStarPIXEL();
                                    }
                                         
                                    
                                    
                                    
                                    totalAMP = 0.;
                                    for(var n=0; n<inputData.length;n++)totalAMP+=Math.abs(inputData[n]);
                                        totalAMP/=inputData.length;
                                                       // if(window.android)totalAMP=totalAMP**.5/8.;//may not work as intended on all platforms, if at all
                                                     //   else if(iOS)totalAMP=totalAMP*2.;//may not work as intended on all platforms, if at all
                                    uniforms["totalAmp" ].value=totalAMP;
                                     if(window.ISdilated)
                                     uniforms.coreDilation.value=.5+.5*totalAMP**2.*Math.sqrt(24.)*2.;
                                      //   console.log(uniforms.coreDilation.value)
                                         else             uniforms.coreDilation.value=0.;
                                    
                                    
                                    if(totalAMP>.000001)
                                    {
                                        lastPitch = pitch;
                                        // pitch =   (totalAMP>zoomOutRatchetThreshold)? audioX.sampleRate/calculatePitch():pitch;
                                        pitch = audioX.sampleRate/calculatePitch();
                                        const notNyquist = Math.abs(pitch-audioX.sampleRate/numberOfBins/2.)>1.;
                                        if(!notNyquist&&totalAMP>0.) pitch = lastPitch;
                                   
                                    
                                    
                                if (isFinite(pitch) &&pitch>0&& notNyquist &&pitch!=-1&&totalAMP>zoomOutRatchetThreshold) {
                                    aboveThreshold = true;
                                    on = true;
                                }
                                else{aboveThreshold = false; on = false;if(!touchMode) uniforms.volume.value=0.00001}

                                    }else{aboveThreshold = false; on = false;if(!touchMode)uniforms.volume.value=0.00001}

                                    
if( (!window.touchMode||(window.shouldShowStar))&&!window.touchOnlyMode) {

    
    
           if(window.volumeSpeed&&on)
           {
                   if(lastVolume!=0.) lastVolume=volume;
               volume = (totalAMP-zoomOutRatchetThreshold)*audioX.sampleRate/bufferSize;
               if(volume<0.)volume=0.;
               if(lastVolume==0.) lastVolume=volume;
                       }
           else {volume=1.; lastVolume=1.; }
    
    
   if( !window.touchMode//&&!DAW
      )
   {
       if(!zoomAtl41&&zoomRate!=0.)
       {zoomRoutine();
           infinicore();
       }
   }
    //if(on)
        move();
    if("osmd" in window&&osmd!=null)runOSMD();

    pongRoutine(d_x,d_y);

        spiral_compress();
        
        vectorize4();
    
    let lowNote = 10000000.;
     lowAmpFreq = 1;

     lowAmpFreq = 1;
    for(var kappa=0.;kappa<testarContinuous.length;kappa++)if (lowNote>testarContinuous[kappa]&&testarContinuous[kappa]>0.&&isFinite(testarContinuous[kappa])
                                                               )
    {lowNote=testarContinuous[kappa]
        lowAmpFreq =  frequencies[kappa]
        uniforms.lownote.value=mustarD[kappa]/2.;
    }
    if(    window.playQuietestSound){
        quietestSound.play({env:{attack: 0.,hold:interpolation/60.*2, release:FPS/60.},pitch:lowAmpFreq,volume:1.})
        quietestSound2.play({env:{attack: 0.,hold:interpolation/60.*2, release:FPS/60.},pitch:lowAmpFreq,volume:1.})
    }
    //uniforms.lownote.value=lowNote;
    let coreShift=0;
    for(var shift = 0.;shift<4;shift++)//find maximally different loudest note
       if (Math.abs(Math.abs((note*2)%24-loudestFret[shift].note%24)-24/2.)<Math.abs(coreShift-24/2.))
        coreShift=Math.abs((note*2)%24-loudestFret[shift].note%24)/24.

           renderer.readRenderTargetPixels (cloverRenderTarget,  Math.floor(window.innerWidth/2.), Math.floor(window.innerHeight/2.),1,1,  hyperCorePixel)
           //hyperCorePixel[0]/=4.;
           // hyperCorePixel[1]/=4.;
    let hyperCoreOffset = Math.ceil(hyperCorePixel[0]);
    if(!isNaN(loudestFret[0].volume)&&window.dynamicCoring)
        coreData[hyperCoreOffset]=Math.abs(coreShift)+2./3.;//24*1.3247;
    
    if(!isNaN(loudestFret[0].volume)&&omniDynamicEngaged)
        omniData[hyperCoreOffset]=coreShift/2.;

    if(true//||!DAW
)setDynamicSampler2ds();

   if(spirographMODE!=0)makeSpirograph();


    if (computeFPS)
    {
        framesLong=FPS

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
    const noteTwisted = (note +twist*flip/2.+12*10000)%12
    var hour =Math.floor(Math.floor(noteTwisted))%12;
    if (hour==0)hour = 12;
    const minute =(noteTwisted-Math.floor(noteTwisted))*60;
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
          "quietest: "+notes[Math.round(uniforms.lownote.value)%12] +" _ "+uniforms.lownote.value+"<p style='margin : 0px'></p>"+
          " note: "+noteName+", cents: "+cents+", freq: "+fr+"<p style='margin : 0px'></p>"+
          "note number: "+n_n+", time: "+timeOfTheSound+"<p style='margin : 0px'></p>"+
          "cores: "+cores+", metaCores: "+ uniforms.externalCores.value + "<p style='margin : 0px'></p>"+
          "zoom: "+zoom/2.**(singleHyperCoreDepth*cloverSuperCores)+"<p style='margin : 0px'></p>"+                // style='margin : 0px'
          "InOutThresh: "+zoomOutRatchetThreshold+"<p style='margin : 0px'></p>"+
          "amplitude: "+totalAMP+"<p style='margin : 0px'></p>"+
          "FPS: "+Math.round(FPS)+ ", above threshold: "+aboveThreshold+"<p style='margin : 0px'></p>"
          //+"<p style='margin : 0px'></p>"+"X: "+String(-coordX)+" Y: "+String(-coordY);
          +"<p></div>";
      }
      else document.getElementById("textWindow").innerHTML = "";

    
        uniforms[ "time2dance" ].value += audioX.sampleRate/bufferSize*totalAMP;
    uniforms["zoomOutRatchetThreshold" ].value=zoomOutRatchetThreshold;

        if(!shouldShowStar||totalAMP>zoomOutRatchetThreshold&&on) uniforms["volume" ].value = audioX.sampleRate/bufferSize*totalAMP/(1.+zoomOutRatchetThreshold);
        uniforms[ "zoom" ].value = zoom;
    
    
    
    uniforms.coordSHIFT.value.x+=d_x;
    uniforms.coordSHIFT.value.y+=d_y;
    
    
   if( !window.touchMode//&&!DAW
      ) uniforms.coords.value = new THREE.Vector2( coordX,coordY);
    constellationCoordFind();
    
   if (EldersLeg>=0//&&!DAW
       ){


    let metroPhase =-Math.sin(-uniforms[ "time" ].value*uniforms[ "metronome" ].value*pi)
       let frameCount=((loopsRun%2)-.5)*2222222;

    if(spirographMODE==2){
    lineMat.color = colorSound;
  }
       else if (uniforms[ "metronome" ].value>1)lineMat.color  = new THREE.Color("").setRGB(metroPhase,metroPhase,metroPhase)
           else if(spirographMODE==1) lineMat.color = new THREE.Color("").setRGB(frameCount,frameCount,frameCount);
   
       
                            
                            let tx = spirray0[0], ty = spirray1[1],greyness=1.,greynessLast=-1;
                            
  var lineStride=0;
   
        //scene.add(line)
       let depthSpirograph =-1.;

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
                linePositionAttribute.setXYZ(lineStride,txlast,tylast, depthSpirograph)
              linePositionAttribute.setXYZ(lineStride+1,tx, ty, depthSpirograph)
                
             //  lineColorAttribute.setXYZ(lineStride,greyness, greyness, greyness);
              //  lineColorAttribute.setXYZ(lineStride+1,greyness, greyness, greyness );
                
               // lineStride+=2;
                lineStride+=2;

                ;} }
       else  for (let r= 0.; r < bufferPortion*2; r +=1) linePositionAttribute.setXYZ(r,0,0,0)

    
    linePositionAttribute.needsUpdate = true;
    lineColorAttribute.needsUpdate = true;


       
       var maxStack=0.0000001;
       var minStack=100000000000000;


        

        
        
        if(window.orderedStack)
            for (var g=0; g<12; g++) {
                if(isFinite(stack12Array[g])){
                    if(stack12Array[g]>maxStack) maxStack=stack12Array[g];
                    if(stack12Array[g]<minStack) minStack=stack12Array[g];
                }
            }
            
       
       
            const incrementHeight = .2;
            const incrementWidthToStart = starshipSize/1.25;
       
        const stackTransparency = .75;
       
       

       
       let stackStride = 0.;
       if (window.orderedStack)
            for (var g=0; g<12; g++) {
                let elevation =(stack12Array[g]-minStack)/(maxStack-minStack);
                const vop = new THREE.Color();
                vop.setHSL(((-g+4*uniforms.brelued.value)*uniforms.brelued.value)%12/12., 1.,.5);//297 is around the highest heard note
                
                let y1 = (elevation+incrementHeight)/1.5-1.
                let y2 =  (elevation)/1.5-1.;
                let depth = -1.+(1.-elevation)/1000.;
                let incrementWidth=((incrementWidthToStart*((g*window.flip+twist/2.+12.)%12+.5))/12.-incrementWidthToStart/2.);
                           let incrementWidth2=((incrementWidthToStart*((g*window.flip+twist/2.+12.)%12-1+.5))/12.-incrementWidthToStart/2.);

                     stackColorAttribute.setXYZW(stackStride,vop.r,vop.g,vop.b,stackTransparency)
                     stackColorAttribute.setXYZW(stackStride+1,vop.r,vop.g,vop.b,stackTransparency)
                     stackColorAttribute.setXYZW(stackStride+2,vop.r,vop.g,vop.b,stackTransparency)
                
                stackColorAttribute.setXYZW(stackStride+3,vop.r,vop.g,vop.b,stackTransparency)
                stackColorAttribute.setXYZW(stackStride+4,vop.r,vop.g,vop.b,stackTransparency)
                stackColorAttribute.setXYZW(stackStride+5,vop.r,vop.g,vop.b,stackTransparency)
        
            
                
                stackPositionAttribute.setXYZ(stackStride,incrementWidth2,y1,  depth)
                stackPositionAttribute.setXYZ(stackStride+1, incrementWidth, y2,  depth)
                stackPositionAttribute.setXYZ(stackStride+2,incrementWidth, y1,  depth)
                
                
                
                 stackPositionAttribute.setXYZ(stackStride+4,incrementWidth2,y1,  depth)
                 stackPositionAttribute.setXYZ(stackStride+3, incrementWidth, y2,  depth)
                 stackPositionAttribute.setXYZ(stackStride+5,incrementWidth2, y2,  depth)
                
            
                stackStride+=6;
            }

       
            
            stackPositionAttribute.needsUpdate = true; // required after the first render
            stackColorAttribute.needsUpdate = true; // required after the first render
          
       
       
       
       
       
       
       
       
       
       
       
   var maxTestar=0.0000001;
   var minTestar=100000000000000;


    

    
    
    let starStride = 0;
    if(onO){
        for (var g=0; g<starArms; g++) {
            if(isFinite(testarContinuous[g])){
                if(testarContinuous[g]>maxTestar) maxTestar=testarContinuous[g];
                if(testarContinuous[g]<minTestar) minTestar=testarContinuous[g];
            }
        }
        if (maxTestar==minTestar)minTestar=0;
        const fill =1000./(timestamp - timestamplast)*secondsToEdge;//This should be set to either sampleRate/fftSize or by predicted FPS
        timestamplast = timestamp;
        const waterRadiusScalar = 7./8.;

        
        
        
        
        
        for (var g=0; g<starArms; g++)
            
        {
            
            if(isFinite(testarContinuous[g])&&testarContinuous[g]!=0.&&isFinite(mustarD[g])&&mustarD[g]!=0.){
                //arm =flip*(g*radialWarp+twist*EldersLeg/24.)%EldersLeg/EldersLeg*pi*2.;

                let arm =flip*((mustarD[g]+twist+12)*radialWarp)%24/24*pi*2.;
                const lengtOriginal=(testarContinuous[g]-minTestar)/(maxTestar-minTestar);//twice applied
                var widt = (1.-lengtOriginal)*starshipSize;
                if (widt==0)widt=starshipSize;
                //var widt =starshipSize;

                const vop = new THREE.Color();
                vop.setHSL(((-mustarD[g]+8*uniforms.brelued.value)*uniforms.brelued.value)%24/24., mustarD[g]/lightingScaleStar,mustarD[g]/lightingScaleStar);//297 is around the highest heard note
                
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
                let depthINNER = (-starShipDepthInSet+timeShift/OUTERSHELL)*starShipDepthInSet;
                let depthOUTER = depthINNER+m.lengt;
                let starStreamStride = 0;
                
                let starMoment=starStreamIndex;
                while(xyStarParticleArray[starMoment]!=null&&starMoment!=(starStreamIndex+1)%starCount)
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
                        //let alph = timeShift*starShipDepthInSet;
                        for(var yy=0;yy<6;yy++) starStreamColorAttribute.setXYZW(starStreamStride+yy, m.vop.r, m.vop.g, m.vop.b,1.-timeShift/OUTERSHELL*.5)//alpha is beta
                            //if(xyStarParticleArray[(starMoment-1+starCount)%starCount])console.log(timeShift)
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
                    if (maxTestar==minTestar)minTestar=0;

                    let maxFret = -1000000;
                    let minFret = 10000000;
                    
                    for (var g=0; g<EldersLeg; g++) {
                        if(innerFrets[g]>maxFret){maxFret=innerFrets[g];}
                        if(innerFrets[g]<minFret)minFret=innerFrets[g];
                    }
                    if (maxFret==minFret)minFret=0;

                    let maxMinDiff  = maxFret-minFret;
    let twoOr1= EldersLeg<=2
    if(twoOr1){maxTestar=1;minTestar=0;}
    let oddSkew =EldersLeg%2/2;
    let bottomNote = Math.round(-twist+24)%24;
    let topNote = Math.round(-twist+60)%24;

                    let centerDisplacement = .5;//4./7.;//9./14.;
                                                         
                                                         var TransparencyStar = 0.25;
                                                         var TransparencyStar2 = 1.;

    let inset = 1.;
let depBuffer = (-starShipDepthInSet+(1.-starShipDepthInSet))/inset-1.+1./inset;
    
let fretMultiplied = oddSkew+EldersLeg/((radialWarp<1)?radialWarp:1);
            for (var g=oddSkew; g<fretMultiplied; g++) {
                let incrementation = (EldersLeg%2==0)?g%2:(g+1)%2;
                //incrementation/=2.;
               incrementation++;
;

                let arm =0;
                let lengt =0;
                let widt =0;
                if(EldersLeg>0.)
                {
                    widt= starshipSize/(EldersLeg/24.)**.5/incrementation/2.;
                    if (g==bottomNote&&EldersLeg==24)widt*=2.;
                    else if (g==topNote&&EldersLeg==24)widt*=1.5;
                 arm =flip*(g*radialWarp+twist*EldersLeg/24.)%EldersLeg/EldersLeg*pi*2.;
                 lengt = ((testar[(g+EldersLeg/2.)%EldersLeg])-minTestar)/(maxTestar-minTestar);;
                if(twoOr1) {
                    lengt/=2.**15./EldersLeg;
                    lengt=lengt**.25;
                }
                                  }
                                   let dep = depBuffer/1.001**(lengt);

                            let BlackOrWhiteFRET = .5;
                                  
                            if(g%2==0&&Oreo!=0)
                            {
                                const nt = Math.round(g/EldersLeg*12+6)%12;
                                if ((nt==7||nt==5||nt==2||nt==0||nt==10)==(Oreo==1)) BlackOrWhiteFRET=-1.;
                                else BlackOrWhiteFRET=.875;
                            }
                                  
                                  const vop = new THREE.Color();
                                  const pureColor = new THREE.Color();

                              let h = ((20/24.*EldersLeg*uniforms.brelued.value-g)*uniforms.brelued.value)%EldersLeg/EldersLeg;
                                                {
                     if(g==topNote&&(uniforms.Character.value==2||uniforms.Character.value==1))
                         {
                         pureColor.setRGB(.75,.75,.75);
                         vop.setRGB(.75,.75,.75);
                     }
                         else if (g==bottomNote&&(uniforms.Character.value==2||uniforms.Character.value==1))
                         {
                             let blackFret = .49;
                                                    pureColor.setRGB(blackFret,blackFret,blackFret);
                                                    vop.setRGB(blackFret,blackFret,blackFret);
                         }
                     
             else{ vop.setHSL(h,1.,BlackOrWhiteFRET);
             pureColor.setHSL(h,1.,.5);
                 
                                                }
                                        }


                
                                  //inner Star inspired by https://www.youtube.com/watch?v=_MTbjHKtobY Neffex song
const rpio2 =arm+pi/2.;
let xBoost = -Math.sin(arm)*centerDisplacement;
let yBoost = -Math.cos(arm)*centerDisplacement;
                
let x = widt*-Math.sin(rpio2);
let y = widt*-Math.cos(rpio2);
let xr = lengt*-Math.sin(arm);
let yr = lengt*-Math.cos(arm);
                                       // if(vop.r==vop.g||vop.b==vop.g)TransparencyStar=.875;
                                      //  else
                               //         if(vop.g==0.)   TransparencyStar*=(vop.r+vop.b*2.)/Math.max(vop.b,vop.r)/3.;
                                        
                                        //else TransparencyStar/=2.;
                                                  
                                        
                                        
                                                             starColorAttribute.setXYZW(starStride,pureColor.r,pureColor.g,pureColor.b,1.)
                                                             starColorAttribute.setXYZW(starStride+1,pureColor.r,pureColor.g,pureColor.b,1.)
                                                             starColorAttribute.setXYZW(starStride+2,vop.r,vop.g,vop.b,1.)
                                                             starColorAttribute.setXYZW(starStride+3,pureColor.r,pureColor.g,pureColor.b,1.)
                                                             starColorAttribute.setXYZW(starStride+4,vop.r,vop.g,vop.b,1.)
                                                             starColorAttribute.setXYZW(starStride+5,vop.r,vop.g,vop.b,1.)
                
                starPositionAttribute.setXYZ(starStride,-x+xBoost,    -y+yBoost,  dep)
                starPositionAttribute.setXYZ(starStride+1,x+xBoost,    y+yBoost,  dep)
                starPositionAttribute.setXYZ(starStride+2,(xr+x), (yr+y),  dep)
                
                starPositionAttribute.setXYZ(starStride+3,-x+xBoost, -y+yBoost,  dep)
                starPositionAttribute.setXYZ(starStride+4,(xr+x), (yr+y),  dep)
                starPositionAttribute.setXYZ(starStride+5,(xr-x), (yr-y),  dep)
                
                
                                  
                starStride+=6;
                                 
                                x *=-centerDisplacement/2.;
                                y *=-centerDisplacement/2.;
                                        // if (g==bottomNote&&EldersLeg==24)   x/=2.;
                                            //else
                                            //x/=1.25;
                                            //y/=1.25;
                                   if(maxMinDiff!=0&&!twoOr1)
                                        {
                                        lengt = (innerFrets[(g+EldersLeg/2.)%EldersLeg]-minFret)/(maxFret-minFret);
                                 
                                                             }
                                                             else{
                                            lengt = testar[(g+EldersLeg/2.)%EldersLeg];
                                            //if(twoOr1)
                                            {
                                                lengt/=2.**15./EldersLeg;
                                                lengt=lengt**.25;
                                            }
                                        }
                                       if(maxMinDiff!=0||twoOr1)
                                                             {
                                   xr = -(lengt-1.)*-Math.sin(arm)*centerDisplacement;
                                   yr = -(lengt-1.)*-Math.cos(arm)*centerDisplacement;
                                            
                                                      if (g==bottomNote&&EldersLeg==24)
                                                      {x/=1.5;y/=1.5}
                                                      else if (g==topNote&&EldersLeg==24) {x/=1.25;y/=1.25}

                                  starPositionAttribute.setXYZ(starStride,-x+xBoost,    -y+yBoost,  dep)
                                  starPositionAttribute.setXYZ(starStride+1,x+xBoost,    y+yBoost,  dep)
                                  starPositionAttribute.setXYZ(starStride+2,(xr+x), (yr+y),  dep)
                                  
                                  starPositionAttribute.setXYZ(starStride+3,-x+xBoost, -y+yBoost,  dep)
                                  starPositionAttribute.setXYZ(starStride+4,(xr+x), (yr+y),  dep)
                                  starPositionAttribute.setXYZ(starStride+5,(xr-x), (yr-y),  dep)
                                  
                                  
                                  
                                        starColorAttribute.setXYZW(starStride,vop.r,vop.g,vop.b,TransparencyStar)
                                        starColorAttribute.setXYZW(starStride+1,vop.r,vop.g,vop.b,TransparencyStar)
                                        starColorAttribute.setXYZW(starStride+2,pureColor.r,pureColor.g,pureColor.b,TransparencyStar2)
                                        starColorAttribute.setXYZW(starStride+3,vop.r,vop.g,vop.b,TransparencyStar)
                                        starColorAttribute.setXYZW(starStride+4,pureColor.r,pureColor.g,pureColor.b,TransparencyStar2)
                                        starColorAttribute.setXYZW(starStride+5,pureColor.r,pureColor.g,pureColor.b,TransparencyStar2)
                                                                           
                                               starStride+=6;
                          let greyBoost = (1.+incrementation/2.)*1.1;
                  x *= greyBoost;
                  y *= greyBoost;

                                           dep/=1.01;
                 starPositionAttribute.setXYZ(starStride,-x+xBoost,    -y+yBoost,  dep)
                 starPositionAttribute.setXYZ(starStride+1,x+xBoost,    y+yBoost,  dep)
                 starPositionAttribute.setXYZ(starStride+2,(xr+x), (yr+y),  dep)
                 
                 starPositionAttribute.setXYZ(starStride+3,-x+xBoost, -y+yBoost,  dep)
                 starPositionAttribute.setXYZ(starStride+4,(xr+x), (yr+y),  dep)
                 starPositionAttribute.setXYZ(starStride+5,(xr-x), (yr-y),  dep)
              
                 
                 let boostedGrey = 129/255.
                       starColorAttribute.setXYZW(starStride,boostedGrey,boostedGrey,boostedGrey,1.)
                       starColorAttribute.setXYZW(starStride+1,boostedGrey,boostedGrey,boostedGrey,1.)
                       starColorAttribute.setXYZW(starStride+2,boostedGrey,boostedGrey,boostedGrey,1.)
                       starColorAttribute.setXYZW(starStride+3,boostedGrey,boostedGrey,boostedGrey,1.)
                       starColorAttribute.setXYZW(starStride+4,boostedGrey,boostedGrey,boostedGrey,1.)
                       starColorAttribute.setXYZW(starStride+5,boostedGrey,boostedGrey,boostedGrey,1.)
                                                          
                              starStride+=6;
                 
                                            
                                  
                                                             }
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
    
         for (var ns=0; ns<12; ns++) {
             let t = (ns+11)%12;//(t+10)%12;//(t+4)%12.
             var vop = new THREE.Color();
             let BlackOrWhite=1;
             const noteGrey = Math.abs(t-(6-twist/2.)+12)%12;
             if (t==7||t==5||t==2||t==0||t==10)
             {
                 BlackOrWhite=0.;
             }
         if  ((noteGrey<.5 || noteGrey>11.5)&&uniforms.Character.value!=2&&BlackOrWhite!=0.)
         {
            // if(!uniforms.pixelSTARon.value)
             if(blankBackground&&!starClover)BlackOrWhite=1.;
             else BlackOrWhite=.5
        }
         else if( ((uniforms.Character.value==0&&(noteGrey<6.5&&noteGrey>5.5))&&BlackOrWhite!=1.) &&uniforms.colorCombo.value!=20&&!blankBackground&&starClover)
         {
           // if(!uniforms.pixelSTARon.value)BlackOrWhite=.5;
           //  else BlackOrWhite=0.;
         }
             
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
                 const finger = (isFinite(twelve[ns][g]))?twelve[ns][g]:0;
                 let arm =((g+5)%10-.5)/10.*pi*2.*uniforms.witnessFlip.value;

                 const lengt =(isFinite(maxFinger)&&maxFinger!=0)? (finger)/maxFinger*(1.-pi/12.) : 0;


                     for(var yy=0;yy<6;yy++)   starsANDwitnessesColorAttribute.setXYZ(fingerStride+yy,vop.r,vop.g,vop.b)
                    
                     const rpio2 =arm+pi/2.;
                     const fingerTwist=((flip*(ns+5.)+twist/2.*flip+12)%12)/12.*2.*pi;
                                        const x = widt*-Math.sin(rpio2+fingerTwist);
                                        const y = widt*-Math.cos(rpio2+fingerTwist);
                                        const xr = pi/12.*lengt*-Math.sin(arm+fingerTwist);
                                        const yr = pi/12.*lengt*-Math.cos(arm+fingerTwist);
                                        const offsetX=-Math.sin(fingerTwist)*(3./4.);//1.25
                                        const offsetY=-Math.cos(fingerTwist)*(3./4.);//1.25
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
                         scene.add(harmonicPzyghtheMesh)

                         if(window.pzyghthe>=3&&pitch-lastPitch!=0) upOrDown =  Math.sign(pitch-lastPitch);

                                             for (var t=0; t<xenOctaveFactor; t++) {
                                                 for (var g=0; g<12; g++) {
                                                     const widt = 1./3.;
                                                     //const lengt =starshipSize/(t+(g+1.)/12)**.5/7.;


                                                         var vop = new THREE.Color();
                                                     vop.setHSL((-note+(-g+4)*uniforms.brelued.value)%12/12.*uniforms.brelued.value
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

                                                          let   radialHarmonicInterval =
                                                     wisdom*2.*Math.PI*2**(xenOctaveFactor-( t+(g)/12.))/2**xenOctaveFactor;
                                                                                     const lengt = radialHarmonicInterval/144.;
                                                                                    radialHarmonicInterval+=angle;
                                                     const xr = widt*-Math.sin(-radialHarmonicInterval);
                                                     const yr = widt*-Math.cos(-radialHarmonicInterval);
                                                     const x = wisdom*lengt*-Math.cos(radialHarmonicInterval);
                                                     const y = wisdom*lengt*-Math.sin(radialHarmonicInterval);
                                                     const depth = -1;

                                                     let hollowCenterSize = 2.;
                                                     if(g==0)hollowCenterSize = 1.75;

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

                                                                                     
                 let red1=BlackOrWhiteNOTE, green1=BlackOrWhiteNOTE, blue1=BlackOrWhiteNOTE ,
                 red2=BlackOrWhiteNOTE , green2=BlackOrWhiteNOTE , blue2=BlackOrWhiteNOTE;
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
                            let zlast = z;
                     let seg = timeElapsedSinceRecording/((trailSecondsLong>0)?trailSecondsLong:1);
                     if(window.flame)seg*=seg;
                            z = (-1.+seg*.5);
                     let transparencyOfTrailLast =transparencyOfTrail;
                     transparencyOfTrail =1.-seg;

                           if (movementRate*timeElapsedSinceRecording>.5)z=.01*(-1.+timeElapsedSinceRecording/trailSecondsLong);
                           else {
                               transparencyOfTrail=254./255.;
                               transparencyOfTrailLast=transparencyOfTrail;
                           }
                     
                                               
                     let stylus=.5;
                 
                     let timeElapsedEXPONENTIAL = Math.log(24.-timeElapsedSinceRecording*12.)/LogTwoPowerOfTwelfth;
                     let timeElapsedScaled=timeElapsedSinceRecording;

                     if (timeElapsedEXPONENTIAL<Math.log(23.)/LogTwoPowerOfTwelfth)
                     {timeElapsedEXPONENTIAL *= 2.;
                         timeElapsedScaled*=2.;
                     }
                    let  timeMinusX = timeElapsedScaled-1.;
                     if(timeMinusX<0.&&timeElapsedEXPONENTIAL%1.<Math.sign(timeMinusX)*timeMinusX%1.&&window.stylusON)stylus=BlackOrWhiteNOTE;

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
                         r2 = r1;
                         g2 = g1;
                         b2 = b1;
                         transparencyOfTrail=1.
                        // z=-1.
                         //zlast=-1.;
                     }
                     else{
                         r1 = red1;
                         g1 = green1;
                         b1 = blue1;
                         if((r1==0&&g1==0&&b1==0)||(r1==1&&g1==1&&b1==1)){//just to make sure that in the stylus the colored bands are clearly visible
                             r2=r1;
                             g2=g1;
                             b2=b1;
                         }
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
            for(var e = 0; e<12*6; e++)  stackPositionAttribute.setXYZ(e,0,0,0);

             stackPositionAttribute.needsUpdate = true;
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
                                                                            if(uniforms.starOnDot.value==3)                circleMaterial.opacity=0.;
                                                                                            else if(uniforms.starOnDot.value>0)                circleMaterial.opacity=.5;
                                                                                                            else                       circleMaterial.opacity=.8;

                                        const sides = (isFinite(note))? Math.round((Math.abs((note+.5)%1.-.5))*12.)%12+2. : 0.;
                                  circle.geometry=new THREE.CircleGeometry(dotSize,sides,0.);
//circleGeometry.computeBoundingBox ();

circle.position.set(circleX,circleY,-.99);
uniforms.dotCoord.value =new THREE.Vector2(circleX,circleY) ;

                              if(isFinite(note))    circle.rotateZ(Math.abs((note%1)-1.)*Math.PI*2);

                   let colorBlack= new THREE.Color();
                   colorBlack.setStyle("black");


                   let centerOfDotToEdge = [];
                   centerOfDotToEdge.push( new THREE.Vector3(circleX+Math.sin(note/12.*Math.PI*2)*dotSize*volume, circleY+Math.cos(note/12.*Math.PI*2)*dotSize*volume, -1. ) );
                   centerOfDotToEdge.push( new THREE.Vector3(circleX,circleY,-1) );

                                  radialLine.geometry.setFromPoints( centerOfDotToEdge )

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
                                        
                                        const baseMag=(1.-(metaLevel-level)/(metaLevel));
                                        let compound =baseMag/100.*window.movementRate/pixelShaderToStarshipRATIO;

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
                                                         polygons[n].centerX += (d_x*neutralizer-polygons[n].dx)*MR*interpolation;
                                                       
                                                         polygons[n].centerY += (d_y*neutralizer-polygons[n].dy)*MR*interpolation;

                                                         if(uniforms.colorCombo.value==20&&!(uniforms.musicAngelMan.value>0&&(uniforms.Character.value==3||uniforms.Character.value==4))){
                                                             distanceFromCenter= Math.pow((xFromCent*xFromCent+(yFromCent+.25)*(yFromCent+.25)),.5)/uniforms.shaderScale.value/1.75/(Math.min(uniforms.resolution.value.x,uniforms.resolution.value.y)/Math.max(uniforms.resolution.value.x,uniforms.resolution.value.y));
                                                             triggerDistance=distanceFromCenter/(1./uniforms.shaderScale.value/1.75/(Math.min(uniforms.resolution.value.x,uniforms.resolution.value.y)/Math.max(uniforms.resolution.value.x,uniforms.resolution.value.y)));
                                                            
                                                             
                                                         }
                                                         else {
                                                             distanceFromCenter= Math.pow(xFromCent*xFromCent+yFromCent*yFromCent,.5);
                                                             triggerDistance=distanceFromCenter;
                                                             
                                                         }
                                                         
                                                         
                                                         // polygons[n].dx*=1.-baseMag;//resistance to speed accumulation
                                                         // polygons[n].dy*=1.-baseMag;
                                                         
                                                         
                                                         // if (distanceFromCenter<=1)
                                                         if(Math.sqrt(polygons[n].dx*polygons[n].dx+polygons[n].dy*polygons[n].dy)<window.movementRate)
                                                         {
                                                             compound*=Math.abs(.5*minimumDimension/maximumDimension -distanceFromCenter);
                                                    
                                                    
                                                        polygons[n].dx+=-Math.cos(angleTarget)*compound;
                                                        polygons[n].dy+=-Math.sin(angleTarget)*compound;
                                                    
                                                         }
                                                         var slowDown = .999**(interpolation);
                                                         polygons[n].dx*=slowDown;
                                                         polygons[n].dy*=slowDown;

                                                         const ddX= circleX-polygons[n].centerX;
                                                         const ddY= circleY-polygons[n].centerY;
                                                         const distDot = Math.sqrt(ddX*ddX+ddY*ddY);
                                                         if(uniforms.starOnDot.value!=2)
                                                         {
                                                             if ( triggerDistance<polyRad+dotSize &&polygons[n].exited){
                                                                 if (!polygons[n].caught)polygons[n].caught = true;
                                                                 else polygons[n].caught = false;
                                                                 polygons[n].caughtByDot=false;
                                                                 polygons[n].exited = false;}
                                                             else if (triggerDistance>polyRad+dotSize&&polygons[n].caughtByDot==false)polygons[n].exited = true;
                                                         }
                                                        if(uniforms.starOnDot.value!=3)//disable dot from catching if false
                                                         {
                                                             if ( distDot<polyRad+dotSize &&polygons[n].exited){
                                                                 if (!polygons[n].caught)polygons[n].caught = true;
                                                                 else polygons[n].caught = false;
                                                                 polygons[n].caughtByDot=true;
                                                                 polygons[n].exited = false;}
                                                             else if (distDot>polyRad+dotSize&&polygons[n].caughtByDot==true)polygons[n].exited = true;
                                                         }
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


//if(cellularDivision)
                                     /*
                                                       uniforms.coords.value= new THREE.Vector2  ( uniforms.coords.value.y, uniforms.coords.value.x)
                                                              
                uniforms.coords.value= new THREE.Vector2( uniforms.coords.value.x+-Math.sign(uniforms.coords.value.x)*.5,uniforms.coords.value.y)//;.multiplyScalar(3./2.);
                                                       
                                                       uniforms.coords.value= new THREE.Vector2  ( uniforms.coords.value.y, uniforms.coords.value.x)
                                                              
                                           */
                                                       /*
                                                uniforms.coords.value= new THREE.Vector2  ( uniforms.coords.value.y, uniforms.coords.value.x)
                                                       
                                                       uniforms.coords.value.x-=.5;
                                                       
           uniforms.coords.value=                  new THREE.Vector2  ( uniforms.coords.value.x-Math.sign( uniforms.coords.value.x)*.5, uniforms.coords.value.y);
                                                     
           uniforms.coords.value=//abs(
           new THREE.Vector2       ( uniforms.coords.value.x-Math.sign( uniforms.coords.value.x+.5)*.5, uniforms.coords.value.y);
                                                       uniforms.coords.value.x+=.5;
                                        uniforms.coords.value= new THREE.Vector2  ( uniforms.coords.value.y, uniforms.coords.value.x)
                                           */
   
                                     freezeTop();
                                                       
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
                                        
                                        if(uniforms.MannyONtrail.value!=2)  finalSceneRerenderedering.add(radialLine);
                                        if(uniforms.MannyONtrail.value!=2)  finalSceneRerenderedering.add(circle);
                                        wipeUniforms.cloverSampler.value=cloverRenderTarget.texture;
                                        renderer.render( finalSceneRerenderedering, camera );
                                        
                                        if(uniforms.MannyONtrail.value!=2) finalSceneRerenderedering.remove(radialLine);
                                        if(uniforms.MannyONtrail.value!=2) finalSceneRerenderedering.remove(circle);
                                    }
                                    else
                                    {
                                        
                                        if(uniforms.MannyONtrail.value!=2)  shaderScene.add(radialLine);
                                        if(uniforms.MannyONtrail.value!=2) shaderScene.add(circle);
                                        renderer.setRenderTarget (null)
                                        renderer.render( shaderScene, camera);
                                        
                                        if(uniforms.MannyONtrail.value!=2)  shaderScene.remove(radialLine);
                                        if(uniforms.MannyONtrail.value!=2) shaderScene.remove(circle);
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

                                        if(uniforms.MannyONtrail.value!=2) finalSceneRerenderedering.add(radialLine);
                                        if(uniforms.MannyONtrail.value!=2) finalSceneRerenderedering.add(circle);
                                        renderer.render( finalSceneRerenderedering, camera );
                                        if(uniforms.MannyONtrail.value!=2) finalSceneRerenderedering.remove(radialLine);
                                        if(uniforms.MannyONtrail.value!=2) finalSceneRerenderedering.remove(circle);
                                    }
                                    else{
                                        renderer.setRenderTarget (null)
                                        
                                      shaderScene.remove(line);
                                            scene.add(line);
                                        
                                            scene.add(radialLine);
                                            
                                                           if(uniforms.MannyONtrail.value!=2) scene.add(circle);
                                        renderer.render( scene, camera );
                                        
                                        if(uniforms.MannyONtrail.value!=2) scene.remove(radialLine);
                                        if(uniforms.MannyONtrail.value!=2) scene.remove(circle);
                                        scene.remove(line);
                                        shaderScene.add(line);

                                    }
                                      scene.remove(shaderMeshClone);
                                     }
                                 else
                                    {
                                                         
                                                       shaderScene.remove(line);
                                                             scene.add(line);
                                                         
                                    scene.background = new THREE.Color( 0x808080);
                                                         if(uniforms.MannyONtrail.value!=2) scene.add(radialLine);
                                    if(uniforms.MannyONtrail.value!=2) scene.add(circle);
                                                         
                                    renderer.render( scene, camera );

                                                         if(uniforms.MannyONtrail.value!=2) scene.remove(radialLine);
                                                         if(uniforms.MannyONtrail.value!=2) scene.remove(circle);
                                                         
                                                       shaderScene.add(line);
                                                             scene.remove(line);
                                                         
                                    }
                              
                     
                     
                                                       circle.geometry.dispose();
                                                       radialLine.geometry.dispose( );
if(RockInTheWater==2||RockInTheWater==1)scene.remove(starStreamMesh);
if (pzyghthe>=1) scene.remove(harmonicPzyghtheMesh)
                                                       if(uniforms.gameOn.value)
for(var n = 0; n<targets.length;n++){
  if(!blankBackground)shaderScene.remove( targets[n] );
  else scene.remove( targets[n] );
  pG[n].dispose();
  pM[n].dispose();
  targets[n].geometry.dispose();
}
                                   
                     }
                                                       
                              
                     
                              
                              loopsRun++;
                          //   if(dupered&&zoom<zoomCap32)
                                                       
                                                       
                     if (!iOS||(iOS&&dupered)) boot();//generate clover in 64 bit, duper Core, there is a bug after maybe half a day on iOS in bigTree.js (maybe also on safari Mac)

                                                       waitForOpenWindowToAnimate();
                                                       
                            //  renderer.forceContextLoss ()
                            //  renderer.forceContextRestore ( )

}
                                                       document.addEventListener("visibilityChange",()=>{
                                                         if(document.hidden){
                                                             
                                                             if(!window.touchOnlyMode)audioX.suspend();
                                                             if(typeof Wad=="function") Wad.audioContext.suspend();
                                                             if(typeof wakeLock == "object")wakeLock.release();
                                                         }
                                                         else {
                                                             //requestWakeLock();
                                                             if(!window.touchOnlyMode)audioX.resume();
                                                             if(typeof Wad=="function")Wad.audioContext.resume()
                                                                 }
                                                     }
                                                                                 )
                                                       function waitForOpenWindowToAnimate(){
                                                         if(document.visibilityState=="hidden") setTimeout(waitForOpenWindowToAnimate,100);
                                                         else animateLoopId= window.requestAnimationFrame( animate );
                                                         
                                                     }
                                                       
                                                       
                                                       let wakeLock;

                                                       async function requestWakeLock() {
                                                         try {
                                                           wakeLock = await navigator.wakeLock.request('screen');
                                                         } catch (err) {}
                                                           // Wake lock request failed
                                                          //   wakeLock.addEventListener("release", () => {
                                                                 // if wake lock is released alter the UI accordingly
                                                           //    });
                                                          //   } catch (err) {
                                                       //  }
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
                    
                                                       
                                                       
                                                       function freezeTop(){
                                                         if(uniforms.constellation.value||uniforms.squirgle.value==1){zoom=1;uniforms.zoom.value=1;uniforms.coords.value.x = 0;uniforms.coords.value.y = 0;
                                                             uniforms.constellationCoord.value.x = 0;uniforms.constellationCoord.value.y = 0;
                                                             coordX=0;coordY=0}
                                                     }
function constellationCoordFind(){
var min = 100000.;
//cloverConstellation[1]=new THREE.Vector2(0,.5)
//cloverConstellation[2]=new THREE.Vector2(.5,0.)

                                                         var bestFit=0;
for(var m=0;m<cloverConstellation.length;m++)
{
    let proximity = Math.sqrt((cloverConstellation[m].x+uniforms.coords.value.x)**2.+(cloverConstellation[m].y-uniforms.coords.value.y)**2.)
    if(proximity<min&&isFinite(proximity)){min=proximity; bestFit=m;}
}
                                                   
         uniforms.constellationCoord.value=cloverConstellation[bestFit].clone()//.multiplyScalar(2);
                                                      

                                                         
uniforms.constellationCoord.value=new THREE.Vector2( -coordX- uniforms.constellationCoord.value.x,coordY- uniforms.constellationCoord.value.y);
                                                       
                                                         
/*
if(uniforms.coords.value.y<-.5)
{uniforms.constellationCoord.value.y=uniforms.coords.value.y+1.;
    console.log("constellationCoord set")
}
 */
                                                     }
                                                       
                                                       
                                                       
                                                       
                                                       
//begin MIT license, code from https://github.com/adamski/pitch_detector
/** Full YIN algorithm */
function calculatePitch ()
{
                       // return Math.abs(inputData[0]-inputData[1])/audioX.sampleRate*4.
let tolerance=0;//(1024-26)/10000
                                                         if(window.highORlow==0){
                                                             if(totalAMP>0&&isFinite(totalAMP))
                                                             {
                                                                 let proportion= fractionOfFrame/bufferSize;
                                                                 let tAScaled=0.;//totalAMP*proportion;
                                                                 
                                                                 
                                                                /* for(n=2;n<4;n++)if(n!=0){
                                                                     let plusOrMinusPowerSeries = (totalAMP)**(1./n)*-Math.sign(n%2-.5);//x-x**2+x**3-x**4....//may have an algebraic solution
                                                                     if(plusOrMinusPowerSeries!=0.)tAScaled+=plusOrMinusPowerSeries;
                                                                     else break;
                                                                 }
                                                                 */
                                                                 for(n=1;n<111;n++)
                                                                    // for(n=1;n<111;n++)
                                                                 {
                                                                     let plusOrMinusPowerSeries = (totalAMP)**n*Math.sign(n%2-.5);//x-x**2+x**3-x**4....//may have an algebraic solution
                                                                     if(plusOrMinusPowerSeries!=0.)tAScaled+=plusOrMinusPowerSeries;
                                                                     else break;
                                                                 }
                                                                 
                                                                 tAScaled =(tAScaled!=0)? tAScaled:1;
                                                                 let tAScaledPermanent = tAScaled;
                                                                 let incrementToleranceFeedback =tAScaled;
                                                      //           let oolp =    1./-leafPermanent;

                                                                 
                                                                 if(tAScaled>0&&isFinite(tAScaled))
                                                                     for(var reps=0; reps<2.;reps+=1)
                                                      //                 for(reps=0;reps<5.;reps+=1.+1./(1.-totalAMP))

                                                                     { tAScaled=((tAScaled**(1.-tAScaled)+tAScaled**(1.+tAScaledPermanent))/(2.-tAScaledPermanent))
                                                                         let taEX1 = ((1.-tAScaled)*(1.+tAScaledPermanent));
                                                                         tAScaled=tAScaled**(Math.sign(taEX1)*(Math.abs(taEX1))**(
                                                                                                                                            .75
                                                                                        //oolp
                                                                                                                                     -(tAScaled)**(.5+tAScaled)))
                                                                         //          b++
                                                                     }
                                                                 
                                                                 // let b = 0.;
                                                                 
                                                                 // console.log(b)
                                                                 // console.log(tAScaled)
                                                        //       let grTimesLeaf =   grPermanent*-leafPermanent
                                                      // let feedbackVal = grTimesLeaf;
                                                                // console.log(tAScaled)
                                                        //       tAScaled=tAScaled**.5;
                                                                 let plusOrMinusPowerSeries=tAScaled;
                                                                 let plusOrMinusPowerSeriesBUFFER=plusOrMinusPowerSeries;
                                                                 let loopsThresh = 1
                                                             
                                                        //        if(totalAMP<.5-.01)
                                                                     for(n=1;n< 445;n+=1.)

                                                                 
                                                                   //  for(n=0;n<444;n+=2.-totalAMP//1./(1.+1./totalAMP)
                                                                       //  )//still runs as n gets very large, maybe 2 to odd?even?//14 works well, 4 doesn;t
                                                                 
                                                                 {
                                                                     let sig = Math.sign(loopsThresh%2-.5);
                                                  //console.log(plusOrMinusPowerSeries)
                                                                    
                                                                                                                              plusOrMinusPowerSeries = (tAScaled**(2**(-1./(loopsThresh
                                                                                                                                                                              +.5+(1.5+ totalAMP+plusOrMinusPowerSeries)**loopsThresh
                                                                                                                                                                         +(tAScaled*plusOrMinusPowerSeries-1.)//+tAScaled*plusOrMinusPowerSeries)
                                                                                                                                                                               *sig))))*sig
                                                                                                                                                          //plusOrMinusPowerSeries = (tAScaled**(2**(-1.49/(loopsThresh+2))))*sig
                                                                     if(plusOrMinusPowerSeries!=1.){//tolerance+=plusOrMinusPowerSeries;
                                                                                     //plusOrMinusPowerSeries=         Math.sign(plusOrMinusPowerSeries)*(Math.abs(plusOrMinusPowerSeries)**2.);
                                                                    if(loopsThresh%2==0)               { tolerance+=plusOrMinusPowerSeriesBUFFER;
                                                              
                                                          plusOrMinusPowerSeriesBUFFER=plusOrMinusPowerSeries
                                                                             
                                                                           
                                                                         }
                                                                 else
                                                       
                                                    {
                                                        tolerance+=plusOrMinusPowerSeries;
                                                        
                                                    }
                                                                  //       console.log(n)
                                                           
                                                                     }
                                                                     else{console.log(n);
                                                                         break;}
                                                       
                                                         //            plusOrMinusPowerSeries=         Math.sign(plusOrMinusPowerSeries)*(Math.abs(plusOrMinusPowerSeries)**(4./3.));
                                                                     loopsThresh++

                                                                 }
                                                        tolerance=(tolerance+plusOrMinusPowerSeriesBUFFER)**(.75+(totalAMP+ tAScaledPermanent+tolerance-plusOrMinusPowerSeries));
                                                           //      tolerance=(tolerance-plusOrMinusPowerSeries)**(.5+(totalAMP+ tAScaledPermanent+tolerance+plusOrMinusPowerSeriesBUFFER));
                                                          
                                                             
                                                            }
                                                          else tolerance=0.;
                                                         }
                                                       
//.02134356(7)  solid guess//.0214284 easier reaching notes//n*2,n,n*2*2,n*2*2/2,n*2*2*2,n*2*2*2/2
             else if(window.highORlow==2)tolerance=.49;
            else if(window.highORlow==1)
                tolerance=0.;
                                                         
                                                        //   console.log(tolerance);
                /*
                 for(n=0;n<111;n++)if(n!=0){
                 let plusOrMinusPowerSeries = totalAMP**n*Math.sign(n%2-.5);//x-x**2+x**3-x**4....
                 if(plusOrMinusPowerSeries!=0.)tolerance+=plusOrMinusPowerSeries;
                 else break;
                 };
                 */

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



