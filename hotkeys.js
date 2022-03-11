function hk() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("id", "hotkeys");
  x.setAttribute("placeholder", "Hotkeys!");
  x.setAttribute("oninput", "getKey()");
  document.getElementById("HK").appendChild(x);
}
if(navigator.userAgent.toLowerCase().match(/mobile/i)||navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    hk();

let androidGetKey="";
let androidGetKeyLast="";

function getKey(){
    androidGetKeyLast = androidGetKey;
    androidGetKey = document.getElementById("hotkeys").value;
 let scan=androidGetKey.length-1;
 if(androidGetKey.length-1==androidGetKeyLast.length) while(androidGetKey[scan]==androidGetKeyLast[scan]&&scan>=0){
        window.key=androidGetKey[scan];
        scan--;
        }
    callKey();
 }

if(!mobile)window.addEventListener('keydown', function(event) {
    callKey(event)}, false);
function callKey(event){
      let key = String.fromCharCode(event.which || event.keyCode);
      if(!window.key)window.key="";
      var x = parseInt(String.fromCharCode(event.which || event.keyCode));
    if (parseInt(window.key)>=0) x = parseInt(window.key)
      if (x>0)
        {rez = window.devicePixelRatio /x; renderer.setPixelRatio( rez);}
      else if (x==0)
        {window.movementRate=.5}
      else if (key=="À"||window.key.toLowerCase()=="`")
        {rez=window.devicePixelRatio*2.;renderer.setPixelRatio( rez);}
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

      else if (key=="I"||window.key.toLowerCase()=="i") zoomOutRatchetThreshold/= 1.212121;
      else if (key=="O"||window.key.toLowerCase()=="o") zoomOutRatchetThreshold*= 1.212121;
      
            
            else if (key=="P"||window.key.toLowerCase()=="p"){
                
                framesLong=FPS;
                computeFPS=true;
                
            }
            
            else if (key=="H"||window.key.toLowerCase()=="h"){
                fullscreen=!fullscreen
                if(fullscreen)openFullscreen();
                else closeFullscreen();
            }
                
      else if (key==" "||window.key.toLowerCase()==" ")
      {
        if (onO)onO=false;
        else onO = true;
      }
      else if (key=="="||window.key.toLowerCase()=="+")
        {window.movementRate *=1.11111111;}
      else if ( event.keyCode==173||window.key.toLowerCase()=="-")
        {window.movementRate /=1.11111111;}

        if(uniforms[ "free" ].value) window.zoomCageSize=100000000000000000.;
        else window.zoomCageSize=1.5;
        {     //       window.zoomCageSize=1.5;
            //window.movementRate=1.;
            
        }
        //console.log(String.fromCharCode(event.which || event.keyCode));

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
            
