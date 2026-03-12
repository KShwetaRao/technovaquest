// Comprehensive questions database for all quests
export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuestQuestions {
  [questId: string]: Question[];
}

export const questQuestionsDB: QuestQuestions = {
  // Backend Quests
  "build-rest-api": [
    {
      question: "What does REST stand for?",
      options: [
        "Representational State Transfer",
        "Remote Execution State Transfer",
        "Rapid Execution Service Transfer",
        "Resource Execution State Transform"
      ],
      correctAnswer: "Representational State Transfer"
    },
    {
      question: "Which HTTP method is used to create a new resource?",
      options: ["POST", "GET", "PUT", "DELETE"],
      correctAnswer: "POST"
    },
    {
      question: "What status code indicates a successful resource creation?",
      options: ["201 Created", "200 OK", "204 No Content", "301 Moved Permanently"],
      correctAnswer: "201 Created"
    },
    {
      question: "Which authentication method is commonly used in REST APIs?",
      options: ["JWT (JSON Web Token)", "FTP", "SMTP", "DNS"],
      correctAnswer: "JWT (JSON Web Token)"
    },
    {
      question: "What is middleware in Express.js?",
      options: [
        "Functions that execute during request-response cycle",
        "A database connector",
        "A front-end framework",
        "A testing library"
      ],
      correctAnswer: "Functions that execute during request-response cycle"
    },
    {
      question: "Which HTTP method is idempotent?",
      options: ["PUT", "POST", "PATCH", "None of the above"],
      correctAnswer: "PUT"
    },
    {
      question: "What does CRUD stand for?",
      options: [
        "Create, Read, Update, Delete",
        "Create, Retrieve, Upload, Download",
        "Copy, Read, Update, Delete",
        "Create, Remove, Update, Deploy"
      ],
      correctAnswer: "Create, Read, Update, Delete"
    },
    {
      question: "Which Express.js method handles GET requests?",
      options: ["app.get()", "app.request()", "app.fetch()", "app.retrieve()"],
      correctAnswer: "app.get()"
    },
    {
      question: "What is the purpose of CORS?",
      options: [
        "Allow cross-origin resource sharing",
        "Compress response data",
        "Cache static files",
        "Validate request data"
      ],
      correctAnswer: "Allow cross-origin resource sharing"
    },
    {
      question: "Which status code indicates 'Not Found'?",
      options: ["404", "400", "500", "401"],
      correctAnswer: "404"
    }
  ],

  "database-design-101": [
    {
      question: "What is database normalization?",
      options: [
        "Organizing data to reduce redundancy",
        "Making database faster",
        "Encrypting database",
        "Creating backups"
      ],
      correctAnswer: "Organizing data to reduce redundancy"
    },
    {
      question: "What is a primary key?",
      options: [
        "A unique identifier for a record",
        "The first column in a table",
        "A password for database",
        "An index type"
      ],
      correctAnswer: "A unique identifier for a record"
    },
    {
      question: "What is a foreign key?",
      options: [
        "A key that references primary key in another table",
        "A key from external database",
        "A backup key",
        "An encryption key"
      ],
      correctAnswer: "A key that references primary key in another table"
    },
    {
      question: "What is the purpose of an index?",
      options: [
        "Speed up data retrieval",
        "Store more data",
        "Encrypt data",
        "Delete data faster"
      ],
      correctAnswer: "Speed up data retrieval"
    },
    {
      question: "What is First Normal Form (1NF)?",
      options: [
        "Each column contains atomic values",
        "All columns are indexed",
        "No null values allowed",
        "All data is encrypted"
      ],
      correctAnswer: "Each column contains atomic values"
    },
    {
      question: "What type of relationship exists when one record relates to many?",
      options: ["One-to-Many", "Many-to-Many", "One-to-One", "None"],
      correctAnswer: "One-to-Many"
    },
    {
      question: "What is a composite key?",
      options: [
        "A key made up of multiple columns",
        "An encrypted key",
        "A temporary key",
        "A foreign key"
      ],
      correctAnswer: "A key made up of multiple columns"
    },
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Simple Question Language",
        "Standard Quality Language",
        "System Query Logic"
      ],
      correctAnswer: "Structured Query Language"
    },
    {
      question: "What is denormalization?",
      options: [
        "Adding redundancy for performance",
        "Removing all indexes",
        "Deleting foreign keys",
        "Encrypting data"
      ],
      correctAnswer: "Adding redundancy for performance"
    },
    {
      question: "What constraint ensures no duplicate values?",
      options: ["UNIQUE", "PRIMARY", "FOREIGN", "CHECK"],
      correctAnswer: "UNIQUE"
    }
  ],

  "docker-containerization": [
    {
      question: "What is Docker?",
      options: [
        "A containerization platform",
        "A programming language",
        "A database system",
        "A web server"
      ],
      correctAnswer: "A containerization platform"
    },
    {
      question: "What is a Docker image?",
      options: [
        "A template for creating containers",
        "A running container",
        "A virtual machine",
        "A configuration file"
      ],
      correctAnswer: "A template for creating containers"
    },
    {
      question: "What command builds a Docker image?",
      options: ["docker build", "docker create", "docker make", "docker init"],
      correctAnswer: "docker build"
    },
    {
      question: "What is Docker Compose used for?",
      options: [
        "Managing multi-container applications",
        "Building images faster",
        "Encrypting containers",
        "Monitoring containers"
      ],
      correctAnswer: "Managing multi-container applications"
    },
    {
      question: "What file defines a Docker image?",
      options: ["Dockerfile", "docker.json", "image.yaml", "container.conf"],
      correctAnswer: "Dockerfile"
    },
    {
      question: "What is the base instruction in a Dockerfile?",
      options: ["FROM", "START", "BASE", "IMAGE"],
      correctAnswer: "FROM"
    },
    {
      question: "What is a multi-stage build?",
      options: [
        "Building image in multiple steps to reduce size",
        "Running multiple containers",
        "Using multiple Dockerfiles",
        "Building on multiple servers"
      ],
      correctAnswer: "Building image in multiple steps to reduce size"
    },
    {
      question: "What command runs a Docker container?",
      options: ["docker run", "docker start", "docker execute", "docker launch"],
      correctAnswer: "docker run"
    },
    {
      question: "What is Docker Hub?",
      options: [
        "A registry for Docker images",
        "A local development tool",
        "A monitoring service",
        "A cloud provider"
      ],
      correctAnswer: "A registry for Docker images"
    },
    {
      question: "What flag runs a container in detached mode?",
      options: ["-d", "-b", "-r", "-a"],
      correctAnswer: "-d"
    }
  ],

  // Frontend Quests
  "css-grid-mastery": [
    {
      question: "What CSS property creates a grid container?",
      options: ["display: grid", "grid: container", "layout: grid", "container: grid"],
      correctAnswer: "display: grid"
    },
    {
      question: "What property defines grid columns?",
      options: ["grid-template-columns", "columns", "grid-columns", "column-template"],
      correctAnswer: "grid-template-columns"
    },
    {
      question: "What unit is commonly used in CSS Grid?",
      options: ["fr (fraction)", "gr (grid)", "gd (grid-unit)", "cx (cell)"],
      correctAnswer: "fr (fraction)"
    },
    {
      question: "What property creates gaps between grid items?",
      options: ["gap", "margin", "spacing", "padding"],
      correctAnswer: "gap"
    },
    {
      question: "How do you span an item across 3 columns?",
      options: ["grid-column: span 3", "column-span: 3", "span-column: 3", "grid-width: 3"],
      correctAnswer: "grid-column: span 3"
    },
    {
      question: "What is the default value of grid-auto-flow?",
      options: ["row", "column", "dense", "auto"],
      correctAnswer: "row"
    },
    {
      question: "What function repeats grid tracks?",
      options: ["repeat()", "grid-repeat()", "loop()", "duplicate()"],
      correctAnswer: "repeat()"
    },
    {
      question: "What does 'auto-fit' do in grid?",
      options: [
        "Fits as many columns as possible",
        "Automatically sizes items",
        "Fills empty space",
        "Centers content"
      ],
      correctAnswer: "Fits as many columns as possible"
    },
    {
      question: "What property aligns items on the block axis?",
      options: ["align-items", "justify-items", "place-items", "grid-align"],
      correctAnswer: "align-items"
    },
    {
      question: "What is a grid area?",
      options: [
        "A named region spanning cells",
        "A single grid cell",
        "The entire grid",
        "A column or row"
      ],
      correctAnswer: "A named region spanning cells"
    }
  ],

  "react-hooks-deep-dive": [
    {
      question: "What Hook manages component state?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctAnswer: "useState"
    },
    {
      question: "When does useEffect run by default?",
      options: [
        "After every render",
        "Only on mount",
        "Only on unmount",
        "Before render"
      ],
      correctAnswer: "After every render"
    },
    {
      question: "How do you run useEffect only once?",
      options: [
        "Pass empty dependency array []",
        "Pass null",
        "Use useOnce",
        "Don't pass dependencies"
      ],
      correctAnswer: "Pass empty dependency array []"
    },
    {
      question: "What Hook accesses context values?",
      options: ["useContext", "useProvider", "useConsumer", "useValue"],
      correctAnswer: "useContext"
    },
    {
      question: "What does useReducer return?",
      options: [
        "State and dispatch function",
        "State only",
        "Dispatch only",
        "Action and state"
      ],
      correctAnswer: "State and dispatch function"
    },
    {
      question: "What Hook creates memoized values?",
      options: ["useMemo", "useCallback", "useState", "useEffect"],
      correctAnswer: "useMemo"
    },
    {
      question: "What Hook memoizes callback functions?",
      options: ["useCallback", "useMemo", "useFunction", "useFn"],
      correctAnswer: "useCallback"
    },
    {
      question: "What Hook accesses DOM elements?",
      options: ["useRef", "useDOM", "useElement", "useNode"],
      correctAnswer: "useRef"
    },
    {
      question: "Can Hooks be called conditionally?",
      options: ["No", "Yes", "Sometimes", "Only in custom hooks"],
      correctAnswer: "No"
    },
    {
      question: "What is a custom Hook?",
      options: [
        "A function that uses built-in Hooks",
        "A React component",
        "A third-party library",
        "A state manager"
      ],
      correctAnswer: "A function that uses built-in Hooks"
    }
  ],

  "typescript-fundamentals": [
    {
      question: "What is TypeScript?",
      options: [
        "A typed superset of JavaScript",
        "A JavaScript framework",
        "A database language",
        "A CSS preprocessor"
      ],
      correctAnswer: "A typed superset of JavaScript"
    },
    {
      question: "How do you define a variable type?",
      options: ["let x: number", "let x = number", "let number x", "let x as number"],
      correctAnswer: "let x: number"
    },
    {
      question: "What is an interface?",
      options: [
        "A contract for object structure",
        "A class type",
        "A function type",
        "A variable type"
      ],
      correctAnswer: "A contract for object structure"
    },
    {
      question: "What symbol denotes optional properties?",
      options: ["?", "!", "*", "&"],
      correctAnswer: "?"
    },
    {
      question: "What are generics used for?",
      options: [
        "Creating reusable components with type safety",
        "Defining constants",
        "Importing modules",
        "Styling components"
      ],
      correctAnswer: "Creating reusable components with type safety"
    },
    {
      question: "What is a type alias?",
      options: [
        "A custom name for a type",
        "A variable name",
        "A function name",
        "A class name"
      ],
      correctAnswer: "A custom name for a type"
    },
    {
      question: "What is a union type?",
      options: [
        "A type that can be one of several types",
        "A combined class",
        "A merged interface",
        "A function overload"
      ],
      correctAnswer: "A type that can be one of several types"
    },
    {
      question: "What keyword creates a type from values?",
      options: ["typeof", "instanceof", "typeis", "valueof"],
      correctAnswer: "typeof"
    },
    {
      question: "What are type guards?",
      options: [
        "Runtime checks to narrow types",
        "Compile-time errors",
        "Type definitions",
        "Interface extensions"
      ],
      correctAnswer: "Runtime checks to narrow types"
    },
    {
      question: "What is the 'any' type?",
      options: [
        "Disables type checking",
        "Accepts only strings",
        "Accepts only numbers",
        "A strict type"
      ],
      correctAnswer: "Disables type checking"
    }
  ],

  // Cybersecurity Quests
  "secure-web-app": [
    {
      question: "What does XSS stand for?",
      options: [
        "Cross-Site Scripting",
        "Extra Security System",
        "XML Security Standard",
        "Cross-System Security"
      ],
      correctAnswer: "Cross-Site Scripting"
    },
    {
      question: "What is CSRF?",
      options: [
        "Cross-Site Request Forgery",
        "Client-Side Request Failure",
        "Cross-Server Resource Fetch",
        "Cascading Style Request Form"
      ],
      correctAnswer: "Cross-Site Request Forgery"
    },
    {
      question: "How do you prevent SQL injection?",
      options: [
        "Use parameterized queries",
        "Use string concatenation",
        "Disable database logging",
        "Use GET requests"
      ],
      correctAnswer: "Use parameterized queries"
    },
    {
      question: "What is Content Security Policy (CSP)?",
      options: [
        "HTTP header to prevent XSS attacks",
        "A database security feature",
        "A password policy",
        "A CSS framework"
      ],
      correctAnswer: "HTTP header to prevent XSS attacks"
    },
    {
      question: "What does HTTPS provide?",
      options: [
        "Encrypted communication",
        "Faster loading",
        "Better SEO only",
        "Compression"
      ],
      correctAnswer: "Encrypted communication"
    },
    {
      question: "What is input sanitization?",
      options: [
        "Cleaning user input to remove harmful code",
        "Formatting input nicely",
        "Validating input length",
        "Converting to uppercase"
      ],
      correctAnswer: "Cleaning user input to remove harmful code"
    },
    {
      question: "What is a CSRF token?",
      options: [
        "A unique token to verify request origin",
        "A password hash",
        "An API key",
        "A session ID"
      ],
      correctAnswer: "A unique token to verify request origin"
    },
    {
      question: "What header prevents clickjacking?",
      options: [
        "X-Frame-Options",
        "X-Click-Guard",
        "Frame-Security",
        "Click-Protection"
      ],
      correctAnswer: "X-Frame-Options"
    },
    {
      question: "What is password hashing?",
      options: [
        "One-way encryption of passwords",
        "Storing passwords as plain text",
        "Encrypting entire database",
        "Compressing passwords"
      ],
      correctAnswer: "One-way encryption of passwords"
    },
    {
      question: "What is the principle of least privilege?",
      options: [
        "Give minimum necessary permissions",
        "Give all permissions by default",
        "Remove all permissions",
        "Share all credentials"
      ],
      correctAnswer: "Give minimum necessary permissions"
    }
  ],

  "network-security-analysis": [
    {
      question: "What is a firewall?",
      options: [
        "A network security system that monitors traffic",
        "An antivirus software",
        "A backup system",
        "A password manager"
      ],
      correctAnswer: "A network security system that monitors traffic"
    },
    {
      question: "What does IDS stand for?",
      options: [
        "Intrusion Detection System",
        "Internet Data Security",
        "Internal Defense System",
        "Identity Data Storage"
      ],
      correctAnswer: "Intrusion Detection System"
    },
    {
      question: "What is port scanning?",
      options: [
        "Probing for open network ports",
        "Installing security patches",
        "Encrypting data",
        "Backing up files"
      ],
      correctAnswer: "Probing for open network ports"
    },
    {
      question: "What protocol does HTTPS use?",
      options: ["TLS/SSL", "FTP", "SMTP", "DNS"],
      correctAnswer: "TLS/SSL"
    },
    {
      question: "What is a DDoS attack?",
      options: [
        "Distributed Denial of Service",
        "Data Distribution of Services",
        "Direct Database Override System",
        "Dynamic Data Operation Service"
      ],
      correctAnswer: "Distributed Denial of Service"
    },
    {
      question: "What is packet sniffing?",
      options: [
        "Intercepting network packets",
        "Compressing data",
        "Routing traffic",
        "Filtering spam"
      ],
      correctAnswer: "Intercepting network packets"
    },
    {
      question: "What is a VPN?",
      options: [
        "Virtual Private Network",
        "Very Protected Node",
        "Validated Public Network",
        "Virtual Password Network"
      ],
      correctAnswer: "Virtual Private Network"
    },
    {
      question: "What port does HTTPS typically use?",
      options: ["443", "80", "8080", "22"],
      correctAnswer: "443"
    },
    {
      question: "What is network segmentation?",
      options: [
        "Dividing network into separate zones",
        "Combining all networks",
        "Encrypting all traffic",
        "Disabling firewalls"
      ],
      correctAnswer: "Dividing network into separate zones"
    },
    {
      question: "What is a honeypot?",
      options: [
        "A decoy system to attract attackers",
        "A password vault",
        "A backup server",
        "An encryption method"
      ],
      correctAnswer: "A decoy system to attract attackers"
    }
  ],

  "penetration-testing-basics": [
    {
      question: "What is penetration testing?",
      options: [
        "Simulated cyber attack to find vulnerabilities",
        "Installing security software",
        "Backing up data",
        "Monitoring network speed"
      ],
      correctAnswer: "Simulated cyber attack to find vulnerabilities"
    },
    {
      question: "What is the first phase of penetration testing?",
      options: ["Reconnaissance", "Exploitation", "Reporting", "Scanning"],
      correctAnswer: "Reconnaissance"
    },
    {
      question: "What tool is commonly used for network scanning?",
      options: ["Nmap", "Photoshop", "Excel", "Git"],
      correctAnswer: "Nmap"
    },
    {
      question: "What is Metasploit?",
      options: [
        "A penetration testing framework",
        "A programming language",
        "A database system",
        "A web server"
      ],
      correctAnswer: "A penetration testing framework"
    },
    {
      question: "What is a vulnerability?",
      options: [
        "A weakness that can be exploited",
        "A security feature",
        "A network protocol",
        "An encryption method"
      ],
      correctAnswer: "A weakness that can be exploited"
    },
    {
      question: "What is social engineering?",
      options: [
        "Manipulating people to divulge information",
        "Building social networks",
        "Coding social media apps",
        "Network engineering"
      ],
      correctAnswer: "Manipulating people to divulge information"
    },
    {
      question: "What is a brute force attack?",
      options: [
        "Trying all possible combinations",
        "Physical damage to servers",
        "Network flooding",
        "SQL injection"
      ],
      correctAnswer: "Trying all possible combinations"
    },
    {
      question: "What is privilege escalation?",
      options: [
        "Gaining higher access rights",
        "Reducing permissions",
        "Creating new accounts",
        "Encrypting data"
      ],
      correctAnswer: "Gaining higher access rights"
    },
    {
      question: "What is Wireshark used for?",
      options: [
        "Network protocol analysis",
        "Password cracking",
        "Web development",
        "Image editing"
      ],
      correctAnswer: "Network protocol analysis"
    },
    {
      question: "What is the purpose of a penetration testing report?",
      options: [
        "Document findings and recommendations",
        "Delete evidence",
        "Install malware",
        "Disable security"
      ],
      correctAnswer: "Document findings and recommendations"
    }
  ],

  "cybersecurity-basics": [
    {
      question: "What is encryption?",
      options: [
        "Converting data into coded form",
        "Backing up data",
        "Deleting data",
        "Compressing data"
      ],
      correctAnswer: "Converting data into coded form"
    },
    {
      question: "What is two-factor authentication?",
      options: [
        "Using two methods to verify identity",
        "Using two passwords",
        "Logging in twice",
        "Two users sharing access"
      ],
      correctAnswer: "Using two methods to verify identity"
    },
    {
      question: "What is malware?",
      options: [
        "Malicious software",
        "Mail software",
        "Main software",
        "Manual software"
      ],
      correctAnswer: "Malicious software"
    },
    {
      question: "What is phishing?",
      options: [
        "Fraudulent attempt to obtain sensitive information",
        "Legal data collection",
        "Network monitoring",
        "Database backup"
      ],
      correctAnswer: "Fraudulent attempt to obtain sensitive information"
    },
    {
      question: "What makes a strong password?",
      options: [
        "Long with mixed characters and symbols",
        "Your name",
        "Simple and memorable",
        "All lowercase"
      ],
      correctAnswer: "Long with mixed characters and symbols"
    },
    {
      question: "What is a security patch?",
      options: [
        "An update to fix vulnerabilities",
        "A backup file",
        "A new feature",
        "A user manual"
      ],
      correctAnswer: "An update to fix vulnerabilities"
    },
    {
      question: "What is ransomware?",
      options: [
        "Malware that encrypts files and demands payment",
        "Free software",
        "Antivirus software",
        "Email client"
      ],
      correctAnswer: "Malware that encrypts files and demands payment"
    },
    {
      question: "What is the CIA triad in security?",
      options: [
        "Confidentiality, Integrity, Availability",
        "Computer, Internet, Access",
        "Code, Integration, Application",
        "Cyber, Information, Analysis"
      ],
      correctAnswer: "Confidentiality, Integrity, Availability"
    },
    {
      question: "What is a security audit?",
      options: [
        "Systematic evaluation of security measures",
        "Installing software",
        "Deleting logs",
        "Creating backups"
      ],
      correctAnswer: "Systematic evaluation of security measures"
    },
    {
      question: "What is the purpose of antivirus software?",
      options: [
        "Detect and remove malware",
        "Speed up computer",
        "Backup files",
        "Browse the internet"
      ],
      correctAnswer: "Detect and remove malware"
    }
  ],

  // AI/ML Quests
  "train-neural-network": [
    {
      question: "What is a neural network?",
      options: [
        "A computing system inspired by biological brains",
        "A computer network",
        "A database system",
        "A web framework"
      ],
      correctAnswer: "A computing system inspired by biological brains"
    },
    {
      question: "What is a neuron in a neural network?",
      options: [
        "A node that processes input",
        "A database table",
        "A function call",
        "A variable"
      ],
      correctAnswer: "A node that processes input"
    },
    {
      question: "What is backpropagation?",
      options: [
        "Algorithm for training neural networks",
        "Forward data flow",
        "Data preprocessing",
        "Network architecture"
      ],
      correctAnswer: "Algorithm for training neural networks"
    },
    {
      question: "What is an activation function?",
      options: [
        "Function that introduces non-linearity",
        "A data loader",
        "A loss calculator",
        "An optimizer"
      ],
      correctAnswer: "Function that introduces non-linearity"
    },
    {
      question: "What is TensorFlow?",
      options: [
        "An open-source machine learning library",
        "A JavaScript framework",
        "A database system",
        "A CSS preprocessor"
      ],
      correctAnswer: "An open-source machine learning library"
    },
    {
      question: "What is overfitting?",
      options: [
        "Model performs well on training but poorly on new data",
        "Model is too simple",
        "Data is corrupted",
        "Network is too small"
      ],
      correctAnswer: "Model performs well on training but poorly on new data"
    },
    {
      question: "What is a loss function?",
      options: [
        "Measures model prediction error",
        "Activates neurons",
        "Loads data",
        "Optimizes parameters"
      ],
      correctAnswer: "Measures model prediction error"
    },
    {
      question: "What is an epoch?",
      options: [
        "One complete pass through training data",
        "A layer type",
        "An activation function",
        "A data format"
      ],
      correctAnswer: "One complete pass through training data"
    },
    {
      question: "What is gradient descent?",
      options: [
        "Optimization algorithm to minimize loss",
        "A network architecture",
        "A data preprocessing technique",
        "A validation method"
      ],
      correctAnswer: "Optimization algorithm to minimize loss"
    },
    {
      question: "What is a convolutional layer?",
      options: [
        "Layer that applies filters to detect features",
        "Fully connected layer",
        "Output layer",
        "Input layer"
      ],
      correctAnswer: "Layer that applies filters to detect features"
    }
  ],

  "build-chatbot": [
    {
      question: "What is Natural Language Processing (NLP)?",
      options: [
        "Technology for computers to understand human language",
        "A programming language",
        "A database query language",
        "A web protocol"
      ],
      correctAnswer: "Technology for computers to understand human language"
    },
    {
      question: "What is tokenization?",
      options: [
        "Breaking text into individual words or tokens",
        "Encrypting messages",
        "Compressing data",
        "Formatting text"
      ],
      correctAnswer: "Breaking text into individual words or tokens"
    },
    {
      question: "What is intent recognition?",
      options: [
        "Identifying user's intention from input",
        "Recognizing faces",
        "Detecting errors",
        "Validating input"
      ],
      correctAnswer: "Identifying user's intention from input"
    },
    {
      question: "What is a training dataset?",
      options: [
        "Data used to teach the model",
        "Production data",
        "Test cases",
        "User feedback"
      ],
      correctAnswer: "Data used to teach the model"
    },
    {
      question: "What library is commonly used for NLP in Python?",
      options: ["NLTK or spaCy", "React", "Express", "jQuery"],
      correctAnswer: "NLTK or spaCy"
    },
    {
      question: "What is entity extraction?",
      options: [
        "Identifying specific information in text",
        "Removing data",
        "Encrypting messages",
        "Translating text"
      ],
      correctAnswer: "Identifying specific information in text"
    },
    {
      question: "What is a confidence score?",
      options: [
        "Probability that prediction is correct",
        "User rating",
        "Response time",
        "Error rate"
      ],
      correctAnswer: "Probability that prediction is correct"
    },
    {
      question: "What is context in chatbots?",
      options: [
        "Information from previous interactions",
        "Server location",
        "Database schema",
        "API endpoint"
      ],
      correctAnswer: "Information from previous interactions"
    },
    {
      question: "What is sentiment analysis?",
      options: [
        "Determining emotional tone of text",
        "Spell checking",
        "Grammar correction",
        "Translation"
      ],
      correctAnswer: "Determining emotional tone of text"
    },
    {
      question: "What is a fallback response?",
      options: [
        "Default reply when intent is unclear",
        "Error message",
        "Greeting message",
        "Goodbye message"
      ],
      correctAnswer: "Default reply when intent is unclear"
    }
  ],

  "computer-vision-project": [
    {
      question: "What is computer vision?",
      options: [
        "Teaching computers to interpret visual information",
        "Designing computer screens",
        "Programming graphics",
        "Building websites"
      ],
      correctAnswer: "Teaching computers to interpret visual information"
    },
    {
      question: "What is OpenCV?",
      options: [
        "Open source computer vision library",
        "A programming language",
        "A database system",
        "A web framework"
      ],
      correctAnswer: "Open source computer vision library"
    },
    {
      question: "What is object detection?",
      options: [
        "Identifying and locating objects in images",
        "Creating objects",
        "Deleting objects",
        "Renaming files"
      ],
      correctAnswer: "Identifying and locating objects in images"
    },
    {
      question: "What is a convolutional neural network (CNN)?",
      options: [
        "Network specialized for processing images",
        "Network for text processing",
        "Database connection",
        "API framework"
      ],
      correctAnswer: "Network specialized for processing images"
    },
    {
      question: "What is image classification?",
      options: [
        "Categorizing images into classes",
        "Resizing images",
        "Converting image formats",
        "Compressing images"
      ],
      correctAnswer: "Categorizing images into classes"
    },
    {
      question: "What is a bounding box?",
      options: [
        "Rectangle around detected object",
        "Image border",
        "Error container",
        "Data structure"
      ],
      correctAnswer: "Rectangle around detected object"
    },
    {
      question: "What is image segmentation?",
      options: [
        "Dividing image into meaningful parts",
        "Splitting files",
        "Cropping images",
        "Rotating images"
      ],
      correctAnswer: "Dividing image into meaningful parts"
    },
    {
      question: "What is YOLO?",
      options: [
        "You Only Look Once - object detection algorithm",
        "A programming language",
        "A database",
        "A web server"
      ],
      correctAnswer: "You Only Look Once - object detection algorithm"
    },
    {
      question: "What is feature extraction?",
      options: [
        "Identifying distinctive patterns in images",
        "Removing images",
        "Downloading images",
        "Uploading images"
      ],
      correctAnswer: "Identifying distinctive patterns in images"
    },
    {
      question: "What is real-time processing?",
      options: [
        "Processing video frames as they arrive",
        "Processing at night",
        "Processing slowly",
        "Batch processing"
      ],
      correctAnswer: "Processing video frames as they arrive"
    }
  ],

  "machine-learning-101": [
    {
      question: "What is machine learning?",
      options: [
        "Algorithms that learn from data",
        "Manual coding",
        "Database management",
        "Web design"
      ],
      correctAnswer: "Algorithms that learn from data"
    },
    {
      question: "What are the main types of machine learning?",
      options: [
        "Supervised, Unsupervised, Reinforcement",
        "Fast, Slow, Medium",
        "Easy, Hard, Complex",
        "Small, Large, Huge"
      ],
      correctAnswer: "Supervised, Unsupervised, Reinforcement"
    },
    {
      question: "What is supervised learning?",
      options: [
        "Learning from labeled data",
        "Learning without data",
        "Learning from unlabeled data",
        "Manual programming"
      ],
      correctAnswer: "Learning from labeled data"
    },
    {
      question: "What is a training set?",
      options: [
        "Data used to train the model",
        "Testing environment",
        "Production data",
        "Configuration file"
      ],
      correctAnswer: "Data used to train the model"
    },
    {
      question: "What is a test set?",
      options: [
        "Data used to evaluate model performance",
        "Training data",
        "Validation data",
        "Production data"
      ],
      correctAnswer: "Data used to evaluate model performance"
    },
    {
      question: "What is classification?",
      options: [
        "Predicting categories",
        "Predicting numbers",
        "Clustering data",
        "Reducing dimensions"
      ],
      correctAnswer: "Predicting categories"
    },
    {
      question: "What is regression?",
      options: [
        "Predicting continuous values",
        "Predicting categories",
        "Clustering data",
        "Cleaning data"
      ],
      correctAnswer: "Predicting continuous values"
    },
    {
      question: "What is feature engineering?",
      options: [
        "Creating useful input variables",
        "Building UI features",
        "Testing features",
        "Deploying features"
      ],
      correctAnswer: "Creating useful input variables"
    },
    {
      question: "What is cross-validation?",
      options: [
        "Technique to assess model performance",
        "Data cleaning",
        "Feature selection",
        "Model deployment"
      ],
      correctAnswer: "Technique to assess model performance"
    },
    {
      question: "What is accuracy in ML?",
      options: [
        "Percentage of correct predictions",
        "Training speed",
        "Model size",
        "Data quantity"
      ],
      correctAnswer: "Percentage of correct predictions"
    }
  ],

  // Additional Dashboard Quests
  "sql-mastery-challenge": [
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Simple Question Language",
        "System Query Logic",
        "Standard Quality Language"
      ],
      correctAnswer: "Structured Query Language"
    },
    {
      question: "Which SQL command retrieves data?",
      options: ["SELECT", "GET", "FETCH", "RETRIEVE"],
      correctAnswer: "SELECT"
    },
    {
      question: "What is a JOIN?",
      options: [
        "Combining rows from multiple tables",
        "Adding new columns",
        "Deleting records",
        "Creating tables"
      ],
      correctAnswer: "Combining rows from multiple tables"
    },
    {
      question: "What is an INNER JOIN?",
      options: [
        "Returns matching rows from both tables",
        "Returns all rows from left table",
        "Returns all rows from both tables",
        "Returns no rows"
      ],
      correctAnswer: "Returns matching rows from both tables"
    },
    {
      question: "What is an aggregate function?",
      options: [
        "Function that performs calculation on set of values",
        "Function that creates tables",
        "Function that deletes data",
        "Function that formats text"
      ],
      correctAnswer: "Function that performs calculation on set of values"
    },
    {
      question: "What does GROUP BY do?",
      options: [
        "Groups rows with same values",
        "Orders results",
        "Filters results",
        "Joins tables"
      ],
      correctAnswer: "Groups rows with same values"
    },
    {
      question: "What is a subquery?",
      options: [
        "Query nested inside another query",
        "Main query",
        "Database view",
        "Stored procedure"
      ],
      correctAnswer: "Query nested inside another query"
    },
    {
      question: "What clause filters grouped results?",
      options: ["HAVING", "WHERE", "FILTER", "SELECT"],
      correctAnswer: "HAVING"
    },
    {
      question: "What is the COUNT() function?",
      options: [
        "Counts number of rows",
        "Sums values",
        "Finds average",
        "Finds maximum"
      ],
      correctAnswer: "Counts number of rows"
    },
    {
      question: "What does DISTINCT do?",
      options: [
        "Returns unique values only",
        "Returns all values",
        "Sorts results",
        "Filters results"
      ],
      correctAnswer: "Returns unique values only"
    }
  ]
};

// Helper function to get questions for a quest
export const getQuestionsForQuest = (questId: string): Question[] => {
  return questQuestionsDB[questId] || [];
};

// Helper function to check if quest has questions
export const hasQuestions = (questId: string): boolean => {
  return questId in questQuestionsDB && questQuestionsDB[questId].length > 0;
};
