window.fftSize=2048
    window.touchOnlyMode = false;
window.touchMode = false;
    window.isTouch=false;

    window.micOn = false;
window.audioX={};
    window.source={};

window.bufferSize=fftSize;
window.numberOfBins=bufferSize/2.;
window.inputData = new Float32Array(bufferSize);
window.dataArray = new Uint8Array(bufferSize/2);

let micProcessing1 = true;//this was engaged to help cut down on noise, but no longer seems necessary, and the pitch is truer without
let micProcessing2 = true;//this was engaged to help cut down on noise, but no longer seems necessary, and the pitch is truer without
let micProcessing3 = true;//this was engaged to help cut down on noise, but no longer seems necessary, and the pitch is truer without
  if((location.hash.includes('.,K')||location.hash.includes(',.K'))
    //!=iOS
  )
  for(var p =0;p<location.hash.length-2;p++)
    {
        var g= location.hash.slice(p,p+3)
                   if(g==",.K"||g==".,K")
                   {
        if (location.hash[p+3]=="(")
        {
          if(location.hash[p+4]==",")micProcessing1=false
          else if(location.hash[p+4]==".")micProcessing1=true
          if(location.hash[p+5]==",")micProcessing2=false
                    else if(location.hash[p+5]==".")micProcessing2=true

          if(location.hash[p+6]==",")micProcessing3=false
                    else if(location.hash[p+6]==".")micProcessing3=true

        }
          else {
            micProcessing1=!micProcessing1;
            micProcessing2=!micProcessing2;
            micProcessing3=!micProcessing3;
          }
            }
          }
       
function shutdown(){
    source.disconnect();
    audioX.close();
}
let analyser={};

    async function startMic() {
      //https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
        navigator.mediaDevices.getUserMedia({
        audio:{
        autoGainControl: micProcessing1,
        echoCancellation: micProcessing2,
        noiseSuppression:micProcessing3//https://stackoverflow.com/questions/71978189/lag-when-playing-mic-audio-directly-to-output-using-web-audio-api
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

