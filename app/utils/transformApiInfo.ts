export const transformApiData = (objData: {}) => {
    console.log('objData', objData)
  if (objData) {
    return Object.keys(objData).map(
      (item) => objData[item as keyof typeof objData]
    );
  }
};
