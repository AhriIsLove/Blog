const keyframes = {
  slideDown: {
    '0%': {transform: 'translateY(-100%)'},
    '100%': {transform: 'translateY(100%)'},
  },
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  wiggle: {
    '0%, 100%': { transform: 'rotate(-3deg)' },
    '50%': { transform: 'rotate(3deg)' },
  },
};

const animation = {
  slideDown: 'slideDown 1s linear infinite',
  fadeIn: 'fadeIn 1s ease-in-out forwards',
  wiggle: 'wiggle 0.5s ease-in-out infinite',
};

module.exports = { keyframes, animation }