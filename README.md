# bamazon

**Bamazon ?**
  This program works in your terminal. It will intake commands and variables and spit out some info!
  Here is a link to see the node app in action:
      
  
 **How does it work ?**
  - open BAMAZON folder in your terminal
  
  - download .. in order please (: ..
      npm install init
      npm init for (JSON package)
      npm install inquirer
      npm i -g nodemon
      npm install mysql
      
      MUST DO SEQUENTIAL!!!
      
      1. mysql -u root -p
      2. enter your password
      3. source seeds.sql
      4. exit .. wait to see when prompted "bye"
      5. nodemon bamazon.js
      6. connection should be listening.. if NOT .. make sure you put in your password correctly 
         in the .env file
      
      
  - create a .env .. copy and paste inside file .. replace with YOUR keys
      # HIDDEN keys

      CONNECTION_ID=___your__key__no__spaces__
  
  - create a .gitinore .. copy and paste ..
      node_modules
      .DS_Store
      .env
  
  - testing in terminal .. nodemon bamazon.js  .. and you will be prompted
        
  
**What's Inside ?**

Key tools I used in this project was:
  - Switch case
  - Inquirer prompt
  - Importing SQL data
  - Updating SQL file in JS file
  - Creating local server
  - .gitignore
  - .env
  - the use of npm
