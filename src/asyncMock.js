const products = [
    { id: '1',  name: 'Mesa de Pino',        price: 1500, category: 'mesas',  img:'../images/mesa1.jpg',         stock: 25, description:'Mesa 1 de calidad suprema' },
    { id: '2',  name: 'Mesa de Roble',       price: 1200, category: 'mesas',  img:'../images/mesa2.jpg',         stock: 25, description:'Mesa 2 de calidad suprema' },
    { id: '3',  name: 'Silla PC',            price: 6000, category: 'sillas', img:'../images/sillapc1.jpg',      stock: 25, description:'Silla pc Muy comoda' },
    { id: '4',  name: 'Silla PC - Comod',    price: 7600, category: 'sillas', img:'../images/sillapc2.jpg',      stock: 25, description:'Silla pc super comoda' },
    { id: '5',  name: 'Ropero Algarrobo',    price: 9800, category: 'ropero', img:'../images/ropero1.jpg',       stock: 25, description:'Ropero grande' },
    { id: '6',  name: 'Ropero Pino',         price: 8900, category: 'ropero', img:'../images/ropero2.jpg',       stock: 25, description:'Ropero demaciado grande de calidad suprema' },
    { id: '7',  name: 'Mueble de baño pepe', price: 5000, category: 'baño',   img:'../images/baño1.jpg',         stock: 25, description:'Mueble de baño de calidad suprema' },
    { id: '8',  name: 'Mueble de baño juan', price: 3000, category: 'baño',   img:'../images/baño2.jpg',         stock: 25, description:'Mueble de baño de calidad media' },
    { id: '9',  name: 'Mueble de jardin JJ', price: 2300, category: 'jardin', img:'../images/mueblejardin1.jpg', stock: 25, description:'Mesa ideal para el mate' },
    { id: '10', name: 'Mueble de jardin MM', price: 7800, category: 'jardin', img:'../images/mueblejardin2.jpg', stock: 25, description:'Mesa ideal para el chisme' }
]

export const getProductsDeAlfredo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}