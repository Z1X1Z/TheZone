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
    callKey(new KeyboardEvent('keydown', {'key': key, "keyCode":key.charCodeAt(0)}));
}

if(!mobile)window.addEventListener('keydown', function(event) {callKey(event)}, false);
function callKey(event){
      let key = event.key.toUpperCase();
      var x = parseInt(String.fromCharCode( event.keyCode));
      if (x>0)
        {rez = window.devicePixelRatio /x; renderer.setPixelRatio( rez); onWindowResize();//onWindowResize for Android to register change in resolution
            
        }
      else if (x==0)
        {window.movementRate=.5}
      else if (key=="À"||key.toLowerCase()=="`")
        {rez=window.devicePixelRatio*2.;renderer.setPixelRatio( rez);}
      else if (event.key.toUpperCase=="M"||key.toLowerCase()=="m")        {    invert *= -1;}

      else if (key=="Q") uniforms[ "colorCombo" ].value = 1;
      else if (key=="W")   uniforms[ "colorCombo" ].value = 2;
      else if (key=="E") uniforms[ "colorCombo" ].value = 3;
      else if (key=="R") uniforms[ "colorCombo" ].value = 4;
      else if (key=="T") uniforms[ "colorCombo" ].value = 5;
      else if (key=="Y") uniforms[ "colorCombo" ].value = 6;
      else if (key=="U") uniforms[ "colorCombo" ].value = 7;
      else if (key=="A") uniforms[ "colorCombo" ].value = 11;
      else if (key=="F") uniforms[ "fourCreats" ].value *= -1;
      else if (key=="G") uniforms[ "colorCombo" ].value = 17;
      else if (key=="K") uniforms[ "colorCombo" ].value = 13;
      else if (key=="D") uniforms[ "colorCombo" ].value = 14;
      else if (key=="X") uniforms[ "colorCombo" ].value = 15;
      else if (key=="B") uniforms[ "colorCombo" ].value = 16;
      else if (key=="S"){ if(uniforms[ "morph" ].value == 0.)uniforms[ "morph" ].value = 1.;else uniforms[ "morph" ].value = 0.; }
      else if (key=="N") uniforms[ "MetaCored" ].value = !uniforms[ "MetaCored" ].value;
      else if (key=="L")
      {if(zoomAtl41){zoom=1.;coordX=0.; coordY=0.;}zoomAtl41=!zoomAtl41; uniforms[ "free" ].value = !uniforms[ "free" ].value ;}
      else if (key=="C")center=!center;
      else if (key=="V")textON=!textON;


      else if (event.keyCode==190||event.key=="."||event.key==">") uniforms[ "metronome" ].value *= 1.1; //keycode for <
      else if ((event.keyCode==188||event.key==","||event.key=="<")&&uniforms[ "metronome" ].value>1.) uniforms[ "metronome" ].value /= 1.1; //keycode for >

      else if (key=="I") zoomOutRatchetThreshold/= 1.212121;
      else if (key=="O") zoomOutRatchetThreshold*= 1.212121;
      
            
            else if (key=="P"){
                
                framesLong=FPS;
                computeFPS=true;
                
            }
            
            else if (key=="H"){
                fullscreen=!fullscreen
                if(fullscreen)openFullscreen();
                else closeFullscreen();
            }
                
      else if (key==" ")
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
            
