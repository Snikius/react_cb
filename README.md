
# Данные автодополнения

* 12345
* pokemon go
* typescript
* youtube
* javascript
* java
* javaserver pages
* jquery
* почему трава зеленая
* почему небо голубое



# Тестовое задание
```
<Autocomplete

  onSelect=(value) => console.log(‘Выбранное значение: ’, value)

  fetchData={(search) => new Promise(resolve => setTimeout(() => resolve([{id: 1, name: ‘qwe’}, …]), 1000))}

  itemRender={(item) => <AutocompleteItem item={item}/>}

```
 

Options:

onSelect – это handler для изменения выбранного значения. (Можно сделать через ReactLink, valueLink)

fetchData – функция, возвращающая массив с данными для выбора

itemRender – функция, возвращающая компонент, отрисовывающий элемент списка выбора

 

Требуемые технологии и инструменты:

1)      es5, [опционально, но лучше] es6, typescript

2)      язык для стилей: less, sass, styl

3)      [опционально] сборка – webpack, gulp, rollup и т.п
