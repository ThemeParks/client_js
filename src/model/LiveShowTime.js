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
 * The LiveShowTime model module.
 * @module model/LiveShowTime
 * @version 6.0.0
 */
class LiveShowTime {
    /**
     * Constructs a new <code>LiveShowTime</code>.
     * @alias module:model/LiveShowTime
     */
    constructor() { 
        
        LiveShowTime.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LiveShowTime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LiveShowTime} obj Optional instance to populate.
     * @return {module:model/LiveShowTime} The populated <code>LiveShowTime</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LiveShowTime();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
LiveShowTime.prototype['type'] = undefined;

/**
 * @member {Date} startTime
 */
LiveShowTime.prototype['startTime'] = undefined;

/**
 * @member {Date} endTime
 */
LiveShowTime.prototype['endTime'] = undefined;






export default LiveShowTime;

