{
sender: "Remitente", //please try to keep these first texts short
replyTo: "Responder a",
to: "Para",
cc: "Cc",
bcc: "Cco", //Con copia oculta en español.
subject: "Asunto",
body: "Cuerpo",
html: "html",

fSheet: "Hoja de formulario",
fSheetDESC: "Nombre de la hoja que contiene las respuestas del formulario",
qtt: "Cantidad de correos",
qttDESC: "Cantidad máxima de correos enviados por formulario",
qWarn: "Aviso de cuota",
qWarnDESC: "El umbral de la cuota diaria emitirá un correo de aviso",
qLimit: "Límite de cuota",
qLimitDESC: "Cuota en la que FormEmailer dejará de enviar correos",
fLoc: "Ubicación de las fórmulas",
fLocDESC: "Escriba la ubicación utilizando el formato NombreHoja!A:B",
closure: "Modo cerradura",
closureDESC: "Qué hara el programa después de evaluar tus fórmulas",
closureValues: "valores",
closureFormulas: "fórmulas",
closureClear: "borrar",
quota: "Cuota remanente",
quotaDESC: "Cuota diaria disponible",

menuSettings: "Configuración",
menuManually: "Ejecutar manualmente",
menuAbout: "Acerca",
menuFix: "Arreglo",
version: "{1} - versión {2}", //script name; version number
about1: "Programa desarrollado por {1}", //my name
about2: "Se puede encontrar ayuda, muestras y tutoriales en", //site link will be in the line bellow

statusEmail: "Correo enviado {1}", //email index (will be blank if there"s only one)
statusNot: "Correo {1} no enviado", //email index
statusError: "Error al enviar correo {1}: {2}", //email index; error message
mailError: "Error al enviar correo {1} en la línea {3}: {2}", //email index; error message; line number
statusQuota: "Se ha alcanzado el límite de la cuota",
statusMissingField: "El campo no existe: {1}", //placeholder name
statusFormattingErr: "Error al formatear el campo: {1}", //full placeholder definition
statusDateFormatErr: "Error al formatear el campo de fecha: {1}", //full placeholder definition

manualQuestion: "¿Qué línea quieres procesar?\nAgregue un * al número de la línea a partir de la cual se quiere procesar",
manualInvalid: "\"{1}\" no es un número aceptable. El programa terminará.", //value entered by user
manual1stMult: "La primera línea es la n.2. Supondré que quieres procesarlo desde el inicio.",
manual1stSingle: "El número de línea debería ser igual o mayor que 2.\nLa primera fila es el encabezado.",
manualAfterLast: "El número de línea que escribiste está más allá de la última línea con información.",
manualQuotaWarn: "¡Se alcanzó el umbral de la cuota! ¿Continuamos de todas formas?",
manualQuotaLimit: "Se alcanzó la cuota máxima.\nSe detiene el proceso en la línea {1}", //line number
manualSuccessMulti: "Todas las líneas de la {1} a la {2} se procesaron correctamente", //1st line; last line
manualSuccessSingle: "La línea {1} se procesó correctamente", //line number
manualErrors: "Hay algunos errores en el procesamiento, revise el estado de las filas",

yes: "Si",
no: "No",
ok: "Ok",
title: "Ajustes {1}", //script name
emailTab: "Correo {1}", //tab index (may be empty if there's only one)
advTab: "Avanzado",
advIntro: "No es necesario preocuparse por estos ajustes, si no quieres.",
advTip1: "*Se debe '{1}' y re-abrir para ver las actualizaciones en cualquier cambio que aquí se haya hecho.", //save and close
advTip2: "¿Tienes dudas con estos parámetros? ¿Quieres aprender más acerca de {1}?", //script name
advTip3: "Accede al sitio de ayuda en", //site link bellow
placeholders: "Marcadores de respuestas:",
addField: "Añadir campo:",
insertPlaceholder: "insertar un marcador", //there will be an arrow in front of this
saveAndClose: "Guardar y cerrar",

sheetError: "¡El parámetro {1} no existe!", //'Form sheet' parameter name
numberError: "¡El valor en \"{1}\" no es un número válido!", //parameter name
formulasError: "{1} no es válido", //'formulas location' parameter name
formulasSheetError: "Hoja no válida para {1}", //'formulas location' parameter name
formulasColsError: "Referencia a una columna no válida para {1}", //'formulas location' parameter name
errorTitle: "Error",
badSettings: "Los datos no se han guardado.",
versionConflict: "La versión de Configuración es {1}, pero la de la secuencia de comandos es {2}. No son compatibles.\n", //config version; script version
resolveConflict: "La versión \"{1}\" de los ajustes no es compatible con la versión \"{2}\" de la secuencia de comandos. ¿Quieres que se guarden los ajustes predeterminados?", //config version; script version
badConfig: "¡El archivo de configuración está dañado o no existe!\n¿Quieres que lo sobreescriba con los valores por omisión?",
badConfigCancel: "No se hizo nada.\nAquí está el mensaje de error:\n{1}", //error message
noProblem: 'Parece que no hay ningún problema con tus ajustes.',
missingSheet: "Es imposible encontrar la hoja: {1}", //sheet name
fSheetMissing: "Tu \"{1}: {2}\" no se pudo encontrar, escoge uno nuevo por favor y haz un click \"{3}\" para arreglarlo", //fSheet parameter name; fSheet parameter value; yes
cancelMessage: "Cancelado",
errorReportSubject: "Se informa de {1} errores", //script name
errorReportBody: "Los siguientes errores \"{1}\" ocurrieron en la hoja:\n{2}", //spreadsheet name; errors
alsoQuota: "También tu cuota está por debajo del aviso de límite",
quotaMailSubject: "aviso de cuota {1}", //script name
quotaMailBody: "Tu cuota actual es: {1}\nY está por debajo del umbral del aviso: {2}", //remaining quota; quota warning

pickLanguage: "Selecciona un idioma:",
langIncomplete: "Este idioma fue escrito para una versión anterior del programa y probablemente esté incompleto.",
pickSheet: "Selecciona la hoja que tiene las respuestas del formulario (o los datos que se mezclarán):",
install: "Instalar",
overwrite: "¿Confirmas que quieres sobreescribir toda tu hoja de cálculo \"{1}\"?", //script name
defaultBody: "Valores enviados:",
defaultSubject: "Nuevo formulario enviada",
blankSheet: "¡Tu hoja \"{1}\" está en blanco! Por favor crea tu formulario o una estructura de datos básica antes de instalar, para que el programa pueda crear unos bonitos ajustes para ti.", //sheet name
statusColumn: "Estado de {1}", //script name
relocateStatus: "En la versión nueva de este programa, la columna de estado es la primera en vez de la última. La he movido por ti, pero verifícala por favor.",
statusComment: "Esta columna siempre debe ser la primera",
settingsComment: "¡Por favor, no modifique esto de forma manual! Utilice la interfaz de Ajustes",
header: "{1}\nEjecución automática:\nTus ajustes se guardarán aquí:", //script's name (this text must always have 3 lines)
instructions: "Trucos para los Ajustes:\n"+ //'Form Sheet' parameter name
  "Si quieres cambiar el nombre de tu formulario, recuerda también cambiar el nombre del parámetro \"{1}\".\n"+
  "Una buena práctica es tener en la primera fila información con valores de prueba que permitan hacer algunas pruebas antes de ejecutar el programa sobre todo el conjunto de datos.\n"+
  "Los marcadores pueden ser utilizados en cualquier campo, por ejemplo: Para, Asunto, etc.\n"+
  "El carácter \"#\" se utiliza para delimitar los bordes de los marcadores, si quieres utilizar este símbolo en cualquier campo, escríbelo dos veces \"##\" y será reemplazado por sólo uno.\n"+
  "Se pueden proveer instrucciones de formato en el marcador utilizando el símbolo \"|\" después del nombre del campo. Consulta los formatos disponibles en el sitio de ayuda.\n"+
  "http://sites.google.com/site/FormEmailer\n"+
  "\n"+
  "Instrucciones para una nueva instalación:\n"+
  "Es necesario ajustar el disparador para que el programa pueda ejecutarse automáticamente. Pasos:\n"+
  "- Haga click en el menú \"Herramientas\" > \"Editor de secuencias de comandos\"\n"+
  "- En la ventana del editor\n"+
  "-- Asegúrate de que el programa {1} esté abierto y seleccionado (normalmente, lo está)\n"+
  "-- Haga click en el menú \"Recursos\" > \"Activadores de la secuencia de comandos actual...\"\n"+
  "--- Haga click en el único vínculo activado y pon un nuevo activador como sigue:\n"+
  "timeDriven - Basado en el tiempo - Temporizador por minuto - Cada minuto\n"+
  "--- Haga click en Guardar\n"+
  "-- Ahora puedes cerrar el editor\n"+
  "El indicador de estado en esta hoja (celda B2) tardará algunos minutos para actualizarse."
}