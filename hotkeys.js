window.fftSize=512
window.zoom=1.;
window.starSpin=0.;
window.RockInTheWater=0;
window.octaveStars=true;
window.BulletMine=0;
window.starClover=true;
window.blankBackground=false;
window.twist = 0.;
window.highORlow=1.;
window.FeedbackSound = false;
window.instantaneousFreqSpirographColoring = 1;
window.pzyghthe=0;
window.dynamicCoring=false;
let osmdStaffsVisible = 0;
let runningHash = true;
window.number = 24;
window.EldersLeg = window.number;
window.lastElderLegCount=window.EldersLeg;
function readHash(){
    
    let hashindex = 0;
    while (hashindex<location.hash.length)
    {
        number=""
        let lasthash = hashindex;
        if(location.hash[hashindex-1]=="(")
        {            hashindex++;

            while(location.hash[hashindex]!=")"&&hashindex!=location.hash.length-1)
            {
                number += location.hash[hashindex]
                hashindex++;
            }

        }
        number=Number(number);
    callKey(new KeyboardEvent('keydown',
                              {
        'key': location.hash[lasthash],"keyCode":location.hash.charCodeAt(lasthash),
        "ctrlKey":location.hash[lasthash-1]==",","altKey":location.hash[lasthash-1]=="."
    }                              ));

                              hashindex++;

                              
                              
}
    runningHash=false;
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
if(//navigator.userAgent.toLowerCase().match(/mobile/i)||navigator.platform === 'MacIntel' &&
   navigator.maxTouchPoints > 1)
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



if(//!(navigator.userAgent.toLowerCase().match(/mobile/i)||navigator.platform === 'MacIntel' &&
   navigator.maxTouchPoints < 1)//)//if not mobile
window.addEventListener('keydown', function(event) {if(window.INITIALIZED)callKey(event); return true;}, false);

    let lastKey = "";
    function callKey(event){
        console.log("inKey")
        let key = "";

        if(key==","&&!runningHash)//key here is the last key
            event=new KeyboardEvent('keydown',
                                                {"key":event.key,"keyCode":event.keyCode,"ctrlKey":true}
                      );
        else if(key=="."&&!runningHash)event=new KeyboardEvent('keydown',
                                                     {"key":event.key,"keyCode":event.keyCode,"altKey":true}//creating a new keypress because it's readonly
                           );

         key = event.key;
        console.log(key)
    if(key=="/"&&!event.shiftKey){  event.preventDefault(); event.stopImmediatePropagation();}

    var x=null;
    if(!event.shiftKey&&!event.ctrlKey)x = parseInt(String.fromCharCode( event.keyCode));


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

    else if(key == "k" && event.ctrlKey)
    {
        window.timeRESET= window.TIMESTAMP;
        if(window.ChristoDecrypto==0.)
        {
            window.ChristoDecrypto = -1.3247179572447460259609088544780973407344040569017333645340150503028278512455475940546993479817872803299109209947422074251089026390458977955943147570967234717541668390388674187517369315842535499082466223545337273504589879909568150627745509802486213012169894157524574548625075626524610368938904839932269952074975962828868556908150704513696109853352577281586033441141927828273765296032993584674231028483241695239006108543338219;
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
    else if(key == "d" && event.ctrlKey)uniforms.starOnDot.value=!uniforms.starOnDot.value;
    //else if (key=="" && event.ctrlKey)instantaneousFreqSpirographColoring = (instantaneousFreqSpirographColoring+1)%2;//color mode 3 seems obsolete
    else if (key=="m" && event.ctrlKey) uniforms.multiplicatorNexus.value=!uniforms.multiplicatorNexus.value;
    else if (event.ctrlKey&&key=="a")uniforms[ "colorCombo" ].value = 11;

    else if(event.ctrlKey);//swallow remaining possibilities, muting keypress
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
            lastElderLegCount = EldersLeg
            EldersLeg=Math.round(number)*1.;
            let minimumFFTfactor = Math.ceil(Math.log(EldersLeg*12.)/Math.log(2.));
            if(minimumFFTfactor<=15){
                if(minimumFFTfactor>11)
                    window.fftSize=2**minimumFFTfactor;
                else
                    window.fftSize = 2**11
            }
          setFFTdependantSizes();

        }
    else if (document.activeElement.className=="num");//don't take number hotkey's while menu number selector engaged
    else if (x>0&&x<=4&& document.activeElement.className!="num")
    {rez = window.devicePixelRatio/x; renderer.setPixelRatio( rez);}
    else if (key=="+"){rez /=1.1; renderer.setPixelRatio( rez);}
    else if (key=="_"){rez *=1.1; renderer.setPixelRatio( rez);}

    else if (x==0)
    {window.movementRate=1.32471795724474;; uniforms[ "rate" ].value=1.; }
    else if(x == 7&&!event.shiftKey)uniforms.musicAngelMan.value=(uniforms.musicAngelMan.value+1)%3;
    else if(x == 8&&!event.shiftKey)
    {
        if(uniforms.refactorCores.value==2)uniforms.refactorCores.value=1;
        else if(uniforms.refactorCores.value==1)uniforms.refactorCores.value=0;
        else uniforms.refactorCores.value=2;
    }
    else if(x == 9&&!event.shiftKey)
    {
        window.pzyghthe = (window.pzyghthe+1.)%5;
        if(pzyghthe==0) scene.remove(harmonicPzyghtheMesh);
        else if (pzyghthe==1) scene.add(harmonicPzyghtheMesh)


    }
    else if (key=="À"||key=="`")
    {rez=window.devicePixelRatio*2.;renderer.setPixelRatio( rez);}
    else if (key=="m") uniforms[ "wheel" ].value = !uniforms[ "wheel" ].value;
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
        if(starSpin==0)starSpin=1;
        else if(starSpin==1)starSpin=-1;
        else if(starSpin==-1)starSpin=0;
        uniforms.starSpin.value = starSpin;
        
    }
    else if (key==";") uniforms[ "colorInverter" ].value = !uniforms[ "colorInverter" ].value;
    else if (key=="t") window.touchMode = !window.touchMode;
    else if (key=="T") uniforms.Spoker.value=!uniforms.Spoker.value;
    else if (key=="f") uniforms[ "fourCreats" ].value *= -1;
    else if (key=="F") uniforms[ "spokelover" ].value=!uniforms[ "spokelover" ].value ;
    
    else if (key=="\'"||key=="\"") uniforms[ "colorCombo" ].value = 13;
    else if (key=="d") uniforms[ "colorCombo" ].value = 14;
    else if (key=="x") uniforms[ "colorCombo" ].value = 15;
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
    
    else if (key=="r")uniforms[ "colorCombo" ].value = 18;
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
        if(window.blankBackground)window.starClover=false;
        else window.starClover=true;
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
    else if (key=="\\")uniforms[ "hearTOL" ].value = !uniforms[ "hearTOL" ].value;
    else if (key=="{"){
        if(uniforms.eden.value!=4)uniforms.eden.value=(uniforms.eden.value+1)%3;
        else uniforms.eden.value=1;}
    else if (key=="}"){if(uniforms.eden.value==4)uniforms.eden.value=0;else uniforms.eden.value=4;}
    
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
    
    else if (key==" "||key=="~")
    {
        onO=!onO;
    }
    else if (key=="w")window.volumeSpeed=!window.volumeSpeed;
    
    else if (key=="W"){ window.twist+=2; window.twist = window.twist%24;
        uniforms.twistStar.value=window.twist/24.*2.*Math.PI;
        if("osmd" in window&&osmd!=null)
        {
            osmd.Sheet.Transpose = twist/2.;
            osmd.updateGraphic();
            osmd.render();
        }
    }
    
    else if (key=="S"){ window.twist-=2; window.twist = (window.twist+24)%24;
        uniforms.twistStar.value=window.twist/24.*2.*Math.PI;
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



