const domainName = (url) => {
   // remove url protocal
   const noProtocalURL = url
      .replace('https://', '')
      .replace('http://', '')
      .replace('www.', '')
   // const noProtocolURL = url.replace(/^(https?:\/\/)?(www\.)?/, '');

   const domainName = noProtocalURL.slice(0, noProtocalURL.indexOf('.'))

   return domainName
}

console.log(domainName('http://github.com/carbonfive/raygun.com'))
console.log(domainName('https://www.cnet.com'))
console.log(domainName('http://www.zombie-bites.com'))
console.log(domainName('www.google.com'))
console.log(domainName('google.com'))
console.log(domainName('http://google.co.jp'))
console.log(domainName('www.xakep.ru'))
