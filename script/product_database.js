const products_list = [
    {
        id: "p001",
        name: "Печенье с шоколадной крошкой",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Сочное печенье с богатой шоколадной крошкой.",
        image: "images/chocolate.jpg",
        rating: 4
    },
    {
        id: "p002",
        name: "Ваниль Häagen-Dazs",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Нежное ванильное мороженое премиум-класса.",
        image: "images/vannila.jpg",
        rating: 5
    },
    {
        id: "p003",
        name: "Домашняя ваниль",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Традиционное ванильное мороженое, приготовленное по семейному рецепту.",
        image: "images/mango.jpg",
        rating: 4
    },
    {
        id: "p004",
        name: "Печенье и крем",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Сочетание хрустящего печенья и нежного крема.",
        image: "images/vannila.jpg",
        rating: 5
    },
    {
        id: "p005",
        name: "Джелато с клубникой",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Изысканное Джелато с нотками клубники и пудры.",
        image: "images/strawberry.jpg",
        rating: 4
    },
    {
        id: "p006",
        name: "Страчателла Джелато",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Кремовое Джелато с кусочками шоколада.",
        image: "images/peanut-butter.jpg",
        rating: 5
    },
    {
        id: "p007",
        name: "Пистачиновое Джелато",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Ароматное Джелато с насыщенным вкусом пистачио.",
        image: "images/mango.jpg",
        rating: 4
    },
    {
        id: "p008",
        name: "Средиземноморская мята",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Свежий джелато с мятными нотками.",
        image: "images/mint.jpg",
        rating: 3
    },
    {
        id: "p009",
        name: "Малиновое сорбетто",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Освежающий сорбетто с ярким малиновым вкусом.",
        image: "images/rainbow.jpg",
        rating: 4
    },
    {
        id: "p010",
        name: "Манговое сорбет",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Экзотическое сорбет с насыщенным вкусом манго.",
        image: "images/mango.jpg",
        rating: 5
    },
    {
        id: "p011",
        name: "Ягодный сорбет",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Сочный сорбет с разнообразием ягодных вкусов.",
        image: "images/blue berry.jpg",
        rating: 3
    },
    {
        id: "p012",
        name: "Лимонный сорбет",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Свежий сорбет с ярким лимонным вкусом.",
        image: "images/chocolate.jpg",
        rating: 4
    },
    {
        id: "p013",
        name: "Клубничный сорбет",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Нежный сорбет с насыщенным клубничным вкусом.",
        image: "images/strawberry.jpg",
        rating: 5
    },
    {
        id: "p014",
        name: "Шоколадный сорбет",
        flavor_id: "f003",
        off: 4,
        price: 50,
        description: "Густой сорбет с богатым шоколадным вкусом.",
        image: "images/chocolate.jpg",
        rating: 4
    },
    {
        id: "p015",
        name: "Оригинальный замороженный йогурт",
        flavor_id: "f004",
        off: 25,
        price: 50,
        description: "Кремовый йогурт с натуральными ингредиентами.",
        image: "images/peanut-butter.jpg",
        rating: 5
    },
    {
        id: "p016",
        name: "Йогурт с ванильными бобами",
        flavor_id: "f004",
        off: 10,
        price: 50,
        description: "Ароматный йогурт с кусочками ванильных бобов.",
        image: "images/vannila.jpg",
        rating: 4
    },
    {
        id: "p017",
        name: "Клубника",
        flavor_id: "f004",
        off: 8,
        price: 50,
        description: "Свежий йогурт с добавлением натуральной клубники.",
        image: "images/strawberry.jpg",
        rating: 4
    },
    {
        id: "p018",
        name: "Радужный со вкусом кекса",
        flavor_id: "f004",
        off: 12,
        price: 50,
        description: "Йогурт с насыщенным вкусом кекса.",
        image: "images/rainbow.jpg",
        rating: 3
    },
    {
        id: "p019",
        name: "Греческий йогурт",
        flavor_id: "f004",
        off: 8,
        price: 50,
        description: "Аутентичный греческий йогурт с густой консистенцией.",
        image: "images/vannila.jpg",
        rating: 5
    },
    {
        id: "p020",
        name: "Пистачио",
        flavor_id: "f004",
        off: 1,
        price: 50,
        description: "Йогурт с изысканным вкусом пистачио.",
        image: "images/chocolate.jpg",
        rating: 4
    },
    {
        id: "p021",
        name: "Брауни с фаджем",
        flavor_id: "f005",
        off: 0,
        price: 50,
        description: "Богатый брауни с насыщенным вкусом фаджа.",
        image: "images/blue berry.jpg",
        rating: 5
    },
    {
        id: "p022",
        name: "Арахисовое масло",
        flavor_id: "f005",
        off: 3,
        price: 50,
        description: "Йогурт с добавлением натурального арахисового масла.",
        image: "images/rainbow.jpg",
        rating: 4
    },
    {
        id: "p023",
        name: "Мята с шоколадом без молока",
        flavor_id: "f005",
        off: 15,
        price: 50,
        description: "Освежающий йогурт с мятным и шоколадным вкусом, без молока.",
        image: "images/mint.jpg",
        rating: 4
    },
    {
        id: "p024",
        name: "Овсяное молоко с шоколадом",
        flavor_id: "f005",
        off: 8,
        price: 50,
        description: "Йогурт на основе овсяного молока с шоколадным вкусом.",
        image: "images/chocolate.jpg",
        rating: 3
    }
]

export default products_list;
