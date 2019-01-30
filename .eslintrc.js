module.exports = {
	"parser": "babel-eslint",
	"extends": "airbnb",
	"rules": {
		"no-confusing-arrow": 0,
		"max-len": ["error",100],
		"implicit-arrow-linebreak": 0,
		"semi": 0,
		"eol-last": 0,
		"react/jsx-one-expression-per-line": 0,
		"react/jsx-filename-extension": 0,
		"react/jsx-max-props-per-line": [
			1,
			{
				"maximum": 1,
				"when": "always"
			}
		]
	}
};
