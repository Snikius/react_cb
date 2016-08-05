
import {AutocompleteElemData} from "../interfaces/AutocompleteElemData";

class DataKeeper
{
    private static strData = [
        "12345",
        "pokemon go",
        "typescript",
        "youtube",
        "javascript",
        "java",
        "javaserver pages",
        "jquery",
        "почему трава зеленая",
        "почему небо голубое"
    ];

    private static objData: AutocompleteElemData[] = [
        {counter: 5, text: "12345"},
        {counter: 15, text: "pokemon go"},
        {counter: 58, text: "typescript"},
        {counter: 60, text: "youtube"},
        {counter: 156, text: "javascript"},
        {counter: 1, text: "java"},
        {counter: 54, text: "javaserver pages"},
        {counter: 32, text: "jquery"},
        {counter: 460, text: "почему трава зеленая"},
        {counter: 74, text: "почему небо голубое"},
    ];

    /**
     * Получает массив содержащий строки с запосом query
     * @param query
     * @returns {Promise<string[]>|Promise}
     */
    static fetchData(query: string): Promise<string[]>
    {
        let handler = (resolve, reject) => {
            setTimeout(()=> {
                let result:string[] = [];
                for(let str of DataKeeper.strData) {
                    // Если строка начинается с запроса - добавим к результатам
                    if(DataKeeper.startWith(query, str)) {
                        result.push(str);
                    }
                }
                resolve(result);
            }, 1000)
        };
        // Возвращаем обещание
        return new Promise<string[]>(handler);
    }

    /**
     * Получает массив объектов с счетчиком содержащих запос query
     * @param query
     * @returns {Promise<string[]>|Promise}
     */
    static fetchDataStat(query: string): Promise<AutocompleteElemData[]>
    {
        let handler = (resolve, reject) => {
            setTimeout(()=>{
                let result:AutocompleteElemData[] = [];
                for(let obj of DataKeeper.objData) {
                    // Если строка начинается с запроса - добавим к результатам
                    if(DataKeeper.startWith(query, obj.text)) {
                        result.push(obj);
                    }
                }
                resolve(result);
            }, 1000)
        };
        // Возвращаем обещание
        return new Promise<AutocompleteElemData[]>(handler);
    }

    /**
     * Начинается ли строка с query
     * @param query
     * @param str
     * @returns {boolean}
     */
    private static startWith(query: string, str: string) {
        return new RegExp('^' + query, 'i').test(str);
    }
}

export default DataKeeper;