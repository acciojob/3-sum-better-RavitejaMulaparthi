function threeSum(nums, target) {
    // Sort the array first to simplify the process
    nums.sort((a, b) => a - b);
    
    // Initialize variables to store the closest sum and the minimum difference
    let closestSum = Infinity;
    let minDiff = Infinity;
    
    // Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            const diff = Math.abs(sum - target);
            
            // Update closest sum and minDiff if a closer sum is found
            if (diff < minDiff) {
                minDiff = diff;
                closestSum = sum;
            }
            
            // Adjust pointers based on the current sum
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                // If the sum equals the target, return it
                return sum;
            }
        }
    }
    
    return closestSum;
}

