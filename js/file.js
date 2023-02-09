const user = {
    name: 'Jaroslav',
    lastName: 'Makukha',
    age: 16,
    numbers: [13, 22, 31, 49],
    rating: 13,
    location: {
        country: 'Germany',
        town: 'Tuttlingen',
    }
}
function helloUser(params){
    const {name, lastName, age, numbers, rating, location: country, town} = user;
    console.log(`Привіт ${name} ${lastName}, ваш вік ${age} та у ваших минулих спробах ${numbers}, ваш рейтинг ${rating} та місце знаходження ${country} ${town}`);
}
helloUser(user)
