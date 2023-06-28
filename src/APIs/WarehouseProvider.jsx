export async function getWarehouses() {

    return [

        {
            id: '6495731c4affbb1d0cd914d5',
            name: 'Netanya',
            address: "Beni Ha'gaon",
            exists: [
                {
                    productId: 1,
                    description: "this trolley is .... ",
                    title: 'Trolley',
                    imageUrl: 'src\\Assets\\product_cart.png',
                    amount: 20
                },
                {
                    productId: 2,
                    description: "this basket is .... ",
                    title: 'Basket',
                    imageUrl: 'src\\Assets\\product_basket.png',
                    amount: 12
                }
            ]
        },
        {
            id: '64957831a7a9eadef390b3d1',
            name: 'Herzliya',
            address: "Ben Guryon",
            exists: [
                {
                    productId: 2,
                    description: "this basket is .... ",
                    title: 'Basket',
                    imageUrl: 'src\\Assets\\product_basket.png',
                    amount: 12
                }
            ]
        },
        {
            id: '64957831a7a9eadef390b3d2',
            name: 'Tel-Aviv',
            address: "Yehuda Halevi",
            exists: [
                {
                    productId: 2,
                    description: "this basket is .... ",
                    title: 'Basket',
                    imageUrl: 'src\\Assets\\product_basket.png',
                    amount: 7
                }
            ]
        }
    ]
}


export async function getWarehouseProducts(warehouseId) {
    const branches = await getWarehouses()
    const branch = branches.filter(b => b.id == warehouseId)
    return branch[0]
}
