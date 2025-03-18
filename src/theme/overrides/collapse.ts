const Collapse = () => {
  return {
    MuiCollapse: {
      styleOverrides: {
        root: {
          '& .MuiAccordionDetails-root': {
            padding: '0.625rem 0 0',
          },
        },
      },
    },
  };
};

export default Collapse;
