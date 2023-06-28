export async function getTrollies() {
    return [
        {
            region: 'Tiv-Taam Netanya Beni-Hagaon',
            regionId: '6495731c4affbb1d0cd914d5',
            capacity: 
            [
                {
                    'in-use': 3,
                    missing: 10,
                    docking: 12,
                    broken: 1
                },
                {
                    'in-use': 13,
                    missing: 4,
                    docking: 3,
                    broken: 4
                },
                {
                    'in-use': 22,
                    missing: 14,
                    docking: 33,
                    broken: 1
                }
            ]
        }
    ]
}


export async function getTrolliesById(id) {
    return   {
        region: 'Tiv-Taam Netanya Beni-Hagaon',
        regionId: '6495731c4affbb1d0cd914d5',
        capacity: 
        [
            {
                key: 1,
                'in-use': 3,
                missing: 10,
                docking: 12,
                broken: 1
            },
            {
                key: 2,
                'in-use': 13,
                missing: 4,
                docking: 3,
                broken: 4
            },
            {
                key: 3,
                'in-use': 22,
                missing: 14,
                docking: 33,
                broken: 1
            }
        ]
    }
}


export async function getMissingTrollies() {

    return [

        {
            branchId: '6495731c4affbb1d0cd914d5',
            missings: [
                {
                    imageUrl: 'src\\Assets\\product_cart.png',
                    productId: 1,
                    title: 'Trolley',
                    amount: 20
                }
            ]
        },
        {
            branchId: '64957831a7a9eadef390b3d1',
            missings: [
                {
                    imageUrl: 'src\\Assets\\product_cart.png',
                    productId: 1,
                    title: 'Trolley',
                    amount: 13
                }
            ]
        },
        {
            branchId: '64957831a7a9eadef390b3d2',
            missings: [
                {
                    imageUrl: 'src\\Assets\\product_cart.png',
                    productId: 1,
                    title: 'Trolley',
                    amount: 7
                }
            ]
        }
    ]
}




