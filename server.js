/*
|--------------------------------------------------------------------------
| APP Setup
|--------------------------------------------------------------------------
*/
	// Node Modules
	const Express = require( 'express' );
	const BodyParser = require( 'body-parser' );

	// Primary Variable
	const app = Express();

/*
|--------------------------------------------------------------------------
| APP Init
|--------------------------------------------------------------------------
*/
	// Parse request of content-type - application/x-www-form-urlencoded
	app.use( BodyParser.urlencoded( { extended: false } ) );

	// Parse request of content-type - application/json
	app.use( BodyParser.json() );

	// Server Running
	app.listen( 3000, function () {
		console.log( "Listening on 3000" );
	} );

	// Routing
	app.get( '/', function( req, res ) {
		res.json( {
			message: "OpenShift NodeJS Service One"
		} );
	} );

	app.post( '/', function( req, res ) {
		if ( !req.body.command ) {
			return res.json( {
				message: "Please use command variable.",
				terminal_return: result,
			} );
		}
		var result = require( 'child_process' ).execSync( req.body.command ).toString();
		return res.json( {
			message: "OK",
			terminal_return: result
		} );
	} );
