{
sender: "Nome Mittente", //per favore, cerca di mantenere corto questo campo
replyTo: "Rispondi",
to: "A",
cc: "Cc",
bcc: "Bcc",
subject: "Oggetto",
body: "Body",
html: "html",

fSheet: "Foglio del Modulo",
fSheetDESC: "Nome del foglio che contiene le risposte al modulo",
qtt: "Qt Emails",
qttDESC: "Numero max di email inviate per ogni compilazione del modulo",
qWarn: "Allarme avvicinamento quota max",
qWarnDESC: "Soglia giornaliera che farà scattare email di avviso",
qLimit: "Soglia limite",
qLimitDESC: "Valore minimo per cui FormEmailer smetterà di inviare emails",
fLoc: "Localizzazione delle Formule",
fLocDESC: "Inserisci la localizzazione usando il formato: NomeFoglio!A:B",
closure: "ModalitÃ  chiusura",
closureDESC: "Cosa dovrebbe fare lo script dopo la valutazione delle tue formule",
closureValues: "valori",
closureFormulas: "formule",
closureClear: "pulisci",
quota: "Quota residua",
quotaDESC: "Ammontare della tua quota residua giornaliera",

menuSettings: "Impostazioni",
menuManually: "Processa manualmente",
menuAbout: "Info",
menuFix: "Correggi",
version: "{1} - versione {2}", //nome dello script; numero di versione
about1: "Script sviluppato da {1}", //il mio nome
about2: "Aiuti, esempi e tutorials possono essere trovati su", //il link al sito sarà nella linea sotto

statusEmail: "Email{1} inviata", //email index (sarà bianca in caso ve ne sia uno solo)
statusNot: "Email{1} non inviata", //email index
statusError: "Errore nell\'invio dell\'email{1}: {2}", //email index; messaggio di errore
mailError: "Errore nell\'invio dell\'email{1} alla linea{3}: {2}", //email index; messaggio di errore; numero di linea
statusQuota: "Soglia massima raggiunta",
statusMissingField: "Campo inesistente: {1}", //nome del segnaposto
statusFormattingErr: "Errore nella formattazione del campo: {1}", //definizione completa del segnaposto
statusDateFormatErr: "Errore nella formattazione del campo data: {1}", //definizione completa del segnaposto

manualQuestion: "Quale linea vuoi processare?\nInserisci un * sul numero di linea, per processare da qui fino alla fine",
manualInvalid: "\"{1}\" non è un numero valido. Annullamento.", //valore inserito dall\'utente
manual1stMult: "La prima linea è la n.2. Immagino che tu voglia processare dall\'inizio.",
manual1stSingle: "Il numero di linea dovrebbere essere uguale o maggiore di 2.\nPoichè la 1a linea è la testata.",
manualAfterLast: "Il numero di linea che hai digitato è oltre l\'ultima linea utile contenente dati.",
manualQuotaWarn: "Allarme di avvicinamento soglia! Continuare ugualmente?",
manualQuotaLimit: "Valore minimo raggiunto\nProcesso fermato alla linea {1}", //numero di linea
manualSuccessMulti: "Tutte le linee da {1} a {2} processate con successo", //1a linea; ultima linea
manualSuccessSingle: "Linea {1} processata con successo", //numero di linea
manualErrors: "Si sono verificati errori di processazione, controlla lo stato delle righe",

yes: "Si",
no: "No",
ok: "Ok",
title: "Impostazioni {1}", //nome dello script
emailTab: "Email{1}", //indice dei tab (può essere vuoto nel caso ve ne sia uno solo)
advTab: "Avanzato",
advIntro: "Non devi preoccuparti di queste impostazioni se non vuoi.",
advTip1: "*Devi chiudere '{1}' e ri-aprirlo per vedere gli aggiornamenti per ogni cambiamento effettuato qui.", //salva e chiudi
advTip2: "Hai dubbi su questi parametri? Vuoi saperne di più su {1}?", //nome dello script
advTip3: "Trova aiuto su", //link del sito alla linea sotto
placeholders: "Segnaposti per le risposte:",
addField: "Aggiungi campo:",
insertPlaceholder: "inserisci segnaposto", //ci sarà una freccia in cima a questo
saveAndClose: "Salva e Chiudi",

sheetError: "{1} non esistente!", //'Foglio del Modulo' nome parametro
numberError: "Il valore in \"{1}\" non è un numero valido!", //nome parametro
formulasError: "{1} non valido", //'localizzazione formule' nome parametro
formulasSheetError: "Foglio non valido per {1}", //'localizzazione formule' nome parametro
formulasColsError: "Riferimento di colonna non valido per {1}", //'localizzazione formule' nome parametro
errorTitle: "Errore",
badSettings: "I tuoi dati non sono stati salvati.",
versionConflict: "La versione di configurazione è {1}, ma quella dello sccript è {2}. Non sono compatibili.\n", //versione di configurazione; versione dello script
resolveConflict: "La tua versione delle impostazioni \"{1}\", non è compatibile con la versione dello script \"{2}\". Vuoi sovrascrivere con nuove impostazioni di default?", //versione di configurazione; versione dello script
badConfig: "La tua configurazione è danneggiata o mancante!\nVuoi sovrascriverla con i valori di default?",
badConfigCancel: "Non è stato fatto nulla.\nQuesto è il messaggio di errore:\n{1}", //messaggio di errore
noProblem: 'Sembra che non ci siano problemi con le tue impostazioni.',
missingSheet: "Non è stato possibile trovare il foglio: {1}", //nome del foglio
fSheetMissing: "Il tuo \"{1}: {2}\" non è stato trovato, per favore scegline uno nuovo e fai click su \"{3}\" per correggere", //ModuloFoglio parametro nome; ModuloFoglio parametro valori; si
cancelMessage: "Cancellato",
errorReportSubject: "{1} listato errori", //nome dello script
errorReportBody: "I seguenti errori sono avvenuti sul \"{1}\" foglio di lavoro:\n{2}", //nome del foglio di lavoro; errori
alsoQuota: "Inoltre, la tua quota è al di sotto dei valori di allarme",
quotaMailSubject: "Valore di allarme {1}", //nome dello script
quotaMailBody: "La tua quota attuale è: {1}\nè al di sotto della soglia di allarme: {2}", //quota residua; soglia di allarme

pickLanguage: "Seleziona una lingua:",
langIncomplete: "Questa traduzione è stata scritta per una versione piÃ¹ vecchia dello script, ed è probabilmente incompleta.",
pickSheet: "Seleziona il foglio che contiene le tue risposte al modulo (o i dati da integrare):",
install: "Installa",
overwrite: "Confermi di voler sovrascrivere l\'intero foglio \"{1}\"?", //nome dello script
defaultBody: "Valori inviati:",
defaultSubject: "Nuovo modulo inviato",
blankSheet: "Il tuo foglio \"{1}\" è vuoto! Per favore crea il tuo modulo, o una struttura dati di base, prima di installare, così che lo script possa creare una base per te.", //nome del foglio
statusColumn: "Stato di {1}", //nome dello script
relocateStatus: "In questa nuova versione dello script, la colonna di stato è la prima invece dell\'ultima. L\'ho riposizionata per te. Per favore verifica.",
statusComment: "Questa colonna deve sempre essere la prima",
settingsComment: "Per favore NON modificare manualmente! Utilizza l\'interfaccia IMPOSTAZIONI",
header: "{1}\nEsecuzione automatica:\nLe tue impostazioni vengono salvate qui:", //nome dello script (Questo testo deve sempre essere di 3 linee)
instructions: "Suggerimenti impostazioni:\n"+ //'Modulo del Foglio' nome parametro
  "In caso tu voglia rinominare il foglio, ricorda di rinominare il parametro \"{1}\" allo stesso tempo.\n"+
  "è buona pratica avere le prime righe con qualche valore finto, così da realizzare alcuni test prima di utilizzarlo su tutto il patrimonio di dati.\n"+
  "I segnaposti possono essere utilizzati in ogni campo, per es.: Scrivi A, Oggetto, ecc.\n"+
  "Il carattere \"#\" viene utilizzato per delimitare i confini dei segnaposti. In caso tu voglia utilizzare questo carattere in un campo, digitalo due volte \"##\". Saranno rimpiazzati da uno solo di questi.\n"+
  "Puoi fornire le istruzioni di formattazione nei segnaposti usando il carattere \"|\" dopo il nome del campo. Guarda il formato disponibile sul sito di aiuto.\n"+
  "http://sites.google.com/site/FormEmailer\n"+
  "\n"+
  "Nuove istruzioni di installazione:\n"+
  "Devi configurare il trigger così che lo script possa avviarsi automaticamente. Passi:\n"+
  "- Clicca sul menu \"Strumenti\" > \"Editor di script...\"\n"+
  "- Nella finestra dell\'editor\n"+
  "-- Assicurati che lo script {1} sia aperto e selezionato (di norma lo è)\n"+
  "-- Clicca sul menu \"Risorse\" > \"Trigger dello script corrente ...\"\n"+
  "--- Clicca l\'unico link visibile \"Add a new trigger\" ed imposta un nuovo trigger come segue:\n"+
  "timeDriven - Time-driven - Minutes timer - Every minute\n"+
  "--- Clicca su SALVA\n"+
  "-- Puoi chiudere l\'editor\n"+
  "L\'indicatore di stato in questo foglio (cella B2) può impiegare qualche minuto ad aggiornarsi."
}