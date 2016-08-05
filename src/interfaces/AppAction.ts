export interface AppAction {
    actionType: number,
    data: any,
    id?: number,  // Id элемента
}

export default AppAction;