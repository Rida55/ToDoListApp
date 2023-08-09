import {StyleSheet} from 'react-native';
import { scale } from '../../../res/components/scale/scale';
import { FONTS } from '../../../res/globalStyle/themeSizes';
import { color } from '../../../res/globalStyle/colors';


export const styles = StyleSheet.create({
    floatingButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: color.primary,
        width:'90%',
        alignSelf:'center',
        borderRadius: scale(10),
        marginBottom: scale(16),
      },
      textInput: {
        flex: 1,
        padding: scale(15),
        color:color.white,
        ...FONTS.hMedium5,
      },
      buttonContainer: {
        padding: scale(8),
        marginLeft: scale(8),
        borderRadius: scale(4),
        backgroundColor: color.primary,
      },
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
      doneText: {
        ...FONTS.hBold4,
        color: color.white,
        paddingRight:scale(10)
      },
      errorMessage: {
        color: 'red',
        fontSize: scale(12),
        // marginTop: scale(4),
        marginBottom:scale(9),
        paddingHorizontal:scale(25)
      },
});
