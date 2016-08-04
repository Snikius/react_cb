import * as React from "react";
import AutocompleteInterface from "../interfaces/AutocompleteInterface";

class Autocomplete extends React.Component<AutocompleteInterface, any>
{
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            searching: false,
        };
    }
    render() {
        return <div>
                    <input type="text" value={this.state.query} onChange={this.handleChange.bind(this)} />
                </div>;
    }
    handleChange(event) {
        let searching = false;
        // Если пользователь ввел строку больше 2х символов - начинаем поиск
        if(event.target.value.length > 2) {
            searching = true;
            AppAction.search(this.state.query);
        }
        this.setState({query: event.target.value, searching: searching});
    }
    handleSubmit(e) {
        AppAction.search(this.state.query);
        this.setState({query: this.state.query, form_disabled: true});
        e.preventDefault();
        return false;
    }
    componentDidMount() {
        // Ожидаем событие change для обновления query_active
        PostStore.addListener("change", ()=> {
            this.onChange();
        });
    }
    onChange() {
        this.setState({
            query: this.state.query,
            form_disabled: PostStore.queryRun,
        });
    }
}

export default Autocomplete;
