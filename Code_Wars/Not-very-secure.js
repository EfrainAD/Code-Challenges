// /\w/ counts numbers and _

// const alphanumericf = (string) => /^[a-zA-Z0-9]+$/.test(string)
const alphanumericf = (string) => /^[a-z\d]+$/i.test(string)

console.log(alphanumericf('hiHHh0hi'))
