let product = [
    {
        id: 1,
        name: "TV",
        price: 2000.00
    },
    {
        id: 2,
        name: "Computador",
        price: 3000.00
    }
]

export function findById(id: number) {
    return product.find(p => p.id === id);
}