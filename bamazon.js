


var inquirer = require("inquirer");

//-------------CONNECTING MY SQL--------------

var mysql = require('mysql');

var connection = mysql.createConnection({

    host:'localhost',
    port:3306,
    user:'root',
    password:'nst032596',
    database: 'bamazon_db'
});

connection.connect( function (err) {

    if (err) throw err;
    console.log('connected as id:' + connection.threadId );
    //run function start
    start();

});


//-------------CONNECTING MY SQL--------------

function start() {

    inquirer
        .prompt([
            {
                name:"IDproduct",
                type:"list",
                message:"What is the product's id you'd like to purchase?",
                choices: ["Dog brush","Cat brush","Hair brush","Hair pins","Crop cold shoulder blouse: RED","Crop cold shoulder blouse: BLUE", "Flamingo button up: WHITE","Floral button up: NAVY","Chelsea Boot: BEIGE","Clear pointed heels","Duo sponge 6 pack"]
            },
            {
                name:"buyQuantity",
                message:"How much would you like to buy?",
                type:"number"
            }
        ])
        .then( function(answer,err) {

            if (err) throw err ('INSUFFICIENT STOCK.. sorry');

            //------------------switch case ---------------

        
            var operation = answer.IDproduct;
            // Switch statement chooses operation based on the operation parameter.
            switch (operation) {
            case "Dog brush":
                var x = "Dog brush";
                var buyQuan = answer.buyQuantity;
                getQuantity(x, buyQuan);
              break;
            case "Cat brush":
                var x = "Cat brush";
                var buyQuan = answer.buyQuantity;
                getQuantity(x, buyQuan); 
              break;
            case "Hair brush":
                var x = "Hair brush";
                var buyQuan = answer.buyQuantity;
                getQuantity(x, buyQuan);
              break;
            case "Hair pins":
                var x = "Hair pins";
                var buyQuan = answer.buyQuantity;
                getQuantity(x, buyQuan);
              break;
            case "Crop cold shoulder blouse: RED":
                var x = "Crop cold shoulder blouse: RED";
                var buyQuan = answer.buyQuantity;
                getQuantity(x, buyQuan);
              break ;
            case "Crop cold shoulder blouse: BLUE":
                var x = "Crop cold shoulder blouse: BLUE";
                var buyQuan = answer.buyQuantity;
                getQuantity(x, buyQuan);
              break;
            case "Flamingo button up: WHITE":
                var x = "Flamingo button up: WHITE";
                var buyQuan = answer.buyQuantity;
                getQuantity(x, buyQuan);
              break;
            case "Floral button up: NAVY":
                var x = "Floral button up: NAVY";
                var buyQuan = answer.buyQuantity;
                getQuantity(x, buyQuan);
              break;
            case "Chelsea Boot: BEIGE":
                var x = "Chelsea Boot: BEIGE";
                var buyQuan = answer.buyQuantity;
                getQuantity(x, buyQuan);
              break;
            case "Clear pointed heels":
                var x = "Clear pointed heels";
                var buyQuan = answer.buyQuantity;
                getQuantity(x, buyQuan);
              break;
            case "Duo sponge 6 pack":
                var x = "Duo sponge 6 pack";
                var buyQuan = answer.buyQuantity;
                getQuantity(x, buyQuan);
              break;
            default:
              // Handle anything that isn't specified
              result = "ERROR...";
            }

            //-----------------switch case -----------------

        })



}

function getQuantity (x, buyQuan) {
    var productName = x;
    var quantity = parseInt(buyQuan) ;

    var query = "SELECT stock_quantity FROM products WHERE ?";
    connection.query(query, {product_name: x}, function(err, res) {
        if( err) throw err;

        //console logging table of prouct chosen
        var newQuantity = res[0].stock_quantity - quantity;
        console.log(newQuantity, "quantity");        

        if(res[0].stock_quantity > quantity) {

            console.log("----------------------")
            console.log("BEFORE BUY : ")
            connection.query( "SELECT products.item_id, products.product_name, products.department_name, products.price, products.stock_quantity FROM products WHERE ?",{ product_name : productName }, function(err,res) {
                if (err) throw err;
                console.log("")
                console.table(res)
            });
                            /// update table "products".... set __ where ____
            connection.query( "UPDATE products  SET ? WHERE ?",
                [
                    {
                        stock_quantity : newQuantity
                    },
                    {
                        product_name : productName  
                    }
                ],
                function(err,res) {
                if (err) throw err;
                console.log("")
                console.log("AFTER BUY : ")
                connection.query( "SELECT products.item_id, products.product_name, products.department_name, products.price, products.stock_quantity FROM products WHERE ?",{ product_name : productName }, function(err,res) {
                    if (err) throw err;
                    console.log("")
                    console.table(res)
                });


            });
            
        }
    });
}