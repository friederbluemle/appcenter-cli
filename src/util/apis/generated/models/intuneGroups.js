/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the IntuneGroups class.
 * @constructor
 * @member {string} [odatacontext] context
 * 
 * @member {array} [value] categories for intune app
 * 
 */
function IntuneGroups() {
}

/**
 * Defines the metadata of IntuneGroups
 *
 * @returns {object} metadata of IntuneGroups
 *
 */
IntuneGroups.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'IntuneGroups',
    type: {
      name: 'Composite',
      className: 'IntuneGroups',
      modelProperties: {
        odatacontext: {
          required: false,
          serializedName: 'odata\\.context',
          type: {
            name: 'String'
          }
        },
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'IntuneGroupValueElementType',
                type: {
                  name: 'Composite',
                  className: 'IntuneGroupValue'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = IntuneGroups;