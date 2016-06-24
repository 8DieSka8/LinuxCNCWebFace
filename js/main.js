// UTF8 without BOM

/*
    GENERAL
*/

var smoothie_available = false;




// safe convert to number
function n ( value )
{
    var out = String(value);
    out = out.replace( /[^0-9.,\-\+]+/igm, "" );
    out = out.replace( /^\++/igm, "" );
    out = out.replace( /[,.]+/igm, "." );
    out = Number(out);
    return isNaN(out) || out == undefined ? 0 : out;
}




// smoothie connection test
function _con_test()
{
    if ( _con_test.busy || !parent.location.protocol.match("http") ) return;

    _con_test.busy = true;
    _con_test.xhr = _con_test.xhr ? _con_test.xhr : new XMLHttpRequest();
    _con_test.xhr.open('POST', "/command_silent", true);
    _con_test.xhr.onreadystatechange = _con_test.xhr.onreadystatechange ? 
        _con_test.xhr.onreadystatechange :
        function()
        {
            if ( this.readyState != 4 ) return;

            if ( this.status == 200 ) {
                if ( log && log.add && !smoothie_available ) log.add("[MAIN] Smoothie is here", "green");
                smoothie_available = true;
            }
            else {
                if ( log && log.add && smoothie_available ) {
                    log.add("[MAIN] Smoothie isn't available ("+this.status+":"+this.statusText+")", "red");
                }
                smoothie_available = false;
            }

            _con_test.busy = false;
        }
    _con_test.xhr.send("version\n");
}




window.addEventListener( "DOMContentLoaded", 
    function() {
        _con_test();
        _con_test.timer = setInterval(_con_test, 5000);
    }
);
