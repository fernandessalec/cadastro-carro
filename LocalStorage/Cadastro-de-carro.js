function Enviar(){

    let Marca = document.getElementById('marca').value
    let Modelo = document.getElementById('modelo').value
    let Ano = document.getElementById('ano').value
    
    const OBJcarro = {
        marca : Marca,
        modelo : Modelo,
        ano : Ano
    }
    
    localStorage.setItem('Carro', JSON.stringify(OBJcarro))
    alert('Seu carro foi cadastrado')
};

