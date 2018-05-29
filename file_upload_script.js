// install google apps script > goto new google script > copy/paste into script editor > save as "server.gs" > open new file > paste html > save as "form.html" > deploy as webapp
// Google apps script to allow anonymous users to upload to a google drive folder with basic email notification upon upload
// Updated: 5/29/18 
// Updated by: David Ayodele

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html');
        
}

function uploadFiles(form) {
  try {
    
    var dropbox = "SCSN_Site_Uploads"; // Input the name of the folder to be used for holding the uploaded files
    var folder, folders = DriveApp.getFoldersByName(dropbox);
    var filepath = "";
    var usrname = "";
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox); // Otherwise by default a 'dropbox' folder will be created
    }
    
    var blob = form.myFile;    
    var file = folder.createFile(blob);
    var out_str = 'File upload successfull!';
    var out_str2 = '  File path = ';   
    var out_str3 = '  Thank you, please close this tab and return to the main site (remember to copy the file path as confirmation)';
    
    file.setDescription("Uploaded by " + form.myName);
    filepath = file.getUrl();
    usrname = form.myName;
    return out_str.fontcolor("white") + out_str2.fontcolor("white") + file.getUrl().fontcolor("white") + '\n' + out_str3.fontcolor("white");
  }
    
  catch (error) {
    return error.toString();
  }  
    
  finally {MailApp.sendEmail ("regina.ayodele@gmail.com, davidayodele@gmail.com",  // to field for the email. Can input multiple, ie: "1@email.com, 2@email.com",
                  "SCSN Website",       // from field
                  "SCSN Site upload detected: " + usrname,      // email subject
                  "You have a new file upload to review: " + filepath + "\n\nYou can look in the folder here: https://drive.google.com/drive/folders/1cF3c17mul4FpntF0h409ccfkkJSERQaj?usp=sharing");  // email body
    }
}