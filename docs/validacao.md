# Validação das Telas Implementadas

## Objetivo

Validar as telas implementadas em `prototipo/telas/` com base na documentação escrita em `/docs/`

## Validação por tela

Atualmente, todas as telas foram implementadas de forma `parcial`, já que o protótipo não exibe persistência de dados ou implementa componentes.

| Tela | Requisitos Relacionados | Validação | Evidência observada | Observações |
|------|----------------------------------------|----------|---------------------|-------------|
| `login.html` | RF11 | Parcial | Formulário | O login está representado visualmente, mas não há autenticação real, geração de JWT ou login `.gov.br`. |
| `inicial.html` | RF01, RF03, RF04, RF05, RF06, RF16, RF17, RF18 | Parcial | Lista de problemas públicos, busca, filtros, cards de indicadores | A navegação principal existe, mas a exportação é simulada e não há filtro por ano nem diferenciação por tipo de indicador. |
| `hierarquia.html` | RF02, RF07, RF08, RF19 | Parcial | Estrutura hierárquica de problema público, compromisso, objetivo, linha de ação, tarefas, responsáveis, colaboradores | A hierarquia está presente, porém sem integração com dados reais. |
| `historico.html` | RF08 | Parcial | Linha do tempo com data, hora, autor e descrição da alteração | O histórico existe como visualização, mas não há auditoria real, detalhamento por grupo ou governança. |
| `gerenciamento-usuarios.html` | RF09, RF20 | Parcial | Lista de usuários, filtros, edição de perfil e permissões | O painel administrativo está representado, mas não executa efetivamente elevação/redução de permissões nem validações de acesso. |

## Lacunas de Implementação dos Casos de Uso

- `UC01 - Criar Plano Decenal`: não há tela de cadastro;
- `UC02 - Editar Estrutura do Plano Decenal`: a edição está disponível na interface, apenas a visualização do conteúdo;
- `UC05 - Cadastrar Indicador`: não existe formulário específico para criação de indicadores nem vínculo com objetivo ou tarefa;
- `UC06 - Modificar Dados do Indicador`: o protótipo exibe os indicadores, mas ainda não permite edição dos seus dados;
- `UC08 - Importar Planilha de Dados`: não há fluxo de upload;
- `UC11 - Solicitar Novos Acessos`: não foi implementada uma tela de solicitação de acesso para usuários;
- `UC14 - Excluir do Plano Decenal`: não é possível excluir Plano Decenal no protótipo.


## Lacunas de Implementação dos Requisitos

## Lacunas de Documentação

## Histórico de Requisitos Alterados