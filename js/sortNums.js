const nums = [ 12, 5, -2, 717, 55, 9, 18, 9, 2, -10 ];

// O(n^2)
for (i = 0; i < nums.length; i++){
    for (j = i + 1; j < nums.length; j++){
        if (nums[i] > nums[j]){
            // swap
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
}

console.log(nums);
