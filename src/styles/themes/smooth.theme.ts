import type { Theme } from '../../types/theme.types'

const BACKGROUND = '#c2e7ff'
const FONT_COLOR = '#001d35'

export const smoothTheme: Theme = {
  window: {
    background: BACKGROUND,
  },
  popup: {
    background: BACKGROUND,
    textColor: FONT_COLOR,
  },
  title: {
    textColor: FONT_COLOR,
  },
  message: {
    textColor: FONT_COLOR,
    linkColor: FONT_COLOR,
    linkFontWeight: '600',
  },
  settings: {
    separatorColor: '#001d35',
  },
  btnClose: {
    color: FONT_COLOR,
    colorHover: '#666',
  },
  btnAccept: {
    background: '#388E3C',
    backgroundHover: '#1B5E20',
    textColor: '#ffffff',
    border: '0',
  },
  btnReject: {
    background: '#D32F2F',
    backgroundHover: '#B71C1C',
    textColor: '#ffffff',
    border: '0',
  },
  btnInfo: {
    background: BACKGROUND,
    backgroundHover: BACKGROUND,
    textColor: FONT_COLOR,
    border: '0',
  },
  btnSettings: {
    background: BACKGROUND,
    backgroundHover: BACKGROUND,
    textColor: FONT_COLOR,
    border: '0',
  },
  btnSettingsSelect: {
    background: BACKGROUND,
    backgroundHover: BACKGROUND,
    textColor: FONT_COLOR,
    border: '0',
  },
  btnSettingsAccept: {
    background: BACKGROUND,
    backgroundHover: BACKGROUND,
    textColor: FONT_COLOR,
    border: '0',
  },
}
