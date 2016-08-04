import AppDispatcher from '../dispatcher/AppDispatcher'
import Constants from '../constants/Constants'
import {EventEmitter} from 'fbemitter';


class SelectListStore extends EventEmitter
{
    private listData: any[];
    public dispatcherIndex;

    constructor() {
        super();
        // Состояние по умолчанию
        this.listData = [];
        // Регистрируем store в диспетчере
        this.dispatcherIndex = AppDispatcher.register((payload):boolean => {
            let action = payload.action;
            if(action.actionType == Constants.AUTOCOMPLETE_READY) {
                // Сохраняем информацию из события
                this.listData = action.data;
                // Создаем событие о том что элемент должен быть перерисован
                this.emit('change');
            }
            return true;
        });
    }

    get list(): any[] {
        return this.listData;
    }
}

export default SelectListStore;