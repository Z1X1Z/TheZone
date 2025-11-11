window.fftSize=2048
    window.touchOnlyMode = false;
window.touchMode = false;

    window.micOn = false;
window.audioX={};

let analyser={};
    window.source;
    window.dataArray;
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
          source.connect(analyser);
          analyser.fftSize = fftSize;
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
function route(){
    if(!micOn&&(!location.hash.includes("t")||location.hash.includes(",t")||location.hash.includes(".t"))&&!userHasGestured){
        document.getElementById( "load message").innerHTML = "";
        startMic();
    }
    userHasGestured=true;

}
document.getElementById( "load message").innerHTML = "Tap the screen or a key to load!";
let isTouch = false;
for(let b=0;b<location.hash.length;b++){
  if(location.hash[b]=="t")
  {
  if(b>=1)
    {if(location.hash[b-1]!="."&&location.hash[b-1]!=",")isTouch=true;
    }
    else isTouch=true;
  }
}
if(isTouch){
    
        document.getElementById( "load message").innerHTML = "";
        console.log("Touch only mode!")
        window.touchOnlyMode=true;
        window.touchMode = true;}


    document.body.addEventListener('touchstart', function(e){route();})
    document.body.addEventListener('mousedown', function(e){route();})
    document.body.addEventListener('keydown', function(e){route();})

