const PROD_FILTER = 'PROD_FILTER';

const prod_filter = function(name) {
  return {
    type: PROD_FILTER,
    name,
  };
}

export {
    prod_filter, PROD_FILTER,
}