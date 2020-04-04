function giveCompliment(yourName) {
	const compliments = ['great', 'awesome', 'super', 'genious', 'brilliant',
	'strong', 'enjoyable', 'wonderful', 'perfect', 'gorgeous'];

	// https://www.youtube.com/watch?v=pqLS4oyJ8cA random select resource
	const randomSelect = Math.floor(Math.random() * compliments.length);
	return 'You are ' + compliments[randomSelect] + " " + yourName + "!";
}

giveCompliment('Mike');

giveCompliment('Mik');

giveCompliment('Mi');