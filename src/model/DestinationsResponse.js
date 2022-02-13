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
import DestinationEntry from './DestinationEntry';

/**
 * The DestinationsResponse model module.
 * @module model/DestinationsResponse
 * @version 6.0.0
 */
class DestinationsResponse {
    /**
     * Constructs a new <code>DestinationsResponse</code>.
     * @alias module:model/DestinationsResponse
     */
    constructor() { 
        
        DestinationsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DestinationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DestinationsResponse} obj Optional instance to populate.
     * @return {module:model/DestinationsResponse} The populated <code>DestinationsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DestinationsResponse();

            if (data.hasOwnProperty('destinations')) {
                obj['destinations'] = ApiClient.convertToType(data['destinations'], [DestinationEntry]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/DestinationEntry>} destinations
 */
DestinationsResponse.prototype['destinations'] = undefined;






export default DestinationsResponse;

