import _ from 'lodash';

const objToString = (value, depth) => {
    if (!_.isObject(value)) {
        return `${value}`;
    }

    const indent = ' '.repeat(depth * 4 + 4);
    const endIndent = ' '.repeat(depth * 4);

    const lines = Object.keys(value).map((key) => {
        return `${indent}${key}: ${objToString(value[key], depth + 1)}`;
    });
    return `{\n${lines.join('\n')}\n${endIndent}}`;
};

const stylish = (tree, depth = 1) => {
    const indent = ' '.repeat(depth * 4 - 2);

    const lines = tree.map((node) => {
        if (node.type === 'unchanged') {
            return `${indent}  ${node.key}: ${objToString(node.value, depth)}`;
        }
        if (node.type === 'added'){
            return `${indent}+ ${node.key}: ${objToString(node.value, depth)}`;
        }
        if (node.type === 'removed') {
            return `${indent}- ${node.key}: ${objToString(node.value, depth)}`;
        }
        if (node.type === 'changed') {
            return `${indent}- ${node.key}: ${objToString(node.oldValue, depth)}\n${indent}+ ${node.key}: ${objToString(node.newValue, depth)}`;
        }
        if (node.type === 'nested'){
            const endIndent = ' '.repeat(depth * 4);
            return `${indent}  ${node.key}: {\n${stylish(node.children, depth + 1)}\n${endIndent}}`
        }
        return null;
    });
    return lines.join('\n');
};

export default stylish;