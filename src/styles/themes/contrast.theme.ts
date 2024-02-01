import type { Theme } from '../../types/theme.types'

const BACKGROUND = '#ffffff'
const FONT_COLOR = '#000000'

export const contrastTheme: Theme = {
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
    separatorColor: '#000',
  },
  btnClose: {
    color: FONT_COLOR,
    colorHover: '#666',
  },
  btnAccept: {
    background: BACKGROUND,
    backgroundHover: BACKGROUND,
    textColor: '#1B5E20',
    border: '0',
  },
  btnReject: {
    background: BACKGROUND,
    backgroundHover: BACKGROUND,
    textColor: '#B71C1C',
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
