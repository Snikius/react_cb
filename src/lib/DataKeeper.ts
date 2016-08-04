
class DataKeeper
{
    private static data = [
        "12345",
        "Pokemon Go",
        "TypeScript",
        "Youtube",
        "JavaScript",
        "Java",
        "JavaServer Pages",
        "jQuery",
        "Почему трава зеленая",
        "Почему небо голубое"
    ];

    /**
     * Получает массив содержащий строки с запосом query
     * @param query
     * @returns {Promise<string[]>|Promise}
     */
    static fetchData(query: string): Promise
    {
        let handler = function(resolve, reject) {
            setTimeout(()=>{
                let result:string[] = [];
                for(let str of DataKeeper.data) {
                    if(str.startsWith(query)) {
                        result.push(str);
                    }
                }
                resolve(result);
            }, 300)
        }
        // Возвращаем обещание
        return new Promise<string[]>(handler);
    }
}

export default DataKeeper;