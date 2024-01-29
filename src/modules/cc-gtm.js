/**
 * CookiesConsentJS 1.1
 * oxterisk@protonmail.com
 * oxterisk@proton.me
 */

function manageGoogleTagManager({ lifecycle = '', cookie = '', status = false, path = '' }) {

    const code = cookie.hasOwnProperty( 'code' ) ? cookie.code : '';

    if ( code != '' ) {

        switch ( lifecycle ) {

            case 'first-load' :
            case 'reject' :
                delGoogleTagManagerScript();
                cleanGoogleTagManagerCookies( path );
                break;

            case 'load' :
            case 'accept' :
                if ( status ) {
                    addGoogleTagManagerScript( code );
                } else {
                    delGoogleTagManagerScript();
                    cleanGoogleTagManagerCookies( path );
                }
                break;

            case 'reject' :
                delGoogleTagManagerScript();
                cleanGoogleTagManagerCookies( path );
                break;

        }

    } else {

        console.log( `ERROR: Google Analytics code not specified` );

    }

}

function addGoogleTagManagerScript( code = '' ) {

    if ( code != '' ) {

        const scriptToCheck1 = document.getElementById( 'cc-gtm-script-1' );
        const scriptToCheck2 = document.getElementById( 'cc-gtm-script-2' );

        if ( !scriptToCheck1 ) {

            script = document.createElement( "script" );
            script.id = 'cc-gtm-script-1';
            script.innerHTML = `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${code}');`;
            document.head.insertAdjacentElement( "afterbegin", script );

        }

        if ( !scriptToCheck2 ) {

            noscript = document.createElement( "noscript" );
            noscript.id = 'cc-gtm-script-2';
            noscript.innerHTML = `
                <iframe src="https://www.googletagmanager.com/ns.html?id=${code}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
            document.body.insertAdjacentElement( "afterbegin", noscript );

        }

    }

}

function delGoogleTagManagerScript() {

    const scriptToCheck1 = document.getElementById( 'cc-gtm-script-1' );
    const scriptToCheck2 = document.getElementById( 'cc-gtm-script-2' );
    const scriptToCheck3 = document.querySelector( 'script[src^="https://www.googletagmanager.com/gtm.js"]' );
    const scriptToCheck4 = document.querySelector( 'script[src^="https://www.google-analytics.com/analytics.js"]' );

    if ( scriptToCheck1 ) { scriptToCheck1.remove(); }
    if ( scriptToCheck2 ) { scriptToCheck2.remove(); }
    if ( scriptToCheck3 ) { scriptToCheck3.remove(); }
    if ( scriptToCheck4 ) { scriptToCheck4.remove(); }

}

function cleanGoogleTagManagerCookies( path ) {

    const keysToRemove = (['_ga', '_gid', '__utm']);

    let cookies = document.cookie;
    let ca = cookies.split( ";" );
    let hostname_parts = window.location.hostname.split(".");

    for( let i = 0; i < ca.length; i++ ) {

        let key = ca[i].split( "=" );

        for( let j = 0; j < keysToRemove.length; j++ ) {

            if ( key.toString().trim().startsWith( keysToRemove[j] ) )
            document.cookie = `${key[0]}="";domain=${window.location.hostname};expires=Thu, 01 Jan 1970 00:00:00 UTC;${path}`;

            if ( hostname_parts[0] == 'www' ) {
                let domain = `.${hostname_parts[1]}.${hostname_parts[2]}`;
                document.cookie = `${key[0]}="";domain=${domain};expires=Thu, 01 Jan 1970 00:00:00 UTC;${path}`;
            }

        }

    }

}
