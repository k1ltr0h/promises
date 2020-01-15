function a(callback) {
    setTimeout(() => {
        console.log( 'resultado de a()' );
        callback();
    }, 1000);
}

function b(callback) {
    setTimeout(() => {
        console.log( 'resultado de b() ');
        callback();
    }, 500);
}

function c(callback) {
    setTimeout(() => {
        console.log( 'resultado de c()' );
        callback();
    }, 2000);
}

//Llamar en secuencia
a(() => {
    console.log('Proceso a() terminado');
    b(() => {
        console.log('Proceso b() terminado');
        c(() => {
            console.log('Proceso c() terminado');
        });
    });
});
