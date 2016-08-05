import * as React from "react";

export interface AutocompleteInterface {
    fetchData: (query: string) => Promise<any[]>,
    onSelect: (value: any) => string,
    itemRender: (item: any) => any
}

export default AutocompleteInterface;
