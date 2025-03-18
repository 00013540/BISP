const AccordionSummary = () => {
  return {
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          minHeight: 0,
          '&.Mui-expanded': {
            minHeight: 0,
          },

          '& .MuiAccordionSummary-content': {
            margin: 0,
          },

          '& .MuiAccordionSummary-content.Mui-expanded': {
            minHeight: 0,
            margin: 0,
          },

          'MuiAccordionSummary-content Mui-expanded': {
            margin: 0,
          },
        },
      },
    },
  };
};

export default AccordionSummary;
