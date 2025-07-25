var shaderScale,dilate, coreDilation, chirality,coords,morph,refactorCores,MetaCored,cloverSlide,dynamicOvercore,fieldPowerBoost,upCoreCycler,squareClover,wheel,multiplicatorNexus,continuumClover,outerCoresOff,Spoker,resolution,spirated,Clovoid,colorCombo,spokelover,petals,metaCarousel,rate,free,SPHEREofTheLORD,baseN,Refractelate,fieldPowerBoostMeta,exponentialPetals,oppositionalCoreFlop
,clvrVariant4,clvrVariant3,clvrVariant2,clvrVariant1,clvrVariant5,clvrVariant6,clvrVariant7,clvrVariant8,clvrVariant9,Inherited,superStable, cloverOffset,twelveGates,twelveGatesMeta,spinTowardsMe,d,chop,cellularDivision,triogenesis,nGenesis,squareGenesis,constellationCoord,cloverso,feedTheLamb;
function setUniformsToPlainName(){
    oppositionalCoreFlop=uniforms.oppositionalCoreFlop.value
    nGenesis=uniforms.nGenesis.value
    squareGenesis=uniforms.squareGenesis.value
    Inherited=uniforms.Inherited.value;
    cellularDivision=uniforms.cellularDivision.value;
    triogenesis=uniforms.triogenesis.value;
    d=uniforms.d.value;
    chop=uniforms.chop.value;
    spinTowardsMe=uniforms.spinTowardsMe.value;
    twelveGates=uniforms.twelveGates.value;
    twelveGatesMeta=uniforms.twelveGatesMeta.value;
    clvrVariant1=uniforms.clvrVariant1.value;
    clvrVariant2=uniforms.clvrVariant2.value;
    clvrVariant3=uniforms.clvrVariant3.value;
    clvrVariant4=uniforms.clvrVariant4.value;
    clvrVariant5=uniforms.clvrVariant5.value;
    clvrVariant6=uniforms.clvrVariant6.value;
    clvrVariant7=uniforms.clvrVariant7.value;
    clvrVariant8=uniforms.clvrVariant8.value;
    clvrVariant9=uniforms.clvrVariant9.value;
    dilate = uniforms.dilate.value
    coreDilation  = uniforms.coreDilation.value;
    time = window.TIMESTAMP;
     chirality = uniforms.chirality.value;
    cloverOffset=uniforms.cloverOffset.value;

     coords = uniforms.coords.value
     morph=    uniforms.morph.value
     refactorCores=    uniforms.refactorCores.value
     MetaCored =    uniforms.MetaCored.value
    cloverSlide =    uniforms.cloverSlide.value
    dynamicOvercore = uniforms.dynamicOvercore.value
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
    centralCores=uniforms.centralCores.value;
    externalCores=uniforms.externalCores.value;
    exponentialPetals=uniforms.exponentialPetals.value;
    mandelCloverFactor=uniforms.mandelCloverFactor.value;
    superStable=uniforms.superStable.value;
    distributor=uniforms.distributor.value;
    cloverso=uniforms.cloverso.value;
    feedTheLamb=uniforms.feedTheLamb.value;

    constellationCoord=uniforms.constellationCoord.value;
}


var distributorFACTOR=Math.PI/gr;
var distributorFACTORorth =Math.PI/6.

var distributorFACTORlove= distributorFACTOR/leaf;//*Math.sqrt(2.)
var distributorFACTORloveORTH= distributorFACTORorth;//*Math.sqrt(2.)


function tol( j,  t){

    
   var inMainSpoke = false;
  //  return p;
   let p = new THREE.Vector2(j.y,j.x);//
    p = p.clone().multiplyScalar(zoom).add(new THREE.Vector2(-coords.y,-coords.x));
    let petalNumber = petals+6;

    p.multiplyScalar(1./squirgleData[Math.round((((
                                        Math.atan2(p.y,p.x)/(
                                                             (petalNumber)/6.)//
                                            +Math.PI*2*4.
            +Math.PI/petalNumber/2.
                                           )/Math.PI/2
                                            )%1.// (petalNumber)/6.
                                            )*squirgleData.length)]);
    
    for(var x=2.; x<102.;x+=1.)
    {
        if ((nGenesis)+2.>x)
    {
    var regenerativeshift = 1./x;
p.x-=regenerativeshift;
p= new THREE.Vector2(p.x-Math.sign(p.x)*regenerativeshift,p.y);
      p=  new THREE.Vector2(p.x-Math.sign(p.x+regenerativeshift)*regenerativeshift,p.y);
        p.x+=regenerativeshift;
        }
    else break;
    }
    
    if(clvrVariant4)
        p.divideScalar(1.25)
        var outerMargin =Math.atan2(p.y,p.x);
        if(cloverso)p=new THREE.Vector2
((-Math.cos(outerMargin)-p.x,-Math.sin(outerMargin)-p.y));
    
       // if(cloverso) p.multiplyScalar((2./3.-(p.x*p.x+p.y*p.y)**.5));

    var pWithoutChiralizer = p.clone();
    var chiralAdjustment = 0.;
    if(chirality==-1&&twelveGates){
    chiralAdjustment=-Math.PI2/24.;
    p=spin(p,-chiralAdjustment);}
    else if(chirality==-1){
    chiralAdjustment=-Math.PI/2.;
    p=spin(p,-chiralAdjustment/2.);}
    if(cloverOffset!=0.)p=spin(p,cloverOffset*Math.PI*2.);

    
    
    if(twelveGates)
    {
    var angle = Math.atan2(p.y,p.x);
    if(((angle/Math.PI+2.)*6.+.5)%2.>1.)p=spin(p,Math.PI/6.);
           }
           
var lfc = freed(constellationCoord).length();//freed(coords).length();



var precores = .25/Math.log(.5);
   // if(clvrVariant4&&cloverSlide) precores=precores-1./Math.log(.5);
   // else if(clvrVariant4)precores=0.;
    if(refactorCores!=1.)precores=-.0;

var cored =0.;
if(MetaCored)cored= Math.log(zoom)/-Math.log(2.)+precores;
else cored = centralCores;
var loops=0.;
if(cloverSlide)loops=-1.;
if(refactorCores>1.//||clvrVariant4
   )
{
if(cloverSlide)p.divideScalar( 2.);
p.divideScalar( 2.);
}
else if (refactorCores==0.) p.divideScalar(3.);

var s= p.clone();
var c = s.length();

var coresIn = 0.;
var crs = 57.;//this is the mandelbrot and original inheritance colormode core range
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
centerslide-=c/2.;

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

coresIn+=upCoreCycler;
//  else if(zoom>1.)for(int i=0;i<int(crs); i++)if(c>4./3.&&loops<-cored){s/=2.;c/=2.;loops++;coresIn++;}else break;//UpCore not in use here, but rather in the starshipMod
//for(int i=0;i<int(crs); i++)if(c<2./3.&&loops<cored){s*=2.;c*=2.;loops++;coresIn++;}else break;

if(SPHEREofTheLORD)s.multiplyScalar( (s.length()-zoom/lfc/2.));

if(squareClover)s.divide( new THREE.Vector2(Math.sqrt(2.-s.x*s.x),Math.sqrt(2.-s.y*s.y)).divide(s));
    var dstnce = s.length();//"distance" may be reserved keyword
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
var equilibriator = 1.
    if(dilate){
if(lfc>2./3.)equilibriator=lfc/(lfc-zoom/dif)*dif;
   //this is to allow top level core freeze for original clover
hyperCore*=equilibriator;
   }
//  hyperCore-=.441/Math.log(.5)/equilibriator;
//if(cloverSlide&&wheel)hyperCore+=1.75/Math.log(.5);
  // hyperCore-=coreDilation
   if(feedTheLamb)  {
   hyperCore-=.25/Math.log(.5);
}

   if(clvrVariant4)
   {
    if(!feedTheLamb)hyperCore-=.4/Math.log(.5);//1./(7.*log(.5));
    if(cloverSlide)hyperCore+=.5/Math.log(.5);
    //if(wheel)hyperCore-=0./Math.log(.5);
   // if(morph!=0.)hyperCore+=2.5/Math.log(.5);

}
   else {
    hyperCore-=.5/Math.log(.5);
    if(cloverSlide)hyperCore+=.5/Math.log(.5);
    if(wheel)hyperCore-=1./Math.log(.5);
    if(morph!=0.) hyperCore-=1./Math.log(.5);
    
    if(Spoker&&spokelover&&dilate) hyperCore-=.0/Math.log(.5);
    else if (!dilate)hyperCore+=.5/Math.log(.5);
    
    if(clvrVariant2)hyperCore+=1./Math.log(.5);
    

}
   
if(multiplicatorNexus)hyperCore-=.5/Math.log(.5);
if(continuumClover!=0)hyperCore-=0./Math.log(.5);
let lpcc = pCenterCored.length();
   let lpcc2=lpcc*lpcc;
//if(fieldPowerBoost)hyperCore+=1./Math.log(.5);

if(outerCoresOff)hyperCore=0.;

if(Spoker)
hyperCore*=4./3./(1./Math.log(3.)+(1.-1./Math.log(3.))/1.75);//engage overstable core if dancing log terms based on logStabilizationConstant may or may not be accurate
//if(morph>.5&&!wheel)hyperCore+=4.;
var term=0.;

var m= new THREE.Vector2(0.,0.);

    var truncator=1.;
    var truncated = true;
    if(lfc!=0.&&zoom!=0.&&truncated)
        truncator = Math.log((lfc*lfc)/(zoom*zoom))/Math.log(2.);//*100

        //truncator = Math.log(zoom/lfc)**2.;
//Maendel clover
                                     
//this is essentially just p as in the mandelbrot x <== x^2+

var iterations = 100.;//loops all escape delimiter so iterations aren't used unless needed
var refractelC=1.5;
//  p*=2.*refractelC;
var continuumCounter=0.;

var minToMax=Math.min(resolution.x,resolution.y)/Math.max(resolution.x,resolution.y);

//t.multiplyScalar(.74);
var coreBooster=0.;
var metaCoreDriveFactor =(((1.-leaf)/truncator)*truncator)/gr;//.324717.... number of places changes appearance
                           var twoGRthreeLeaf=(((-2.*gr-3.*leaf)/truncator)*truncator);

var spoke_factor =metaCoreDriveFactor*twoGRthreeLeaf;//metaCoreDriveFactor*(((-2.*gr-3.*leaf)/truncator)*truncator)
//var grOverLeaf=-((gr/leaf)/truncator)*truncator;//uncertain term
                           var grPlusOneOverLeaf=(((1.+gr)/(-leaf))/truncator)*truncator;
                          
                                             
var spoke_factorLarge =spoke_factor*grPlusOneOverLeaf;
                                                  
                                                  var upSpoke=spoke_factorLarge;//grPlusOneOverLeaf/-Math.pow(spoke_factor/-leaf,-leaf-1.);//1.5/Math.sqrt(spoke_factor);
                           
                           var oneOverLeafTruncated = ((1./leaf)/truncator)*truncator;
           var downSpoke=oneOverLeafTruncated;//1./(((-leaf)*truncator)/truncator)/4.;
                          
                          var variant4Correction=1.;
                          if(clvrVariant4)variant4Correction=(1.-oneOverLeafTruncated);
                                        
                                    correction = zoom/(zoom-lfc*variant4Correction);
                          if(wheel)m =  pWithoutChiralizer.clone().sub(new THREE.Vector2(coords.y,coords.x).multiplyScalar(variant4Correction).multiplyScalar(2.))//try signs with for fibonacci ring pairing and movement distortion #syyym
                          .multiplyScalar(Math.abs(coresIn/crs*2.-1.)).multiplyScalar(mandelCloverFactor);

  // var logOfSpoke_Factor=0.;
                          // if (wheel) logOfSpoke_Factor=Math.log(spoke_factor);
var hyperCoreOUTPUT =hyperCore*Math.log(2.)/Math.log(metaCoreDriveFactor)+loops;
                           hyperCoreOUTPUT-=(6.+petals)/6.-1.;

var hyperCoreBoosted = hyperCoreOUTPUT;//if metaCoreDriveFactor==1.5: hyperCoreBoosted=hyperCore*1.75 else if metaCoreDriveFactor==2.: hyperCoreBoosted=hyperCore;
              //            hyperCoreBoosted-=(6.+petals)/6.-1.;//upcore for higher omniclover counts
                                                       
                           var multCrossTwist=new THREE.Vector2(0.,0.);
if(multiplicatorNexus&&dstnce!=0)//doesn't seem to upcore spokes like intended
{
    let spunMCT=spinVector(s,Math.atan2(s.x,s.y)*1.5*petals/(6.+petals))*Math.sign(.5-morph)//*equilibriator/CORE_DELIMITER
        /dstnce;
    
    multCrossTwist=new THREE.Vector2(spunMCT.x,spunMCT.y);

multCrossTwist.multiply( multCrossTwist);
coreBooster=multCrossTwist.length()/Math.log(.5)*lfc;


}
                         

                                                      
                                                                                  var colorComputationBoost =4.;//increasing number decreases processing and clarity
                                                                                  
                          
                          dstnce=s.length();
                                                       /*
                          if(dilate){
                            
                              hyperCoreOUTPUT-=dstnce;//dilate clover shift
                              hyperCoreBoosted-=dstnce;//maybe times 1.5
                          }
                                                        */

                          var    initialHyperCoreBoosted=hyperCoreBoosted;
                          //var lengthP = p.length(p);


let loopSolid = 0.
                          let runTimes = 0;
                          
                          var colorComputationBoost =7.;//increasing number decreases processing and clarity
                          var baseDelimiter =50.;
                          var delimiter = baseDelimiter;
                          if(colorCombo==-1&&Inherited)delimiter=baseDelimiter/colorComputationBoost;
          
                          var base=baseN;
                //    if(Math.abs(baseN-2.701002244)<.00001)base=(baseN/truncator)*truncator;
                        //  dstnce=s.length();

                                                       
                                                    if(clvrVariant2) {
                                                        s.divideScalar(2.);
                                                        //hyperCoreBoosted++;
                                                        //hyperCoreOUTPUT++;
                                                        }
for (var counter=0.;counter<iterations;counter++)if(dstnce<delimiter){
   /*
    if( loopSolid>=hyperCoreBoosted+1)
    {runTimes++
        console.log(runTimes)
    }
    */
var OmniDynamicPetalShift =omniData[0];
var OmniPetal =OmniDynamicPetalShift*(petalNumber/6.);

var  CORE_DELIMITER=coreData[0];
  
//if(multiplicatorNexus)hyperCoreBoosted = hyperCore+coreBooster*dstnce;

// if(!true&&morph<.5)CORE_DELIMITER=1./dstnce*pow(2.,4./12.)*equilibriator;
    dstnce = s.length();

if(spirated!=0.&&dstnce<2./3.)//CORE_DELIMITER)  //works well<(n-1)/n
s.multiplyScalar( dstnce*2.*Math.PI/(Math.atan2(s.y,s.x)-Math.PI*spirated));
dstnce = s.length();


if(Refractelate&&dstnce>refractelC){s.divideScalar( refractelC);} //refractelC/=4./3.;}
            if((counter==1.&&oppositionalCoreFlop==1)||oppositionalCoreFlop==2)s=spinVector(s,Math.PI);

var lastS = s.clone();
            var superUpcorer = 0.;
            if(feedTheLamb){superUpcorer =-1.+1./((Math.abs((Math.atan2(s.y,s.x)/Math.PI/2+1.//+.5/petalNumber
            %(1./6.))-.5/6.))*petalNumber*Math.PI/2*2.)+s.length()/Math.log(2.)/2.*petalNumber/6.;
            hyperCoreBoosted-=superUpcorer;
            hyperCoreOUTPUT-=superUpcorer;
            }
s=new THREE.Vector2(
s.x*s.x*s.x  - 3.*s.x*s.y*s.y,
-s.y*s.y*s.y+ 3.*s.x*s.x*s.y
);
    
        dstnce = s.length();
            if(chop&&dstnce>2./3.)s=spinVector(s,Math.floor(dstnce)*Math.PI/2.);

        if(dilate){//this is to allow top level core freeze for original clover
         
             hyperCoreBoosted-=dstnce;
              hyperCoreOUTPUT-=dstnce;
        }

        if(clvrVariant9)  s=new THREE.Vector2(s.x+coords.y/gr,s.y+coords.x/gr);
        if(clvrVariant7)s.add(pcs);

        
        if(clvrVariant1)  s.multiplyScalar( Math.sqrt(lastS.x*lastS.x+lastS.y*lastS.y));
    /*
        if(clvrVariant3)s.sub(pCenterCored.multiplyScalar( dstnce));

        if(clvrVariant2){
            var cb=new THREE.Vector2(coords.y,coords.x);
            var coordClover=new THREE.Vector2(
                                  cb.x*cb.x*cb.x         - 3.*cb.x*cb.y*cb.y,
                -cb.y*cb.y*cb.y+ 3.*cb.x*cb.x*cb.y
                );
     
          var modifier=  new THREE.Vector2(
                                           coords.x*coords.y*(1.-Math.abs(coords.y))*(1.-Math.abs(coords.x))/Math.abs(s.x)/coordClover.y*coords.y,
            coords.y*coords.x*(1.-Math.abs(coords.x))*
            (1.-Math.abs(coords.y))/Math.abs(s.y)/coordClover.x*coords.y);//*abs(coordClover.x);//coords.xy*coords.yx*(1.-oneOverLeafTruncated);
            s.sub(modifier);
           // hyperCoreBoosted-=length(modifier);
            }
     */
        if(clvrVariant4)  s.multiplyScalar( 1.-oneOverLeafTruncated);
    
 if(clvrVariant2) {
     if (clvrVariant4) s.multiplyScalar(1.5);
    else {
        s.multiplyScalar(2.);
         hyperCoreBoosted++;
         hyperCoreOUTPUT++;
         }
     }
// if (mod(counter,5.) == 4.)s =pCenterCored;
//x**3
    /*
if(clvrVariant5) new THREE.Vector2(Math.pow(s.x,-2.),Math.pow(s.y,-2.)) ;
if(clvrVariant6)s.sub(new THREE.Vector2( lastS.y,lastS.x));
     */
if(clvrVariant8) if(Math.sqrt(s.x*s.x+s.y*s.y)<1.)s.addScalar( 1.);

//if(dotted)s/=dot(-m,t)*dot(m,-t);

   /*
if(morph!=0.&&!wheel)s.sub(t);
else {
    let y = t.clone().sub(m);
    s.add(y);
}
    */
 
if(Clovoid)s.x=(Math.sqrt(2.*Math.abs(1./s.x)));//this is the body steps on the clover
else if(colorCombo==8||colorCombo==9)s.x=-1./s.x;//this is just the face (without or with +c), inheritance is the only

       // dstnce = s.length();

        //var trunc=1.;
        //if(lfc!=0.) trunc = Math.log(zoom/dstnce)/100.;
s.x=Math.log(Math.abs(s.x))/Math.log(base);
            if(cellularDivision==1||(cellularDivision==2&&counter>1.))s=new THREE.Vector2(s.x,s.y-Math.sign(s.y)/2.);

            if(squareGenesis){

                var regenerativeLayers = 3.;
                    for(var x=2.; x<3.;x+=1.)
                    {
                    var regenerativeshift = 1./x;
                s.x-=regenerativeshift;
                s= new THREE.Vector2(s.x-Math.sign(s.x)*regenerativeshift,s.y);
                      s= new THREE.Vector2(s.x-Math.sign(s.x+regenerativeshift)*regenerativeshift,s.y);
                        s.x+=regenerativeshift;
                        }
                    for(var x=2.; x<regenerativeLayers;x+=1.)
                    {
                    var regenerativeshift = 1./x;
                s.y-=regenerativeshift;
                s= new THREE.Vector2(s.x,s.y-Math.sign(s.y)*regenerativeshift);
                      s=new THREE.Vector2(s.x,s.y-Math.sign(s.y+regenerativeshift)*regenerativeshift);
                        s.y+=regenerativeshift;
                        }
                       
                }
//traditionally be e or 3 probably 1.5 to 4
    dstnce = s.length();

        if(Spoker){
          //  if(morph==0.)
            {
               
                if(//(!wheel &&
                   Math.sqrt(dstnce)*dstnce<=hyperCoreBoosted//)||(wheel&&1.<=hyperCoreBoosted)
                    )
                {
                   /* if(wheel){
                        s.divideScalar(2.);
                        
                        hyperCoreOUTPUT-=logOfSpoke_Factor;
                        
                        hyperCoreBoosted-=logOfSpoke_Factor;
                    }
                    else{
                    */
                    
                                  
                    if(counter<=2.)inMainSpoke=true;
                    if(distributor)
                    {   if (inMainSpoke)
                       // s=spinVector(s,distributorFACTORorth);
                       // else
                        s=spinVector(s,distributorFACTOR);

                        }
                    

                       if(!wheel||1==1) s.divideScalar(spoke_factorLarge);//engage spokelover s/=2.+'superspokes'
                        
                        hyperCoreOUTPUT-=downSpoke;
                        
                        hyperCoreBoosted-=downSpoke;
                   // }
                }
                else  {
                    /*
                    if(wheel){
                        hyperCoreOUTPUT+=logOfSpoke_Factor;
                        hyperCoreBoosted+=logOfSpoke_Factor;
                    }
                    else*/
                 //    {
                  //      var correctionSpoke =Math.pow(upSpoke/dstnce,grOverLeaf);
                    s.multiplyScalar(spoke_factor);//engage spokelover s/=2.+'superspokes'
                    let coreFactor =upSpoke;
                    //if (!inMainSpoke)
                     // if(!wheel||1==1)  coreFactor/=dstnce+1;
                        hyperCoreOUTPUT+=coreFactor;
                        hyperCoreBoosted+=coreFactor;
                 //   }
                }
            }
        //    else
         //   {
             //   hyperCoreOUTPUT-=spoke_factor;
                
              //  hyperCoreBoosted-=spoke_factor;
        //    }
            
        }
        //dstnce=s.length();
        if(spokelover){
            
            var powerOfSpokeCore = spoke_factorLarge*lfc/dstnce;

var spokeloverCoreShiftDown=Math.pow(upSpoke,powerOfSpokeCore)*logStabilizationConstant;            ;//logStabilizationConstant seems to cancel powerOfDynamicSokeCore=2;

var       spokeloverCoreShiftUp   =      Math.pow(Math.abs(downSpoke),powerOfSpokeCore)*logStabilizationConstant;//for spokelover
            
            if(counter+dstnce*dstnce<hyperCoreBoosted){
                //  if(continuumClover) s*=sqrt(2.);//engage shiny spokelover
                //else
                
                if(distributor)
                {   if (inMainSpoke)
                   // s=spinVector(s,distributorFACTORloveORTH);
                   // else
                        s=spinVector(s,-distributorFACTORlove);

                }
                    s.divideScalar( Math.sqrt(2.));
                if(!wheel||1==1)
                {
                    
                    hyperCoreOUTPUT+=spokeloverCoreShiftUp;
                    hyperCoreBoosted+=spokeloverCoreShiftUp;
                }
            }
            
            else //if(  0.>=hyperCoreBoosted)
            {
                s.multiplyScalar( Math.sqrt(2.)/1.5);

                if(!wheel||1==1)
                {
                    let coreFactor =spokeloverCoreShiftDown;
                    if (!inMainSpoke)coreFactor/=spokeloverCoreShiftDown;
                    hyperCoreOUTPUT-=coreFactor;
                    hyperCoreBoosted-=coreFactor;
                }
            }
            
        }


//if(spokelover&&counter<hyperCoreBoosted){
//if(continuumClover) s.multiplyScalar( Math.sqrt(2.));//engage shiny spokelover
//else
//    s.divideScalar( Math.sqrt(2.));
//}

dstnce=s.length();
if(continuumClover!=0&&lfc!=0){//engage continualization
  
var continuumCore=(continuumCounter+hyperCoreOUTPUT)*correction;
if(loops+counter<=hyperCoreBoosted+continuumCounter)
{
  //  if(dstnce<2./3.) s.addScalar( coords.yx*correction);
    //s=new THREE.Vector2(Math.abs(s.x),Math.abs(s.y))
    let dstlpcc = dstnce*lpcc;
    if(feedTheLamb)dstlpcc*=.5;
   /* let deDistortion = Math.sqrt(dstlpcc)*Math.sqrt(dstnce)*Math.sqrt(lpcc)*lpcc2;
    if(dstlpcc<16./9.)
        deDistortion*=(1.-dstlpcc*9./16.)
    */
    let superBoostedContinuation = Math.pow(.5,continuumCore)*dstlpcc;//*deDistortion//*Math.sqrt(dstlpcc*9./16.)//*Math.sqrt(
                                                                                                  //lpcc*3./4.
                                                                        //)
                                                                        ;
    if(continuumClover==2)superBoostedContinuation*=superBoostedContinuation;
    
    s.divideScalar( Math.pow(1./lpcc,superBoostedContinuation));

     hyperCoreBoosted+=continuumCore;
     hyperCoreOUTPUT+=continuumCore;
     }
     else{
    //     if(dstnce<2./3.) s.subScalar(coords.yx*correction);
         let cc2 =continuumCore*continuumCore;

        hyperCoreBoosted-=cc2;
         hyperCoreOUTPUT-=cc2;
     }
}

dstnce = s.length();

 //              s*=refactorCores;c*=refactorCores;
 
 if(petals!=0.&&dstnce<4./3.)s=spinVector(s,Math.atan2(s.y,s.x)*(petals)/6.);
        
        if(dstnce<4./
           3. &&exponentialPetals!=0.)
            s=  spinVector(s,Math.pow(2.,(Math.atan2(s.y,s.x)/Math.PI+1.)*2.));
    dstnce=s.length();
        if(dilate){
          
            hyperCoreOUTPUT-=dstnce*dstnce;//dilate clover shift
            hyperCoreBoosted-=dstnce*dstnce;//maybe times 1.5
            
          //      var sliceanddiceBoost=           mod((Math.atan2(s.y,s.x)+chiralAdjustment)*(1./Math.PI/2.)*6.+.5,1.)*dstnce;
            
          //  hyperCoreBoosted-=sliceanddiceBoost;
           //  hyperCoreOUTPUT-=sliceanddiceBoost;

        }

for(var i=0;i<40; i++)//not sure if i is 20 or >20
if(dstnce<CORE_DELIMITER||((superStable&&((counter==0.&&dstnce<1.)||dstnce<2./3.)))
   && 0.<=hyperCoreBoosted&&MetaCored)
{
    if(spinTowardsMe) if(i>=hyperCoreBoosted)s=spin(s,Math.atan2(d.y,d.x));

    var cloverOrDaisyOnTop = counter;
    if(twelveGates)cloverOrDaisyOnTop=counter+1.;
    
        if(twelveGatesMeta!=0.&&((twelveGatesMeta<1.&&(cloverOrDaisyOnTop-.5)%(1./twelveGatesMeta)>=1.)||
                                 (twelveGatesMeta>=1.&&cloverOrDaisyOnTop%twelveGatesMeta)<1.))
        {
        var angleS = Math.atan2(s.y,s.x);
        if(((angleS/Math.PI+2.)*6.+.5)%2.>1.)s=spin(s,Math.PI/6.);
        }
   if(superStable)
    {
                if(i==0){
 if(counter==0.) { s.divideScalar(4.);dstnce/=4.;
}  else
     { s.divideScalar(2.);dstnce/=2.;
}
        
                    
                    hyperCoreBoosted+=.5;
                    hyperCoreOUTPUT+=.5;
                  loops-=.5;
                    
                }
            else{
                s.multiplyScalar(2.);dstnce*=2.;
                
                hyperCoreBoosted-=1.;
                hyperCoreOUTPUT-=1.;
                loops++;
            }
            
            hyperCoreBoosted-=.5;;
            hyperCoreOUTPUT-=.5;;
            loops+=.5;

}
    
  else  { s.multiplyScalar( metaCoreDriveFactor);dstnce*=metaCoreDriveFactor;
      hyperCoreBoosted--;
      hyperCoreOUTPUT--;
      loops++;
    }
 
    
//if(i==0){float b = ;s*=b;dstnce*b;}

OmniDynamicPetalShift =omniData[0];
OmniPetal =OmniDynamicPetalShift*((petalNumber)/6.);

if(dstnce<4./3.&&OmniDynamicPetalShift!=0.)s=spinVector(s,Math.atan2(s.y,s.x)*OmniPetal);

if (cloverSlide||dynamicOvercore)
{
if((i)>hyperCoreBoosted)
{
var b = 0;
    if(cloverSlide)b+=dstnce;
    if(dynamicOvercore)b+= 1./(dstnce/(lfc/(lfc-zoom)));
//loops-=b;
//hyperCoreBoosted+=b;
//    hyperCoreOUTPUT+=b;

}
else{
    if(cloverSlide){
        var b = 0;
        
        b =dstnce/4.;//may not be core stable
        loops-=b;
        hyperCoreBoosted+=b;//doesn't work with duper core
        hyperCoreOUTPUT+=b;//doesn't work with duper core
    }
}
    /*

    var b =-dstnce;
    loops-=b;//doesn't work with duper core
    hyperCoreBoosted+=b;//doesn't work with duper core
   */
}

if(fieldPowerBoostMeta&&((i)>=hyperCoreBoosted)){
var powerBoost =2.71828*(Math.log(.5)*dstnce*(Math.sqrt(2.))/1.5);
s.multiplyScalar( Math.pow(dstnce,powerBoost));
dstnce*=Math.pow(dstnce,powerBoost);

}
if(metaCarousel!=0.
   &&((i)>=hyperCoreBoosted+1.))  {   //this clause establishes that the loop only be run on the last iterational loops, showing some sort of terminal core number as hyperCore-loops-counter maybe
    
    var wise = 1.;
    
    if(i%4.==0.)wise=1.;
    else if(i%4.==1.)wise=-1.;
    else  if(i%4.==2.)wise= -1.;
    else  if(i%4.==3.)wise=1.;
    
    
    s= spinVector(s,time*wise*metaCarousel*(1.+OmniPetal/6.)*rate);
}

}
else{
break;
}
       // dstnce = s.length();

 hyperCoreBoosted--;
 hyperCoreOUTPUT--;
    loopSolid++

}else break;
                    //  console.log("out"+loopSolid)
return new THREE.Vector3(s.x,s.y,hyperCoreOUTPUT);}
                           
                           function coz( x){return -Math.cos(x);}
                           function zin( x){return -Math.sin(x);}

                           function spinVector(b, t)
                           {
                        //https://en.wikipedia.org/wiki/Rotation_matrix
    var f=b.clone();
                               var angle =t;
                               var fxb=f.x;
                               f.x=-f.x*coz(-angle)-f.y*zin(-angle);
                            f.y=fxb*zin(-angle)-f.y*coz(-angle);
                            return f;
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
                           
                           let coreTriggered = 0;
                           let coreSwipeTexture;
                           const can = document.getElementById("CANVAS");
                           
window.generated = true
window.bigCloverGapSync = false;
            let coreSwipeData=new Float32Array(window.innerHeight*window.innerWidth*4).fill(0);
                           function boot (){
    setUniformsToPlainName()

        

    let strideClover=0;
    //if(loopsRun>2) console.log(Number.MAX_VALUE==new THREE.Vector2(Number.MAX_VALUE,0.).x);
    if(loopsRun>1){
        if(!generated&&dupered&&zoom<zoomCap32*coords.length())
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
            let tree=tol(  new THREE.Vector2(0,0), new THREE.Vector2(0,0) );
            
            let duperDepth = 2**4;
                            if(dupered&&zoom<zoomCap32*coords.length()&&zoom<lastDuper/duperDepth)
                            {   lastDuper = zoom
                                generated = false;
                            }
                            else if(dupered&&zoom>zoomCap32*coords.length())
                                lastDuper=zoom*duperDepth
                                    
     
            let coreImplosion = Math.abs(Math.floor(coreTriggered)-Math.floor(tree.z));
            
            if(coreImplosion>.5//&&Math.round(tree.z)-tree.z<0.
               )//due to the cycling upcore, it triggers twice per core
            {
                
                
                
                
                
                
                
                
                
                
            //    console.log(Math.round(tree.z)-tree.z)

                        
                coreTriggered=tree.z;
                if(window.haptic2){
                    let vibrateArrayNew=[];

                       // for(var t = 0; t<3; t++)
                        {
                            vibrateArrayNew.push(50);//coreImplosion*
                            vibrateArrayNew.push(50);//coreImplosion*
                            
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

let lastDuper = 1;
