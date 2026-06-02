const https = require('https');

const domains = [
  'prima.com.lk', 'al-ghurair.com', 'tesco.com', 'iffco.com', 'bakhresa.com', 
  'winniespurehealth.co.ke', 'squaregroup.com', 'patanjaliayurved.net', 
  'itcportal.com', 'aashirvaad.com', 'indiagatefoods.com', 'adityabirla.com', 
  'pillsbury.com', 'laxmibhog.com', 'moreretail.in', 'shaktibhog.com'
];

async function checkLogos() {
  for (const domain of domains) {
    const url = `https://logo.clearbit.com/${domain}`;
    https.get(url, (res) => {
      console.log(`${domain}: ${res.statusCode}`);
    }).on('error', (e) => {
      console.log(`${domain}: Error`);
    });
  }
}

checkLogos();
