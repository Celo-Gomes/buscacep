let cep = document.querySelector("#cep")
let logr = document.querySelector('#logr')
let bair = document.querySelector("#bair")
let city = document.querySelector("#city")
let uf = document.querySelector("#uf")
  
function addressSearch() {
    
    if(cep.value != ''){
        let cepApi = `https://viacep.com.br/ws/${cep.value}/json/`

        axios.get(cepApi)
            .then(response=>{
                const data = response.data

                console.log(data)
                console.log(cepApi)

                logr.value = `${data.logradouro}`
                bair.value = `${data.bairro}`
                city.value = `${data.localidade}`
                uf.value = `${data.uf}`
            })
            .catch(error =>{
                console.log(error)
                alert("CEP informado não encontrado!")
                location.reload(true)
            })
    }
    else{
        alert("Informe um CEP válido!")
    }     
}

function cepSearch(){
   
    if(logr.value == '' || city.value == '' || uf.value == ''){
        alert('Logradouro, Cidade ou Estado não podem ficar sem preencher! ')
    }
    else{
        
        let addressApi = `https://viacep.com.br/ws/${uf.value}/${city.value}/${logr.value}/json`

        axios.get(addressApi)
            .then(response=>{
                const data = response.data

                console.log(data)
                console.log(addressApi)
                
                cep.value = `${data[0].cep}`
                bair.value = `${data[0].bairro}`

            })
            .catch(error =>{
                console.log(error)
                alert('Endereço informado não localizado!')
                location.reload(true)
            })
    }
}

function enterPress(event){
    if(event.key === 'Enter'){
        addressSearch()
    }
}

cep.onfocus = ()=>{
    cep.value = ''
    logr.value = ''
    bair.value = ''
    city.value = ''
    uf.value = ''
}

logr.onfocus = ()=>{
    cep.value = ''
}
