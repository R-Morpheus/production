module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
	parser: '@typescript-eslint/parser',
	'parserOptions': {
	    ecmaFeatures: {
				jsx: true
	    },
	    "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
	      "typescript-eslint"
    ],
    "rules": {
    }
}
