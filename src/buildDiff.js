import _ from 'lodash';

const buildDiff = (data1, data2) => {
    const getData1 = Object.keys(data1);
    const getData2 = Object.keys(data2);
    const allData = _.sortBy(_.union(getData1,getData2));
    const dataLines = allData.map((key) => {
        
        if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key) &&
            _.isObject(data1[key]) && _.isObject(data2[key])) {
                return {key, type: 'nested', children: buildDiff(data1[key], data2[key]) };
        }
        else if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key) &&
            data1[key] === data2[key]) {
            return {key, type: 'unchanged', value: data1[key] };
        }
        else if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
            return {key, type: 'changed', oldValue: data1[key], newValue: data2[key]};
        }
        else if (Object.hasOwn(data1, key)) {
            return {key, type: 'removed', value: data1[key]};
        }
        else if (Object.hasOwn(data2, key)) {
            return {key, type: 'added', value: data2[key]};
        }
    });
    return dataLines;
};

export default buildDiff;