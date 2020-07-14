const Lagarto = ["spock", "papel"]
const Spock = ["piedra", "tijera"]
const Papel = ["spock", "piedra"]
const Piedra = ["tijera", "lagarto"]
const Tijera = ["papel", "lagarto"]

const lagartoPuedeMatarA = (enemigo) => {
    return Lagarto.includes(enemigo)
};

const spockPuedeMatarA = (enemigo) => {
    return Spock.includes(enemigo)
};

const papelPuedeMatarA = (enemigo) => {
    return Papel.includes(enemigo)
};

const piedraPuedeMatarA = (enemigo) => {
    return Piedra.includes(enemigo)
};

const tijeraPuedeMatarA = (enemigo) => {
    return Tijera.includes(enemigo)
};

const tipo = [
    {tipo: "lagarto", mataA: lagartoPuedeMatarA},
    {tipo: "spock", mataA: spockPuedeMatarA},
    {tipo: "papel", mataA: papelPuedeMatarA},
    {tipo: "piedra", mataA: piedraPuedeMatarA},
    {tipo: "tijera", mataA: tijeraPuedeMatarA},
]

export default tipo;