import {SizeType} from './AppTypes';

export default {};

export const AppNames = (function () {
  return {
    SizeType: function (type) {
      switch (type) {
        case SizeType.small: return 'Small';
        case SizeType.medium: return 'Medium';
        case SizeType.large: return 'Large';
        default: return null;
      }
    },
    SizeTypePrefix: function (type) {
      switch (type) {
        case SizeType.small: return 'S';
        case SizeType.medium: return 'M';
        case SizeType.large: return 'L';
        default: return null;
      }
    }
  }
})();
