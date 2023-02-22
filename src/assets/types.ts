export type TrainingInfo = {
    date: string[],
    sport: string,
    running: null | Running,
    muscu: null | Muscu,
    crossfit: null | Crossfit
}

export type Running = {
    type: string,
    distance: string,
    time: string
}
export type Muscu = {

}
export type Crossfit = {

}
