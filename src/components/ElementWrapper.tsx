import * as React from "react";
import AppDispatcher from "../dispatcher/AppDispatcher";
import Constants from "../constants/Constants";
import AppAction from '../interfaces/AppAction';

class ElementWrapper extends React.Component<{itemRender: any, item: any, key: number, baseId: number}, any>
{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
                <a href="#" onClick={this.handleClick.bind(this)}>
                    { this.props.itemRender(this.props.item) }
                </a>
            </li>
        );
    }

    /**
     * Обрабатываем клик по элементу
     * @returns {boolean}
     */
    handleClick(e) {
        // Формируем обьект события
        let action: AppAction = {
            actionType: Constants.AUTOCOMPLETE_SELECT,
            data: this.props.item,
            id: this.props.baseId
        };
        // Отправляем событие в диспетчер
        AppDispatcher.handleAction(action);
        e.preventDefault();
        return false;
    }

}

export default ElementWrapper;