export const renderPositioning = position => {
  switch (position) {
    case "br":
      return `
              right: 15px;
              bottom: 15px;
            `;
    case "bl":
      return `
              right: inherit;
              left: 15px;
              bottom: 15px;
            `;
    case "tl":
      return `
              right: inherit;
              bottom: inherit;
              left: 15px;
              top: 15px;
            `;
    case "tr":
      return `
              right: 15px;
              top: 15px;
              bottom: inherit;
            `;
    default:
      return `
              right: 15px;
              bottom: 15px;
            `;
  }
};

export const renderButtonPosition = position => {
  if (position === "right") {
    return `
    right: 2px;
  top: 2px;
    `;
  }
  return `
    left: 2px;
  top: 2px;`;
};
