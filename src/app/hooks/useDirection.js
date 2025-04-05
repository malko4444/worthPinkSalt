'use client'

import { useTranslation } from 'react-i18next'

export const useDirection = () => {
    const { i18n } = useTranslation()
    const isRTL = ['ar', 'ur'].includes(i18n.language)
    return { isRTL, dir: isRTL ? 'rtl' : 'ltr' }
}