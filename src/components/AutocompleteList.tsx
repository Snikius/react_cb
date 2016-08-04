import * as React from "react";

class AutocompleteList extends React.Component<{list: any[], itemRender: any}, any>
{
    constructor(props) {
        super(props);
    }
    render() {
        let list = this.props.list;
        console.log(list);
        return (
            <div className="autocompleteList">
                { list.map((item: any) => {
                    return this.props.itemRender(item);
                })}
            </div>
        );
    }
}

export default AutocompleteList;
