// Dev-only Turbopack loader (wired up in next.config.ts). Adds
// data-src="<absolute file>:<line>:<col>" to every host JSX element
// (<div>, <h1>, <a>, ...) so the in-page inspector can jump to the code
// that rendered it. Never runs in `next build`.

// Loaders run through loader-runner, which expects CommonJS.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const ts = require("typescript");

module.exports = function sourceLoader(source) {
  const file = this.resourcePath;
  const sf = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const inserts = [];

  function visit(node) {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const tag = node.tagName;
      // Only lowercase intrinsic tags; components may not forward unknown props.
      if (ts.isIdentifier(tag) && /^[a-z]/.test(tag.text)) {
        const { line, character } = sf.getLineAndCharacterOfPosition(node.getStart(sf));
        inserts.push({ pos: tag.end, text: ` data-src="${file}:${line + 1}:${character + 1}"` });
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);

  let out = source;
  for (const { pos, text } of inserts.sort((a, b) => b.pos - a.pos)) {
    out = out.slice(0, pos) + text + out.slice(pos);
  }
  return out;
};
