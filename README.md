## Datatables.currency-all

#English
This script is designed to solve the coin sorting problem with [datatables](datatables.net).
This plugin accepts pontuiações and coins prefixes such as $ (dollar) or R $ (real).

To use the plugin, simply reference the script and set which columns should be used, as in the example below:
```
$('#example').dataTable({
   "aoColumnDefs": [
      {"sType": "all-currency", "aTargets": [1]}
   ]
});  
```
Where ```{"sType": "all-currency", "aTargets": [1]}``` refers to the column of the currency. Recalling that the count starts from scratch ```aTargets": [0]}```

Live example in [JSFiddle](https://jsfiddle.net/2c5yuLxn/2/).

#Português
Este script é destinado a resolver o problema de ordenação de moedas com o [datatables](datatables.net).
Esse plugin aceita pontuiações e prefixos de moedas, como $ (dollar) ou R$ (real).

Para utilizar o plugin, basta referenciar o script e setar quais colunas deverão ser utilizadas, como no exemplo abaixo:

```
$('#example').dataTable({
   "aoColumnDefs": [
      {"sType": all-currency", "aTargets": [1]}
   ]
});  
```
Onde ```{"sType": "all-currency", "aTargets": [1]}``` é referente à coluna da moeda. Lembrando que a contagem se inicia do ```aTargets": [0]}```.

Exemplo online no [JSFiddle](https://jsfiddle.net/5252raq7/2/).
