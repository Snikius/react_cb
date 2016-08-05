// main.js
import * as React from "react";
import * as ReactDOM from "react-dom";

import AutocompleteItem from "./components/AutocompleteItem";
import Autocomplete from "./components/Autocomplete";
import AutocompleteItemStat from "./components/AutocompleteItemStat";
import DataKeeper from "./lib/DataKeeper";
import UserActionHandler from "./lib/UserActionHandler";

import 'bootstrap';
import 'bootstrap-loader';

ReactDOM.render(
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3">
                <h1>item: строка</h1>
                <Autocomplete
                    fetchData={DataKeeper.fetchData}
                    onSelect={UserActionHandler.selectStr}
                    itemRender={(item) => <AutocompleteItem item={item}/>}
                />
            </div>
            <div className="col-md-3">
                <h1>item: объект</h1>
                <Autocomplete
                    fetchData={DataKeeper.fetchDataStat}
                    onSelect={UserActionHandler.selectObj}
                    itemRender={(item) => <AutocompleteItemStat item={item}/>}
                />
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>,
    document.getElementById("content")
);