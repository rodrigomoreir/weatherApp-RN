# Desafio React Native / React Native Challenge - Wit Software - Rodrigo Moreira

Este documento `README.md` tem como objetivo fornecer as informações necessárias para execução do projeto Weather, desenvolvido por Rodrigo Moreira em Teste para Empresa Wit Software.

This `README.md` document aims to provide the necessary information for the execution of the Weather project, developed by Rodrigo Moreira in Test for Wit Software Company.

## Objetivo / Objective

* Avaliar o candidato para uma vaga de Desenvolvedor React Native.

* Evaluate the candidate for a React Native Developer position.


## Dependências do projeto / Project dependencies

### Navegação / Navigation
* "@react-navigation/native": "^6.0.6" -> Navegação
* "@react-navigation/native-stack": "^6.2.5" -> Navegação
* "@react-navigation/stack": "^6.0.11" -> Navegação
* "react-native-gesture-handler": "^2.1.0"

### API
* "axios": "^0.24.0",

### Geral / General
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


## Executando o Projeto / Running the project

* Após clonar o Projeto, acessar a pasta e rodar um 'yarn' no terminal para instalar todas as dependências do Projeto.
* Logo após, se quiser executar o projeto no emulador de iOS, acessar a pasta 'ios', com '$ cd ios', e rodar 'pod install' (necessário o cocoapods). Em seguida, retornar a pasta raiz do projeto e executar um 'yarn ios'. Caso esse processo não funcione, basta abrir o projeto pelo xcode e clicar no Player para gerar a build e iniciar o projeto.
* Caso seja no emulador android, o processo é automático, então basta rodar 'yarn android'.
* O projeto irá iniciar e estará pronto para uso.

* After cloning the Project, access the folder and run a 'yarn' in the terminal to install all the Project's dependencies.
* Afterwards, if you want to run the project in the iOS emulator, access the 'ios' folder, with '$ cd ios', and run 'pod install' (cocoapods needed). Then return the project root folder and run a 'yarn ios'. If this process doesn't work, just open the project through xcode and click on the Player to generate the build and start the project.
* If using the android emulator, the process is automatic, so just run 'yarn android'.
* The project will start and be ready to use.


## Passo a passo / Step by Step

### Home
Na tela de Home é possivel visualizar a listagem das cidades e alguns dados de clima. Além disso, é possível filtrar as cidades.

On the Home screen it is possible to view the list of cities and some weather data. Furthermore, it is possible to filter the cities.

### Detalhes / Details
Após pressionar algum card da cidade, o usuário será redirecionado para a tela de Detalhes. Nesta teremos mais informações detalhadas sobre o clima da cidade, como também uma ilustração do clima atual através de uma animação.

After pressing any city card, the user will be redirected to the Details screen. In this we will have more detailed information about the city's weather, as well as an illustration of the current weather through an animation.

### Dark Mode and Light Mode
Os diferentes modos de UI foram pensados na preferência do usuário. Portanto, ao modificar a configuração do celular para o Modo Noturno, a aplicação se adaptará, mantendo a essência das cores e UI. Se o usuário preferir o modo claro, a aplicação se adaptará igualmente.

The different UI modes were designed according to the user's preference. Therefore, when changing the phone's configuration to Night Mode, the application will adapt, keeping the essence of colors and UI. If the user prefers the clear mode, the application will adapt accordingly.

### Tests
Foram implementados testes com Jest, incluindo snapshots. Para rodar os testes, so rodar o comando
'yarn test'. Para atualizar os Snapshots, roda 'yarn test -u'.

Tests with Jest were implemented, including snapshots. To run the tests, just run the command
'yarn test'. To update the Snapshots, run 'yarn test -u'.

### Reports
- Dia 14/12: 2 horas
  - 21:30 às 23:30: Criação do projeto, primeira tela e rotas

- Dia 15/12: 4 horas
  - 08:40 às 09:30: Criação do WeatherCard
  - 18:40 às 21:50: Requisição, exibição da lista e tratamento dos dados.

- Dia 16/12: 5 horas e 30min
  - 19:00 às 00:30: Correção de dados, segunda tela e ajustes em layout

- Dia 17/12: 5 horas
  - 21:00 às 02:00: Finalização do Layout, Animações do app

- Dia 18/12: 3 horas 30min
  - 15:30 às 19:00: Ajustes finais, icone, splashscreen, testes unitários com Jest

- Dia 19/12: 30min
  - 00:30 às 01:00: Finalização dos testes unitários

- Total de horas de desenvolvimento: 20 horas e 30 minutos

## Considerações Finais / Final considerations

Gostaria de agradecer a oportunidade de ser avaliado por esse Desafio Técnico, pois aprendi ainda mais (que é um dos meus principais objetivos como desenvolvedor), assim como aperfeiçoei minhas habilidades.

Aguardo feedback!

Obrigado.
Rodrigo Moreira

I would like to thank you for the opportunity to be evaluated for this Technical Challenge, as I learned even more (which is one of my main goals as a developer) as well as honed my skills.

Waiting feedback!

Thanks.
Rodrigo Moreira
