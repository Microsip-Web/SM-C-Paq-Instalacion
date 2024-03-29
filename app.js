import { Data } from './packs.js';

/**
 * It gets the value of the selected option in the dropdown menu.
 * @returns The value of the selected option.
 */
const getSelectedValue = () => {
	let selectedValue = document.getElementById('menuSelector').value;
	return selectedValue;
};

/* Adding an event listener to the button. When the button is clicked, it will call the function
getSelectedValue() and store the value in a variable called value. Then it will use a switch
statement to determine which function to call based on the value of the variable. */
let btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', () => {
	let value = getSelectedValue();
	switch (value) {
		case '2022':
			displayPack2022();
			break;
		case '2021':
			displayPack2021();
			break;
		case '2020':
			displayPack2020();
			break;
		case '2019':
			displayPack2019();
			break;
		case 'Legado':
			displayPackLegado();
			break;
		default:
			break;
	}
});

// note display pack2022 content
/**
 * It takes the data from the PACKS file and displays it on the page.
 */
const displayPack2022 = () => {
	const year = document.getElementById('pack-year');
	year.innerHTML = `<h2>${Data.Pack2022[0].packYear}</h2>`;
	const pack2022 = document.getElementById('content');
	pack2022.innerHTML = '';

	Data.Pack2022.forEach((pack) => {
		pack2022.innerHTML += `
			<div class="pack">
				<div class="pack-download-iframes">
				<iframe class="frametest" src=${pack.frame} frameborder="0" ></iframe>
				</div>
			</div>
		`;
	});
};

// note display pack2021 content
const displayPack2021 = () => {
	const year = document.getElementById('pack-year');
	year.innerHTML = `<h2>${Data.Pack2021[0].packYear}</h2>`;
	const pack2021 = document.getElementById('content');
	pack2021.innerHTML = '';
	Data.Pack2021.forEach((pack) => {
		/*
						<div class="box-links">
					 		${pack.updated ? `<p class="updated">Actualizado al ${pack.updated}</p>` : ''}
					 		${pack.downloadLink ? `<a href="${pack.downloadLink}" class="" download>Descargar</a>` : ''}
					 		${pack.size ? `<p class="size">${pack.size}</p>` : ''}
					 </div>
		*/
		pack2021.innerHTML += `
			<div class="pack">
				<div class="pack-download">
					<div class="link-pack" >
						<div class="pack-year">
							<h4>${pack.packYear}</h4>
						</div>
						<div class="pack-title">
							<h4>${pack.packTitle}</h4>
						</div>
						<div class="pack-img" title="Actualizado al ${pack.updated} | ${pack.size}">
							<img src="${pack.packImg}" alt="${pack.packTitle}">
						</div>
						<div class="pack-btn">
							<a href="${pack.downloadLink}" class="pack-download-btn">
							 Descargar
							</a>							
						</div>
					</div>
				</div>
			</div>
		`;
	});
};

// note display pack2020 content
const displayPack2020 = () => {
	const year = document.getElementById('pack-year');
	year.innerHTML = `<h2>${Data.Pack2020[0].packYear}</h2>`;
	const pack2020 = document.getElementById('content');
	pack2020.innerHTML = '';
	Data.Pack2020.forEach((pack) => {
		/*
						<div class="box-links">
					 		${pack.updated ? `<p class="updated">Actualizado al ${pack.updated}</p>` : ''}
					 		${pack.downloadLink ? `<a href="${pack.downloadLink}" class="" download>Descargar</a>` : ''}
					 		${pack.size ? `<p class="size">${pack.size}</p>` : ''}
					 </div>
		*/
		pack2020.innerHTML += `
		<div class="pack">
			<div class="pack-download">
				<div class="link-pack" >
					<div class="pack-year">
						<h4>${pack.packYear}</h4>
					</div>
					<div class="pack-title">
						<h4>${pack.packTitle}</h4>
					</div>
					<div class="pack-img" title="Actualizado al ${pack.updated} | ${pack.size}">
						<img src="${pack.packImg}" alt="${pack.packTitle}">
					</div>
					<div class="pack-btn">
						<a href="${pack.downloadLink}" class="pack-download-btn">
						Descargar
						</a>							
					</div>
				</div>
			</div>
		</div>
		`;
	});
};

// note display pack2019 content
const displayPack2019 = () => {
	const year = document.getElementById('pack-year');
	year.innerHTML = `<h2>${Data.Pack2019[0].packYear}</h2>`;
	const pack2019 = document.getElementById('content');
	pack2019.innerHTML = '';
	Data.Pack2019.forEach((pack) => {
		/*
						<div class="box-links">
					 		${pack.updated ? `<p class="updated">Actualizado al ${pack.updated}</p>` : ''}
					 		${pack.downloadLink ? `<a href="${pack.downloadLink}" class="" download>Descargar</a>` : ''}
					 		${pack.size ? `<p class="size">${pack.size}</p>` : ''}
					 </div>
		*/
		pack2019.innerHTML += `
		<div class="pack">
			<div class="pack-download">
				<div class="link-pack" >
					<div class="pack-year">
						<h4>${pack.packYear}</h4>
					</div>
					<div class="pack-title">
						<h4>${pack.packTitle}</h4>
					</div>
					<div class="pack-img" title="Actualizado al ${pack.updated ? pack.updated : ''} | ${pack.size}">
						<img src="${pack.packImg}" alt="${pack.packTitle}">
					</div>
					<div class="pack-btn">
						<a href="${pack.downloadLink}" class="pack-download-btn">
						Descargar
						</a>							
					</div>
				</div>
			</div>
		</div>
		`;
	});
};

// note display packLegado content
const displayPackLegado = () => {
	const year = document.getElementById('pack-year');
	year.innerHTML = `<h2>2005 - 2018</h2>`;
	const packLegado = document.getElementById('content');
	packLegado.innerHTML = '';
	Data.PackLegado.forEach((pack) => {
		packLegado.innerHTML += `
		<div class="pack">
			<div class="pack-download">
				<div class="link-pack" >
					<div class="pack-year">
						<h4>${pack.packYear}</h4>
					</div>
					<div class="pack-title">
						<h4>${pack.packTitle}</h4>
					</div>
					<div class="pack-img" title="Actualizado al ${pack.updated ? pack.updated : ''} | ${pack.size}">
						<img src="${pack.packImg}" alt="${pack.packTitle}">
					</div>
					<div class="pack-btn">
						<a href="${pack.downloadLink}" class="pack-download-btn">
						Descargar
						</a>							
					</div>
				</div>
			</div>
		</div>
		`;
	});
};

/* Calling the function displayPack2022() when the page loads. */
window.onload = () => {
	displayPack2022();
};
