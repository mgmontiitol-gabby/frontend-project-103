import stylish from "./stylish.js";
import plain from "./plain.js";
import json from "./json.js";

const formatters = {
    stylish: (tree) => `{\n${stylish(tree)}\n}`,
    plain: (tree) => plain(tree),
    json: (tree) => json(tree),
};

export default (tree, format = 'stylish') => formatters[format](tree);