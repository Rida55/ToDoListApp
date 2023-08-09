import Toast from 'react-native-tiny-toast';

class TinyToastService {
  showLoadingToast = async (message: string): Promise<void> => {
    Toast.showLoading(message + '...', {position: Toast.position.CENTER});
  };

  hideToast = async (toast: boolean): Promise<void> => {
    // const toast = Toast.showLoading('Loading...');
    Toast.hide(toast);
  };

  showToast = async (message: string): Promise<void> => {
    Toast.show(message, {position: Toast.position.BOTTOM});
  };

  showSuccessToast = async (message: string): Promise<void> => {
    Toast.showSuccess(message, {position: Toast.position.BOTTOM});
  };
}

export const tinyToastService = new TinyToastService();
