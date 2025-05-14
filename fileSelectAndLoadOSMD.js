var sheetTranslucent = true;

function osmdResize()
{
    if(sheetTranslucent){
        var minDim = Math.min(window.innerHeight,window.innerWidth);
        if(window.innerWidth/window.innerHeight>1) osmd.zoom=minDim/312.;
        else osmd.zoom=minDim/420.;//so as to keep a whole measure on portrait orientation phone
        }
            else osmd.zoom=Math.min(window.innerHeight,window.innerWidth)/700;

          window.osmd.render();
        }
function handleFileSelect(evt) {
    var maxOSMDDisplays = 1; // how many scores can be displayed at once (in a vertical layout)
    var files = evt.target.files; // FileList object
    var osmdDisplays = Math.min(files.length, maxOSMDDisplays);

    var output = [];
/*    for (var i=0, file = files[i]; i<osmdDisplays; i++) {
      //output.push("<li><strong>", escape(file.name), "</strong> </li>");
      output.push("<div id='osmdCanvas" + i + "'/>");
    }
    document.getElementById("list").innerHTML = "<ul>" + output.join("") + "</ul>";

 */

    

    
    for (var i=0, file = files[i]; i < osmdDisplays; i++) {
      if (!file.name.match('.*\.xml') && !file.name.match('.*\.musicxml') && false) {
        alert('You selected a non-xml file. Please select only music xml files.');
        continue;
      }

      var reader = new FileReader();

      reader.onload = loadScore;
      if (file.name.match('.*\.mxl')) {
        // have to read as binary, otherwise JSZip will throw ("corrupted zip: missing 37 bytes" or similar)
        reader.readAsBinaryString(file);
      } else {
        reader.readAsText(file);
      }
    }
  }
function loadScore(e) {
    let toLoad = e;
    if(typeof e.target != "undefined") toLoad=e.target.result;

    var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmdCanvas", {
      // set options here
//https://wordpress.org/plugins/opensheetmusicdisplay/
         width:window.innerWidth,
    drawingParameters: "compacttight",//turns off title, reduces margins, etc.; breaks osmd.cursor when used online, so don't use (fixed by z ordering)
        drawTitle:false, drawSubtitle:false, drawComposer:false, drawLyricist:false,
        drawMetronomeMarks:false, drawPartNames:false, drawPartAbbreviations:true,
        drawMeasureNumbers:true, drawMeasureNumbersOnlyAtSystemStart:true, drawTimeSignatures:true,
        //autoResize: false,
      backend: "canvas",
    preferredSkyBottomLineBatchCalculatorBackend:1,//0 Plain or 1 Webgl
        //skyBottomLineBatchMinMeasures:0,//high number to disable
        renderSingleHorizontalStaffline:true,
      drawFromMeasureNumber: 1,
      drawUpToMeasureNumber: 2.+Math.floor(window.innerWidth/window.innerHeight*2.),
    });
    osmd.TransposeCalculator = new opensheetmusicdisplay.TransposeCalculator();

    osmd
      .load(toLoad)
      .then(
        function() {

        for(var instrumentsOFF = 1;instrumentsOFF<osmd.sheet.Instruments.length;instrumentsOFF++)
        osmd.sheet.Instruments[instrumentsOFF].Visible = false;//turn off all instruments but the first
        //osmd.updateGraphic();
          window.osmd = osmd; // give access to osmd object in Browser console, e.g. for osmd.setOptions()
          //osmdResize();
           //  osmd.render();
            if(!sheetTranslucent) osmd.EngravingRules.PageBackgroundColor = "#ffffffff";

          onWindowResize()//this calls osmdResize() who calls osmd.render(). It is from starshipMod.js so we need it to load after that is loaded in x.html
          //console.log("e.target.result: " + e.target.result);
            setTransparencyCSS();//defined in manny.html
            osmd.cursor.wantedZIndex="0";

           osmd.cursor.show(); // this would show the cursor on the first note

          //osmd.cursor.reset();
        }
      );

};
//document.getElementById("files").addEventListener("change", handleFileSelect, false);
