function renderLicenseBadge(license)  {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

function generateMarkdown(data) {
  return `# ${data.title} 


  ## Description
  ${data.description}


  ## Usage
  ${data.usage}

  ## License 
 Licensed under the ${data.license} license.

  ## contributers
  ${data.contributers}

  ## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;