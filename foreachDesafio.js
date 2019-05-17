/*
    O Objetivo desse desafio, foi criar uma própria implementação do foreach
*/

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

const forEach2 = function(callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this)
	}
}

Array.prototype.forEach2 = forEach2

aprovados.forEach2((value, indice, array) => {
	console.log(value, indice, array)
})
