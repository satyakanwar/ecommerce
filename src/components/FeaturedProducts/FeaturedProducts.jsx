import Card from "../Card/Card";
import React from 'react';
import "./FeaturedProducts.scss"

const FeaturedProducts = ({type}) => {
    
    const data = [
        {
            id: 1,
            img: "https://cdn.pixabay.com/photo/2022/11/08/06/26/woman-7577808_960_720.jpg",
            img2: "https://images.fineartamerica.com/public/images/overview/apparel/sweatshirts002.jpg",
            title: "Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://cdn.pixabay.com/photo/2022/11/08/06/26/woman-7577808_960_720.jpg",
            img2: "https://images.fineartamerica.com/public/images/overview/apparel/sweatshirts002.jpg",
            title: "Skirt",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://cdn.pixabay.com/photo/2022/11/08/06/26/woman-7577808_960_720.jpg",
            img2: "https://images.fineartamerica.com/public/images/overview/apparel/sweatshirts002.jpg",
            title: "Hat",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://cdn.pixabay.com/photo/2022/11/08/06/26/woman-7577808_960_720.jpg",
            img2: "https://images.fineartamerica.com/public/images/overview/apparel/sweatshirts002.jpg",
            title: "Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
    ];

  return (
    <div className='featuredProducts'>

        <div className="top">
            <h1>{type} products</h1>
            <p>
                Megamind ipsum dolor sit amet consectetur adipisicing elit. Est, ipsum consequuntur! Dignissimos repudiandae, pariatur beatae fuga nisi debitis quisquam quos porro cumque harum incidunt dolores mollitia culpa dolor tenetur saepe? Laudantium itaque quis distinctio molestias.
            </p>
        </div>  
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key = {item.id}/>
            ))}
        </div>
    </div>
  )
};

export default FeaturedProducts;
