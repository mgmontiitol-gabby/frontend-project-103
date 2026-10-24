import _ from 'lodash';

const formatValue = (value) => {
    if (_.isPlainObject(value)){
        return '[complex value]';
    }
    if (typeof value === 'string'){
        return `'${value}'`;
    }
    return value;
};

const plain = (tree, parentPath = '' ) => {
    const lines = tree.flatMap((node) => {
        const path = parentPath ? `${parentPath}.${node.key}` : node.key;

        if (node.type === 'nested') {
            return plain(node.children, path);
        }
        if (node.type === 'added'){
            return `Property '${path}' was added with value: ${formatValue(node.value)}`;
        }
        if (node.type === 'removed') {
            return `Property '${path}' was removed`;
        }
        if (node.type === 'changed'){
            return `Property '${path}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`;
        }
        if (node.type === 'unchanged') {
            return [];
        }
    });
    return lines.join('\n');
};

export default plain;