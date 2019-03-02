/**
 * Open/close forms  
 * --
 * by Ruben Parra - intree.es
 */

export class ContactForms {

    elements = {
        buttons: {
            buttonContact: 'contact-button',
        },
        forms: {
            formContainerId: 'intree-forms',
            formContact: 'contact-form',
            closeButton: 'close'
        }
    }

    constructor() {
        this.openModal(this.elements.buttons.buttonContact, this.elements.forms.formContact);
    }

    


    
    /**
     * Detect click over contact button and open modal window
     * 
     * @param _buttons 
     * @param _form 
     */
    openModal(_buttons:any, _form:any) {
        let $this = this;
        let buttons: any = document.getElementsByClassName(_buttons);
        for (let button of buttons) {
            if (button != null) {
                button.addEventListener('click', function() {
                    $this.showHideForm(_form, 'block')
                    $this.detectClose(_form);
                });
            }
        }
    }


    /**
     * Detect click in button or outside the form to close
     * 
     * @param _form 
     */
    detectClose(_form:any) {
        let $this = this;
        let closeButton: any = document.getElementsByClassName(this.elements.forms.closeButton);
        this.clickOutside(_form);
        for (var i = 0; i < closeButton.length; i++) {
            closeButton[i].addEventListener('click', function() {
                $this.showHideForm(_form, 'none')
            });
        }
    }


    /**
     * Detect click outsite container and close window
     * 
     * @param _form 
     */
    clickOutside(_form:any) {
        let $this = this;
        let container = {
            element: document.getElementById(this.elements.forms.formContainerId),
            id: this.elements.forms.formContainerId
        };

        container.element.addEventListener('click', function(e){
            let elementClicked = e.target as HTMLInputElement;

            if (elementClicked.id == container.id && $this.isOpen(_form)){
                $this.showHideForm(_form, 'none');
            }
        });
        
    }


    /**
     * Show or Hide modal window
     * 
     * @param _form 
     * @param _action 
     */
    showHideForm( _form:any, _action:any) {
        document.getElementById(this.elements.forms.formContainerId).style.display = _action;
        document.getElementById(_form).style.display = _action;
    }


    /**
     * Boolean. Form is open? 
     * 
     * @param _form 
     */
    isOpen(_form:any){
        return document.getElementById(_form).style.display == 'block' ? true : false;
    }

}