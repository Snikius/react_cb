// main.js
import * as React from "react";
import * as ReactDOM from "react-dom";
import PostBox from "./components/PostBox";
import Auth from "./components/Auth";
import SearchForm from "./components/SearchForm";


import AutocompleteItem from "./components/AutocompleteItem";
import Autocomplete from "./components/Autocomplete";
import DataKeeper from "./lib/DataKeeper";
import UserActionHandler from "./lib/UserActionHandler";

import VKLib from "./lib/VKLib";

// Инициализируем приложение VK
VKLib.init();

ReactDOM.render(
    <div>
        <Auth/>
        <SearchForm/>
        <PostBox/>
        <Autocomplete
            fetchData={DataKeeper.fetchData}
            onSelect={UserActionHandler.select}
            itemRender={AutocompleteItem}
        />
    </div>,
    document.getElementById("content")
);