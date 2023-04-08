function useridValidation(inputText){
    var uid_len = inputText.length;
    if(uid_len == 0 || uid_len < 5 || uid_len > 12){
        alert("it's should not empty/it's should be between 5 and 12");
        return false;
    }
}

function userpasswordValidation(inputText){
    var upass_len = inputText.length;
    if(upass_len == 0 || upass_len < 7 || upass_len > 12){
        alert("it's shuld not empty/it's should be between 7 and 12");
        return false;
    }
}

function usernameValidation(inputText){
    var alphabte = /^[A-Z a-z]+$/;
    if(inputText.match(alphabte)){
        return true;
    }
    else{
        return false;
    }
}

function useremailValidation(inputText){
    var reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(reg.test(inputText) == false){
        return false;
    }
    else{
        return true;
    }
}

function countryValidation(inputText){
    if(inputText == "Default"){
        return false;
    }
    else{
        return true;
    }
}

function genderValidation(inputText){
    x = 0;
    if(inputText[0].checked){
        x++;
    }
    if(inputText[1].checked){
        x++;
    }
    if(x == 0){
        return false;
    }
    else{
        return true;
    }
}

function languageValidation(inputText){
    y = 0;
    if(inputText[0].checked){
        y++;
    }
    if(inputText[1].checked){
        y++;
    }
    if(y == 0){
        return false;
    }
    else{
        return true;
    }
}

function phoneValidation(inputText){
    var phone = /^\d{10}$/;
    if(inputText.match(phone)){
        return true;
    }
    else{
        return false;
    }
}

function formValidation(frm){
    var u_id = frm.userid.value;
    var u_pass = frm.password.value;
    var u_name = frm.username.value;
    var u_add = frm.address.value;
    var u_con = frm.country.value;
    var u_zip = frm.zip_code.value;
    var u_email = frm.email.value;
    var u_msex = frm.sex;
    var u_fsex = frm.sex;
    var u_eng = frm.language;
    var u_neng = frm.language;
    var u_about = frm.about.value;
    var a = true;
    var b = true;
    var c = true;
    var d = true;
    var e = true;
    var f = true;
    var g = true;
    var h = true;
    var re_value = false;

    if(u_id == "" || u_pass == "" || u_name == "" || u_add == "" || u_zip == "" || u_email == "" || u_about == ""){
        alert('there are empty field, please fill them');
        a = false;
    }
    if(useridValidation(u_id) == false){
        b = false;
    }
    if(userpasswordValidation(u_pass) == false){
        c = false;
    }
    if(usernameValidation(u_name) == false){
        alert('alphabates only');
        d = false;
    }
    if(countryValidation(u_con) == false){
        alert('please select the country');
        f = false;
    }
    if(useremailValidation(u_email) == false){
        alert('invalid email address');
        e = false;
    }
    if(genderValidation(u_msex) == false){
        alert('plese select the gender');
        g = false;
    }
    if(languageValidation(u_eng) == false){
        alert('please select the language');
        h = false;
    }
    if(a == true && b == true && c == true && d == true && e == true && f == true && g == true && h == true){
        re_value = true;
    }
    return re_value;

    
}


function loginValidation(frm_){
    var u_type = frm_.user_list.value;
    var u_name = frm_.username.value;
    var u_pass = frm_.password.value;
    var a = true;
    var b = true;
    var c = true;
    var d = true;
    var returnvalue = false;

    if(u_name == "" || u_pass == ""){
        alert('there are empty field/please fill them');
        a = false;
    }
    if(countryValidation(u_type) == false){
        alert('please select the user type');
        d = false;
    }
    if(usernameValidation(u_name) == false){
        alert('alphabates only');
        b = false;
    }
    if(userpasswordValidation(u_pass) == false){
        c = false;
    }
    if(a == true &&  b == true && c == true && d == true){
        returnvalue = true;
    }
    return returnvalue;

}


function contactValidation(frm__){
    var u_name = frm__.name.value;
    var u_email = frm__.email.value;
    var u_phone = frm__.phone.value;
    var u_con = frm__.country.value;
    var u_sub = frm__.subject.value;
    var u_mess = frm__.message.value;
    var a = true;
    var b = true;
    var c = true;
    var d = true;
    var returnvalue = false;

    if(u_name == "" || u_email == "" || u_phone == "" || u_con == "" || u_sub == "" || u_mess == ""){
        alert('there are empty field/please fill them');
        a = false;
    }
    if(usernameValidation(u_name) == false){
        alert('alphabates only');
        b = false;
    }
    if(useremailValidation(u_email) == false){
        alert('invallid email address');
        c = false;
    }
    if(phoneValidation(u_phone) == false){
        alert('invalid phone number');
        d = false;
    }
    if(a == true && b == true && c == true &&  d == true){
        returnvalue = true;
    }
    return returnvalue;
}