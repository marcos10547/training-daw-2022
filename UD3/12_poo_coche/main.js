class Coche {
    constructor(marca, modelo, consumoPor100) {
        this.total = 0;
        this.marca = marca;
        this.modelo = modelo;
        this.consumoPor100 = consumoPor100;
    }

    reposta(litros) {
        this.total += litros;
    }

    move(distancia) {
        const consumido = (distancia * this.consumoPor100) / 100;

        if (this.total >= consumido) {
            this.total -= consumido;
        } else {
            console.log(`ERROR: No hay gasolina suficiente para ${distancia} km.`);
        }
    }

    restante() {
        const kmRestantes = (this.total * 100) / this.consumoPor100;
        return kmRestantes;
    }
}

let coche1 = new Coche('Fiat', '500', 6);
coche1.reposta(50);
coche1.move(200);

let km = coche1.restante();
console.log(`Kilómetros restantes: ${km.toFixed(2)} km.`);

coche1.move(1000);