# Angular4-cli-boilerplate
This repository provides a clean slate installation of Angular 4 app generated based on angular-cli 1.0. After several tries to get a working angular application based on angular-cli, I've finally created a working app. I decided to keep it as boilerplate so that I can kick start a new project in few seconds.

## Prerequisites

Node.js and npm are essential to Angular development. 
   
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.

**Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher. Verify that you are running at least node `v6.9.x` and npm `3.10.x`** by running `node -v` and `npm -v` in a terminal/console window.

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
I have not included the node_modules in this repository thus you need to get them first. After the cloning is done run following command using git bash or command prompt. You need to be inside the main folder where you have cloned the repo. You 
 
```shell
npm install

After node modules are installed. Then run

ng serve -o
```

This should run the app on http://localhost:4200 and display the message app works!
