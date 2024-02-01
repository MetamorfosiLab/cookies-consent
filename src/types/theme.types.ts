export interface Theme {
  window?: {
    background?: string
    padding?: string
    border?: string
    radius?: string
    width?: string
    marginTop?: string
    marginLeft?: string
    marginRight?: string
    marginBottom?: string
  }

  title?: {
    fontSize?: string
    fontWeight?: string
    textColor?: string
    padding?: string
  }

  message?: {
    padding?: string
    lineHeight?: string
    fontSize?: string
    fontWeight?: string
    textColor?: string
    linkColor?: string
    linkDecoration?: string
    linkFontWeight?: string
  }

  settings?: {
    marginTop?: string
    marginBottom?: string
    separatorColor?: string
    titleSize?: string
    titleWeight?: string
    fontSize?: string
  }

  buttons?: {
    align?: string
    padding?: string
  }

  btn?: {
    fontSize?: string
    fontWeight?: string
    margin?: string
    padding?: string
    radius?: string
  }

  btnAccept?: {
    background?: string
    textColor?: string
    border?: string
    backgroundHover?: string
  }

  btnReject?: {
    background?: string
    textColor?: string
    border?: string
    backgroundHover?: string
  }

  btnInfo?: {
    background?: string
    textColor?: string
    border?: string
    backgroundHover?: string
  }

  btnSettings?: {
    background?: string
    textColor?: string
    border?: string
    backgroundHover?: string
  }

  btnSettingsSelect?: {
    background?: string
    textColor?: string
    border?: string
    backgroundHover?: string
  }

  btnSettingsAccept?: {
    background?: string
    textColor?: string
    border?: string
    backgroundHover?: string
  }

  btnDismiss?: {
    background?: string
    textColor?: string
    border?: string
    fontSize?: string
    fontWeight?: string
    padding?: string
    radius?: string
  }

  btnClose?: {
    color?: string
    colorHover?: string
  }

  popup?: {
    background?: string
    textColor?: string
    width?: string
    radius?: string
  }

  animation?: {
    duration?: string
    delay?: string
  }
}
