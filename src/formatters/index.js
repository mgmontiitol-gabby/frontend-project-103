import stylish from "./stylish";
import plain from "./plain";

const formatters = {
    stylish: (tree) => `{\n${stylish(tree)}\n}`,
    plain: (tree) => plain(tree),
};

export default (tree, format = 'stylish') => formatters[format](tree);