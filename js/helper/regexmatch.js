export const regexImageLinkTest = (str) => {
  if(/^https.*\.jpg$/gi.test(str)){
    console.log('true')
    return true
  }
  return false 
}
