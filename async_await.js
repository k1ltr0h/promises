const a = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('resultado de a()')
    }, 1000);
});

const b = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('resultado de b()')
    }, 500);
});

const c = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('resultado de c()')
    }, 2000);
});

const generarLlamadas = async () => {
    var respuestaA = await a();
    console.log('Se ejecutó a()')
    var respuestaB = await b();
    console.log('Se ejecutó b()')
    var respuestaC = await c();
    console.log('Se ejecutó c()')

    return [respuestaA, respuestaB, respuestaC];
}

generarLlamadas().then( (result) => {
    console.log('Resultado exitoso: ' + result);
}).catch( (error) => {
    console.log('Resultado erróneo: ' + error);
});

console.log('Hilo sincrónico!');
