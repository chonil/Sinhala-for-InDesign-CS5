//SinhalaXtScript.jsx
//An InDesign CS5 JavaScript
// This adds any issue regarding the ZWJ, NZWJ

main();
function main(){
    
   //app.selection[0].composer = 'Adobe World-Ready Paragraph Composer';

	 //app.selection[0].composer = 'Adobe World-Ready Single-line Composer';

	 //app.selection[0].composer = 'Adobe Paragraph Composer';

	app.selection[0].composer = 'Adobe Single-line Composer';
 	//Make certain that user interaction (display of dialogs, etc.) is turned on.
	  var myDocument = app.activeDocument ;
      
      app.findTextPreferences.findWhat = "<200d>" ;
      app.changeTextPreferences.changeTo = "෿" ;
      myDocument.changeText() ;  
      
      app.findTextPreferences.findWhat = "<200c>" ;
      app.changeTextPreferences.changeTo = "෿" ;
      myDocument.changeText() ;  
           
}
