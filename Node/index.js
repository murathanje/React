// setInterval(() => {
//     console.log("Merhaba");
// },1000);
import fetch from "node-fetch";
import axios from "axios";
// const sayHi = (cb) => {
//     cb();
// }

// sayHi(() => {
//     console.log("Merhaba");
// });

// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log("Users Yüklendi", users);

//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then(data => data.json())
//         .then(post => console.log("Postlar Yüklendi", post)); 
//     });



// async function getData(){
//     const {data: users} = await axios("https://jsonplaceholder.typicode.com/posts/1/comments");

//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
    
//     const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log(users);
//     console.log(post1);
//     console.log(post2);

// }


// const getComments = (number) => {

//     return new Promise ((resolve, reject) => {
//         if(number == 1){
//             resolve({text : "Selam"});
//         }else{
//             reject("Bir sorun oluştu");
//         }
//     });
// };

// getComments(2).then((data) => {
//     console.log(data);
// }).catch((e) => console.log(e));


const getComments = () => {

    return new Promise(async(resolve, reject) => {
            const { data } = await axios("https://jsonplaceholder.typicode.com/posts/1/comments");
            resolve(data);
    });
};

getComments().then((data) => {
    console.log(data);
}).catch((e) => console.log(e));