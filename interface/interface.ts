//type과 비교

interface User {
    name:string
}
interface Player extends User {

}
const nico : Player = {
    name:"nico"
}