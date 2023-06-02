function renderLicenseBadge(license) {
  switch (license) {
    case "":
      return ""
    default:
      return `![License](https://img.shields.io/badge/license-${license}-blue)`
}}

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

function renderLicenseSection(license) {
  switch (license) {
    case "":
      return "";
    default:
      return `
      This Project is utilizing the ${license} license. To learn more click the lisence to view.`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ---
  ${renderLicenseBadge(data.license)}
---
---
  ## Description

  ${data.description}
  ---
  ---
  ## Table of Contents
  
  *[Instalation](#Instalation)
  *[Usage](#Usage)
  *[Contribution](#Contribution)
  *[Tests](#Tests)
  ---
  ---
  ## Instalation
  
  ${data.instalation}
  ---
  ---
  ## Usage
  
  ${data.usage}
  ---
  ---
  ## Contributions
  
  ${data.contributions}
  ---
  ---
  ## Tests
  
  ${data.tests}
  ---
  ---
  ## Have Questions? Contact Me!
  
  Visit my GitHub: ${data.github}
  Contact me via Email at: ${data.email}

`;
}

module.exports = generateMarkdown