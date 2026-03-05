const defaultQuestions = [
{"id":1,"topic":"Hardware","difficulty":"Mixed","text":"Hardware refers to:","options":{"A":"Computer programs","B":"Physical parts of a computer","C":"Internet services","D":"Files"},"answer":"B"},
{"id":2,"topic":"Hardware","difficulty":"Mixed","text":"Which of the following is hardware?","options":{"A":"Mouse","B":"Windows","C":"Chrome","D":"Excel"},"answer":"A"},
{"id":3,"topic":"Hardware","difficulty":"Mixed","text":"Hardware parts can be:","options":{"A":"Seen and touched","B":"Only seen","C":"Only touched","D":"Invisible"},"answer":"A"},
{"id":4,"topic":"Hardware","difficulty":"Mixed","text":"Which of the following is NOT hardware?","options":{"A":"Keyboard","B":"Monitor","C":"Software program","D":"Printer"},"answer":"C"},
{"id":5,"topic":"Hardware","difficulty":"Mixed","text":"Hardware components are connected using:","options":{"A":"Internet","B":"Wires and circuits","C":"Screens","D":"Software"},"answer":"B"},
{"id":6,"topic":"Hardware","difficulty":"Mixed","text":"Which is a computer hardware device?","options":{"A":"Speaker","B":"Browser","C":"App","D":"Game"},"answer":"A"},
{"id":7,"topic":"Hardware","difficulty":"Mixed","text":"Hardware mainly helps computers to:","options":{"A":"Work physically","B":"Write programs","C":"Connect internet only","D":"Play music only"},"answer":"A"},
{"id":8,"topic":"Hardware","difficulty":"Mixed","text":"Which of the following is NOT a physical device?","options":{"A":"Software","B":"Scanner","C":"Monitor","D":"Printer"},"answer":"A"},
{"id":9,"topic":"Output Devices","difficulty":"Mixed","text":"Which device is used to see computer output visually?","options":{"A":"Monitor","B":"Keyboard","C":"Scanner","D":"CPU"},"answer":"A"},
{"id":10,"topic":"Output Devices","difficulty":"Mixed","text":"Which device produces sound from the computer?","options":{"A":"Speaker","B":"Scanner","C":"Mouse","D":"RAM"},"answer":"A"},

{"id":11,"topic":"Input Devices","difficulty":"Mixed","text":"An input device is used to:","options":{"A":"Receive information from computer","B":"Send data to computer","C":"Store information","D":"Print documents"},"answer":"B"},
{"id":12,"topic":"Input Devices","difficulty":"Mixed","text":"Which is an input device?","options":{"A":"Keyboard","B":"Printer","C":"Speaker","D":"Monitor"},"answer":"A"},
{"id":13,"topic":"Input Devices","difficulty":"Mixed","text":"A keyboard is mainly used for:","options":{"A":"Typing data","B":"Playing music","C":"Printing pictures","D":"Storing files"},"answer":"A"},
{"id":14,"topic":"Input Devices","difficulty":"Mixed","text":"Which device controls the pointer on the screen?","options":{"A":"Mouse","B":"Printer","C":"Scanner","D":"Speaker"},"answer":"A"},
{"id":15,"topic":"Input Devices","difficulty":"Mixed","text":"The arrow on the screen controlled by the mouse is called:","options":{"A":"Pointer","B":"Cursor screen","C":"Link","D":"Icon"},"answer":"A"},
{"id":16,"topic":"Input Devices","difficulty":"Mixed","text":"A microphone is used to:","options":{"A":"Record voice","B":"Print text","C":"Store data","D":"Scan photos"},"answer":"A"},
{"id":17,"topic":"Input Devices","difficulty":"Mixed","text":"A webcam provides:","options":{"A":"Text input","B":"Video input","C":"Sound output","D":"Paper output"},"answer":"B"},
{"id":18,"topic":"Input Devices","difficulty":"Mixed","text":"Which device converts paper documents into digital format?","options":{"A":"Scanner","B":"Monitor","C":"Speaker","D":"Keyboard"},"answer":"A"},
{"id":19,"topic":"Input Devices","difficulty":"Mixed","text":"A touchscreen accepts input using:","options":{"A":"Finger or stylus","B":"Keyboard","C":"Mouse","D":"Scanner"},"answer":"A"},
{"id":20,"topic":"Input Devices","difficulty":"Mixed","text":"Which input device is mainly used for gaming?","options":{"A":"Joystick","B":"Printer","C":"Monitor","D":"Speaker"},"answer":"A"},
{"id":21,"topic":"Input Devices","difficulty":"Mixed","text":"Biometric sensors recognize:","options":{"A":"Images","B":"Voice","C":"Fingerprints or faces","D":"Documents"},"answer":"C"},
{"id":22,"topic":"Input Devices","difficulty":"Mixed","text":"Which device sends commands to the computer?","options":{"A":"Input device","B":"Output device","C":"Storage device","D":"Power supply"},"answer":"A"},
{"id":23,"topic":"Input Devices","difficulty":"Mixed","text":"Keyboard and mouse are examples of:","options":{"A":"Input devices","B":"Output devices","C":"Storage devices","D":"Software"},"answer":"A"},
{"id":24,"topic":"Input Devices","difficulty":"Mixed","text":"Which input device can record audio?","options":{"A":"Microphone","B":"Speaker","C":"Monitor","D":"Printer"},"answer":"A"},
{"id":25,"topic":"Input Devices","difficulty":"Mixed","text":"Which device helps users draw pictures on the computer screen?","options":{"A":"Mouse","B":"Printer","C":"Monitor","D":"Speaker"},"answer":"A"},

{"id":26,"topic":"Output Devices","difficulty":"Mixed","text":"An output device:","options":{"A":"Sends data to computer","B":"Displays results to users","C":"Stores files","D":"Types text"},"answer":"B"},
{"id":27,"topic":"Output Devices","difficulty":"Mixed","text":"Which is an output device?","options":{"A":"Monitor","B":"Keyboard","C":"Scanner","D":"Mouse"},"answer":"A"},
{"id":28,"topic":"Output Devices","difficulty":"Mixed","text":"A printer prints information:","options":{"A":"On paper","B":"On screen","C":"In memory","D":"In CPU"},"answer":"A"},
{"id":29,"topic":"Output Devices","difficulty":"Mixed","text":"Which device shows images and videos from the computer?","options":{"A":"Monitor","B":"Mouse","C":"Scanner","D":"RAM"},"answer":"A"},
{"id":30,"topic":"Output Devices","difficulty":"Mixed","text":"Speakers produce:","options":{"A":"Images","B":"Sound","C":"Text","D":"Video"},"answer":"B"},
{"id":31,"topic":"Output Devices","difficulty":"Mixed","text":"A projector displays images on:","options":{"A":"Paper","B":"Screen or wall","C":"Hard disk","D":"Monitor"},"answer":"B"},
{"id":32,"topic":"Output Devices","difficulty":"Mixed","text":"Headphones are used for:","options":{"A":"Private listening","B":"Printing","C":"Typing","D":"Scanning"},"answer":"A"},
{"id":33,"topic":"Output Devices","difficulty":"Mixed","text":"Output devices provide:","options":{"A":"Input to computer","B":"Information from computer","C":"Storage space","D":"Electricity"},"answer":"B"},
{"id":34,"topic":"Output Devices","difficulty":"Mixed","text":"Which device produces audio output?","options":{"A":"Speaker","B":"Keyboard","C":"Scanner","D":"Mouse"},"answer":"A"},
{"id":35,"topic":"Output Devices","difficulty":"Mixed","text":"Which device shows visual output?","options":{"A":"Monitor","B":"Printer","C":"Speaker","D":"Joystick"},"answer":"A"},

{"id":36,"topic":"CPU/System Unit","difficulty":"Mixed","text":"CPU stands for:","options":{"A":"Central Program Unit","B":"Central Processing Unit","C":"Computer Program Unit","D":"Central Print Unit"},"answer":"B"},
{"id":37,"topic":"CPU/System Unit","difficulty":"Mixed","text":"The CPU is often called the:","options":{"A":"Heart of computer","B":"Brain of computer","C":"Body of computer","D":"Screen of computer"},"answer":"B"},
{"id":38,"topic":"CPU/System Unit","difficulty":"Mixed","text":"The CPU is located inside the:","options":{"A":"Monitor","B":"System unit","C":"Printer","D":"Keyboard"},"answer":"B"},
{"id":39,"topic":"CPU/System Unit","difficulty":"Mixed","text":"The system unit contains:","options":{"A":"CPU and motherboard","B":"Printer","C":"Scanner","D":"Monitor"},"answer":"A"},
{"id":40,"topic":"CPU/System Unit","difficulty":"Mixed","text":"The motherboard connects:","options":{"A":"Software","B":"Hardware parts","C":"Internet","D":"Printer"},"answer":"B"},
{"id":41,"topic":"CPU/System Unit","difficulty":"Mixed","text":"RAM stands for:","options":{"A":"Random Access Memory","B":"Rapid Access Memory","C":"Read Access Memory","D":"Random Action Memory"},"answer":"A"},
{"id":42,"topic":"CPU/System Unit","difficulty":"Mixed","text":"RAM stores data:","options":{"A":"Permanently","B":"Temporarily","C":"On paper","D":"In internet"},"answer":"B"},
{"id":43,"topic":"Storage","difficulty":"Mixed","text":"Hard disk stores data:","options":{"A":"Temporarily","B":"Permanently","C":"For seconds only","D":"On screen"},"answer":"B"},
{"id":44,"topic":"CPU/System Unit","difficulty":"Mixed","text":"PSU stands for:","options":{"A":"Power Supply Unit","B":"Processing Storage Unit","C":"Print Supply Unit","D":"Power System Unit"},"answer":"A"},
{"id":45,"topic":"CPU/System Unit","difficulty":"Mixed","text":"Cooling fan prevents:","options":{"A":"Virus","B":"Overheating","C":"Slow typing","D":"Internet problems"},"answer":"B"},

{"id":46,"topic":"Storage","difficulty":"Mixed","text":"Storage devices save:","options":{"A":"Data and programs","B":"Electricity","C":"Screens","D":"Speakers"},"answer":"A"},
{"id":47,"topic":"Storage","difficulty":"Mixed","text":"Which is a storage device?","options":{"A":"Pen drive","B":"Speaker","C":"Monitor","D":"Scanner"},"answer":"A"},
{"id":48,"topic":"Storage","difficulty":"Mixed","text":"Which device stores files permanently?","options":{"A":"Hard disk","B":"RAM","C":"CPU","D":"Monitor"},"answer":"A"},
{"id":49,"topic":"Storage","difficulty":"Mixed","text":"Primary storage includes:","options":{"A":"RAM","B":"Hard disk","C":"CD","D":"Pen drive"},"answer":"A"},
{"id":50,"topic":"Storage","difficulty":"Mixed","text":"Secondary storage includes:","options":{"A":"Hard disk","B":"RAM","C":"Cache","D":"Register"},"answer":"A"},
{"id":51,"topic":"Storage","difficulty":"Mixed","text":"Which device is portable storage?","options":{"A":"Pen drive","B":"CPU","C":"Monitor","D":"Printer"},"answer":"A"},
{"id":52,"topic":"Storage","difficulty":"Mixed","text":"Which storage device uses optical technology?","options":{"A":"CD/DVD","B":"RAM","C":"CPU","D":"SSD"},"answer":"A"},
{"id":53,"topic":"Storage","difficulty":"Mixed","text":"SSD stands for:","options":{"A":"Solid State Drive","B":"Software Storage Device","C":"Storage System Disk","D":"System State Drive"},"answer":"A"},
{"id":54,"topic":"Storage","difficulty":"Mixed","text":"Which storage device stores data online?","options":{"A":"Cloud storage","B":"RAM","C":"CPU","D":"CD"},"answer":"A"},
{"id":55,"topic":"Storage","difficulty":"Mixed","text":"Examples of cloud storage include:","options":{"A":"Google Drive","B":"Printer","C":"RAM","D":"CPU"},"answer":"A"},

{"id":56,"topic":"Storage","difficulty":"Mixed","text":"Which device stores large amounts of data permanently?","options":{"A":"RAM","B":"Hard Disk","C":"Cache Memory","D":"Register"},"answer":"B"},
{"id":57,"topic":"Storage","difficulty":"Mixed","text":"Which of the following is NOT a storage device?","options":{"A":"Pen drive","B":"Memory card","C":"Speaker","D":"Hard disk"},"answer":"C"},
{"id":58,"topic":"Storage","difficulty":"Mixed","text":"RAM loses data when:","options":{"A":"Internet disconnects","B":"Power is turned off","C":"Computer prints","D":"Screen turns off"},"answer":"B"},
{"id":59,"topic":"Storage","difficulty":"Mixed","text":"Which storage device is commonly used in cameras?","options":{"A":"Memory card","B":"Hard disk","C":"CPU","D":"Monitor"},"answer":"A"},
{"id":60,"topic":"Storage","difficulty":"Mixed","text":"Which feature determines how much data a device can store?","options":{"A":"Storage capacity","B":"Access speed","C":"Portability","D":"Durability"},"answer":"A"},
{"id":61,"topic":"Storage","difficulty":"Mixed","text":"Access speed refers to:","options":{"A":"Internet speed","B":"Speed of retrieving stored data","C":"Typing speed","D":"Mouse movement"},"answer":"B"},
{"id":62,"topic":"Storage","difficulty":"Mixed","text":"Which storage device is small and portable?","options":{"A":"Pen drive","B":"Monitor","C":"CPU","D":"Printer"},"answer":"A"},
{"id":63,"topic":"Storage","difficulty":"Mixed","text":"Cloud storage stores data:","options":{"A":"Inside the CPU","B":"On the internet","C":"On paper","D":"On a printer"},"answer":"B"},
{"id":64,"topic":"Storage","difficulty":"Mixed","text":"Which of the following is an example of optical storage?","options":{"A":"CD","B":"RAM","C":"CPU","D":"Keyboard"},"answer":"A"},
{"id":65,"topic":"Storage","difficulty":"Mixed","text":"Which device can store operating systems and files permanently?","options":{"A":"Hard disk","B":"RAM","C":"Mouse","D":"Monitor"},"answer":"A"},

{"id":66,"topic":"Software","difficulty":"Mixed","text":"Software is:","options":{"A":"Physical computer parts","B":"Programs and instructions","C":"Electronic wires","D":"Internet cables"},"answer":"B"},
{"id":67,"topic":"Software","difficulty":"Mixed","text":"Software helps hardware to:","options":{"A":"Work properly","B":"Store electricity","C":"Increase screen size","D":"Print faster"},"answer":"A"},
{"id":68,"topic":"Software","difficulty":"Mixed","text":"Software provides instructions for:","options":{"A":"Hardware operation","B":"Mouse movement","C":"Printer paper","D":"Monitor brightness"},"answer":"A"},
{"id":69,"topic":"Software","difficulty":"Mixed","text":"Which is NOT software?","options":{"A":"Windows","B":"Chrome","C":"Keyboard","D":"Excel"},"answer":"C"},
{"id":70,"topic":"Software","difficulty":"Mixed","text":"Software allows users to:","options":{"A":"Control computer functions","B":"Build hardware","C":"Replace CPU","D":"Fix wires"},"answer":"A"},
{"id":71,"topic":"Software","difficulty":"Mixed","text":"User Interface (UI) helps users to:","options":{"A":"Communicate with software","B":"Repair hardware","C":"Increase storage","D":"Control electricity"},"answer":"A"},
{"id":72,"topic":"Software","difficulty":"Mixed","text":"Programming code consists of:","options":{"A":"Computer instructions","B":"Hardware devices","C":"Internet signals","D":"Mouse clicks"},"answer":"A"},
{"id":73,"topic":"Software","difficulty":"Mixed","text":"Which component stores data for software systems?","options":{"A":"Database","B":"Keyboard","C":"CPU","D":"Scanner"},"answer":"A"},
{"id":74,"topic":"Software","difficulty":"Mixed","text":"API helps software to:","options":{"A":"Print documents","B":"Connect with other software","C":"Store files","D":"Display images"},"answer":"B"},
{"id":75,"topic":"Software","difficulty":"Mixed","text":"Software instructions are written in:","options":{"A":"Programming languages","B":"English only","C":"Internet codes","D":"Hardware commands"},"answer":"A"},

{"id":76,"topic":"Software","difficulty":"Mixed","text":"System software is necessary for:","options":{"A":"Running the computer","B":"Drawing pictures","C":"Playing games","D":"Watching movies"},"answer":"A"},
{"id":77,"topic":"Software","difficulty":"Mixed","text":"Which is an example of system software?","options":{"A":"Windows","B":"Photoshop","C":"MS Word","D":"Excel"},"answer":"A"},
{"id":78,"topic":"Software","difficulty":"Mixed","text":"Device drivers help:","options":{"A":"Hardware communicate with software","B":"Print documents","C":"Store videos","D":"Connect internet"},"answer":"A"},
{"id":79,"topic":"Software","difficulty":"Mixed","text":"Utility software is used for:","options":{"A":"Maintaining computer system","B":"Playing music","C":"Editing photos","D":"Writing essays"},"answer":"A"},
{"id":80,"topic":"Software","difficulty":"Mixed","text":"Antivirus software protects the computer from:","options":{"A":"Dust","B":"Viruses","C":"Internet cables","D":"Power failure"},"answer":"B"},
{"id":81,"topic":"Software","difficulty":"Mixed","text":"Application software is used for:","options":{"A":"Specific user tasks","B":"Hardware repair","C":"Power supply","D":"Internet wiring"},"answer":"A"},
{"id":82,"topic":"Software","difficulty":"Mixed","text":"MS Word is an example of:","options":{"A":"Application software","B":"System software","C":"Hardware","D":"Storage device"},"answer":"A"},
{"id":83,"topic":"Software","difficulty":"Mixed","text":"Excel is mainly used for:","options":{"A":"Spreadsheets and calculations","B":"Playing music","C":"Internet browsing","D":"Printing"},"answer":"A"},
{"id":84,"topic":"Software","difficulty":"Mixed","text":"PowerPoint is used to create:","options":{"A":"Presentations","B":"Games","C":"Music files","D":"Databases"},"answer":"A"},
{"id":85,"topic":"Software","difficulty":"Mixed","text":"A web browser is used to:","options":{"A":"Browse the internet","B":"Print documents","C":"Store files","D":"Edit photos"},"answer":"A"},
{"id":86,"topic":"Software","difficulty":"Mixed","text":"Which of the following is a browser?","options":{"A":"Chrome","B":"Excel","C":"PowerPoint","D":"Paint"},"answer":"A"},
{"id":87,"topic":"Software","difficulty":"Mixed","text":"Media players are used for:","options":{"A":"Playing audio and video","B":"Storing files","C":"Typing documents","D":"Printing"},"answer":"A"},
{"id":88,"topic":"Software","difficulty":"Mixed","text":"Photoshop is mainly used for:","options":{"A":"Image editing","B":"Typing documents","C":"Programming","D":"Printing"},"answer":"A"},
{"id":89,"topic":"Software","difficulty":"Mixed","text":"Which is an example of application software?","options":{"A":"Photoshop","B":"Linux","C":"Device driver","D":"BIOS"},"answer":"A"},
{"id":90,"topic":"Software","difficulty":"Mixed","text":"Operating systems help the computer:","options":{"A":"Manage hardware and software","B":"Print faster","C":"Increase screen size","D":"Connect mouse"},"answer":"A"},

{"id":91,"topic":"Concepts","difficulty":"Advanced","text":"Without software, hardware would be:","options":{"A":"Fully functional","B":"Useless","C":"Faster","D":"Invisible"},"answer":"B"},
{"id":92,"topic":"Concepts","difficulty":"Advanced","text":"Hardware can be compared to the:","options":{"A":"Body of a computer","B":"Brain of computer","C":"Internet","D":"Network"},"answer":"A"},
{"id":93,"topic":"Concepts","difficulty":"Advanced","text":"Software can be compared to the:","options":{"A":"Soul/brain controlling hardware","B":"Screen","C":"Printer","D":"Keyboard"},"answer":"A"},
{"id":94,"topic":"Concepts","difficulty":"Advanced","text":"Typing in MS Word is an example of interaction between:","options":{"A":"Hardware and software","B":"Hardware only","C":"Software only","D":"Storage only"},"answer":"A"},
{"id":95,"topic":"CPU/System Unit","difficulty":"Mixed","text":"Which device processes instructions?","options":{"A":"CPU","B":"Monitor","C":"Printer","D":"Mouse"},"answer":"A"},
{"id":96,"topic":"CPU/System Unit","difficulty":"Advanced","text":"The CPU processes information based on:","options":{"A":"Instructions","B":"Pictures","C":"Sounds","D":"Electricity"},"answer":"A"},
{"id":97,"topic":"Concepts","difficulty":"Advanced","text":"Which device sends processed information to the user?","options":{"A":"Output device","B":"Input device","C":"Storage device","D":"Power supply"},"answer":"A"},
{"id":98,"topic":"Concepts","difficulty":"Advanced","text":"Which device sends commands to the computer?","options":{"A":"Input device","B":"Output device","C":"Storage device","D":"Power supply"},"answer":"A"},
{"id":99,"topic":"Storage","difficulty":"Mixed","text":"Data saved in RAM is lost when:","options":{"A":"Computer restarts","B":"Power is turned off","C":"Printer stops","D":"Internet disconnects"},"answer":"B"},
{"id":100,"topic":"Concepts","difficulty":"Advanced","text":"Which statement is correct?","options":{"A":"Hardware is physical, software is instructions","B":"Hardware and software are the same","C":"Software can be touched","D":"Hardware cannot be seen"},"answer":"A"},

{"id":101,"topic":"Input/Output","difficulty":"Advanced","text":"Which device both displays output and accepts touch input?","options":{"A":"Printer","B":"Touchscreen","C":"Speaker","D":"Projector"},"answer":"B"},
{"id":102,"topic":"Output Devices","difficulty":"Mixed","text":"To listen to music privately, which device is best?","options":{"A":"Speaker","B":"Monitor","C":"Headphones","D":"Printer"},"answer":"C"},
{"id":103,"topic":"Output Devices","difficulty":"Mixed","text":"Which device converts digital documents into printed form?","options":{"A":"Scanner","B":"Printer","C":"Keyboard","D":"Monitor"},"answer":"B"},
{"id":104,"topic":"Input Devices","difficulty":"Mixed","text":"Which device controls objects on the screen by moving a pointer?","options":{"A":"Scanner","B":"Mouse","C":"Monitor","D":"Speaker"},"answer":"B"},
{"id":105,"topic":"Input Devices","difficulty":"Mixed","text":"Which input device captures video for online meetings?","options":{"A":"Webcam","B":"Printer","C":"Speaker","D":"Hard disk"},"answer":"A"},
{"id":106,"topic":"Output Devices","difficulty":"Mixed","text":"Which device sends sound from the computer to the user?","options":{"A":"Microphone","B":"Speaker","C":"Scanner","D":"Joystick"},"answer":"B"},
{"id":107,"topic":"Input Devices","difficulty":"Advanced","text":"Which device allows a computer to recognize fingerprints?","options":{"A":"Scanner","B":"Webcam","C":"Biometric sensor","D":"Monitor"},"answer":"C"},
{"id":108,"topic":"Output Devices","difficulty":"Mixed","text":"Which device displays images on a wall or large screen?","options":{"A":"Projector","B":"Printer","C":"Monitor","D":"Keyboard"},"answer":"A"},
{"id":109,"topic":"Input Devices","difficulty":"Mixed","text":"Which device is mainly used to type commands into a computer?","options":{"A":"Keyboard","B":"Monitor","C":"Printer","D":"Speaker"},"answer":"A"},
{"id":110,"topic":"Input Devices","difficulty":"Mixed","text":"Which device converts voice into digital input?","options":{"A":"Microphone","B":"Speaker","C":"Monitor","D":"Printer"},"answer":"A"},

{"id":111,"topic":"CPU/System Unit","difficulty":"Mixed","text":"Which component is responsible for calculations and decision making?","options":{"A":"CPU","B":"Monitor","C":"Printer","D":"Keyboard"},"answer":"A"},
{"id":112,"topic":"CPU/System Unit","difficulty":"Mixed","text":"Which component stores temporary working data?","options":{"A":"RAM","B":"Hard disk","C":"SSD","D":"CD"},"answer":"A"},
{"id":113,"topic":"CPU/System Unit","difficulty":"Mixed","text":"Which component connects all hardware parts together?","options":{"A":"Motherboard","B":"Monitor","C":"Printer","D":"Scanner"},"answer":"A"},
{"id":114,"topic":"CPU/System Unit","difficulty":"Mixed","text":"Which device provides electricity to the computer components?","options":{"A":"PSU","B":"RAM","C":"CPU","D":"Hard disk"},"answer":"A"},
{"id":115,"topic":"CPU/System Unit","difficulty":"Mixed","text":"Which component prevents computer overheating?","options":{"A":"Cooling fan","B":"Keyboard","C":"Monitor","D":"Scanner"},"answer":"A"},
{"id":116,"topic":"CPU/System Unit","difficulty":"Advanced","text":"Which expansion card improves graphics performance?","options":{"A":"Graphics card","B":"Sound card","C":"Network card","D":"RAM"},"answer":"A"},
{"id":117,"topic":"CPU/System Unit","difficulty":"Advanced","text":"Which expansion card helps computers connect to networks?","options":{"A":"Graphics card","B":"Network card","C":"Sound card","D":"RAM"},"answer":"B"},
{"id":118,"topic":"CPU/System Unit","difficulty":"Advanced","text":"Which component allows audio processing in computers?","options":{"A":"Sound card","B":"RAM","C":"CPU","D":"Printer"},"answer":"A"},
{"id":119,"topic":"CPU/System Unit","difficulty":"Mixed","text":"Which component processes instructions given by software?","options":{"A":"CPU","B":"Monitor","C":"Scanner","D":"Printer"},"answer":"A"},
{"id":120,"topic":"CPU/System Unit","difficulty":"Mixed","text":"Which component is located inside the system unit casing?","options":{"A":"CPU","B":"Monitor","C":"Speaker","D":"Keyboard"},"answer":"A"},

{"id":121,"topic":"Storage","difficulty":"Mixed","text":"Which storage device is usually the main storage of a computer?","options":{"A":"Hard disk","B":"RAM","C":"Cache","D":"Register"},"answer":"A"},
{"id":122,"topic":"Storage","difficulty":"Advanced","text":"Which storage device is fastest among the following?","options":{"A":"SSD","B":"CD","C":"Hard disk","D":"DVD"},"answer":"A"},
{"id":123,"topic":"Storage","difficulty":"Advanced","text":"Which storage device uses laser technology?","options":{"A":"CD/DVD","B":"RAM","C":"CPU","D":"SSD"},"answer":"A"},
{"id":124,"topic":"Storage","difficulty":"Mixed","text":"Which device is commonly used to transfer files between computers?","options":{"A":"Pen drive","B":"Monitor","C":"Speaker","D":"Keyboard"},"answer":"A"},
{"id":125,"topic":"Storage","difficulty":"Mixed","text":"Which storage device is commonly used in smartphones and cameras?","options":{"A":"Memory card","B":"CPU","C":"Printer","D":"Scanner"},"answer":"A"},
{"id":126,"topic":"Storage","difficulty":"Mixed","text":"Which storage method stores data online?","options":{"A":"Cloud storage","B":"Hard disk","C":"RAM","D":"CD"},"answer":"A"},
{"id":127,"topic":"Storage","difficulty":"Advanced","text":"Which factor describes how fast data can be retrieved from storage?","options":{"A":"Access speed","B":"Storage capacity","C":"Durability","D":"Portability"},"answer":"A"},
{"id":128,"topic":"Storage","difficulty":"Advanced","text":"Which factor describes how much data can be stored?","options":{"A":"Storage capacity","B":"Access speed","C":"Durability","D":"Size"},"answer":"A"},
{"id":129,"topic":"Storage","difficulty":"Advanced","text":"Which feature indicates whether a storage device is easy to carry?","options":{"A":"Portability","B":"Speed","C":"Capacity","D":"Size"},"answer":"A"},
{"id":130,"topic":"Storage","difficulty":"Advanced","text":"Which feature indicates how strong and long-lasting a device is?","options":{"A":"Durability","B":"Capacity","C":"Speed","D":"Portability"},"answer":"A"},

{"id":131,"topic":"Software","difficulty":"Mixed","text":"Software mainly contains:","options":{"A":"Instructions and programs","B":"Physical devices","C":"Electrical circuits","D":"Storage disks"},"answer":"A"},
{"id":132,"topic":"Software","difficulty":"Mixed","text":"Software controls:","options":{"A":"Hardware operations","B":"Internet only","C":"Printer speed","D":"Screen brightness only"},"answer":"A"},
{"id":133,"topic":"Software","difficulty":"Mixed","text":"Which software type runs the computer system?","options":{"A":"System software","B":"Application software","C":"Browser","D":"Game software"},"answer":"A"},
{"id":134,"topic":"Software","difficulty":"Mixed","text":"Which software allows users to perform specific tasks?","options":{"A":"Application software","B":"System software","C":"BIOS","D":"Drivers"},"answer":"A"},
{"id":135,"topic":"Software","difficulty":"Mixed","text":"Which of the following is an operating system?","options":{"A":"Windows","B":"Word","C":"Excel","D":"Chrome"},"answer":"A"},
{"id":136,"topic":"Software","difficulty":"Mixed","text":"Which application software is used to write documents?","options":{"A":"MS Word","B":"Photoshop","C":"Chrome","D":"Media Player"},"answer":"A"},
{"id":137,"topic":"Software","difficulty":"Mixed","text":"Which application software is used to create presentations?","options":{"A":"PowerPoint","B":"Excel","C":"Word","D":"Chrome"},"answer":"A"},
{"id":138,"topic":"Software","difficulty":"Mixed","text":"Which application software is used for calculations and spreadsheets?","options":{"A":"Excel","B":"Word","C":"Chrome","D":"Paint"},"answer":"A"},
{"id":139,"topic":"Software","difficulty":"Mixed","text":"Which software is used to browse the internet?","options":{"A":"Chrome","B":"Excel","C":"PowerPoint","D":"Photoshop"},"answer":"A"},
{"id":140,"topic":"Software","difficulty":"Mixed","text":"Which software protects computers from malware?","options":{"A":"Antivirus","B":"Browser","C":"Spreadsheet","D":"Media player"},"answer":"A"},

{"id":141,"topic":"Concepts","difficulty":"Advanced","text":"If a computer had hardware but no software, it would:","options":{"A":"Work normally","B":"Not work","C":"Work faster","D":"Store more data"},"answer":"B"},
{"id":142,"topic":"Concepts","difficulty":"Advanced","text":"Hardware and software together make a computer:","options":{"A":"Fully functional","B":"Faster only","C":"Smaller","D":"Cheaper"},"answer":"A"},
{"id":143,"topic":"Concepts","difficulty":"Advanced","text":"Typing a document involves which two components?","options":{"A":"Hardware and software","B":"Hardware only","C":"Software only","D":"Storage only"},"answer":"A"},
{"id":144,"topic":"Concepts","difficulty":"Advanced","text":"Which sequence correctly describes computer operation?","options":{"A":"Input -> Process -> Output","B":"Output -> Input -> Process","C":"Process -> Input -> Output","D":"Input -> Output -> Process"},"answer":"A"},
{"id":145,"topic":"CPU/System Unit","difficulty":"Mixed","text":"Which device processes data in a computer?","options":{"A":"CPU","B":"Monitor","C":"Printer","D":"Scanner"},"answer":"A"},
{"id":146,"topic":"Concepts","difficulty":"Advanced","text":"Which device displays processed information?","options":{"A":"Output device","B":"Input device","C":"Storage device","D":"Power unit"},"answer":"A"},
{"id":147,"topic":"Concepts","difficulty":"Advanced","text":"Which device allows users to give commands?","options":{"A":"Input device","B":"Output device","C":"Storage device","D":"Cooling fan"},"answer":"A"},
{"id":148,"topic":"Storage","difficulty":"Advanced","text":"Which type of storage is erased when power is lost?","options":{"A":"Primary storage","B":"Secondary storage","C":"Cloud storage","D":"Optical storage"},"answer":"A"},
{"id":149,"topic":"Concepts","difficulty":"Advanced","text":"Which statement is correct?","options":{"A":"Hardware is physical; software is instructions","B":"Hardware is invisible","C":"Software can be touched","D":"Hardware stores programs only"},"answer":"A"},
{"id":150,"topic":"Concepts","difficulty":"Advanced","text":"Which statement best describes computers?","options":{"A":"Hardware is the body and software controls it","B":"Software is the body and hardware controls it","C":"Hardware and software are identical","D":"Computers do not need software"},"answer":"A"}
];

const assessments = [
  {
    id: 'ict-core',
    name: 'ICT Core Assessment',
    description: 'Core ICT assessment covering hardware, software, networking, and concepts.',
    tags: ['ict', 'core', 'mixed'],
    questions: defaultQuestions
  }
];



const finalMockQuestions = [
  {
    "id": 1,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Hardware means:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 2,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which is an input device?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 3,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "CPU stands for:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 4,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "RAM is:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 5,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "ROM stores:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 6,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Monitor is an:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 7,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "SSD is faster than:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 8,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Printer gives:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 9,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Cloud storage requires:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 10,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Motherboard connects:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 11,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which is application software?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 12,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "PSU provides:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 13,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Touchscreen is:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 14,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Scanner converts:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 15,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Cache memory is:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 16,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "API connects:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 17,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Antivirus is example of:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 18,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Joystick is used for:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 19,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Speaker outputs:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 20,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "IPO cycle begins with:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 21,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "If RAM is removed, computer will:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 22,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which device prevents overheating?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 23,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Device driver allows:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 24,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "HDD belongs to:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 25,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which is NOT hardware?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 26,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Removing motherboard causes:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 27,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which memory is closest to CPU?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 28,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Increasing RAM improves:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 29,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Projector is an:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 30,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "BIOS is stored in:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 31,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which storage is erased when power off?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 32,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Portability refers to:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 33,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which software manages CPU and memory?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 34,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Database is used for:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 35,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Cloud storage data is saved on:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 36,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which device records voice?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 37,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Optical disk uses:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 38,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "If cooling system fails, system may:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 39,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "UI helps in:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 40,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "A complete computer system requires:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 41,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which pair represents primary storage?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 42,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which is fastest memory?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 43,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which device converts digital file to paper output?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 44,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Removing PSU will cause:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 45,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which storage is most portable?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 46,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Software without hardware is:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 47,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which software is necessary to start computer?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 48,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which device can act as both input and output?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 49,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which improves processing speed most directly?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 50,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which device adds video and sound capability?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 51,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "If saved files disappear permanently, which failed?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 52,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "OS is example of:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 53,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Hard Disk is used for:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 54,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "API connects:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 55,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Removing cache results in:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 56,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which device gives private sound output?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 57,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "IPO order is:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 58,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "BIOS helps in:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 59,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Which is NOT secondary storage?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 60,
    "topic": "ICT Concepts",
    "difficulty": "Mixed",
    "text": "Computer works according to:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  }
];
const ultraHardQuestions = [
  {
    "id": 1,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "A student types a document, saves it to Google Drive, then prints it. Which sequence correctly represents storage types used?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 2,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Which component failure will MOST likely cause the system to power on but not boot into OS?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 3,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "If cache memory is removed but RAM remains, what is most expected?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 4,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Which combination improves both speed and multitasking?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 5,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Which device requires both driver software and physical connection to function?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 6,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "A computer overheats frequently and shuts down. Which TWO components should be checked first?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 7,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "A file saved yesterday is missing after restart. It was not saved externally. Most likely cause:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 8,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Which scenario involves all three: input, process, output?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 9,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "A biometric login fails due to missing driver. Which layer failed?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 10,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "If motherboard fails, which function is directly affected?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 11,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Which is TRUE regarding RAM and Cache?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 12,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Cloud storage differs from HDD because it:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 13,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "If PSU voltage fluctuates, which is MOST at risk?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 14,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Removing OS will cause:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 15,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Which storage type is best for long-term, high-speed performance?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 16,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Which device is NOT dependent on software to function?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "D"
  },
  {
    "id": 17,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Increasing which component will NOT directly increase processing speed?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "D"
  },
  {
    "id": 18,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "A computer can work without internet because:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 19,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "If BIOS is corrupted, system may:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 20,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Which combination ensures maximum portability?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 21,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Which layer connects software instructions to hardware actions?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 22,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Removing RAM but keeping HDD intact means:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 23,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "If system freezes during multitasking, what is likely insufficient?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 24,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Which device can be both input and output AND relies on calibration software?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  {
    "id": 25,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Which memory is erased instantly after shutdown?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 26,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Which is MOST responsible for overall system performance balance?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 27,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "Which example best demonstrates IPO cycle?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  },
  {
    "id": 28,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "If OS manages hardware resources, what does it control?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 29,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "A user uploads file to cloud, edits locally, prints copy. Which are used?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "A"
  },
  {
    "id": 30,
    "topic": "ICT Advanced",
    "difficulty": "Ultra-Hard",
    "text": "A complete failure of system unit will affect:",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "C"
  }
];

assessments.push(
  {
    id: 'ict-final-mock',
    name: 'ICT Final Mock Test',
    description: '60-question final mock assessment set.',
    tags: ['ict','mock','final'],
    questions: finalMockQuestions
  },
  {
    id: 'ict-ultra-hard',
    name: 'ICT Ultra-Hard Challenge Set',
    description: 'Advanced analytical ICT challenge questions.',
    tags: ['ict','challenge','advanced'],
    questions: ultraHardQuestions
  }
);

window.assessments = assessments;


