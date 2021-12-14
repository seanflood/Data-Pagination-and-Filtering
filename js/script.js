


let studentsPerPage = 9; 







// showPage function displays a page of 9 students
// list = student data array
// page = page number displayed 


function showPage (list, page){
   let startIndex = (page * studentsPerPage) - studentsPerPage; 
   let endIndex = page * studentsPerPage;
   let studentList = document.querySelector('.student-list')
   studentList.innerHTML = ""; 


// loops through list to determine students displayed on page based on index value and adds to studentList
   if(list.length > 0){
   for (let i = 0; i <= list.length; i++){
      if(i >= startIndex && i < endIndex){
         let studentItem = `
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
         <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div>
       </li>
         `
         studentList.insertAdjacentHTML('beforeend' , studentItem); 
      }
   }
   }else{
      studentList.insertAdjacentHTML('beforeend', '<h1> No Results Found</h1>')
   }
}
















//addPagination function creates page buttons in increments of 9

function addPagination(list) {
   let numOfPages = Math.ceil(list.length / 9); 
   let linkList = document.querySelector('.link-list'); 
   linkList.innerHTML = '';

   for (let i = 1; i <= numOfPages; i++){
      let button = 
      `<li>
         <button type="button">${i}</button>
      </li>`;

      linkList.insertAdjacentHTML('beforeend', button)
      document.querySelector('button').className = "active";
      }

      linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON'){; 
         document.querySelector('.active').className = ''; 
         e.target.className = 'active'; 
         }
         showPage(list, e.target.textContent) 

          

      })

   } 













// create searchBar form and append to header

let searchBar = document.createElement('form'); 
searchBar.innerHTML = `
<label for="search" class="student-search">
   <span>Search by name</span>
   <input id="search" placeholder="Search by name...">
   <button #id="submit" class = "searchButton" type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`

document.querySelector('header').appendChild(searchBar);

//search button & input box 
let searchButton = document.querySelector('.searchButton'); 
let searchInput = document.querySelector('#search'); 


//searchIt function displays 'students' containing value of user input

function searchIt (entry, list){
   let newList = []; 
   for (let i = 0; i < list.length; i++){
      let fullName = list[i].name.first + list[i].name.last;
      let input = entry.value
         if(input !== 0 && fullName.toLowerCase().includes(input.toLowerCase())){
            newList.push(list[i]); 
            addPagination(newList);

            
         }
      } 
      showPage(newList, 1)
   }













//WORKING event listener on search button CLICK
searchButton.addEventListener('click', (e) =>{
   searchIt(searchInput, data);
})

//WORKING event listener on search box KEYUP

searchInput.addEventListener('keyup', (e) =>{
   searchIt(searchInput, data);

})








addPagination(data);
showPage(data, 1);