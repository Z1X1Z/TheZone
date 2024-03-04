const leaf = -1.3247179572447460259609088544780973407344040569017333645340150503028278512455475940546993479817872803299109209947422074251089026390458977955943147570967234717541668390388674187517369315842535499082466223545337273504589879909568150627745509802486213012169894157524574548625075626524610368938904839932269952074975962828868556908150704513696109853352577281586033441141927828273765296032993584674231028483241695239006108543338219;
const gr = 1.61803398874989484820458683436563811772030917980576286213544862270526046281890244970720720418939113748475408807538689175212663386222353693179318006076672635443338908659593958290563832266131992829026788067520876689250171169620703222104321626954862629631361443814975870122034080588795445474924618569536486444924104432077134494704956584678850987433944221254487706647
window.pixelShaderSize = 7;
const pixelShaderToStarshipRATIO = pixelShaderSize/4.;//don't change from 7./4. or some factor of 7 seems right;
const movementRateORIGINAL = 2**.5;
const starshipSize = Math.E**leaf/Math.sqrt(2.);//divided by Math.sqrt(2.) to set trail to equilateral,other coefficients are scale (size)
                            const zoomFrames = 60;//frames to double zoom
let ZR = Math.E**(Math.log(.5)/zoomFrames);
                  const mf = 1.75;
const MR = mf/zoomFrames;
const secondsToEdge=window.pixelShaderSize/4./pixelShaderToStarshipRATIO;

window.uniformsInitial = {
coreDilation:{value:0.},
fftSize:{value:2048.},sampleRate:{value:44100.}, nyq:{value:1048./44100.},//actually 2/nyquist
radialWarp:{value:1.},
    pixelSTARon:{value:true},

micIn:{value:null},
    audioBuffer:{value:null},
    omniDynamic:{value:null},
coreTextureSampler:{value:null},
STAR:{value:null},
EDEN:{value:null},
uberDuper:{value:null},
    
        eden:{value: 0},
        spokesVisualizeColors: {value: false    },
        note:{value: 0.},
        brelued:{value: 1.},
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
        spokelover:{value: true    },
dilate:{value:false},

    
        continuumClover:{value: false    },
        Inherited:{value: true    },
        cloverSlide:{value: false    },

        time: {value:.0 },
        rate: {value: 1.},

        zoom: {value:  .99},
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


        resolution: {value:[window.innerWidth,window.innerHeight]},//these are later resolved to the THREE.vec2() uniforms
        coords: {value: [0.,0.]},
        coordSHIFT: {value: [0.,0.]},
        duperZoom: {value:1.},
        d: {value:[0.,0.]},
        dotCoord:{value:[0.,0.]},


        dynamicDance: {value: 0},
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
        flipStar:{value:1.},
        witnessFlip:{value:1.},
        twistStar:{value:0.},
        multiplicatorNexus:{value:false},//has problems may be discontinued
        squareClover:{value:false},
        mandelCloverFactor:{value:2./-leaf},
        exponentialPetals:{value:0.}
        }
window.uniforms={}

let runningHash = true;
window.settingsSet = false












function resetAll(){
    for(var nameOfUniform in uniformsInitial)
    {
              window.uniforms[nameOfUniform]={}
              Object.assign(window.uniforms[nameOfUniform],window.uniformsInitial[nameOfUniform])
    }
    window.coordX=0.; window.coordY=0.;

    if(!("BibleON" in window))  window.BibleON=1;
    else if(settingsSet)
    {
        if(location.hash.includes(".b")||location.hash.includes(".c")) window.BibleON=1;
   
        else if(BibleON==0) callKey(new KeyboardEvent('keydown', {'key': "b", 'altKey':true, 'keyCode':key.charCodeAt(0)}));
        
    }
    
            window.FPS=60;
            window.zoom=1.;
            window.ISdilated=false;
            window.RockInTheWater=0;
            window.octaveStars=true;
            window.BulletMine=0;
            window.starClover=true;
            window.blankBackground=false;
            window.twist = 0.;
            window.flip = 1.;
            window.highORlow=1.;
            window.FeedbackSound = false;
            window.spirographMODE = 1;
            window.pzyghthe=0;
            window.dynamicCoring=false;
            window.starArms = fftSize/2.
      
    
    window.Oreo=true;
            window.shouldShowStar = true;
            window.flame = false;
            window.muteTouchTouchVolume = true;
            window.muteVoiceTouchVolume = false;
            window.grabStar = false;



            window.movementRate=movementRateORIGINAL;
            window.zoomRate=movementRateORIGINAL;
            window.radialWarp=1.;
            window.trailSecondsLong = secondsToEdge/movementRate*7.;
            window.trailLength = Math.ceil(zoomFrames*trailSecondsLong);
            window.starShipDepthInSet = (trailSecondsLong-pixelShaderToStarshipRATIO/2.)/trailSecondsLong;
            window.starCount = Math.ceil(starArms*60*secondsToEdge);

            if(!touchOnlyMode||location.hash.includes("t"))window.touchMode=false;
            window.volumeSpeed = false;

            window.twist = 0.;
            window.flip = 1.;
            window.center = false;
            window.zoomOutRatchetThreshold=1./fftSize;

            window.ConcertKey = 440;

            window.textON=false;
            window.dupered = false;
            window.haptic = false;
            window.haptic2 = false;
            window.onO = false;
    window.EldersLeg = 24;
    window.fftSize=2048;
    if(window.INITIALIZED){
        setFFTdependantSizes();
        setDynamicSampler2ds();
        setMicInputToStarPIXEL();
        setTrailSize()
        renderer.setPixelRatio( rez)
                onWindowResize();
    }
    if(wadLOADED)
    {
        for(var o=0;o<maxTouchSoundCount;o++){
            
            sound[o].stop()
            sound2[o].stop()
            
                zound[o].stop()
                zound2[o].stop()
            
            
                xound[o].stop()
                xound2[o].stop()
                
                    tound[o].stop()
                    tound2[o].stop()
           }
    }
                                         runningHash = true;
                                         window.number = "";

                                       if(window.settingsSet)  readHash()

                                         window.settingsSet = true
}
resetAll();


let osmdStaffsVisible = 0;
window.number = "";
                                         
                               let          hashHasRun = false;
function readHash(){
        let hashindex = 0;
        while (hashindex<location.hash.length)
        {
            number=""
            let lasthash = hashindex;
            let CTRLorALT = location.hash[hashindex-1]=="."||location.hash[hashindex-1]==","||location.hash[hashindex]=="."||location.hash[hashindex]==",";
            let bibleReaderCode =(location.hash[hashindex-2]=="c"&&location.hash[hashindex-3]==".")
                                ||(location.hash[hashindex-1]=="b"&&location.hash[hashindex-2]==".")
            if((location.hash[hashindex-1]=="("&&!CTRLorALT)||(CTRLorALT&&location.hash[hashindex-2]=="("))
            {            hashindex++;
                
                while(location.hash[hashindex]!=")"&&hashindex!=location.hash.length)
                {
                    number += location.hash[hashindex]
                    hashindex++;
                }
                
            }
            number=Number(number);
           if(!bibleReaderCode||hashHasRun) callKey(new KeyboardEvent('keydown',
                                      {
                'key': location.hash[lasthash],"keyCode":location.hash.charCodeAt(lasthash),
                "ctrlKey":location.hash[lasthash-1]==",","altKey":location.hash[lasthash-1]=="."
            }                              ));
            
            hashindex++;
            
            
        }
        runningHash=false;
                hashHasRun = true;
}
readHash();
function hk() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("id", "hotkeys");
  x.setAttribute("placeholder", "Hotkeys!");
  x.setAttribute("oninput", "getKey()");
  document.getElementById("hotkeyHolder").appendChild(x);

}
let hotkeyInputWindowActive = false;
if(mobile)
    hk();



let androidGetKey="";
let androidGetKeyLast="";

function getKey(){
    androidGetKeyLast = androidGetKey;
    androidGetKey = document.getElementById("hotkeys").value;
    let keyCaught;
 let scan=androidGetKey.length-1;
  while(scan>=0){
        if(androidGetKey[scan]!=androidGetKeyLast[scan])keyCaught=androidGetKey[scan];
        scan--;
        }
   callKey(new KeyboardEvent('keydown', {'key': keyCaught, "keyCode":keyCaught.charCodeAt(0)}));
}



if(!mobile)//)//if not mobile
window.addEventListener('keydown', function(event) {callKey(event); return true;}, false);

    window.lastKey = "";
window.key = " ";
function callKey(event){
    window.lastKey = window.key;
    if(lastKey==","&&!runningHash)//key here is the last key
        event=new KeyboardEvent('keydown',
                                {"key":event.key,"keyCode":event.keyCode,"ctrlKey":true}
                                );
    else if(lastKey=="."&&!runningHash)event=new KeyboardEvent('keydown',
                                                               {"key":event.key,"keyCode":event.keyCode,"altKey":true}//creating a new keypress because it's readonly
                                                               );
    
    key = event.key;

    number=Number(number);
    if(key=="/"&&!event.shiftKey){  event.preventDefault(); event.stopImmediatePropagation();}
    
    var x=null;
    if(!event.shiftKey)x = parseInt(String.fromCharCode( event.keyCode));
    
    
    //meta keys like ctrlKey must be processed first and should have symbol preferably
    
    if(key == "o" && event.ctrlKey)
    {
        omniDynamicEngaged = !omniDynamicEngaged;
        if(!omniDynamicEngaged)omniData.fill(0);
    }
    else if(key == "c" && event.ctrlKey){dynamicCoring=!dynamicCoring; if(!dynamicCoring)coreData.fill(1./1.324717);}
    else if(key == "q" && event.ctrlKey)uniforms.squareClover.value=!uniforms.squareClover.value;
    else if(key == "x" && event.ctrlKey)uniforms.fieldPowerBoost.value=!uniforms.fieldPowerBoost.value;
    else if(key == "z" && event.ctrlKey)uniforms.fieldPowerBoostMeta.value=!uniforms.fieldPowerBoostMeta.value;
    else if(key == "b" && event.ctrlKey){
        uniforms.balloonsONexponential.value = 0.;
        if(uniforms.balloonsON.value==0.)uniforms.balloonsON.value=1.
            else if(uniforms.balloonsON.value==1.)uniforms.balloonsON.value=-1.
                else  if(uniforms.balloonsON.value==-1.)uniforms.balloonsON.value=0.
                    }
    else if(key == "n" && event.ctrlKey){
        uniforms.balloonsON.value=0.;
        if(uniforms.balloonsONexponential.value==0.)uniforms.balloonsONexponential.value=1.
            else if(uniforms.balloonsONexponential.value==1.)uniforms.balloonsONexponential.value=-1.
                else  if(uniforms.balloonsONexponential.value==-1.)uniforms.balloonsONexponential.value=0.;
                    }
    else if(key == "s" && event.ctrlKey)uniforms.sparklesON.value=!uniforms.sparklesON.value;
    else if(key == "f" && event.ctrlKey)uniforms.SPHEREofTheLORD.value=!uniforms.SPHEREofTheLORD.value;
    else if(key == "k" && event.ctrlKey)
    {
        window.timeRESET= window.TIMESTAMP;
        if(window.ChristoDecrypto==0.)
        {
            window.ChristoDecrypto = leaf;
            if(uniforms.metaCarousel.value==0)uniforms.metaCarousel.value=0;
        }
        else
        {
            window.ChristoDecrypto = 0 ;
            uniforms.metaCarousel.value=0.;
        }
    }
    else if (key=="("&&event.ctrlKey) highORlow = 1;
    else if (key==")"&&event.ctrlKey ) highORlow = 2;
    else if(key == "v" && event.ctrlKey) window.FeedbackSound =  !window.FeedbackSound;
    else if(key == "d" && event.ctrlKey)uniforms.starOnDot.value=(uniforms.starOnDot.value+1)%3;
    else if (key=="p" && event.ctrlKey)spirographMODE = (spirographMODE+1)%3;//color mode 3 seems obsolete
    else if (key=="m" && event.ctrlKey)
    {uniforms.multiplicatorNexus.value=!uniforms.multiplicatorNexus.value;

    }
    else if (event.ctrlKey&&key=="a")uniforms[ "colorCombo" ].value = 11;
    else if (event.ctrlKey&&key=="j")window.Oreo=!window.Oreo;
    else if (event.ctrlKey&&key=="t")window.shouldShowStar=!window.shouldShowStar;
    else if (event.ctrlKey&&key=="r")window.flame=!window.flame;
    else if (event.ctrlKey&&key=="g") {
        if( uniforms.exponentialPetals.value==0.) uniforms.exponentialPetals.value=1.;
        else if( uniforms.exponentialPetals.value==1.) uniforms.exponentialPetals.value=-1.;
        else if( uniforms.exponentialPetals.value==-1.) uniforms.exponentialPetals.value=0.;
        
    }

    else if (event.altKey&&(key=="œ"||key=="q")){
            if          ( uniforms[ "colorCombo" ].value >1)          uniforms[ "colorCombo" ].value = -1;
            else uniforms[ "colorCombo" ].value = -(Math.abs(uniforms[ "colorCombo" ].value+1-17.))%17;
        
        }

    else if (event.altKey&&(key=="≈"||key=="x")){ if(!runningHash||!window.online) uniforms.brelued.value*=-1;}
    else if (event.altKey&&(key=="Ω"||key=="z"))uniforms.witnessFlip.value*=-1.;
    else if (event.altKey&&(key=="π"||key=="p"))uniforms.pixelSTARon.value=!uniforms.pixelSTARon.value;
    else if (event.altKey&&(key=="©"||key=="g"))window.grabStar=!window.grabStar;
    else if (event.altKey&&(key=="ß"||key=="s")){
        if(window.touchMode)window.muteTouchTouchVolume = !window.muteTouchTouchVolume;
        else window.muteVoiceTouchVolume = !window.muteVoiceTouchVolume;
    }
    else if (event.altKey&&(key=="©"||key=="g"))window.grabStar=!window.grabStar;
    else if (event.altKey&&(key=="∫"||key=="b")){

                 if(!muteToggle||(!runningHash&&android))
                       window.BibleON = (window.BibleON+1)%2;

        let content = document.getElementsByClassName("dropdown-content");
        //iframe redirect from https://stackoverflow.com/questions/28159920/how-to-redirect-page-inside-iframe-to-another-one-but-we-must-stay-in-iframe
        if(mobile||runningHash
           
           );//dynamic href for iFrame doesn't seem to work on mobile
        else if (number == 8)
        
            window.frames["TheBible"].location = "https://openbible.com/audio/gilbert_music/";
        
                else if(number ==7) window.frames["TheBible"].location ="https://openbible.com/audio/gilbert_music_books/";
                else if(number == 6)   window.frames["TheBible"].location =
                    "https://openbible.com/audio/hays/";
                else if(number == 5)  window.frames["TheBible"].location =  "https://openbible.com/audio/souer/";
                else if(number == 4)  window.frames["TheBible"].location =  "https://openbible.com/audio/gilbert/";
            else if(number == 3)  window.frames["TheBible"].location = "https://openbible.com/audio/hays_books/";
            else if(number == 2)  window.frames["TheBible"].location =  "https://openbible.com/audio/souer_books/";
        else if(number == 1)  window.frames["TheBible"].location =  "https://openbible.com/audio/gilbert_books/";
         else if(number == 0)  window.frames["TheBible"].location =  "https://www.biblehub.com/audio/";
             //   else if(location.hash.includes(".b"))document.getElementById("reader").value = 0.;

                    if(window.BibleON==0)
                    {
                        document.getElementById("Bible").height="100%";
                        document.getElementById("Bible").width="50%";
                        document.getElementById("nav").style.width="50%";
                        for(var b = 0; b<content.length; b++)content[b].style.width="50%";
                    }
                    else {
                        document.getElementById("Bible").height= "0%";
                        document.getElementById("Bible").width="0%";
                        document.getElementById("nav").style.width="100%";
                        for(var b = 0; b<content.length; b++)content[b].style.width="100%";
                        
                    }
                
                 if(window.INITIALIZED) onWindowResize();
                            
    }//bible iframe loaded in manny.html
    
    
    else if(x == 1&&event.altKey&&!event.shiftKey)uniforms.clvrVariant1.value=!uniforms.clvrVariant1.value;
    else if(x == 2&&event.altKey&&!event.shiftKey)uniforms.clvrVariant2.value=!uniforms.clvrVariant2.value;
    else if(x == 3&&event.altKey&&!event.shiftKey)uniforms.clvrVariant3.value=!uniforms.clvrVariant3.value;
    else if(x == 4&&event.altKey&&!event.shiftKey)uniforms.clvrVariant4.value=!uniforms.clvrVariant4.value;
    else if(x == 5&&event.altKey&&!event.shiftKey)uniforms.clvrVariant5.value=!uniforms.clvrVariant5.value;
    else if(x == 6&&event.altKey&&!event.shiftKey)uniforms.clvrVariant6.value=!uniforms.clvrVariant6.value;
    else if(x == 7&&event.altKey&&!event.shiftKey)uniforms.clvrVariant7.value=!uniforms.clvrVariant7.value;
    else if(x == 8&&event.altKey&&!event.shiftKey)uniforms.clvrVariant8.value=!uniforms.clvrVariant8.value;
    
    else if(x == 9&&event.altKey&&!event.shiftKey)
    {
        window.pzyghthe = (window.pzyghthe+1.)%5;
       // if(pzyghthe==0) scene.remove(harmonicPzyghtheMesh);
        //else if (pzyghthe==1) scene.add(harmonicPzyghtheMesh)
            
            
            }
    
    else if((key=="å"||key=="a")&&event.altKey&&!event.shiftKey)// is alt+a
        uniforms.musicAngelMan.value=(uniforms.musicAngelMan.value+1)%3;
    else if((key=="®"||key=="r")&&event.altKey&&!event.shiftKey)//® is alt+r
    {
        if(uniforms.refactorCores.value==2)uniforms.refactorCores.value=1;
        else if(uniforms.refactorCores.value==1)uniforms.refactorCores.value=0;
        else uniforms.refactorCores.value=2;
    }
                
                else if (event.altKey&&(key=="∂"||key=="d")&&(!runningHash||!window.online))//∂ is alt+d
                    window.dupered=!window.dupered;
                
                else if (event.altKey&&(key=="∂"||key=="d")&&(!runningHash||!window.online))//∂ is alt+d
                    window.dupered=!window.dupered;
                
                else if (event.altKey&&(key=="∂"||key=="d")&&(!runningHash||!window.online))//∂ is alt+d
                    window.dupered=!window.dupered;
                else if (event.altKey&&(key=="ø"||key=="o")) {
                    uniforms.dilate.value=!uniforms.dilate.value;

                   // window.ISdilated=!window.ISdilated;//this is for dilator in wadloader which this superceded
                  //  console.log(ISdilated)
                }


    else if (event.altKey&&key=="f")console.log("speakers disabled!");//speakers turned off in manny.html
    else if(event.ctrlKey||event.altKey);//swallow remaining possibilities, muting keypress
    /*if(key == "k" && event.ctrlKey)
     {
     osmdStaffsVisible=(osmdStaffsVisible+1)%3;
     if("osmd" in window&&osmd!=null&&osmd.sheet.Instruments.length>=2)
     {
     if(osmdStaffsVisible==0)
     {
     osmd.sheet.Instruments[0].Visible = true;
     osmd.sheet.Instruments[1].Visible = false;
     }
     else if(osmdStaffsVisible==1)
     {
     osmd.sheet.Instruments[0].Visible = false;
     osmd.sheet.Instruments[1].Visible = true;
     }
     else if(osmdStaffsVisible==2)
     {
     
     osmd.sheet.Instruments[0].Visible = true;
     osmd.sheet.Instruments[1].Visible = true;
     }
     
     osmd.render();
     }
     } the bass staff doesn't include the lyrics so it's not included
     */
    else  if (key=="a"){
        EldersLeg=Math.round(number)*1.;
        let minimumFFTfactor = Math.ceil(Math.log(EldersLeg*12*2)/Math.log(2.));
        if(minimumFFTfactor<=15){
            if(minimumFFTfactor>11)//currently a buffersize of 2**11==2048 is required for spirograph
                fftSize=2**minimumFFTfactor;
            else
                fftSize = 2**11
                }
        if(!runningHash)setFFTdependantSizes();
        
    }
    
    else if (key=="\\"){zoomRate=movementRateORIGINAL; if(number!="")zoomRate=number*1.;}

    else if (key=="/"){if(number!=""){trailSecondsLong=number*1.;setTrailSize()}}
    
    else if (x==0)
    {window.movementRate=movementRateORIGINAL; uniforms[ "rate" ].value=movementRateORIGINAL;
        if(number!=""){window.movementRate=number*1.; uniforms[ "rate" ].value=number*1.;};
    }
    
    else if (document.activeElement.className=="num");//don't take number hotkey's while menu number selector engaged
    
    else if (x>0&&x<=9&& document.activeElement.className!="num"&&!event.shiftKey&&!event.altKey)
    {rez = window.devicePixelRatio/x;
        if(window.INITIALIZED) renderer.setPixelRatio( rez);
    }
    
    /*else if (x==0&& document.activeElement.className!="num"&&!event.shiftKey&&!event.altKey)
     {rez = window.devicePixelRatio/10.; renderer.setPixelRatio( rez);}
     */
    else if (key=="+"){rez /=1.1; if(window.INITIALIZED) renderer.setPixelRatio( rez);}
    else if (key=="_"){rez *=1.1; if(window.INITIALIZED) renderer.setPixelRatio( rez);}
    
    else if (key=="À"||key=="`")
    {rez=window.devicePixelRatio*2.;
        if(window.INITIALIZED)   renderer.setPixelRatio( rez);}
    else if (key=="m"){
        
        uniforms[ "wheel" ].value = !uniforms[ "wheel" ].value;
        if(number!="")uniform.mandelCloverFactor.value=number;
    }
                
    else if (key=="M") uniforms[ "NightAndDay" ].value = !uniforms[ "NightAndDay" ].value;
    else if (key=="!")uniforms[ "Refractelate" ].value=!uniforms[ "Refractelate" ].value;
    else if (key=="@")uniforms[ "Clovoid" ].value=!uniforms[ "Clovoid" ].value;
    // else if (key=="#"){uniforms[ "base3" ].value=!uniforms[ "base3" ].value;console.log(uniforms[ "base3" ].value)}
    
    else if (key=="&")uniforms[ "continuumClover" ].value=!uniforms[ "continuumClover" ].value;
    
    
    else if (key=="q") {
        if          ( uniforms[ "colorCombo" ].value >1)          uniforms[ "colorCombo" ].value = -1;
        else uniforms[ "colorCombo" ].value = -(Math.abs(uniforms[ "colorCombo" ].value-1))%17;
    }
    
    else if (key=="Q") {
        twist = 0;
        if( uniforms.starSpin.value==0) uniforms.starSpin.value=1;
        else if( uniforms.starSpin.value==1) uniforms.starSpin.value=-1;
        else if( uniforms.starSpin.value==-1) uniforms.starSpin.value=0;
        
    }
    else if (key==";") uniforms[ "colorInverter" ].value = !uniforms[ "colorInverter" ].value;
    else if (key=="t"){
        window.touchMode = !window.touchMode;
        if (window.touchMode)window.shouldShowStar =false;
        else window.shouldShowStar = true;
    }
    else if (key=="T") uniforms.Spoker.value=!uniforms.Spoker.value;
    else if (key=="f") uniforms[ "fourCreats" ].value *= -1;
    else if (key=="F") uniforms[ "spokelover" ].value=!uniforms[ "spokelover" ].value ;
    
    else if (key=="\"") uniforms[ "colorCombo" ].value = 13;
    else if (key=="d") uniforms[ "colorCombo" ].value = 14;
    else if (key=="x")  uniforms[ "colorCombo" ].value = 15;
    
    else if (key=="*") uniforms[ "colorCombo" ].value = 20;
    
    else if (key=="X"){
        uniforms[ "dynamicDance" ].value = !uniforms[ "dynamicDance" ].value;
        window.date = Date.now();
        window.startTimeSecondMantissaMagnified = ((date/1000.-Math.round(date)/1000.)-.5)*144000;//for orienting the dance to time
    }
    else if (key=="b") uniforms[ "colorCombo" ].value = 16;
    else if (key=="B") {
        if(BulletMine == 0) BulletMine = 1;
        else if(BulletMine==1) BulletMine = -.5;
        else if(BulletMine==-1) BulletMine = 0;
    }
    else if (key=="g") uniforms[ "colorCombo" ].value = 17;
    else if (key=="G") uniforms[ "articles" ].value = !uniforms[ "articles" ].value;
    
    else if (key=="r"){uniforms[ "colorCombo" ].value = 18;}
    else if (key=="$")uniforms[ "colorCombo" ].value = 19;
    
    else if (key=="s"){ if(uniforms[ "morph" ].value == 0.)uniforms[ "morph" ].value = 1.;else uniforms[ "morph" ].value = 0.; }
    else if (key=="n") uniforms[ "MetaCored" ].value = !uniforms[ "MetaCored" ].value;
    else if (key=="N") uniforms[ "outerCoresOff" ].value = !uniforms[ "outerCoresOff" ].value ;
    
    else if (key=="l"){zoomAtl41=!zoomAtl41; uniforms[ "free" ].value = !uniforms[ "free" ].value ;}
    else if (key=="L")window.zoom=1.;
    else if (key=="C")window.zoom=.00005;
    
    else if (key=="c")center=!center;
    else if (key=="v"){textON=!textON;}
    else if (key=="V"){        if (!onO)onO=true;
        
        RockInTheWater+=1;RockInTheWater=RockInTheWater%3;}
    
    else if (key=="z")uniforms[ "helm" ].value = !uniforms[ "helm" ].value;
    else if (key=="Z")uniforms[ "spokesVisualizeColors" ].value = !uniforms[ "spokesVisualizeColors" ].value;
    
    else if (key=="j"){
        if(uniforms[ "carousel" ].value==0)uniforms[ "carousel" ].value=-1.;
        else if(uniforms[ "carousel" ].value==-1.)uniforms[ "carousel" ].value=1.;
        else if(uniforms[ "carousel" ].value==1.)uniforms[ "carousel" ].value=0;
    }
    else if (key=="J")uniforms[ "onehundredfortyfourthousand" ].value=!uniforms[ "onehundredfortyfourthousand" ].value;
    
    else if (key=="k"){
        if(uniforms[ "metaCarousel" ].value==0)uniforms[ "metaCarousel" ].value=-1.;
        else if(uniforms[ "metaCarousel" ].value==-1.)uniforms[ "metaCarousel" ].value=1.;
        else if(uniforms[ "metaCarousel" ].value==1.)uniforms[ "metaCarousel" ].value=0;
    }
    else if (key=="K")uniforms.Inherited.value=!uniforms.Inherited.value;
    
    else if (key=="y") //uniforms[ "petals" ].value = 3.7082039325-6;//
        uniforms[ "petals" ].value -= 1.;
    else if (key=="Y"){
        window.blankBackground = !window.blankBackground;
        if(window.blankBackground)
            uniforms[ "colorCombo" ].value = 100;
        else
            uniforms[ "colorCombo" ].value = -1;
        
    }
    else if (key=="u") uniforms[ "petals" ].value += 1.;
    else if (key=="U") uniforms[ "Character" ].value = (uniforms[ "Character" ].value+1.)%10;

    else if (key=="?"){
        if(uniforms[ "spirated" ].value==0)uniforms[ "spirated" ].value=1;
        else if(uniforms[ "spirated" ].value==1)uniforms[ "spirated" ].value=-1;
        else if(uniforms[ "spirated" ].value==-1)uniforms[ "spirated" ].value=0;
    }
    
    else if (key=="|") {
        if(uniforms.chirality.value==3)uniforms.chirality.value=1;
        else if(uniforms.chirality.value==1)uniforms.chirality.value=-1;
        else if(uniforms.chirality.value==-1)uniforms.chirality.value=3;
        
    }
    else if (key=="{"){
        if(uniforms.eden.value!=4)uniforms.eden.value=(uniforms.eden.value+1)%3;
        else uniforms.eden.value=1;}
    else if (key=="}"){if(uniforms.eden.value==4)uniforms.eden.value=0;else uniforms.eden.value=4;}
    else if (key=="]"){zoomRate*=1.11111111;}
    else if (key=="["){zoomRate/=1.11111111;}
    else if (//event.keyCode==190||
             event.key==">") uniforms[ "metronome" ].value *= 1.1; //keycode for <
    else if ((//event.keyCode==188||
              event.key=="<")&&uniforms[ "metronome" ].value>1.) uniforms[ "metronome" ].value /= 1.1; //keycode for >
    
    else if (key=="i") zoomOutRatchetThreshold/= 1.12121;
    else if (key=="o") zoomOutRatchetThreshold*= 1.12121;
    else if (key=="O") window.starClover=!window.starClover;
    
    else if (key=="p"){
        framesLong=FPS;
        computeFPS=true;
    }
    else if (key=="P"){octaveStars=!octaveStars;
        /*
        if(!octaveStars)
        {
            scene.remove(starsANDwitnessesMesh)
        }
        else
        {
            scene.add(starsANDwitnessesMesh)
        }
         */
    }
    else if (key=="h"){
        fullscreen=!fullscreen
        if(fullscreen)openFullscreen();
        else closeFullscreen();
    }
    else if (key=="H")uniforms.cloverSlide.value=!uniforms.cloverSlide.value;
    else if (key==" ")resetAll();
    else if (key=="~")
    {
        onO=!onO;
    }
    else if (key=="w")window.volumeSpeed=!window.volumeSpeed;
    
    else if (key=="W"){
        if(window.twist-Math.floor(window.twist)>0.)window.twist=0.;
        window.twist+=2; window.twist = window.twist%24;
        if("osmd" in window&&osmd!=null)
        {
            osmd.Sheet.Transpose = twist/2.;
            osmd.updateGraphic();
            osmd.render();
        }
    }
    
    else if (key=="S"){
        if(window.twist-Math.floor(window.twist)>0.)window.twist=0.;
            
        window.twist-=2; window.twist = (window.twist+24)%24;
        if("osmd" in window&&osmd!=null)
        {
            osmd.Sheet.Transpose = twist/2.;
            osmd.updateGraphic();
            osmd.render();
        }
    }
    else if (key=="A"){window.flip = -1;uniforms.flipStar.value=-1.;}
    else if (key=="D"){window.flip = 1;uniforms.flipStar.value=1.;}

      else if (key=="R")   uniforms[ "remediatedColors" ].value=!uniforms[ "remediatedColors" ].value  ;


      else if (key=="="){window.movementRate *=1.11111111;  uniforms.rate.value*=1.11111111;}

      else if (key=="-"){window.movementRate /=1.11111111; uniforms.rate.value/=1.11111111;}

          else if (key=="e")uniforms.gameOn.value=!uniforms.gameOn.value;
          else if (key=="E")uniforms.MannyONtrail.value=uniforms.MannyONtrail.value=(1+uniforms.MannyONtrail.value)%2;

      if(uniforms.free.value) window.zoomCageSize=100000000000000000.;
      else window.zoomCageSize=1.5;
        
        number="";
                console.log(key)
    }


            //https://www.w3schools.com/howto/howto_js_fullscreen.asp
            var fullscreen=false;
            function openFullscreen() {
                
              if (document.documentElement.requestFullscreen) {
                  document.documentElement.requestFullscreen();
              } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
                  document.documentElement.webkitRequestFullscreen();
              } else if (document.body.msRequestFullscreen) { /* IE11 */
                  document.documentElement.msRequestFullscreen();
              }
            }

            function closeFullscreen() {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
              } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
              }
            }



