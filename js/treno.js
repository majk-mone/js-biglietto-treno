let age = parseInt(prompt('la tua età'))
let km = parseFloat(prompt('km da percorrere'))
let pricePerKm = 0.21

if (age < 18) {
	pricePerKm = pricePerKm - (pricePerKm * 20) / 100
} else if (age > 65) {
	pricePerKm = pricePerKm - (pricePerKm * 20) / 100
}

let ticketPrice = (Math.round(km * pricePerKm * 100) / 100).toFixed(2)

console.log(ticketPrice + ' €')
