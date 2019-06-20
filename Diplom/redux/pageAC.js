const PAGE_CHANGE = 'PAGE_CHANGE';

const page_change = function(page) {
  return {
    type: PAGE_CHANGE,
    page: page,
  };
}

export {
  page_change, PAGE_CHANGE,
}
