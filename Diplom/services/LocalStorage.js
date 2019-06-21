"use strict";

const name = "DolinaSadCart";

//добавляем товар в localStorage. Если наших данных там нет, предварительно инициализируем.
const setLocalStorage = function (key, info) {
    
    if(!localStorage.getItem(name))
    localStorage.setItem( name, "{}" );

    let cartString = localStorage.getItem(name);
    let data = JSON.parse(cartString);
    data[key] = info;
    localStorage[name]  = JSON.stringify(data);
};

//изменяем элемент в localStorage
const editLocalStorage = function (key, info) {

    let cartString = localStorage.getItem(name);
    let data = JSON.parse(cartString);
    data[key] = info;
    localStorage[name]  = JSON.stringify(data);
};

//удаляем элемент из localStorage
const delLocalStorage = function (key) {

    let cartString = localStorage.getItem(name);
    let data = JSON.parse(cartString);
    delete data[key];
    localStorage[name]  = JSON.stringify(data);
};

//очищаем localStorage
const clearLocalStorage = function() {
    localStorage.removeItem( name);
}

//проверяем, есть ли в localStorage наши товары
const checkLocalStorage = function() {
    if(name in localStorage) {
        return true
    } 
    return false
}

//получаем товар из localStorage
const getLocalStorage = function() {    
    let cartString = localStorage.getItem(name);
    let data = JSON.parse(cartString);

    return data;
}

export {
    setLocalStorage, delLocalStorage, editLocalStorage, clearLocalStorage, checkLocalStorage, getLocalStorage
}