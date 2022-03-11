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
var key = "";
 let scan=androidGetKey.length-1;
  while(scan>=0){
        if(androidGetKey[scan]!=androidGetKeyLast[scan])key=androidGetKey[scan];
        scan--;
        }
    callKey(new KeyboardEvent('keydown', {'key': key, "keyCode":key.charCode}));
}

if(!mobile)window.addEventListener('keydown', function(event) {callKey(event)}, false);
function callKey(event){
      let key = event.key.toUpperCase();
      var x = parseInt(String.fromCharCode(event.which || event.keyCode));
    if (parseInt(key)>=0) x = parseInt(key)
      if (x>0)
        {rez = window.devicePixelRatio /x; renderer.setPixelRatio( rez);}
      else if (x==0)
        {window.movementRate=.5}
      else if (key=="À"||key.toLowerCase()=="`")
        {rez=window.devicePixelRatio*2.;renderer.setPixelRatio( rez);}
      else if (event.key.toUpperCase=="M"||key.toLowerCase()=="m")        {    invert *= -1;}

      else if (key=="Q"||key.toLowerCase()=="q") uniforms[ "colorCombo" ].value = 1;
      else if (key=="W"||key.toLowerCase()=="w")   uniforms[ "colorCombo" ].value = 2;
      else if (key=="E"||key.toLowerCase()=="e") uniforms[ "colorCombo" ].value = 3;
      else if (key=="R"||key.toLowerCase()=="r") uniforms[ "colorCombo" ].value = 4;
      else if (key=="T"||key.toLowerCase()=="t") uniforms[ "colorCombo" ].value = 5;
      else if (key=="Y"||key.toLowerCase()=="y") uniforms[ "colorCombo" ].value = 6;
      else if (key=="U"||key.toLowerCase()=="u") uniforms[ "colorCombo" ].value = 7;
      else if (key=="A"||key.toLowerCase()=="a") uniforms[ "colorCombo" ].value = 11;
      else if (key=="F"||key.toLowerCase()=="f") uniforms[ "fourCreats" ].value *= -1;
      else if (key=="G"||key.toLowerCase()=="g") uniforms[ "colorCombo" ].value = 17;
      else if (key=="K"||key.toLowerCase()=="k") uniforms[ "colorCombo" ].value = 13;
      else if (key=="D"||key.toLowerCase()=="d") uniforms[ "colorCombo" ].value = 14;
      else if (key=="X"||key.toLowerCase()=="x") uniforms[ "colorCombo" ].value = 15;
      else if (key=="B"||key.toLowerCase()=="b") uniforms[ "colorCombo" ].value = 16;
      else if (key=="S"||key.toLowerCase()=="s"){ if(uniforms[ "morph" ].value == 0.)uniforms[ "morph" ].value = 1.;else uniforms[ "morph" ].value = 0.; }
      else if (key=="N"||key.toLowerCase()=="n") uniforms[ "MetaCored" ].value = !uniforms[ "MetaCored" ].value;
      else if (key=="L"||key.toLowerCase()=="l")
      {if(zoomAtl41){zoom=1.;coordX=0.; coordY=0.;}zoomAtl41=!zoomAtl41; uniforms[ "free" ].value = !uniforms[ "free" ].value ;}
      else if (key=="C"||key.toLowerCase()=="c")center=!center;
      else if (key=="V"||key.toLowerCase()=="v")textON=!textON;


      else if (key=="Z"||key.toLowerCase()=="z") {
        if (pointed==true)pointed=false;
        else pointed = true;}

      else if (event.keyCode==190) uniforms[ "metronome" ].value *= 1.1; //keycode for <
      else if (event.keyCode==188&&uniforms[ "metronome" ].value>1.) uniforms[ "metronome" ].value /= 1.1; //keycode for >

      else if (key=="I"||key.toLowerCase()=="i") zoomOutRatchetThreshold/= 1.212121;
      else if (key=="O"||key.toLowerCase()=="o") zoomOutRatchetThreshold*= 1.212121;
      
            
            else if (key=="P"||key.toLowerCase()=="p"){
                
                framesLong=FPS;
                computeFPS=true;
                
            }
            
            else if (key=="H"||key.toLowerCase()=="h"){
                fullscreen=!fullscreen
                if(fullscreen)openFullscreen();
                else closeFullscreen();
            }
                
      else if (key==" "||key.toLowerCase()==" ")
      {
        if (onO)onO=false;
        else onO = true;
      }
      else if (key=="="||key.toLowerCase()=="+")
        {window.movementRate *=1.11111111;}
      else if ( event.keyCode==173||key.toLowerCase()=="-")
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
            
