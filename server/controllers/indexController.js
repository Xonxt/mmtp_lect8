function index(req, res) {
	res.render('index', {header : "Главная страница"});		
};

function merge(a, b) {
	var key;
	
	if (a && b) {
		for (key in b) {
			a[key] = b[key];
		}
	}
	
	return a;
};

exports.index = index;