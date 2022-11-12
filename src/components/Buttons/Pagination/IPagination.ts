interface IPagination {
    getPage: (page: number) => void
    maxPage:number
}

export type {IPagination}