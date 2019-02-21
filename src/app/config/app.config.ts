import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig = {
  routes: {
    shopping: 'shopping',
    error404: '404'
  },
  endpoints: {
    productsBaseUrl: 'https://api.shutterstock.com',
    productsGetPath: '/v2/images/search'
  },
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/AlexOrd/vntu_a17_2019',
  defultSHContent:
    '[{"id":"257450194","name":"Курячий салат з листових овочів і вишневий томат",' +
    '"imgUrl":"https://image.shutterstock.com/display_pic_with_logo/236329/257450194/stock-photo-chicken-salad' +
    '-with-leaf-vegetables-and-cherry-tomatoes-257450194.jpg","description":"Курячий салат з листових овочів' +
    ' та томати"},{"id":"548526682","name":"Пасхальний пиріг на білому тлі","imgUrl":"https://ima' +
    'ge.shutterstock.com/display_pic_with_logo/2675854/548526682/stock-photo-easter-cake-on-a-white-background' +
    '-548526682.jpg","description":"Пасхальний пиріг на білому тлі"},{"id":"591617762","name":"Шоколаднi яйця' +
    ' exploded","imgUrl":"https://image.shutterstock.com/display_pic_with_logo/685426/591617762/stock-photo-cho' +
    'colate-egg-exploded-591617762.jpg","description":"Шоколаднi яйця експортовi"},{"id":"525754399","name":"Пакет' +
    ' молока надкорисний","imgUrl":"https://image.shutterstock.com/display_pic_with_logo/371512/52575439' +
    '9/stock-photo-glass-of-milk-isolated-on-white-525754399.jpg","description":"Пакет молока на бiлому' +
    'тлi"},{"id":"629596088","name":"Хліб та хлібобулочні вироби, ізольовані на білому. ...","imgUrl":"https://i' +
    'mage.shutterstock.com/display_pic_with_logo/3011495/629596088/stock-photo-bread-and-bakery-products-isola' +
    'ted-on-white-different-types-of-bread-sesame-bun-baguette-baked-629596088.jpg","description":"Хлiб' +
    'та випiчка власного виробництва. Різні види хліба: кунжутна булочка, багет, запечені булочки, сільський,' +
    'простий былий та чорний."}]'
};
