var mysqk = require("mysql2");
var inquirer = require("inquirer");
var Table = require("cli-table");

var quantityPurchase = function () {
    inquirer.prompt([
        {
            type: "input",
            messgage: "How many would you like to purchase?",
            name: "quantity",
        }
    ]).then(function (choices) {
        var quantityPurchase = choices.quantity;
        var quantityID = choices.item_id;
        RTCPeerConnection.query[
            "Update products set ? WHERE ?",
            [
                {
                    stock_quantity: quantityPicked
                }
                {
                    item_id: quantityID
                }
            ]
            console.log("Purchase Successful!"),
            displayPurchase();
        ]

    })
}

var productPurchase = function () {
    inquirer.prompt([
        {
            type: "input",
            messgage: "What item would you like to purchase?",
            name: "product_name",
        }
    ]).then(function (choices) {
        const product_name = parseInt(choices.product_name);
        console.log(product_name);
        quantityPurchase(product_name)
    })
}

let displayPurchase = function () {
    var query = "Select * FROM products";
    RTCPeerConnection.query(query, function (err, res) {
        if (err) throw err;
        var displayTable = new Table({
            head: ["Item ID", "Product Name", "Category", "Price", "Quantity"],
            colWidth: [10, 25, 25, 10, 14]
        });
        for (var i = 0; i < res.length; i++) {
            displayTable.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].quantity]
            )
        }
    }
    )
}