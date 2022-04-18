`use strict`;
import lunr from 'lunr';

let index;
function resetIndex() {
    index = lunr(function () {
        this.field('file');
        this.field('type');
        this.ref('path');
    });
}
function addToIndex(file) {
    index.add(file);
}
function find(query, cb) {
    if (!index) {
        resetIndex();
    }
    const results = index.search(query);
    cb(results);
}
module.exports = { addToIndex, find, resetIndex };