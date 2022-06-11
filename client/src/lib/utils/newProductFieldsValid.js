const newProductFieldsValid = (newProductObj) => {
  return Object.keys(newProductObj).every(prop => String(newProductObj[prop]).length > 0)
}

export default newProductFieldsValid;