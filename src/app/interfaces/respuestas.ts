export interface Preguntas{
    Context: string
    Formid:  string
}

export interface Form{
    nombre:string,

}
export interface Respuestas {
    contexto:string,
    id:string,
    areas:Areas[];
}
export interface Areas{
    Nombre:string;
    valor:number,
   idresp:number
}