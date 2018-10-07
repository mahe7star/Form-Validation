"use srict";
(function(){
    const form = document.getElementById('leadForm');
    const inputFields = form.getElementsByTagName('input');

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        // validate on form submit
        Array.prototype.map.call(inputFields, (input) => {
            validate(input); 
        });
    });

    // Validate on input change
    Array.prototype.map.call(inputFields, (input) => {
        input.addEventListener('change', (event)=>{
            validate(event.target);
        })
    });

    function validate(input){
        const alert = document.getElementById(`${input.getAttribute('name')}-alert`);
        const levelSelect = document.getElementsByTagName('select')[0];
        const levelAlert = document.getElementById('level-alert');
        
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

        

        if(input.getAttribute('type') === 'checkbox'){
            if(input.checked){
                alert.classList.remove('in');
                return true;
            }else {
                alert.classList.add('in');
                return false;
            }
        }
    }
})();
