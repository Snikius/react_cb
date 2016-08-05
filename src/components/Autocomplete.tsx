import * as React from "react";
import AutocompleteInterface from "../interfaces/AutocompleteInterface";
import Constants from "../constants/Constants";
import Parameters from "../constants/Parameters";
import AppAction from "../interfaces/AppAction";
import AppDispatcher from "../dispatcher/AppDispatcher";
import AutocompleteList from "./AutocompleteList";
import AutocompleteStore from "../stores/AutocompleteStore";

class Autocomplete extends React.Component<AutocompleteInterface, any>
{
    private store: AutocompleteStore;
    
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            searching: false
        };
        this.store = new AutocompleteStore(this.props.onSelect);
    }
    
    render() {
        return <div>
                    <input className="form-control" type="text" value={this.state.query} onChange={this.handleChange.bind(this)} />
                    <AutocompleteList baseId={this.store.baseId} itemRender={this.props.itemRender} list={this.store.list} />
                </div>;
    }
    
    handleChange(event) {
        let searching = false;
        let action:AppAction;
        // Если пользователь ввел строку больше или равной минимальной - начинаем поиск
        if(event.target.value.length >= Parameters.AUTOCOMPLETE_STR_MIN) {
            searching = true;
            this.props.fetchData(event.target.value).then((values: string[]) => {
                console.log(values);
                // Формируем обьект события
                action = {
                    actionType: Constants.AUTOCOMPLETE_READY,
                    data: values,
                    id: this.store.baseId
                };
                // Отправляем событие в диспетчер
                AppDispatcher.handleAction(action);
            });
        } else {
            action = {
                actionType: Constants.AUTOCOMPLETE_READY,
                data: [],
                id: this.store.baseId
            };
            // Отправляем событие в диспетчер
            AppDispatcher.handleAction(action);
        }
        // Сохраняем текущий текст в store
        this.store.currentText = event.target.value;
        this.setState({query: this.store.currentText, searching: searching, listStore: this.state.listStore});
    }
    
    onChange() {
        this.setState({
            query: this.store.currentText,
            searching: this.state.searching,
            listStore: this.state.listStore,
        });
    }

    componentDidMount() {
        // Ожидаем событие change
        this.store.addListener("change", ()=> {
            this.onChange();
        });
    }
}

export default Autocomplete;
