// type은 이거  불가능하다. interfacefmf 3번 각각 만들면 알아서 합쳐준다.

interface User {
    name: string
}
interface User {
    lastName: string
}
interface User {
    health: string
}

const nico: User = {
    name: "nco",
    lastName: "n",
    health: "rs"
}