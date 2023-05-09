// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
async function rps_fetch(endpoint) {
	let element = document.getElementById("button")
	var response = await fetch(window.location.href + endpoint)
	console.log(response)
	var json = await response.json()
}

function rps_button() {
	let element = document.getElementById("endpoint")
	element.textContent = element.textContent.trim() + "/rps"
	document.getElementById("rps_button").setAttribute("disabled", "disabled")
	document.getElementById("rpsls_button").setAttribute("disabled", "disabled")
	document.getElementById("opp_question").removeAttribute("hidden")
	document.getElementById("opp_button").removeAttribute("hidden")
	document.getElementById("no_opp_button").removeAttribute("hidden")
}
function rpsls_button() {
	let element = document.getElementById("endpoint")
	element.textContent = element.textContent.trim() + "/rpsls"
	document.getElementById("opp_question").removeAttribute("hidden")
	document.getElementById("rps_button").setAttribute("disabled", "disabled")
	document.getElementById("rpsls_button").setAttribute("disabled", "disabled")
}
function opp_button() {
	let element = document.getElementById("endpoint")
	element.textContent = element.textContent.trim() + "/rpsls"
	document.getElementById("opp_question").removeAttribute("hidden")
	document.getElementById("opp_button").setAttribute("disabled", "disabled")
	document.getElementById("no_opp_button").setAttribute("disabled", "disabled")
}
function no_opp_button() {
	let element = document.getElementById("endpoint")
	element.textContent = element.textContent.trim() + "/rpsls"
	document.getElementById("opp_question").removeAttribute("hidden")
	document.getElementById("opp_button").setAttribute("disabled", "disabled")
	document.getElementById("no_opp_button").setAttribute("disabled", "disabled")
}