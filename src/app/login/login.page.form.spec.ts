import { FormBuilder, FormGroup} from "@angular/forms";
import { LoginPageForm } from "./login.page.form"

describe('LoginPageForm', () => {

        let loginPageForm: LoginPageForm;
        let form: FormGroup
    
    beforeEach(() => {
        loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();
    })

    it('should create login form empty', () => {

        expect(form).not.toBeNull();
        expect(form.get('username')).not.toBeNull();
        expect(form.get('username').value).toEqual("");
        expect(form.get('username')).not.toBeFalsy();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).toEqual("");
        expect(form.get('password')).not.toBeFalsy();
    })
     
    it('should have username invalid if username is not valid', () => {
        form.get('username').setValue('invalid username');

        expect(form.get('username').valid).toBeFalsy();
    })

    it('should have username invalid if username is not valid', () => {
        form.get('username').setValue('valid@gch.com');

        expect(form.get('username').valid).toBeTruthy();
    })

    it('should have a valid form', () => {
        form.get('username').setValue('valid@gch.com');
        form.get('password').setValue("anyPassword");

        expect(form.valid).toBeTruthy();
    })    
})