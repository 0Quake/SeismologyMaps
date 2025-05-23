/**
 * Wait for a given number of seconds.
 * @param {Float} seconds The number of seconds to wait.
 */
module.exports = async function(seconds) {
    if(seconds > 0){
        await new Promise(resolve => setTimeout(resolve, seconds * 1000));
    } else {
        throw new Error(`Error: "${seconds}" is not a valid time to wait`);
    }
};