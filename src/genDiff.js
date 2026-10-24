
import buildDiff from './buildDiff.js';
import formatTree from './formatters/index.js';
import path from 'path';
import parse from './parsers.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
    const absolutePath1 = path.resolve(process.cwd(), filepath1);
    const absolutePath2 = path.resolve(process.cwd(), filepath2);
    const data1 = parse(absolutePath1);
    const data2 = parse(absolutePath2);
    const treeDiff = buildDiff(data1, data2);
    return formatTree(treeDiff, format);
}
export default genDiff;