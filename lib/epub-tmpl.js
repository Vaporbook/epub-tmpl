
var fs = require('fs');
var templateDir = __dirname + '/../html';
var externalTemplates;

module.exports.getTemplate = function getTemplate(name) {

	if(externalTemplates[name]=='undefined') {
		var template = fs.readFileSync(templateDir + '/' + name + '/index.html');
		return template.toString();
	} else {
		return externalTemplates[name];
	}

}

module.exports.addTemplate = function addTemplate(name, html) {

	// adds a template without adding to filesystem. useful
	// for using 3rd party or non oss templates

	externalTemplates[name] = html;

}

