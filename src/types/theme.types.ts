import type { Properties as CSSProperties } from 'csstype'

// #region ThemeInterface
export interface Theme {
  // Global font family
  fontFamily?: CSSProperties['fontFamily']

  window?: Window
  title?: Title
  message?: Message
  settings?: Settings
  buttons?: Buttons
  btn?: Btn
  btnAccept?: BtnAccept
  btnReject?: BtnReject
  btnInfo?: BtnInfo
  btnSettings?: BtnSettings
  btnSettingsSelect?: BtnSettingsSelect
  btnSettingsAccept?: BtnSettingsAccept
  btnDismiss?: BtnDismiss
  btnClose?: BtnClose
  popup?: Popup
  animation?: Animation
}
// #endregion ThemeInterface

// #region window
interface Window {
  background?: CSSProperties['background']
  border?: CSSProperties['border']
  borderRadius?: CSSProperties['borderRadius']
  marginBottom?: CSSProperties['marginBottom']
  marginLeft?: CSSProperties['marginLeft']
  marginRight?: CSSProperties['marginRight']
  marginTop?: CSSProperties['marginTop']
  padding?: CSSProperties['padding']
  width?: CSSProperties['width']
}
// #endregion window

// #region title
interface Title {
  fontSize?: CSSProperties['fontSize']
  fontWeight?: CSSProperties['fontWeight']
  marginBottom?: CSSProperties['marginBottom']
  padding?: CSSProperties['padding']
  textColor?: CSSProperties['color']
}
// #endregion title

// #region message
interface Message {
  padding?: CSSProperties['padding']
  lineHeight?: CSSProperties['lineHeight']
  fontSize?: CSSProperties['fontSize']
  fontWeight?: CSSProperties['fontWeight']
  textColor?: CSSProperties['color']
  linkColor?: CSSProperties['color']
  linkDecoration?: CSSProperties['textDecoration']
  linkFontWeight?: CSSProperties['fontWeight']
}
// #endregion message

// #region settings
interface Settings {
  marginTop?: CSSProperties['marginTop']
  marginBottom?: CSSProperties['marginBottom']
  fontSize?: CSSProperties['fontSize']
  separatorColor?: CSSProperties['color']
  titleSize?: CSSProperties['fontSize']
  titleWeight?: CSSProperties['fontWeight']
}
// #endregion settings

// #region buttons
interface Buttons {
  padding?: CSSProperties['padding']
  align?: CSSProperties['textAlign']
}
// #endregion buttons

// #region btn
interface Btn {
  fontSize?: CSSProperties['fontSize']
  fontWeight?: CSSProperties['fontWeight']
  margin?: CSSProperties['margin']
  padding?: CSSProperties['padding']
  radius?: CSSProperties['borderRadius']
}
// #endregion btn

// #region btnAccept
interface BtnAccept {
  background?: CSSProperties['background']
  border?: CSSProperties['border']
  textColor?: CSSProperties['color']
  backgroundHover?: CSSProperties['background']
}
// #endregion btnAccept

// #region btnReject
interface BtnReject {
  background?: CSSProperties['background']
  border?: CSSProperties['border']
  textColor?: CSSProperties['color']
  backgroundHover?: CSSProperties['background']
}
// #endregion btnReject

// #region btnInfo
interface BtnInfo {
  background?: CSSProperties['background']
  border?: CSSProperties['border']
  textColor?: CSSProperties['color']
  backgroundHover?: CSSProperties['background']
}
// #endregion btnInfo

// #region btnSettings
interface BtnSettings {
  background?: CSSProperties['background']
  border?: CSSProperties['border']
  textColor?: CSSProperties['color']
  backgroundHover?: CSSProperties['background']
}
// #endregion btnSettings

// #region btnSettingsSelect
interface BtnSettingsSelect {
  background?: CSSProperties['background']
  border?: CSSProperties['border']
  textColor?: CSSProperties['color']
  backgroundHover?: CSSProperties['background']
}
// #endregion btnSettingsSelect

// #region btnSettingsAccept
interface BtnSettingsAccept {
  background?: CSSProperties['background']
  border?: CSSProperties['border']
  textColor?: CSSProperties['color']
  backgroundHover?: CSSProperties['background']
}
// #endregion btnSettingsAccept

// #region btnDismiss
interface BtnDismiss {
  background?: CSSProperties['background']
  border?: CSSProperties['border']
  fontSize?: CSSProperties['fontSize']
  fontWeight?: CSSProperties['fontWeight']
  padding?: CSSProperties['padding']
  textColor?: CSSProperties['color']
  radius?: CSSProperties['borderRadius']
}
// #endregion btnDismiss

// #region btnClose
interface BtnClose {
  color?: CSSProperties['color']
  colorHover?: CSSProperties['color']
}
// #endregion btnClose

// #region popup
interface Popup {
  background?: CSSProperties['background']
  width?: CSSProperties['width']
  textColor?: CSSProperties['color']
  radius?: CSSProperties['borderRadius']
}
// #endregion popup

// #region animation
interface Animation {
  duration?: CSSProperties['animationDuration']
  delay?: CSSProperties['animationDelay']
}
// #endregion animation
