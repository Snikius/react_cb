import * as React from "react";
import AutocompleteInterface from "../interfaces/AutocompleteInterface";
import Constants from "../constants/Constants";
import AppAction from "../interfaces/AppAction";
import AppDispatcher from "../dispatcher/AppDispatcher";
import AutocompleteList from "./AutocompleteList";
import SelectListStore from "../stores/SelectListStore";

class Autocomplete extends React.Component<AutocompleteInterface, any>
{
    private store: SelectListStore;
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            searching: false
        };
        this.store = new SelectListStore();
    }
    render() {
        return <div>
                    <input type="text" value={this.state.query} onChange={this.handleChange.bind(this)} />
                    <AutocompleteList itemRender={this.props.itemRender} list={this.store.list} />
                </div>;
    }
    handleChange(event) {
        let searching = false;
        let action:AppAction;
        // Если пользователь ввел строку больше 2х символов - начинаем поиск
        if(event.target.value.length > 2) {
            searching = true;
            this.props.fetchData(event.target.value).then((values: string[]) => {
                console.log(values);
                // Формируем обьект события
                action = {
                    actionType: Constants.AUTOCOMPLETE_READY,
                    data: values
                };
                // Отправляем событие в диспетчер
                AppDispatcher.handleAction(action);
            });
        } else {
            action = {
                actionType: Constants.AUTOCOMPLETE_READY,
                data: []
            };
            // Отправляем событие в диспетчер
            AppDispatcher.handleAction(action);
        }
        this.setState({query: event.target.value, searching: searching, listStore: this.state.listStore});
    }
    onChange() {
        this.setState({
            query: this.state.query,
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
