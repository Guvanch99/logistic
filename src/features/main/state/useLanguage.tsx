import constate from 'constate'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export type TLanguage = 'en' | 'ru' | 'tr'
const useLanguage = () => {
  const [language, setLanguage] = useState<TLanguage>('en')
  const { i18n } = useTranslation('translation')
  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])
  return {
    language,
    setLanguage
  }
}

export const [LanguageProvider, useLanguageContext] = constate(useLanguage)
