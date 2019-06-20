const QTY_ADD = 'QTY_ADD';
const PROD_ADD = 'PROD_ADD';
const PROD_DEL = 'PROD_DEL';
const SUM_QTY = 'SUM_QTY';
const QTY_TO_NULL = 'QTY_TO_NULL';
const DELIVERY_CHNG = 'DELIVERY_CHNG';

const CART_CLEAR = 'CART_CLEAR';

const prod_add = function(prodid, info) {
  return {
    type: PROD_ADD,
    prodid: prodid,
    info: info,
  };
}

const prod_del = function(prodid) {
  return {
    type: PROD_DEL,
    prodid: prodid,
  };
}

const cart_clear = function() {
  return {
    type: CART_CLEAR,
  };
}

const qty_add = function(prodid, newQTY, newSum) {
  return {
    type: QTY_ADD,
    prodid: prodid,
    newQTY: newQTY,
    newSum: newSum
  };
}

const sum_qty = function(qty) {
  return {
    type: SUM_QTY,
    qty: qty,
  }
}

const qty_to_null = function() {
  return {
    type: QTY_TO_NULL,
  }
}

const delivery_chng = function(num) {
  return {
    type: DELIVERY_CHNG,
    num: num,
  }
}

export {
  prod_add, PROD_ADD,
  prod_del, PROD_DEL,
  cart_clear, CART_CLEAR,
  qty_add, QTY_ADD,
  sum_qty, SUM_QTY,
  qty_to_null, QTY_TO_NULL,
  delivery_chng, DELIVERY_CHNG,
}
