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
 * Class representing a GetNativeCrashDownloadErrorModel.
 */
class GetNativeCrashDownloadErrorModel {
  /**
   * Create a GetNativeCrashDownloadErrorModel.
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetNativeCrashDownloadErrorModel
   *
   * @returns {object} metadata of GetNativeCrashDownloadErrorModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetNativeCrashDownloadErrorModel',
      type: {
        name: 'Composite',
        className: 'GetNativeCrashDownloadErrorModel',
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

module.exports = GetNativeCrashDownloadErrorModel;
