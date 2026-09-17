// Names, flavours and base prices transcribed from menu_page_1/2.jpg.
// Hazelnut Bar's price is readable in theme_board_1.jpg and supplied brief.
export const MENU_CATEGORIES = [
  ['all', 'All'], ['koshari', 'Koshari'], ['salankatiya', 'Salankatiya'],
  ['ruh-hayathi', 'Ruh Hayathi'], ['arrivals', 'New Arrivals'], ['classics', 'Egyptian Classics'], ['cakes', 'Cakes'],
].map(([id, label]) => ({ id, label }));
export const MENU_SIZES = [{label:'Regular',price:0},{label:'Large',price:60},{label:'Family',price:150}];
// Reuse the existing product-detail and bowl-builder upgrade prices.
export const MENU_EXTRAS = [
  {id:'pistachio',name:'Extra Pistachio',price:50}, {id:'nutella',name:'Extra Nutella',price:40},
  {id:'lotus',name:'Extra Lotus',price:40}, {id:'kinder',name:'Kinder',price:40}, {id:'crunch',name:'Extra Crunch',price:45},
];
const bowl = (category, flavor, cell, rank, badge = '') => ({
  id: `${category}-${flavor.toLowerCase().replaceAll(' ', '-')}`, name: `${category === 'koshari' ? 'Koshari' : category === 'salankatiya' ? 'Salankatiya' : 'Ruh Hayathi'} ${flavor}`,
  category, flavor, price: category === 'ruh-hayathi' ? 380 : 350, currency:'₹', rank, badge,
  description: `${category === 'koshari' ? 'Creamy layers, a generous crunch' : category === 'salankatiya' ? 'Our signature creamy dessert' : 'A little love in every creamy spoonful'}, finished with ${flavor === 'Trio' ? 'pistachio, Nutella and Lotus' : flavor.toLowerCase().replaceAll(' ', ' and ')}.`,
  ingredients: flavor === 'Trio' ? ['Pistachio','Nutella','Lotus'] : flavor.split(' '),
  imageAsset:'bowls', imageCell:cell, imageType:category === 'salankatiya' ? 'salankatia' : category === 'ruh-hayathi' ? 'ruh-hayati' : 'koshari',
  sizes:MENU_SIZES, extras:MENU_EXTRAS, allergens:['Milk','Nuts','Wheat'],
});
const bowls = [
  bowl('koshari','Trio',1,1,'Bestseller'), bowl('salankatiya','Pistachio Nutella',4,2,'Popular'), bowl('ruh-hayathi','Pistachio Nutella',6,3,'Signature'),
  bowl('koshari','Pistachio Lotus',2,4), bowl('salankatiya','Pistachio Lotus',4,5), bowl('ruh-hayathi','Pistachio Lotus',7,6),
  bowl('koshari','Nutella Lotus',2,7), bowl('koshari','Kinder Nutella',0,8), bowl('koshari','Pistachio Nutella',0,9),
  bowl('salankatiya','Nutella Lotus',5,10), bowl('salankatiya','Kinder Nutella',3,11), bowl('salankatiya','Trio',4,12),
  bowl('ruh-hayathi','Nutella Lotus',8,13),
];
const arrivalInfo = [
  ['hazalnut-bar','Hazelnut Bar',380,0,'A little chocolate, a little crunch. Your new favourite treat to take along.',['Hazelnut','Chocolate']],
  ['lawzi-creme','Lawzi Creme',380,1,'A generous boxed treat with creamy layers and a rich, nutty finish.',['Almond','Cream']],
  ['le-zip-de-paris','Le Zip De Paris',390,2,'A beautifully boxed dessert made for slow spoons and sweet celebrations.',['Chocolate','Cream']],
  ['fazea-chocola-cake','Fazea Chocola Cake',390,3,'Rich chocolate cake, a creamy centre and a generous chocolate finish.',['Chocolate','Cake']],
];
export const MENU_ARRIVALS = arrivalInfo.map(([id,name,price,imageCell,description,ingredients],i)=>({id,name,price,imageCell,description,ingredients,category:'arrivals',imageAsset:'arrivals',imageType:id,currency:'₹',rank:30+i,badge:'New',sizes:[MENU_SIZES[0]],extras:[],allergens:['Milk','Nuts','Wheat'],releaseOrder:4-i}));
// Existing menu photography is framed without cropping the bowls or packaging.
const otherInfo = [
  ['kabsa','Kabsa',380,'classics',[533,258,146,97],['Crunch','Cream']],
  ['creme-de-la-creme','Creme de la Creme',380,'classics',[304,253,146,102],['Cream','Chocolate']],
  ['lazy-cat','Lazy Cat',290,'cakes',[624,77,108,104],['Chocolate','Biscuit']],
  ['al-mazia','Al Mazia',250,'classics',[532,80,100,100],['Cream']],
  ['cheese-bomb','Cheese Bomb',290,'classics',[443,67,98,111],['Cheese','Chocolate']],
  ['louah-nutella-pistachio-kinder',"Loua’h Nutella Pistachio Kinder",350,'classics',[222,67,105,113],['Nutella','Pistachio','Kinder']],
  ['louah-chocolate-kinder',"Loua’h Chocolate Kinder",350,'classics',[334,70,108,110],['Chocolate','Kinder']],
  ['hebba-kinder','Hebba Cake Kinder',350,'cakes',[773,90,111,101],['Kinder','Cake']],
  ['hebba-pista','Hebba Cake Pista',350,'cakes',[885,88,122,105],['Pistachio','Cake']],
  ['hebba-nutella','Hebba Cake Nutella',350,'cakes',[890,253,119,106],['Nutella','Cake']],
  ['hebba-belgium','Hebba Cake Belgium Chocolate',390,'cakes',[776,246,111,110],['Chocolate','Cake']],
  ['layalee-strawberry','Layalee Valvet Strawberry',320,'cakes',[257,473,156,111],['Strawberry','Cream']],
  ['layalee-raffaello','Layalee Valvet Raffaello',320,'cakes',[431,474,160,114],['Raffaello','Cream']],
  ['mango-fusion','Mango Fusion',380,'classics',[619,460,132,132],['Mango','Cream']],
];
const others=otherInfo.map(([id,name,price,category,imageCrop,ingredients],i)=>({id,name,price,category,imageCrop,ingredients,description:`Discover ${name}, a little more happiness from our Egyptian dessert menu.`,imageAsset:'classics',imageType:id,currency:'₹',rank:40+i,badge:'',sizes:[MENU_SIZES[0]],extras:[],allergens:['Milk','Nuts','Wheat']}));
export const MENU_PRODUCTS = [...bowls,...MENU_ARRIVALS,...others];
export const money = (value) => `₹${value.toLocaleString('en-IN')}`;
