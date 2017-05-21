
var express = require('express'),
    app = express();
var mongoose = require('mongoose');
var Scheme = mongoose.Schema();

mongoose.connect('mongodb://localhost/myappdatabase');

var userSchema = new Schema({
    name: String,
    username: {type: String, required: true, unique: true}
    password: {type: String, require:true; unique: false}
    admin: Boolean,
    created_at: Date,
    updated_at: Date
});

var User = mongoose.model('User' ,userSchema);

userScehma.methods.test = function()
{
    this.name = this.name + "haha";
    return this.name;
};



module.exports = User;

//Express 4
app.use(express.static(__dirname + '/'));

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           data = customers[i];
           break;
        }
    }  
    res.json(data);
});

app.get('/customers', function(req, res) {
    res.json(customers);
    //res.json(500, { error: 'An error has occurred!' });
});

app.get('/orders', function(req, res) {
    var orders = [];
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].orders) {
            for (var j=0,ordersLen=customers[i].orders.length;j<ordersLen;j++) {
                orders.push(customers[i].orders[j]);   
            }
        }
    }  
    res.json(orders);
});

app.delete('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           customers.splice(i,1);
           data = { status: true };
           break;
        }
    }  
    res.json(data);
});


app.listen(8080);

console.log('Express listening on port 8080');

var customers = [
            {
                id: 1, 
                joined: '2000-12-02', 
                name:'John', 
                city:'Chandler', 
                orderTotal: 9.9956,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 9.9956,
                        images: "images/shoes.jpg"
                    }
                ]
            }, 
            {
                id: 2, 
                joined: '1965-01-25',
                name:'Zed', 
                city:'Las Vegas', 
                orderTotal: 19.99,
                orders: [
                    {
                        id: 2,
                        product: 'Baseball',
                        total: 9.995,
                        images: "images/baseball.png"
                    },
                    {
                        id: 3,
                        product: 'Bat',
                        total: 9.995,
                        images: "images/bat.jpg"
                    }
                ]
            },
            {
                id: 3, 
                joined: '1944-06-15',
                name:'Tina', 
                city:'New York', 
                orderTotal:44.99,
                orders: [
                    {
                        id: 4,
                        product: 'Headphones',
                        total: 44.99,
                        images: "images/headphones.png"

                    }
                ]
            }, 
            {
                id: 4, 
                joined: '1995-03-28',
                name:'Dave', 
                city:'Seattle', 
                orderTotal:101.50,
                orders: [
                    {
                        id: 5,
                        product: 'Kindle',
                        total: 101.50,
                        images: "images/kindle.png"
                    }
                ]
            }
        ];        