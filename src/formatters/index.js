import stylish from "./stylish.js";
import plain from "./plain.js";

const formatters = {
    stylish: (tree) => `{\n${stylish(tree)}\n}`,
    plain: (tree) => plain(tree),
};

export default (tree, format = 'stylish') => formatters[format](tree);