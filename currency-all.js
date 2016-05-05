/*
 * datatables.currency-all
 *
 * Copyright (c) 2016 Guilherme Nascimento (brcontainer@yahoo.com.br); Renilson Meneguci (renilson.meneguci@gmail.com)
 *
 * Released under the MIT license
 *
 * Navigate to: https://github.com/DataTables/DataTables
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
   "br-currency-pre": function ( a ) {
        a = (a==="-") ? 0 : parseFloat(a.replace( /[^\d\-\,]/g, "" ).replace( /,/g, "." ));
        return parseFloat( a );
    },
    "br-currency-asc": function(a,b) {
      return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
    "br-currency-desc": function(a,b) {
      return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
});