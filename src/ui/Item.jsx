import React from 'react';

function Item({ item }) {
  const ingredient = item.ingredients.join(', ');
  return (
    <div className="flex flex-col justify-between space-y-2 p-4 ">
      <img src={item.imageUrl} alt={`${item.name}`} />
      <div className="space-y-1">
        <h3 className="text-xl">{item.name}</h3>
        <p className="font-thin italic">{ingredient}</p>
        <p className="font-bold">${item.unitPrice}</p>
      </div>
      <button className="self-baseline bg-orange-400  p-2 text-white hover:bg-orange-300 hover:text-black">
        ADD TO CART
      </button>
    </div>
  );
}

export default Item;
