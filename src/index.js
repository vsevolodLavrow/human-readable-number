module.exports = function toReadable (number) {
        const ones = {
           0 : '',
           1 : 'one',
           2 : 'two',  
           3 : 'three',  
           4 : 'four',  
           5 : 'five',  
           6 : 'six',  
           7 : 'seven',  
           8 : 'eight',  
           9 : 'nine',  
           10 : 'ten',  
           11 : 'eleven',  
           12 : 'twelve',  
           13 : 'thirteen',  
           14 : 'fourteen',  
           15 : 'fifteen',  
           16 : 'sixteen',  
           17 : 'seventeen',  
           18 : 'eighteen',  
           19 : 'nineteen',  
        };
         const tens = {
           0 : '',
           1 : 'ten',
           2 : 'twenty',
           3 : 'thirty',
           4 : 'forty',
           5 : 'fifty',
           6 : 'sixty',
           7 : 'seventy',
           8 : 'eighty',
           9 : 'ninety',
        };
    
    
        
        
        if (number === 0) return 'zero';
    
        if (number < 20) {
             return `${ones[number]}`;
        }
        
        if (number < 100) {
            
            return `${tens[Math.floor(number / 10)]} ${ones[number % 10]}`.trim();
        }
        if (number < 1000) {
            if ((number % 100) < 20) {
                return `${ones[Math.floor(number/100)]} hundred ${ones[Math.floor((number%100))]}`.trim();
            }
            else return `${ones[Math.floor(number/100)]} hundred ${tens[Math.floor((number%100)/10)]} ${ones[number % 10]}`.trim();

        }
        
       
    }

