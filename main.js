

var Componentes = {
	valor:0,
	incrementar:function(){
      Componentes.valor++;
     console.log(Componentes.valor);
	},
	reducir:function(){
		if(Componentes.valor==0)
			return;
   Componentes.valor--;
   console.log(Componentes.valor);
	}
}

