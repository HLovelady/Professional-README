// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![Badge](https://img.shields.io/badge/license-${license}-blue.svg)`
      }
      return ``;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "None") {
        return `- [License](#license)`
      }
      return ``;
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
        return `## License
        This application is covered by the ${license} license.`
      }
      return ``;
}

// function to generate markdown for README
function generatedREADME(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Content
- [Installation Instructions](#installation)
- [Usage Information](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Testing](#test)
- [Questions](#questions)

## Installation Instructions
${data.installation}

## Usage Information
${data.usage}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Testing
${data.test}


## Questions
If you have any question, Email me at: ${data.email} 
Find me on GitHub: [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generatedREADME;
