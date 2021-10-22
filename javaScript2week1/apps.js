// const bookList =["pride_and_prejudice", "to_kill_a_mockingbird", "the_great_gatsby", 
//                  "one_hundred_years_of_solitude", "in_cold_blood", "wide_sargasso_sea",
//                  "brave_new_world", "i_capture_the_castle","gone_with_the_wind", 
//                  "jane_eyre"]


// /*1.3*/
// function bookNameWithOrder(){ 
//     let cont = document.getElementById('container');
//     let ul = document.createElement('ul');

//     for(let i=0; i<bookList.length;i++){

//         let li = document.createElement('li');

//         li.innerHTML = bookList[i];
//         ul.appendChild(li);
//     }
//     cont.appendChild(ul);
// }
// bookNameWithOrder()


/*1.5*/
const books = {
    1: {title: "pride_and_prejudice", language: "English", author: "Jane.Austin"},
    2: {title: "to_kill_a_mockingbird", language: "English", author: "John"},
    3: {title: "the_great_gatsby", language: "English", author: "Jack"},
    4: {title:  "one_hundred_years_of_solitude", language: "English", author: "Jason"},
    5: {title: "in_cold_blood", language: "English", author: "Mike"},
    6: {title: "wide_sargasso_sea", language: "English", author: "John"},
    7: {title: "brave_new_world", language: "English", author: "Bill"},
    8: {title: "i_capture_the_castle", language: "English", author: "William"},
    9: {title:"gone_with_the_wind", language: "English", author: "Steven"},
    10: {title: "jane_eyre", language: "English", author: "Figo"},
    
}


function bookInfor(books){
        let contentB = document.getElementById('books'); 
        let ul = document.createElement('ul');

        for (let infor in books){
            let li = document.createElement('li');

            li.innerHTML += books[infor].title + "<br>" + 
            books[infor].language + "<br>" +
            books[infor].author + "<br>";

            ul.appendChild(li)
    }
    contentB.appendChild(ul);
}
bookInfor(books)


// function addingImag(){
    
    
// }
// addingImg()



