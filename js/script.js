const PRODUCTS = [
	{
		id: 1,
		title: "Aircraft Carrier",
		img: "aircraft-carrier",
		price: 30000,
		sale: true,
		salePercent: 2,
		categories: ['Boat']
	},
	{
		id: 2,
		title: "Boat",
		img: "boat",
		price: 700,
		sale: false,
		categories: ['Boat']
	},
	{
		id: 3,
		title: "Bus",
		img: "bus",
		price: 300,
		sale: true,
		salePercent: 10,
		categories: ['Bus']
	},
	{
		id: 4,
		title: "Cabriolet",
		img: "cabriolet",
		price: 900,
		sale: true,
		salePercent: 25,
		categories: ['Car']
	},
	{
		id: 5,
		title: "Commercial Plane",
		img: "commercial-plane",
		price: 1000,
		sale: false,
		categories: ['Aircraft']
	},
	{
		id: 6,
		title: "Electric car",
		img: "electric-car",
		price: 3000,
		sale: false,
		categories: ['Car']
	},
	{
		id: 7,
		title: "Helicopter police",
		img: "helicopter-police",
		price: 1000,
		sale: true,
		salePercent: 15,
		categories: ['Aircraft', 'Helicopter']
	},
	{
		id: 8,
		title: "Helicopter",
		img: "helicopter",
		price: 900,
		sale: true,
		salePercent: 35,
		categories: ['Aircraft', 'Helicopter']
	},
	{
		id: 9,
		title: "Minibus",
		img: "minibus",
		price: 700,
		sale: true,
		salePercent: 5,
		categories: ['Car', 'Bus']
	},
	{
		id: 10,
		title: "Motorbike",
		img: "motorbike",
		price: 200,
		sale: true,
		salePercent: 25,
		categories: ['Bike']
	},
	{
		id: 11,
		title: "Off Road",
		img: "off-road",
		price: 600,
		sale: false,
		categories: ['Car']
	},
	{
		id: 12,
		title: "Police Car",
		img: "police-car",
		price: 100,
		sale: false,
		categories: ['Car']
	},
	{
		id: 13,
		title: "School Bus",
		img: "school-bus",
		price: 150,
		sale: true,
		salePercent: 8,
		categories: ['Bus']
	},
	{
		id: 14,
		title: "Scooter",
		img: "scooter",
		price: 80,
		sale: true,
		salePercent: 13,
		categories: ['Bike']
	},
	{
		id: 15,
		title: "Small Plane",
		img: "small-plane",
		price: 3000,
		sale: false,
		categories: ['Aircraft']
	},
	{
		id: 16,
		title: "Speed Boat",
		img: "speed-boat",
		price: 2000,
		sale: true,
		salePercent: 34,
		categories: ['Boat']
	},
	{
		id: 17,
		title: "Sport Car",
		img: "sport-car",
		price: 10000,
		sale: true,
		salePercent: 3,
		categories: ['Car']
	},
	{
		id: 18,
		title: "Suv",
		img: "Suv",
		price: 300,
		sale: true,
		salePercent: 13,
		categories: ['Car', 'Bus']
	}
];

const USERS = [
	{
		name: 'Ivan',
		email: 'ivan@gmail.com',
		password: '123',
		favourites: [9, 18, 7],
		status: false
	},
	{
		name: 'Ivan2',
		email: 'ivaqn@gmail.com',
		password: '1236',
		favourites: [9, 18, 7,5],
		status: false
	}
];

const LoginForm = document.querySelector(`#LoginForm`),
      RegistrationForm = document.querySelector(`#RegistrationForm`),
      headerUser = document.getElementById("headerUser"),
	    headerFavourites = document.querySelector(`#headerFavourites`),
	    headerLogout = document.querySelector(`#headerLogout`),
		categoriesContainer = document.querySelector(`#categoriesContainer`);
let loginCheck = false;
const usersData = localStorage.getItem('users');


//1.getStorageUsers
const getStorageUsers = () => {
	usersData ? JSON.parse(usersData) : localStorage.setItem(`users`, JSON.stringify(USERS))
	   return JSON.parse(usersData)
}
const storageUsers = getStorageUsers();
const userInSession = storageUsers.find(user => user.status === true);


//2.Login form
const loginHandler = () => {
	if (LoginForm) {
		LoginForm.addEventListener('submit', e => {

			e.preventDefault()

			let email = e.target.querySelector(`input[data-name="email"]`).value;
			let password = e.target.querySelector(`input[data-name="password"]`).value;


			const userEmail = storageUsers.find(user => user.email === email);
			const userPassword = storageUsers.find(user => user.password === password);
			if (!userEmail) {
				let massageError = document.querySelector(`.error`);
				massageError.innerHTML = `Invalid email`;
				massageError.classList.toggle(`active`);
			}

			else if (!userPassword) {
				let messageError = document.querySelector(`.error`);
				messageError.innerHTML = `Invalid password`;
				messageError.classList.toggle(`active`);
			}

			storageUsers.forEach(user => {
				if (user.email === email && user.password === password) {
					user.status = true
					loginCheck = true
				} else {
					user.status = false
				}
			})
				if (loginCheck) {
					document.location.href = `favourites.html`;
				}
				localStorage.setItem(`users`, JSON.stringify(storageUsers))
			})
	}
}

//Register form
const registrationHandler = () => {
	if (RegistrationForm) {
		RegistrationForm.addEventListener('submit', e => {
			e.preventDefault()

			let name = e.target.querySelector(`input[data-name="name"]`).value;
			let email = e.target.querySelector(`input[data-name="email"]`).value;
			let password = e.target.querySelector(`input[data-name="password"]`).value;
			let passwordVerify = e.target.querySelector(`input[data-name="passwordVerify"]`).value

			if (password !== passwordVerify)  {
				let messageError = document.querySelector(`.error`)
				messageError.innerHTML = `Password not matches!`;
				messageError.classList.toggle(`active`)
			}

			newUserEmail = storageUsers.find(user => user.email === email);
			newUserName = storageUsers.find(user => user.name === name);

			if (newUserEmail && newUserName) {
				let messageError = document.querySelector(`.error`)
				messageError.innerHTML = (`User with email ${email}  or  with name ${name} already exist!`);
				messageError.classList.toggle(`active`)
			}

			if (newUserEmail && newUserName && password !== passwordVerify) {
				let messageError = document.querySelector(`.error`)
				messageError.innerHTML = (`User with email ${email} already exist! OR   Password not matches!`);
				messageError.classList.toggle(`active`)
			}

			if (!newUserEmail && password === passwordVerify) {
				let newUser = {
					name: name,
					email: email,
					password: password,
					status: true,
					favourites: []
				}
				storageUsers.push(newUser)
				localStorage.setItem(`users`, JSON.stringify(storageUsers));
				document.location.href = `favourites.html`;
			}
		})
	}
}

// 4 РаботасШапкойсайта
if (userInSession) {
	headerUser.innerHTML = userInSession.name;
	headerUser.href = `favourites.html`;
	headerFavourites.href = `favourites.html `;

	const headerFavouritesCount = document.querySelector(`#headerFavouritesCount`);
	headerFavouritesCount.innerHTML = `${userInSession.favourites.length}`;
	headerLogout.classList.toggle(`active`);
}

//5 Навешиваем обработчик на кнопку Log out.
headerLogout.addEventListener('click', e => {
	const userInSession = storageUsers.find(user => user.status === true);
		userInSession.status = false;
		localStorage.setItem(`users`, JSON.stringify(storageUsers));
		document.location.href = `index.html`
})

//6  Для страницы index логика вывода товаров.
const renderCategorie = () => {
	let uniqueCategory = [];

	PRODUCTS.forEach(product => {
		let productCategory = product.categories
		productCategory.forEach(cat => {
				uniqueCategory.indexOf(cat) === -1 && uniqueCategory.push(cat)
		})
	})

	uniqueCategory.forEach(cat => {
		let section = document.createElement('section');
		section.className = 'category';
		section.dataset.name = cat;
		section.innerHTML = `<h2> ${cat} <h2>  <div class="category__container" > </div > `
		categoriesContainer.append(section);
	})
}

const renderProductSale = (product) => {
	let productSale = ``;

	if(product.sale){
		productSale =	`<div class="product__sale">
			<span class="product__sale--old">${product.price}</span>
			<span class="product__sale--percent">-${product.salePercent} % </span>
		                </div>`
	}
		return productSale;
}

const getProductPrice = product => {
	let productPrice = product.price ;
	if (product.salePercent) {
		let percent = (product.salePercent*100)/product.price;
				productPrice -= percent;
		}

	return productPrice.toFixed(2);
}

const updateStorageUsers = (user) => {
	
  const data = [...storageUsers.filter((item) => item.email !== userInSession.email)];
	data.push(user);
//console.log(data)
	return data;
};


const renderProducts = () => {
	PRODUCTS.forEach(product => {
		product.categories.forEach(cat => {
			let productDiv = document.createElement(`div`);
			productDiv.className = 'product'
			productDiv.innerHTML = `<img src="images/products/${product.img}.png" class="product__img" alt="${product.title}" height="80">
				<p class="product__title">${product.title}</p>
				${renderProductSale(product)}
				<div class="product__info">
					<span class="product__price"> ${getProductPrice(product)} </span>
		   	</div>`;

			let btnFavourite = document.createElement('button');
			btnFavourite.className = 'product__favourite';
			btnFavourite.dataset.favourit = false;
			btnFavourite.dataset.id = product.id;
			btnFavourite.id = product.id;

			let imgFavourite = document.createElement('img');
			imgFavourite.alt = 'favourite';
			imgFavourite.height = '20';
			imgFavourite.src = `images/product__favourite.png`
			btnFavourite.append(imgFavourite);

			btnFavourite.addEventListener('click', (e) => {
				if (!userInSession) {
					document.location.href = `login.html`
				} else {
					let productBTNs = document.querySelectorAll(`button[data-id="${product.id}"]`);
					productBTNs.forEach(btn => {
					
						let btnFav = btn.dataset.favourit === `false` ? `true` : `false`;
						userInSession.favourites.push(+e.currentTarget.id);
						localStorage.setItem(`users`, JSON.stringify(updateStorageUsers(userInSession)));
						let btnSrc = btn.querySelector(`img`);
						btnSrc.src = btnFav === `false` ? `images/product__favourite.png` : `images/product__favourite--true.png`
						btn.dataset.favourit = btnFav;
						document.location.href = `favourites.html`
						
					})    
				}
		})
	
      productDiv.prepend(btnFavourite);

			let catSection = document.querySelector(`section[data-name="${cat}"] .category__container`);
			catSection.append(productDiv);
	 })
})
}

if (categoriesContainer) {
	renderCategorie()
	renderProducts ()
}

const salePercent = (product) => {
	let salePercent  =  `-`;
		if (product.sale) {
			 salePercent  = `<span class="product__sale--percent">-${product.salePercent} % </span>`
		 }
	return salePercent ;
}

const tableContainer = document.querySelector(` .container  .favourites__container .table__container`);
const renderFavouritesProduct = product => {
	let tr = document.querySelector(`tr`)
	let table = document.createElement(`table`);
	table.className = `order__table`;
	table.id = `favouriteTable${product.id}`;
	table.innerHTML = `<tbody>
	 			 				<tr data-tr ="delele">
										<td>
											<div class="item__info">
											<img src="images/products/${product.img}.png" alt="${product.title}" height="100">
											<div>
											<p class="item__info--title">${product.title}</p>
											</div>
											</div>
										</td>
										<td>${product.price}</td>
										<td><span class="item__sale"> ${salePercent(product)}</span></td>
										<td> ${getProductPrice(product)}</td>
										<td>
											   <button class="item__favourite"><img src="images/product__favourite--true.png" alt="favourite" height="20"></button>
										</td> 	
									</tr>
							</tbody>`;
	tableContainer?.append(table);
	
//работa с блоком Favourite Items.
	let btndelete = document.querySelector(`table#favouriteTable${product.id} button[class="item__favourite"]`)
		 btndelete.addEventListener(`click`, (e) => {
		 e.preventDefault();
		 btndelete.closest('tr[data-tr ="delele"]').remove()
			
	let unicFavarit =	userInSession.favourites.filter((item) => item != product.id) // [18, 7, 2]
      userInSession.favourites = unicFavarit
 	   console.log(unicFavarit)
	
		headerFavouritesCount = document.querySelector(`#headerFavouritesCount`);
	   headerFavouritesCount.innerHTML = `${userInSession.favourites.length}`;
		
		localStorage.setItem(`users`, JSON.stringify(updateStorageUsers(userInSession)));
	
    })	 
}	
	PRODUCTS.forEach(product => {
		 if (userInSession?.favourites.includes(product.id)) {
			renderFavouritesProduct(product);
		  }
	});

	loginHandler();
	registrationHandler();


