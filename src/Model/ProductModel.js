const mongose = require('mongoose');
const DataSchema= mongose.Schema({

    ProductName:{type:String},
    ProductCode:{type:String},
    ProductImg:{type:String},
    ProductPrice:{type:String},
    ProductQnt:{type:String},
    TotalPrice:{type:String},
    CreateDate:{type:Date,default:Date.now()},
    
},
{versionKey:false}
);

const ProductModel=mongose.model('products',DataSchema);
module.exports= ProductModel;