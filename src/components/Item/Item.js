import './Item.css'

const Item = ({product}) => {
    return (
        <li className="liitem">
            <h3>{product.name}</h3>
            <img src={product.img} className="imgitem" alt={product.name}/>
            <p>Precio: {product.price}</p>
        </li>
    )
}

export default Item