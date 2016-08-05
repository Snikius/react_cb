import * as React from "react";
import ElementWrapper from "./ElementWrapper";

class AutocompleteList extends React.Component<{list: any[], itemRender: any, baseId: number}, any>
{
    constructor(props) {
        super(props);
    }
    render() {
        let list = this.props.list;
        return (
            <ul className="nav nav-pills nav-stacked">
                { list.map((item: any, index:number) => {
                    return <ElementWrapper itemRender={this.props.itemRender}
                                           item={item}
                                           baseId={this.props.baseId}
                                           key={index} />;
                })}
            </ul>
        );
    }
}

export default AutocompleteList;
