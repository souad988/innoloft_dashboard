import React from 'react'

function ProductInfo({...props}) {
    const { description } = props;
  return (
    <div>
     <button>Description</button>
     <button>Attributes</button>
     <div>
         {description}
     </div>
    </div>
  )
}

export default ProductInfo