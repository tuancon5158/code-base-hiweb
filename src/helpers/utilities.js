import $ from 'jquery';
import _ from 'lodash';

class Utilities {
  scrollToTop(y) {
    $('html, body').animate({ scrollTop: y || 0 }, 'slow');
  }

  getNestedAttribute(object, dottedString) {
    let tmpObject = object;
    let nestedAttributes = dottedString.split('.');
    let getter = (obj, key) => {
      if (!obj || typeof obj !== 'object' || typeof obj[key] === 'undefined') {
        return (tmpObject = null);
      }

      return (tmpObject = obj[key]);
    };

    nestedAttributes.forEach(key => {
      tmpObject = getter(tmpObject, key);
    });

    return tmpObject;
  }

  /**
   * Merge 2 objects
   *
   * @param object
   * @param object
   * @param function
   * @return object
   */
  mergeObjects(object1, object2, customizer) {
    if (typeof customizer === 'function') {
      return _.mergeWith(object1, object2, customizer);
    }

    return _.merge(object1, object2);
  }

  /**
   * String limit
   *
   * @param string
   * @param integer Limit
   * @return string
   */
  stringLimit(str, limit) {
    if (!str) {
      return '';
    }

    if (str.length <= limit) {
      return str;
    }

    return str.substring(0, limit) + '...';
  }

  ucfirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  /**
   * Handle error response exception
   *
   * @param object Exception
   * @param object Errors object
   */
  handleErrorResponse(e) {
    let errors = [];

    // If known error
    let responseErrors = this.getNestedAttribute(e, 'response.data.errors');
    if (responseErrors) {
      // Map to local errors
      errors = responseErrors.map(error => {
        return error.title;
      });
    } else {
      errors = ['Oops! Unknown error!'];
    }

    return errors;
  }
}

export default new Utilities();
