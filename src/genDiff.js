import { union, sortBy } from 'lodash';

const genDiff = (data1, data2) => {
    const getData1 = Object.keys(data1);
    const getData2 = Object.keys(data2);
    const allData = sortBy(union(getData1, getData2))
    return allData;
}

export default genDiff;