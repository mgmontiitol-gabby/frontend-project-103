const stylish = (tree, depth = 1) => {
    const indent = ' '.repeat(depth * 4 - 2);
    const endIndent = ' '.repeat(depth * 4 - 4);

    const lines = tree.map((node) => {
        if (node.type === 'unchanged') {
            return `${indent}  ${node.key}: ${node.value}`;
        }
        if (node.type === 'added'){
            return `${indent}+ ${node.key}: ${node.value}`;
        }
        if (node.type === 'removed') {
            return `${indent}- ${node.key}: ${node.value}`;
        }
        if (node.type === 'changed') {
            return `${indent}- ${node.key}: ${node.oldValue}\n${indent}+ ${node.key}: ${node.newValue}`;
        }
        if (node.type === 'nested'){
            return `${indent}  ${node.key}: {\n${stylish(node.children, depth + 1)}\n${endIndent}}`
        }
    });
    return `{\n${lines.join('\n')}\n}`
};

export default stylish;