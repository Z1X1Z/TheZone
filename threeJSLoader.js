//load threeJS then call startMic()
//vvvvmodified from https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
function loadScript(url, callback)
{

    // Adding the script tag to the head as suggested before
    var scr = document.getElementById('threeJSscript');//document.createElement("script");//
    scr.type = 'text/javascript';
    scr.src = url;
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //script.onreadystatechange = callback;
    //script.onload = callback;
    scr.onerror=function(){    var s = document.createElement("script");//document.getElementById('threeJSscript');
        s.type = 'text/javascript';
        s.src = "three.js";
        document.body.appendChild(s);
        }


}


//^^^^modified from https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file

                  var load = function() {
                  //https://stackfame.com/auto-refresh-page-first-load-javascript-jquery
                      if ( window.sessionStorage.getItem("alreadyReset")!="t"){
                          //setting window location
                          window.sessionStorage.setItem('alreadyReset', "t");
                          //using reload() method to reload web page
                          window.location.reload();
                                          }
                      else{
                          window.sessionStorage.setItem('alreadyReset', "f");
                          //document.getElementById('threeJSscript').src=cdnSwitchThree;
                          loadScript(cdnSwitchThree,null)
                      }
}
    var cdnSwitchThree="three.js";
    if (window.online)cdnSwitchThree="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"


load();
