import * as React from "react";

export interface AutocompleteInterface {
    fetchData: (query: string) => Promise,
    onSelect: (value: string) => any,
    itemRender: React.Component
}

export default AutocompleteInterface;
