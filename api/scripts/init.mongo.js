/* eslint linebreak-style: ["error", "windows"] */
/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:

 * Atlas:
 *   mongo mongodb+srv://kfukuda:qi941211@freecluster-qs5ar.mongodb.net/productlist scripts/init.mongo.js
 */

/* global db print */
/* eslint no-restricted-globals: "off" */

db.products.remove({});

const productDB = [
  {
    id: 1,
    category: 'Shirts',
    name: 'DressShirt',
    price: 45,
    image: 'https://slimages.macysassets.com/is/image/MCY/products/4/optimized/8133814_fpx.tif?op_sharpen=1&wid=402&hei=489&fit=fit,1&$filtersm$&fmt=webp',
  },
  {
    id: 2,
    category: 'Jackets',
    name: 'FieldCoat',
    price: 139,
    image: 'https://cdni.llbean.net/is/image/wim/187059_888_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2',
  },
];

db.products.insertMany(productDB);
const count = db.products.count();
print('Inserted', count, 'products');

db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });

db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ category: 1 });
db.products.createIndex({ name: 1 });
db.products.createIndex({ price: 1 });
