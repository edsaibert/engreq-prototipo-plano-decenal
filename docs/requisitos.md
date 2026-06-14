# Documento de Requisitos Funcionais e não Funcionais

---

# Requisitos Funcionais

## RF01

**Descrição:** O sistema deve permitir que o usuário visualize os 23 problemas públicos, cada um vinculado a um Compromisso Decenal da criança e adolescente

## RF02

**Descrição:** O sistema deve permitir a visualização hierárquica de: Público alvo ➔ Compromisso ➔ Objetivo ➔ Linhas de Ação ➔ Tarefas

## RF03

**Descrição:** O sistema deve permitir o monitoramento contínuo das tarefas/indicadores (ex: percentual concluído, status: não iniciada, em andamento, concluída)

## RF04

**Descrição:** O sistema deve permitir que o usuário faça buscas no sistema para a exibição das informações correspondentes. (palavra-chave, Responsável, eixos do Plano Decenal, Compromisso)

## RF05

**Descrição:** O sistema deve permitir que o usuário aplique filtros (ex. compromisso, indicador, período de tempo, responsável) para a exibição das informações do sistema.

## RF06

**Descrição:** O sistema deve disponibilizar funcionalidade de exportação (Excel, CSV, PDF) dos dados de monitoramento de um conjunto filtrado.

## RF07

**Descrição:** O sistema deve mostrar quando foi feita a última atualização dos dados dos indicadores.

## RF08

**Descrição:** O sistema deve manter um histórico de todas as atualizações feitas em uma tarefa, permitindo ver a evolução.

## RF09

**Descrição:** O sistema deve possuir um painel de administrador, para acesso exclusivo do administrador, que possibilite elevar ou reduzir permissões de usuários e controlar o acesso às funcionalidades do sistema de acordo com o perfil do usuário.

## RF10

**Descrição:** O sistema deve fornecer um modo de alto contraste para os usuários.

## RF11

**Descrição:** O sistema deve possuir um login de usuários com e-mail e senha durante a fase de protótipo.

### RF11.2

**Descrição:** O sistema deve possuir um login de usuários com login .gov quando for entregue.

## RF12

**Descrição:** O sistema deve fornecer, para usuários autorizados, a possibilidade de inserção de problemas, compromissos, objetivos, etc via interface gráfica.

## RF13

**Descrição:** O sistema deve registrar e armazenar ações dos usuários que podem alterar o estado do sistema

## RF14

**Descrição:** EXCLUÍDO

## RF15

**Descrição:** EXCLUÍDO

## RF16

**Descrição:** O sistema deve exibir gráficos de progresso para cada indicador.

## RF17

**Descrição:** O sistema deve permitir que o usuário filtre gráficos de indicadores por ano.

## RF18

**Descrição:** O sistema deve diferenciar visualmente indicadores por seu respectivo tipo (% e média)

## RF19

**Descrição:** O sistema deve exibir o Responsável Principal e os Colaboradores para cada Ação.

## RF20

**Descrição:** O sistema deve permitir a existência de diferentes usuários (no mínimo três camadas: SEDEF, Conselho Estadual/Secretárias, público geral)

## RF21

**Descrição:** O sistema deve permitir, para usuários autorizados, o carregamento de dados por meio de planilhas.

## RF22

**Descrição:** O sistema deve permitir, para usuários autorizados, a alteração de dados por meio da interface do sistema.

## RF23

**Descrição:** EXCLUÍDO

---


# Requisitos Não Funcionais

## RNF01 

**Descrição:**  interface deve ser acessível conforme os princípios do Design Universal, incluindo contraste adequado, configuração de tamanho da fonte e suporte a leitores de tela

## RNF02 

**Descrição:** O sistema deve ser responsivo (adequado para desktop, tablet e dispositivos móveis).

## RNF03 

**Descrição:** O sistema deve ter capacidade de armazenamento para guardar dados de pelo menos 10 anos.

## RNF04 

**Descrição:** O sistema deve garantir a integridade dos dados exportados (Excel/PDF/CSV), sem perda de informações ou formatações incorretas.

## RNF05 

**Descrição:** O sistema deve ser documentado utilizando documentação viva, mostrando quais mudanças aconteceram, por que elas aconteceram, permitindo entender o sistema todo a partir da documentação.

## RNF06 

**Descrição:**  O design e a experiência devem ser minimamente semelhantes à interface do Conselho Estadual da Criança e do Adolescente.

## RNF07 

**Descrição:** O sistema deve suportar a inserção de um número arbitrário (grande) de dados.

## RNF08 

**Descrição:** O sistema deve encerrar a sessão do usuário automáticamente após 30 minutos de inatividade.

## RNF09

**Descrição:** O sistema deve aplicar medidas de segurança nos dados inseridos.

## RNF10

**Descrição>** O sistema deve utilizar Tokens JWT para aumentar a segurança.

---
