---
title: 25年7月 VS Code 终端无法自动进入Python虚拟环境
date: 2025-07-17 01:19:20
tags: 
  - Python
categories: 
  - 技术
---

## 问题描述：

进入VS Code，进入“Python: 选择Python解释器”，创建或选择.venv虚拟环境，打开终端，运行`pip --version`，发现此时pip位置处于全局环境下。手动激活虚拟环境，再运行`pip --version`，此时pip位置正确。

## 应该是怎样的？

打开终端时，应该自动进入虚拟环境。

## 解决办法：

参考：

[Terminal no longer auto-activating #25291](https://github.com/microsoft/vscode-python/issues/25291)

> You may now see that when you open a new terminal, it does not auto-activate the python environment in this terminal.
>
> This issue includes information and resolution to this problem:
>
> We have decided to turn off the experiment "pythonTerminalEnvVarActivation" on VS Code Insiders. (It is still enabled for users on VS Code stable in the interim) This experiment was created a while back to implement auto-terminal activation, but proved to be buggy and highlighted that this approach is difficult to get right for every user. We are now moving over fully to the Python Environments extension as our long-term solution to all environment related tasks. This new extension will work hand in hand with the Python extension to provide a very much improved experience. Learn more about our roll out of this extension by default to Python users here.
>
> With this in mind, these are the steps to get back environment auto-activation upon opening a terminal:
>
> 1. Install the Python Environments Extension (published by Microsoft): https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-python-envs
> 2. Add `"python.useEnvironmentsExtension": true`, to your USER settings (there is a chance this setting will show as "unknown" but it works)
> 3. Final do either:
> A. Do nothing which keeps `"python-envs.terminal.autoActivationType"` to its default value `command` and the activation command will be run in each terminal on open
> B. Add `"python-envs.terminal.autoActivationType": "shellStartup"` to your settings (user or workspace) which will inject the activation script into your shell script for a more automatic activation. Shell startup is only supported for zsh, fsh, pwsh, bash, and cmd.
>Thank you everyone for your patience and feedback!