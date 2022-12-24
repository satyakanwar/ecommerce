import React from 'react';
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://cdn.pixabay.com/photo/2022/11/08/06/26/woman-7577808_960_720.jpg",
            img2: "https://images.fineartamerica.com/public/images/overview/apparel/sweatshirts002.jpg",
            title: "Long Sleeve Graphic T-shirt",
            desc: "Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://cdn.pixabay.com/photo/2022/11/08/06/26/woman-7577808_960_720.jpg",
            img2: "https://images.fineartamerica.com/public/images/overview/apparel/sweatshirts002.jpg",
            title: "Skirt",
            desc: "Skirt",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
    ]


  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map(item=>(
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price">1 x ${item.price}</div>
                    
            </div>
            <DeleteOutlinedIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Reset Cart</span>
    </div>
  );
}

export default Cart;
