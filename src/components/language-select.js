import { LANGUAGES } from "../data/languages"

export const LanguageSelector = () => {
  return <>
    <select defaultValue={"es"}>
      {LANGUAGES.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  </>
}
