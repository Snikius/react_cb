import {AutocompleteElemData} from "../interfaces/AutocompleteElemData";
class UserActionHandler
{
    static selectStr(value: string): string
    {
        console.log("Выбранное значение: ", value);
        return value;
    }

    static selectObj(value: AutocompleteElemData): string
    {
        console.log("Выбран обьект: ", value);
        return value.text;
    }
}

export default UserActionHandler;
