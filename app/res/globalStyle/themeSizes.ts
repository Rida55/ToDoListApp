import { fonts } from './fonts';
import { scale } from '../components/scale/scale';

export const SIZES = {
  xx_small: scale(4),
  x_small: scale(8),
  small: scale(12),
  medium: scale(14),
  large: scale(15),
  x_large: scale(16),
  xx_large: scale(20),
  xxx_large: scale(36),
};

export const FONTS = {
  //          <<<<===== Bold typography start  =====>>>>
  hBold1: { fontFamily: fonts['Inter-Bold'], fontSize: SIZES.xxx_large },
  hBold2: { fontFamily: fonts['Inter-Bold'], fontSize: SIZES.xx_large },
  hBold3: { fontFamily: fonts['Inter-Bold'], fontSize: SIZES.x_large },
  hBold4: { fontFamily: fonts['Inter-Bold'], fontSize: SIZES.large },
  hBold5: { fontFamily: fonts['Inter-Bold'], fontSize: SIZES.medium },
  bodyBold1: { fontFamily: fonts['Inter-Bold'], fontSize: SIZES.small },
  bodyBold2: { fontFamily: fonts['Inter-Bold'], fontSize: SIZES.x_small },
  bodyBold3: { fontFamily: fonts['Inter-Bold'], fontSize: SIZES.xx_small },

  //          <<<<===== Bold typography end  =====>>>>

  //          <<<<===== ExtraBold typography start  =====>>>>
  hExtraBold1: {
    fontFamily: fonts['Inter-ExtraBold'],
    fontSize: SIZES.xxx_large,
  },
  hExtraBold2: {
    fontFamily: fonts['Inter-ExtraBold'],
    fontSize: SIZES.xx_large,
  },
  hExtraBold3: {
    fontFamily: fonts['Inter-ExtraBold'],
    fontSize: SIZES.x_large,
  },
  hExtraBold4: { fontFamily: fonts['Inter-ExtraBold'], fontSize: SIZES.large },
  hExtraBold5: { fontFamily: fonts['Inter-ExtraBold'], fontSize: SIZES.medium },
  bodyExtraBold1: {
    fontFamily: fonts['Inter-ExtraBold'],
    fontSize: SIZES.small,
  },
  bodyExtraBold2: {
    fontFamily: fonts['Inter-ExtraBold'],
    fontSize: SIZES.x_small,
  },
  bodyExtraBold3: {
    fontFamily: fonts['Inter-ExtraBold'],
    fontSize: SIZES.xx_small,
  },

  //          <<<<===== ExtraBold typography end  =====>>>>

  //          <<<<===== ExtraLight typography start  =====>>>>
  hExtraLight1: {
    fontFamily: fonts['Inter-ExtraLight'],
    fontSize: SIZES.xxx_large,
  },
  hExtraLight2: {
    fontFamily: fonts['Inter-ExtraLight'],
    fontSize: SIZES.xx_large,
  },
  hExtraLight3: {
    fontFamily: fonts['Inter-ExtraLight'],
    fontSize: SIZES.x_large,
  },
  hExtraLight4: {
    fontFamily: fonts['Inter-ExtraLight'],
    fontSize: SIZES.large,
  },
  hExtraLight5: {
    fontFamily: fonts['Inter-ExtraLight'],
    fontSize: SIZES.medium,
  },
  bodyExtraLight1: {
    fontFamily: fonts['Inter-ExtraLight'],
    fontSize: SIZES.small,
  },
  bodyExtraLight2: {
    fontFamily: fonts['Inter-ExtraLight'],
    fontSize: SIZES.x_small,
  },
  bodyExtraLight3: {
    fontFamily: fonts['Inter-ExtraLight'],
    fontSize: SIZES.xx_small,
  },

  //          <<<<===== ExtraLight typography end  =====>>>>

  //          <<<<===== Light typography start  =====>>>>
  hLight1: { fontFamily: fonts['Inter-Light'], fontSize: SIZES.xxx_large },
  hLight2: { fontFamily: fonts['Inter-Light'], fontSize: SIZES.xx_large },
  hLight3: { fontFamily: fonts['Inter-Light'], fontSize: SIZES.x_large },
  hLight4: { fontFamily: fonts['Inter-Light'], fontSize: SIZES.large },
  hLight5: { fontFamily: fonts['Inter-Light'], fontSize: SIZES.medium },
  bodyLight1: { fontFamily: fonts['Inter-Light'], fontSize: SIZES.small },
  bodyLight2: { fontFamily: fonts['Inter-Light'], fontSize: SIZES.x_small },
  bodyLight3: { fontFamily: fonts['Inter-Light'], fontSize: SIZES.xx_small },

  //          <<<<===== Light typography end  =====>>>>

  //          <<<<===== Medium typography start  =====>>>>
  hMedium1: { fontFamily: fonts['Inter-Medium'], fontSize: SIZES.xxx_large },
  hMedium2: { fontFamily: fonts['Inter-Medium'], fontSize: SIZES.xx_large },
  hMedium3: { fontFamily: fonts['Inter-Medium'], fontSize: SIZES.x_large },
  hMedium4: { fontFamily: fonts['Inter-Medium'], fontSize: SIZES.large },
  hMedium5: { fontFamily: fonts['Inter-Medium'], fontSize: SIZES.medium },
  bodyMedium1: { fontFamily: fonts['Inter-Medium'], fontSize: SIZES.small },
  bodyMedium2: { fontFamily: fonts['Inter-Medium'], fontSize: SIZES.x_small },
  bodyMedium3: { fontFamily: fonts['Inter-Medium'], fontSize: SIZES.xx_small },

  //          <<<<===== Medium typography end  =====>>>>

  //          <<<<===== Regular typography start  =====>>>>
  hRegular1: { fontFamily: fonts['Inter-Regular'], fontSize: SIZES.xxx_large },
  hRegular2: { fontFamily: fonts['Inter-Regular'], fontSize: SIZES.xx_large },
  hRegular3: { fontFamily: fonts['Inter-Regular'], fontSize: SIZES.x_large },
  hRegular4: { fontFamily: fonts['Inter-Regular'], fontSize: SIZES.large },
  hRegular5: { fontFamily: fonts['Inter-Regular'], fontSize: SIZES.medium },
  bodyRegular1: { fontFamily: fonts['Inter-Regular'], fontSize: SIZES.small },
  bodyRegular2: { fontFamily: fonts['Inter-Regular'], fontSize: SIZES.x_small },
  bodyRegular3: {
    fontFamily: fonts['Inter-Regular'],
    fontSize: SIZES.xx_small,
  },

  //          <<<<===== Regular typography end  =====>>>>

  //          <<<<===== SemiBold typography start  =====>>>>
  hSemiBold1: {
    fontFamily: fonts['Inter-SemiBold'],
    fontSize: SIZES.xxx_large,
  },
  hSemiBold2: { fontFamily: fonts['Inter-SemiBold'], fontSize: SIZES.xx_large },
  hSemiBold3: { fontFamily: fonts['Inter-SemiBold'], fontSize: SIZES.x_large },
  hSemiBold4: { fontFamily: fonts['Inter-SemiBold'], fontSize: SIZES.large },
  hSemiBold5: { fontFamily: fonts['Inter-SemiBold'], fontSize: SIZES.medium },
  bodySemiBold1: { fontFamily: fonts['Inter-SemiBold'], fontSize: SIZES.small },
  bodySemiBold2: {
    fontFamily: fonts['Inter-SemiBold'],
    fontSize: SIZES.x_small,
  },
  bodySemiBold3: {
    fontFamily: fonts['Inter-SemiBold'],
    fontSize: SIZES.xx_small,
  },

  //          <<<<===== SemiBold typography end  =====>>>>
};

const appTheme = { SIZES, FONTS };

export default appTheme;
