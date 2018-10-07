"use srict";
(function(){
    const form = document.getElementById('leadForm');
    const inputFields = form.getElementsByTagName('input');

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        // validate on form submit
        validate();
    });

    // Validate on input change
    Array.prototype.map.call(inputFields, (input) => {
        input.addEventListener('change', (event)=>{
            validateInputFields(event.target);
        })
    });

    function validate(){
        Array.prototype.map.call(inputFields, (input) => {
            validateInputFields(input);
        });
        validateCheckboxes();
        validateSelectTag();
    }

    function validateSelectTag() {
        const levelSelect = document.getElementsByTagName('select')[0].value;
        const levelAlert = document.getElementById('level-alert');
        if(levelSelect === ''){
            levelAlert.classList.remove('in');
            return true;
        } else {
            levelAlert.classList.add('in');
            return false;
        }
    }

    function validateInputFields(input){
        const alert = document.getElementById(`${input.getAttribute('name')}-alert`);
        const checkName = /^[a-zA-Z0-9]/.test(input.value);
        const checkEmail = /^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/.test(input.value);
        const checkMobile = /^[0-9]{10,15}/.test(input.value);

        if(input.getAttribute('name') === 'name'){
            if(checkName){
                alert.classList.remove('in');
                return true;
            } else {
                alert.classList.add('in');
                return false;
            }
        }
        if(input.getAttribute('name') === 'email'){
            if(checkEmail){
                alert.classList.remove('in');
                return true;
            } else {
                alert.classList.add('in');
                return false;
            }
        }    
        if(input.getAttribute('name') === 'mobile'){
            if(checkMobile){
                alert.classList.remove('in');
                return true;
            } else {
                alert.classList.add('in');
                return false;
            }

        }
    }

    function validateCheckboxes(){

    }

})();
