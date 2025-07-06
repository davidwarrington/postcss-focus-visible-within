import type { Plugin } from 'postcss';
import selectorParser from 'postcss-selector-parser';

const PSEUDO = ':focus-visible-within';
const REPLACEMENT = ':has(:focus-visible)';

export default function postcssFocusVisibleWithin(): Plugin {
  return {
    postcssPlugin: 'postcss-focus-visible-within',

    Rule(rule) {
      if (!rule.selector.toLowerCase().includes(PSEUDO)) {
        return;
      }

      selectorParser(root => {
        root.walkPseudos(node => {
          if (node.value !== PSEUDO) {
            return;
          }

          node.replaceWith(selectorParser.pseudo({ value: REPLACEMENT }));
        });
      }).transformSync(rule, {
        lossless: true,
        updateSelector: true,
      });
    },
  };
}
