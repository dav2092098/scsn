{
sender: "Nome Remetente", //por favor tente manter curtos estes primeiros textos
replyTo: "Responder Para",
to: "Para",
cc: "Cc",
bcc: "Cco",
subject: "Assunto",
body: "Corpo",
html: "html",

fSheet: "Pág. Formulário",
fSheetDESC: "Nome da página que tem as respostas do formulário",
qtt: "Qtd Emails",
qttDESC: "Quantidade máxima de emails por formulário enviado",
qWarn: "Aviso Cota",
qWarnDESC: "Qtd da cota diária que deve gerar um email de aviso",
qLimit: "Limite Cota",
qLimitDESC: "Valor mínimo da cota que o script deve parar de enviar emails",
fLoc: "Local Formulas",
fLocDESC: "Digite o local das suas formulas usando: NomePágina!A:B",
closure: "Modo Fechar",
closureDESC: "O que o script deve fazer com suas formulas após o processamento?",
closureValues: "valores",
closureFormulas: "fórmulas",
closureClear: "limpar",
quota: "Restante Cota",
quotaDESC: "Quantidade restante da sua cota diária de emails",

menuSettings: "Configurações",
menuManually: "Processar manualmente",
menuAbout: "Sobre",
menuFix: "Corrigir",
version: "{1} - versão {2}", //nome do script; número da versão
about1: "Script desenvolvido por {1}", //meu nome
about2: "Ajuda, exemplos e tutoriais pode ser encontrados no site (em inglês)", //link do site estará abaixo

statusEmail: "Email{1} enviado", //índice email (será em branco se tiver só 1)
statusNot: "Email{1} não enviado", //índice email
statusError: "Erro enviando email{1}: {2}", //índice email; mensagem de erro
mailError: "Erro enviando email{1} da linha{3}: {2}", //índice email; mensagem de erro; núm. linha
statusQuota: "Limite da cota atigindo",
statusMissingField: "Campo não existe: {1}", //nome do campo
statusFormattingErr: "Erro formatando campo: {1}", //definição completa do campo
statusDateFormatErr: "Errr formatando campo de data: {1}", //definição completa do campo

manualQuestion: "Qual linha você quer processar?\nAdicione um * ao número da linha para processar dela até o final",
manualInvalid: "\"{1}\" não é um número válido. Abortando.", //valor digitado pelo usuário
manual1stMult: "A primeira linha é a n.2. Vou considerar que você quer processar tudo.",
manual1stSingle: "O número da linha deve ser maior ou igual a 2.\nJá que a linha 1 é o cabeçalho.",
manualAfterLast: "O número da linha que você digitou é além da última linha com dados",
manualQuotaWarn: "Limiar de aviso da cota atingido. Continuar mesmo assim?",
manualQuotaLimit: "Limite mínimo da cota atingido\nProcesso interrompido na linha {1}", //número da linha
manualSuccessMulti: "Todas as linhas de {1} até {2} processadas com sucesso", //primeira linha; última linha
manualSuccessSingle: "Linha {1} processada com sucesso", //número da linha
manualErrors: "Ocorreram alguns erros no processamento, verifique o status das linhas",

yes: "Sim",
no: "Não",
ok: "Ok",
title: "Configuração {1}", //nome do script
emailTab: "Email{1}", //índice da aba (estará vazia se tiver 1 só)
advTab: "Avançado",
advIntro: "Você não precisa se preocupar com estes ajustes se não quiser.",
advTip1: "*Você tem que '{1}' e abrir novamente para ver as atualizações de qualquer mudança nestes ajustes.", //salvar e sair
advTip2: "Está com dúvidas sobre estes parâmetros? Quer aprender mais sobre o {1}?",
advTip3: "Acesse o site (em inglês)", //link do site abaixo
placeholders: "Campos a mesclar:",
addField: "Adicionar:",
insertPlaceholder: "inserir campo", //haverá uma seta em frente
saveAndClose: "Salvar e Sair",

sheetError: "{1} informada não existe!", //nome parâmetro 'Pág. Formulário'
numberError: "O valor em \"{1}\" não é um número válido!", //nome do parâmetro
formulasError: "{1} inválido", //nome do parâmetro 'Local Fórmulas'
formulasSheetError: "Página inválida para {1}", //nome do parâmetro 'Local Fórmulas'
formulasColsError: "Colunas inválidas para {1}", //nome do parâmetro 'Local Fórmulas'
errorTitle: "Erro",
badSettings: "Seus ajustes não forão salvos.",
versionConflict: "Versão da configuração é {1}, mas a do script é {2}. Estas não são compatíveis.", //versão config; versão script
resolveConflict: "Sua configuração, versão {1}, não é compatível com a versão {2} do script. Você quer sobrescrever sua configuração com valores padrão?", //versão config; versão script
noConfigSheet: "Página '{1}' não encontrada.\nSelecione \"Install\" do menu para (re)criá-la.", //nome do script
badConfig: "Suas configurações foram perdidas ou danificadas!\nVocê quer recriá-las com valores padrão?",
badConfigCancel: "Nada foi feito. Aqui está a mensagem de erro:\n{1}", //mensagem de erro
noProblem: "Suas configurações não aparentam ter problema",
missingSheet: "Página não encontrada: {1}", //nome da página
fSheetMissing: "Sua \"{1}: {2}\" não foi encontrada, escolha outra página e clique \"{3}\" para corrigir", //fSheet parameter name; fSheet parameter value; yes
cancelMessage: "Cancelado",
errorReportSubject: "{1} - Relatório de Erros", //nome do script
errorReportBody: "Os seguintes erros ocorreram na planilha \"{1}\":\n{2}", //nome da planilha; erros
alsoQuota: "Também, o seu limiar de aviso da cota foi atingido.",
quotaMailSubject: "{1} - Aviso de Cota", //nome do script
quotaMailBody: "Sua quota atual é: {1}\nQue é menor que o limiar de aviso: {2}", //cota restante; aviso cota

pickLanguage: "Escolha uma língua:",
langIncomplete: "Está língua foi escrita para uma versão antiga do script e provavelmente está incompleta.",
pickSheet: "Selecione a página do formulário (ou de dados a mesclar):",
install: "Instalar",
overwrite: "Você confirma que deseja sobrescrever toda sua página \"{1}\"?", //nome do script
defaultBody: "Valores enviados:",
defaultSubject: "Novo formulário enviado",
blankSheet: "Sua página \"{1}\" está vazia! Por favor crie seu formulário ou estrutura básica de dados antes de instalar para que o script possa cria uma configuração padrão pra você.", //nome da página
statusColumn: "{1} Status", //nome do script
relocateStatus: "Nesta versão do script, a coluna de status é a 1ª ao invés da última. Esta foi movida automaticamente, verifique por favor.",
statusComment: "Esta coluna deve ser sempre a primeira",
settingsComment: "Por favor NÃO modifique esta célula manualmente! Utilize a interface de configuração",
header: "{1}\nExecutado automaticamente:\nSuas configurações estão aqui:", //nome do script (este texto deve ter sempre 3 linhas)
instructions: "Dicas:\n"+ //nome do parâmetro 'Pág. Formulário'
  "Se você quiser renomear sua página de dados, lembre-se de mudar o parâmetro \"{1}\" junto.\n"+
  "Uma boa prática é ter a 1ª linha de dados com valores falsos para permitir você realizar testes antes de executar para os dados reais.\n"+
  "Os #camposParaMesclar# podem ser usado em qualquer parte do email, como o \"Para\", \"Assunto\", etc.\n"+
  "O carácter \"#\" é usado para delimitar os campos. Se você quiser usar este símbolo, escreva-o duas vezes seguidas \"##\". Eles irão ser substituídos por um só.\n"+
  "Você pode passar instruções de formatação para os campos utilizando o carácter \"|\" depois do nome do campo. Verifique o site para ver os formatos possíveis (em inglês).\n"+
  "http://sites.google.com/site/FormEmailer\n"+
  "\n"+
  "Instruções para nova instalação:\n"+
  "Você precisa configurar o \"acionador\" para que o script seja executado automaticamente. Passos:\n"+
  "- Clique no menu \"Ferramentas\" > \"Editor de scripts...\"\n"+
  "- Na janela do editor\n"+
  "-- Verifique que você esta com o script {1} aberto (normalmente está)\n"+
  "-- Clique no menu \"Acionadores\" > \"Acionadores do script atual...\"\n"+
  "--- Clique no único link e configure o novo acionador como a seguir:\n"+
  "timeDriven - Time-driven - Minutes timer - Every minute\n"+
  "--- Clique Salvar\n"+
  "-- Pode fechar a janela do editor\n"+
  "O indicador de status nesta página (célula B2) pode demorar alguns minutos para mudar."
};