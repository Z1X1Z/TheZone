if(!("shaderOn" in window))window.shaderOn=true;
window.zoomCageSize = 1.7;
zoomOutRatchetThreshold=4.;
var zoomOutEngage=false;
var movementRate=.007;
let radius = 4.;
var mobileRez=1.;
const fftSize=2048;
//vvvvhttps://code-boxx.com/detect-mobile-device-javascript/
if(navigator.userAgent.toLowerCase().match(/mobile/i))mobileRez=.5;
//^^^^https://code-boxx.com/detect-mobile-device-javascript/
//number key resolution transmission

    var rez = window.devicePixelRatio*mobileRez;
    window.addEventListener('keydown', function(event) {
    var x = parseInt(String.fromCharCode(event.which || event.keyCode));
    if (x>0){rez = window.devicePixelRatio /x; renderer.setPixelRatio( rez);}
    else if (x==0){rez = window.devicePixelRatio /10.; renderer.setPixelRatio( rez);}
    else if (String.fromCharCode(event.which || event.keyCode)=="À")
        {rez=window.devicePixelRatio*2.;renderer.setPixelRatio( rez);}
    else if (String.fromCharCode(event.which || event.keyCode)=="=")        {    rez /=1.1; renderer.setPixelRatio(rez);}
    else if ( event.keyCode==173)        {    rez *=1.1; renderer.setPixelRatio(rez);}
    else if (String.fromCharCode(event.which || event.keyCode)=="M")        {    invert *= -1;}
        
        else if (String.fromCharCode(event.which || event.keyCode)=="Q") uniforms[ "colorCombo" ].value = 1;
        else if (String.fromCharCode(event.which || event.keyCode)=="W")   uniforms[ "colorCombo" ].value = 2;
        else if (String.fromCharCode(event.which || event.keyCode)=="E") uniforms[ "colorCombo" ].value = 3;
        else if (String.fromCharCode(event.which || event.keyCode)=="R") uniforms[ "colorCombo" ].value = 4;
        else if (String.fromCharCode(event.which || event.keyCode)=="T") uniforms[ "colorCombo" ].value = 5;
        else if (String.fromCharCode(event.which || event.keyCode)=="Y") uniforms[ "colorCombo" ].value = 6;
        else if (String.fromCharCode(event.which || event.keyCode)=="U") uniforms[ "colorCombo" ].value = 7;
        else if (String.fromCharCode(event.which || event.keyCode)=="A") uniforms[ "colorCombo" ].value = 11;
        else if (String.fromCharCode(event.which || event.keyCode)=="F") uniforms[ "fourCreats" ].value *= -1;
        else if (event.keyCode==190) uniforms[ "metronome" ].value *= 1.1; //keycode for <
        else if (event.keyCode==188&&uniforms[ "metronome" ].value>1.) uniforms[ "metronome" ].value /= 1.1; //keycode for >
            
        else if (String.fromCharCode(event.which || event.keyCode)=="I")
        {
            zoomOutRatchetThreshold/= 1.212121;
            console.log("zoomOutRatchetThreshold: "+zoomOutRatchetThreshold+ ", totalMicAmp: "+totalAMP );
        }
            else if (String.fromCharCode(event.which || event.keyCode)=="O"){
                zoomOutRatchetThreshold+= .777;//character for '
                console.log("zoomOutRatchetThreshold: "+zoomOutRatchetThreshold+ ", totalMicAmp: "+totalAMP );
        }
        else if (String.fromCharCode(event.which || event.keyCode)=="O"||String.fromCharCode(event.which || event.keyCode)==" ")
        {
            if (onO)onO=false;
            else onO = true;
            }
        //console.log(String.fromCharCode(event.which || event.keyCode));
    }, false);

/*
function hsv2rgb (let hsv) {
// from HSV to RGB color vector
hsv.yz = clamp (hsv[1],hsv[2], 0.0, 1.0);
return hsv[2] * (1.0 + 0.63 * hsv[1]] * (-cos (2.0 * 3.14159 * (hsv[0]] + vec3 (0.0, 2.0 / 3.0, 1.0 / 3.0))) - 1.0));
}//^^^^^^above from https://shadertoy.fandom.com/wiki/Color_Processing^^^^^//modified by X
*/

let pi = 3.14159
        
const starArms = fftSize/2;
var geometries = Array(starArms);
var meshes = Array(starArms);
var testar = Array(starArms);
var testarD = Array(starArms);
let maxFreq = 0;
let mamp = -1000000;
let averagedAmp =  0;
let zoom = 1;
let len=0;
let spirray0 = new Float32Array(1024);
let spirray1 = new Float32Array(1024);
let spiregulator=0;
let phase = 0;
let onO = false;
function makeSpirograph()
{
        phase = phase % (pi*2);
len = 0;
let adjConstant = 1./(spirafreq)*3.14*1.618;
if(Math.abs(inputData[0])>.0    )
for(var m = 0; m < 1024; m++)
{
        phase += adjConstant;//spira_pitch;
        spirray0[m]=-Math.sin(phase)*inputData[m];
        spirray1[m]=-Math.cos(phase)*inputData[m];
       // len++;
}
len -= 1;
largest_loop = 0;
spiregulator = 0;
for(let j = 0; j<inputData.length-24; j++)
{

    if (Math.abs(spirray0[j])>largest_loop)largest_loop =
                                                     Math.abs(spirray0[j]);
    if (Math.abs(spirray1[j])>largest_loop)largest_loop =
                                                Math.abs(spirray1[j]);
}
spiregulator=largest_loop;//*on;

}

function spiral_compress()
{
maxFreq = 0;
let freq = 0;
max1 = -100000;
min1 = 100000;
 mamp = -1000000;
for(let n = 0; n<starArms; n++){testar[n] = 0;testarD[n] = 1;}

let b = -1000000;
let z = dataArray;
averagedAmp =  0;
for(let t=1; t<1024; t+=1)//n<fftSize1/4-100
{
    let n =t;

averagedAmp += z[n];
//if ( z[n]>z[n-1] && z[n] > z[n+1] )
    {

        let   d = (-z[n-1]+z[n+1])/(z[n-1]+z[n+1]);

        let nAdj = n;
        if (Math.abs(d)<5.) nAdj = n + d*4;
        //if (Math.abs(nAdj-n) < 10)
        freq =((( audioX.sampleRate /10000.)*(nAdj))/1024)*10000;


        {
            let g = Math.pow ( 2, (1/24.));
            let aa = freq/440.0;
            let note = Math.log(aa)/Math.log(g)+69*2;
           if (!onO)testar[(Math.round(note))%24] += Math.abs(z[n]);
           else{
               testar[n] = Math.abs(z[n]);
               testarD[n] = note;
               }
        }
    }
}

averagedAmp/=1000.;
};

let time = 0;
let maxInt24 = 0;
let maxWave = 0;
//  for(let n = 0; n<audiBuffer.length; n++)
///b = abs(-sin(n/audiBuffer.length*(pi*2.)));

let shrinking, moving;
let coordX=0.;
let coordY=0.;
let part = {cx : {  value: 0 },};
let trail = Array(1000);
let cx = Array(1000);
        let cy = Array(1000);
                                   let trailWidth = Array(1000);

                let pitchCol = Array(1000);
let trailLoaded = false;
let trailDepth = -1;
let trailLength = 288;
let d_x=0,d_y=0;
let f = 0;



              let xPerp= Array(1000);
              let yPerp = Array(1000);
              let angle=Array(1000);
              let MIN_SAMPLES = 0;  // will be initialized when AudioContext is created.

let pitc = 1;
let inputData;
let bufferSize = 1024;
let reset = 6;
let on;
let spirafreq=1;
var totalAMP;
function  move()
{
    totalAMP = 0.;

if (!trailLoaded) {trailLoaded = true; for(var n = 0; n<trailLength; n++)
{trail[n] = part;xPerp[n]=0;yPerp[n]=0;angle[n]=0;cx[n]=0;cy[n]=0;}trailWidth[n]=0.;}

analyser.getFloatTimeDomainData(inputData); // fill the Float32Array with data returned from getFloatTimeDomainData()
//let iD = Array(inputData.length);
//for(let m = 0; m<inputData.length; m++) iD[m]=(inputData[m]);
    var pb = -1;
   for(var b = 0; b<fftSize/2.; b++)totalAMP+=Math.abs(inputData[b]);
   if(totalAMP>1.)
  pb =    calculatePitch();
  pt = pb;
       if(pb>0){pb =Math.pow(audioX.sampleRate/pb,.5);}
  var volumeModifier = dataArray[0];
on = true;
if (isFinite(pb) &&pb>0&& pb!=6.565706694547585 &&pb!=1) {spirafreq=pt;pitc =pb;reset =0;}
else if (reset>5){on = false;}
else reset++

if (trailDepth<trailLength)trailDepth++;
let g = Math.pow ( 2, (1/24.0));
let aa = pitc/440.0;
let note = Math.log(aa)/Math.log(g)+49;
let inc = 8;
let t =  (note * 30+30*inc);
angle = t%360;
angle = -angle;
let vo = new THREE.Color();
vo.setHSL((angle+90)/360.,1.,.5);

pitchCol[f]  = new THREE.MeshBasicMaterial({
        color:vo,
        opacity: 1.,
        transparent: true,
      });
angle = ((angle-30+180)/360*2*pi);
   // angle = (maxInt24/24*2*pi);
angle[f] = angle;

    //Colour pitchCol = Colour::fromHSV((angle-60)/360.,saturation,value,1.);


         d_x = -Math.sin(-angle)*(4+averagedAmp*2.);
        d_y = -Math.cos(-angle)*(4+averagedAmp*2.);
                        bx=coordX+d_x*movementRate*zoom;
                        by=coordY+d_y*movementRate*zoom;
if(isFinite(d_x)&&isFinite(d_y)){
           if(on){
               coordX+=d_x*movementRate*zoom;
               coordY+=d_y*movementRate*zoom;
           }
           if(Math.abs(by*by)+Math.abs(bx*bx)>=window.zoomCageSize){
               if (Math.abs(by*by)>window.zoomCageSize/2.)coordY*=1.-(Math.abs(by*by)-window.zoomCageSize/2.)/50.;
               if (Math.abs(bx*bx)>window.zoomCageSize/2.)coordX*=1.-(Math.abs(bx*bx)-window.zoomCageSize/2.)/50.;
                   }
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
    cx[n] += d_x;
    cy[n] += d_y;
           trailWidth[n] *=.98
}

}


let material;
    let container;
    let camera, renderer;
let mesh;
let analyser;
let source;
let dataArray;
startMic();
let trailGeom = Array(1000);
let materials;
let trailMeshes = Array(1000);
let materialShader;
let geometry;
let progress = true;
window.addEventListener('keydown', function(event) {
let x = parseInt(String.fromCharCode(event.which || event.keyCode));
//if (x>0)
        //renderer.setPixelRatio( window.devicePixelRatio /x);
}, false);


let geometryP;
let uniforms;
    function init() {

        inputData = new Float32Array(bufferSize);

        container = document.getElementById( 'container' );
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

                      materials = new THREE.MeshBasicMaterial( { color: 0x0000f0,
                        });
for (let r=0; r<trailLength; r++) {




//materials[r].alphaMap=.5;
let vertices = new Float32Array( [0,0,0,
0,0,0,
0,0,0
] );

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
fourCreats: {value: 1 },
metronome: {value: .99 },

    time2dance: {value: 1.0 },

resolution: {value: new THREE.Vector2() },
coords: {value: new THREE.Vector2() }
}
]);
uniforms.resolution.value.x = window.innerWidth;
uniforms.resolution.value.y = window.innerHeight;
uniforms.coords.value.x = coordX;
uniforms.coords.value.y = coordY;
         if(window.shaderOn)materialShader = new THREE.ShaderMaterial( {
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

uniforms.resolution.value.x = window.innerWidth;
uniforms.resolution.value.y = window.innerHeight;
        renderer.setSize( window.innerWidth, window.innerHeight );




    }
    //

    //
let point = [];

    function animate( timestamp ) {

spiral_compress();

move();
    if(on) makeSpirograph();
    let lineMat = new THREE.LineBasicMaterial( {
color: 0xffffff,
linewidth: 5,
linecap: 'round', //ignored by WebGLRenderer
linejoin:  'round' //ignored by WebGLRenderer
} );
            
           if (uniforms[ "metronome" ].value>1.)
               lineMat.color =
                new THREE.Color(-Math.sin(uniforms[ "time" ].value*uniforms[ "metronome" ].value))//this line is geared with the shader, don't change unless you do both
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
            
            
            if (on)for (let r= 0; r < 1000; r ++) {
                        let tx = spirray0[r]*porportionX/spiregulator;
                        let ty =  spirray1[r]*porportionY/spiregulator;
                //    if(!(isFinite(tx) || isFinite(ty) || Math.abs(tx)>window.innerWidth/2 || Math.abs(cy)>window.innerHeight/2))

                //if (isFinite(tx)&&isFinite(ty))
                    point[r]=new THREE.Vector3( tx, ty, -0.07 );

                }
const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints( point ), lineMat );
        const    scene = new THREE.Scene();
        if (on)scene.add(line);

            if (zoom>.000001&&progress&&totalAMP>zoomOutRatchetThreshold)zoom /= 1.044+Math.abs(totalAMP/bufferSize)/15.;
                else if(zoom<1.)zoom *= 1.044;
            
        if (zoom>1.)zoomOutEngage = false;
        else if ( zoom<.000001)zoomOutEngage = true;
            
        if (zoomOutEngage == true)zoom *= 1.44;
            
uniforms.coords.value.x = coordX;
uniforms.coords.value.y = coordY;
            uniforms[ "zoom" ].value = zoom;

uniforms[ "time" ].value = timestamp/1000.;
        uniforms[ "time2dance" ].value += Math.abs(totalAMP/bufferSize*2.);
        requestAnimationFrame( animate );
if (micOn)analyser.getByteFrequencyData(  dataArray);

   var maxTestar=0.;
if(onO){
    for (var g=0; g<starArms; g++) if(testar[g]>maxTestar)maxTestar=testar[g];
            
            
            
    for (var g=starArms; g>0; g--)if(testar[g]>0.00001) {
        var widt = .02;
        var yy =(testarD[g]+19)%24./24.*pi*2.;
        var lengt = testar[g]/maxTestar;
        var vop = new THREE.Color();
       vop.setHSL((1-testarD[g])%24./24.,
                  testarD[g]/297,testarD[g]/297);//this line might need tweaking 288 is the theoretical value
                      material = new THREE.MeshBasicMaterial({
        color:vop,
        opacity: .3+.7/uniforms[ "metronome" ].value ,
        transparent: true,
      });

    
            rpio2 =yy+pi/2.;
    var v = new Float32Array( [
        0-widt*-Math.sin(rpio2)*porportionX,    0-widt*-Math.cos(rpio2)*porportionY,  -0.05,
        0+widt*-Math.sin(rpio2)*porportionX,    0+widt*-Math.cos(rpio2)*porportionY,  -0.05,
        (lengt*-Math.sin(yy)+widt*-Math.sin(rpio2))*porportionX,
        (lengt*-Math.cos(yy)+widt*-Math.cos(rpio2))*porportionY,  -0.05,
        0-widt*-Math.sin(rpio2)*porportionX,    0-widt*-Math.cos(rpio2)*porportionY,  -0.05,
        (lengt*-Math.sin(yy)+widt*-Math.sin(rpio2))*porportionX,
        (lengt*-Math.cos(yy)+widt*-Math.cos(rpio2))*porportionY,  -0.05,
        (lengt*-Math.sin(yy)-widt*-Math.sin(rpio2))*porportionX,
        (lengt*-Math.cos(yy)-widt*-Math.cos(rpio2)*porportionY),  -0.05,
    ] );

    // itemSize = 3 because there are 3 values (components) per vertex
    geometries[g].setAttribute( 'position', new THREE.Float32BufferAttribute( v, 3 ) );
                       meshes[g] = new THREE.Mesh(geometries[g] , material );

                       scene.add(meshes[g])
        }
}
                      
else{
            var maxTestar=1.;
            for (var g=0; g<24; g++) if(testar[g]>maxTestar){maxTestar=testar[g];}
            
            for (var g=0; g<24; g++) {
            var widt = .02;
                var rr= (g+14)%24;
            var lengt = 1.*testar[(rr+5)%24]/maxTestar;

                var vo = new THREE.Color();
                      vo.setHSL((20-rr)%24/24.,1.,.5);
                        material  = new THREE.MeshBasicMaterial( { color:vo});

            var vertices = new Float32Array( [
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

while(loopLimit>15)
{loopLimit--;
pitchCol[r].opacity = 1.-(trailDepth-loopLimit)/trailDepth*3.;
material = pitchCol[r];
trailMeshes[r] = new THREE.Mesh(trailGeom[r] , material );

//material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
//trailMeshes[s] = new THREE.Mesh(trailGeom[s] , material );
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
let widtr = .2*(1.-trailWidth[r]);
let widts = .2*(1.-trailWidth[s]);
let scalar = .005;//mobius mode: let scalar = .07*loopLimit/trailDepth;
let tt = 0.;
    var z = -(trailDepth-loopLimit)/trailDepth-.1;
let vertices = new Float32Array( [
(scalar*cx[r]+widtr*xPerp[r])*porportionX, (scalar*cy[r]+widtr*yPerp[r])*porportionY,z,
                            ( scalar*cx[s]-widts*xPerp[s])*porportionX, (scalar*cy[s]-widts*yPerp[s])*porportionY,z,
        (scalar*cx[s]+widts*xPerp[s])*porportionX, (scalar*cy[s]+widts*yPerp[s])*porportionY,z,
                         ( scalar*cx[r]-widtr*xPerp[r])*porportionX, (scalar*cy[r]-widtr*yPerp[r])*porportionY,z, //2
                                               (scalar*cx[s]-widts*xPerp[s])*porportionX, (scalar*cy[s]-widts*yPerp[s])*porportionY,z,  //1
                                                (scalar*cx[r]+widtr*xPerp[r])*porportionX, (scalar*cy[r]+widtr*yPerp[r])*porportionY,z, //3


] );

trailGeom[r].setAttribute( 'position', new THREE.Float32BufferAttribute( vertices,3 ) );
scene.add(trailMeshes[r])
s = r;
r--;

if(r<=0)r=trailDepth-1;

}
                 if(window.shaderOn)scene.add( mesh );
        renderer.render( scene, camera );
        scene.remove(line);
        line.geometry.dispose( );
                 
                 //if(onO)
                 for (let j=0; j<starArms; j++) {                 scene.remove(meshes[j]);
meshes[j].dispose; geometries[j].dispose();}
                               // else for (let j=0; j<24; j++) {meshes[j].dispose; geometries[j].dispose();}
for (let j=0; j<trailDepth; j++){                  scene.remove(trailMeshes[j]);
trailGeom[j].dispose();trailMeshes[j].dispose}
    }


let audioX;
let micOn = false;
async function startMic() {
let stream = null;



stream = await navigator.mediaDevices.getUserMedia({audio: true}).then(

function (stream){
micOn = true;
audioX = new AudioContext();
analyser = audioX.createAnalyser();
source = audioX.createMediaStreamSource( stream );
source.connect(analyser);
analyser.fftSize = fftSize;
bufferLength = analyser.frequencyBinCount;
dataArray = new Uint8Array( bufferLength );
init();
}
);
}

//begin MIT license
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




let tolerance=1.; //, confidence;
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

