var Person = {
    firstName : '',
    lastName : '',
    fullName : function ()
    {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

var John = Object.create(Person);

John.firstName = 'John';
John.lastName = 'Doe';

John.fullName();

var Jane = Object.create(Person);

Jane.firstName = 'Jane';
Jane.lastName = 'Doe';

Jane.fullName();