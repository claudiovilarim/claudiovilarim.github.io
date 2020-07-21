// seleciona os carros pelos botões.
(function(){
    // const buttons = document.querySelectorAll('.btn')
    // const storeItems = document.querySelectorAll('.store-item')

    // console.log(buttons)
    
    // buttons.forEach(function(button){

    //     button.addEventListener('click', function(e){
    //         console.log('botão pressionado')

    //         //prevent the default link jump to top of page
    //         e.preventDefault()
    //         //grab the filter button that was clicked
    //         const filter = e.target.dataset.filter

    //         if (filter === 'todos'){
    //             //show all items
    //             console.log('Mostrar todos');
    //             storeItems.forEach(function(item){
    //                 item.style.display = 'block'
    //             })
    //         } else if (filter === 'esportivo'){
    //             storeItems.forEach(function(item){
    //                 if (item.classList.contains('esportivo')){
    //                     item.style.display = 'block'
    //                 } else {
    //                     item.style.display = 'none'
    //                 }
    //             })
    //         } else if (filter === 'antigo'){
    //             storeItems.forEach(function(item){
    //                 if (item.classList.contains('antigo')){
    //                     item.style.display = 'block'
    //                 } else {
    //                     item.style.display = 'none'
    //                 }
    //             })
    //         } else if (filter === 'caminhonete'){
    //             storeItems.forEach(function(item){
    //                 if (item.classList.contains('caminhonete')){
    //                     item.style.display = 'block'
    //                 } else {
    //                     item.style.display = 'none'
    //                 }
    //             })
    //         } 
    //     })
    // })

    // código refatorado para evitar a repetição de código.
    const buttons = document.querySelectorAll('.btn')
    const storeItems = document.querySelectorAll('.store-item')

    buttons.forEach((button)=> {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter
            
            storeItems.forEach((item)=> {
                if (filter === 'todos'){
                    item.style.display = 'block'
                } else {
                    if (item.classList.contains(filter)){
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            })
        })
    })

})();

// Caixa de Pesquisa
(function(){

    const searchBox = document.querySelector('#CaixaDePesquisa');
    const storeItems = document.querySelectorAll('.store-item');

    // Pesquisa os carros na Caixa de Busca
    searchBox.addEventListener('keyup', (e) => {
    
        // A variável searchFilter recebe o valor digitado na caixa de busca 
        const searchFilter = e.target.value.toLowerCase().trim()

        // exibe os itens que têm as palavras correspondentes ao digitado na caixa de busca.
        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })

})();



