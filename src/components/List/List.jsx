import React from 'react'
import "./List.scss"
import Card from '../Card/Card';

const List = () => {

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
    <div className='list'>
      {data?.map(item=>(
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default List
