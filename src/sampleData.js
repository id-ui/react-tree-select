export const nodes = [
  {
    label: 'Cake',
    value: 'Cake',
    childNodes: [
      {
        label: 'Chocolate',
        value: 'Chocolate',
      },
      {
        label: 'Vanilla',
        value: 'Vanilla',
      },
      {
        label: 'Strawberry',
        value: 'Strawberry',
      },
    ],
  },
  {
    label: 'Drink',
    value: 'Drink',
    childNodes: [
      {
        label: 'Coffee',
        value: 'Coffee',
        childNodes: [
          {
            label: 'Cappuccino',
            value: 'Cappuccino',
          },
          {
            label: 'Latte',
            value: 'Latte',
          },
          {
            label: 'Americano',
            value: 'Americano',
          },
        ],
      },
      {
        label: 'Hot Chocolate',
        value: 'HotChocolate',
      },
      {
        label: 'Tea',
        value: 'Tea',
        childNodes: [
          {
            label: 'Green',
            value: 'Green',
          },
          {
            label: 'Herbal',
            value: 'Herbal',
          },
          {
            label: 'Black',
            value: 'Black',
            childNodes: [
              {
                label: 'With Sugar',
                value: 'WithSugar',
              },
              {
                label: 'Without Sugar',
                value: 'WithoutSugar',
              },
            ],
          },
        ],
      },
      {
        label: 'Milk Cocktail',
        value: 'MilkCocktail',
        childNodes: [
          {
            label: 'Vanilla',
            value: 'VanillaCocktail',
          },
          {
            label: 'Chocolate',
            value: 'ChocolateCocktail',
          },
          {
            label: 'Strawberry',
            value: 'StrawberryCocktail',
          },
          {
            label: 'Banana',
            value: 'BananaCocktail',
          },
        ],
      },
      {
        label: 'Hot Milk',
        value: 'HotMilk',
      },
    ],
  },
];
