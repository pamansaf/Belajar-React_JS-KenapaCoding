import React from "react"
import ProductCard from "./ProductCard.jsx"


function ProductsList () {
   const Products = [
      {
        id: 1,
        title: 'Mobil Ford',
        desc: 'Mobil ford adalah mobil yang sangat bagus',
        imgURL:
          'https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      },
      {
        id: 2,
        title: 'Mobil Mustang',
        desc: 'Mobil Mustang mempunyai desain yang elegan',
        imgURL:
          'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMzE1OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      },
      {
        id: 3,
        title: 'Mobil Toyota',
        desc: 'Mobil toyota memiliki interior dan body yang kokoh',
        imgURL:
          'https://images.unsplash.com/photo-1559416523-140ddc3d238c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0MjIxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      },
      {
        id: 4,
        title: 'Mobil Lamborghini',
        desc: 'Mobil Lamborghini memiliki interior dan body yang kokoh',
        imgURL:
          'https://images.unsplash.com/photo-1621135802920-133df287f89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjA0MjYyNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      },
    ];

   return (
    <div className="flex flex-wrap justify-center gap-3">
      {Products.map((product) => {
         return(
            <ProductCard  
               key={product.id}
               title={product.title}
               desc={product.desc}
               imgURL={product.imgURL}
            />
         )
      })};
    </div>
   );
}

export default ProductsList