/**
 * Store filter by state. 
 * --
 * by Ruben Parra - intree.es
 */

export class ShopFilter {

    properties = {
        selectorID: 'search-by-states',
        singleShopClass: 'intree-shop',
        allStatesStr: 'all',
        notConsider: 'none'
    };
    elements = {
        select: document.getElementById(this.properties.selectorID),
    }

    constructor() {
        this.cleanUnusedStatesFromSelectOptions();
        this.changeSelector();
    }





    /**
     * Read used states and delete unused in selector.
     */
    cleanUnusedStatesFromSelectOptions() {
        let usedStates:any = this.listOfUsedStatesArr();
        let select:any = this.elements.select;

        for (let i=0; i < select.length; i++) {
            let selectValue = select.options[i].value;

            if ( selectValue != this.properties.allStatesStr && selectValue != this.properties.notConsider ) { 
                if (!usedStates.has(selectValue)) {
                    select.options[i].style.display = 'none';
                }
            }
        }
    }

    /**
     * Create a set (not repeated items) of used state names
     */
    listOfUsedStatesArr() {
        let shops:any = this.getAllShops();
        let classArr = new Array();

        for (let shop of shops) {
            classArr.push(this.stateNameFromElementClasses(shop.className));
        }
        
        return new Set(classArr);
    }

    /**
     * Get state class name from elements (get the last class name)
     */
    stateNameFromElementClasses(_classNames:string) {
        let splitClassNames:any = _classNames.split(' ');
        return splitClassNames[splitClassNames.length-1];
    }




    /**
     * Detect changes in state select. Filter results by selected option.
     */
    changeSelector() {
        const $this = this;
        let select:any = this.elements.select;
        
        if (select != null) {
            select.addEventListener('change', function() {
                let selectedState = this.value;
                $this.filterResults(selectedState);
            });
        }
    }

    /**
     * Get all shops elements
     */
    getAllShops() {
        return document.getElementsByClassName(this.properties.singleShopClass);
    }

    /**
     * Iterates all shop elements and show/hide results
     * @param _state
     */
    filterResults(_state: string) {
        let stateClassName = _state;
        let shops:any = this.getAllShops();

        for (let shop of shops) {
            this.showResults(shop, stateClassName);
        }
    }

    /**
     * Show/hide shops if it matches the state class
     * @param _shop
     * @param _state
     */
    showResults(_shop:any, _state:any) {
        let shop = _shop;
        let state = _state;

        // if selected "all states"
        if (state != this.properties.allStatesStr) {
            if (shop.classList.contains(_state)) {
                shop.classList.remove('hide');
            } else {
                shop.classList.add('hide');
            }
        } else {
            shop.classList.remove('hide');
        }
    }
}

