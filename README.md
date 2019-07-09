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

## Key Topics
* MySQL Workbench
* MySQL command prompt
* Creating and dropping databases and tables
* schema.sql and seeds.sql files
* CRUD
* Primary and foreign keys
* Prepared statements
* Joins
* ACID

1. What is CRUD? ..CRUD is REST protocol .."In a REST environment, CRUD often corresponds to the HTTP methods POST, GET, PUT, and DELETE, respectively. These are the fundamental elements of a persistent storage system."

   "Create — This would consist of a function which we would call when a new library book is    being added to the catalog."
      - POST
   "Read — This would consist of a function which would be called to see all of the books        currently in the catalog."
      - GET
   "Update — There should be a function to call when information about a book must be            changed."
      - PUT
   "Delete — There should be a function to call to remove a library book from the catalog."
      - DELETE

   (https://www.codecademy.com/articles/what-is-crud)
   
2. What is ACID? 

3. How does one join data between tables? 66
