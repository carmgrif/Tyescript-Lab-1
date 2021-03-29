//MOUNTAIN TYPESCRIPT EXAMPLE


interface Mountain{
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    {
    name: 'Kilimanjaro',
    height: 19341
},

{
    name: 'Everest',
    height: 29029
},
    
{
    name: 'Denali',
    height: 20310
    }
];

function findNameOfTallestMountain(mountains: Mountain[]) {

    let tallest = null;

    for (let mountain of mountains) {
        if (!tallest) {
            tallest = mountain
        }

        if (mountain.height > tallest.height) {
            tallest = mountain
        }
        console.log(`The tallest mountain you've climbed is ${tallest.name}`)

          
        return tallest?.name;
        
    }
};



//PRODUCT TYPESCRIPT EXAMPLE

interface Product{
    name: string;
    price: number;
}

const products: Product[] = [
    {
        name: 'watch',
        price: 2599
    },

    {
        name: 'earrings',
        price: 350
    },

    {
        name: 'bracelet',
        price: 499
    }
]


function calcAverageProductPrice(products: Product[]) {
    
    let total = 0;
    let avgCost = 0;

    for (let product of products) {
        if (!avgCost) {
            avgCost = 0;
        }
        if (product.price > 0) {
            total = (total + product.price)/products.length
        }
          console.log(avgCost)
    } return avgCost
    
}


//INVENTORY TYPESCRIPT EXAMPLE

interface InventoryItem{
    product: string;
    quantity: number;
    price: number;
}

const inventory: InventoryItem[] = [
    {
        product: 'motor',
        price: 10.00,
        quantity: 10
    },

    {
        product: 'sensor',
        price: 12.50,
        quantity: 4
    },

    {
        product: 'LED',
        price: 1.00,
        quantity: 20
    },
]

function calcInventoryValue(inventory: InventoryItem[]) {

    let total = 0; 
    
    for (let invItem of inventory) {
        if (!invItem.inventory){
            total = 0;
        }
        if (invItem.quantity > 0) {
            total = total += invItem.price * invItem.quantity
        }
    } return total;
}