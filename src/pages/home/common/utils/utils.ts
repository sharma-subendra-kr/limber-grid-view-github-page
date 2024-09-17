export const getRandomTitle = () => {
	const arr = [
		"Skipper",
		"Kowalski, what's out trajectory?",
		"Kowalski, analysis!",
		"Rico, the glowy thing!",
		"Rico, bust us out of this delicious prison.",
		"The moment's gone. Private ruined it.",
		"Are you questioning my leadership, Private?",
		"Nice work, Rico! You are a meaningful and valued member of this team.",
		"Minions",
		"CHEEZY dibbles",
		"I am Despicable",
		"Don't take bath everyday and save the climate!",
		"It's a banana. Ha-hah-ha. Yum yum.",
		"Boss",
	];

	const index = Math.floor(Math.random() * 11);
	return arr[index];
};

export const getTitle = (index) => {
	const arr = [
		"Drag me! Resize me!",
		"Build dashboards with resizable and movable items with LimberGridView!",
		"Add items by dragging.",
		"Drag items to any location!",
		"Undo or redo your actions on the fly!",
		"Have auto-arranging grids on your dashboard.",
		"Latch on to corners or edges while moving or resizing with latch feature.",
		"Resize or move multiple items at once with multi-select feature.",
		"Multi-select multiple items by dragging.",
		"Get rid of unused space using cut space tool!",
		"Use margin change feature to change margin on the fly!",
		"Select up to 2 multi-select groups.",
		"Resize many items at once.",
		"Move many items at once.",
	];

	return arr[index];
};
