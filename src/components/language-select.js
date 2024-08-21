import { LANGUAGES } from "../data/languages"
import i18n from "../i18n";

export const LanguageSelector = () => {
  function changeLanguage(event) { 
    i18n.changeLanguage(event.target.value);
  }
  return <>
    <select defaultValue={"es"} onChange={changeLanguage}>
      {LANGUAGES.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  </>
}
