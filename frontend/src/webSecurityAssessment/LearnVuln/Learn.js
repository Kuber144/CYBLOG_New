import React from 'react';
import '../../App.css';
import HeroSection from './HeroSection';
import Footer from './Footer';
import VulnerabilityAccordion from './VulnerabilityAccordion';

function Learn() {
  const vulnerabilities = [
    {
      title: 'SQL Injection',
      content: [
        {
          type: 'paragraph',
          text: 'A SQL injection attack consists of insertion or “injection” of a SQL query via the input data from the client to the application. A successful SQL injection exploit can read sensitive data from the database, modify database data (Insert/Update/Delete), execute administration operations on the database (such as shutdown the DBMS), recover the content of a given file present on the DBMS file system and in some cases issue commands to the operating system. SQL injection attacks are a type of injection attack, in which SQL commands are injected into data-plane input in order to affect the execution of predefined SQL commands.'
        },
        {
          type: 'heading',
          text: 'SQL injection attack occurs when:'
        },
        {
          type: 'bullet',
          text: 'An unintended data enters a program from an untrusted source.'
        },
        {
          type: 'bullet',
          text: 'The data is used to dynamically construct a SQL query'
        },
        {
          type: 'heading',
          text: 'The main consequences are:'
        },
        {
          type: 'bullet',
          text: 'Confidentiality: Since SQL databases generally hold sensitive data, loss of confidentiality is a frequent problem with SQL Injection vulnerabilities.'
        },
        {
          type: 'bullet',
          text: 'Authentication: If poor SQL commands are used to check user names and passwords, it may be possible to connect to a system as another user with no previous knowledge of the password.'
        },
        {
          type: 'bullet',
          text: 'Authorization: If authorization information is held in a SQL database, it may be possible to change this information through the successful exploitation of a SQL Injection vulnerability.'
        },
        {
          type: 'bullet',
          text: 'Integrity: Just as it may be possible to read sensitive information, it is also possible to make changes or even delete this information with a SQL Injection attack.'
        },
        {
          type: 'heading',
          text: 'Preventing SQL Injection'
        },
        {
          type: 'bullet',
          text: 'User Authentication: Validating input from the user by pre-defining length, type of input, of the input field and authenticating the user.'
        },
        {
          type: 'bullet',
          text: 'Restricting access privileges of users and defining how much amount of data any outsider can access from the database. Basically, users should not be granted permission to access everything in the database.'
        },
        {
          type: 'bullet',
          text: 'Use extensive data Sanitization: All user input must be filtered by websites. Ideally, user data should be context-filtered. Email addresses, for example, should be filtered to allow only the characters permitted in an e-mail address, phone numbers should be filtered to allow only the characters permitted in a phone number, and so on.'
        },
        {
          type: 'bullet',
          text: 'Because SQL injection vulnerabilities are frequently discovered in commercial software, it is critical to keep up with updating.'
        }
      ],
      references: ['https://shorturl.at/noy48', 'https://owasp.org/www-community/attacks/SQL_Injection'],
      images: ['https://spanning.com/wp-content/uploads/2019/07/SQL-injection-attack-example.png','https://media.geeksforgeeks.org/wp-content/uploads/20230321182818/SQL-Injection.jpg']
    }, 
    {
      title: 'Broken Authentication',
      content: [
        {
          type: 'paragraph',
          text: 'Broken authentication is an umbrella term for several vulnerabilities that attackers exploit to impersonate legitimate users online. Broadly, broken authentication refers to weaknesses in two areas: session management and credential management. Both are classified as broken authentication because attackers can use either avenue to masquerade as a user: hijacked session IDs or stolen login credentials.'
        },
        {
          type: 'paragraph',
          text: 'Attackers employ a wide variety of strategies to take advantage of these weaknesses, ranging from huge credential stuffing attacks to highly targeted schemes aimed at gaining access to a specific person’s credentials.'
        },
        {
          type: 'paragraph',
          text: 'In recent years, broken authentication attacks have accounted for many of the worst data breaches, and security experts sound the alarm about this underrecognized threat. The Open Web Application Security Project (OWASP) has included it in its “Top 10” list of the biggest web application security risks since 2017. By 2020, broken authentication had climbed to the number two spot.'
        },
        {
          type: 'paragraph',
          text: 'Follow the provided links to read about various types of attacks and exploits associated with Broken Authentication.'
        }
      ],
      references: ['https://auth0.com/blog/what-is-broken-authentication/', 'https://auth0.com/blog/what-is-broken-authentication/'],
      images: ['https://www.prplbx.com/wp-content/uploads/figure5-password-reset-poisoning.png']
    }
,     
{
  title: 'Sensitive Data Exposure',
  content: [
    {
      type: 'paragraph',
      text: 'Sensitive data exposure refers to the accidental or deliberate disclosure of critical information such as personally identifiable information (PII), payment card information (PCI), electronic protected health information (ePHI), and intellectual property (IP). Organizations with inadequate data protection measures create vulnerabilities within the system, leading to sensitive data exposure.'
    },
    {
      type: 'paragraph',
      text: 'Sensitive data exposure differs from a data breach, where malicious entities exploit vulnerabilities to carry out attacks intended to steal, misuse, or destroy sensitive personal data.'
    },
    {
      type: 'heading',
      text: 'Causes of Sensitive Data Exposure:'
    },
    {
      type: 'bullet',
      text: 'No encryption or weak encryption: Applications, NAS devices, database servers, and other repositories that are unencrypted or have weak encryption protocols are vulnerable to data exposure. In such cases, attackers can view vital information readily or crack the weak encryption in place easily.'
    },
    {
      type: 'bullet',
      text: 'Insecure passwords: When user credentials are stored as plain-text documents without being hashed and salted, they can be easily misused. Hashing and salting convert passwords to cipher texts that are difficult to decipher.'
    },
    {
      type: 'bullet',
      text: 'Unsecure webpages: Web applications and cloud storage with misconfigured SSL/HTTPS security protocols can lead to data being uploaded or downloaded without any encryption. Such unencrypted data in transit can be easily intercepted and exposed.'
    },
    {
      type: 'bullet',
      text: 'Poor access controls: Providing excessive permissions to users who don\'t need them and a lack of visibility into who has access to what files, empowers users to access and share data without any accountability.'
    },
    {
      type: 'bullet',
      text: 'Misconfiguration errors: Applications\' default permissions settings are meant for maximum usability, not security. When administrators fail to update the settings according to their data security requirements or miss security updates, it can lead to data exposure.'
    }
  ],
  references: ['https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure', 'https://code-maze.com/owasp-top-10-sensitive-data-exposure/'],
  images: [
    'https://assets-global.website-files.com/5ff66329429d880392f6cba2/613856435c93721a07ed5554_Sensitive%20Data%20Exposure%20Example.png',
    'https://www.tutorialspoint.com/security_testing/images/sensitive_data_exposture.jpg'
  ]
}
,
{
  title: 'Broken Access Control',
  content: [
    {
      type: 'paragraph',
      text: 'Access control, also known as authorization, is when a web application grants or denies users access to its content and features. It sounds like a simple step in the process of setting up a system, but establishing secure and correct access control requires resources.',
    },
    {
      type: 'paragraph',
      text: 'Broken access control is a scenario in which an attacker breaks access control and can access, modify, delete or perform actions that the application would not initially allow. Many vulnerabilities can be treated as broken access control, for example, where an ordinary user can access admin-only functions by editing URLs or seeing or modifying the information of other users.',
    },
    {
      type: 'heading',
      text: 'Cases of broken access control',
    },
    {
      type: 'bullet',
      text: 'Insecure IDs: Most URLs contain specific IDs, keys, or indexes to identify users, content units, or features. An attacker can guess and modify these IDs to gain access to information that should not be available to third parties. Implementing proper access control in the server is crucial so unauthorized persons cannot access the requested data.',
    },
    {
      type: 'bullet',
      text: 'Forced browsing past access control checks: Most websites have authorized access URLs that lie deeper down in the site and should only be accessible to authenticated users. Malicious actors usually find such endpoints using the directory brute-forcing tool through trial and error. This allows attackers to access admin-only pages or paid content that can only be viewed by those who have paid.',
    },
    {
      type: 'bullet',
      text: 'File path traversal: It is a website security vulnerability that allows a threat actor to access sensitive files on the application server. It might include operating system files, application code, or data credentials for backend system files. The breach can result in third parties modifying the sensitive data or taking complete control of the application.',
    },
    {
      type: 'bullet',
      text: 'Client side caching: Browsers cache website information to reach the endpoint more quickly if the user wants to reaccess the same site. To avoid such threats, developers can use HTML meta tags to prevent browsers from storing sensitive data in their cache.',
    },
  ],
  references: ['https://owasp.org/www-community/Broken_Access_Control', 'https://owasp.org/Top10/A01_2021-Broken_Access_Control/'],
  images: ['https://prophaze.com/wp-content/uploads/2023/04/Broken-Access-Control.jpg', 'https://cheapsslsecurity.com/blog/wp-content/uploads/2022/06/broken-access-control.png'],
}
,
{
  title: 'Security Misconfiguration',
  content: [
    {
      type: 'paragraph',
      text: 'Security misconfiguration is any error or vulnerability present in the configuration of code that allows attackers access to sensitive data. There are many types of security misconfiguration, but most present the same danger: vulnerability to data breach and attackers gaining unauthorized access to data.',
    },
    {
      type: 'paragraph',
      text: 'Security misconfiguration, because it involves flaws in security configuration, can lead to a data breach and even complete system compromise. Depending on the value of the data compromised, this can have a significant negative impact on a business. Attackers may be able to exploit or even modify parts of applications by taking advantage of security misconfigurations. These security misconfiguration vulnerabilities leave a business exposed to potential attack.',
    },
    {
      type: 'heading',
      text: 'Examples of Security Misconfigurations:',
    },
    {
      type: 'bullet',
      text: 'Some concrete examples of security misconfigurations include AD misconfigurations, vulnerabilities within the Active Directory domain. These common security misconfigurations range from attackers gaining administrative privileges to issues arising from services running on hosts with multiple administrators.',
    },
    {
      type: 'bullet',
      text: 'Another example is a security misconfiguration that was discovered in JIRA, a collaboration tool. One misconfiguration exposed many companies to the vulnerability of releasing corporate and personal data. In this case, it was an authorization misconfiguration in Global Permissions that caused the security risk. These are only two of the many kinds of security misconfiguration that can affect a business.',
    },
    {
      type: 'heading',
      text: 'Types of Security Misconfiguration:',
    },
    {
      type: 'bullet',
      text: 'AD misconfiguration: which exposes administrator and domain credentials.',
    },
    {
      type: 'bullet',
      text: 'Identity access misconfiguration: which provides attackers easy access to applications.',
    },
    {
      type: 'bullet',
      text: 'API security misconfiguration: which leaves unrestricted endpoints and unprotected files.',
    },
    {
      type: 'bullet',
      text: 'Network security misconfiguration: which is incorrect configuration of an information system.',
    },
    {
      type: 'bullet',
      text: 'Cloud security misconfiguration: which leaves gaps in the cloud environment that may lead to security breach.',
    },
    {
      type: 'bullet',
      text: 'Web server misconfiguration: which often includes unnecessary default and sample files.',
    },
    {
      type: 'heading',
      text: 'Causes of Security Misconfiguration:',
    },
    {
      type: 'bullet',
      text: 'Using default credentials or default passwords provided by a vendor',
    },
    {
      type: 'bullet',
      text: 'Installing unused features',
    },
    {
      type: 'bullet',
      text: 'Directory traversal',
    },
    {
      type: 'bullet',
      text: 'Accidental security-lax coding',
    },
  ],
  references: ['https://owasp.org/www-project-mobile-top-10/2023-risks/m8-security-misconfiguration', 'https://owasp.org/www-project-top-ten/2017/A6_2017-Security_Misconfiguration'],
  images: ['https://assets-global.website-files.com/5ff66329429d880392f6cba2/61386fb6e44f2538e36ee768_What%20is%20Security%20Misconfiguration.png', 'https://assets-global.website-files.com/5ff66329429d880392f6cba2/61386fda8de78f2d81fb4b38_Security%20Misconfiguration%20examples.png'],
},

    {
      title: 'Cross Site Scripting (XSS)',
      content: [
        { type: 'paragraph', text: 'Cross-site scripting (also known as XSS) is a web security vulnerability that allows an attacker to compromise the interactions that users have with a vulnerable application. It allows an attacker to circumvent the same origin policy, which is designed to segregate different websites from each other. Cross-site scripting vulnerabilities normally allow an attacker to masquerade as a victim user, to carry out any actions that the user is able to perform, and to access any of the user\'s data. If the victim user has privileged access within the application, then the attacker might be able to gain full control over all of the application\'s functionality and data.' },
        { type: 'heading', level: 2, text: 'How does XSS work?' },
        { type: 'paragraph', text: 'Cross-site scripting works by manipulating a vulnerable web site so that it returns malicious JavaScript to users. When the malicious code executes inside a victim\'s browser, the attacker can fully compromise their interaction with the application.' },
        { type: 'heading', level: 2, text: 'Types of XSS Attacks' },
        { type: 'bullet', text: 'Reflected XSS: where the malicious script comes from the current HTTP request.' },
        { type: 'bullet', text: 'Stored XSS: where the malicious script comes from the website\'s database.' },
        { type: 'bullet', text: 'DOM-based XSS: where the vulnerability exists in client-side code rather than server-side code.' },
        { type: 'paragraph', text: 'How to find and test for XSS vulnerabilities:' },
        { type: 'paragraph', text: 'The vast majority of XSS vulnerabilities can be found quickly and reliably using Burp Suite\'s web vulnerability scanner.' },
        { type: 'paragraph', text: 'Manually testing for reflected and stored XSS normally involves submitting some simple unique input (such as a short alphanumeric string) into every entry point in the application, identifying every location where the submitted input is returned in HTTP responses, and testing each location individually to determine whether suitably crafted input can be used to execute arbitrary JavaScript. In this way, you can determine the context in which the XSS occurs and select a suitable payload to exploit it.' },
      ],
      references: ['https://portswigger.net/web-security/cross-site-scripting', 'https://owasp.org/www-community/attacks/xss/'],
      images: ['https://images.ctfassets.net/4un77bcsnjzw/6RC4KPYnw28idAirFK6C0u/ceba2c77262b57498b2c9a8bd8729576/XSS_Attack.svg'],
    },
    // Add more vulnerabilities as needed
    {
      title: 'Insecure Deserialization',
      content: [
        {
          type: 'paragraph',
          text: 'Serialization is the process of converting complex data structures, such as objects and their fields, into a "flatter" format that can be sent and received as a sequential stream of bytes. Serializing data makes it much simpler to:',
        },
        {
          type: 'bullet',
          text: 'Write complex data to inter-process memory, a file, or a database',
        },
        {
          type: 'bullet',
          text: 'Send complex data, for example, over a network, between different components of an application, or in an API call',
        },
        {
          type: 'heading',
          text: 'Serialization vs deserialization',
        },
        {
          type: 'bullet',
          text: 'Deserialization is the process of restoring this byte stream to a fully functional replica of the original object, in the exact state as when it was serialized. The website\'s logic can then interact with this deserialized object, just like it would with any other object.',
        },
        {
          type: 'bullet',
          text: 'Many programming languages offer native support for serialization. Exactly how objects are serialized depends on the language. Some languages serialize objects into binary formats, whereas others use different string formats, with varying degrees of human readability. Note that all of the original object\'s attributes are stored in the serialized data stream, including any private fields. To prevent a field from being serialized, it must be explicitly marked as "transient" in the class declaration. Be aware that when working with different programming languages, serialization may be referred to as marshalling (Ruby) or pickling (Python). These terms are synonymous with "serialization" in this context.',
        },
      ],
      references: ['https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html', 'https://portswigger.net/web-security/deserialization#'],
      images: ['https://assets-global.website-files.com/5ff66329429d880392f6cba2/613b31e6b98d5547e3f10034_Insecure%20Deserialization%20work.png', 'https://www.fastly.com/cimages/6pk8mg3yh2ee/5dfTWonqkpg4oUU2PZCqed/950b5a88cfe0c4589d6abd54eecc9a14/image4.png?auto=avif'],
    },
    {
      title: 'Vulnerable Components',
      content: [
        {
          type: 'paragraph',
          text: 'A vulnerable and outdated component is a software component that is no longer being supported by the developer, making it susceptible to security vulnerabilities. Many times, a component has known vulnerabilities that don’t get fixed due to a lack of maintainer.',
        },
        {
          type: 'paragraph',
          text: 'Applications often become vulnerable to attacks because they use outdated software components with known security vulnerabilities. Hackers can exploit these vulnerabilities to gain access to the application\'s data or to take control of the application entirely. Outdated software components are also more likely to contain security vulnerabilities, as timely patching is a vital part of security posture.',
        },
      ],
      references: ['https://learn.snyk.io/lesson/vulnerable-and-outdated-components/', 'https://owasp.org/www-project-top-ten/2017/A9_2017-Using_Components_with_Known_Vulnerabilities'],
      images: [],
    },
    {
      title: 'Missing Security Headers',
      content: [
        {
          type: 'paragraph',
          text: 'Most modern browsers ship with a built-in XSS filter. However, this setting could be turned off by default. Including the X-XSS-Protection header forces this filter to be enabled, thus providing additional protection against Cross-Site Scripting attacks.',
        },
        {
          type: 'paragraph',
          text: 'Missing Strict Transport Security header means that the application fails to prevent users from connecting to it over unencrypted connections. An attacker able to modify a legitimate user’s network traffic could bypass the application’s use of SSL/TLS encryption and use the application as a platform for attacks against its users. This attack is performed by rewriting HTTPS links as HTTP, so that if a targeted user follows a link to the site from an HTTP page, their browser never attempts to use an encrypted connection. The sslstrip tool automates this process.',
        },
        {
          type: 'bullet',
          text : 'For the steps on How to fix missing security headers, follow the given links',
        },
      ],
      references: ['https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html', 'https://help.getastra.com/en/article/how-to-add-missing-http-security-headers-1eicxdh/#:~:text=Missing%20Strict%20Transport%20Security%20header,to%20it%20over%20unencrypted%20connections'],
      images: [
        'https://media.geeksforgeeks.org/wp-content/uploads/20210611170329/7.PNG',
        'https://namanadep.files.wordpress.com/2020/09/image.png',
      ],
    }
    
    
    
  ];

  return (
    <>
      <HeroSection />
      <div className="vulnerabilities-container">
        {vulnerabilities.map((vulnerability, index) => (
          <VulnerabilityAccordion key={index} {...vulnerability} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Learn;
