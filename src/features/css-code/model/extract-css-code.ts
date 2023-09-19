import css, { Rule, Stylesheet } from "css";

const getClassNames = (node: Element): string[] => {
  return [node.className, ...Array.from(node.children).map(item => getClassNames(item))].flat();
};

export const extractCSS = (node: HTMLDivElement) => {
  const classNames = getClassNames(node)
    .filter(item => typeof item === "string")
    .map(name => `.${name}`);

  const cssStyles = Array.from(document.head.getElementsByTagName("style"))
    .map(style => style.innerHTML)
    .join("");

  const parsedCSS: Stylesheet = css.parse(cssStyles);
  if (parsedCSS.stylesheet) {
    parsedCSS.stylesheet.rules = parsedCSS.stylesheet.rules
      .filter((rule: Rule) => rule.type === "rule")
      .filter((rule: Rule) =>
        rule?.selectors?.some(selector => classNames.some(name => name === selector))
      );
  }

  const styles = css.stringify(parsedCSS);

  const stylesList = styles.split("}").map(item => item + "}");

  return stylesList;
};
