{
sender: "Avsändare", //försök att hålla denna texten kort
replyTo: "Svara",
to: "Till",
cc: "Cc",
bcc: "Bcc",
subject: "Ämne",
body: "Body",
html: "html",

fSheet: "Formulär blad",
fSheetDESC: "arbetsblad(flik)et med svaren från formuläret",
qtt: "Qtt Emails",
qttDESC: "Maximala antalet sända mejl per formulär", 
qWarn: "Kvot varning",
qWarnDESC: "Daglig quota tröskel som triggar ett varningsmejl", 
qLimit: "Kvot gräns",
qLimitDESC: "minimum kvotvärde där FormEmailer stoppar att skicka mejl", 
fLoc: "Formulas plats",
fLocDESC: "Skriv in platsen där format används: arbetsblad(flik)!A:B",
closure: "Stängningsläge",
closureDESC: "Vad skriptet skall göra efter formlen är utvärderad",
closureValues: "värden",
closureFormulas: "formler",
closureClear: "rensa",
quota: "Kvarvarande kvot",
quotaDESC: "Mängden av din dagliga kvot som finns kvar just nu",

menuSettings: "Inställningar",
menuManually: "Manuell process",
menuAbout: "Om",
menuFix: "Reparera",
version: "{1} - version {2}", //Skript namn; version nummer
about1: "Skriptet är utvecklat av {1}", //my name
about2: "Hjälp, exempel och handledning finns på: ", //länken finns på raden under

statusEmail: "Mejl{1} skickade", //email index (kan att vara tom om det bara finns ett)
statusNot: "Mejl{1} inte skickat", //email index
statusError: "Fel när mejl skickas{1}: {2}", //email index; felmeddelande
mailError: "Fel när mejl skickas{1} på rad{3}: {2}", //email index; felmeddelande; radnummer
statusQuota: "Kvotgränsen är nådd",
statusMissingField: "Fältet finns inte: {1}", //platshållarens namn
statusFormattingErr: "Fel när fältet fylls i: {1}", //Hela defineringen av platshållaren
statusDateFormatErr: "Fel när datafältet fylls i: {1}", //Defineringen av platshållaren

manualQuestion: "Vilken rad vill du skall fortsätta? \nAppend an * to the line number to process from it to the end",
manualInvalid: "\"{1}\" är inte ett godkänt tal. Tar bort.", //värde inskrivit av användaren
manual1stMult: "Första raden är på n.2. Jag förmodar du vill fortsätta från början?.",
manual1stSingle: "Radnumret måste vara lika med eller större än 2.\nSince eftersom första raden är en rubrik.",
manualAfterLast: "Radnumret är bortom den förra med datavärde.",
manualQuotaWarn: "Trösklen för kvotvarning är nådd! Vill du fortsätta?",
manualQuotaLimit: "Du har nått gränsen för kvotens minimum\nProcess har stannat på rad {1}", //radnummer
manualSuccessMulti: "Alla rader från {1} till {2} fortsatte utan fel", //1st raden; sista raden
manualSuccessSingle: "Rad {1} fortsatte utan fel", //radnummer
manualErrors: "Där fanns några fel under processen, titta på radens status!",
yes: "Ja",
no: "Nej",
ok: "Ok",
title: "{1} Inställningar", //skriptets namn
emailTab: "Mejl{1}", //tab index (kan att vara tom om det bara finns ett)
advTab: "Avancerat",
advIntro: "Du behöver inte bry dig om dessa inställningar om du inte vill!",
advTip1: "*Du måste '{1}' och öppna igen för att se dina ändringar du gjort här.", //spara och stäng
advTip2: "Tvivlar du på dessa parametrarna? Vill du lära dig mer om: {1}?", //skriptets namn
advTip3: "Du når hjälpsidan på:", //länk undertill
placeholders: "Svara platshållare:",
addField: "Lägg till fält:",
insertPlaceholder: "Lägg till platshållare", //där är en pil framför detta
saveAndClose: "Spara och stäng",

sheetError: "{1} mottagaren finns ej!", //'Kalkylblads' parameter namn
numberError: "Värdet i \"{1}\" är inte ett godkänt tal!", //parameter namn
formulasError: "Ogiltigt {1}", //'formulas plats' parameter namm
formulasSheetError: "Ogiltigt blad för {1}", //'formulas plats' parameter namn
formulasColsError: "Ogiltig kolumnreference {1}", //'formulas plats' parameter namn
errorTitle: "Fel",
badSettings: "Din data sparades inte.",
versionConflict: "Konfigurationsversionen är {1}, men skriptet är {2}. De är inte kompatibla.\n", //konfigurations version; skript version
resolveConflict: "Din inställnings version \"{1}\", är inte kompatibelt med skriptversionen \"{2}\". Vill du skriva över standardinställningen?", //konfigurations version; skript version
badConfig: "Din konfiguration är skadad eller saknas!\nDo Vill du hämta standardinställningen?",
badConfigCancel: "Inget hände.\nHere är felmeddelande:\n{1}", //felmeddelande
noProblem: 'Där verkar inte finnas några problem med dina inställningar.',
missingSheet: "Kan inte hitta blad: {1}", //arbetsbladets namn
fSheetMissing: "Ditt \"{1}: {2}\" kan inte hittas, Välj ett nytt och klicka \"{3}\" för att reparera", //fSheet parameter namn; fSheet parameter värde; ja
cancelMessage: "Borttagen",
errorReportSubject: "{1} Felrapport", //skriptets namn
errorReportBody: "Följande fel hände när \"{1}\" Kalkylblad:\n{2}", //Kalkylbladets namn; fel
alsoQuota: "Även, din kvot är under varningsgränsen",
quotaMailSubject: "{1} kvot varning", //skriptets namn
quotaMailBody: "Din verkliga kvot är: {1}\nIt är under kvottrösklen: {2}", //kvarvarande kvot; kvot varning

pickLanguage: "Välj språk:",
langIncomplete: "Detta språket är skrivit från en äldre version av programmet och är kanske inte komplett.",
pickSheet: "Välj arbetsboken där dina Formulär svar finns (eller värden som skall slås ihop):",
install: "Installera",
overwrite: "Godkänner du att du skriver över hela \"{1}\" bladet?", //skriptets namn
defaultBody: "Tillagda värden:",
defaultSubject: "Nytt formulär är tillagt",
blankSheet: "Ditt \"{1}\" Kalkylblad är tomt! Var vänlig och skapa ett Formulär eller eller en grundläggande struktur innan du installerar, så att skriptet kan skapa grunderna för dig.", //sheet name
statusColumn: "{1} Status", //script name
relocateStatus: "I denna nya versionen av skriptet, är status kolumnen först istället för sist. Jag har flyttat det till dig och vill att du godkänner.",
statusComment: "Kolumnen måste alltid vara först",
settingsComment: "Ändra detta inte manuellt. Använd vyn för inställningarna istället",
header: "{1}\nRunning automatiskt:\nYour inställningar är sparade här:", //skriptets namn (denna text måste alltid vara på minst 3 rader)
instructions: "Tips för inställningar:\n"+ //'Kalkylblad' parameter namn
  "Om du vill döpta om ditt kalkylblad, kom ihåg att döpa om \"{1}\" parametrarna samtidigt.\n"+
  "En bra övning kan vara att använda några fejkade mejl på rad ett så du kan prova \n först."+
  "Dina platshållare kan användas i alla fälten, t ex. till, Ämne, etc.\n"+
  "\"#\" tecknet används för att begränsa platshållarnas gränser, om du vill använda detta tecken i något fält, Skriv den två gånger \"##\". De kommer att ersättas av endast en.\n"+
  "Du kan ge format instruktioner till platshållaren genom att använda \"|\" tecknet efter fältnamnet. Läs igenom det tillgängliga formaten på hjälpsidan.\n"+
  "http://sites.google.com/site/FormEmailer\n"+
  "\n"+
  "Nya instruktioner för installation\n"+
  "Då måste sätta en utlösare (trigger) så att skriptet kan köra automatiskt. Steg:\n"+
  "- Klicka i menyn \"Verktyg\" > \"Skript editor...\"\n"+
  "- I editor's förnstret\n"+
  "-- Kolla så att {1} skriptet är öppet och markerat (brukar det vara)\n"+
  "-- Klicka i menyn \"Triggers\" > \"Nuvarande skript triggers...\"\n"+
  "--- Klicka på den enda länken och skapa en ny trigger enligt följande:\n"+
  "timeDriven - Time-driven - Minutes timer - Every minute\n"+
  "--- Klicka på spara\n"+
  "-- Du kan stänga editorn\n"+
  "Statusen som visas i detta Kalkylbladet (cell B2) kan ta någon minut på sig att uppdatera."
}