# Branch Creation

You can create a new branch by getting the latest from the working repository (main).

Example:
`git checkout -b feature/new-feature`

# Code guidelines, styling and formating

Please write readable code and follow the appropriate guidelines and code standards of the project. You can have a look at the current components to check the code conventions, code styling and directory structure. Finally, you can validate - before commiting - the code standards by running the script `npm run validate`. This script will check your code at the below code standards:

- Check types (`npm run check-types`)
- Lint code (`npm run eslint`)
- Format code (`npm run prettier`)
- Run all the tests (`npm test`)

Keep in mind that the exact above scripts will run with the exact above order, on every Pull request.

# Pull Requests

Make a pull request as soon as you can, and mark the title with a "[WIP]" if its under development. You can create a draft pull request as well.

Creating a PR with necessary information.

- Describe your change in detail. Too much detail is better than too little. Keep in mind that you must describe your changes as the person who will read it to fully understand it without any further communication (if possible).
- Describe how you tested your change.
- Provide usefull screenshots of the change.

# PR title and commit msg

Your commit messages must meet the [conventional commit format](https://conventionalcommits.org/) as it will help both the reviewers and the entire CI/CD pipeline. However, the Pull Requests are get squashed and merged to main branch so commits will not show, only PR titles.

To make things easier, after staging your commits, **don't** use the normal git command `git commit -m "my commit message"` but run this npm script `npm run commit` instead. This script will guide you to follow the conventional commit format by answering some simple questions regarding your commit. It is not nessessary though, if you are really into conventional commit format, feel free to skip it.

# Examples

## ✅ Good PR Titles

- chore(docs): Fix button documentation
- feat(Button): Add support for keyboard navigation

## ❌ Bad PR Titles

- new tests
- fixing a bug

# Who can merge a PR?

PRs will only be merged by a member of the core team.
