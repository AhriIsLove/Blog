const keyframes = {
  slideDown: {
    '0%': {
      opacity:0,
      top: '0%',
    },
    '99%': {
      opacity:100,
      top: '100%',
    },
    '100%': {
      opacity:0,
      top: '100%',
    },
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
  slideDown: 'slideDown 0.3s linear forwards',
  fadeIn: 'fadeIn 1s ease-in-out forwards',
  wiggle: 'wiggle 0.5s ease-in-out infinite',
};

module.exports = { keyframes, animation }