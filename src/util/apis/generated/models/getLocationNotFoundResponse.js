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
 * Class representing a GetLocationNotFoundResponse.
 */
class GetLocationNotFoundResponse {
  /**
   * Create a GetLocationNotFoundResponse.
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetLocationNotFoundResponse
   *
   * @returns {object} metadata of GetLocationNotFoundResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetLocationNotFoundResponse',
      type: {
        name: 'Composite',
        className: 'GetLocationNotFoundResponse',
        modelProperties: {
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetLocationNotFoundResponse;
