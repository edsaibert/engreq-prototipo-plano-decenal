# Documento de entregas feitas na semana-1 (versão 1 do sistema)

## Escopo

Esse é um sistema de monitoramento de compromissos decenais da criança e adolescente. O sistema deverá permitir o acompanhamento de problemas públicos, compromissos, objetivos, linhas de ação, tarefas e indicadores, incluindo funcionalidades de busca, filtros, controle de usuários, exportação de dados, histórico de alterações e visualização de progresso.

## Atores

Inicialmente, há 4 atores no sistema: admin, que será o root megablaster com maior autoridade sobre o sistema; SEDEF, que será responsável por distribuir as permissões entre os tipos de perfis e atribuir perfis aos usuários; Conselho/Secretaria, que será responsável por carregar dados dentro do sistema; por último, o público geral, que será todo usuário não cadastrado que utiliza o sistema apenas para visualização de dados. Dentro de público geral, há todo tipo de usuário que tem permissão apenas de leitura.

## Requisitos

Inicialmente, todos os requisitos pelo cliente foram escritos em "@/docs/requisitos.md". No entanto, após minuciosa análise por parte do time de desenvolvimento com o cliente, foram elencadas 11 inconsistências nos requisitos, que serão detalhadas abaixo:

*RF01:* Erro de digitação por parte do cliente ("adolescentel" -> "adolescente).

*RF02:* Alteração da visualização hierárquica (Ob. -> Lin. -> Tar.) -> (Público alvo -> Compromisso -> Ob. -> Lin. -> Tar.)

*RF07*: Há ambiguidade quando é dito "[..] atualização dos dados", então, será alterado para "[..] atualização dos dados dos indicadores"

*RF09:* igual ao RF15, então RF15 marcado com flag de exclusão.

*RF11:* Falta informações sobre o login de usuários, então, em conversa com o cliente, foi acordado que: 1) durante a fase de protótipo, a autenticação deverá ocorrer por meio de EMAIL + SENHA. 2) quando o sistema já estiver em produção(uso),a autenticação deverá ocorrer por meio do .gov

*RF14:* Esse requisito é não funcional, então será escrito como RNF09.

*RF15:* igual ao RF09, então esse requisito será marcado com flag de exclusão

*RF18:* Há espaço para dúvida quando se dizer "respectivo tipo", quais são esses tipos? então, o cliente informou que é o tipo de dados, sendo % e média.

*RF23:* Esse requisito é não funcional, então ele será transformado no RNF10.

*RNF05:* "bem documentado" é uma expressão muito vaga pois depende do que cada um entende por bem documentado, por isso, será redigido apontando documentação viva

*RNF07:* "grande" é um termo vago, assim cono no RNF05, depende da interpretação de cada um, então, em contato com o cliente, foi acordado que o número grande de dados será referente a todos os munícipios paranaenses.

Após a identificação de tais inconsistências, os requisitos foram alterados.

## Outras coisas

Além disso, durante a primeira semana, o grupo se encontrou para a discussão sobre as inconsistências e também criou o repositório no github, definindo bem qual será o gitflow da aplicação durante seu desenvolvimento. 