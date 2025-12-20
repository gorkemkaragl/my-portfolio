import "server-only";

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  tr: () =>
    import("../../dictionaries/tr.json").then((module) => module.default),
};

export async function getDictionary(lang) {
  const dictionaryLoader = dictionaries[lang] || dictionaries.tr;
  return dictionaryLoader();
}
