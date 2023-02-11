
    let touchOnlyMode = false;
    let micOn = false;
    let audioX;

   let analyser;
    let source;
    let dataArray;

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
if(location.hash.includes("t")){
        console.log("Touch only mode!")
        touchOnlyMode=true;
        window.touchMode = true;}

document.body.addEventListener('touchstart', function(e){
    if(!micOn&&!location.hash.includes("t"))
        startMic();
        })
document.body.addEventListener('mousedown', function(e){
    if(!micOn&&location.hash.includes("t"))
        startMic();
        })
