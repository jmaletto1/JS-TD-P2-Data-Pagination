// Treehouse Techdegree:
// FSJS Project 2 - Data Pagination and Filtering

// Create the `showPage` function
// This function will create and insert/append the elements needed to display a "page" of nine students


function showPage(list, page) {
let startIndex = (page * 9) - 9;
let endIndex = page * 8;
const ul = document.querySelector('.student-list');
ul.innerHTML = "";

for (i=0; i<list.length; i++) {
	if (i >= startIndex && i<= endIndex) {
		const li = document.createElement('li');
		li.className = "stduent-item cf";
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

		} else {
			// alert("Hmm!");
	}
}
};

showPage(data, 1);


// /*
// Create the `addPagination` function
// This function will create and insert/append the elements needed for the pagination buttons
// */



// // Call functions
