const fftSize=2048;

    let touchOnlyMode = false;
    let micOn = false;
    let audioX;

   let analyser;
    let source;
    let dataArray;
    let userHasGestured = false;
    async function startMic() {
      //https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
        navigator.mediaDevices.getUserMedia({
        audio: true,
        autoGainControl: false,
        echoCancellation: false,
        noiseSuppression: false//https://stackoverflow.com/questions/71978189/lag-when-playing-mic-audio-directly-to-output-using-web-audio-api
        })
      .then((stream) => {
        /* use the stream */
          audioX = new AudioContext();
          analyser = audioX.createAnalyser();
          source = audioX.createMediaStreamSource( stream );
          source.connect(analyser);
          analyser.fftSize = fftSize;
          dataArray = new Uint8Array( bufferSize );
      }
      ).catch((err) => {// engage touch only mode
                        console.log("Touch only mode!")
                        touchOnlyMode=true;
                        window.touchMode = true;
                        })
      .finally((err) => {
        micOn = true;
      });
    }
function route(){
    document.getElementById( "load message").innerHTML = "";
    userHasGestured=true;
    if(!micOn&&!location.hash.includes("t"))
        startMic();
}
if(location.hash.includes("t")){
    
        console.log("Touch only mode!")
        touchOnlyMode=true;
        window.touchMode = true;}

if (/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
||navigator.userAgent.toLowerCase().match(/mobile/i))//check for mobile platforms, they may work better if a userGesture is logged first

{
    document.getElementById( "load message").innerHTML = "Tap the screen or a key to load!";
    document.body.addEventListener('touchstart', function(e){route();})
    document.body.addEventListener('mousedown', function(e){route();})
    document.body.addEventListener('keydown', function(e){route();})
}
else route();

