#steps to configure project

git init  
npm init  
npm install webdriverio --save-dev  
.\node_modules\.bin\wdio config     
on my local machine     
  cucumber      
  Yes install fw adapter (wdio-cucumber-framework)      
  Yes to the feature path folder      
  yes to def_step folder path     
  select reporter Junit     
  select to add services: selenium-standalone & phantomJS     
  select verbose      
  select default screen-shot folder

create folder /feature/documentacion.feature



#To run your tests, execute:   
npm run selenium   
npm test

#Run Selenium manually   
open wdio.conf.js and edit:   
services: ['phantomjs']   
run: .\node_modules\.bin\selenium-standalone

#Run test manually
```shell
$ .\node_modules\.bin\wdio wdio.conf.js

#devDependencies
npm install  --save-dev cucumber@1.3.1      
npm install  --save-dev selenium-webdriver      
  ```

#Debug test     
  .\node_modules\.bin\wdio repl chrome


#Notes
- Firefox dont works with Wdio, use instead phantomJS or Chrome
- WebdriverIO uses SeleniumStandalone and its not BDD
- Cucumber (current @v2.0.1)  
Compatibility: WebdriverIO 4.5.2 --(wdio-cucumber-framework)-- cucumber 1.3.1
- Nightwatch  
Compatibility : Nightwatch + (Nightwatch-cucumber-framework) + cucumber 1.2.2


#TODO:

- Read improvements of Cucumber 2.0 vs 1.3.1
- [Unitesting FW](https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript) --> Mocha, JavaScript test framework running on node.js
- For Assertions: Chaijs (done)
