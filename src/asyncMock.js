const products = [
    { 
        id: '1', 
        name: 'Heladera Phillip', 
        price: 1000, 
        category: 'Heladera', 
        img:'images/heladera.jpg', 
        stock: 25, 
        description:'Heladera de calidad suprema'
    },
    { id: '2', name: 'Lavarropas', price: 800, category: 'Lavarropas',
      img:'images/lavarropas.jpg', stock: 16, description:'Lavarropas Lavatodo'},
    { id: '3', name: 'Cocina', price: 1200, category: 'Cocinas', img:'images/cocina.jpg', stock: 10, description:'Descripcion de Ipad'}
]

export const getProductsDeAlfredo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}