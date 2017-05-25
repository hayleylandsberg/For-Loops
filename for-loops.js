for (var i = 5; i <= 120; i +=10) {
	console.log(i);
}

for (var i = 4096; i >= 1; i /=2) {
	console.log(i);
}

var americanPresidents = [
	'George Washington',
	'John Adams',
	'Thomas Jefferson',
	'James Madison',
	'James Monroe',
];

for (var i = 0; i < americanPresidents.length; i++) {
	console.log(americanPresidents[i]);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var name in antSpecies) {
	console.log(name);
}