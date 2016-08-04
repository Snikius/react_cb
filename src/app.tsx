// main.js
import * as React from "react";
import * as ReactDOM from "react-dom";

import AutocompleteItem from "./components/AutocompleteItem";
import Autocomplete from "./components/Autocomplete";
import DataKeeper from "./lib/DataKeeper";
import UserActionHandler from "./lib/UserActionHandler";


ReactDOM.render(
    <div>
        <Autocomplete
            fetchData={DataKeeper.fetchData}
            onSelect={UserActionHandler.select}
            itemRender={(item) => <AutocompleteItem item={item}/>}
        />
    </div>,
    document.getElementById("content")
);