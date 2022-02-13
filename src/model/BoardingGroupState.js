/**
 * Theme Parks Wiki V1 API
 * api.themeparks.wiki
 *
 * The version of the OpenAPI document: 1.0.0-alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class BoardingGroupState.
* @enum {}
* @readonly
*/
export default class BoardingGroupState {
    
        /**
         * value: "AVAILABLE"
         * @const
         */
        "AVAILABLE" = "AVAILABLE";

    
        /**
         * value: "PAUSED"
         * @const
         */
        "PAUSED" = "PAUSED";

    
        /**
         * value: "CLOSED"
         * @const
         */
        "CLOSED" = "CLOSED";

    

    /**
    * Returns a <code>BoardingGroupState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/BoardingGroupState} The enum <code>BoardingGroupState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

