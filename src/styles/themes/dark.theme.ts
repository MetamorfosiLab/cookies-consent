import type { Theme } from '../../types/theme.types'

const BACKGROUND = '#2f3337'
const FONT_COLOR = '#ffffff'

export const darkTheme: Theme = {
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
    separatorColor: '#ddd',
  },
  btnClose: {
    color: FONT_COLOR,
    colorHover: '#ddd',
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
    background: '#EEE',
    backgroundHover: '#CCC',
    textColor: '#333',
    border: '0',
  },
  btnSettings: {
    background: '#EEE',
    backgroundHover: '#CCC',
    textColor: '#333',
    border: '0',
  },
  btnSettingsSelect: {
    background: '#EEE',
    backgroundHover: '#CCC',
    textColor: '#333',
    border: '0',
  },
  btnSettingsAccept: {
    background: '#388E3C',
    backgroundHover: '#1B5E20',
    textColor: '#ffffff',
    border: '0',
  },

}
