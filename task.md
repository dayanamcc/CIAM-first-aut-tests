Principalmente es hacerte con el framework de cucumber para la automatización front-end de las diferentes Webs de CIAM y la plataforma de CMT:
·         Aprender la estructura de Cucumber.js
·         Aprender el lenguaje Gherkin
·         Aprender patrones de diseño, concretamente PageObject pattern: http://www.assertselenium.com/automation-design-practices/page-object-pattern/
·         Aprender librería de unitesting (Junit), assertions(Chaijs).
·         Aprender la sintaxis de Cucumber: https://github.com/cucumber/cucumber/wiki/Gherkin

Nuevo Proyecto de automatizacion:
        Create un Nuevo proyecto en el Cucumber framework. Llamalo CIAM_first_aut_tests
        Crea un esqueleto que recoja estos test cases como parte de un test suits
        Test cases, preconditions, steps, evaluación de resultados
        Prepara los diferentes escenarios básicos para automatizar siguiente la convención de Gherkin (Given, When, Then..)

         Register a new user  
         Login a user
         Unsucessfull login with invalid Username
         Edit your password or any user field

### Documentar problemas, conflictos y pasos que has ido realizando
- nuestro proyecto /CIAM-first-aut-test, funciona en windows/unix/mac. (los pasos de la configuracion estan en el README.md)
- Aunque actualmente la version de cucumber es la 2.0, la version de cucumber compatible con WebdriverIO@lastest es cucumber 1.3.1 (que casualmente es la misma version de cucumber que usan en el proyecto /UITestFramework)
- firefox no funciona con las librerias/versiones actuales de wdio (estudiando el porque), sin embargo tenemos Chrome y Phantomjs para la ejecucion de los test.
- Aprender librería de unitesting (Junit) <--creo que es mejor que usemos mocha, porque es facil instalar, usar en proyectos tipo Node.js. El proyecto Nesspreso tambien usa Mocha. [Mocha](https://github.com/mochajs/mocha) ,  [ExampleMocha](https://mochajs.org/#assertions) /   (he visto que Jnit se usa en: Elipse/Maven, /Grandle, pero no he visto como configurar Junit (java) en proyectos NodeJs)
- Assertions(Chaijs) (ya esta integrado al proyecto, falta usar sus muchas bondades)
- Dudas técnicas proyecto Nesspreso: ¿Porque la carpeta /bussiness object encapsula el Browser si luego vuelven a pasar el browser a los PageObject.?
- Como se desean los reportes? se van a cargar en Jira automaticamente? de momento estan en carpeta /reports  usando reporter Junit de Wdio  



### Tecnologías a mejoras y discutir
- La Librería GRUNT tiene muchas bondades referente a ejecucion de tareas de JS (ahora nesspreso usa Gulp).
- Las siguientes folders y archivos aun no se han agregado:      
  /Nesspresso.js    
  /BussinessObject  <-- estoy entendiendo su proposito tecnico.
- En un futuro, una vez tengamos toda la estructura funcionado,  podriamos mirar para tener maquinas virtuales y ejecutar los test bajo estos entornos, Mirar la capacidad de insertar [Docker](https://www.docker.com/)
contras: interesante de probar Docker cuando nos den laptop de nestle.


## Tareas pendientes:
  - Acabar los test automation (1/3)
  - Agregar resto de librerias y hacer uso de ellas
  - Terminar de traspasar el codigo (preguntar dudas tecnicas de la carpeta /BussinessObject)
  - Seguir con el Exploratory testing en las paginas (1h al menos cada dia)
  - JavaScript


### Librerías restantes por insertar en el proyecto
(he ido integrando las librerias a medida que las he ido necesitando y entendiendo su uso)


   "app-module-path": "2.1.0",      // importar carpetas dentro del proyecto     
   "bluebird": "3.4.6",             // promise()              
   "faker": "3.1.0",                // generador de datos fake
   "grunt": "0.4.5",                // Grunt: es un automatizador de tareas script   
   "grunt-cli": "1.2.0",         
   "grunt-contrib-clean": "1.0.0",      
   "grunt-mkdir": "1.0.0",      
   "grunt-mocha-istanbul": "5.0.2",         
   "grunt-mocha-test": "0.13.2",    //A grunt task for running server side mocha tests    
   "grunt-webdriver": "2.0.2",
   "istanbul": "0.4.5",             //code coverage reporting [tool](http://www.clock.co.uk/blog/npm-module-code-coverage-in-2-simple-steps)      
   "jscs": "3.0.7",                 // enable rules JS code
   "merge": "1.2.0",                // Merge multiple objects into one      
   "mocha": "3.1.2",                // UNIT testing framework
   "sinon": "1.17.6",               // Standalone test spies, stubs and mocks for JavaScript.     
   "sinon-as-promised": "4.0.2",      
   "sinon-chai": "2.8.0",     
   "winston": "2.3.0"                    //a multi-transport async logging library


## Hacer exploratory testing de las webs (Purina y NestleBaby) al menos 1h cada día y documentar Bugs
