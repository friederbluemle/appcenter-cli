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
 * Audience definition.
 *
 */
class AudienceBlobResult {
  /**
   * Create a AudienceBlobResult.
   * @property {string} [url] Location of the audience blob.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AudienceBlobResult
   *
   * @returns {object} metadata of AudienceBlobResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AudienceBlobResult',
      type: {
        name: 'Composite',
        className: 'AudienceBlobResult',
        modelProperties: {
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AudienceBlobResult;
