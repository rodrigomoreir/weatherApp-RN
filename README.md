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


## Executando o Projeto / running the project

* Após clonar o Projeto, acessar a pasta e rodar um 'yarn' no terminal para instalar todas as dependências do Projeto.
* Logo após, se quiser executar o projeto no emulador de iOS, acessar a pasta 'ios' com $ cd ios, e rodar 'pod install' (necessário o cocoapods), retorna a pasta raiz do projeto e executa um 'yarn ios'. Caso esse processo não funcione, basta abrir o projeto pelo xcode e clicar no Play para gerar a build e iniciar o projeto.
* Caso seja no emulador android, o processo é automático, então so rodar 'yarn android'.
* O projeto irá iniciar e estará pronto para uso.

* After cloning the Project, access the folder and run a 'yarn' in the terminal to install all the Project's dependencies.
* Afterwards, if you want to run the project in the iOS emulator, access the 'ios' folder with $ cd ios, and run 'pod install' (cocoapods needed), return the project root folder and run a 'yarn ios' . If this process doesn't work, just open the project through xcode and click on Play to generate the build and start the project.
* If using the android emulator, the process is automatic, so just run 'yarn android'.
* The project will start and be ready to use.


## Passo a passo / Step by Step

### Home
Na tela de Home é possivel visualizar a listagem das cidades e alguns dados de clima. Assim também como é possível filtrar as cidades.

On the Home screen it is possible to view the list of cities and some weather data. Just as it is possible to filter the cities.

### Detalhes / Details
Após pressionar algum card da cidade, o usuário será redirecionado para a tela de Detalhes, nesta teremos mais informações detalhadas sobre o clima
da cidade assim também como uma ilustração do clima atual através de uma animação.

After pressing any city card, the user will be redirected to the Details screen, on this we will have more detailed information about the weather
of the city as well as an illustration of the current climate through an animation.

### Dark Mode and Light Mode
Os diferentes modos de UI foram pensados na preferência do usuário, portanto ao modificar a configuração do celular para o Modo Noturno, a aplicação
se adaptará também ao modo noturno, mantendo as essências de cores e UI. Se o usuário preferir o modo claro, a aplicação se adaptará ao modo claro.

The different UI modes were thought of the user's preference, so when modifying the phone's configuration to Night Mode, the application
will also adapt to night mode, keeping the color essences and UI. If the user prefers bright mode, the application will adapt to bright mode.


## Considerações Finais / Final considerations

Gostaria de agradecer a oportunidade de ser avaliado por esse Desafio Técnico, pois aprendi ainda mais, que é o meu principal objetivo como desenvolvedor, assim como melhorei minhas habilidades.
Além disso, foi ótimo para que eu pudesse visualizar os pontos que preciso dar mais atenção para me desenvolver de forma mais saudável.

No mais, aguardo feedback!

Obrigado.
Rodrigo Moreira

I would like to thank you for the opportunity to be evaluated for this Technical Challenge, as I learned even more, which is my main objective as a developer, as well as improving my skills.
Also, it was great for me to be able to visualize the points that I need to pay more attention to in order to develop in a healthier way.

If nothing else, I await feedback!

Thanks.
Rodrigo Moreira
