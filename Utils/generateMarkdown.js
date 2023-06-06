// makes a clickable badge
function renderLicenseBadge(license) {
  switch (license) {
    case "":
      return ""
    default:
      return `![License](https://img.shields.io/badge/license-${license}-blue)`
}}

// creates a link that is based on the license

function renderLicenseLink(license) {
  switch (license) {
    case "":
      return ""
    default:
      break
  }

    let link = ""

    switch(license) {
      case "MIT":
      link = "https://opensource.org/licenses/MIT"
      break
      case "Apache 2.0":
        link = "https://opensource.org/licenses/Apache-2.0"
        break
      case "GPLv3":
        link = "https://www.gnu.org/licenses/gpl-3.0"
        break
        case "BSD-3":
          link = "https://opensource.org/license/BSD-3-clause/"
      default:
        break
    }
    return link
}

// explains the coverage of the license

function renderLicenseSection(license) {
  switch (license) {
    case "":
      return "";
    default:
      return `
      This Project is utilizing the ${license} license. To learn more click the lisence to view.`
  }
}

// This will write the markdown file using a blueprint and uses inquire to inject the right info from the user

function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
___
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contribute](#contribute)
  * [Tests](#tests)
  ___
  ## Installation
  ${data.installation}
  ___
  ## Usage
  ${data.usage}
  ___
  ## Licenses
  ${renderLicenseSection(data.license)}
  ___
  ## Contribute
  ${data.contribute}
  ## Tests
  ${data.tests}
  ___
  ## Have Questions? Contact Me!
  
  Visit my GitHub: ${data.github}
  Contact me via Email at: ${data.email}

`;
}

module.exports = generateMarkdown