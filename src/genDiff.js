
import buildDiff from './buildDiff.js';
import stylish from './formatters/stylish.js';

const setFormat ={
    stylish: (tree) => `{\n${stylish(tree)}\n}`,
};
const genDiff = (data1, data2, format = 'stylish') => {
    const treeDiff = buildDiff(data1, data2);
    return setFormat[format](treeDiff);
}
export default genDiff;