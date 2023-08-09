import {StyleSheet} from 'react-native';
import { scale } from '../../../res/components/scale/scale';
import { FONTS } from '../../../res/globalStyle/themeSizes';
import { color } from '../../../res/globalStyle/colors';


export const styles = StyleSheet.create({
   
      noDataContainer: {
        flex: 1,
        marginTop: scale(100),
        justifyContent: 'center',
        alignItems: 'center',
      },
      noDataText: {
        color: color.blackRgbaBlur,
        ...FONTS.hExtraBold4,

      },
});
