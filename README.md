# Data-Pagination-and-Filtering
// |Team Treehouse FSJS Unit 2 project|
// |Sean Flood Dec, 2021|
// |A website to display several “pages” of student data that the user can easily navigate and view.|

-In the "data.js" file there is an array of "student" objects. 
-This code uses that array to display the student items in increments of 9 to the page. 

The "showPage" function takes two params(list, page)
- The list param is where the 'data.js' file is pulled in
- The page param is which page number is being displayed currently. 

The "addPagination" function takes one param(list). 
- The function takes the "list" param and divides it by 9 to calculate the number of pages needed 
- Then it checks if the page number === 1, in which case it is set to the ".active" style class 
- If the page is not === 1 it inserts each iteration into the link-list ul to create the page number list
- The linkList click handler sets the class of the e.target to 'active' making it display as blue and removes the 'active' class from any other buttons. 


The 'searchIt' funtion takes two params(entry, list)
-The input of the search bar is checked and ran against the student list to see if student items contain the search input. 
-If the student item contains the search input value, it is appended to the newList array. 
-The newList array is then used as the argument for the showPage function to display the student items containing the search value. 

An event listener is called on the search button on "click" and on the search input box on "keyup"
