window.fftSize=2048
    window.touchOnlyMode = false;
window.touchMode = false;
    window.isTouch=false;

    window.micOn = false;
window.audioX={};
    window.source={};


function shutdown(){
    source.disconnect();
    audioX.close();
}
let analyser={};

    async function startMic() {
      //https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
        navigator.mediaDevices.getUserMedia({
        audio:{
        autoGainControl: true,
        echoCancellation: true,
        noiseSuppression:false//https://stackoverflow.com/questions/71978189/lag-when-playing-mic-audio-directly-to-output-using-web-audio-api
        }
        })
      .then((stream) => {
        /* use the stream */
          audioX = new AudioContext();
          analyser = audioX.createAnalyser();
          source = audioX.createMediaStreamSource( stream );
          analyser.fftSize = fftSize;

window.addEventListener("beforeunload", shutdown, false);

          source.connect(analyser);

      }
      ).catch((err) => {// engage touch only mode
                        console.log("Touch only mode!")
                        window.touchOnlyMode=true;
                        window.touchMode = true;
                        })
      .finally((err) => {
        micOn = true;
      });
    }
    for(let b=0;b<location.hash.length;b++){
  if(location.hash[b]=="t")
  {
            if(location.hash[b-1]==",")
      {if(b>=2)
        {if(location.hash[b-2]!=".")
        {window.isTouch=false;
        break;}

        
        }
        
        }
              else    if(location.hash[b-1]!=".")
  window.isTouch=true;

            }
    }
    


  

      
function route(){
    if(!micOn&&!window.isTouch&&!userHasGestured){
        document.getElementById( "load message").innerHTML = "";
        startMic();
    }
    userHasGestured=true;

}
document.getElementById( "load message").innerHTML = "Tap the screen or a key to load!";

if(window.isTouch){
    
        document.getElementById( "load message").innerHTML = "";
        console.log("Touch only mode!")
        window.touchOnlyMode=true;
        window.touchMode = true;}


    document.body.addEventListener('touchstart', function(e){route();})
    document.body.addEventListener('mousedown', function(e){route();})
    document.body.addEventListener('keydown', function(e){route();})

