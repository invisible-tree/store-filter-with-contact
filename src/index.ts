import { ShopFilter } from "./shop-filter";
import { ContactForms } from "./contact-forms";
import './styles/style.css'

window.addEventListener('DOMContentLoaded', function () {

    /**
     * Shops filter
     */
    let shopFilter = new ShopFilter();

    /**
     * Display contact forms clicking the Contact buttons
     */
    let contactForms = new ContactForms();

}, false);