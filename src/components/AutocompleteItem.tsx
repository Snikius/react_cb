import * as React from "react";

class AutocompleteItem extends React.Component<{item: string}, any>
{
    constructor(props) {
        super(props);
    }
    render() {
        return <span>
            {this.props.item}
        </span>;
    }
}

export default AutocompleteItem;