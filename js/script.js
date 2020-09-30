// Treehouse Techdegree:
// FSJS Project 2 - Data Pagination and Filtering
let pageNo = 1;
let ul = document.querySelector('.student-list');
ul.innerHTML = "";

// Create the `showPage` function
// This function will create and insert/append the elements needed to display a "page" of nine students

function showPage(list, page) {
let startIndex = (page * 9) - 9;
let endIndex = (page * 9) - 1;
ul.innerHTML = "";

for (let i=0; i<list.length; i++) {
		if (i >= startIndex && i<= endIndex) {
			const li = document.createElement('li');
			li.className = "student-item cf";
			ul.appendChild(li);
			const div = document.createElement('div');
			div.className = "student-details";
			li.appendChild(div);
			const img = document.createElement('img');
			img.className = "avatar";
			img.src = `${list[i].picture.thumbnail}`;
			img.alt = "Profile Picture";
			div.appendChild(img);
			const h3 = document.createElement('h3');
			h3.textContent = `${list[i].name.title} ${list[i].name.first} ${list[i].name.last}`;
			div.appendChild(h3);
			const span = document.createElement('span');
			span.className = "email";
			span.textContent = `${list[i].email}`;
			div.appendChild(span);
			const span2 = document.createElement('span');
			span2.className = "date";
			span2.textContent = `${list[i].registered.date}`;
			div.appendChild(span2);
	};
}
};

// /*
// Create the `addPagination` function
// This function will create and insert/append the elements needed for the pagination buttons
// */

function appendPageLinks(list) {
const noOfPages = list.length / 9;
const lowerUL = document.querySelector('.link-list');
lowerUL.innerHTML = '';
for (pNum=1; pNum<noOfPages+1; pNum++) {
	li = document.createElement('li');
	button = document.createElement('button');
	button.id = pNum;
	button.textContent = pNum;
	// button.className = "active";
	if (button.textContent == pageNo) {
		button.className = "active";
	} else {
		button.className = ""
	}
	lowerUL.appendChild(li);
	li.appendChild(button);
	button.addEventListener('click', (e) => {
pageNo = e.target.textContent;
const totalButtons = lowerUL.querySelectorAll('li button');
for (let butNo = 0; butNo < totalButtons.length; butNo++) {
	if (totalButtons[butNo].className === "active") {
		totalButtons[butNo].className = '';
	}
	e.target.className = "active";
}
showPage(data, pageNo);
// appendPageLinks(data);
});
};
};

// Search Function
function searchForm() {
const header = document.querySelector('.header');
let searchHTML = `<label for="search" class="student-search">
            <input id="searchMaster" placeholder="Search by name...">
            <button type="button" id="searchButton"><img src="img/icn-search.svg" alt="Search icon"></button>
          </label>`;          
header.innerHTML += searchHTML;
const searchData = document.getElementById('searchMaster');

searchData.addEventListener('keyup', (e) => {
searchValue = e.target.value.toUpperCase();
const results = [];
for (let entry=0; entry<data.length; entry++) {
	const firstName = data[entry].name.first.toUpperCase();
	const lastName = data[entry].name.last.toUpperCase();
		if(firstName.includes(searchValue) || lastName.includes(searchValue)) {
		results.push(data[entry])
		showPage(results, 1);
		appendPageLinks(results);
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