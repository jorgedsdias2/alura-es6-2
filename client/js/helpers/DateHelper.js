class DateHelper {
    constructor() {
        throw new Error('DateHelper nao pode ser instanciado');
    }

    static dataParaTexto(data) {
        return  `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Data deve estar no formato aaaa-mm-dd');
        /*
            usa-se o map para subtrair o valor do mes, pois os meses no date comecam do 0 até o 11
            entao o ano 2019-12-01 para funcionar no date tem que ser convertido para 2019-11-01
            o map faz esse processo pois tem 3 indices, 0-1-2, que ao passar pelo mod 2 vao ficar 0-1-0
            sendo assim somente o valor do meio o mes vai ser subtraido
        */
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
}
