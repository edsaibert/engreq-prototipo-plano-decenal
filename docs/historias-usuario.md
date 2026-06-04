# Documento de User Stories

---

## Legenda de Prioridade 

|  Prioridade |               Descrição                   | 
|-------------|-------------------------------------------| 
| Obrigatória | Essencial para o funcionamento da solução | 
|  Importante |    Agrega valor significativo ao sistema  | 
|  Desejável  |        Funcionalidade complementar        | 

--- 

## US01 - Visualizar informações do Plano Decenal

### Descrição 
Como usuário público, quero visualizar os 23 problemas públicos vinculados aos compromissos decenais da criança e do adolescente e seus respectivos objetivos, linhas de ação e tarefas, para poder acompanhar o andamento das ações do Plano Decenal.

### Prioridade 
**Obrigatória** 

### Critérios de Aceitação 
- [ ] O sistema deve exibir os 23 problemas públicos cadastrados. 
- [ ] O usuários deve ser capaz de navegar entre Público Alvo -> Compromisso -> Objetivo -> Linhas de Ação -> Tarefas

### Vínculo com Requisitos 
- **RF01:** O sistema deve permitir que o usuário visualize os 23 problemas públicos, cada um vinculado a um Compromisso Decenal da criança e adolescente
- **RF02:** O sistema deve permitir a visualização hierárquica de: Público alvo ➔ Compromisso ➔ Objetivo ➔ Linhas de Ação ➔ Tarefas


### Vínculo com Telas do Protótipo 
- 

--- 

## US02 - Acompanhar indicadores e progresso das ações

### Descrição 
Como usuário público, quero visualizar o status e progresso de cada tarefa do plano decenal, para acompanhar o andamento das tarefas do Plano Decenal.

### Prioridade 
**Obrigatória** 

### Critérios de Aceitação 
- [ ] O sistema deve exibir indicadores associados às ações (ex: percentual concluído). 
- [ ] O sistema deve exibir o status de cada tarefa (não iniciada, em andamento, concluída).
- [ ] O sistema deve exibir gráficos de progresso para cada indicador.
- [ ] O sistema deve diferenciar visualmente indicadores percentuais e indicadores do tipo média.

### Vínculo com Requisitos 
- **RF03:** O sistema deve permitir o monitoramento contínuo das tarefas/indicadores (ex: percentual concluído, status: não iniciada, em andamento, concluída)
- **RF16:** O sistema deve exibir gráficos de progresso para cada indicador.
- **RF18:** O sistema deve diferenciar visualmente indicadores por seu respectivo tipo (% e média)


### Vínculo com Telas do Protótipo 
- 

--- 

## US03 - Localizar informações específicas

### Descrição 
Como usuário público, quero buscar e filtrar informações do Plano Decenal para encontrar com maior facilidade os dados que procuro. 

### Prioridade 
**Obrigatória** 

### Critérios de Aceitação 
- [ ] O usuário deve poder pesquisar por palavra-chave, responsável, eixo e compromisso.
- [ ] O usuário deve poder aplicar filtros (ex: compromisso, indicador, período de tempo, responsável).
- [ ] O sitema deve atualizar os resultados conforme os filtros selecionados ou a busca realizada.

### Vínculo com Requisitos 
- **RF04:** O sistema deve permitir que o usuário faça buscas no sistema para a exibição das informações correspondentes. (palavra-chave, Responsável, eixos do Plano Decenal, Compromisso)
- **RF05:** O sistema deve permitir que o usuário aplique filtros (ex. compromisso, indicador, período de tempo, responsável) para a exibição das informações do sistema.
- **RF17:** O sistema deve permitir que o usuário filtre gráficos de indicadores por ano.

### Vínculo com Telas do Protótipo 
- 

--- 

## US04 - Exportação de Dados

### Descrição
Como membro do Conselho Estadual, quero exportar os dados de monitoramento de um conjunto filtrado, para poder elaborar relatórios, realizar análises e elaborar apresentações sobre o Plano Decenal.

### Prioridade
**Importante**

### Critérios de Aceitação
- [ ] O usuário deve ser capaz de exportar os dados de monitoramento como um arquivo .csv, .xlsx ou .pdf

### Vínculo com Requisitos
- **RF06:** O sistema deve disponibilizar funcionalidade de exportação (Excel, CSV, PDF) dos dados de monitoramento de um conjunto filtrado.

### Vínculo com Telas do Protótipo 
-

--- 

## US05 - Data de Atualização dos Dados

### Descrição
Como usuário público, quero visualizar a última data de atualização dos dados para saber se as informações apresentadas estão atualizadas.

### Prioridade
**Obrigatória**

### Critérios de Aceitação
- [ ] O sistema deve registrar e exibir a data da última atualização dos dados dos indicadores. 

### Vínculo com Requisitos
- **RF07:** O sistema deve mostrar quando foi feita a última atualização dos dados dos indicadores.

### Vínculo com Telas do Protótipo 
-

---

## US06 - Histórico de Atualizações

### Descrição
Como membro do Conselho Estadual, quero consultar o histórico de alterações das tarefas para acompanhar sua evolução ao longo do tempo.

### Prioridade
**Importante**

### Critérios de Aceitação
- [ ] O sistema deve registrar para cada atualização realizada: o que foi alterado e a data e hora da alteração.
- [ ] O sistema deve permitir que o usuário visualize o histórico das atualizações.


### Vínculo com Requisitos
- **RF08:** O sistema deve manter um histórico de todas as atualizações feitas em uma tarefa, permitindo ver a evolução.
- **RF13:**  O sistema deve registrar e armazenar ações dos usuários que podem alterar o estado do sistema

### Vínculo com Telas do Protótipo 
-

---

## US07 - Permissões do Sistema

### Descrição
Como administrador do sistema, quero elevar ou reduzir premissões de outros usuários para garantir que apenas usuários autorizados tenham acesso a funcionalidades restritas do sistema.

### Prioridade
**Obrigatória**

### Critérios de Aceitação
- [ ] O administrador deve poder visualizar a lista de usuários cadastrados.
- [ ] O administrador deve poder alterar as permissões de acesso de um usuário.
- [ ] O sistema deve permitir difirentes tipos de acesso a diferentes tipos de usuário.
- [ ] O sistema dever registrar e armazenar as alterações de permissão realizadas.
- [ ] Apenas usuários autorizados podem acessar o painel do administrador.


### Vínculo com Requisitos
- **RF09:** O sistema deve possuir um painel de administrador, para elevar ou reduzir permissões de usuários e outras funcionalidades por usuários autorizados
- **RF13:**  O sistema deve registrar e armazenar ações dos usuários que podem alterar o estado do sistema
- **RF20:** O sistema deve permitir a existência de diferentes usuários (no mínimo três camadas: SEDEF, Conselho Estadual/Secretárias, público geral)

### Vínculo com Telas do Protótipo 
-

---

## US08 - Inserção de Dados

### Descrição
Como usuário autorizado, quero conseguir inserir problemas, compromissos, objetivos, linhas de ação ou tarefas para manter o sistema atualizado e em conformidade com o que está sendo feito pelo estado.

### Prioridade
**Obrigatória**

### Critérios de Aceitação
- [ ] O usuário deve conseguir inserir novos problemas, compromissos, objetivos, etc. através da interface do sistema.
- [ ] O sistema deve registrar e armazenar novos problemas, compromissos, objetivos, etc. que foram inseridos.

### Vínculo com Requisitos
- **RF12:**  O sistema deve fornecer a possibilidade de inserção de problemas, compromissos, objetivos, etc via interface gráfica.
- **RF13:**  O sistema deve registrar e armazenar ações dos usuários que podem alterar o estado do sistema

### Vínculo com Telas do Protótipo 
-

---

## US09 - Colaboradores

### Descrição
Como membro do Conselho Estadual, quero visualizar o responsável principal e colaboradores de cada ação para identificar os envolvidos em sua execução.

### Prioridade
**Obrigatória**

### Critérios de Aceitação
- [ ] O usuário deve conseguir visualizar o responsável principal e colaboradores de cada ação.
- [ ] O sistema deve armazenar para cada ação o responsável principal e colaboradores.

### Vínculo com Requisitos
- **RF19:** O sistema deve exibir o Responsável Principal e os Colaboradores para cada Ação.

### Vínculo com Telas do Protótipo 
-

---

## US10 - Carregamento e Alteração de Dados

### Descrição
Como membro da Secretaria responsável por um compromisso, quero carregar novos dados e alterar dados de indicadores já existentes para manter as informações atualizadas no sistema.

### Prioridade
**Obrigatória**

### Critérios de Aceitação
- [ ] O usuário com permissão deve conseguir carregar dados de indicadores por meio de planilhas.
- [ ] O usuário com permissão deve conseguir alterar os dados de indicadores através da interface do sistema.

### Vínculo com Requisitos
- **RF21:** O sistema deve permitir o carregamento de dados por meio de planilhas
- **RF22:** O sistema deve permitir a alteração de dados por meio da interface do sistema.

### Vínculo com Telas do Protótipo 
-

---

# US11 - Acessibilidade

### Descrição
Como usuário público, quero ativar um modo de alto contraste para facilitar a visualização do sistema.

## Prioridade
**Importante**

### Critérios de Aceitação
- [ ] O usuários deve poder ativar o modo de alto contraste.
- [ ] O usuário deve poder desativar o modo de alto contraste.
- [ ] O sistema deve aplicar o contraste em todas as telas quando o modo de alto contraste estiver ativado.

### Vínculo com Requisitos
- **RF10:** O sistema deve fornecer um modo de alto contraste para os usuários.

### Vínculo com Telas do Protótipo 
-

---

# US12 - Login

### Descrição
Como usuário autorizado, quero realizar login com email e senha para acessar funcionalidades restritas do sistema.

## Prioridade
**Obrigatória**

### Critérios de Aceitação
- [ ] O usuário deve conseguir informar email e senha
- [ ] O sistema deve validar as credenciais
- [ ] O sistema deve impedir acesso a usuários não autenticados
- [ ] O sistema deve identificar o perfil do usuário após o login
 
### Vínculo com Requisitos
- **RF11:** O sistema deve possuir um login de usuários com e-mail e senha durante a fase de protótipo.
- **RF20:** O sistema deve permitir a existência de diferentes usuários (no mínimo três camadas: SEDEF, Conselho Estadual/Secretárias, público geral)

### Vínculo com Telas do Protótipo 
-

---