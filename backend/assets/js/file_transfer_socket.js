// NOTE: The contents of this file will only be executed if
// you uncomment its entry in "assets/js/app.js".

// Bring in Phoenix channels client library:
import {Socket} from "phoenix"

// And connect to the path in "lib/backend_web/endpoint.ex". We pass the
// token for authentication.
//
// Read the [`Using Token Authentication`](https://phoenix.hexdocs.pm/channels.html#using-token-authentication)
// section to see how the token should be used.
let socket = new Socket("/socket")
socket.connect()


export default socket
