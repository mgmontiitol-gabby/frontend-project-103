import _ from 'lodash';

const formatValue = (value) => {
    if (_.isPlainObject(value)){
        return '[complex value]';
    }
    if (typeof value === 'string'){
        return `'${value}'`;
    }
    return value;
}
export default 
