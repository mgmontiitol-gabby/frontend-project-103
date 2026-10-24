
import buildDiff from './buildDiff.js';
import formatTree from './formatters/index.js';

const genDiff = (data1, data2, format = 'stylish') => {
    const treeDiff = buildDiff(data1, data2);
    return formatTree(treeDiff, format);
}
export default genDiff;