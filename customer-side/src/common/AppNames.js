import {SizeType} from './AppTypes';

export default {};

export const AppNames = (function () {
  return {
    /**
     * SizeType 별로 보여지는 text
     * @param type
     * @returns {string|null}
     * @constructor
     */
    SizeType: function (type) {
      switch (type) {
        case SizeType.small: return 'Small';
        case SizeType.medium: return 'Medium';
        case SizeType.large: return 'Large';
        default: return null;
      }
    },
    /**
     * SizeType 별로 보여지는 PreFix
     * @param type
     * @returns {string|null}
     * @constructor
     */
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
