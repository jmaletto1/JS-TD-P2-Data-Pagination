// Treehouse Techdegree:
// FSJS Project 2 - Data Pagination and Filtering

// Create the `showPage` function
// This function will create and insert/append the elements needed to display a "page" of nine students
let pageNo = 1;

function searchForm() {
const header = document.querySelector('.header');
let searchHTML = `<label for="search" class="student-search">
            <input id="search" onkeyup="showPage(data, pageNo)" placeholder="Search by name...">
            <button type="button" id="search"><img src="img/icn-search.svg" alt="Search icon"></button>
          </label>`;
header.innerHTML += searchHTML;
header.addEventListener('submit', (e) => {
	e.preventDefault();
	alert(input.value);
});          
};

searchForm();

function showPage(list, page) {
let input = document.getElementById('search');
let nameKey = input.value;
console.log(nameKey);
let startIndex = (page * 9) - 9;
let endIndex = (page * 9) - 1;
const ul = document.querySelector('.student-list');
ul.innerHTML = "";

for (i=0; i<list.length; i++) {
	if (nameKey === '') {
		if (i >= startIndex && i<= endIndex && nameKey === '') {
			listMaker();
			function listMaker() {
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
			// const div2 = document.createElement('div');
			// div2.className = "joined-details";
			// ul.appendChild(div2);
			const span2 = document.createElement('span');
			span2.className = "date";
			span2.textContent = `${list[i].registered.date}`;
			div.appendChild(span2);
	};
}
		} else if (nameKey) {
						if (list[i].name.first === nameKey || list[i].name.last === nameKey) {
								for (i=0; i<list.length; i++) {
				console.log(list[i].name.first);
listMaker(data);
	}
}}}
};

showPage(data, pageNo);
// pageNo = prompt("Which page number would you like to see?");
// showPage(data, pageNo);

function appendPageLinks(list) {
const noOfPages = list.length / 9;
const lowerUL = document.querySelector('.link-list');
lowerUL.innerHTML = '';
for (z=1; z<noOfPages+1; z++) {
	li = document.createElement('li');
	button = document.createElement('button');
	button.textContent = z;
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
showPage(data, pageNo);
appendPageLinks(data);
});
};
};


appendPageLinks(data);

// /*
// Create the `addPagination` function
// This function will create and insert/append the elements needed for the pagination buttons
// */

// document.querySelector('.link-list').addEventListener('click', (e) => {
// const action = e.target.textContent;
// showPage(data, action);
// if (button.textContent == pageNo) {
// 		button.className = "active";
// 	} else {
// 		button.className = ""
// 	}
// });


// // Call functions
