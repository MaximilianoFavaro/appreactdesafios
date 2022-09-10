import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"

import { db } from "../../services/firebase"
import { addDoc, collection,  getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'
import './Checkout.css'
import NotificationContext from '../../notification/Notification'

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext) 
    const {setNotification} = useContext(NotificationContext)

    const navigate = useNavigate()    

    const totalQuantity = getQuantity()
    const total = getTotal()

    const [orderDetail,setorderDetail]=useState({
        nombre:'',
        apellido:'',
        telefono:'',
        direccion:''
       })
    const handleOnChange=e=>{
        const {name, value}=e.target; 
        setorderDetail({
          ...orderDetail,
          [name]: value
        });      
       }

    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName: orderDetail.nombre,
                    lastName: orderDetail.apellido,
                    phone: orderDetail.telefono,
                    address: orderDetail.direccion
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'productos')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore
    
            const outOfStock = []
    
            const batch = writeBatch(db)
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)                
                setNotification('success',`El id de su orden es: ${orderAdded.id}`)
                
                console.log(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
                setOrderCreated(true)
                setTimeout(() => {
                    navigate('/')
                }, 3000)
            } else {
                console.log('Hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    if(isLoading) {        
        return <h1>Se esta generando tu orden..</h1>
    }

    if(orderCreated) {        
        return <h1>La orden fue creada correctamente, sera redirigido al listado de productos en 3 segundos</h1>
    }

    return (
        <>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <div className="formContent">
                
                <div className="inputDiv">
                    <label className="labelsForm">Nombre</label>
                    <input className="inputsForm" type="text" name="nombre" onChange={handleOnChange}/>

                </div>
                <div className="inputDiv">
                    <label className="labelsForm">Apellido</label>
                    <input className="inputsForm"  type="text" name="apellido" onChange={handleOnChange}/>

                </div>
                <div className="inputDiv">
                    <label className="labelsForm">Telefono</label>
                    <input className="inputsForm"  type="text" name="telefono" onChange={handleOnChange}/>
                </div>
                <div className="inputDiv">
                    <label className="labelsForm">Direccion</label>
                    <input className="inputsForm"  type="text" name="direccion" onChange={handleOnChange}/>
                </div>
                <button className="Option" onClick={createOrder}>Generar Orden</button>

            </div>
            
            
        </>
    )
}

export default Checkout