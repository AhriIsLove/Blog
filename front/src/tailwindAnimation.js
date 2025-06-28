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
      opacity:100,
      top: '100%',
    },
  },
  slideUp: {
    '100%': {
      opacity:0,
      top: '100%',
    },
    '99%': {
      opacity:100,
      top: '100%',
    },
    '0%': {
      opacity:0,
      top: '0%',
    },
  },
};

const animation = {
  slideDown: 'slideDown 0.3s ease-in forwards',
  slideUp: 'slideDown 0.3s ease-in forwards',
};

module.exports = { keyframes, animation }