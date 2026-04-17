import React, { useState } from "react";
j
// --- 1. DATA ---
const CATEGORIES = ["All", "Fruits & Veg", "Dairy & Eggs", "Bakery", "Meat & Fish", "Snacks", "Beverages"];

const PRODUCTS = [
  // --- 1. FRUITS & VEG (5 Items) ---
 { id: 1, name: "Organic Bananas", category: "Fruits & Veg", price: 49, actualPrice: 120, stock: 50, rating: 5, description: "Fresh organic bananas sourced directly from local farms. Rich in potassium.", img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400" },
  { id: 2, name: "Hass Avocados", category: "Fruits & Veg", price: 149, actualPrice: 299, stock: 30, rating: 4, description: "Creamy and rich Hass avocados, perfect for toast and healthy salads.", img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400" },
  { id: 3, name: "Red Apples", category: "Fruits & Veg", price: 180, actualPrice: 250, stock: 100, rating: 5, description: "Sweet and crunchy premium Kashmiri apples, packed with fiber.", img: "http://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" },
  { id: 4, name: "Fresh Broccoli", category: "Fruits & Veg", price: 90, actualPrice: 150, stock: 40, rating: 4, description: "Nutritious green broccoli, rich in antioxidants and vitamins.", img: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400" },
  { id: 5, name: "Cherry Tomatoes", category: "Fruits & Veg", price: 60, actualPrice: 100, stock: 60, rating: 5, description: "Bite-sized, sweet and juicy red tomatoes, perfect for salads.", img: "https://www.albionfinefoods.com/images_products/HD_TOMATOCHERRY250.jpg" },

  // --- 2. DAIRY & EGGS (5 Items) ---
  { id: 6, name: "Pure Farm Milk", category: "Dairy & Eggs", price: 65, actualPrice: 85, stock: 200, rating: 5, description: "Fresh full-cream milk processed with high hygiene standards.", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400" },
  { id: 7, name: "Greek Yogurt", category: "Dairy & Eggs", price: 120, actualPrice: 180, stock: 45, rating: 4, description: "Thick and creamy unsweetened Greek yogurt, rich in protein.", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400" },
  { id: 8, name: "Salted Butter", category: "Dairy & Eggs", price: 255, actualPrice: 300, stock: 80, rating: 5, description: "Rich and creamy butter made from pure cow milk.", img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400" },
  { id: 9, name: "Free Range Eggs", category: "Dairy & Eggs", price: 90, actualPrice: 120, stock: 150, rating: 5, description: "Pack of 6 farm-fresh brown eggs, high in protein.", img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400" },
  { id: 10, name: "Paneer (Cottage Cheese)", category: "Dairy & Eggs", price: 250, actualPrice: 320, stock: 55, rating: 5, description: "Soft and fresh paneer, perfect for all Indian curries.", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400" },

  // --- 3. BAKERY (5 Items) ---
  { id: 11, name: "Artisan Bread", category: "Bakery", price: 180, actualPrice: 250, stock: 40, rating: 4, description: "Freshly baked sourdough loaf with a perfect crunchy crust.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
  { id: 12, name: "Butter Croissant", category: "Bakery", price: 99, actualPrice: 150, stock: 25, rating: 5, description: "Flaky, buttery, and golden-brown traditional French pastry.", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400" },
  { id: 13, name: "Chocolate Muffin", category: "Bakery", price: 80, actualPrice: 120, stock: 35, rating: 4, description: "Moist muffin loaded with premium dark chocolate chips.", img: "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?w=400" },
  { id: 14, name: "Chocolate Cake", category: "Bakery", price: 499, actualPrice: 750, stock: 15, rating: 5, description: "Delicious half-kg dark chocolate truffle cake for celebrations.", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: 15, name: "Garlic Toast", category: "Bakery", price: 150, actualPrice: 220, stock: 50, rating: 4, description: "Crispy herb-infused garlic bread sticks, oven baked.", img: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400" },

  // --- 4. MEAT & FISH (5 Items) ---
  { id: 16, name: "Chicken Breast", category: "Meat & Fish", price: 320, actualPrice: 450, stock: 70, rating: 4, description: "Lean and tender boneless chicken breast, fresh cut.", img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400" },
  { id: 17, name: "Fresh Salmon Fillet", category: "Meat & Fish", price: 850, actualPrice: 1200, stock: 20, rating: 5, description: "Premium Atlantic salmon, rich in Omega-3 fatty acids.", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400" },
  { id: 18, name: "Mutton Curry Cut", category: "Meat & Fish", price: 750, actualPrice: 900, stock: 30, rating: 5, description: "Fresh and tender goat meat, perfectly cut for stews.", img: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400" },
  { id: 19, name: "Tiger Prawns", category: "Meat & Fish", price: 650, actualPrice: 850, stock: 25, rating: 4, description: "Large juicy prawns, professionally cleaned and deveined.", img: "https://musselman.co.uk/wp-content/uploads/2020/03/fresh-raw-tiger-prawns-and-spices-PNAPJKW-scaled-e1585340503795.jpg" },
  { id: 20, name: "Chicken Wings", category: "Meat & Fish", price: 280, actualPrice: 400, stock: 50, rating: 4, description: "Spicy and tender chicken wings, perfect for snacks.", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400" },

  // --- 5. SNACKS (5 Items) ---
  { id: 21, name: "Potato Chips", category: "Snacks", price: 40, actualPrice: 50, stock: 200, rating: 4, description: "Classic salted crispy potato wafers, travel friendly.", img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400" },
  { id: 22, name: "Roasted Cashews", category: "Snacks", price: 450, actualPrice: 600, stock: 80, rating: 5, description: "Premium salted and roasted cashew nuts, jumbo size.", img: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/16448167a.webp" },
  { id: 23, name: "Dark Chocolate Bar", category: "Snacks", price: 150, actualPrice: 250, stock: 120, rating: 5, description: "70% Cocoa premium dark chocolate for true lovers.", img: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400" },
  { id: 24, name: "Nachos Chips", category: "Snacks", price: 99, actualPrice: 150, stock: 90, rating: 4, description: "Crunchy corn tortilla chips with cheese dip flavor.", img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400" },
  { id: 25, name: "Mixed Fruit Nuts", category: "Snacks", price: 350, actualPrice: 500, stock: 65, rating: 5, description: "Healthy mix of sun-dried fruits and organic nuts.", img: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=400" },

  // --- 6. BEVERAGES (5 Items) ---
  { id: 26, name: "Orange Juice", category: "Beverages", price: 160, actualPrice: 220, stock: 130, rating: 5, description: "100% pure squeezed orange juice, no added sugar.", img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },
  { id: 27, name: "Cold Brew Coffee", category: "Beverages", price: 250, actualPrice: 350, stock: 40, rating: 5, description: "Smooth and strong bottled cold brew coffee concentrate.", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400" },
  { id: 28, name: "Green Tea", category: "Beverages", price: 450, actualPrice: 600, stock: 100, rating: 4, description: "Organic green tea bags for a healthy daily detox.", img: "https://img.freepik.com/premium-photo/cup-green-tea-with-fresh-leaves_21085-108046.jpg?w=996" },
  { id: 29, name: "Sparkling Water", category: "Beverages", price: 80, actualPrice: 120, stock: 150, rating: 4, description: "Refreshing carbonated natural spring mineral water.", img: "https://duulp0xsp2qmz.cloudfront.net/flex-flexseven/media/images/652f4090ca540_dba74e63506c277f5a000dd29230e58b.jpg" },
  { id: 30, name: "Mango Smoothie", category: "Beverages", price: 180, actualPrice: 250, stock: 50, rating: 5, description: "Fresh and thick alphonso mango smoothie drink.", img: "https://tse1.mm.bing.net/th/id/OIP.DcGqzofunQKInGytJoHO9wHaE8?pid=Api&P=0&h=180" },
];
const SLOTS = [
  { id: 1, label: "Today", time: "6:00 PM – 8:00 PM", express: true },
  { id: 2, label: "Today", time: "8:00 PM – 10:00 PM", express: false },
  { id: 3, label: "Tomorrow", time: "9:00 AM – 11:00 AM", express: false },
];

const PAYMENT_METHODS = [
  { id: "card", label: "Credit / Debit Card", icon: "💳" },
  { id: "upi", label: "UPI (PhonePe / GPay)", icon: "📲" },
  { id: "cod", label: "Cash on Delivery", icon: "💵" }
];

// --- 2. MAIN APP ---
export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState({});
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [user] = useState({ name: "Pooja Kumari", location: "Noida, India" });

  const cartItems = Object.entries(cart).filter(([, qty]) => qty > 0);
  const subtotal = cartItems.reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find(p => p.id === parseInt(id));
    return sum + (p ? p.price * qty : 0);
  }, 0);
  const total = subtotal + (subtotal > 0 && subtotal < 999 ? 49 : 0);

  const updateCart = (id, delta) => {
    setCart(prev => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) + delta) }));
  };

  const filteredProducts = PRODUCTS.filter(p => 
    (selectedCategory === "All" || p.category === selectedCategory) && 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        .card { background: #fff; border-radius: 12px; border: 1px solid #eee; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
        .btn-add { background: #1a3a1a; color: #fff; border: none; padding: 12px; border-radius: 8px; cursor: pointer; font-weight: bold; width: 100%; transition: 0.2s; }
        .btn-add:disabled { background: #ccc; cursor: not-allowed; }
        .payment-option { padding: 15px; border: 1px solid #eee; border-radius: 10px; margin-bottom: 10px; cursor: pointer; transition: 0.2s; display: flex; align-items: center; gap: 10px; }
        .active-pay { border: 2px solid #1a3a1a; background: #f0fdf4 !important; }
        .tag { background: #f3ecec; color: #7a6e6e; padding: 4px 12px; border-radius: 20px; font-size: 11px; display: inline-block; margin-bottom: 10px; }
        input.form-input { width: 100%; padding: 10px; margin-top: 8px; border: 1px solid #ddd; border-radius: 6px; outline: none; }
        .qty-btn { background: #f8f9fa; border: 1px solid #eee; padding: 5px 12px; cursor: pointer; border-radius: 4px; }
      `}</style>

      <header style={{ background: "#1a3a1a", color: "#fff", padding: "15px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100 }}>
        <h2 onClick={() => setPage("home")} style={{ cursor: "pointer", margin: 0 }}>🚀 QuickGrocery</h2>
        <div style={{ textAlign: "right" }}><b>{user.name}</b><br/><small>📍 {user.location}</small></div>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "30px 20px" }}>
        {page === "home" && (
          <>
            <input type="text" placeholder="Search items..." className="form-input" style={{ marginBottom: "20px", padding: "15px" }} onChange={(e) => setSearchQuery(e.target.value)} />
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px", overflowX: "auto" }}>
               {CATEGORIES.map(cat => (
                 <button key={cat} onClick={() => setSelectedCategory(cat)} style={{ padding: "8px 16px", borderRadius: "20px", border: "none", background: selectedCategory === cat ? "#1a3a1a" : "#ddd", color: selectedCategory === cat ? "#fff" : "#000", cursor: "pointer" }}>{cat}</button>
               ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "25px" }}>
              {filteredProducts.map(p => (
                <div key={p.id} className="card">
                  <span className="tag">{p.category}</span>
                  <img src={p.img} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }} alt=""/>
                  <h3 style={{ margin: "10px 0 5px" }}>{p.name}</h3>
                  <div style={{ color: "#FFD700", marginBottom: "10px" }}>{"★".repeat(p.rating)}</div>
                  <p style={{ fontSize: "13px", color: "#666", height: "40px", overflow: "hidden" }}>{p.description}</p>
                  <p style={{ fontSize: "20px", fontWeight: "bold", margin: "10px 0" }}>₹{p.price} <span style={{ fontSize: "14px", textDecoration: "line-through", color: "#999" }}>₹{p.actualPrice}</span></p>
                  <div style={{ fontSize: "12px", marginBottom: "10px" }}>Stock: <b>{p.stock}</b></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                    <div className="qty-box" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <button className="qty-btn" onClick={() => updateCart(p.id, -1)}>−</button>
                      <b>{cart[p.id] || 0}</b>
                      <button className="qty-btn" onClick={() => updateCart(p.id, 1)}>+</button>
                    </div>
                  </div>
                  <button className="btn-add" onClick={() => { if(!cart[p.id]) updateCart(p.id, 1); setPage("cart"); }}>Add to Basket</button>
                </div>
              ))}
            </div>
          </>
        )}

        {page === "cart" && (
          <div className="card" style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2>Your Basket</h2>
            {cartItems.map(([id, qty]) => {
              const p = PRODUCTS.find(prod => prod.id === parseInt(id));
              return <div key={id} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #eee" }}><span>{p.name} x {qty}</span><span>₹{p.price * qty}</span></div>;
            })}
            <h3 style={{ textAlign: "right" }}>Total: ₹{total}</h3>
            <button className="btn-add" onClick={() => setPage("slot")}>Select Delivery Slot</button>
          </div>
        )}

        {page === "slot" && (
          <div className="card" style={{ maxWidth: "550px", margin: "0 auto" }}>
            <h2>Select Delivery Slot</h2>
            {SLOTS.map(s => (
              <div key={s.id} onClick={() => setSelectedSlot(s)} className={`payment-option ${selectedSlot?.id === s.id ? "active-pay" : ""}`}>
                <b>{s.label}</b><br/>{s.time} {s.express && "⚡"}
              </div>
            ))}
            <button className="btn-add" disabled={!selectedSlot} onClick={() => setPage("payment")}>Proceed to Payment</button>
          </div>
        )}

        {page === "payment" && (
          <PaymentPage total={total} selectedSlot={selectedSlot} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} setPage={setPage} />
        )}

        {page === "confirmation" && (
          <div className="card" style={{ textAlign: "center", padding: "50px" }}>
            <div style={{ fontSize: "60px" }}>🎉</div>
            <h2>Order Confirmed!</h2>
            <button className="btn-add" style={{ width: "200px" }} onClick={() => window.location.reload()}>Shop Again</button>
          </div>
        )}
      </main>
    </div>
  );
}

function PaymentPage({ total, selectedSlot, paymentMethod, setPaymentMethod, setPage }) {
  return (
    <div className="card" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Secure Checkout</h2>
      <p style={{ textAlign: "center", fontSize: "18px" }}>Amount to pay: <b>₹{total}</b></p>
      
      <div style={{ margin: "20px 0" }}>
        {PAYMENT_METHODS.map(m => (
          <div key={m.id}>
            <div className={`payment-option ${paymentMethod === m.id ? "active-pay" : ""}`} onClick={() => setPaymentMethod(m.id)}>
              <span>{m.icon}</span> <b>{m.label}</b>
            </div>
            
            {paymentMethod === "card" && m.id === "card" && (
              <div style={{ padding: "0 10px 15px" }}>
                <input className="form-input" type="text" placeholder="Card Number (xxxx xxxx xxxx xxxx)" />
                <div style={{ display: "flex", gap: "10px" }}>
                  <input className="form-input" type="text" placeholder="MM/YY" />
                  <input className="form-input" type="password" placeholder="CVV" />
                </div>
              </div>
            )}

            {paymentMethod === "upi" && m.id === "upi" && (
              <div style={{ padding: "0 10px 15px" }}>
                <input className="form-input" type="text" placeholder="Enter UPI ID (e.g. pooja@okaxis)" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ background: "#f8f9fa", padding: "12px", borderRadius: "8px", marginBottom: "20px", fontSize: "14px", textAlign: "center" }}>
        🕒 Scheduled for: <b>{selectedSlot?.label}, {selectedSlot?.time}</b>
      </div>

      <button className="btn-add" disabled={!paymentMethod} onClick={() => setPage("confirmation")}>Place Order Now</button>
    </div>
  );
}