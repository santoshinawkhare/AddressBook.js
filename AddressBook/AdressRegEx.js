 module.exports = {
     checknamePattern(value){
        let nameRegEx = RegExp('^[A-za-z\\s]{4,}$')
            if(!nameRegEx.test(value))
              throw 'Error!! Invalid Value';
        },

        checkZipCodePattern(value){
        let zipCodeRegEx = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$')
        if(!zipCodeRegEx.test(value))
              throw 'Error!! Invalid Value';
        },

        CheckphoneNumPattern(value){
            let phoneNumRegEx = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$')
            if(!phoneNumRegEx.test(value))
                  throw 'Error!! Invalid Value';
        },

        CheckemailIdPattern (value){
            let emailIdmRegEx = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
            if(!emailIdmRegEx.test(value))
                  throw 'Error!! Invalid Value';
        }
    }