import React, { useState } from 'react';
import './App.css';

// Importer les images dynamiquement par catégorie
const importImages = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

// Charger les images pour chaque catégorie
const saladeImages = importImages(require.context('./images/Salades', false, /\.(jpg|jpeg|png|svg)$/));
const pizzaImages = importImages(require.context('./images/Pizzas', false, /\.(jpg|jpeg|png|svg)$/));
const burgerImages = importImages(require.context('./images/Burgers', false, /\.(jpg|jpeg|png|svg)$/));
const kebabImages = importImages(require.context('./images/Kebabs', false, /\.(jpg|jpeg|png|svg)$/));
const boissonsImages = importImages(require.context('./images/Boissons', false, /\.(jpg|jpeg|png|svg)$/));
const dessertImages = importImages(require.context('./images/Desserts', false, /\.(jpg|jpeg|png|svg)$/));

// Liste des catégories
const categories = ['Salades', 'Pizzas', 'Burgers', 'Kebabs', 'Boissons', 'Desserts'];

// Liste des éléments de menu
const menuItems = [
  { id: 1, name: 'Salade César', description: 'Laitue romaine, parmesan, croûtons, sauce César', price: 8, category: 'Salades', image: saladeImages['Salades1.jpg'] },
  { id: 2, name: 'Salade Niçoise', description: 'Thon, œufs durs, olives, tomates, anchois', price: 9, category: 'Salades', image: saladeImages['Salades2.jpg'] },
  { id: 3, name: 'Salade Grecque', description: 'Feta, concombre, tomates, oignons rouges, olives', price: 10, category: 'Salades', image: saladeImages['Salades3.jpg'] },
  { id: 4, name: 'Salade Méditerranéenne', description: 'Tomates, concombre, olives, feta', price: 11, category: 'Salades', image: saladeImages['Salades4.jpg'] },
  { id: 5, name: 'Salade de Poulet', description: 'Poulet grillé, laitue, tomates, avocat', price: 12, category: 'Salades', image: saladeImages['Salades5.jpg'] },
  { id: 6, name: 'Salade de Quinoa', description: 'Quinoa, légumes croquants, vinaigrette', price: 13, category: 'Salades', image: saladeImages['Salades6.jpg'] },
  { id: 7, name: 'Salade de Fruits', description: 'Fruits frais de saison', price: 7, category: 'Salades', image: saladeImages['Salades7.jpg'] },
  { id: 8, name: 'Salade au Bacon', description: 'Laitue, bacon croustillant, vinaigrette', price: 9, category: 'Salades', image: saladeImages['Salades8.jpg'] },
  { id: 9, name: 'Salade César au Poulet', description: 'Salade César avec poulet grillé', price: 10, category: 'Salades', image: saladeImages['Salades9.jpg'] },

  // Ajoutez les autres éléments pour les autres catégories de manière similaire...
  { id: 10, name: 'Burger Classique', description: 'Bœuf, fromage cheddar, laitue, tomate, oignon', price: 8, category: 'Burgers', image: burgerImages['Burgers1.jpg'] },
  { id: 11, name: 'Cheeseburger', description: 'Bœuf, fromage fondu, cornichons, sauce burger', price: 9, category: 'Burgers', image: burgerImages['Burgers2.jpg'] },
  { id: 12, name: 'Burger au Poulet', description: 'Poulet grillé, sauce mayonnaise, laitue', price: 10, category: 'Burgers', image: burgerImages['Burgers3.jpg'] },
  { id: 13, name: 'Double Cheeseburger', description: 'Double portion de bœuf et fromage, oignons', price: 12, category: 'Burgers', image: burgerImages['Burgers4.jpg'] },
  { id: 14, name: 'Burger Végétarien', description: 'Galette de légumes, avocat, laitue, tomates', price: 11, category: 'Burgers', image: burgerImages['Burgers5.jpg'] },
  { id: 15, name: 'Burger au Bacon', description: 'Bœuf, fromage cheddar, bacon croustillant', price: 13, category: 'Burgers', image: burgerImages['Burgers6.jpg'] },
  { id: 16, name: 'Burger BBQ', description: 'Bœuf, sauce BBQ, oignons caramélisés, fromage', price: 12, category: 'Burgers', image: burgerImages['Burgers7.jpg'] },
  { id: 17, name: 'Burger Spicy', description: 'Bœuf épicé, sauce piquante, jalapeños, laitue', price: 10, category: 'Burgers', image: burgerImages['Burgers8.jpg'] },
  { id: 18, name: 'Burger Gourmet', description: 'Bœuf de qualité, fromage brie, roquette', price: 14, category: 'Burgers', image: burgerImages['Burgers9.jpg'] },
  // Ajoutez les autres éléments pour les autres catégories de manière similaire...
  { id: 19, name: 'Pizza Margherita', description: 'Tomates, mozzarella, basilic', price: 8, category: 'Pizzas', image: pizzaImages['Pizzas1.jpg'] },
  { id: 20, name: 'Pizza Quatre Fromages', description: 'Mozzarella, gorgonzola, parmesan, chèvre', price: 10, category: 'Pizzas', image: pizzaImages['Pizzas2.jpg'] },
  { id: 21, name: 'Pizza Pepperoni', description: 'Tomates, mozzarella, pepperoni épicé', price: 9, category: 'Pizzas', image: pizzaImages['Pizzas3.jpg'] },
  { id: 22, name: 'Pizza Hawaïenne', description: 'Jambon, ananas, mozzarella', price: 11, category: 'Pizzas', image: pizzaImages['Pizzas4.jpg'] },
  { id: 23, name: 'Pizza Végétarienne', description: 'Légumes grillés, mozzarella, sauce tomate', price: 9, category: 'Pizzas', image: pizzaImages['Pizzas5.jpg'] },
  { id: 24, name: 'Pizza Reine', description: 'Jambon, champignons, mozzarella', price: 10, category: 'Pizzas', image: pizzaImages['Pizzas6.jpg'] },
  { id: 25, name: 'Pizza BBQ Chicken', description: 'Poulet, sauce BBQ, oignons, mozzarella', price: 12, category: 'Pizzas', image: pizzaImages['Pizzas7.jpg'] },
  { id: 26, name: 'Pizza Diavola', description: 'Tomates, mozzarella, saucisson piquant', price: 11, category: 'Pizzas', image: pizzaImages['Pizzas8.jpg'] },
  { id: 27, name: 'Pizza Calzone', description: 'Tomates, mozzarella, jambon, œuf', price: 13, category: 'Pizzas', image: pizzaImages['Pizzas9.jpg'] },


  { id: 28, name: 'Kebab Classique', description: 'Pain pita, viande de kebab, salade, tomates, sauce blanche', price: 7, category: 'Kebabs', image: kebabImages['Kebabs1.jpg'] },
  { id: 29, name: 'Kebab au Poulet', description: 'Poulet mariné, salade, tomates, oignons, sauce piquante', price: 8, category: 'Kebabs', image: kebabImages['Kebabs2.jpg'] },
  { id: 30, name: 'Kebab Galette', description: 'Galette de blé, viande kebab, légumes, sauce au choix', price: 9, category: 'Kebabs', image: kebabImages['Kebabs3.jpg'] },
  { id: 31, name: 'Kebab Fromage', description: 'Viande kebab, fromage fondu, tomates, oignons, sauce', price: 8.5, category: 'Kebabs', image: kebabImages['Kebabs4.jpg'] },
  { id: 32, name: 'Kebab Mixte', description: 'Poulet et bœuf kebab, frites, salade, sauce épicée', price: 10, category: 'Kebabs', image: kebabImages['Kebabs5.jpg'] },
  { id: 33, name: 'Kebab Falafel', description: 'Falafels, légumes, sauce au tahini, pita grillée', price: 7.5, category: 'Kebabs', image: kebabImages['Kebabs6.jpg'] },
  { id: 34, name: 'Kebab XL', description: 'Double portion de viande, légumes, frites, sauce blanche', price: 12, category: 'Kebabs', image: kebabImages['Kebabs7.jpg'] },
  { id: 35, name: 'Kebab Dürüm', description: 'Galette de dürüm, viande kebab, salade, sauce au choix', price: 9.5, category: 'Kebabs', image: kebabImages['Kebabs8.jpg'] },
  { id: 36, name: 'Kebab Vegan', description: 'Protéines végétales, légumes frais, sauce spéciale', price: 8, category: 'Kebabs', image: kebabImages['Kebabs9.jpg'] },


  { id: 37, name: 'Tarte aux Pommes', description: 'Pâte feuilletée, pommes caramélisées, cannelle', price: 4.5, category: 'Desserts', image: dessertImages['Desserts1.jpg'] },
  { id: 38, name: 'Mousse au Chocolat', description: 'Mousse au chocolat noir, éclats de noisettes', price: 5, category: 'Desserts', image: dessertImages['Desserts2.jpg'] },
  { id: 39, name: 'Cheesecake', description: 'Biscuit croquant, crème au fromage, coulis de fruits rouges', price: 6, category: 'Desserts', image: dessertImages['Desserts3.jpg'] },
  { id: 40, name: 'Tiramisu', description: 'Crème mascarpone, café, cacao', price: 5.5, category: 'Desserts', image: dessertImages['Desserts4.jpg'] },
  { id: 41, name: 'Fondant au Chocolat', description: 'Gâteau fondant au chocolat noir, cœur coulant', price: 6, category: 'Desserts', image: dessertImages['Desserts5.jpg'] },
  { id: 42, name: 'Crème Brûlée', description: 'Crème vanille, caramel croquant', price: 5, category: 'Desserts', image: dessertImages['Desserts6.jpg'] },
  { id: 43, name: 'Panna Cotta', description: 'Crème cuite à la vanille, coulis de fruits rouges', price: 5.5, category: 'Desserts', image: dessertImages['Desserts7.jpg'] },
  { id: 44, name: 'Macarons', description: 'Assortiment de macarons colorés', price: 4, category: 'Desserts', image: dessertImages['Desserts8.jpg'] },
  { id: 45, name: 'Brownie', description: 'Brownie aux noix, chocolat fondant', price: 4.5, category: 'Desserts', image: dessertImages['Desserts9.jpg'] },


  { id: 46, name: 'Coca-Cola', description: 'Boisson gazeuse rafraîchissante', price: 2.5, category: 'Boissons', image: boissonsImages['Boissons1.jpg'] },
{ id: 47, name: 'Pepsi', description: 'Boisson gazeuse au cola', price: 2.5, category: 'Boissons', image: boissonsImages['Boissons2.jpg'] },
{ id: 48, name: 'Fanta Orange', description: 'Boisson gazeuse à l’orange', price: 2.5, category: 'Boissons', image: boissonsImages['Boissons3.jpg'] },
{ id: 49, name: 'Sprite', description: 'Boisson gazeuse au citron et citron vert', price: 2.5, category: 'Boissons', image: boissonsImages['Boissons4.jpg'] },
{ id: 50, name: 'Eau Minérale', description: 'Eau minérale naturelle en bouteille', price: 1.5, category: 'Boissons', image: boissonsImages['Boissons5.jpg'] },
{ id: 51, name: 'Thé Glacé', description: 'Boisson rafraîchissante au thé avec du citron', price: 3, category: 'Boissons', image: boissonsImages['Boissons6.jpg'] },
{ id: 52, name: 'Red Bull', description: 'Boisson énergisante', price: 3.5, category: 'Boissons', image: boissonsImages['Boissons7.jpg'] },
{ id: 53, name: 'Jus d\'Orange', description: 'Jus d’orange frais pressé', price: 3, category: 'Boissons', image: boissonsImages['Boissons8.jpg'] },
{ id: 54, name: 'Jus de Pomme', description: 'Jus de pomme 100% naturel', price: 3, category: 'Boissons', image: boissonsImages['Boissons9.jpg'] },
{ id: 55, name: 'Jus de Mangue', description: 'Boisson tropicale à base de mangue', price: 3, category: 'Boissons', image: boissonsImages['Boissons10.jpg'] },
{ id: 56, name: 'Jus de Fraise', description: 'Boisson rafraîchissante à la fraise', price: 3, category: 'Boissons', image: boissonsImages['Boissons11.jpg'] },
{ id: 57, name: 'Smoothie Banane-Fraise', description: 'Smoothie crémeux à la banane et à la fraise', price: 4, category: 'Boissons', image: boissonsImages['Boissons12.jpg'] },
{ id: 58, name: 'Café Americano', description: 'Café noir américain', price: 2, category: 'Boissons', image: boissonsImages['Boissons13.jpg'] },
{ id: 59, name: 'Café Latte', description: 'Café avec du lait', price: 3, category: 'Boissons', image: boissonsImages['Boissons14.jpg'] },
{ id: 60, name: 'Cappuccino', description: 'Espresso avec de la mousse de lait', price: 3.5, category: 'Boissons', image: boissonsImages['Boissons15.jpg'] },
{ id: 61, name: 'Chocolat Chaud', description: 'Boisson chaude à base de chocolat', price: 3, category: 'Boissons', image: boissonsImages['Boissons16.jpg'] },
{ id: 62, name: 'Milkshake Vanille', description: 'Milkshake crémeux à la vanille', price: 4, category: 'Boissons', image: boissonsImages['Boissons17.jpg'] },
{ id: 63, name: 'Milkshake Chocolat', description: 'Milkshake au chocolat', price: 4, category: 'Boissons', image: boissonsImages['Boissons18.jpg'] },
{ id: 64, name: 'Limonade', description: 'Boisson gazeuse au citron', price: 2.5, category: 'Boissons', image: boissonsImages['Boissons19.jpg'] },
{ id: 65, name: 'Thé Vert Froid', description: 'Thé vert rafraîchissant servi froid', price: 3, category: 'Boissons', image: boissonsImages['Boissons20.jpg'] },

];

const SelfServiceKiosk = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Salades');

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="kiosk-layout">
      <header className="kiosk-header">
        <nav className="category-menu">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>
      </header>
      <main className="kiosk-main">
        <section className="content-area">
          <h2 className="category-title">{selectedCategory}</h2>
          <div className="menu-items">
            {menuItems.filter(item => item.category === selectedCategory).map((item) => (
              <div key={item.id} className="menu-item-card">
                <img src={item.image} alt={item.name} className="menu-item-image" />
                <div className="menu-item-details">
                  <h3 className="menu-item-title">{item.name}</h3>
                  <p className="menu-item-description">{item.description}</p>
                  <div className="menu-item-footer">
                    <span className="menu-item-price">{item.price} €</span>
                    <button 
                      className="add-to-cart-button"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <aside className="order-sidebar">
          <h2 className="order-title">Votre Commande</h2>
          {cart.map((item, index) => (
            <div key={index} className="order-item">
              <span>{item.name}</span>
              <div>
                <span className="order-item-price">{item.price} €</span>
                <button 
                  className="remove-item-button"
                  onClick={() => removeFromCart(index)}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
          <div className="order-total">
            <span>Total:</span>
            <span>{getTotalPrice()} €</span>
          </div>
          <button className="order-button">
            Commander
          </button>
        </aside>
      </main>
    </div>
  );
};

export default SelfServiceKiosk;
