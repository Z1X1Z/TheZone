var shaderScale, chirality,coords,morph,refactorCores,MetaCored,cloverSlide,fieldPowerBoost,upCoreCycler,squareClover,wheel,multiplicatorNexus,continuumClover,outerCoresOff,Spoker,resolution,spirated,Clovoid,colorCombo,spokelover,petals,metaCarousel,rate,free,SPHEREofTheLORD,baseN,Refractelate,fieldPowerBoostMeta;
function setUniformsToPlainName(){
   // uniforms..value
     chirality = uniforms.chirality.value;
     coords = uniforms.coords.value
     morph=    uniforms.morph.value
     refactorCores=    uniforms.refactorCores.value
     MetaCored =    uniforms.MetaCored.value
    cloverSlide =    uniforms.cloverSlide.value
    fieldPowerBoost=    uniforms.fieldPowerBoost.value
    fieldPowerBoostMeta=    uniforms.fieldPowerBoostMeta.value
    upCoreCycler=    uniforms.upCoreCycler.value
    squareClover=    uniforms.squareClover.value
    wheel   = uniforms.wheel.value
    multiplicatorNexus=     uniforms.multiplicatorNexus.value
    continuumClover= uniforms.continuumClover.value
    outerCoresOff =    uniforms.outerCoresOff.value
    Spoker =    uniforms.Spoker.value
    resolution =     uniforms.resolution.value
    spirated =    uniforms.spirated.value
    Clovoid =    uniforms.Clovoid.value
    colorCombo =     uniforms.colorCombo.value
    spokelover =    uniforms.spokelover.value;
    petals =    uniforms.petals.value
    metaCarousel =    uniforms.metaCarousel.value
    rate =    uniforms.rate.value
    free = uniforms.free.value
    SPHEREofTheLORD = uniforms.SPHEREofTheLORD.value;
    baseN =uniforms.baseN.value
    Refractelate = uniforms.Refractelate.value;
    shaderScale =uniforms.shaderScale.value;
}

function tol( p,  t){
  //  return p;
    p = new THREE.Vector2(p.y,p.x);
    p = p.clone().multiplyScalar(zoom).add(new THREE.Vector2(-coords.y,-coords.x));

    var pWithoutChiralizer = p.clone();
if(chirality==-1){p=new THREE.Vector2(p.y,p.x);}
var lfc = coords.length();//freed(coords).length();



var precores = .25/Math.log(.5);

if(morph!=0.)precores=precores-3./Math.log(.5);
if(refactorCores!=1.)precores=-.0;

var cored =0.;
if(MetaCored)cored= Math.log(zoom)/-Math.log(2.)+precores;
else cored = centralCores;
var loops=0.;
if(cloverSlide)loops=-1.;
if(refactorCores>1.)
{
if(cloverSlide)p.divideScalar( 2.);
p.divideScalar( 2.);
}
else if (refactorCores==0.) p.divideScalar(3.);

var s= p.clone();
var c = s.length();

var coresIn = 0.;
var crs = 59.;//this is the mandelbrot and original inheritance colormode core range
// if(c>4./3.){s/=2.;c/=2.;}//Engage one UpCore, the rest of zoom cycle in StarshipMod.js
var centerslide = 0.;

for(var i=0;i<Math.floor(crs);//crs+3=63
i++)if(c<2./3.
&&loops+centerslide<cored
)
{
if(i>1||!cloverSlide){s.multiplyScalar( 2.);c*=2.;}

if (cloverSlide)
{

/*if(refactorCores>0.)
{
if(loops+centerslide>cored-1.)

centerslide-=c*2.;
else
centerslide-=c/4.;
}
else if()        centerslide-=c*2.;

*/
centerslide-=c;

}

loops++;coresIn++;
}
else break;
// if(refactorCores!=1.){s*=(1.+lfc/2.);c*=(1.+lfc/2.);}

if(refactorCores>1.){
var shift = (1.25+.5*zoom/(zoom+lfc));//centered at 1.5, just a guess really
s.multiplyScalar(shift);c*=shift;
}
else if (refactorCores==0.){//for double slide core
s.multiplyScalar(1.5);c*=1.5;
}

if(fieldPowerBoost){
var powerBoost =2.71828*(Math.log(.5)/c);
s.multiplyScalar( Math.pow(c,powerBoost));
}

coresIn+=60.+upCoreCycler;
//  else if(zoom>1.)for(int i=0;i<int(crs); i++)if(c>4./3.&&loops<-cored){s/=2.;c/=2.;loops++;coresIn++;}else break;//UpCore not in use here, but rather in the starshipMod
//for(int i=0;i<int(crs); i++)if(c<2./3.&&loops<cored){s*=2.;c*=2.;loops++;coresIn++;}else break;

if(SPHEREofTheLORD)s.multiplyScalar( (s.length()-zoom/lfc/2.));

if(squareClover)s.divide( new THREE.Vector2(Math.sqrt(2.-s.x*s.x),Math.sqrt(2.-s.y*s.y)).divide(s));


  var  pCenterCored = s.clone();


var  pcs= new THREE.Vector2(
pCenterCored.x*pCenterCored.x*pCenterCored.x  - 3.*pCenterCored.x*pCenterCored.y*pCenterCored.y,
-pCenterCored.y*pCenterCored.y*pCenterCored.y+ 3.*pCenterCored.x*pCenterCored.x*pCenterCored.y
);


    
//float CORE_DELIMITER=1./1.3247179572447460;// /(1.618033988749+.618033988749);

/*if(morph<.5)
CORE_DELIMITER=1./1.32471795724474;//try different truncations of  -1.3247179572447460259609088544780973407344040569017333645340150503028278512455475940546993479817872803299109209947422074251089026390458977955943147570967234717541668390388674187517369315842535499082466223545337273504589879909568150627745509802486213012169894157524574548625075626524610368938904839932269952074975962828868556908150704513696109853352577281586033441141927828273765296032993584674231028483241695239006108543338219;
else {
CORE_DELIMITER=2./3.;//t*=1.5;
}
*/
loops=0.;
var hyperCore=0.;






var logStabilizationConstant = 1./Math.log(3.)+(1.-1./Math.log(3.))/2.;

//.9551195 is based on 1./log(3.)==0.910239 So (1.-.910239)/2+.910239=.9551195 May be incorrect but is close to right.
//log stabalization constant seems to be 1./log(3.)+(1.-1./log(3.))/1.5 from 1./log(3.)+(1.-1./log(3.))/2.
//if(morph!=0.)cored*=3./2.;//stabilize morph dance collaboration

//2.47805268028830 and 3 are solutions to x=log3(x**3)
//float  CORE_DELIMITER=texture2D(coreTextureSampler,vec2(floor(hyperCore)/40.,0.)).x;




var dif = 1.;//3.-(1.-.47805268028830)/3.;
if(MetaCored)hyperCore=
cored/1.5+Math.log(lfc)*logStabilizationConstant;

else hyperCore=externalCores;//hyperCore is really better thought of as hyperMetaCore

//float  CORE_DELIMITEReq=texture2D(coreTextureSampler,vec2(floor(0.)/40.,0.)).x;
var equilibriator = 1.;
//if(lfc>2./3.)equilibriator=lfc/(lfc-zoom/dif)*dif;
hyperCore*=equilibriator;

//   hyperCore+=.25/Math.log(.5)/equilibriator;
if(cloverSlide&&wheel)hyperCore+=1.75/Math.log(.5);

else if(cloverSlide||wheel)hyperCore+=1./Math.log(.5);
//  else if(wheel)hyperCore+=.25/Math.log(.5);

if(multiplicatorNexus)hyperCore-=.5/Math.log(.5);
if(continuumClover)hyperCore-=.75/Math.log(.5);

//if(fieldPowerBoost)hyperCore+=1./Math.log(.5);

if(outerCoresOff)hyperCore=0.;

if(Spoker)
hyperCore*=4./3./(1./Math.log(3.)+(1.-1./Math.log(3.))/1.75);//engage overstable core if dancing log terms based on logStabilizationConstant may or may not be accurate
//if(morph>.5&&!wheel)hyperCore+=4.;
var term=0.;

var m= new THREE.Vector2(0.,0.);

//Maendel clover
if(wheel)m =  pWithoutChiralizer.clone().divideScalar(lfc).sub(coords.yx)//try signs with for fibonacci ring pairing and movement distortion #syyym
.multiplyScalar(abs(coresIn/crs*2.-1.));
//this is essentially just p as in the mandelbrot x <== x^2+

var iterations = 100.;//loops all escape delimiter so iterations aren't used unless needed
var refractelC=1.5;
//  p*=2.*refractelC;
var continuumCounter=0.;

var minToMax=Math.min(resolution.x,resolution.y)/Math.max(resolution.x,resolution.y);

var dstnce = s.length();//"distance" may be reserved keyword

var coreBooster=0.;
var truncator=1.;
if(lfc!=0.) truncator = Math.log(zoom/lfc);
var metaCoreDriveFactor =(((1.-leaf)/truncator)*truncator)/gr;//.324717.... number of places changes appearance
var hyperCoreOUTPUT =hyperCore*Math.log(2.)/Math.log(metaCoreDriveFactor)+loops;
var hyperCoreBoosted = hyperCoreOUTPUT;//if metaCoreDriveFactor==1.5: hyperCoreBoosted=hyperCore*1.75 else if metaCoreDriveFactor==2.: hyperCoreBoosted=hyperCore;
var multCrossTwist=new THREE.Vector2(0.,0.);
if(multiplicatorNexus)//doesn't seem to upcore spokes like intended
{     multCrossTwist=spin2(s,Math.atan(s.x,s.y)*1.5*petals/(6.+petals))*sign(.5-morph)//*equilibriator/CORE_DELIMITER
    /dstnce;

multCrossTwist.multiply( multCrossTwist);
coreBooster=multCrossTwist.length()/Math.log(.5)*lfc;


}
                         


for (var counter=0.;counter<iterations;counter++)if(dstnce<50.){
var OmniDynamicPetalShift =omniData[(loops+counter-1.)];
var OmniPetal =OmniDynamicPetalShift*(petals+6./6.);

var  CORE_DELIMITER=coreData[Math.floor(loops+counter)];

if(multiplicatorNexus)hyperCoreBoosted = hyperCore+coreBooster*dstnce;

// if(!true&&morph<.5)CORE_DELIMITER=1./dstnce*pow(2.,4./12.)*equilibriator;

if(spirated!=0.&&dstnce<CORE_DELIMITER)  //works well<(n-1)/n
s.multiplyScalar( dstnce*2.*PI/(Math.atan(s.y,s.x)-PI*spirated));
dstnce = s.length();


if(Refractelate&&dstnce>refractelC){s.divideScalar( refractelC);} //refractelC/=4./3.;}
var lastS = s.clone();
   
s=new THREE.Vector2(
s.x*s.x*s.x  - 3.*s.x*s.y*s.y,
-s.y*s.y*s.y+ 3.*s.x*s.x*s.y
);
    
// if (mod(counter,5.) == 4.)s =pCenterCored;
//x**3
    /*
if(clvrVariant4)  s*=1.75;
if(clvrVariant5) s = vec2(pow(s.x,-2.),pow(s.y,-2.));
if(clvrVariant6)s=s-lastS.yx;
if(clvrVariant7)s+=pcs;
if(clvrVariant8) if(length(s)<1.)s+=1.;

if(clvrVariant1)  s*=length(lastS);
if(clvrVariant2)s -=zoom/coords.yx;
if(clvrVariant3)s-=pCenterCored*dstnce;


if(dotted)s/=dot(-m,t)*dot(m,-t);
*/
   
if(morph!=0.&&!wheel)s.sub(t);
else s.add(t.clone().sub(m));
   
 
if(Clovoid)s.x=(sqrt(2.*Math.abs(1./s.x)));//this is the body steps on the clover
else if(colorCombo==8||colorCombo==9)s.x=-1./s.x;//this is just the face (without or with +c), inheritance is the only


s.x=Math.log(Math.abs(s.x))/Math.log(baseN);
//traditionally be e or 3 probably 1.5 to 4

    if(Spoker){
        
            var spoke_delimiter =metaCoreDriveFactor/logStabilizationConstant;// 1.+Math.pow(metaCoreDriveFactor-1.,1.5/(2.+.47805268028830/2.));
            
        if(1.<=hyperCoreBoosted)
        {
            if(wheel){
                s.divideScalar(2.);
                
                hyperCoreOUTPUT-=Math.log(spoke_delimiter/2.);
                
                hyperCoreBoosted-=Math.log(spoke_delimiter/2.);
            }
            else{
                
                s.divideScalar(spoke_delimiter);//engage spokelover s/=2.+'superspokes'
                
                hyperCoreOUTPUT-=spoke_delimiter;
                
                hyperCoreBoosted-=spoke_delimiter;
            }
        }
        else  {
            
            if(wheel){
                hyperCoreOUTPUT+=Math.log(spoke_delimiter/2.);
                hyperCoreBoosted+=Math.log(spoke_delimiter/2.);
            }
            else{
                hyperCoreOUTPUT+=spoke_delimiter;
                hyperCoreBoosted+=spoke_delimiter;
            }
        }
    }
    

if(spokelover&&counter<hyperCoreBoosted){
if(continuumClover) s.multiplyScalar( Math.sqrt(2.));//engage shiny spokelover
else s.divideScalar( Math.sqrt(2.));
}


if(continuumClover){//engage continualization
var continuumCore=(continuumCounter+hyperCoreOUTPUT)*zoom/(lfc-zoom);
if(loops+counter<=hyperCoreBoosted+continuumCounter) s.divideScalar( Math.pow(2.,Math.pow(.5,continuumCore)));
hyperCoreBoosted+=continuumCore;
}

dstnce = s.length();

 //              s*=refactorCores;c*=refactorCores;
 
 if(dstnce<4./3.)s=spin2(s,Math.atan(s.y,s.x)*(petals)/6.);
   
for(var i=0;i<40; i++)//not sure if i is 20 or >20
if(dstnce<CORE_DELIMITER&& 0.<=hyperCoreBoosted)
{
//if(i==0){float b = ;s*=b;dstnce*b;}
s.multiplyScalar( metaCoreDriveFactor);dstnce*=metaCoreDriveFactor;hyperCoreBoosted--;loops++;

OmniDynamicPetalShift =omniData[(loops+counter-1.)];
OmniPetal =OmniDynamicPetalShift*(petals+6./6.);

if(dstnce<4./3.&&OmniDynamicPetalShift!=0.)s=spin2(s,Math.atan(s.y,s.x)*OmniPetal);

if (cloverSlide)
{
if((i)>hyperCoreBoosted)
{
var b = 2.*dstnce;
loops-=b;
hyperCoreBoosted+=b;
}
else{
var b =dstnce/4.;
loops-=b;
hyperCoreBoosted+=b;
}

}

if(fieldPowerBoostMeta&&(float(i)>=hyperCoreBoosted)){
var powerBoost =2.71828*(Math.log(.5)*dstnce*(Math.sqrt(2.))/1.5);
s.multiplyScalar( Math.pow(dstnce,powerBoost));
dstnce*=Math.pow(dstnce,powerBoost);

}
var wise = 1.;

if(i%4.==0.)wise=1.;
else if(i%4.==1.)wise=-1.;
else  if(i%4.==2.)wise= -1.;
else  if(i%4.==3.)wise=1.;


if(metaCarousel!=0.
&&((i)>=hyperCoreBoosted+1.))     //this clause establishes that the loop only be run on the last iterational loops, showing some sort of terminal core number as hyperCore-loops-counter maybe
s=spin2(s,time*wise*metaCarousel*(1.+OmniPetal/6.)*rate);

}
else{
break;
}

 hyperCoreBoosted--;
 hyperCoreOUTPUT--;

}else break;
              
return new THREE.Vector3(s.x,s.y,hyperCoreOUTPUT);}
                           
                           function coz( x){return -Math.cos(x);}
                           function zin( x){return -Math.sin(x);}

                           function spin2(f, t)
                           {    //https://en.wikipedia.org/wiki/Rotation_matrix
                               var angle =t;
                               var fxb=f.x;
                               f.x=-f.x*coz(-angle)-f.y*zin(-angle);
                            f.y=fxb*zin(-angle)-f.y*coz(-angle);
                            return f.clone();
                           }
                           
                           
                           function freed( p){
                               if(free){
                                   var shift = 3.;
                                   p.addScalar( shift/2.);
                                   p=new THREE.Vector2( Math.abs(p.x)%shift,Math.abs(p.y)%shift);
                                   p.subScalar( shift/2.);
                               }
                               return p;
                               }
                           
                           let coreTriggered = false;
                           let coreSwipeTexture;
                           let coreSwipeData=new Float32Array(window.innerHeight*window.innerWidth*4).fill(0);
                           const can = document.getElementById("CANVAS");
                           
window.generated = true
window.bigCloverGapSync = false;
                           function boot (){
    setUniformsToPlainName()

    coreSwipeData=new Float32Array(window.innerHeight*window.innerWidth*4).fill(0.);
    
    let strideClover=0;
    //if(loopsRun>2) console.log(Number.MAX_VALUE==new THREE.Vector2(Number.MAX_VALUE,0.).x);
    if(loopsRun>1){
        if(!generated&&dupered&&zoom<zoomCap32)
        {
            console.log("swapping");
            bigCloverGapSync = true;
            generated=true;
            uniforms.duperZoom.value = zoom;
            uniforms.coordSHIFT.value=new THREE.Vector2(0,0);

            //  const floatSupported = can.getContext("webgl").getExtension("OES_texture_float");
            // console.log(floatSupported)
            for(var hei = 0; hei<window.innerHeight; hei++)  for(var wi = 0; wi<window.innerWidth; wi++){
                let t = tol(  new  THREE.Vector2(wi,hei).sub(new THREE.Vector2(window.innerWidth/2.,window.innerHeight/2.)).divideScalar(maximumDimension).multiplyScalar( shaderScale*2)
                            , new THREE.Vector2(0,0) );
                // t= new THREE.Vector2(.5,.5)
                // if(hei==wi)console.log(t)
                coreSwipeData[strideClover]=t.x;
                coreSwipeData[1+strideClover]=t.y;
                coreSwipeData[2+strideClover]=t.z;
                coreSwipeData[3+strideClover]=0;
                strideClover+=4;
               // if(wi==hei)console.log(t.z)
            }
            coreSwipe = new THREE.DataTexture( coreSwipeData, window.innerWidth, window.innerHeight,THREE.RGBAFormat,THREE.FloatType);
            // coreSwipe.unpackAlignment=1
            coreSwipe.needsUpdate=true;
            //    console.log(coreSwipeData[1])
            //  console.log(t)
            uniforms.uberDuper.value=coreSwipe;
            uniforms.uberDuper.needsUpdate=true;
            //wipeUniforms.cloverSampler.value=coreSwipe
            // wipeUniforms.cloverSampler.needsUpdate=true;
        }else{
             tree=tol(  new THREE.Vector2(0,0), new THREE.Vector2(0,0) );
            let coreImplosion = Math.abs(Math.floor(coreTriggered)-Math.floor(tree.z));

            if(coreImplosion>1)
            {
                if(dupered&&zoom<zoomCap32) generated = false;
                coreTriggered=tree.z;

                if(window.haptic2){
                    let vibrateArrayNew=[];

                        for(var t = 0; t<3; t++)
                        {
                            vibrateArrayNew.push(coreImplosion*50);
                            vibrateArrayNew.push(coreImplosion*50);
                            
                                                           try{error = navigator.vibrate(vibrateArrayNew );}
                                                           catch(e){ error+=e;}
                            
                        }
                }
            }
        }
        
        
    }
     //setTimeout(boot,10);
   // console.log(b)
}

