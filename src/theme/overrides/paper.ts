const Paper = () => {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.MuiAccordion-root:not(:last-child)': {
            marginBottom: '1rem',
          },
          '&.MuiAccordion-root::before': {
            display: 'none',
          },
        },
      },
    },
  };
};

export default Paper;
