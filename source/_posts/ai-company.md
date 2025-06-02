---
title: 大模型的自我组织
tags:
  - 人工智能
  - 大语言模型
categories:
  - 技术
date: 2025-06-02 13:47:10
---


{% tpl constructing %}

这是我最近花了一天和一个晚上摸的项目。主要是为了复习{% mask %}（才不是因为忘记了）{% endmask %}一下相关接口的用法。

源码：[github](https://github.com/StickyMouse27/you_know_it_is_ai)

## ai公司

当我们需要解决复杂问题的时候，可能会发现ai的脑子不够用。

![ai简单运行结构](../images/post_images/ai-simple-structure.svg)

于是，我们可以将多个ai组织成一个公司，让他们协作完成任务。

以下是我们的ai公司的组织架构图：

![ai公司组织结构图](../images/post_images/ai-company-structure.svg)

等等，好像太复杂了！

让我们进行一些优化：

![ai公司组织架构图-初始](../images/post_images/ai-company-structure-start.svg)

现在看起来好多了。

那些优化掉的人总是需要的（毕竟我们砍掉了所有动脉）。

不过作为一个开始，还是不错的。

## 让ai把自己组织起来

HR负责公司的招聘事务。

说是招聘，其实是写promts。

例子：
 - **USER -> MANAGER:** 帮我用python写一个hello world。
 - **MANAGER -> HR:** 我司需要一名python开发专家！
 - **HR -> SYSTEM:** "python 工程师", 0.0, "【一些提示词……】"
 - **HR -> MANAGER:** 我招聘了一名python工程师。
 - **MANAGER -> PYTHON_ENGINEER:** 帮我用python写一个hello world。
 - **PYTHON_ENGINEER -> MANAGER:** 【代码】
 - **MANAGER -> USER:** 这是用python写的hello world：【代码】

这样可以让ai专人干专事。

