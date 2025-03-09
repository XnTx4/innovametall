module.exports = {
    content: ['./*.html'],
    theme: {
        screens: {
            'lg': {'max': '992px'},
            'md': {'max': '768px'},
            'sm': {'max': '480px'}
        },
        container: {
            padding: '20px',
            center: true,
        },
        extend: {
            color: {
                black: '#000000',
                lightgray: '#808080',
                darkSlateGrey: '#2F4F4F',
                rose: '#4d0218'
            }
        },
    },
    plugins: [],
}