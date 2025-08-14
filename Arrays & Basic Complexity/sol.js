/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0;i<nums.length;i++) {
        let tamamlayici = target - nums[i]
        if (map.hasOwnProperty(tamamlayici)) {
            return [map[tamamlayici],i];
        }
        map[nums[i]] = i;
    }
};