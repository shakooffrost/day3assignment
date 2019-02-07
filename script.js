// var bottlesOfBeer = 99;

// while (bottlesOfBeer > 0) {

//     console.log(bottlesOfBeer + 'bottles of beer on the wall');
//     bottlesOfBeer = bottlesOfBeer - 1;
// }

//while loop activity. write a while loop that gives you the 9 times table, from 9x1=9 to 9x12=108.
//bonus: try using a loop inside a loop to write all the times tables, from 1 to 12. -> not done

// var table = 1; 

// while (table <= 12) {
//     console.log(table * 9);
//     table++;
// }

// //all the times tables
// var num = 1;
// while (num <= 12) {
//     var num2 = 1;
//     while (num2 <= 12) {
//         console.log(num * num2);
//         num2++;
//     }
//     num++;
// }

//for loop -9 times table
// for (var i = 1; i < 13; i++) {
//     console.log(i * 9);

// }
//all times table
// for (var i = 1; i < 13; i++) {
//     for (var i2 = 1; i < 13; i2++) {
//         console.log(i * i2);
//     }
// }

// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i + ' is even ');
//     } else {
//         console.log(i + ' is odd');
//     }
// }

////for loop breaking the loop when it hits 6
// for (var i = 1; i <= 12; i++) {
//     console.log('testing ' + i);
//     if (i == 6) {
//         console.log('found it ' + i);
//         break;
//     }
// }

//Array

// var food = ['hamburger', 'ramen', 'chili', 'some food'];
// var firstFood = food[0];
// var lastFood = food[3];

////changing array replacing 3rd food item in your array. counting starts in 0

// var myFavoriteThings = ['ice cream', 16, 'Doctor Strange'];
// myFavoriteThings[2] = 'Asparagus';
// console.log(myFavoriteThings);

// //expanding array

// var myFavoriteThings = ['ice cream', 16, 'Doctor Strange'];
// myFavoriteThings.push('Asparagus');
// console.log(myFavoriteThings);

// //iterating through arrays

// var food = ['hamburger', 'ramen', 'chili', 'some food', 'fried chicken', 'steak', 'crab salad'];
// for (var i = 0; i < food.length; i++) {
//     console.log(food[i]);
// }



//objects


// var user = {
//     hometown: 'atlanta, GA',
//     hair: 'Brown',
//     likes: ['gaming', 'code'],
//     birthday: { month: 06, day: 18 }

// };
// console.log(user.hometown);

// var wendys = {
//     recipeTitle: 'hamburger',
//     recipeDescription: 'sandwich contains meat and BLTs',
//     ingredients: 'bun, burger patty, tomatoes, onions, mayo, ketchup, bacon',
//     directions: 'do this, do that, do everything',
//     rating: 10,
//     servings: '1 per person'
// }
// function recipeOrder(recipe) {
//     console.log(recipe.recipeTitle + " with " + recipe.servings);
// }
// recipeOrder(wendys);




// var movies = [
//     { name: 'Avengers: Infinity War ', rating: 10 },
//     { name: 'The Martian', rating: 5 }
// ];
// for (var i = 0; i < movies.length; i++) {
//     var movie = movies[i];
//     console.log('i give ' + movie.name + " " + movie.rating + ' stars.');
// }


//objects

var wendys = {
    recipeTitle: 'hamburger',
    recipeDescription: 'sandwich contains meat and BLTs',
    ingredients: 'bun, burger patty, tomatoes, onions, mayo, ketchup, bacon',
    directions: 'do this, do that, do everything',
    rating: 10,
    servings: '1 per person',

    talk: function () {
        console.log("hello! ");
    },
    letsCook: function (recipe) {
        console.log("I'm hungry! Let's cook... " + recipe.recipeTitle);
    }
};

wendys.talk();
wendys.letsCook(wendys);