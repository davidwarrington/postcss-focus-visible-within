import postcss from 'postcss';
import { describe, expect, it } from 'vitest';
import plugin from '.';

async function run(input: string, output: string) {
  const result = await postcss([plugin()]).process(input);

  expect(result.css.trim()).toEqual(output.trim());
  expect(result.warnings()).toHaveLength(0);
}

describe(plugin, () => {
  describe('replaces :focus-visible-within with :has(:focus-visible)', async () => {
    it('with one selector', async () => {
      await run(`:focus-visible-within {}`, `:has(:focus-visible) {}`);
    });

    it('with multiple selectors', async () => {
      await run(
        `*,:focus-visible-within,:focus-visible {}`,
        `*,:has(:focus-visible),:focus-visible {}`,
      );
    });

    it('when nested within a pseudo class', async () => {
      await run(
        `:not(:focus-visible-within) {}`,
        `:not(:has(:focus-visible)) {}`,
      );
    });
  });

  it(`correctly ignores attribute values`, async () => {
    await run(
      `[content=":focus-visible-within"] {}`,
      `[content=":focus-visible-within"] {}`,
    );
  });
});
