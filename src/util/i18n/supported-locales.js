import supportedLocales from "@/config/supported-locales"

export function getAllAvailableLocales() {
  let annotatedLocales = []

  for (const code of Object.keys(supportedLocales)) {
    annotatedLocales.push({
      code,
      name: supportedLocales[code]
    })
  }

  return annotatedLocales
}

export function supportedLocalesInclude(locale) {
  return Object.keys(supportedLocales).includes(locale)
}
