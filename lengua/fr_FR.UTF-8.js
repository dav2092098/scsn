{
// V1.1 MTX 17-12-2011 pour FormEmailer V3.61
sender: "Nom", //please try to keep these first texts short
replyTo: "Répondre à",
to: "Pour",
cc: "Copie",
bcc: "Copie Cachée",
subject: "Sujet",
body: "Message",
html: "html",

fSheet: "Form sheet",
fSheetDESC: "Nom de la feuille de calcul contenant les réponses au questionnaire",
qtt: "Quantité de couriers",
qttDESC: "Nombre maximum de couriers envoyés pour chaque soumission de formulaire",
qWarn: "Alerte de quota",
qWarnDESC: "Seuil de déclenchement quotidien pour envoyer un courier d'alerte",
qLimit: "Limite du quota",
qLimitDESC: "Seuil en dessous duquel FormEmailer cessera d'envoyer des couriers",
fLoc: "Emplacement des formules",
fLocDESC: "Entrez l'endroit où sont les formules sous la forme: NomDeFeuille!A:B",
closure: "Mode fermeture",
closureDESC: "Ce que le script doit faire après que vos formules ont été évaluées",
closureValues: "valeurs",
closureFormulas: "formules",
closureClear: "supprimer",
quota: "Quota restant",
quotaDESC: "Nombre de messages que vous pouvez encore envoyer aujourd'hui",

menuSettings: "Paramètres",
menuManually: "Exécution manuelle forcée",
menuAbout: "A propos",
menuFix: "Réparer",
version: "{1} - version {2}", //script name; version number
about1: "Script developpé par {1}", //my name
about2: "De l'aide, des exemples et des tutos sont disponibles à", //site link will be in the line bellow

statusEmail: "Courier{1} envoyés", //email index (will be blank if there"s only one)
statusNot: "Courier{1} non envoyés", //email index
statusError: "Erreur pendant l'envoi de courier{1}: {2}", //email index; error message
mailError: "Erreur pendant l'envoi de courier{1} en ligne{3}: {2}", //email index; error message; line number
statusQuota: "Limite d'envoi attente",
statusMissingField: "Le champ n'existe pas: {1}", //placeholder name
statusFormattingErr: "Erreur en formatant le champ: {1}", //full placeholder definition
statusDateFormatErr: "Erreur en formatant la date au champ: {1}", //full placeholder definition

manualQuestion: "Quelle ligne voulez vous traiter ?\nAjoutez un * après le numéro de ligne pour traiter jusqu'à la fin",
manualInvalid: "\"{1}\" n'est pas un nombre valide. Arrêt.", //value entered by user
manual1stMult: "La première ligne est le N°2. Je considère que vous voulez traiter depuis le début.",
manual1stSingle: "Le numero de ligne doit être supérieur ou égal à 2, puisque la ligne n°1 contient les en-têtes.",
manualAfterLast: "Le numéro que vous avez tapé est trop grand; il n'y a plus de données à cet endroit.",
manualQuotaWarn: "Vous avez dépassé le seuil d'alerte. Voulez vous continuer cependant ?",
manualQuotaLimit: "Vous avez dépassé votre quota\nArrêt du process en ligne {1}", //line number
manualSuccessMulti: "Toutes les données entre les lignes  {1} et {2} ont été traitées avec succès", //1st line; last line
manualSuccessSingle: "Ligne {1} traitée avec succès", //line number
manualErrors: "Erreurs rencontrées pendant le traitement. Vérifiez la colonne d'état (Status)",

yes: "Oui",
no: "Non",
ok: "Ok",
title: "Paramètres de {1}", //script name
emailTab: "Courier{1}", //tab index (may be empty if there's only one)
advTab: "Avancé",
advIntro: "Vous pouvez ignorer ces paramètres si vous le désirez. Les valeurs par défaut peuvent convenir.",
advTip1: "*Vous devez '{1}' puis re-ouvrir pour prendre en compte pour les modifications que vous faites ici.", //save and close
advTip2: "Vous avez des doutes sur ces paramètres ? Vous désirez en apprendre plus sur {1}?", //script name
advTip3: "Accédez au site d'aide à l'adresse ", //site link bellow
placeholders: "Choix des variables :",
addField: "Ajouter un champ :",
insertPlaceholder: "Insèrer une variable", //there will be an arrow in front of this
saveAndClose: "sauver et fermer",

sheetError: "{1} 'existe pas!", //'Form sheet' parameter name
numberError: "La valeur en \"{1}\" N'est pas un nopmbre valide!", //parameter name
formulasError: "Invalide {1}", //'formulas location' parameter name
formulasSheetError: "Feuille invalide en {1}", //'formulas location' parameter name
formulasColsError: "Référence de colonne invalide en {1}", //'formulas location' parameter name
errorTitle: "Erreur",
badSettings: "Vos données n'ont pas été sauvées.",
versionConflict: "Votre configuration est en version {1}, et votre script en version {2}. Elles ne sont pas compatibles.\n", //config version; script version
resolveConflict: "La version de vos paramètres  \"{1}\", n'est pas compatible avec la version de votre script \"{2}\". Voulez-vous écraser vos paramètres avec les valeurs par défaut ?", //config version; script version
badConfig: "Vos paramètres sont endommagés ou manquants!\nVoulez-vous les remplacer par les valeurs par défaut ?",
badConfigCancel: "Rien n'a été fait.\nMessage d'erreur :\n{1}", //error message
noProblem: "Il semble y avoir un problème avec vos paramètres.",
missingSheet: "Impossible de trouver la feuille: {1}", //sheet name
fSheetMissing: "Votre \"{1}: {2}\" ne peut être trouvé. Choisissez-en un autre, et cliquez \"{3}\" pour corriger", //fSheet parameter name; fSheet parameter value; yes
cancelMessage: "Annulé",
errorReportSubject: "{1} Rapport d'erreurs", //script name
errorReportBody: "Erreur suivante rencontrée en \"{1}\" feuille:\n{2}", //spreadsheet name; errors
alsoQuota: "De plus, votre quota est en dessous du seuil d'alerte",
quotaMailSubject: "{1} Alerte de quota", //script name
quotaMailBody: "Votre quota actuel est de : {1}\nIl est inférieur du seuil d'alerte: {2}", //remaining quota; quota warning

pickLanguage: "Choisissez une langue:",
langIncomplete: "Cette traduction a été écrite pour une version plus ancienne du script, et est probablement incomplète.",
pickSheet: "Selectionnez la feuille qui contient les réponses de votre questionnaire (ou les données à rassembler):",
install: "Installer",
overwrite: "Vous confirmez que vous désirez écraser toute votre feuille \"{1}\" ", //script name
defaultBody: "Valeurs soumises :",
defaultSubject: "Nouveau formulaire soumis",
blankSheet: "Votre feuille \"{1}\" est vide! Créez votre formulaire, ou une structure de données basique avant d'installer le script! Il pourra ainsi créer des valeurs par défaut qui vous conviendront.", //sheet name
statusColumn: "{1} Status", //script name
relocateStatus: "Dans cette nouvelle version du script, la colonne d'état est la première, au lieu d'être la dernière. Je l'ai déplacée pour vous. Merci de vérifier.",
statusComment: "Cette colonne doit toujours être la première.",
settingsComment: "Ne modifiez PAS cela manuellement! Utilisez le panneau des paramètres !",
header: "{1}\nMode automatique:\nVos paramètres sont sauvés ici:", //script's name (this text must always have 3 lines)
instructions: "Guide de paramétrage :\n"+ //'Form Sheet' parameter name
  "Si vous renommez votre feuille de données, souvenez-vous de renommer le paramètre  \"{1}\" en même temps.\n"+
  "Une bonne habitude est d'utiliser la première ligne de données avec des données quelconques, ce qui vous permet de faire des tests avant de traiter toute la feuille.\n"+
  "Les paramètres peuvent être utilisés dans n'importe quel champ, y compris Destinataire, Sujet, etc.\n"+
  "Le caractère \"#\" est utilisé pour délimiter les variables; si vous désirez utiliser ce caractère, écrivez-le 2 fois \"##\". Ils seront remplacés par un seul.\n"+
  "Vous pouvez insérer des instructions de formatage en utilisant le caractère  \"|\" après le nom du champ. Voyez les formats disponibles sur l'aide du site.\n"+
  "http://sites.google.com/site/FormEmailer\n"+
  "\n"+
  "Instruction pour une nouvelle installation :\n"+
  "Vous devez programmer les déclencheurs pour que le script soit exécuté automatiquement. Pour cela, les étapes sont:\n"+
  "- Cliquez sur le menu \"Outils\" > \"Editeur de scripts...\"\n"+
  "- Dans la fenêtre de l'éditeur\n"+
  "-- Vérifiez que le script {1} est ouvert, et sélectionné (il l'est normalement)\n"+
  "-- Cliquez sur le menu  \"Déclencheurs\" > \"Déclencheurs du script actuel...\"\n"+
  "--- Cliquez sur le seul lien, et créez un nouveau déclencheur comme ceci :\n"+
  "timeDriven - Time-driven - Minutes timer - Every minute (déclenché par le délai - par minutes - toutes les minutes)\n"+
  "--- Cliquez sur 'Enregistrer'\n"+
  "-- Vous pouvez fermer la fenêtre d'édition\n"+
  "La zone d'indication de l'état du script (Cellule B2) peut prendre quelques minutes pour se mettre à jour."
}
