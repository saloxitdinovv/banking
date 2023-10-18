export function transactions(arr, place){
    place.innerHTML = ""

    if(arr.length === 0) {
        place.innerHTML = "НЕТ ТРАНЗАКЦИЙ"
        return
    }
    
    for(let item of arr) {
        let tr = document.createElement('tr')
        let id = document.createElement('td')
        let card = document.createElement('td')
        let category = document.createElement('td')
        let total = document.createElement('td')
        let date = document.createElement('td')

        id.innerHTML = item.id
        card.innerHTML = item?.wallet
        category.innerHTML = item.category
        total.innerHTML = item.price
        date.innerHTML = item.data


        tr.append(id, card, category, total, date)
        place.append(tr)
    }
}

