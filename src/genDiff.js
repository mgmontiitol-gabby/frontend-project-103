import _ from 'lodash';

const genDiff = (data1, data2) => {
    const getData1 = Object.keys(data1);
    const getData2 = Object.keys(data2);
    const allData = _.sortBy(_.union(getData1, getData2))
    const dataLines = allData.map((key) => {
        if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key) &&
            data1[key] === data2[key])
                return `    ${key}: ${data1[key]}`;
        else if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key) &&
            data1[key] !== data2[key])
                return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
        else if (Object.hasOwn(data1, key))
                return `  - ${key}: ${data1[key]}`;
        else {
            return `  + ${key}: ${data2[key]}`;
        } 
    });
    return `{\n${dataLines.join('\n')}\n}`;
}

export default genDiff;