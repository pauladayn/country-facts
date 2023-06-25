export const transformApiData = (objData: {}) => {

  if (objData) {
    return Object.keys(objData).map(
      (item) => objData[item as keyof typeof objData]
    );
  }
};
