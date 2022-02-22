if(!("shaderOn" in window))window.shaderOn=true;
if(!("spiroRainbow" in window))window.spiroRainbow = false;
window.movementRate=1.;
let zoomFrames = 14.4;
window.zoomCageSize = 1.5;//radius of zoom bounding
zoomOutRatchetThreshold=1.;
let radius = 4.;
var mobileRez=1.;
let fftSize=2048;
let trailLength = 288;
let colorSound;
let center = false;
//load threeJS then call startMic()
//vvvvmodified from https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;
    // Fire the loading
    head.appendChild(script);
}
var load = function() {
    startMic();
};
loadScript(window.threeSonicStarship,load);
//^^^^modified from https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file



let mobile = false;

//vvvvbelow line from https://code-boxx.com/detect-mobile-device-javascript/
if(navigator.userAgent.toLowerCase().match(/mobile/i)){
    mobileRez=.25;
    fftSize=1024;
    trailLength = 150;
    zoomOutRatchetThreshold=3.;
    mobile=true;
}
else if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
{
    mobileRez=.5;
    fftSize=1024;
    trailLength = 150;
    zoomOutRatchetThreshold=3.;
    mobile=true;

}

//key press handling vvvv
var pointed=false;
let zoomAtl41=false;//watch for the 1 and the l
var rez = window.devicePixelRatio*mobileRez;



window.addEventListener('keyup', function(event) {
      let key = String.fromCharCode(event.which || event.keyCode);
      if(!window.key)window.key="";
      var x = parseInt(String.fromCharCode(event.which || event.keyCode));
    if (parseInt(window.key)>=0) x = parseInt(window.key)
      if (x>0)
        {rez = window.devicePixelRatio /x; renderer.setPixelRatio( rez);}
      else if (x==0)
        {rez = window.devicePixelRatio /10.; renderer.setPixelRatio( rez);}
      else if (key=="À"||window.key.toLowerCase()=="`")
        {rez=window.devicePixelRatio*2.;renderer.setPixelRatio( rez);}
      else if (key=="="||window.key.toLowerCase()=="+")
        {rez /=1.1; renderer.setPixelRatio(rez);}
      else if ( event.keyCode==173||window.key.toLowerCase()=="-")
        {rez *=1.1; renderer.setPixelRatio(rez);}
      else if (String.fromCharCode(event.which || event.keyCode)=="M"||window.key.toLowerCase()=="m")        {    invert *= -1;}

      else if (key=="Q"||window.key.toLowerCase()=="q") uniforms[ "colorCombo" ].value = 1;
      else if (key=="W"||window.key.toLowerCase()=="w")   uniforms[ "colorCombo" ].value = 2;
      else if (key=="E"||window.key.toLowerCase()=="e") uniforms[ "colorCombo" ].value = 3;
      else if (key=="R"||window.key.toLowerCase()=="r") uniforms[ "colorCombo" ].value = 4;
      else if (key=="T"||window.key.toLowerCase()=="t") uniforms[ "colorCombo" ].value = 5;
      else if (key=="Y"||window.key.toLowerCase()=="y") uniforms[ "colorCombo" ].value = 6;
      else if (key=="U"||window.key.toLowerCase()=="u") uniforms[ "colorCombo" ].value = 7;
      else if (key=="A"||window.key.toLowerCase()=="a") uniforms[ "colorCombo" ].value = 11;
      else if (key=="F"||window.key.toLowerCase()=="f") uniforms[ "fourCreats" ].value *= -1;
      else if (key=="G"||window.key.toLowerCase()=="g") uniforms[ "colorCombo" ].value = 17;
      else if (key=="K"||window.key.toLowerCase()=="k") uniforms[ "colorCombo" ].value = 13;
      else if (key=="D"||window.key.toLowerCase()=="d") uniforms[ "colorCombo" ].value = 14;
      else if (key=="X"||window.key.toLowerCase()=="x") uniforms[ "colorCombo" ].value = 15;
      else if (key=="B"||window.key.toLowerCase()=="b") uniforms[ "colorCombo" ].value = 16;
      else if (key=="S"||window.key.toLowerCase()=="s"){ if(uniforms[ "morph" ].value == 0.)uniforms[ "morph" ].value = 1.;else uniforms[ "morph" ].value = 0.; }
      else if (key=="N"||window.key.toLowerCase()=="n") uniforms[ "MetaCored" ].value = !uniforms[ "MetaCored" ].value;
      else if (key=="L"||window.key.toLowerCase()=="l")
      {if(zoomAtl41){zoom=1.;coordX=0.; coordY=0.;}zoomAtl41=!zoomAtl41; uniforms[ "free" ].value = !uniforms[ "free" ].value ;}
      else if (key=="C"||window.key.toLowerCase()=="c")center=!center;
      else if (key=="V"||window.key.toLowerCase()=="v")textON=!textON;


      else if (key=="Z"||window.key.toLowerCase()=="z") {
        if (pointed==true)pointed=false;
        else pointed = true;}

      else if (event.keyCode==190) uniforms[ "metronome" ].value *= 1.1; //keycode for <
      else if (event.keyCode==188&&uniforms[ "metronome" ].value>1.) uniforms[ "metronome" ].value /= 1.1; //keycode for >

      else if (key=="I"||window.key.toLowerCase()=="i"){
        zoomOutRatchetThreshold/= 1.212121;
        console.log("zoomOutRatchetThreshold: "+zoomOutRatchetThreshold+ ", totalMicAmp: "+totalAMP );
      }
      else if (key=="O"||window.key.toLowerCase()=="o"){
        zoomOutRatchetThreshold+= .777;//character for '
        console.log("zoomOutRatchetThreshold: "+zoomOutRatchetThreshold+ ", totalMicAmp: "+totalAMP );
      }
      else if (key==" "||window.key.toLowerCase()==" ")
      {
        if (onO)onO=false;
        else onO = true;
      }


        if(uniforms[ "free" ].value) window.zoomCageSize=100000000000000000.;
        else if(uniforms["colorCombo"].value == 13){
            window.zoomCageSize=.5;
           // window.movementRate=.125;
        }
        else if(uniforms["colorCombo"].value == 14){
            window.zoomCageSize=.125;
            //window.movementRate=.5;
        }
            else if(uniforms["colorCombo"].value == 11){
                window.zoomCageSize=2.;
                //window.movementRate=.5;
            }

                else if(uniforms["colorCombo"].value == 15){
                    window.zoomCageSize=1.5;
                    //window.movementRate=.5;
                }
        else
        {            window.zoomCageSize=1.5;
            window.movementRate=1.;}
        //console.log(String.fromCharCode(event.which || event.keyCode));

    }, false);

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
var geometries = Array(starArms);
var meshes = Array(starArms);
var testar = Array(starArms);
var mustarD = Array(starArms);
let averagedAmp =  0;
let zoom = 1;
let len=0;
let spiregulator=0;
let phase = 0;
let onO = false;
function makeSpirograph(){
      phase = phase % (pi*2);
      len = 0;
      let adjConstant = 1./(pitch)*3.14;
      if(Math.abs(inputData[0])>.0    )
      for(var m = 0; m < bufferSize; m++)
      {
              phase += adjConstant;//spira_pitch;
              spirray0[m]=-Math.sin(phase)*inputData[m]*m;
              spirray1[m]=-Math.cos(phase)*inputData[m]*m;
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
    if (Math.abs(d)<4+1)freq =((( audioX.sampleRate)*(nAdj))/1024);

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

let coordX=0.;
let coordY=0.;
let trail = Array(1000);
let cx = Array(1000);
let cy = Array(1000);
let trailWidth = Array(1000);
let pitchCol = Array(trailWidth.length);
let trailLoaded = false;
let trailDepth = -1;
let d_x=0,d_y=0;
let f = 0;

let xPerp= Array(1000);
let yPerp = Array(1000);
let angle=Array(1000);

let pitch = 1;

let reset = 6;
let on;
let spirafreq=1;
var totalAMP;
function  move()
{
  totalAMP = 0.;
  if (!trailLoaded) {trailLoaded = true; for(var n = 0; n<trailLength; n++)
      {xPerp[n]=0;yPerp[n]=0;angle[n]=0;cx[n]=0;cy[n]=0;}trailWidth[n]=0.;}
    pitch=1;
    var pb = -1;
   for(var b = 0; b<numberOfBins; b++)totalAMP+=Math.abs(inputData[b]);
if (totalAMP*2048./fftSize>zoomOutRatchetThreshold||on)//this line under revisement
  pb =    calculatePitch();
  if(pb>0) pb =audioX.sampleRate/pb;
on = true;
if (isFinite(pb) &&pb>0&& Math.abs(pb-4.64152157387662*4.64152157387662)>.000001&&Math.abs(pb-4.842411556493535*4.842411556493535)>.000001&&pb!=1&&totalAMP*2048./fftSize>zoomOutRatchetThreshold) { pitch =pb;reset =0;}
else if (reset>3){on = false;
}
else reset++
if (trailDepth<trailLength)trailDepth++;
let note = Math.log(Math.sqrt(pitch)/440.0)/Math.log(Math.pow ( 2, (1/24.0)))+49;
let inc = 8;
let t =  (note * 30+30*inc);
angle = t%360;
angle = -angle;

colorSound = new THREE.Color();
             //          colorSound.setHSL((angle+90)/360.,(180+note)/297,(180+note)/297);

    colorSound.setHSL((angle+90)/360.,1.,.5);

pitchCol[f]  = new THREE.MeshBasicMaterial({
        color:colorSound,
        opacity: 1.,
        transparent: true,
      });
angle = ((angle-30+180)/360*2*pi);
   // angle = (maxInt24/24*2*pi);
angle[f] = angle;

  //d_x = -Math.sin(-angle)*(Math.log(totalAMP*2048./fftSize)+4.)**4/300.;
  //d_y = -Math.cos(-angle)*(Math.log(totalAMP*2048./fftSize)+4.)**4/300.;
         d_x = -Math.sin(-angle);
         d_y = -Math.cos(-angle);
         if(zoomAtl41){d_x*=3.;d_y*=3.;}

  bx=coordX+d_x*3./2./zoomFrames*window.movementRate*zoom;
  by=coordY+d_y*3./2./zoomFrames*window.movementRate*zoom;
if(isFinite(d_x)&&isFinite(d_y)&&totalAMP*2048./fftSize>zoomOutRatchetThreshold&&on){

               coordX=bx;
               coordY=by;
           }
if(Math.sqrt(by*by+bx*bx)>=window.zoomCageSize){
               if (Math.abs(by)>window.zoomCageSize)coordY*=1.-(Math.abs(by)-window.zoomCageSize)/25.;
               if (Math.abs(bx)>window.zoomCageSize)coordX*=1.-(Math.abs(bx)-window.zoomCageSize)/25.;
  }

 interpolationFactor = 10.;//timeDif*1./(callbackWait-1);
if (interpolationFactor>30) interpolationFactor=30;
else if (interpolationFactor<1) interpolationFactor=1;

cx[f] = 0;
cy[f] = 0;
xPerp[f] = -Math.sin(-angle+pi/2)*radius;
yPerp[f] = -Math.cos(-angle+pi/2)*radius;
                     trailWidth[f]=1.;
f++;//this is the primary drive chain for the trail. it should be a global
if (f>=trailDepth)f=0;
if(isFinite(d_x)&&isFinite(d_y)&&on)for(let n = 0; n < trailDepth; n++) {
    cx[n] += d_x*15.;
    cy[n] += d_y*15.;
           trailWidth[n] *=.98
}

}


let material;
    let camera, renderer;
let mesh;
let analyser;
let source;
let trailGeom = Array(1000);
let materials;
let trailMeshes = Array(1000);
let materialShader;
let geometry;



let geometryP;
let uniforms;
function init() {

    inputData = new Float32Array(bufferSize);
    camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
    geometryP = new THREE.PlaneBufferGeometry( 2, 2 );
    for (let r=0; r<starArms; r++) {
        let vo = new THREE.Color();
        vo.setHSL((r-10)%24/24.,1.,.5);
        material  = new THREE.MeshBasicMaterial( { color:vo});

        let vertices = new Float32Array( [0,0,0,
        0,0,0,
        0,0,0
        ] );

        geometries[r] = new THREE.BufferGeometry();
        geometries[r].setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
        meshes[r] = new THREE.Mesh(geometries[r] , material );
    }
materials = new THREE.MeshBasicMaterial( { color: 0x0000f0});
    for (let r=0; r<trailLength; r++) {
        let vertices = new Float32Array(
            [0,0,0,
            0,0,0,
            0,0,0]
            );

        trailGeom[r] = new THREE.BufferGeometry();

        trailGeom[r].setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
        trailMeshes[r] = new THREE.Mesh(trailGeom[r] , materials );
    }
  uniforms = THREE.UniformsUtils.merge([
  THREE.UniformsLib.lights,
    {
      micIn : {  value: null }, // float array (vec3)
      time: {value: 1.0 },
      zoom: {value: 1.0 },
      colorCombo: {value: 1 },
        free: {value: false },
        MetaCored: {value: true },
        morph: {value: 0.0 },

      fourCreats: {value: 1 },
      metronome: {value: .99 },
      time2dance: {value: 0.0 },
      resolution: {value: new THREE.Vector2() },
      coords: {value: new THREE.Vector2() }
    }
  ]);
  uniforms.resolution.value.x = window.innerWidth;
  uniforms.resolution.value.y = window.innerHeight;
  uniforms.coords.value.x = coordX;
  uniforms.coords.value.y = coordY;
  if(window.shaderOn)
      materialShader = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent
      } );
  renderer = new THREE.WebGLRenderer();
  if(window.shaderOn)mesh = new THREE.Mesh( geometryP, materialShader );

  renderer.setPixelRatio( rez);
  container.appendChild( renderer.domElement );
  onWindowResize();
  window.addEventListener( 'resize', onWindowResize, false );

  animate();

}


function onWindowResize() {
            let correlationForText=document.getElementById("textWindow").offsetHeight;
            if(mobile)correlationForText+=document.getElementById("hotkeys").offsetHeight;

    uniforms.resolution.value.x = window.innerWidth;
    uniforms.resolution.value.y = window.innerHeight-correlationForText;
    renderer.setSize( window.innerWidth, window.innerHeight-correlationForText);
}
let point = [];

let textON=false;
let lastTime=0.;
let ticker = 0;
let FPS=0.;

function animate( timestamp ) {

  onWindowResize();//may need to be taken out someday, just for iOS windowing
  analyser.getFloatTimeDomainData(inputData); // fill the Float32Array with data returned from getFloatTimeDomainData()
    spiral_compress();
    move();
            
            
    let noteNumber =  Math.log(pitch/440)/Math.log(Math.pow ( 2, (1/12.0)))+49;
    if(Math.round(noteNumber) ==-854)noteNumber="undefined";
    let noteNameNumber=Math.floor(Math.round(noteNumber))%12;
    let hour =noteNameNumber;
    if (hour==0)hour = 12;
    let minute =(noteNumber-Math.floor(noteNumber))*60;
    let second =(minute-Math.floor(minute))*60
    let timeOfTheSound  =  Math.floor(hour)+":"+Math.floor(minute)+":"+Math.floor(second);
    let notes = ["G#","A","A#","B", "C","C#","D","D#","E","F","G"];

              let elapsedTimeBetweenFrames = (timestamp-lastTime);
              let interval = 100;
              if(elapsedTimeBetweenFrames>interval){FPS=ticker/elapsedTimeBetweenFrames*1000.; ticker=0.;lastTime = timestamp;};
                  ticker++;

     let note = notes[noteNameNumber];
     let cents = Math.round((noteNumber-Math.round(noteNumber))*100);
     let fr = Math.round(pitch);
     let n_n = Math.round(noteNumber);
     let cores = Math.floor(Math.log(zoom*3./2.)/Math.log(.5)+1.);
     let pf = String(pitch!=1);
     let totalAMP_=totalAMP*2048./fftSize;
      if(textON)document.getElementById("textWindow").innerHTML =

                                " note: "+note+", cents: "+cents+", freq: "+fr+"<p style='margin : 0px'></p>"+
                                "note number: "+n_n+", time: "+timeOfTheSound+"<p style='margin : 0px'></p>"+
                                "FPS: "+Math.round(FPS)+", cores: "+cores+", zoom: "+zoom+"<p style='margin : 0px'></p>"+                // style='margin : 0px'
                                "InOutThresh: "+zoomOutRatchetThreshold+", pitch found: "+pf+", AMP: "+totalAMP_;
      else document.getElementById("textWindow").innerHTML = "";



 
 
 
  analyser.getFloatTimeDomainData(inputData); // fill the Float32Array with data returned from getFloatTimeDomainData()
    spiral_compress();
    move();



    if(on) makeSpirograph();

            var currMode = "desktop"
            //vvvvhttps://www.cssjunction.com/tutorials/detect-landscape-portrait-mode-using-javascript/
            switch(window.orientation){

                 case 0:
                 currMode = "portrait";
                 break;

                 case -90:
                 currMode = "landscape";
                 break;

                 case 90:
                 currMode = "landscape";
                 break;

                 case 180:
                 currMode = "portrait";
                 break;
            }
            //^^^^https://www.cssjunction.com/tutorials/detect-landscape-portrait-mode-using-javascript/

  let porportionX =1.;
  let porportionY =1.;
  if(currMode=="landscape"||currMode=="desktop"){
      porportionX = window.innerHeight/window.innerWidth;
      porportionY = 1.;
  }
  else if (currMode=="portrait"){
      porportionY =window.innerWidth/window.innerHeight;
      porportionX = 1.;
  }
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

  let depth =- .07;
  if (onO) depth = 0;

  if (on)for (let r= 0; r < bufferSize; r ++) {
    let tx = spirray0[r]*porportionX/spiregulator;
    let ty =  spirray1[r]*porportionY/spiregulator;
    point[r]=new THREE.Vector3( tx, ty, depth );
  }
  const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints( point ), lineMat );
  const scene = new THREE.Scene();

  if (on)scene.add(line);



  let zoomCone=.000001*Math.sqrt(coordX*coordX+coordY*coordY);
  if(uniforms[ "colorCombo" ].value==16)zoomCone/=1.33333333/2.;
  if (zoom>zoomCone && totalAMP*2048./fftSize>zoomOutRatchetThreshold&&on)zoom *=Math.E**(Math.log(.5)/(zoomFrames*window.movementRate));
  else if(zoom<1.){zoom /= Math.E**(Math.log(.5)/(zoomFrames*window.movementRate));
                  if(!zoomOutEngage&&center){coordX*=(1-zoom)*2./3.; coordY*=(1-zoom)*2./3.;}
                  }
  if (zoom>1.)zoom=1.;

  if (zoom>=1.)zoomOutEngage = false;
      else if ( zoom<zoomCone)zoomOutEngage = true;

      if (zoomOutEngage == true){zoom *= 1.44; coordX*=1-zoom; coordY*=1-zoom;}




  uniforms.coords.value.x = coordX;
  uniforms.coords.value.y = coordY;

            if(zoomAtl41)zoom=.025;

  uniforms[ "zoom" ].value = zoom;
  uniforms[ "time" ].value = timestamp/1000.;
  uniforms[ "time2dance" ].value += Math.abs(totalAMP/numberOfBins*2.);

  requestAnimationFrame( animate );
  if (micOn)analyser.getByteFrequencyData(  dataArray);

   var maxTestar=0.;
   var minTestar=100000000000000;
   if(onO){
    for (var g=0; g<starArms; g++) if(testar[g]>maxTestar)maxTestar=testar[g];
      for (var g=0; g<starArms; g++) if(testar[g]<minTestar)minTestar=testar[g];



    for (var g=starArms; g>0; g--)if(isFinite(testar[g])&&testar[g]!=0.) {
        var widt = .02;
        var arm =(mustarD[g]+19)%24./24.*pi*2.;
        var lengt = (testar[g]-minTestar)/(maxTestar-minTestar);
        var vop = new THREE.Color();
       vop.setHSL((1-mustarD[g])%24./24., mustarD[g]/297,mustarD[g]/297);//297 is the highest heard note
                      material = new THREE.MeshBasicMaterial({
        color:vop,
        opacity: .3+.7/uniforms[ "metronome" ].value ,
        transparent: true,
      });




            rpio2 =arm+pi/2.;
            let x = widt*-Math.sin(rpio2)*porportionX;
            let y = widt*-Math.cos(rpio2)*porportionY;
            let xr = lengt*-Math.sin(arm)*porportionX;
            let yr = lengt*-Math.cos(arm)*porportionY;
    var v;
    if(pointed) v= new Float32Array( [
       -x,    -y,  -0.05,
        x,    y,  -0.05,
        (xr+x), (yr+y),  -0.05,
        /* -x, -y,  -0.05,
        (xr+x), (yr+y),  -0.05,
        (xr-x), (yr-y),  -0.05,*/
    ] );
    else v= new Float32Array( [
       -x,    -y,  -0.05,
        x,    y,  -0.05,
        (xr+x), (yr+y),  -0.05,
        -x, -y,  -0.05,
        (xr+x), (yr+y),  -0.05,
        (xr-x), (yr-y),  -0.05
    ] );

/*
      0-widt*-Math.sin(rpio2)*porportionX,    0-widt*-Math.cos(rpio2)*porportionY,  -0.05,
      (lengt*-Math.sin(yy)+widt*-Math.sin(rpio2))*porportionX,
      (lengt*-Math.cos(yy)+widt*-Math.cos(rpio2))*porportionY,  -0.05,
      (lengt*-Math.sin(yy)-widt*-Math.sin(rpio2))*porportionX,
      (lengt*-Math.cos(yy)-widt*-Math.cos(rpio2)*porportionY),  -0.05,
      */
    // itemSize = 3 because there are 3 values (components) per vertex
    geometries[g].setAttribute( 'position', new THREE.Float32BufferAttribute( v, 3 ) );
                       meshes[g] = new THREE.Mesh(geometries[g] , material );

                       scene.add(meshes[g])
        }
}

else{
            var maxTestar=1.;
            for (var g=0; g<24; g++) if(testar[g]>maxTestar){maxTestar=testar[g];}
           for (var g=0; g<24; g++) if(testar[g]<minTestar)minTestar=testar[g];

            for (var g=0; g<24; g++) {
            var widt = .02;
                var rr= (g+14)%24;
            var lengt = (testar[(rr+5)%24]-minTestar)/(maxTestar-minTestar);

                var vo = new THREE.Color();
                      vo.setHSL((20-rr)%24/24.,1.,.5);
                        material  = new THREE.MeshBasicMaterial( { color:vo});

var vertices;
if (pointed==true)
vertices = new Float32Array( [
   0-widt*-Math.sin(rr*pi*2./24+pi/2.)*porportionX,    0-widt*-Math.cos(rr*pi*2./24+pi/2.)*porportionY,  -0.05,
   0+widt*-Math.sin(rr*pi*2./24+pi/2.)*porportionX,    0+widt*-Math.cos(rr*pi*2./24+pi/2.)*porportionY,  -0.05,
   (lengt*-Math.sin(rr*pi*2./24)+widt*-Math.sin(rr*pi*2./24+pi/2.))*porportionX,
   (lengt*-Math.cos(rr*pi*2./24)+widt*-Math.cos(rr*pi*2./24+pi/2.))*porportionY,  -0.05,
] );
else
             vertices = new Float32Array( [
                0-widt*-Math.sin(rr*pi*2./24+pi/2.)*porportionX,    0-widt*-Math.cos(rr*pi*2./24+pi/2.)*porportionY,  -0.05,
                0+widt*-Math.sin(rr*pi*2./24+pi/2.)*porportionX,    0+widt*-Math.cos(rr*pi*2./24+pi/2.)*porportionY,  -0.05,
                (lengt*-Math.sin(rr*pi*2./24)+widt*-Math.sin(rr*pi*2./24+pi/2.))*porportionX,
                (lengt*-Math.cos(rr*pi*2./24)+widt*-Math.cos(rr*pi*2./24+pi/2.))*porportionY,  -0.05,
                0-widt*-Math.sin(rr*pi*2./24+pi/2.)*porportionX,    0-widt*-Math.cos(rr*pi*2./24+pi/2.)*porportionY,  -0.05,
                (lengt*-Math.sin(rr*pi*2./24)+widt*-Math.sin(rr*pi*2./24+pi/2.))*porportionX,
                (lengt*-Math.cos(rr*pi*2./24)+widt*-Math.cos(rr*pi*2./24+pi/2.))*porportionY,  -0.05,
                (lengt*-Math.sin(rr*pi*2./24)-widt*-Math.sin(rr*pi*2./24+pi/2.))*porportionX,
                (lengt*-Math.cos(rr*pi*2./24)-widt*-Math.cos(rr*pi*2./24+pi/2.))*porportionY,  -0.05,
            ] );

            // itemSize = 3 because there are 3 values (components) per vertex
            geometries[rr].setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
                 meshes[rr] = new THREE.Mesh(geometries[rr] , material );
                 scene.add(meshes[rr])
                } }


let r = (f+trailDepth-2)%trailDepth;
let s = (f+trailDepth-1)%trailDepth;
let loopLimit = trailDepth;
//if(isFinite(cx[r-1])&&isFinite(cx[s])&&isFinite(cy[r-1])&&isFinite(cy[s]))

while(loopLimit>15){
  loopLimit--;
  pitchCol[r].opacity = 1.-(trailDepth-loopLimit)/trailDepth*3.;
  material = pitchCol[r];
  trailMeshes[r] = new THREE.Mesh(trailGeom[r] , material );

  let widtr = .2*(1.-trailWidth[r]);
  let widts = .2*(1.-trailWidth[s]);
  let scalar = .005;//mobius mode: let scalar = .07*loopLimit/trailDepth;
  let tt = 0.;
  var z = -(trailDepth-loopLimit)/trailDepth-.1;
  let vertices = new Float32Array( [
    (scalar*cx[r]+widtr*xPerp[r])*porportionX, (scalar*cy[r]+widtr*yPerp[r])*porportionY,z,
    (scalar*cx[s]-widts*xPerp[s])*porportionX, (scalar*cy[s]-widts*yPerp[s])*porportionY,z,
    (scalar*cx[s]+widts*xPerp[s])*porportionX, (scalar*cy[s]+widts*yPerp[s])*porportionY,z,
    (scalar*cx[r]-widtr*xPerp[r])*porportionX, (scalar*cy[r]-widtr*yPerp[r])*porportionY,z, //2
    (scalar*cx[s]-widts*xPerp[s])*porportionX, (scalar*cy[s]-widts*yPerp[s])*porportionY,z,  //1
    (scalar*cx[r]+widtr*xPerp[r])*porportionX, (scalar*cy[r]+widtr*yPerp[r])*porportionY,z, //3
  ] );

  trailGeom[r].setAttribute( 'position', new THREE.Float32BufferAttribute( vertices,3 ) );
  scene.add(trailMeshes[r])
  s = r;
  r--;
  if(r<=0)r=trailDepth-1;
}


  if(window.shaderOn)scene.add( mesh );//mesh here is the PIXELshader.
  renderer.render( scene, camera );

  scene.remove(line);
  line.geometry.dispose( );

  for (let j=0; j<starArms; j++) {
    scene.remove(meshes[j]);
    meshes[j].dispose;
    geometries[j].dispose();
  }
                               // else for (let j=0; j<24; j++) {meshes[j].dispose; geometries[j].dispose();}
  for (let j=0; j<trailDepth; j++){
    scene.remove(trailMeshes[j]);
    trailGeom[j].dispose();trailMeshes[j].dispose
  }
}


let audioX;
let micOn = false;
async function startMic() {
  let stream = null;
  stream = await navigator.mediaDevices.getUserMedia({audio: true}).then(
      function (stream)
      {
        micOn = true;
        audioX = new AudioContext();
        analyser = audioX.createAnalyser();
        source = audioX.createMediaStreamSource( stream );
        source.connect(analyser);
        analyser.fftSize = fftSize;
        dataArray = new Uint8Array( bufferSize );
        init();
      } );
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
