/*


*/
function mostrar() {

    int primerNumero;
    int segundoNumero;
    int tercerNumero;
    int medio;
    
    
        
        printf("ingrese el numero ");
        scanf("%d",&primerNumero);
        
        printf("el segundo numero ");
        scanf("%d",&segundoNumero);
        
        printf("el tercer numero ");
        scanf("%d",&tercerNumero);
    
    if (segundoNumero == primerNumero || tercerNumero == segundoNumero || primerNumero == tercerNumero) {
        printf("No existe numero del medio\n");
    } else {

        if (primerNumero < segundoNumero && primerNumero > tercerNumero || primerNumero > segundoNumero && primerNumero < tercerNumero) {
            medio = primerNumero;
        } else {

            if (segundoNumero < primerNumero && segundoNumero > tercerNumero || segundoNumero > primerNumero && segundoNumero < tercerNumero) {
                medio = segundoNumero;
            } else {

                if (tercerNumero < segundoNumero && tercerNumero > primerNumero || tercerNumero > segundoNumero && tercerNumero < primerNumero) {
                    medio = tercerNumero;

                }
            }
        }
        
        printf(" %d %d %d el numero del medio %d \n",primerNumero, segundoNumero, tercerNumero, medio);
    }    
    
    return 0;

}
/*
Augusto Delgado
Div B 
*/