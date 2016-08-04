
import AppDispatcher from '../dispatcher/AppDispatcher'
import Constants from '../constants/Constants'
import UserData from "../interfaces/UserData";

export interface AppAction {
    actionType: number,
    data: any,
}

// Определяем события приложения
class AppActions
{
    // Поиск
    static search(query: string):void {
        console.log("searching: ", query);
        let action:AppAction = {
            actionType: Constants.SEARCH,
            data: {query: query}
        };
        // Отправляем событие в диспетчер
        AppDispatcher.handleAction(action);
    }

};

export default AppActions;
