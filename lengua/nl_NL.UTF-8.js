{
sender: "Afzender", //please try to keep these first texts short
replyTo: "Antwoord aan",
to: "Aan",
cc: "Cc",
bcc: "Bcc",
subject: "Onderwerp",
body: "Body",
html: "html",

fSheet: "Formulier naam",
fSheetDESC: "Naam van het formulier waar de antwoorden staan",
qtt: "Aantal Emails",
qttDESC: "Max aantal emails wat per ingediend formulier wordt verzonden",
qWarn: "Quota waarschuwing",
qWarnDESC: "Dagelijks quota waarna een waarschuwings-email wordt gestuurd",
qLimit: "Quota limiet",
qLimitDESC: "Quota-waarde waarbij FormEmailer stopt met het verzenden van email",
fLoc: "Formule locatie",
fLocDESC: "Geef de locatie in dit format: BladNaam!A:B",
closure: "Afsluit modus",
closureDESC: "Wat moet het script doen, nadat de formules zijn berekend",
closureValues: "waarden",
closureFormulas: "formules",
closureClear: "clear",
quota: "Rest quota",
quotaDESC: "Restant van dagelijkse quota",

menuSettings: "Instellingen",
menuManually: "Handmatig verwerken",
menuAbout: "Over",
menuFix: "Fix",
version: "{1} - versie {2}", //script name; version number
about1: "Script ontwikkeld door {1}", //my name
about2: "Help, voorbeelden en instructies kunnen gevonden worden op", //site link will be in the line bellow

statusEmail: "Email{1} verzonden", //email index (will be blank if there"s only one)
statusNot: "Email{1} niett verzonden", //email index
statusError: "Fout bij verzenden van email{1}: {2}", //email index; error message
mailError: "Fout bij verzenden van email{1} op regel{3}: {2}", //email index; error message; line number
statusQuota: "Quota limiet bereikt",
statusMissingField: "Veld bestaat niet: {1}", //placeholder name
statusFormattingErr: "Verkeerde format bij veld: {1}", //full placeholder definition
statusDateFormatErr: "Verkeerde format bij datumveld: {1}", //full placeholder definition

manualQuestion: "Welke regel wil je laten verwerken?\nVoeg een * toe aan het regelnummer als je het tot het einde toe wilt laten verwerken",
manualInvalid: "\"{1}\" is geen geldig nummer. Afgebroken.", //value entered by user
manual1stMult: "De eerste regels is het nummer 2. Ik neem aan dat je vanaf het begin wilt laten verwerken.",
manual1stSingle: "Het regelnummer moet groter of gelijk aan 2 zijn.\nOmdat de eerste rij de header is.",
manualAfterLast: "Het regelnummer dat je opgegeven hebt, ligt na de laatste regel met data erin.",
manualQuotaWarn: "Quota waarschuwings-waarde bereikt. Toch doorgaan?",
manualQuotaLimit: "Quota minimum limiet bereikt\nVerwerking stopte op regel {1}", //line number
manualSuccessMulti: "Alle regels van {1} tot {2} zijn succesvol verwerkt", //1st line; last line
manualSuccessSingle: "Regel {1} is succesvol verwerkt", //line number
manualErrors: "Er waren enige fouten bij de verwerking. Controleer de status van de rijen.",

yes: "Ja",
no: "Ne",
ok: "Ok",
title: "{1} Instellingen", //script name
emailTab: "Email{1}", //tab index (may be empty if there's only one)
advTab: "Uitgebreid",
advIntro: "Je hoeft je geen zorgen te maken over deze instellingen als je dat niet wilt.",
advTip1: "*Je moet '{1}' opnieuw openen om de updates te zien op veranderingen die je hier doorvoert.", //save and close
advTip2: "Aarzel je bij deze instellingen? Wil je meer leren over {1}?", //script name
advTip3: "Ga naar de help-site op", //site link bellow
placeholders: "Invulvelden:",
addField: "Voeg een veld toe:",
insertPlaceholder: "voeg een invulveld toe", //there will be an arrow in front of this
saveAndClose: "Opslaan en Afsluiten",

sheetError: "{1} geeft aan dat het niet bestaat!", //'Form sheet' parameter name
numberError: "De waarde in \"{1}\" is niet een geldig nummer!", //parameter name
formulasError: "Fout {1}", //'formulas location' parameter name
formulasSheetError: "Verkeerd blad voor {1}", //'formulas location' parameter name
formulasColsError: "Verkeerde kolom-aanwijzing voor {1}", //'formulas location' parameter name
errorTitle: "Fout",
badSettings: "Je data is niet opgeslagen.",
versionConflict: "Config versie is {1}, maar de script-versie is {2}. Die zijn niet verenigbaar.\n", //config version; script version
resolveConflict: "Je instellingen versie \"{1}\", is niet compatibel met de script-versie\"{2}\". Wil je het overschrijven met nieuwe standaard-waarden?", //config version; script version
badConfig: "Je configuratie is beschadigd of niet aanwezig!\nWil je overschrijven met nieuwe standaard-waarden?",
badConfigCancel: "Niets gedaan.\nHier is de foutmelding:\n{1}", //error message
noProblem: 'Er lijken geen problemen te zijn met je instellingen.',
missingSheet: "Kan blad {1} niet vinden.", //sheet name
fSheetMissing: "Je \"{1}: {2}\" kan niet worden gevonden, kies een niuewe en klik \"{3}\" om het te repareren", //fSheet parameter name; fSheet parameter value; yes
cancelMessage: "Afgebroken",
errorReportSubject: "{1} fouten rapport", //script name
errorReportBody: "De volgende fouten kwamen op \"{1}\" spreadsheet:\n{2}", //spreadsheet name; errors
alsoQuota: "Tevens is je quota tot onder de waarschuwings-limiet gezakt.",
quotaMailSubject: "{1} quota waarschuwing", //script name
quotaMailBody: "Je huidige quota is: {1}\nHet is beneden de waarschuwings-waarde: {2}", //remaining quota; quota warning

pickLanguage: "Selecteer een taal:",
langIncomplete: "Deze taalversie is geschreven voor een oudere versie van het script, en is waarschijnlijk niet compleet.",
pickSheet: "Selecteer het blad dat de antwoorden bevat (of de data die verwerkt moet worden):",
install: "Installeren",
overwrite: "Bevestig je dat je het hele blad \"{1}\" wilt overschrijven?", //script name/
defaultBody: "Ingevoerde gegevens:",
defaultSubject: "Nieuw formulier ingestuurd",
blankSheet: "Je \"{1}\" blad is leeg! Maak een formulier of basis datastructuur voordat je gaat installeren. Dan kan het script mooie standaard-waarden voor je aanmaken.", //sheet name
statusColumn: "{1} Status", //script name
relocateStatus: "In deze nieuwe versie van het script, is de status kolom in de eerste i.p.v. de laatste kolom. Het is alvast voor je verplaats. Wil je het controleren?",
statusComment: "Dit moet altijd de eerste kolom zijn",
settingsComment: "Hier niets HANDMATIG in veranderen. Gebruik de Instellingen-pagina.",
header: "{1}\nAutomatisch verwerken:\nJe instellingen zijn hier opgeslagen:", //script's name (this text must always have 3 lines)
instructions: "Instellingen tips:\n"+ //'Form Sheet' parameter name
  "Als je de bladnaam van je formulier wilt veranderen, moet je ook de \"{1}\" parameter veranderen.\n"+
  "Een hele goede test bestaat uit het vullen van de eerste rij met fictieve waarden, zodat je wat tests kunt doen, alvorens het hele blad te verwerken.\n"+
  "De invulvelden kunnen in elk veld toegepast worden, bijv. Aan, Onderwerp, etc.\n"+
  "Het \"#\" teken wordt gebruikt om de invulvelden te herkennen. Als je dit teken in een veld wilt gebruiken, doe het dan twee keer: \"##\". Die worden dan vervangen door één.\n"+
  "Je kan opmaak-instructies geven bij een invulveld door het gebruik van het \"|\" teken, ná de veldnaam. Kijk ook eens naar de beschikbare formaten op de help-site.\n"+
  "http://sites.google.com/site/FormEmailer\n"+
  "\n"+
  "Nieuw installatie-instructies:\n"+
  "Je moet de meldingsregels aanpassen om het script automatisch te laten lopen. De stappen:\n"+
  "- Klik in het menu op  \"Extra\" > \"Script editor...\"\n"+
  "- In het editor's scherm\n"+
  "-- Zorg dat het {1} script geopend is en geselecteerd (normaal is dat ook zo)\n"+
  "-- Klik in het menu op \"Triggers\" > \"Trigggers voor huidige script...\"\n"+
  "--- Klik op de enige link en maak een nieuwe meldingsregel (trigger) op de volgende manier:\n"+
  "timeDriven - Time-driven - Minutes timer - Every minute\n"+
  "--- Klik Opslaan\n"+
  "-- Je kunt de editor afsluiten\n"+
  "De status-indicator in dit blad (cell B2) kan enige tijd nodig hebben voor een update."
}