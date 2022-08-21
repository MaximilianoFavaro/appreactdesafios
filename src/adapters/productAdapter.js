export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        name: data.name,
        price: data.price,
        img: data.img,        
        category: data.category,
        description: data.description
    }
    
    return productAdapted
}