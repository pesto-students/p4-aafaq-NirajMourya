1. When a user enters an URL in the browser, how does the browser fetch the desired result? Explain this with the below in mind and demonstrate this by drawing a diagram for the same.
a)	What is the main functionality of the browser?
b)	High Level Components of a browser.
c)	Rendering engine and its use.
d)	Parsers (HTML, CSS, etc)
e)	Script Processors
f)	Tree construction
g)	Order of script processing
h)	Layout and Painting

Answer:

What I browser and what it does?

    The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the resource is specified by the user using a URI (Uniform Resource Identifier).

Fetching the resource and Domain Name Resolution
    
    When you visit a website on the Internet, all your browser does is connect to a remote computer (webserver) and request the resources to paint the page.
    
    To render a webpage, the first thing your browser needs to do is find the remote server that hosts the website. To do this, it tries to find the IP address of the URL you entered in the address bar. This IP address can uniquely identify the web server, and once the browser has this address, it can make requests to the server to get data.

    To find the IP address the browser performs DNS resolution, which can only be done in two ways. It can either investigate your browser’s cache memory which could hold the IP address of a URL if you have visited the site in the past. If that is not the case, then it requests your ISP, Google or Cloudflare to find the IP address for a particular website using their DNS servers.

    Once your browser has the IP address of the website you are looking for, the networking layer of your browser gets to work. It tries to create a connection between your device and the server so that data can transfer between the two devices. To create this connection, the networking layer uses sockets, which is a way of connecting two devices on a network using their IP address and a designated port on each device.

    Now that the networking layer has connected the two devices and data packets can transmit between them, the network layer starts performing the next most important task in any communication on the Internet, encryption.

    To encrypt the data, the networking layer performs a TLS handshake between the two communicating devices. Once the handshake is complete, all the data travelling between the devices is encrypted and cannot be read by any third party.

    After setting up a communication channel between the two devices, the networking layer sends a request to the server for the resources. In case of a webpage, this is an HTTPS/HTTP request, which asks the webserver to send an HTML file that contains all the information a browser needs to render a webpage. Once the server receives the request, it sends an HTML document to the browser in the form of ones and zeros over the communication channel, which has been established by the networking layer.

    Finally, the browser has the resources it needs to render a webpage, but they are in the form of bytes and need to be converted into a format, which looks like a webpage. To do this, the browser uses its rendering engine.

The browser's main components are:

    1.	The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
    2.	The browser engine: marshals actions between the UI and the rendering engine.
    3.	The rendering engine: responsible for displaying requested content. For example, if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
    4.	Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
    5.	UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
    6.	JavaScript interpreter: Used to parse and execute JavaScript code.
    7.	Data storage: This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
   ![alt text](https://github.com/pesto-students/p4-aafaq-NirajMourya/blob/a3e1a0ac9f64bb4a61be0f396a3bf01dd4f5fb72/Week-1/Excercise%201.1/ComponentsofBrowser.png) 

Rendering Engine

    The main job of the rendering engine is to translate the bits of data into a form that can be used by the browser to create a webpage. 

    To understand how the rendering engine works, it is essential to understand all the parts that make up a website.
        •	HTML (Hyper Text Markup Language) is used to define the structure of a webpage.
        •	CSS (Cascading Style Sheets) is used to direct the browser on how each element on the website is supposed to look.
        •	JavaScript is used to add interactivity to the site and is used to handle user inputs, clicks or any processing the website may need.

    The rendering engine uses parsers to convert bits of data into meaningful information which can be used by the browser to render a webpage. The rendering engine has two different parsers, one for HTML and one for CSS.

HTML parsing

    The HTML parser takes bits of data as input and creates a logical representation of the HTML document in the memory of the device.This logical representation of data is known as the DOM structure and represents the HTML data in a hierarchical manner.
    
    To create the DOM structure, the HTML parser performs several steps that can be described as follows
 ![alt text](https://github.com/pesto-students/p4-aafaq-NirajMourya/blob/a3e1a0ac9f64bb4a61be0f396a3bf01dd4f5fb72/Week-1/Excercise%201.1/HTMLParsing.jpg)
     
        •	Characterisation extracts the characters from the bytes of information that the HTML parser gets from the network layer.
        •	Tokenization finds the tokens in a stream of characters that help the browser in determining the structure of the data.
        •	Node creation after identifying the tokens and the information contained in them, the browser creates memory nodes to hold this data.
        •	DOM creation the parser hierarchically links the memory nodes to create a DOM representation of received bytes of data.
    
    The HTML document that the browser receives contain links to CSS files. These links are processed by the networking layer and sent to the CSS parser. This parser creates a CSSOM (CSS Object Model) output, which defines how each element in the DOM is supposed to be styled.

The order of processing scripts and style sheets

    Scripts 
    
        The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a <script> tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. This was the model for many years and is also specified in HTML4 and 5 specifications. Authors can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.
    
    Speculative parsing 
        Both Web Kit and Firefox do this optimization. While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. In this way, resources can be loaded on parallel connections and overall speed is improved. Note: the speculative parser only parses references to external resources like external scripts, style sheets and images: it does not modify the DOM tree - that is left to the main parser.
    
    Style sheets 
        Style sheets on the other hand have a different model. Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing. There is an issue, though, of scripts asking for style information during the document parsing stage. If the style is not loaded and parsed yet, the script will get wrong answers and apparently this caused lots of problems. It seems to be an edge case but is quite common. Firefox blocks all scripts when there is a style sheet that is still being loaded and parsed. WebKit blocks scripts only when they try to access certain style properties that may be affected by unloaded style sheets.

Creating the rendering tree and layout for the webpage

    Once the DOM has been created, and the CSS parser has completed parsing the CSS file, the rendering engine uses a style engine to join both CSSOM and DOM. This creates a rendering tree which contains information about the structure and style of the webpage, which is to be rendered. The rendering tree only consists of visible nodes and does not have any nodes that are invisible to the user on the screen.

   ![alt text](https://github.com/pesto-students/p4-aafaq-NirajMourya/blob/a3e1a0ac9f64bb4a61be0f396a3bf01dd4f5fb72/Week-1/Excercise%201.1/RenderingTreeCreation.jpg)
   
    After creating the rendering tree, the rendering engine starts the layout process. This process takes into consideration the resolution of the screen and how each element should be placed on the device. It also calculates the size of each element that is going to be rendered on the screen and its relative position to other elements.
    Now that the rendering engine has all the information about the webpage in a format that our system can understand, we can begin to render the page on the browser.

Painting the canvas and compositing the webpage on the screen

    Once the rendering engine has completed the layout process, it needs to paint each pixel on the screen according to the layout, which was created using the rendering tree. This process is known as rasterization, which is the process of painting the screen. Most browsers use the CPU to perform this task, but as it is a process that involves repetitive processing, it can be offloaded to the GPU for getting better results.

    The painting operation occurs in a layered format, and the rendering engine creates multiple layers of elements to create the webpage. This layered structure helps the browser to make changes faster when the user interacts with the webpage.
    
    Once all the layers have been created, the rendering engine sends this information to the user interface, displaying the webpage on the screen. This process is known as compositing the webpage and is the last step performed by the rendering engine.
    
   ![alt text](https://github.com/pesto-students/p4-aafaq-NirajMourya/blob/a3e1a0ac9f64bb4a61be0f396a3bf01dd4f5fb72/Week-1/Excercise%201.1/Painting.jpg)
    
    This process of creating the webpage from bits of data is known as the critical rendering path and is the main determinant for the performance of any webpage you visit on the Internet.

