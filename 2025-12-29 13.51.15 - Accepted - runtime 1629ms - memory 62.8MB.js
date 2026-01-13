var sumOfNumberAndReverse = function(num) {
        const reverse = n => parseInt(String(n).split('').reverse().join(''), 10);
            for (let i = 0; i <= num; i++) {
                    if (i + reverse(i) === num) return true;
                        }
                            return false;
                            };