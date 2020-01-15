const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('resultado de a()');
        reject('algo paso aca!');
    }, 1000);
});

//const promiseA = Promise.resolve('Resuelta correctamente');

console.log('Hilo sincrónico');

promiseA.then(
    function(resultado) {
        console.log('Resultado promesaA: ' + resultado);
    }
).catch(
    function(error) {
        console.log('Error en promesaA: ' + error);
    }
).finally(
    function() {
        console.log('promesaA termino!');
    }
);

console.log('Sigo en el hilo sincrónico');