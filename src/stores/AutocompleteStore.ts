import AppDispatcher from '../dispatcher/AppDispatcher'
import Constants from '../constants/Constants'
import {EventEmitter} from 'fbemitter';


class AutocompleteStore extends EventEmitter
{
    private listData: any[];
    public currentText: string;
    public dispatcherIndex;
    private static $idCounter:number = 0; // Используется для разделения событий если компонентов Autocomplete > 1
    private id:number;
    public searchState: boolean;

    constructor(onSelect: (value: any) => any) {
        super();
        // Состояние по умолчанию
        this.listData = [];
        this.searchState = false;
        // Регистрируем store в диспетчере
        this.dispatcherIndex = AppDispatcher.register((payload):boolean => {
            let action = payload.action;
            // Проверим id (для того ли store адресовано событие)
            if(this.id !== action.id) {
                return;
            }
            if(action.actionType == Constants.AUTOCOMPLETE_READY) {
                // Сохраняем информацию из события
                this.listData = action.data;
                this.searchState = false;
                // Создаем событие о том что элемент должен быть перерисован
                this.emit('change');
            }
            if(action.actionType == Constants.AUTOCOMPLETE_SELECT) {
                // Значение выбрано, очищаем список
                this.listData = [];
                this.currentText = onSelect(action.data);
                // Создаем событие о том что элемент должен быть перерисован
                this.emit('change');
            }
            return true;
        });

        this.id = this.newId;
    }

    public flush() {
        this.listData = [];
    }

    get newId(): number {
        return AutocompleteStore.$idCounter++;
    }

    get baseId(): number {
        return this.id;
    }

    get list(): any[] {
        return this.listData;
    }
}

export default AutocompleteStore;