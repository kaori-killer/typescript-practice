// 타입을 특정 값으로 할 수 있다.
type Team = "read" | "blue" | "yellow"
type Health = 1 | 2 | 3

type Player = {
    nickname: string,
    team: Team,
    health: Health,
}

const nico:Player = {
    nickname: "nico",
    team: "read",
    health: 1
}