export class Club {

    private name = ""
    private lastTitleDate = ""

    public getName = (): string => {
        return this.name
    }

    public getlastTitleDate = (): string => {
        return this.lastTitleDate
    }

    public setName = (name: string): void => {
        this.name = name
    }

    public setlastTitleDate = (lastTitleDate: string): void => {
        this.lastTitleDate = lastTitleDate
    }

}