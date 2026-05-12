// Luigi's American Breakfast — Full Menu Data
// Restructured from the printed menu for fast, scannable on-screen reading.
// Pricing and descriptions match the in-restaurant menu exactly.

export type MenuItem = {
  name: string;
  price?: string;
  description?: string;
  badge?: "popular" | "house-specialty" | "new";
};

export type MenuSubSection = {
  title?: string;
  note?: string;
  items: MenuItem[];
};

export type MenuSection = {
  id: string;
  title: string;
  blurb?: string;
  note?: string;
  subsections: MenuSubSection[];
};

export type MenuGroup = {
  id: string;
  title: string;
  tagline: string;
  sections: MenuSection[];
};

export const menu: MenuGroup[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    tagline: "Served all day, 8 AM to 3 PM.",
    sections: [
      {
        id: "three-egg",
        title: "Three-Egg Breakfasts",
        note:
          "Includes 3 eggs and 1 slice of toast (country white, wheat, rye, sourdough). Add $0.25 for biscuit or English muffin. Choice of hash browns, O'Brien red potato, fruit, or pancakes.",
        subsections: [
          {
            items: [
              { name: "Three Egg Breakfast", price: "$15.99", description: "Eggs any style." },
              { name: "Sausage Links & Eggs", price: "$18.99", description: "Three 2-oz pork sausage links." },
              { name: "Bacon & Eggs", price: "$18.99", description: "Three thick \u00bc strips of center-cut bacon." },
              { name: "Chicken Fried Steak 6oz & Eggs", price: "$18.99", description: "Topped with country sausage gravy." },
              { name: "Italian Sausages & Eggs", price: "$18.99", description: "Two large Italian sausages.", badge: "house-specialty" },
              { name: "Carne Asada & Eggs", price: "$23.99", description: "10 oz flank steak, marinated in spices, charbroiled. Prepared in our own butcher shop." },
              { name: "Ribeye Steak 10oz & Eggs", price: "$24.99", description: "USDA choice, charbroiled and finished in seasoned butter." },
              { name: "Grilled Salmon 6oz & Eggs", price: "$18.99", description: "Grilled salmon with fresh lemon & tartar." },
              { name: "Full Cut Premium Ham & Eggs", price: "$18.99", description: "Cut 8oz ham, eggs any style." },
              { name: "Corned Beef Hash & Eggs", price: "$18.99", description: "Our special recipe — made fresh in house." },
              { name: "Greek Gyros & Eggs", price: "$18.99", description: "3 strips of beef and lamb gyros." },
              { name: "Huevos Rancheros & Eggs", price: "$18.99", description: "Chorizo, pinto beans, served on tortilla." },
              { name: "Mexican Mixed Grill & Eggs", price: "$23.99", description: "Carne asada, chorizo link & chicken charbroiled." },
              { name: "New York Steak 10oz & Eggs", price: "$24.99", description: "USDA choice, charbroiled and finished in seasoned butter." },
            ],
          },
        ],
      },
      {
        id: "omelettes",
        title: "Omelettes",
        note:
          "4-egg omelettes cooked frittata or classic style. Includes 1 slice of toast (white, wheat, rye, sourdough). Add $0.25 for biscuit or English muffin. Choice of hash browns, O'Brien red potato, fruit, or pancakes.",
        subsections: [
          {
            items: [
              { name: "Cheese Omelette", price: "$14.99", description: "Choice of cheddar, swiss, or American. Add $1 for Greek feta." },
              { name: "Chef's Omelette", price: "$17.99", description: "Ham, onion, mushrooms & cheddar cheese." },
              { name: "Everything Omelette", price: "$18.99", description: "Ham, bacon, hash browns, green pepper & onion. Topped with melted cheese. Served with seasonal fresh fruit." },
              { name: "Hawaiian Omelette", price: "$17.99", description: "Ham, pineapple & mozzarella cheese." },
              { name: "Cheese & Meat Omelette", price: "$16.99", description: "Choice of cheddar, swiss, or American. Choice of ham, sausage, or bacon." },
              { name: "Denver Omelette", price: "$17.99", description: "Ham, onion, green peppers & cheddar cheese." },
              { name: "House Omelette", price: "$17.99", description: "Fresh spinach, mushrooms, onion & cheese." },
              { name: "Veggie Omelette", price: "$17.99", description: "Tomato, mushrooms, green pepper, onion, spinach and cheddar cheese." },
            ],
          },
        ],
      },
      {
        id: "scrambles",
        title: "Scrambles",
        note:
          "4-egg scrambles served with 1 slice of toast (white, wheat, rye, sourdough). Add $0.25 for biscuit or English muffin. Choice of hash browns, O'Brien red potato, fruit, or pancakes.",
        subsections: [
          {
            items: [
              { name: "Shrimp Scramble", price: "$17.99", description: "Bay shrimp, onion, spinach & cheddar cheese." },
              { name: "Belltown Scramble", price: "$18.99", description: "Ham, bacon, sausage, mushrooms, onion & cheddar cheese." },
              { name: "California Scramble", price: "$18.99", description: "Bacon, tomato, onion, cheddar cheese with fresh avocado." },
              { name: "Acapulco Scramble", price: "$18.99", description: "Homemade chorizo link, green pepper, tomato, onion & cheddar cheese." },
              { name: "Lox Scramble", price: "$18.99", description: "Smoked lox with onion, cilantro, tomato & cream cheese." },
              { name: "Veggie Scramble", price: "$18.99", description: "Spinach, tomatoes, mushrooms, onions, green bell peppers and Greek feta cheese." },
              { name: "Italian Lover's Scramble", price: "$18.99", description: "Sweet Italian sausage, spinach, onions, mushrooms & parmesan cheese.", badge: "house-specialty" },
              { name: "Farmhand Scramble", price: "$19.99", description: "Ham, bacon, sausage links, and sautéed vegetables over hashbrowns." },
            ],
          },
        ],
      },
      {
        id: "favorites",
        title: "Luigi's Favorites",
        subsections: [
          {
            items: [
              { name: "Theo's Avocado Toast", price: "$17.99", description: "Whole wheat with fresh avocado spread & Greek feta cheese. 2 eggs any style, choice of 2 bacon or 2 link, with hash browns, O'Brien red potato, fruit, or pancakes." },
              { name: "Special Biscuits & Gravy", price: "$17.99", description: "2 country-style biscuits smothered with our country sausage gravy, 3 eggs any style, choice of 2 bacon or 2 sausage links, and 1 choice of hashbrowns, O'Brien red potato, or fruit." },
              { name: "Breakfast Burrito", price: "$18.99", description: "Choice of carne asada or chorizo sausage, scrambled eggs, onion, green pepper in a flour tortilla. 1 choice of hash browns, O'Brien red potato, or fruit.", badge: "popular" },
            ],
          },
        ],
      },
      {
        id: "waffles-pancakes",
        title: "Waffles, Pancakes & French Toast",
        subsections: [
          {
            items: [
              { name: "Belgian Waffle & Meats", price: "$14.99", description: "Thick buttermilk waffle. Choice of 2 bacon, 2 links, or country pork patty." },
              { name: "Waffle & Fresh Strawberries", price: "$18.99", description: "Served with fresh-cut strawberries topped with our fresh Devonshire cream. Choice of 2 bacon, 2 links, or country pork patty." },
              { name: "Chocolate Chip Pancakes", price: "$15.99", description: "With powdered sugar & fresh Devonshire cream. Choice of 2 bacon, 2 links, or country pork patty." },
              { name: "French Toast & Meats", price: "$14.99", description: "3 slices with powdered sugar. Choice of 2 bacon, 2 links, or country pork patty." },
              { name: "Pancake Combo", price: "$17.99", description: "2 buttermilk pancakes. Choice of 2 bacon, 2 links, or country pork patty." },
              { name: "Pancake & Meats", price: "$14.99", description: "2 large buttermilk pancakes. Choice of 2 bacon, 2 links, or country pork patty." },
              { name: "Blueberry Pancakes", price: "$15.99", description: "With powdered sugar & fresh Devonshire cream. Choice of 2 bacon, 2 links, or country pork patty." },
              { name: "French Toast Combo", price: "$16.99", description: "3 slices with powdered sugar, 2 eggs any style, choice of bacon, 2 links, or country pork patty." },
            ],
          },
        ],
      },
      {
        id: "swedish",
        title: "Swedish Pancakes",
        blurb:
          "Our house specialty. Batter made in-house with the freshest ingredients from a treasured family recipe. Served with our fresh Devonshire cream & jam.",
        subsections: [
          {
            items: [
              { name: "Swedish Pancakes", price: "$14.99", description: "Just 3 Swedish pancakes.", badge: "house-specialty" },
              { name: "Swedish Pancakes & Meats", price: "$16.99", description: "3 Swedish pancakes. Choice of 2 thick bacon, 2 sausage links, or 1 country pork patty." },
              { name: "Swedish Pancake Combo", price: "$18.99", description: "3 Swedish pancakes with 2 eggs any style. Choice of 2 thick-cut bacon, 2 links, or 1 country pork patty." },
            ],
          },
        ],
      },
      {
        id: "benedicts",
        title: "Eggs Benedicts",
        blurb:
          "Two soft-poached eggs on an English muffin with our hollandaise sauce. Choice of hash browns, O'Brien red potatoes, or fruit.",
        subsections: [
          {
            items: [
              { name: "Eggs Benedict", price: "$17.99", description: "With sliced premium pit ham." },
              { name: "Irish Eggs Benedict", price: "$17.99", description: "With homemade corned beef piled high." },
              { name: "Country Eggs Benedict", price: "$17.99", description: "Country pork patty topped with country sausage gravy." },
              { name: "Lox Eggs Benedict", price: "$19.99", description: "4 oz salmon lox with cilantro, tomatoes, and capers." },
              { name: "Veggie Eggs Benedict", price: "$17.99", description: "Grilled tomatoes, spinach & fresh avocado." },
              { name: "California Eggs Benedict", price: "$18.99", description: "Bacon, tomato slices, & fresh avocado." },
              { name: "Chorizo Eggs Benedict", price: "$18.99", description: "Homemade chorizo sausage with fresh avocado." },
              { name: "Salmon Eggs Benedict", price: "$19.99", description: "6 oz grilled salmon." },
            ],
          },
        ],
      },
      {
        id: "senior-children",
        title: "Senior & Children Breakfast",
        note:
          "Only for patrons age 60 & over, and for children 12 years old & younger. Add $1.50 extra for orders by patrons of ages in between.",
        subsections: [
          {
            items: [
              { name: "Mini Breakfast", price: "$13.99", description: "1 egg any style, choice of 2 bacon or 2 sausage, with ½ order of hashbrown and 1 slice of toast." },
              { name: "Mini Eggs Benedict", price: "$13.99", description: "½ English muffin, ham, 1 soft-poached egg, hollandaise, with ½ order of hashbrown." },
              { name: "Mini Biscuits & Gravy", price: "$13.99", description: "1 biscuit with country sausage gravy, 1 egg any style & ½ order of hashbrowns. Choice of 2 bacon or 2 links." },
              { name: "Mini Cheese Scramble", price: "$13.99", description: "2 fresh scrambled eggs & cheddar cheese. Choice of ham, bacon, or links. ½ order of hashbrowns and 1 slice of toast." },
              { name: "Mini Pancake Plate", price: "$13.99", description: "1 large buttermilk pancake, 1 egg any style. Choice of 2 bacon strips or 2 sausage links." },
              { name: "Mini French Toast", price: "$13.99", description: "1 thick slice of French toast with powdered sugar, 1 egg any style. Choice of 2 bacon or 2 sausage." },
            ],
          },
        ],
      },
      {
        id: "breakfast-sides",
        title: "Breakfast Sides",
        subsections: [
          {
            items: [
              { name: "2 Biscuits & Country Sausage Gravy", price: "$9.50" },
              { name: "3 Strips of Thick Center-Cut Bacon", price: "$6.75" },
              { name: "3 Sausage Links", price: "$6.75" },
              { name: "2 Pork Patties", price: "$6.75" },
              { name: "Premium Cut Smoked Ham Steak", price: "$7.50" },
              { name: "3 Pieces Center-Cut Beef Gyros Meat", price: "$7.50" },
              { name: "Hash Brown", price: "$5.75" },
              { name: "O'Brien Red Potato", price: "$5.75" },
              { name: "1 Egg", price: "$2.95" },
              { name: "2 Eggs", price: "$4.95" },
              { name: "English Muffin", price: "$3.25" },
              { name: "Biscuits", price: "$3.25" },
              { name: "Peanut Butter", price: "$1.95" },
              { name: "Country Sausage Gravy", price: "$4.50" },
              { name: "Fresh Avocado (whole)", price: "$4.50" },
              { name: "Devonshire Cream", price: "$5.75" },
              { name: "Hollandaise Sauce", price: "$3.50" },
              { name: "Fresh Fruit", price: "$5.75" },
              { name: "Fresh Strawberries", price: "$6.75" },
              { name: "Cinnamon Roll", price: "$4.75" },
              { name: "Salsa", price: "$1.95" },
              { name: "Sour Cream", price: "$1.95" },
              { name: "Greek Pita Bread", price: "$3.50" },
              { name: "Chiles Toreados", price: "$4.50" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    tagline: "Available daily — on weekends after noon.",
    sections: [
      {
        id: "burgers",
        title: "Burgers",
        note: "Served on a potato bun with 1 choice of: french fries, onion rings, or garden salad.",
        subsections: [
          {
            items: [
              { name: "Deluxe Cheeseburger", price: "$16.99", description: "Mayonnaise, lettuce, tomato, onion & American cheese." },
              { name: "California Burger", price: "$17.99", description: "Mayonnaise, lettuce, fresh tomato, sliced avocado, onions, and American cheese." },
              { name: "California Chicken Burger", price: "$17.99", description: "Lightly seasoned grilled chicken breast with mayonnaise, lettuce, tomato, onions, & sliced avocado." },
              { name: "Hawaiian Chicken Burger", price: "$17.99", description: "Lightly seasoned grilled chicken breast. Swiss cheese, mayonnaise, onion, lettuce, and pineapple." },
              { name: "Mushroom Swiss Burger", price: "$17.99", description: "Mayonnaise, lettuce, mushrooms, and swiss cheese." },
              { name: "Bacon Cheeseburger", price: "$18.99", description: "Mayonnaise, lettuce, tomato, onion, American cheese & bacon." },
              { name: "Burger Dip", price: "$17.99", description: "Ground beef round with swiss cheese on a French roll. Served with au jus." },
              { name: "Patty Melt", price: "$15.99", description: "Ground beef round with grilled onions, thousand island, & swiss cheese on rye bread." },
              { name: "Hawaiian Cheeseburger", price: "$16.99", description: "American cheese, mayonnaise, onion, lettuce, and pineapple." },
            ],
          },
        ],
      },
      {
        id: "hot-sandwiches",
        title: "Hot Sandwiches",
        note: "Served with choice of French fries, onion rings, potato salad, or fresh fruit.",
        subsections: [
          {
            items: [
              { name: "Philly Cheesesteak", price: "$18.99", description: "Grilled roast beef, onions, green peppers with mozzarella cheese on French roll." },
              { name: "The Superbird", price: "$16.99", description: "Grilled chicken breast, ham, & mozzarella cheese on a French roll." },
              { name: "French Dip", price: "$16.99", description: "Thin-sliced roast beef on a French roll. Served with au jus or BBQ." },
              { name: "Reuben Sandwich", price: "$17.99", description: "Corned beef, swiss cheese, sauerkraut, thousand island, & grilled rye bread." },
              { name: "Grilled Cheese", price: "$13.99", description: "Add tomato slices for $1.50." },
              { name: "Greek Gyro Wrap", price: "$16.99", description: "Greek gyro meat, lettuce, tomato & onions on grilled pita bread with Greek feta cheese & tzatziki sauce." },
            ],
          },
        ],
      },
      {
        id: "lunch-favorites",
        title: "Lunch Favorites",
        note: "Served with 1 choice of French fries, onion rings, potato salad, or fresh fruit. Add a side of garden salad for $2.75.",
        subsections: [
          {
            items: [
              { name: "Fish & Chips", price: "$16.99", description: "2 pieces hand-dipped Alaskan cod in our special batter. Deep-fried. Served with lemon & tartar." },
              { name: "Quesadillas", price: "$16.99", description: "2 grilled flour tortillas stuffed with beef or chicken and cheese. Choice of cheddar or mozzarella. Served with sour cream, salsa, and avocado." },
              { name: "Half & Half Seafood Combo", description: "2 pieces Alaskan cod hand-dipped in our special batter & 4 pieces tempura shrimp, deep fried. Served with lemon & tartar." },
              { name: "Chicken Tenders", price: "$15.99", description: "3 pieces chicken breast strips, breaded & deep fried. Served with choice of ranch, honey mustard, or BBQ sauce." },
            ],
          },
        ],
      },
      {
        id: "cold-sandwiches",
        title: "Cold Sandwiches",
        subsections: [
          {
            items: [
              { name: "Lox & Bagel", price: "$17.99", description: "4 oz smoked salmon lox, red onion, capers, & cream cheese on a toasted bagel." },
              { name: "California Chicken Clubhouse", price: "$17.99", description: "Ham, chicken, bacon, avocado, lettuce, tomato, & mayo. Served on white toast." },
              { name: "B.L.T.", price: "$15.99", description: "Mayonnaise, lettuce, tomato, & bacon on white toast. Add swiss or American cheese for $1.50." },
            ],
          },
        ],
      },
      {
        id: "salads",
        title: "Salads",
        subsections: [
          {
            items: [
              { name: "Chef's Salad", price: "$17.99", description: "Thin-sliced roast beef, bacon bits, red onion, avocado, strawberries, romaine, and green leaf lettuce. Served with garlic bread." },
              { name: "Cobb Salad", price: "$17.99", description: "Ham, bacon, tomatoes, avocado, hard-boiled egg, mozzarella, romaine, and green leaf lettuce. Served with garlic bread." },
              { name: "Caesar Salad", price: "$12.99", description: "Romaine, croutons, and parmesan cheese. Add grilled chicken breast for $3.99." },
            ],
          },
        ],
      },
      {
        id: "lunch-sides",
        title: "Lunch Side Dishes",
        subsections: [
          {
            items: [
              { name: "Onion Rings", price: "$5.75" },
              { name: "French Fries (lightly seasoned)", price: "$5.25" },
              { name: "Greek Fries", price: "$5.75", description: "With feta cheese & seasoning." },
              { name: "Homemade Potato Salad", price: "$4.50", description: "With bacon." },
              { name: "Garden Salad", price: "$4.75", description: "With cheese, tomato, and dressing." },
              { name: "Soup of the Day", description: "Cup $4.50 / Bowl $6.50" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "kids",
    title: "Kids",
    tagline: "Only for children 12 years old & younger.",
    sections: [
      {
        id: "kids-menu",
        title: "Kids Menu — Breakfast & Lunch",
        subsections: [
          {
            items: [
              { name: "Kids Bear Face Pancake", price: "$8.00", description: "1 large buttermilk pancake shaped like a bear's face, garnished with fruit and topped with whipped cream. Add bacon or sausage for $2.00." },
              { name: "Junior Pigs in a Blanket", price: "$10.00", description: "2 sausage links wrapped in a large buttermilk pancake. Sprinkled with powdered sugar." },
              { name: "Jr. Grilled Cheese", price: "$8.00", description: "½ order of grilled cheddar cheese sandwich on country white bread & plain french fries." },
              { name: "Jr. Cheeseburger", price: "$10.00", description: "Single charbroiled beef patty & cheddar cheese. Served with plain french fries." },
              { name: "Jr. Chicken Tenders", price: "$10.00", description: "2 breaded chicken breast strips & plain french fries. Served with ranch." },
            ],
          },
          {
            title: "Kids Beverages",
            items: [
              { name: "Milk (8oz)", price: "$3.00" },
              { name: "Apple Juice (8oz)", price: "$3.00" },
              { name: "Orange Juice", price: "$3.00" },
              { name: "Cranberry Juice", price: "$3.00" },
              { name: "Lemonade (8oz)", price: "$3.00" },
              { name: "Chocolate Milk", price: "$3.50" },
              { name: "Orange Soda", price: "$3.00" },
              { name: "Dr. Pepper", price: "$3.00" },
              { name: "Hot Chocolate", price: "$3.50", description: "Served with whipped cream & sprinkles." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    tagline: "Coffee, sips, and a little something stronger.",
    sections: [
      {
        id: "beverages",
        title: "Beverages",
        subsections: [
          {
            items: [
              { name: "Coffee or Hot Tea", price: "$3.50" },
              { name: "Hot Chocolate", price: "$4.00", description: "1 refill only. Served with whipped cream and sprinkles." },
              { name: "Soft Drinks (refills): Pepsi", price: "$3.50", description: "Diet Pepsi, Root Beer, Crush, Lemonade." },
              { name: "Fresh Brewed Iced Tea (refillable)", price: "$3.50" },
              { name: "Milk", description: "Small $3.00 / Large $4.25" },
              { name: "Chocolate Milk", description: "Small $4.00 / Large $5.00" },
              { name: "Juices — Small (Apple, Orange, Cranberry)", price: "$4.00" },
              { name: "Juices — Large (Apple, Orange, Cranberry)", price: "$5.00" },
            ],
          },
        ],
      },
      {
        id: "cocktails",
        title: "Cocktails",
        subsections: [
          {
            items: [
              { name: "Classic Mimosa", price: "$10", description: "Freshly chilled champagne mixed with orange juice." },
              { name: "Bloody Mary", price: "$10", description: "A bold mix of vodka, tomato juice, and spices." },
              { name: "Tony's Tequila Sunrise", price: "$10", description: "Tequila, orange juice, and a splash of grenadine." },
              { name: "Moscow Mule", price: "$10", description: "Vodka, ginger beer, and fresh lime served ice cold." },
              { name: "Peach Bellini", price: "$10", description: "Freshly chilled champagne mixed with sweet peach purée — smooth, fruity." },
              { name: "Screwdriver", price: "$10", description: "Simple and refreshing — vodka and orange juice served ice cold." },
            ],
          },
          {
            title: "Wine",
            items: [
              { name: "Sauvignon Blanc", price: "$12.50" },
              { name: "Chardonnay", price: "$12.50" },
              { name: "Pinot Noir", price: "$12.50" },
              { name: "Cabernet Sauvignon", price: "$12.50" },
            ],
          },
          {
            title: "Beer",
            items: [
              { name: "Pacifico", price: "$7" },
              { name: "Negra Modelo", price: "$7" },
              { name: "Corona", price: "$7" },
              { name: "Modelo", price: "$7" },
              { name: "Heineken", price: "$7" },
              { name: "Bud Light", price: "$7" },
              { name: "Coors Light", price: "$7" },
              { name: "Stella Artois", price: "$7" },
            ],
          },
        ],
      },
    ],
  },
];

export const allergenNote =
  "Consuming non-pasteurized juices, raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase the risks of food-borne illnesses. Our restaurant prepares and serves products that contain peanuts, tree nuts, fish, shellfish, eggs, milk, soy, and gluten. Please keep in mind cross-contamination may occur.";
