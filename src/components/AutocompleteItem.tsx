import * as React from "react";
import ElementData from "../interfaces/ElementData";

class AutocompleteItem extends React.Component<ElementData, any>
{
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            {this.props.item}
        </div>;
    }
}

export default AutocompleteItem;