let qoy = +prompt("Qo'ylar sonini kiriting")

while (isNaN(qoy) || qoy / 1 === 0) {
    qoy = +prompt("Qo'lar sonini kiriting")
}

let son = ''
for (let i = 1; i <= qoy; i++) {
    son = son + i + " qo'ylar.."
}

console.log(son);