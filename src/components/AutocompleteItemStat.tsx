import * as React from "react";
import {AutocompleteElemData} from "../interfaces/AutocompleteElemData";
;

class AutocompleteItemStat extends React.Component<{item: AutocompleteElemData}, any>
{
    constructor(props) {
        super(props);
    }
    render() {
        return <span>
                    {this.props.item.text}
                    <span className="badge pull-right">{this.props.item.counter}</span>
                </span>;
    }
}

export default AutocompleteItemStat;
