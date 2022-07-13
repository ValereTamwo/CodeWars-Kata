function DescendingOrder(entier) {

    if (typeof (entier) == 'number' && entier > 0) {

        //Converting Integer to a string Value

        const StringInteger = entier.toString();

        //  
        let IntegerArray = new Array();

        for (let i = 0; i < StringInteger.length; i++){

            let ConvertCaracterToEnteger = Number(StringInteger[i]);
            IntegerArray.push(ConvertCaracterToEnteger);
        }
        let DescendingSortArray = IntegerArray.sort().reverse();

        let result = "";
        
        for (let i = 0; i < DescendingSortArray.length; i++){
            let PassFinalString = DescendingSortArray[i].toString();
            result = result + PassFinalString;
        }
        console.log(result);
        return (Number(result));
    } else {
        console.log('Please enter a positive integer...');
    }
}

DescendingOrder(998765657765);