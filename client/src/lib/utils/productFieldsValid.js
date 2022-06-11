const productFieldsValid = (newProductObj) => {
  return Object.keys(newProductObj).every(prop => String(newProductObj[prop]).length > 0 && String(newProductObj[prop]) !== 'NaN')
}

export default productFieldsValid;