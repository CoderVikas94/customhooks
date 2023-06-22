import { useLocalStorage } from "../8 useStorage/useStorage";
import * as translations from "./translation";

interface TranslationOptions {
  language?: string;
  fallbackLanguage?: string;
}

interface TranslationResult {
  language: string;
  setLanguage: (language: string) => void;
  fallbackLanguage: string;
  setFallbackLanguage: (fallbackLanguage: string) => void;
  t: (key: string) => string;
}

interface Translations {
  [key: string]: { [key: string]: string } | undefined;
}

export default function useTranslation(options?: TranslationOptions): TranslationResult {
  const { language: initialLanguage = "en", fallbackLanguage: initialFallbackLanguage = "en" } = options || {};
  const [language, setLanguage] = useLocalStorage("language", initialLanguage);
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    "fallbackLanguage",
    initialFallbackLanguage
  );

  const translate = (key: string): string => {
    const keys = key.split(".");

    const translatedValue =
      getNestedTranslation(language || initialLanguage, keys) ??
      getNestedTranslation(fallbackLanguage || initialFallbackLanguage, keys);

    if (translatedValue === undefined) {
      console.warn(`Translation not found for key: ${key}`);
      return key; // Return the key itself as a fallback
    }

    return translatedValue;
  };

  return {
    language: language || initialLanguage,
    setLanguage,
    fallbackLanguage: fallbackLanguage || initialFallbackLanguage,
    setFallbackLanguage,
    t: translate,
  };
}

function getNestedTranslation(language: string, keys: string[]): string | undefined {
    const translationObj:any = translations;
    return keys.reduce((obj:any, key) => {
      return obj ? obj[key] : undefined;
    }, translationObj[language]);
  }
  