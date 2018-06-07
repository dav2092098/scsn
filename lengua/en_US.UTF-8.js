{
sender: "Sender Name", //please try to keep these first texts short
replyTo: "Reply To",
to: "To",
cc: "Cc",
bcc: "Bcc",
subject: "Subject",
body: "Body",
html: "html",

fSheet: "Form sheet",
fSheetDESC: "Name of the sheet that holds the form answers",
qtt: "Qtt Emails",
qttDESC: "Max quantity of emails sent per form submitted",
qWarn: "Quota warning",
qWarnDESC: "Daily quota threshold that will trigger a warning email",
qLimit: "Quota limit",
qLimitDESC: "Quota minimum value where FormEmailer will stop sending emails",
fLoc: "Formulas location",
fLocDESC: "Enter the location using the format: SheetName!A:B",
closure: "Closure mode",
closureDESC: "What the script should do after your formulas are evaluated",
closureValues: "values",
closureFormulas: "formulas",
closureClear: "clear",
quota: "Remaining quota",
quotaDESC: "Amount of your daily quota you got left now",

menuSettings: "Settings",
menuManually: "Process manually",
menuAbout: "About",
menuFix: "Fix",
version: "{1} - version {2}", //script name; version number
about1: "Script developed by {1}", //my name
about2: "Help, samples and tutorials can be found at", //site link will be in the line bellow

statusEmail: "Email{1} sent", //email index (will be blank if there"s only one)
statusNot: "Email{1} not sent", //email index
statusError: "Error sending email{1}: {2}", //email index; error message
mailError: "Error sending email{1} on line{3}: {2}", //email index; error message; line number
statusQuota: "Quota limit reached",
statusMissingField: "Field does not exist: {1}", //placeholder name
statusFormattingErr: "Error formatting field: {1}", //full placeholder definition
statusDateFormatErr: "Error formatting date field: {1}", //full placeholder definition

manualQuestion: "Which line do you want process?\nAppend an * to the line number to process from it to the end",
manualInvalid: "\"{1}\" is not a valid number. Aborting.", //value entered by user
manual1stMult: "The first line is the n.2. I'll consider that you want to process from the beginning.",
manual1stSingle: "The line number should be equal to or greater than 2.\nSince the 1st row is the header.",
manualAfterLast: "The line number you typed is beyond the last one with data.",
manualQuotaWarn: "Quota warning threshold reached! Continue anyway?",
manualQuotaLimit: "Quota minimum limit reached\nProcess stopped at line {1}", //line number
manualSuccessMulti: "All lines from {1} to {2} processed successfully", //1st line; last line
manualSuccessSingle: "Line {1} processed successfully", //line number
manualErrors: "There were some errors on the processing, check out the rows status",

yes: "Yes",
no: "No",
ok: "Ok",
title: "{1} Settings", //script name
emailTab: "Email{1}", //tab index (may be empty if there's only one)
advTab: "Advanced",
advIntro: "You don't need to worry with these settings if you don't want to.",
advTip1: "*You have to '{1}' and re-open to see the updates on any changes you make here.", //save and close
advTip2: "Having doubts with these parameters? Want to learn more about {1}?", //script name
advTip3: "Access the help site at", //site link bellow
placeholders: "Answers placeholders:",
addField: "Add field:",
insertPlaceholder: "insert placeholder", //there will be an arrow in front of this
saveAndClose: "Save and Close",

sheetError: "{1} informed does not exist!", //'Form sheet' parameter name
numberError: "The value in \"{1}\" is not a valid number!", //parameter name
formulasError: "Invalid {1}", //'formulas location' parameter name
formulasSheetError: "Invalid sheet for {1}", //'formulas location' parameter name
formulasColsError: "Invalid column reference for {1}", //'formulas location' parameter name
errorTitle: "Error",
badSettings: "Your data was not saved.",
versionConflict: "Config version is {1}, but script's is {2}. They are not compatible.\n", //config version; script version
resolveConflict: "You settings version \"{1}\", is not compatible with the script's version \"{2}\". Do you want to overwrite it new default settings?", //config version; script version
badConfig: "Your config is damaged or missing!\nDo you want to overwrite it with the default values?",
badConfigCancel: "Nothing done.\nHere is the error message:\n{1}", //error message
noProblem: 'There seem to be no problem with your settings.',
missingSheet: "Unable to find sheet: {1}", //sheet name
fSheetMissing: "Your \"{1}: {2}\" cannot be found, please choose a new one and click \"{3}\" to fix", //fSheet parameter name; fSheet parameter value; yes
cancelMessage: "Canceled",
errorReportSubject: "{1} errors report", //script name
errorReportBody: "The following errors occurred on \"{1}\" spreadsheet:\n{2}", //spreadsheet name; errors
alsoQuota: "Also, your quota is below the warning limit",
quotaMailSubject: "{1} quota warning", //script name
quotaMailBody: "Your actual quota is: {1}\nIt is bellow the warning threshold: {2}", //remaining quota; quota warning

pickLanguage: "Select a language:",
langIncomplete: "This language was written for an older version of the script and is probably incomplete.",
pickSheet: "Select the sheet that has your form answers (or data to be merged):",
install: "Install",
overwrite: "Do you confirm you want to overwrite your whole \"{1}\" sheet?", //script name
defaultBody: "Submitted values:",
defaultSubject: "New form submitted",
blankSheet: "Your \"{1}\" sheet is blank! Please create your form or basic data structure before installing, so the script can create nice defaults for you.", //sheet name
statusColumn: "{1} Status", //script name
relocateStatus: "In this new version of the script, the status column is the 1st instead of last. I have moved it for you, please verify.",
statusComment: "This column must always be the first one",
settingsComment: "Please do NOT modify this manually! Use the Settings interface",
header: "{1}\nRunning automatically:\nYour settings are save here:", //script's name (this text must always have 3 lines)
instructions: "Settings tips:\n"+ //'Form Sheet' parameter name
  "If you want to rename your form sheet, remember to rename the \"{1}\" parameter at the same time.\n"+
  "A very good practice is to have the first row of data with some bogus values so you can make some tests before running it on the whole data set.\n"+
  "The placeholders may be used in any field, e.g. To, Subject, etc.\n"+
  "The \"#\" character is used to delimit the placeholders' boundaries, if you want to use this char in any field, write it two times \"##\". They will be replace by only one.\n"+
  "You may provide formatting instructions in the placeholder by using the \"|\" char after the field name. Take a look at the available format in the help site.\n"+
  "http://sites.google.com/site/FormEmailer\n"+
  "\n"+
  "New install instructions:\n"+
  "You need to set up the trigger so the script can run automatically. Steps:\n"+
  "- Click the menu \"Tools\" > \"Script editor...\"\n"+
  "- In the editor's window\n"+
  "-- Make sure the {1} script is opened and selected (it normally is)\n"+
  "-- Click the menu \"Triggers\" > \"Current script's triggers...\"\n"+
  "--- Click the only link and set up a new trigger as follows:\n"+
  "timeDriven - Time-driven - Minutes timer - Every minute\n"+
  "--- Click save\n"+
  "-- You may close the editor\n"+
  "The status indication in this sheet (cell B2) may take some minutes to update."
}