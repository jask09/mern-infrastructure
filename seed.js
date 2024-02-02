require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Smooth Jazz Wash', sortOrder: 10},
        {name: 'Items', sortOrder: 20},
        {name: 'Membership', sortOrder: 30},
      ]);

      await Item.deleteMany({});
  const items = await Item.create([
    {name: 'The Works', category: categories[0], price: 7.00},
    {name: 'Super Duper', category: categories[0], price: 15.00},
    {name: 'Super Wash', category: categories[0], price: 20.00},
    {name: 'Air Freshners', category: categories[1], price: 2.99},
    {name: 'Towel', category: categories[1], price: 5.50},
    {name: 'Sponge', category: categories[1], price: 10.00},
    {name: 'Spray Air Freshner', category: categories[1], price: 5.00},
    {name: 'Monthly', category: categories[2], price: 20.00},
    {name: 'Annual', category: categories[2], price: 60.00},
  ]);

      console.log(items)

      process.exit();
    
    })();