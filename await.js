console.log('Person1: Shows ticket');
console.log('Person2: Shows ticket');

const preMovie = async() => {

    const promiseWifeBringingTic = new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(`Ticket`);
        },2000)
    });
    const getPopcorn = new Promise((resolve,reject)=> resolve(`Popcorn`));

    const getColdDrinks = new Promise((resolve,reject) => resolve(`Cold Drink`));

    let ticket = await promiseWifeBringingTic;

    let[popcorn,colddrink] = await Promise.all([getPopcorn,getColdDrinks])

    console.log(`${popcorn},${colddrink}`);

 return ticket;
}

preMovie().then(m => console.log(`Person3: Shows ${m}`));

console.log('Person4: Shows ticket');
console.log('Person5: Shows ticket');