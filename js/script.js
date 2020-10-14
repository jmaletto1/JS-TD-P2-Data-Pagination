// Treehouse Techdegree:
// FSJS Project 2 - Data Pagination and Filtering
let pageNo = 1;
const ul = document.querySelector('.student-list');
ul.innerHTML = "";

// Create the `showPage` function
// This function will create and insert/append the elements needed to display a "page" of nine students
function createElement(elementName, property) {
	const element = document.createElement(elementName);
	element.className = property;
	return element;
}

function appendToDiv(element, elementName, property, value) {
	el = createElement(elementName, property, value);
	if (elementName == "img") {
		el.src = value;
		el.alt = property;
		el.className = "avatar";
	} else {
		el.textContent = value;
	}
	element.appendChild(el);
}


function showPage(list, page) {
const startIndex = (page * 9) - 9;
let endIndex = (page * 9) - 1;
ul.innerHTML = "";

for (let i=0; i<list.length; i++) {
		if (i >= startIndex && i<= endIndex) {

			const li = createElement('li', 'student-item cf');
			const div = createElement('div', 'student-details');

			appendToDiv(div, 'img', 'Profile Picture', `${list[i].picture.thumbnail}`);
			appendToDiv(div, 'h3', `${list[i].name.title} ${list[i].name.first} ${list[i].name.last}`);
			appendToDiv(div, 'span', 'email', `${list[i].email}`);
			appendToDiv(div, 'span2', 'date', `${list[i].registered.date}`);

			li.appendChild(div);
			ul.appendChild(li);
	};
}
};

// /*
// Create the `addPagination` function
// This function will create and insert/append the elements needed for the pagination buttons
// */

function appendPageLinks(list) {
// Here I've set the constants for the Number of Pages, and assigned the lowerUL to the .link-list section.
const noOfPages = list.length / 9;
const lowerUL = document.querySelector('.link-list');
lowerUL.innerHTML = '';

// We then loop through the Number of Pages (noOfPages) to create the required amount of pagination buttons.
for (pNum=1; pNum<noOfPages+1; pNum++) {
	li = document.createElement('li');
	button = document.createElement('button');
	button.id = pNum;
	button.textContent = pNum;

// If the button's textContent is equal to the page number, we set the className to "active". If not, it is set to an empty string.
	if (button.textContent == pageNo) {
		button.className = "active";
	} else {
		button.className = ""
	}

// These page buttons are then appended to index.hmtl	
	lowerUL.appendChild(li);
	li.appendChild(button);

// We then listen out for a button click, which starts an arrow function. This selects all of the buttons in the li, and loops through them.
// If any of the buttons have an "active" classname, it is removed. Outside of the if statement, the page that matches the targeted button
// has it's className set to active.	
	button.addEventListener('click', (e) => {
const totalButtons = lowerUL.querySelectorAll('li button');
for (let butNo = 0; butNo < totalButtons.length; butNo++) {
	if (totalButtons[butNo].className === "active") {
		totalButtons[butNo].className = '';
	}
	e.target.className = "active";
	pageNo = e.target.textContent;
}
// We then call the showPage function to show the correct set of results, from the relevant page number.
showPage(list, pageNo);
});
};
};

// Search Function
// This function starts off by selecting the header element, and adding the necessary HTML to accept search input.
function searchForm() {
const header = document.querySelector('.header');
const searchHTML = `<label for="search" class="student-search">
            <input id="searchMaster" placeholder="Search by name...">
            <button type="button" id="searchButton"><img src="img/icn-search.svg" alt="Search icon"></button>
          </label>`;          
header.innerHTML += searchHTML;

// The function then selects the "form" input and listens for a 'keyup' event. Next, it convers the value submitted to upper case.
const searchData = document.getElementById('searchMaster');
searchData.addEventListener('keyup', (e) => {
searchValue = e.target.value.toUpperCase();

// Next the function creates an empty list. This will then loop through all the first and last name values, and assign them to variables.
const results = [];
for (let entry=0; entry<data.length; entry++) {
	const firstName = data[entry].name.first.toUpperCase();
	const lastName = data[entry].name.last.toUpperCase();

// The function then compares the search term to both the first and last name values.	
		if(firstName.includes(searchValue) || lastName.includes(searchValue)) {

// If there is a match, the entry is appended to the results array. The showPage and appendPageLinks functions are then called.
		results.push(data[entry])
		showPage(results, 1);
		appendPageLinks(results);

// If there are no matches, the function prints a message to the UL, and does not display any page buttons.
	} else if (results.length === 0) {
		ul.innerHTML = "<div><h3> Unfortunately there are no matches! Please try again.</h3></div>";//
		appendPageLinks(results);
	}
}
})
}

// // Call functions
showPage(data, pageNo);
appendPageLinks(data);
searchForm();