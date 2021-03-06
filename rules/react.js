module.exports = {
    rules: {
        // Do not prevent multiple component definition per file
        'react/no-multi-comp': 'off',
        // Do not prevent missing React when using JSX
        'react/react-in-jsx-scope': 'off',
        // Enforce indentation of 4 spaces
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/prefer-es6-class': 'warn',
        'react/prefer-stateless-function': 'warn',
        'react/prop-types': 'warn',
        // findDOMNode() will be an error, use refs instead
        'react/no-find-dom-node': 'warn',
        // This will only be a warning, to promote us to write better propTypes
        'react/forbid-prop-types': 'warn',
        // This is also a warning as its a best practice to not use strings, but its not being deprecated either
        'react/no-string-refs': 'warn',
        // Turn this off entirely because we like to click on things like <h3>s
        'jsx-a11y/no-static-element-interactions': 'off'
    }
};
