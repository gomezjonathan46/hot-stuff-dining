import MenuItem from "../../src/components/MenuItem";

const menu = [
  {
    name: "Truffle Mac & Cheese",
    description: "Creamy cheddar blend, black truffle, toasted breadcrumbs",
    price: "$18",
    image: "/menu/mac.jpg",
  },
  {
    name: "Spicy Short Rib",
    description: "Slow-braised beef short rib with chili glaze",
    price: "$32",
    image: "/menu/short-rib.jpg",
  },
  {
    name: "Crispy Calamari",
    description: "Lightly fried, lemon aioli, fresh herbs",
    price: "$16",
    image: "/menu/calamari.jpg",
  },
  {
    name: "Smoked Chicken Sandwich",
    description: "Smoked chicken, pickles, spicy aioli on brioche",
    price: "$17",
    image: "/menu/sandwich.jpg",
  },
  {
    name: "Fire Roasted Salmon",
    description: "Atlantic salmon, citrus glaze, seasonal greens",
    price: "$28",
    image: "/menu/salmon.jpg",
  },
  {
    name: "Garlic Herb Fries",
    description: "Hand-cut fries tossed in garlic, parsley, sea salt",
    price: "$10",
    image: "/menu/fries.jpg",
  },
  {
    name: "Steak Frites",
    description: "Grilled ribeye with crispy fries and herb butter",
    price: "$36",
    image: "/menu/steak.jpg",
  },
];

export default function MenuPage() {
  return (
    <main className="px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-display text-center mb-10">Our Menu</h1>

        <div className="space-y-6">
          {menu.map((item) => (
            <MenuItem
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
