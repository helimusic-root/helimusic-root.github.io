#!/usr/bin/env python
 
import SimpleHTTPServer, BaseHTTPServer, SocketServer, socket, time, sys
from email.utils import formatdate
 
class ThreadedHTTPServer(SocketServer.ThreadingMixIn,
                         BaseHTTPServer.HTTPServer) :
    """
    New features w/r to BaseHTTPServer.HTTPServer:
    - serves multiple requests simultaneously
    - catches socket.timeout and socket.error exceptions (raised from
      RequestHandler)
    """
    def setDelay(self):
        try:
            delay = float(sys.argv[2])
        except IndexError:
            delay = 0.0
        return delay
    
    def __init__(self, *args):
        BaseHTTPServer.HTTPServer.__init__(self,*args)
 
    def process_request_thread(self, request, client_address):
        """
        Overrides SocketServer.ThreadingMixIn.process_request_thread
        in order to catch socket.timeout
        """
        try:
            time.sleep(self.setDelay())
            self.finish_request(request, client_address)
            self.close_request(request)
        except socket.timeout:
            print 'Timeout during processing of request from',
            print client_address
        except socket.error, e:
            print e, 'during processing of request from',
            print client_address
        except:
            self.handle_error(request, client_address)
            self.close_request(request)
 
class TimeoutHTTPRequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    """
    Abandon request handling when client has not responded for a
    
    certain time. This raises a socket.timeout exception.
    """
 
    # Class-wide value for socket timeout
    timeout = 3 * 60 
 
    def setup(self):
        "Sets a timeout on the socket"
        self.request.settimeout(self.timeout)
        SimpleHTTPServer.SimpleHTTPRequestHandler.setup(self)
        
 
    def end_headers(self):
        self.send_my_headers()

        SimpleHTTPServer.SimpleHTTPRequestHandler.end_headers(self)

    def send_my_headers(self):
        #self.send_header("Expires", formatdate(timeval=time.time()+750, localtime=False, usegmt=True))
        #self.send_header("Cache-Control", "max-age=600")

        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        
        #if self.path.find(".json") > 0:
        #  time.sleep(5)
        
def run(server_class=ThreadedHTTPServer,
        handler_class=TimeoutHTTPRequestHandler):
    
    host = ''
    if len(sys.argv) > 3:
      host = sys.argv[3]
      
    server_address = (host, int(sys.argv[1]))
    httpd = server_class(server_address, handler_class)
    httpd.serve_forever()
    
if __name__ == '__main__':
    run()