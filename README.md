# Angular4-cli-boilerplate
This repository provides a clean slate installation of Angular 4 app generated based on angular-cli 1.0. After several tries to get a working angular application based on angular-cli, I've finally created a working app. I decided to keep it as boilerplate so that I can kick start a new project in few seconds.

## Prerequisites

Node.js and npm are essential to Angular development. 
   
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.

**Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher. Verify that you are running at least node `v6.9.x` and npm `3.10.x`** by running `node -v` and `npm -v` in a terminal/console window.

## Install Python 2.7.x version

During installing npm packages I found that Python was being required at some point, the installation process looks for C:\Python27. So you need to install the Python 2.7.x. You can get it from <a href="https://www.python.org/downloads/release/python-2712" target="_blank" title="Installing Node.js and updating npm">here</a>

## Installation 
Make sure you have installed the prerequisites before you proceed to setup angular-cli. To get angular cli use following command:

```shell
npm install -g @angular/cli
```
Clone this repo into new project folder (e.g., `my-proj`).

```shell
git clone https://github.com/mutanttech/angular4-cli-boilerplate  my-proj
cd my-proj
```
I have included the node_modules in this repository but in zipped format, thus you need to go inside the node_modules directory and extract node_modules1.zip and node_modules2.zip here. You can delete the zip's after extraction. After everything is setup now you are ready to run your first angular 4 app, just open a git bash or command prompt from inside the repo directory and run following command:

```shell
ng serve -o

if by chance the port 4200 is already taken on your computer then run following command providing a port number in place of XXXX

ng serve -o --port XXXX
```

This should run the app on http://localhost:4200 or whatever port you use at http://localhost:XXXX and display the message app works!
