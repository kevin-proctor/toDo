export interface Todo{
    name: string,
    user: string,
    id: number,
    completed: boolean,
    markedForDeletion?: boolean,
    dueDate?: Date
}