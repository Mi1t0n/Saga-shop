interface IPagination {
    page: number
    next: () => void
    prev: () => void
}

export type {IPagination}