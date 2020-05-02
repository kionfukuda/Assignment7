/* eslint linebreak-style: ["error", "windows"] */

const { getDb, getNextSequence } = require('./db.js');

async function get(_, { id }) {
  const db = getDb();
  const product = await db.collection('products').findOne({ id });
  return product;
}

async function list() {
  const db = getDb();
  const products = await db.collection('products').find({}).toArray();
  return products;
}

async function add(_, { product }) {
  const db = getDb();

  const newProduct = Object.assign({}, product);
  newProduct.id = await getNextSequence('products');
  
  const result = await db.collection('products').insertOne(newProduct);
  const savedProduct = await db.collection('products')
    .findOne({ _id: result.insertedId });
  return savedProduct;
}

async function update(_, { id, changes }) {
  const db = getDb();
  if (changes.title || changes.status || changes.owner) {
    const product = await db.collection('products').findOne({ id });
    Object.assign(product, changes);
    validate(product);
  }
  await db.collection('products').updateOne({ id }, { $set: changes });
  const savedProduct = await db.collection('products').findOne({ id });
  return savedProduct;
}

async function remove(_, { id }) {
  const db = getDb();
  const product = await db.collection('products').findOne({ id });
  if (!product) return false;
  product.deleted = new Date();

  let result = await db.collection('deleted_products').insertOne(product);
  if (result.insertedId) {
    result = await db.collection('products').removeOne({ id });
    return result.deletedCount === 1;
  }
  return false;
}

async function counts() {
  const db = getDb();
  const results = await db.collection('products').aggregate([ { $group: { _id: null, count: { $sum: 1 } } }]).toArray();
  var stats;
  results.forEach((result) => {
    // eslint-disable-next-line no-underscore-dangle
    stats = result.count;
  });
  return stats;
}

module.exports = {
  list,
  add,
  get,
  update,
  delete: remove,
  counts,
};