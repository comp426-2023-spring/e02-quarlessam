// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

async function play() {
	document.getElementById("play_button").setAttribute("disabled", "disabled")
	document.getElementById("play_button").style.color = "darkgray"
	var endpoint = document.getElementById("endpoint")
	var response = await fetch(window.location.href + endpoint.textContent.trim())
	var json = await response.json()
	document.getElementById("result_player").textContent += json.player.toUpperCase()
	if(endpoint.textContent.includes("play/")) {
		document.getElementById("result_opp").removeAttribute("hidden")
		document.getElementById("result_result").removeAttribute("hidden")
		document.getElementById("result_opp").textContent += json.opponent.toUpperCase()
		document.getElementById("result_result").textContent += json.result.toUpperCase()
	}
	document.getElementById("result").removeAttribute("hidden")
	document.getElementById("reset_button").style.display = "inline-block"
}

function rps_button() {
	var endpoint = document.getElementById("endpoint")
	endpoint.textContent = endpoint.textContent.trim() + "rps/"
	document.getElementById("rps_button").setAttribute("disabled", "disabled")
	document.getElementById("rps_button").style.color = "darkgray"
	document.getElementById("rpsls_button").style.display = "none"
	document.getElementById("opp_question").removeAttribute("hidden")
	document.getElementById("opp_button").style.display = "inline-block"
	document.getElementById("no_opp_button").style.display = "inline-block"
}
function rpsls_button() {
	var endpoint = document.getElementById("endpoint")
	endpoint.textContent = endpoint.textContent.trim() + "rpsls/"
	document.getElementById("rps_button").style.display = "none"
	document.getElementById("rpsls_button").setAttribute("disabled", "disabled")
	document.getElementById("rpsls_button").style.color = "darkgray"
	document.getElementById("opp_question").removeAttribute("hidden")
	document.getElementById("opp_button").style.display = "inline-block"
	document.getElementById("no_opp_button").style.display = "inline-block"
}
async function rules_button() {
	var endpoint = document.getElementById("endpoint")
	var text = ""
	if(!endpoint.textContent.includes('rpsls/')) {
		let response = await fetch(window.location.href + "app/rps/play/yourmom")
		text = await response.text()
		if(!endpoint.textContent.includes('rps/')) {
			text += "\n\n"
		}
	}
	if(!endpoint.textContent.includes('rps/')) {
		let response = await fetch(window.location.href + "app/rpsls/play/yourmom")
		text += await response.text()
	}
	alert(text)
}
function opp_button() {
	var endpoint = document.getElementById("endpoint")
	endpoint.textContent = endpoint.textContent.trim() + "play/"
	document.getElementById("shot_question").removeAttribute("hidden")
	document.getElementById("rock_shot").style.display = "inline-block"
	document.getElementById("paper_shot").style.display = "inline-block"
	document.getElementById("scissors_shot").style.display = "inline-block"
	if(endpoint.textContent.includes('rpsls/')) {
		document.getElementById("lizard_shot").style.display = "inline-block"
		document.getElementById("spock_shot").style.display = "inline-block"
	}
	document.getElementById("opp_question").removeAttribute("hidden")
	document.getElementById("opp_button").setAttribute("disabled", "disabled")
	document.getElementById("opp_button").style.color = "darkgray"
	document.getElementById("no_opp_button").style.display = "none"
}
function no_opp_button() {
	var endpoint = document.getElementById("endpoint")
	document.getElementById("opp_question").removeAttribute("hidden")
	document.getElementById("opp_button").style.display = "none"
	document.getElementById("no_opp_button").setAttribute("disabled", "disabled")
	document.getElementById("no_opp_button").style.color = "darkgray"
	document.getElementById("play_button").style.display = "inline-block"
}
function rock_shot() {
	var endpoint = document.getElementById("endpoint")
	endpoint.textContent = endpoint.textContent.trim() + "rock/"
	document.getElementById("rock_shot").setAttribute("disabled", "disabled")
	document.getElementById("rock_shot").style.color = "darkgray"
	document.getElementById("paper_shot").style.display = "none"
	document.getElementById("scissors_shot").style.display = "none"
	document.getElementById("lizard_shot").style.display = "none"
	document.getElementById("spock_shot").style.display = "none"
	document.getElementById("play_button").style.display = "inline-block"
}
function paper_shot() {
	var endpoint = document.getElementById("endpoint")
	endpoint.textContent = endpoint.textContent.trim() + "paper/"
	document.getElementById("rock_shot").style.display = "none"
	document.getElementById("paper_shot").setAttribute("disabled", "disabled")
	document.getElementById("paper_shot").style.color = "darkgray"
	document.getElementById("scissors_shot").style.display = "none"
	document.getElementById("lizard_shot").style.display = "none"
	document.getElementById("spock_shot").style.display = "none"
	document.getElementById("play_button").style.display = "inline-block"

}
function scissors_shot() {
	var endpoint = document.getElementById("endpoint")
	endpoint.textContent = endpoint.textContent.trim() + "scissors/"
	document.getElementById("rock_shot").style.display = "none"
	document.getElementById("paper_shot").style.display = "none"
	document.getElementById("scissors_shot").setAttribute("disabled", "disabled")
	document.getElementById("scissors_shot").style.color = "darkgray"
	document.getElementById("lizard_shot").style.display = "none"
	document.getElementById("spock_shot").style.display = "none"
	document.getElementById("play_button").style.display = "inline-block"
}
function lizard_shot() {
	var endpoint = document.getElementById("endpoint")
	endpoint.textContent = endpoint.textContent.trim() + "lizard/"
	document.getElementById("rock_shot").style.display = "none"
	document.getElementById("paper_shot").style.display = "none"
	document.getElementById("scissors_shot").style.display = "none"
	document.getElementById("lizard_shot").setAttribute("disabled", "disabled")
	document.getElementById("lizard_shot").style.color = "darkgray"
	document.getElementById("spock_shot").style.display = "none"
	document.getElementById("play_button").style.display = "inline-block"
}
function spock_shot() {
	var endpoint = document.getElementById("endpoint")
	endpoint.textContent = endpoint.textContent.trim() + "spock/"
	document.getElementById("rock_shot").style.display = "none"
	document.getElementById("paper_shot").style.display = "none"
	document.getElementById("scissors_shot").style.display = "none"
	document.getElementById("lizard_shot").style.display = "none"
	document.getElementById("spock_shot").setAttribute("disabled", "disabled")
	document.getElementById("spock_shot").style.color = "darkgray"
	document.getElementById("play_button").style.display = "inline-block"
}