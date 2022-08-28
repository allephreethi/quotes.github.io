function search(){
    let searchbar = document.getElementById('search');
    //Add event listener
    searchbar.addEventListener('input', ()=>{
        let searchText = searchbar.value.toLowerCase().trim();
        let li = document.getElementsByClassName('quotes-li');
        let array = Array.from(li);
        console.log(searchText);
        let quotes = [];
    
        for(let i = 0; i< array.length; i++){
            quotes.push(array[i].innerText);
            console.log(quotes);
        }

        for(let i = 0; i<li.length; i++){
            li[i].style.display = 'none';
        }
    
        //Search
        for(let i = 0; i<quotes.length; i++){
            let quote = quotes[i].toLowerCase().trim();
            if(quote.includes(searchText)){
                li[i].style.display = ""
            }
        }
    })
}


search()



