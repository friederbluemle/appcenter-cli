/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Location for downloading symbol upload
 *
 */
class GetLocationOKResponseModel {
  /**
   * Create a GetLocationOKResponseModel.
   * @property {string} uri
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetLocationOKResponseModel
   *
   * @returns {object} metadata of GetLocationOKResponseModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetLocationOKResponse',
      type: {
        name: 'Composite',
        className: 'GetLocationOKResponseModel',
        modelProperties: {
          uri: {
            required: true,
            serializedName: 'uri',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetLocationOKResponseModel;
