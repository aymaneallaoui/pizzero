"use client"
import React from 'react';
import { Reveal } from '../utils/Reveal';

const PizzaMenu = () => {
    const pizzaMenu = [
        {
            name: "Margherita",
            imageSrc: "https://static01.nyt.com/images/2014/04/09/dining/09JPPIZZA2/09JPPIZZA2-superJumbo-v3.jpg",
            ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Basil", "Olive Oil"],
            description:
                "Our classic Margherita pizza is a timeless masterpiece, featuring the perfect combination of tangy tomato sauce, gooey mozzarella cheese, fragrant basil, and a drizzle of olive oil. It's simplicity at its finest, delivering a burst of flavors with every bite.",
        },
        {
            name: "Pepperoni",
            imageSrc: "https://cdn.ruled.me/wp-content/uploads/2014/08/pepperonipizza.jpg",
            ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni", "Herbs"],
            description:
                "Indulge in our mouthwatering Pepperoni pizza, a true classic loved by pizza enthusiasts worldwide. It features a generous amount of savory pepperoni, perfectly complemented by tangy tomato sauce, melted mozzarella cheese, and a sprinkle of aromatic herbs.",
        },
        {
            name: "Vegetarian",
            imageSrc: "https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?resize=720%2C480&ssl=1",
            ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Assorted Vegetables", "Herbs"],
            description:
                "For all the veggie lovers out there, our Vegetarian pizza is a delightful medley of flavors and textures. It showcases a colorful assortment of fresh vegetables, including bell peppers, onions, mushrooms, and olives, all atop a bed of tangy tomato sauce and melted mozzarella cheese.",
        },
        {
            name: "BBQ Chicken",
            imageSrc: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/02/bbq-chicken-pizza-1.jpg",
            ingredients: ["BBQ Sauce", "Grilled Chicken", "Red Onions", "Mozzarella Cheese"],
            description:
                "Savor the smoky and tangy flavors of our BBQ Chicken pizza. Tender grilled chicken, sweet and savory BBQ sauce, thinly sliced red onions, and a generous layer of melted mozzarella cheese come together to create a taste sensation that will leave you craving more.",
        },
    ];


    const renderPizzaMenu = () => {
        return pizzaMenu.map((pizza, index) => (

            <div className="card  bg-base-200 shadow-xl mx-4 my-4 [&::selection]:bg-neutral-focus" key={index} >
                <figure className="h-48">

                    <img src={pizza.imageSrc} alt={pizza.name} className="h-full w-full object-cover" />

                </figure>
                <div className="card-body ">

                    <Reveal>
                        <h2 className="card-title text-neutral-content [&::selection]:bg-neutral-focus">
                            {pizza.name}
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className='text-neutral-content [&::selection]:bg-neutral-focus'>{pizza.description}</p>
                    </Reveal>
                    <Reveal>
                        <div className="card-actions justify-end">
                            {pizza.ingredients.map((ingredient, i) => (
                                <div className="badge badge-outline text-neutral-content [&::selection]:bg-neutral-focus" key={i}>{ingredient}</div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>

        ));
    };

    return (
        <div className="container mx-auto  py-6 bg-base-100" >
            <h1 className="text-3xl font-bold mt-6 mb-6 text-center text-neutral-content" id="Menu">Pizza Menu</h1>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
                {renderPizzaMenu()}
            </div>
        </div>
    );
};

export default PizzaMenu;