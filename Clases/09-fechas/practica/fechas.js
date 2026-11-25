const date1 = { fecha: new Date("2026-12-01") }
const date1String = JSON.stringify(date1)
const date1Parsed = JSON.parse(date1String)
console.log(typeof date1Parsed.fecha)
console.log(date1String)
console.log("2026-11-30" < "2026-12-01")
console.log("2026-2-1" < "2026-10-01")
const diadehoy = new Date().toLocaleDateString("sv-SE")
console.log(diadehoy)
