var faker = require('faker');
var type_img = [{
  type: 'Mexican',
  url: 'http://previews.123rf.com/images/pxhidalgo/pxhidalgo1209/pxhidalgo120900200/15468017-traditional-mexican-food-Stock-Photo.jpg'
},
{
  type: 'Mexican',
  url: 'http://previews.123rf.com/images/magone/magone1410/magone141000039/32318450-Chicken-taco-Mexican-food-Stock-Photo-food.jpg'
},
{
  type: 'Mexican',
  url: 'http://thumb101.shutterstock.com/display_pic_with_logo/105328/105328,1330322040,13/stock-photo-tacos-on-a-platter-with-tortillas-mexican-food-96158756.jpg'
},
{
  type: 'Mexican',
  url: 'http://img1.10bestmedia.com/Images/Photos/234172/736256-10151168033211717-335977969-o_54_990x660_201404241606.jpg'
},
{
  type: 'American',
  url: 'http://img1.10bestmedia.com/Images/Photos/234172/736256-10151168033211717-335977969-o_54_990x660_201404241606.jpg'
},
{
  type: 'American',
  url: 'http://ghk.h-cdn.co/assets/cm/15/11/54ffec52236b6-cheeseburger-lgn.jpg'
},
{
  type: 'American',
  url: 'https://www.waiter.com/blog/wp-content/uploads/2015/06/hamburger.jpg'
},
{
  type: 'American',
  url: 'http://cook-wise.com/wp-content/uploads/parser/american-food-cuisine-2.jpg'
},
{
  type: 'Italian',
  url: 'http://i.huffpost.com/gen/935109/images/o-ITALIAN-FOOD-RECIPES-PASTA-facebook.jpg'
},
{
  type: 'Italian',
  url: 'http://www.eonline.com/eol_images/Entire_Site/2014121/rs_1024x759-140221164026-1024.italian-wine-food-fusili-dolcetto.jpg'
},
{
  type: 'Italian',
  url: 'https://media-cdn.tripadvisor.com/media/photo-s/05/80/e9/95/bob-s-italian-food-imports.jpg'
},
{
  type: 'Italian',
  url: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2015/8/7/1/FN_Italian-Favorites-Opener_s4x3.jpg'
},
{
  type: 'Chinese',
  url: 'http://asianliving.me/wp-content/uploads/2010/06/crystaljade_4.jpg'
},
{
  type: 'Chinese',
  url: 'http://www.jadeinnchinesefood.com/1.jpg'
},
{
  type: 'Chinese',
  url: 'http://pictures.food.com/api/file/gpcRqESQQZGx9GUrVljG-IMG_0704.jpg/convert?loc=/pictures.food.com/recipes/38/74/8/uXUajHqyRq0TEyO7rfDX_IMG_0704.jpg'
},
{
  type: 'Chinese',
  url: 'http://i2.cdn.turner.com/cnnnext/dam/assets/150203151301-chinese-food-lanzhou-hand-pulled-noodles-super-169.jpg'
}];
var i = 0
function changeI() {
  type_img.splice(i, 1);
  i = Math.floor(Math.random() * type_img.length);
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restaurants').insert({name: 'qDoba', type: type_img[i].type, description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: type_img[i].url, avg_review: (knex('reviews').avg('rating').where('restaurant_id', 1))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: type_img[i].type,
        description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: type_img[i].url, avg_review: (knex('reviews').avg('rating').where('restaurant_id', 2))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: type_img[i].type, description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: type_img[i].url, avg_review: (knex('reviews').avg('rating').where('restaurant_id', 3))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: type_img[i].type, description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: type_img[i].url, avg_review: (knex('reviews').avg('rating').where('restaurant_id', 4))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: type_img[i].type, description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: type_img[i].url, avg_review: (knex('reviews').avg('rating').where('restaurant_id', 5))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: type_img[i].type, description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: type_img[i].url, avg_review: (knex('reviews').avg('rating').where('restaurant_id', 6))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: type_img[i].type, description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: type_img[i].url, avg_review: (knex('reviews').avg('rating').where('restaurant_id', 7))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: type_img[i].type, description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: type_img[i].url, avg_review: (knex('reviews').avg('rating').where('restaurant_id', 8))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: type_img[i].type, description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: type_img[i].url, avg_review: (knex('reviews').avg('rating').where('restaurant_id', 9))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: type_img[i].type, description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: type_img[i].url, avg_review: (knex('reviews').avg('rating').where('restaurant_id', 10))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: type_img[i].type, description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: type_img[i].url, avg_review: (knex('reviews').avg('rating').where('restaurant_id', 11))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: type_img[i].type, description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: type_img[i].url, avg_review: (knex('reviews').avg('rating').where('restaurant_id', 12))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: type_img[i].type, description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: type_img[i].url, avg_review: (knex('reviews').avg('rating').where('restaurant_id', 13))})
      ]);
    });
};
