function osmdResize()
        {
        osmdHeight=document.getElementById("score").style.height;
        /*if(window.innerHeight>window.innerWidth) {//if taller than wide do this
          osmdHeight="auto";
          osmd.zoom=2./3.;
          }
        else {
          //osmdHeight=String(window.innerHeight/.5)+"px";//set height to one third of screen
        }*/
          osmd.zoom=Math.min(window.innerHeight,window.innerWidth)/1000.;

    window.osmd.render();
        }
function handleFileSelect(evt) {
    var maxOSMDDisplays = 10; // how many scores can be displayed at once (in a vertical layout)
    var files = evt.target.files; // FileList object
    var osmdDisplays = Math.min(files.length, maxOSMDDisplays);

    var output = [];
    for (var i=0, file = files[i]; i<osmdDisplays; i++) {
      //output.push("<li><strong>", escape(file.name), "</strong> </li>");
      output.push("<div id='osmdCanvas" + i + "'/>");
    }
    document.getElementById("list").innerHTML = "<ul>" + output.join("") + "</ul>";

    for (var i=0, file = files[i]; i < osmdDisplays; i++) {
      if (!file.name.match('.*\.xml') && !file.name.match('.*\.musicxml') && false) {
        alert('You selected a non-xml file. Please select only music xml files.');
        continue;
      }

      var reader = new FileReader();

      reader.onload = function(e) {
          var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmdCanvas", {
            // set options here
//https://wordpress.org/plugins/opensheetmusicdisplay/
              // height:window.innerHeight/2.,//doesn't seem to work
              drawTitle:false, drawSubtitle:false, drawComposer:false, drawLyricist:false,
              drawMetronomeMarks:false, drawPartNames:false, drawPartAbbreviations:true,
              drawMeasureNumbers:true, drawMeasureNumbersOnlyAtSystemStart:true, drawTimeSignatures:true,
              autoResize: false,
            backend: "svg",
            drawFromMeasureNumber: 1,
            drawUpToMeasureNumber: 1+Math.floor(window.innerWidth/window.innerHeight*3)// draw all measures, up to the end of the sample
          });
          osmd
            .load(e.target.result)
            .then(
              function() {


              for(var instrumentsOFF = 1;instrumentsOFF<osmd.sheet.Instruments.length;instrumentsOFF++)
              osmd.sheet.Instruments[instrumentsOFF].Visible = false;//turn off all instruments but the first


              //osmd.updateGraphic();

                window.osmd = osmd; // give access to osmd object in Browser console, e.g. for osmd.setOptions()
                //osmdResize();
                onWindowResize()//this is from starshipMod.js

                //console.log("e.target.result: " + e.target.result);
                 osmd.cursor.show(); // this would show the cursor on the first note

                //osmd.cursor.reset();
              }
            );
      };
      if (file.name.match('.*\.mxl')) {
        // have to read as binary, otherwise JSZip will throw ("corrupted zip: missing 37 bytes" or similar)
        reader.readAsBinaryString(file);
      } else {
        reader.readAsText(file);
      }
    }
  }

document.getElementById("files").addEventListener("change", handleFileSelect, false);
