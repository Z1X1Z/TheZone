//load threeJS then call startMic()
//vvvvmodified from https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
function loadScript(element, url, offlineURL)
{

    // Adding the script tag to the head as suggested before
    var scr = document.getElementById(element);//document.createElement("script");//
    scr.type = 'text/javascript';
    scr.src = url;
    // Then bind the event to the callback function.  or at least that's how it goes without the stallLurker in the sonicstarship.  it's stabler. maybe
    // There are several events for cross browser compatibility.
    //script.onreadystatechange = callback;
    //script.onload = callback;
    scr.onerror=function(){    var s = document.createElement("script");//document.getElementById('threeJSscript');
        s.type = 'text/javascript';
        s.src = offlineURL;
        document.body.appendChild(s);
        }


}


//^^^^modified from https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file

                  var load = function() {
                      window.sessionStorage.setItem('alreadyReset', "t");//disable reloader, remove this line to re-eneble

                  //https://stackfame.com/auto-refresh-page-first-load-javascript-jquery
                      if ( window.sessionStorage.getItem("alreadyReset")!="t"){
                          //setting window location
                          window.sessionStorage.setItem('alreadyReset', "t");
                          //using reload() method to reload web page
                          window.location.reload();
                                          }
                      else{
                          window.sessionStorage.setItem('alreadyReset', "f");
                          loadScript("threeJSscript",cdnSwitchThree,"three.js")
                          loadScript("osmdJS",cdnOSMD,"opensheetmusicdisplay.min.js")

                      }
}
    var cdnSwitchThree="three.js";
    if (window.online)cdnSwitchThree="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";


        var cdnOSMD="opensheetmusicdisplay.min.js";
        if (window.online)cdnOSMD="https://unpkg.com/opensheetmusicdisplay@1.6.1/build/opensheetmusicdisplay.min.js";;


load();
