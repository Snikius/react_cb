import * as React from "react";

export interface AutocompleteInterface {
    fetchData: (query: string) => Promise<string[]>,
    onSelect: (value: string) => any,
    itemRender: (item: any) => JSX.Element
}

export default AutocompleteInterface;
