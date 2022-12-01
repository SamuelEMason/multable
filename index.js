$(function() {

	$('#tabs').tabs();

	$('#new-tab').on('click', function () {
		let num_tabs = $('div#tabs ul li').length;
		$('#new-tab').before(
			'<li><a href="#tab' + num_tabs + '">Tab' + num_tabs + '</a></li>'
		);

		$('div#tabs').append(
			
		);
		$('div#tabs').tabs('refresh');
	});

	let sliderName = ['x', 'y']
	sliderName.forEach(function (name) {

		$(`#slider-${name}`).slider({

			animate: true,
			change: (e, ui) => {

				let min = $(`#slider-${name}`).slider('option', 'values')[0];
				let max = $(`#slider-${name}`).slider('option', 'values')[1];
				$(`#input-${name}min`).val(min);
				$(`#input-${name}max`).val(max);
			},
			min: -50,
			max: 50,
			range: true,
			slide: (e, ui) => {

				let min = $(`#slider-${name}`).slider('option', 'values')[0];
				let max = $(`#slider-${name}`).slider('option', 'values')[1];
				$(`#input-${name}min`).val(min);
				$(`#input-${name}max`).val(max);
			}
		});
	});		

	$('#submit').on('click', function() {
		let xmin = $(`#slider-x`).slider('option', 'values')[0];
		let xmax = $(`#slider-x`).slider('option', 'values')[1];
		let ymin = $(`#slider-y`).slider('option', 'values')[0];
		let ymax = $(`#slider-y`).slider('option', 'values')[1];
		processInput(xmin, xmax, ymin, ymax);
	});

});

function processInput(xmin, xmax, ymin, ymax) {

	let table = document.getElementById('mult-table');
	table.innerHTML = '';
	let head = document.createElement('thead');
	table.appendChild(head);

	let row = document.createElement('tr');
	head.appendChild(row);

	let header = document.createElement('th');
	row.appendChild(header);
	let data;

	for(let i = xmin; i <= xmax; i++) {
		header = document.createElement('th');
		header.textContent = i;
		header.className = 'fixed';
		row.appendChild(header);
	}

	let body = document.createElement('tbody');
	table.appendChild(body);

	row = document.createElement('tr');
	body.appendChild(row);

	for(let i = ymin; i <= ymax; i++) {

		row = document.createElement('tr');
		header = document.createElement('th');
		header.textContent = i;
		header.className = 'fixed-left';
		row.appendChild(header);

		for(let j = xmin; j <= xmax; j++) {
			data = document.createElement('td');
			data.textContent = i*j;
			row.appendChild(data);
		}
		table.appendChild(row);
	}
}

