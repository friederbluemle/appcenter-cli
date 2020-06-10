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
 * ExternalStoreRequest
 *
 */
class BodyModelModelModelModelModelModelModelModelModelModelModel {
  /**
   * Create a BodyModelModelModelModelModelModelModelModelModelModelModel.
   * @property {string} [type] store Type. Possible values include:
   * 'googleplay', 'intune', 'apple'
   * @property {string} [name] name of the store. In case of googleplay, and
   * Apple store this is fixed to Production.
   * @property {string} [track] track of the store. Can be production, alpha &
   * beta for googleplay. Can be production, testflight-internal &
   * testflight-external for Apple Store. Possible values include:
   * 'production', 'alpha', 'beta', 'testflight-internal',
   * 'testflight-external'
   * @property {object} [intuneDetails]
   * @property {object} [intuneDetails.secretJson]
   * @property {string} [intuneDetails.secretJson.idToken] the id token of user
   * @property {string} [intuneDetails.secretJson.refreshToken] the refresh
   * token for user
   * @property {string} [intuneDetails.secretJson.refreshTokenExpiry] the
   * expiry of refresh token
   * @property {object} [intuneDetails.targetAudience]
   * @property {string} [intuneDetails.targetAudience.name] display name for
   * the target audience/group
   * @property {object} [intuneDetails.appCategory]
   * @property {string} [intuneDetails.appCategory.name] display name for the
   * app category
   * @property {string} [intuneDetails.tenantId] tenant id of the intune store
   * @property {string} [serviceConnectionId] Id for the shared service
   * connection. In case of Apple AppStore, this connection will be used to
   * create and connect to the Apple AppStore in Mobile Center.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BodyModelModelModelModelModelModelModelModelModelModelModel
   *
   * @returns {object} metadata of BodyModelModelModelModelModelModelModelModelModelModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'body',
      type: {
        name: 'Composite',
        className: 'BodyModelModelModelModelModelModelModelModelModelModelModel',
        modelProperties: {
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          track: {
            required: false,
            serializedName: 'track',
            type: {
              name: 'String'
            }
          },
          intuneDetails: {
            required: false,
            serializedName: 'intune_details',
            type: {
              name: 'Composite',
              className: 'BodyIntuneDetails'
            }
          },
          serviceConnectionId: {
            required: false,
            serializedName: 'service_connection_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BodyModelModelModelModelModelModelModelModelModelModelModel;