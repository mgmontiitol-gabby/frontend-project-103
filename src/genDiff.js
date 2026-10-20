
import buildDiff from './buildDiff.js';
import stylish from './formatters/stylish.js';

const genDiff = (data1, data2, format = 'stylish') => {
    const treeDiff = buildDiff(data1, data2);
    return stylish(treeDiff);
}
export default genDiff;