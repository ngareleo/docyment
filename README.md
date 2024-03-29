# docyment

## Introduction

Docyment is an experiment for using LLMs for generating documentation for projects. It's a CLI tool that uses GPT-4 to generate documentation in Markdown. 

### Prerequisite

Docyment uses OpenAI GPT-4 to generate documentation. To use it you should add an environment key labeled `OPENAI_API_KEY` into your `.env` file or os env.

## Usage

To install Docyment.

> `bun install docyment`

To setup Docyment

> `bunx docyment init`

This command will create a `docyment.config.ts` file. (Remember to add your OPENAI key into your env). To get started use this command to generate documentation.

> `bunx docyment generate`

You will notice a `docyment.md` file added next to `docyment.config.ts` with documentation about the project.

## Configuration

Docyment uses the following files for configuration:

- `docyment.config.ts`. This file is used to configure behavior of docyment.

- `.docyignore`. Add files that you'd like to exclude in your documentation.

- `.docyment`. Incase of large projects, use `.docyment` to narrow down the scope of the documentation. Let's take a large project. Adding `.docyment` file at certain points will add a `docyment.md` file at that point. This will help crate focused documentation. This will still create a file at the root level but Docyment will use other documentation to create full documentation.

## Todo

- [ ] Allow linking to external documentation
- [ ] Allow one to view in browser.


