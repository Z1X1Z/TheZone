var fftSize=2048
    window.touchOnlyMode = false;
window.touchMode = false;
    window.isTouch=false;

    window.micOn = false;



var bufferSize=fftSize;
var numberOfBins=bufferSize/2.;
var inputData = new Float32Array(bufferSize).fill(0.);
var dataArray = new Uint8Array(bufferSize/2).fill(0.);
var babyBuffer = new Uint8Array(bufferSize).fill(0);

var micProcessing1 = false;//autoGainControl
var micProcessing2 = false;//echoCancellation
if(iOS)micProcessing2=true//iOS seems to need for hearing through background music
var micProcessing3 = false;//noiseSuppression
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
            micProcessing1=false;
            micProcessing2=false;
            micProcessing3=false;
          }
            }
          }
       
function shutdown(){
       
     if(typeof(Wad)=="function")
      {
        try{
          Wad.audioContext.disconnect(analyser);
     Wad.audioContext.disconnect();
        }
        catch{}
        Wad.audioContext.close();
        Wad = null;
        
      }
      if(!usingWadContext)
      {
            source.disconnect(analyser);
    source.disconnect();
    audioX.close();
    audioX=null
      }

}
var usingWadContext = false;
window.alreadyLoaded = false;

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
        streamy=stream;
        
        if(!alreadyLoaded)
        {
          
              if(soundPermanentlyMuted){
                alreadyLoaded=true;
          audioX = new AudioContext();
          analyser = audioX.createAnalyser();
          source = audioX.createMediaStreamSource( stream );
          analyser.fftSize = fftSize;
                    source.connect(analyser);
                micOn = true;

              }


window.addEventListener("beforeunload", shutdown, false);

}

      }
      ).catch((err) => {// engage touch only mode
                        console.log("Touch only mode!")
                        window.touchOnlyMode=true;
                        window.touchMode = true;
                                        micOn = true;

                        })
      .finally((err) => {



      });
    }
    let letTouchThrough = "inactive";
    for(let b=0;b<location.hash.length;b++){
  if(location.hash[b]=="t")
  {
            if(location.hash[b-1]==",")
      {if(b>=2)
        {if(location.hash[b-2]!=".")
        {window.isTouch=false;
letTouchThrough=false;
        break;}

        
        }

        }
              else    if(location.hash[b-1]!=".")
  {window.isTouch=true;
                     if(letTouchThrough!=false)     letTouchThrough=true;
  }


            }

    }
    
               if(letTouchThrough&&letTouchThrough != "inactive")
                {
                  userHasGestured=true;
                }


    document.getElementById( "load message").style.textAlign="center"
            document.getElementById( "load message").innerHTML = "Press to open (once it's loaded!)";//turn off splash!


function route(){
       
        if(alreadyLoaded&&!userHasGestured)
        {
       
      shutdown()
var yxzuv = null
     if(typeof(Wad)=="function")
     {
         yxzuv= Wad.audioContext
     }
      if(!usingWadContext){
        yxzuv=audioX
}
                alreadyLoaded=true;
          yxzuv = new AudioContext();
          analyser = yxzuv.createAnalyser();
          source = yxzuv.createMediaStreamSource( stream );
          analyser.fftSize = fftSize;
                    source.connect(analyser);
                micOn = true;

              }
            
    if(!micOn&&!window.isTouch&&!userHasGestured){
        startMic();

    }
          //  document.getElementById( "load message").innerHTML = "";//turn off splash!

    userHasGestured=true;

}

if(window.isTouch){
    
        document.getElementById( "load message").innerHTML = "Will open when loaded (:";
        console.log("Touch only mode!")
        window.touchOnlyMode=true;
        window.touchMode = true;}


    document.body.addEventListener('touchstart', function(e){route();})
    document.body.addEventListener('mousedown', function(e){route();})
    document.body.addEventListener('keydown', function(e){route();})

