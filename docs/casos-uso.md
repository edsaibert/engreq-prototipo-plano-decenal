
# Documento dos Casos de Uso
---

## Plano Decenal

### **UC01 - Criar Plano Decenal**
**Ator Principal:** Integrantes da Secretaria/Conselho Estadual responsável pelo Plano Decenal a ser desenvolvido ou SEDEF

**Pré-condições:** Usuário autenticado e com permissão de criação de Plano Decenal.

**Fluxo Principal:**
1. O usuário acessa a seção de criação de novos planos decenais;
2. O sistema exibe o formulário de cadastro;
3. O usuário seleciona o Eixo temático e o Problema Público correspondente (a partir de uma lista fixa);
4. O usuário insere a descrição do Compromisso Decenal;
5. O usuário adiciona um ou mais Objetivos vinculados ao Compromisso;
6. Para cada Objetivo o usuário adiciona as Linhas de Ação e suas respectivas Tarefas, definindo o Responsável Principal e os Colaboradores;
7. O usuário confirma a publicação do Plano Decenal;
8. O sistema valida os dados, armazena as informações, registra a ação no histórico e exibe uma mensagem de sucesso.

**Fluxos de Exceção:**

* 7.a: Se algum campo obrigatório não for preenchido, o sistema impede a publicação e notifica o autor.

**Pós condições:**

* O novo Plano Decenal é registrado
* Um registro de auditoria é criado a partir do ID do novo Plano Decenal, contendo a identificação do usuário criador e a data/hora atuais.

### **UC02 - Editar Estrutura do Plano Decenal**
**Ator Principal:** Integrantes da Secretaria/Conselho responsável pelo plano decenal e SEDEF.

**Pré-condições:** Usuário autenticado.

**Fluxo Principal:**
1. O Usuário seleciona o modo de edição a partir da seção do Plano Decenal;
2. O sistema valida as permissões do usuário;
3. O usuário seleciona o elemento que deseja modificar (Compromisso, Objetivo, Linha de Ação ou Tarefa);
4. O usuário realiza as alterações;
5. O usuário confirma as alterações;
6. O sistema valida as modificações, atualiza o Plano Decenal e seus respectivos registros de auditoria e exibe uma mensagem de sucesso.

**Fluxos de Exceção:**
* 2a. Se o usuário não tiver permissão de edição sobre o respectivo Plano Decenal, o sistema não autoriza o modo de edição e informa o usuário;
* 6a. Se o usuário tentar excluir um Objetivo que possui Linhas de Ação e Tarefas vinculadas, o sistema impede a exclusão.

**Pós-condições:**
* Plano Decenal é atualizado;
* Os registros de auditoria são atualizados com o identificador do autor da modificação, a data/hora atuais e o comparativo de modificação.

---

### **UC03 - Visualizar Estrutura do Plano Decenal**
**Ator Principal:** Público Geral, Integrantes dos Conselhos/Secretarias Estaduais e SEDEF.

**Pré-condições:** Nenhuma.

**Fluxo Principal:**
1. O usuário acessa a lista de Planos Decenais;
2. O sistema exibe os Planos Decenais Cadastrados;
3. O usuário seleciona um Plano Decenal;
4. O sistema retorna a visualização hierárquica, monitoramento das tarefas e indicadores relacionados;
5. O usuário navega visualmente pelas seções.

**Fluxo Alternativo:**

* 1a. O usuário pode filtrar os Planos Decenais pelos filtros de palavras-chave, responsável, eixos do plano decenal, compromisso;
* 3a. Não existem planos decenais cadastrados.

**Pós-condições:**
* O usuário visualiza as informações do Plano Decenal sem alterar o estado do sistema.

---

### **UC04 - Acessar Histórico de Alterações**
**Ator Principal:** Integrantes dos Conselhos/Secretarias Estaduais e SEDEF.

**Pré-condições:** Plano Decenal selecionado.

**Fluxo Principal:**
1. O usuário navega até a estrutura do Plano Decenal ou até uma Tarefa/Indicador específico;
2. O usuário seleciona a opção de visualização de histórico;
3. O sistema recupera os registros de auditoria;
4. O sistema verifica as permissões do usuário;
5. O sistema exibe a lista contendo: quem alterou, data e hora exatas, modificação aplicada de forma que:
    - Integrantes de Secretarias/Conselhos vejam apenas os registros alterados pelo próprio grupo;
    - Integrantes da SEDEF vejam todos os registros disponívels;
6. O usuário seleciona um registro para ler com mais detalhes;

**Pós-condições:**
* O usuário visualiza as informações do histórico de alterações sem alterar o estado do sistema.

---

### **UC05 - Cadastrar Indicador**
**Ator Principal:** Integrantes dos Conselhos/Secretarias Estaduais e SEDEF.

**Pré-condições:** Plano Decenal selecionado e usuário autenticado;

**Fluxo Principal:**
1. O usuário seleciona a opção de criação de indicador;
2. Sistema valida permissões do usuário;
3. O usuário preenche a descrição do indicador, seleciona o tipo entre percentual e numérico e o vincula a um Objetivo ou Tarefa existente;
4. O usuário confirma a publicação do indicador;
5. O sistema registra o indicador e emite um alerta de sucesso.

**Fluxos de Exceção:**
* 2a. Se o usuário não tem permissões de criar indicador no Plano Decenal, o sistema não autoriza o modo de edição e informa o usuário. 
* 5a. Se o usuário tentar salvar o indicador sem o vincular a nenhum elemento do plano, o sistema gera um erro de validação.

**Pós-condições:**
* Registro de novo indicador no Plano Decenal;
* Os registros de auditoria são atualizados com o identificador do autor da modificação, a data/hora atuais e a modificação efetuada.

---

### **UC06 - Modificar Dados do Indicador**
**Ator Principal:** Integrantes dos Conselhos/Secretarias Estaduais e SEDEF.

**Pré-condições:** Usuário autenticado e indicador selecionado.

**Fluxo Principal:**
1. O usuário seleciona modo de edição do indicador;
2. O sistema valida as permissões do usuário;
3. O sistema abre formulário de edição;
4. O usuário altera os campos do indicador;
5. O usuário confirma as modificações;
6. O sistema valida as entradas, recalcula os gráficos de monitoramento e exibe uma mensagem de sucesso.

**Fluxos de Exceção:**
* 2a. Se o usuário não tem permissão de escrita no indicador selecionado, o sistema não autoriza o modo de edição e informa o usuário.
* 5a. Se uma entrada obrigatória não for preenchida, o sistema aborta a modificação.

**Pós-condições:**
* Os dados do indicador são atualizados.
* Os registros de auditoria do indicador são atualizados com o identificador do autor, data/hora atuais e a modificação realizada.

---

### **UC07 - Visualizar Indicadores e Gráficos de Progresso**
**Removido, agora o indicador faz parte da visualização hierárquica do Plano Decenal**

---

### **UC08 - Importar Planilha de Dados**
**Ator Principal:** Integrante dos Conselhos/Secretarias Estaduais.

**Pré-condições:** Usuário autenticado e Plano Decenal selecionado.

**Fluxo Principal:**
1. O sistema verifica as permissões do usuário
2. O sistema responde com um formulário;
3. O usuário seleciona o indicador a ser atualizado;
4. O usuário seleciona o arquivo de dados a ser enviado;
5. O usuário confirma a importação de dados;
6. O sistema verifica as permissões do usuário;
7. O sistema faz o upload e realiza a validação estrutural do arquivo;
8. O sistema processa a planilha, atualiza o indicador selecionado e confirma a modificação.

**Fluxos de Exceção:**
* 6a. Se o usuário não tiver permissão de escrita no indicador, o sistema não autoriza o upload e informa o usuário.
* 7a. Se faltarem colunas obrigatórias ou houver dados inválidos, o sistema aborta a operação e exibe uma listagem com os erros encontrados.
* 7b. Se o arquivo tiver formato não permitido, o sistema aborta a operação.

**Pós-condições:**
* Os dados de monitoramento e os gráficos são recalculados automaticamente com os novos dados importados;
* O registro de auditoria do indicador é atualizado com o autor da modificação e data/hora atuais.

---

### **UC09 - Exportar Dados de Monitoramento**
**Ator Principal:** Público Geral, Integrante dos Conselhos/Secretarias Estaduais e SEDEF.

**Pré-condições:** Indicador ou monitoramento de tarefa selecionado.

**Fluxo Principal:**
1. O usuário aplica filtros na tela de visualização para isolar o conjunto de dados que deseja;
2. O usuário seleciona a opção de exportação de dados;
3. O sistema oferece as opções de formato: Excel, CSV ou PDF;
4. O usuário escolhe o formato desejado;
5. O sistema gera o arquivo com base na formatação escolhida e inicia o download automaticamente.

**Pós-condições:**
* O arquivo é baixado para a máquina local do usuário.

---
## Acessos e Tarefas Administrativas

### **UC10 - Realizar Login**
**Ator Principal:** Usuários cadastrados (SEDEF, Conselho Estadual / Secretarias).

**Pré-condições:** Usuário previamente cadastrado.

**Fluxo Principal:**
1. Usuário acessa a área de autenticação do sistema;
2. O sistema exibe a forma de autenticação disponível para o ambiente em uso;
3. O usuário preenche suas credenciais de identificação;
4. O sistema valida as informações retornadas pelo serviço de autenticação configurado;
5. O sistema gera um Token JWT criptografado contendo as permissões do usuário;
6. O sistema redireciona o usuário para o módulo inicial correspondente ao seu perfil.

**Fluxos de Exceção:**
* 4a. Se o serviço de autenticação retornar erro, o sistema aborta a operação de login e notifica o usuário.

**Pós-condições:**
* Usuário autenticado e com uma sessão ativa estabelecida por meio de um Token JWT;

---

### **UC11 - Solicitar Novos Acessos**
**Ator Principal:** Integrantes de Secretarias/Conselhos Estaduais.

**Pré-condições:** Usuário autenticado.

**Fluxo Principal:**
1. O Usuário acessa módulo de solicitação de novos acessos;
2. O sistema retorna com um formulário;
5. O usuário seleciona o tipo de acesso solicitado;
6. O usuário confirma a solicitação;
7. O sistema salva a requisição na fila do administrador e exibe uma mensagem de sucesso.

**Pós-condições:**
* A solicitação de acesso é registrada na fila de requisições dos usuários administradores.

---

### **UC12 - Gerenciar Permissões do Usuário**
**Ator Principal:** Administrador (SEDEF / Root).

**Pré-condições:** Usuário autenticado com o nível máximo de privilégio.

**Fluxo Principal:**
1. O administrador acessa o módulo de gerenciamento de usuários;
2. O sistema exibe a lista de usuários cadastrados e as solicitações de acesso pendentes;
3. O administrador seleciona um usuário específico ou uma nova solicitação;
4. O administrador escolhe a ação: "Elevar Permissão", "Reduzir Permissão" ou "Remover Acesso";
5. O administrador registra o usuário ao seu grupo (Secretaria ou Conselho Estadual);
6. O administrador confirma a operação;
7. O sistema atualiza o perfil do usuário e registra a alteração nos registros de auditoria do módulo de segurança com a identificação do autor, data/hora atuais e a operação executada.

**Pós-condições:**
* Os privilégios de acesso do usuário são modificados.

## Outros

### **UC13 - Ativar Recursos de Acessibilidade**
**Ator Principal:** Público Geral, Integrante dos Conselhos/Secretarias Estaduais e SEDEF.

**Pré-condições:** Nenhuma.

**Fluxo Principal:**
1. O usuário acessa as opções de acessibilidade disponíveis na interface do sistema;
2. O usuário seleciona os recursos desejados;
3. O sistema aplica a configuração selecionada e atualiza a interface.

**Pós-condições:**
* A interface do sistema é adaptada às necessidades de acessibilidade do usuário.

### **UC14 - Excluir do Plano Decenal**
**Ator Principal**: Integrantes da SEDEF.

**Pré-condições:** Usuário autenticado e com Plano Decenal selecionado.

**Fluxo Principal:**
1. O usuário acessa modo edição do Plano Decenal;
2. O usuário escolhe elemento da hierarquia a ser deletado;
3. O sistema verifica conflito na operação;
4. O sistema realiza a operação e informa mensagem de sucesso.

**Fluxo Alternativo**
* 2a. O usuário pode escolher excluir o Plano Decenal por completo.
* 3a. Se o usuário excluir um elemento da hierarquia do Plano Decenal que já possua filhos, o sistema aborta a operação e informa o usuário.

**Pós-condições:**
* A operação é escrita nos registros de auditoria do Plano Decenal com a identificação do autor e data/hora atuais.