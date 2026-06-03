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

### Vínculo com Requisitos 
- **RF03:** O sistema deve permitir o monitoramento contínuo das tarefas/indicadores (ex: percentual concluído, status: não iniciada, em andamento, concluída)
- **RF08:** O sistema deve manter um histórico de todas as atualizações feitas em uma tarefa, permitindo ver a evolução.
- **RF16:** O sistema deve exibir gráficos de progresso para cada indicador.


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