export type Localized<T> = Partial<Record<string, T>>;

type PickLocalizedOptions = {
  defaultLocale: string;
  fallbackLanguage?: string; // defaults to "en"
};

/**
 * Resolve a localized value with fallback order:
 * 1) requested locale
 * 2) defaultLocale
 * 3) fallbackLanguage ("en" by default)
 * 4) first available translation
 */
export function pickLocalized<T>(
  value: Localized<T>,
  locale: string,
  options: PickLocalizedOptions,
): T {
  const fallbackLanguage = options.fallbackLanguage ?? "en";
  const tryOrder = [locale, options.defaultLocale, fallbackLanguage];

  for (const key of tryOrder) {
    const found = value[key];
    if (found !== undefined) return found;
  }

  const firstAvailable = Object.values(value).find(
    (candidate): candidate is T => candidate !== undefined,
  );
  if (firstAvailable !== undefined) return firstAvailable;

  throw new Error("No translation available for the requested value.");
}
