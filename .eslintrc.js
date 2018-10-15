module.exports = {
    "extends": "airbnb",
    "rules": {
        "ordered-imports": [true],
        "quotemark": [true, "single", "jsx-single", "avoid-escape"],
        "semicolon": [true, "never"],
        "member-access": [false],
        "member-ordering": [false],
        "trailing-comma": [
          true,
          {
            "singleline": "never",
            "multiline": "always"
          }
        ],
        "no-empty": false,
        "no-submodule-imports": false,
        "no-implicit-dependencies": false,
        "no-constant-condition": false,
        "triple-equals": [true, "allow-undefined-check"],
        "ter-indent": [
          true,
          2,
          {
            "SwitchCase": 1
          }
        ],
        "no-duplicate-imports": false,
        "jsx-alignment": true,
        "jsx-no-bind": true,
        "jsx-no-lambda": true,
        "max-classes-per-file": [false]
      }
};