import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
]

function App() {
    return <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div>
}

function Header() {
    // const style = {color: 'red' , fontSize :"50px" , textTransform : "uppercase" , fontFamily:"sans-serif"};
    return <header className="header">
        <h1>Fast React Pizza CO.</h1>
    </header>
}

function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 ? <ul className="pizzas">
                {pizzaData.map((pizza) => (
                    <Pizza pizzaObj={pizza}/>
                ))}
            </ul> : <p> We're still working in our Menu please come later</p>}
        </main>
    )
}

function Ordere({clsHrs}) {
    return (
        <div className="order">
            <p>We're open Until {clsHrs - 12}:00 PM come visit us </p>
            <button className="btn">Order</button>
        </div>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 20;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (<footer className="footer">
        {isOpen ? <order clsHrs = {closeHour}/> : <p>We're happy to welcome you between {openHour}:00 Am and {closeHour - 12}:00 PM</p>}
    </footer>)
}

function Pizza({pizzaObj}) {
    // console.log(props);
    return <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price + "$"}</span>
        </div>
    </li>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>, root);
export default App;