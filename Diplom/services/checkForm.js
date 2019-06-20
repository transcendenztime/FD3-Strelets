"use strict";

const checkNameValue = function(name) {
    if(!name) return 1

    let str = parseInt(name);
    if(!isNaN(str) || name.length > 30) return 2

    return 0

}

const checkEmailValue = function(email) {
    if(!email) return 0
    const reg = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
    
    let valid = reg.test(email);

    if( !valid ) return 2

    return 0

}

const checkTelValue = function(tel) {
    if(!tel) return 1

    const reg = /^(\+375|80)\s?-?\(?(29|25|44|33|17)\s?-?\)?(\d{3})\s?-?(\d{2})\s?-?(\d{2})$/;

    let valid = reg.test(tel);
    if( !valid ) return 2

    return 0

}

const checkTextValue = function(text) {
    if(!text) return 1

    return 0
}

export {
    checkNameValue, checkEmailValue, checkTelValue, checkTextValue

};