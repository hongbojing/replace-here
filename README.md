# replace-here Template :scorpius: :six_pointed_star:
This is a project with the basic setting including a node server + angular basic concept + simple mongodb + simple api, I'll use this project to test my daily angular work.

![image](https://img.shields.io/badge/version-1.0.0-yellowgreen.svg)
![image](https://img.shields.io/badge/license-MIT-brightgreen.svg)

Go to this [link](http://shields.io/) to add **badge**

Go to this [link](http://www.emoji-cheat-sheet.com/) to add **EMOJI**
## Installation
1. **npm install**
    * To install all the dependencies in the package.json file
    * Test server installation: **nodemon server.js**
2. **sudo npm install -g bower**
    * Install bower : the package management library
3. **bower install**
    * run this command to install all the libraries that you declare in the *bower.json* file.
    * I use this simple command because I already indicate in the *bower.json* file that I need *angularJS* *angularJS route* *angularJS animate* *bootstrap* and *jquery* in this project, if you want to install other libraraies you want, you can run this: **bower install _package-name_ --save**, we already have a *.bowerrc* file to set the directory for the project, where we will install the libraries.
4. **sudo npm install -g gulp**
    * Install the task runner globally so that we have access to it across our project.
5. **npm install gulp --save-dev**
    * Also we need to install gulp in our project dependencies
6. **gulp(need to be changed here)**
    * Since I already have all the gulp plugins I need in the *package.json* file, and I have run the **npm install** to install all of them. I don't need to install seperately anymore.
    * All the tasks are defined in the *gulpfile.js* file, you can find more information in its comment

## Usage_notification
TODO_Write_usage_instructions
## Contributing
1. [Hongbo Jing](https://github.com/hongbojing)
2. name_bb

## License
MIT license
