calc-node
=========
scaffolded the app using Yoeman.
Leveraging ember, handlebar templates,mocha testing frameworks.
 
To run the calc-node app:

1)copy  calc-node dir and its contents. (github URL:https://github.com/PeruManivel/calc-node)
2)calc-node dir contains grunt related modules. 
If not please install grunt using the following command.

/calc-node>>yo ember

After the installation, please run the app using the following command :

#!bash
>>grunt serve

This will show the calculator application and its functionalities.

-----------------------------------------------------------------------------------

To Install ember (follow this process if required)

((Ruby and Python installation and  the env vars to be set  may be required to proceed))

Installing Yeoman

To install Yeoman and the generators for an Ember application, simply run:

#!bash
>>npm install -g yo
>>npm install -g generator-ember

This will install the current version of Yeoman (rc1) and the Ember generators (0.5.9)


Creating The Ember.js App

Create a new directory for the application and switch into it:

#!bash
>>mkdir calc-node
>>cd calc-node


Say yes to the  options:


Following this, Yeoman will scaffold out an Ember app and automatically install its required dependencies by running bower install and npm install.

Once this is done,  run

#!bash
grunt server

-----------------------------------------------------------------------------------