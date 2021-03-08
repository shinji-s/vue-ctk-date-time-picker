
function formatDatetime (datetimeObj) {
  if (navigator.language === 'ja') {
    return datetimeObj.format('M月 D日 (ddd)')
  } else {
    return datetimeObj.format('ddd D MMM')
  }
}

export default {
  formatDatetime
}
