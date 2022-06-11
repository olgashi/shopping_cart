const productFieldsValid = (productObj) => {
  return Object.keys(productObj).every(prop => String(productObj[prop]).length > 0 && String(productObj[prop]) !== 'NaN')
}

export default productFieldsValid;