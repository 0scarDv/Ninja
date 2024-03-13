class Sensei extends Ninja {


    constructor(nombre, sabiduria = 10) {
        super(nombre, 200, 10, 10);
        this.sabiduria = sabiduria;
    }

    speakWisdom() {
        this.drinkSake(); 
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }

}