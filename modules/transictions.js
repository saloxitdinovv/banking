export function transactions(arr, place){
    let lastTransactions = document.createElement('h1')
    lastTransactions.innerHTML = 'Последние транзакции'
    
    let table = document.createElement('table');
    
    let th = document.createElement('tr');
    let thText = ['ID', 'Отправлено с кошелька', 'Категория', 'Сумма транзации', 'Когда'];


    thText.forEach(text => {
        let header = document.createElement('th');
        header.innerHTML = text;
        th.append(header);
    });
    if(arr.length === 0){
        let hs1 = document.createElement('h2')
        hs1.innerHTML = 'У вас нет транзакций :/'
        let btnsik = document.createElement('div')
        btnsik.innerHTML = '+'
        table.style.display = 'block'
        btnsik.onclick = () => {
            location.assign('/pages/addTrans/')
        }
        btnsik.classList.add('btnsik')
        table.prepend(hs1, btnsik) 
    } else {


        for (let item of arr) {
            let tr = document.createElement('tr')   
            let aydi = document.createElement('td')
            let wallet = document.createElement('td')
            let category = document.createElement('td')
            let summa = document.createElement('td')
            let time = document.createElement('td')

            aydi.innerHTML = item.id
            wallet.innerHTML = item.card
            category.innerHTML = item.category
            summa.innerHTML = item.price
            time.innerHTML = item.time
    
            tr.append(aydi, wallet,category, summa, time)
            table.append(th, tr)
        }
        
    }
    
    place.prepend(lastTransactions, table);
}

