import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

    tdText.forEach(text => {
        let td = document.createElement('td');
        td.innerHTML = text;
        tr.append(td);
    });

    table.append(tr);
}

let transactions = document.querySelector('.transactions');
transactions.append(lastTransactions, table, seeAllTransactions);