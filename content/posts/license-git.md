---
title: License file for GIT
slug: /license-git
short: Add a license file to GIT in VSCODE
date: 2019-07-23
image: license_git.jpg
tags:
    - VSCode
    - GIT
---

So, you create an Open Source project and published it to [GitHub](https://github.com). But you realize you forgot to create a LICENSE file when you [created](https://help.github.com/en/articles/adding-a-license-to-a-repository) the repository. What do you do now?

![alt text ](https://thepracticaldev.s3.amazonaws.com/i/z2ged98ohefq4pcgfuv1.jpg 'License File.')

You can copy a LICENSE file from another repository and include it in your next _commit_, but there an **EASIER** way?

![alt text](https://thepracticaldev.s3.amazonaws.com/i/xx3beul77at99q46wzsv.png 'VSCODE Extensions Marketplace.')

##VSCODE Extensions
If you are using VSCODE as your IDE, you already know there are a ton of extensions for almost everything you need. Today, I found this nifty extension, called [Licenser](https://marketplace.visualstudio.com/items?itemName=ymotongpoo.licenser) which installs a LICENSE file to your project.

Here is how it works. Install the extension from the link above. Add the following to your Settings JSON file:
`"licenser.license": "MIT"` or you can configure for other License's.

From the [Command Palette](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_command-palette), select `"licenser: Create LICENSE file"` and it automatically will install the file. **BOOM** Done!

Have a nice day.
