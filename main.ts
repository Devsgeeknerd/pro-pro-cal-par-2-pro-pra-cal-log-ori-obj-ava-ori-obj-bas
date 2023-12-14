interface IOperacaoMatematica {
  validar(): boolean;
  calcular(): number;
}

abstract class OperacaoMatematica implements IOperacaoMatematica {
  private _numero1: number;
  private _numero2: number;

  constructor(numero1: number, numero2: number) {
    this._numero1 = numero1;
    this._numero2 = numero2;
  }

  public validar(): boolean {
    return this._numero1 >= 0 && this._numero2 >= 0;
  }

  public calcular(): number {
    if (this.validar()) {
      return this.realizarCalculo();
    } else {
      return -1;
    }
  }

  protected abstract realizarCalculo(): number;
}
