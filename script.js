function checkLogin(x)
{
    if (x.password.value !="sam123")
    {
        alert("invalid Login");
        return false;
    }
    else
    {
        location= "form.html";
    }
};

