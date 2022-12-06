const format = (t) => (t >= 10 ? t : '0'+t)
function humanReadable (seconds) {
     const hr = Math.floor(seconds / 3600)
     const min = Math.floor(seconds % 3600 / 60)
     const sec = seconds % 3600 % 60

     return console.log(`${format(hr)}:${format(min)}:${format(sec)}`);
}

humanReadable(0)