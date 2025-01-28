import '../styles/sidebar.styles.css';

export default function sidebar(){
    
    const sidebarContainer = document.createElement('div');
    sidebarContainer.classList.add('sidebar');



//-----------------------------------------------------GET TASKS SORTED BY DATE-------------------------------------------------

    const sortByDiv = document.createElement('div');
    sortByDiv.classList.add('sortByDiv');

    const fieldset = document.createElement('fieldset');
    fieldset.setAttribute('role', 'presentation');

    const legend = document.createElement('legend');
    legend.textContent = 'Sort By';

    const today = document.createElement('p');
    today.textContent = 'today';
    today.classList.add('today');

    fieldset.appendChild(legend);
    fieldset.appendChild(today);

    sortByDiv.appendChild(fieldset);


    sidebarContainer.appendChild(sortByDiv);
    document.body.appendChild(sidebarContainer);

}






