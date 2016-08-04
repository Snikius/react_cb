
class DataKeeper
{
    private static data = [
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

    /**
     * Получает массив содержащий строки с запосом query
     * @param query
     * @returns {Promise<string[]>|Promise}
     */
    static fetchData(query: string): Promise<string[]>
    {
        let handler = function(resolve, reject) {
            setTimeout(()=>{
                let result:string[] = [];
                for(let str of DataKeeper.data) {
                    // Если строка начинается с запроса - добавим к результатам
                    if(str.toLowerCase().indexOf(query) === 0) {
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