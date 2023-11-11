function createDices(num) {
	const dottPositionMatrixes = {
		1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]
	};

	const dice = document.createElement("div");
	dice.classList.add("dice");

	for (const dottPosition of dottPositionMatrixes[num]) {
		const dott = document.createElement("div");

		dott.classList.add("dice-dott");
		dott.style.setProperty("--top", dottPosition[0] + "%");
		dott.style.setProperty("--left", dottPosition[1] + "%");
		dice.appendChild(dott);
	}

	return dice;
}

function randomDiceArrangement(mainContainer, numOfDices) {
	mainContainer.innerHTML = "";

	for (let i = 0; i < numOfDices; i++) {
		const random = Math.floor((Math.random() * 6) + 1);
		const dice = createDices(random);

		mainContainer.appendChild(dice);
	}
}

const mainContainer = document.querySelector(".container-header");
const btnRollDice = document.querySelector(".btn-for-roll-the-dice");

randomDiceArrangement(mainContainer, 2);

btnRollDice.addEventListener("click", () => {
	const interval = setInterval(() => {
		randomDiceArrangement(mainContainer,2);
	}, 50);

	setTimeout(() => clearInterval(interval),100);
});