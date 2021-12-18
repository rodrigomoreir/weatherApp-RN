# Desafio React Native - Wit Software - Rodrigo Moreira

Este documento `README.md` tem como objetivo fornecer as informações necessárias para execução do projeto Weather, desenvolvido por Rodrigo Moreira em Teste para Empresa Wit Software.

---

### Objetivo ###

* Avaliar o candidato para uma vaga de Desenvolvedor React Native

### Dependências utilizadas

## Navegação
* "@react-navigation/native": "^6.0.6" -> Navegação
* "@react-navigation/native-stack": "^6.2.5" -> Navegação
* "@react-navigation/stack": "^6.0.11" -> Navegação
* "react-native-gesture-handler": "^2.1.0"

## API
* "axios": "^0.24.0",

## Geral
* "date-fns": "^2.27.0",
* "lottie-ios": "3.2.3",
* "lottie-react-native": "^5.0.1",
* "react": "17.0.2",
* "react-native-appearance": "^0.3.4" -> Auxilio em DarkMode e LightMode
* "react-native-screens": "^3.10.1",
* "styled-components": "^5.3.3"
* "react-native": "0.66.3"
* "react-native-reanimated": "^2.3.1" -> Animações e reanimações
* "react-native-safe-area-context": "^3.3.2" -> SafeArea para manter caracteristicas visuais do smartphone

### Executando o Projeto

* Após clonar o Projeto, acessar a pasta e rodar um 'yarn' no terminal para instalar todas as dependências do Projeto.
* Logo após, se estiver executando o projeto no emulador de ios, acessar a pasta 'ios' com $ cd ios, e rodar 'pod install' (necessário o cocoapods), retorna a pasta raiz do projeto e executa um 'yarn ios'. Caso esse processo não funcione, basta abrir o projeto pelo xcode
clicar no Play para gerar a build.
* Caso seja no emulador android, o processo é automático, então so rodar 'yarn android'.
* O projeto irá rodar e estará pronto para usabilidade.

### Passo a passo

# Home
Na tela de Home é possivel visualizar a listagem das cidades e alguns dados de clima. Assim também como é possível filtrar as cidades.

# Detalhes
Após pressionar algum card, o usuário será redirecionado para a tela de Detalhes, nesta teremos mais informações detalhadas sobre o clima
da cidade assim também como uma ilustração do clima atual através de uma animação.

# Dark Mode and Light Mode
Por padrão, o projeto provavelmente será executado em Light Mode, ao modificar a configuração do celular para o Modo Noturno, a aplicação
se adaptará para o modo noturno também, mantendo as essências de cores e UI. A aplicação se adapta a opção do usuário no dispositivo.


### Considerações Finais

Gostaria de agradecer a oportunidade de ser avaliado por esse Desafio Técnico, pois aprendi ainda mais, que é o meu principal objetivo como desenvolvedor, assim como melhorar minhas habilidades.
Além disso, foi ótimo para que eu pudesse visualizar de uma melhor maneira os pontos que preciso dar mais atenção para me desenvolver de forma mais saudável.

No mais, aguardo feedback!

Obrigado.
Rodrigo Moreira
