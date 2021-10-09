/**
 * Validate object properties
 * @param {Object} obj Object to check
 * @param {Object} def Object with validations
 * @param {String} [property] Property to check
 * @returns {Promise<{ isValid: boolean, areValid: boolean, someValid: boolean }>}
 */
export async function vprops(obj, def, property = undefined) {
    // Validate a single property
    const single = (obj, def, prop) => typeof obj[prop] === def[prop]

    // Validate all object properties
    const multiple = (obj, def) => {
        const keys = Object.keys(def)
        return keys.every(key => typeof obj[key] === def[key])
    }

    // Validate if some property is valid
    const some = (obj, def) => {
        const keys = Object.keys(def)
        return keys.some(key => typeof obj[key] === def[key])
    }

    return new Proxy(obj, {
        get: (target, prop) => {
            if (prop === 'isValid') {
                return single(target, def, property)
            }
            if (prop === 'areValid') {
                return multiple(target, def)
            }
            if (prop === 'someValid') {
                return some(target, def)
            }
            return target[prop]
        }
    })
}